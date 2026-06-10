---
name: audit-reconstruction
description: Audit a Next.js / React website-reconstruction codebase against the reconstruct-site rules and fix violations. Trigger when the user asks to audit / lint / check / verify / validate compliance of their reconstruction work, when they ask "are my edits compliant", "find rule violations", "check for inline styles / inline SVG / external assets", when they want a compliance pass before shipping, or when they finish a reconstruction phase and want a quality gate. Companion to [[reconstruct-site]] — uses the same 7 rules: local assets only, full state coverage (hover / focus / active / scroll / touch), 100% animation fidelity, shared component reuse, SVGR icons (no inline SVG), Tailwind-only styling (no inline styles / CSS modules), proper component separation, and Next.js App Router conventions. Always reads project-level AGENTS.md / CLAUDE.md to honor designated exceptions before flagging anything.
---

# Reconstruction compliance audit

You are auditing a codebase that was (or is being) built under the [[reconstruct-site]] rules. Your job: **find every violation, separate real violations from designated exceptions, and fix what's safe to fix.**

## Pre-flight — load exceptions FIRST

Before running any check, read these (in order) and extract any designated exceptions:
1. `CLAUDE.md` at repo root
2. `AGENTS.md` at repo root
3. Any nested `CLAUDE.md` / `AGENTS.md` in subdirectories
4. `.claude/audit-exceptions.md` if it exists

Exceptions typically look like: "the X embed is intentional and must be excluded from external-asset cleanup" or "external documentation URLs in README.md are allowed." **Treat anything matching a designated exception as compliant — do not flag, do not fix.**

Keep the exception list in mind for every subsequent check. When in doubt about whether something is exempt, ask the user before flagging or fixing.

## Audit checks

Run checks in parallel where possible. For each, scope to source dirs (`app/`, `components/`, `src/`, `lib/`) — never inside `node_modules/`, `.next/`, `dist/`, `build/`, `out/`, `public/`, or `*.config.*`.

### Check 1 — External asset URLs (Rule: assets local)

Hunt for external URLs being used as assets:

```bash
# External http(s) URLs in JSX/TSX/CSS attributes that look like asset refs
rg -n --type-add 'web:*.{tsx,jsx,ts,js,css,scss}' -t web \
  -e 'src=["'\''`]https?://' \
  -e 'href=["'\''`]https?://[^"'\''`]+\.(woff2?|ttf|otf|css|ico|png|jpe?g|webp|avif|svg|gif|mp4|webm|json)' \
  -e 'url\(["'\''`]?https?://' \
  -e 'poster=["'\''`]https?://' \
  -e 'srcSet=["'\''`][^"'\''`]*https?://' \
  app/ components/ src/ lib/ styles/ 2>/dev/null
```

For each hit:
1. Is it a designated exception (YouTube/Vimeo/Spotify embed, etc.)? Skip.
2. Is it a link in copy / external docs / a `<Link>` to an external site? Skip (these aren't assets).
3. Otherwise: **download the asset to `/public`, replace the URL with the local path.**

For Next.js `<Image>` with external `src`, also remove the corresponding `remotePatterns` entry from `next.config.*` if it's no longer needed.

### Check 2 — Inline styles (Rule: Tailwind-only)

```bash
rg -n 'style=\{' app/ components/ src/ lib/ 2>/dev/null
```

Triage each hit:
- **Static literal** (`style={{ color: 'red' }}`) → convert to Tailwind class. Fix.
- **Dynamic CSS custom property** (`style={{ '--progress': pct }}`) → acceptable *only* if a CSS var is consumed by a Tailwind arbitrary value elsewhere. Flag for confirmation.
- **Dynamic visual property** (`style={{ width: pct + '%' }}`) → refactor to CSS var + arbitrary Tailwind value (`w-[var(--w)]`). Fix.
- **Spreading props** (`style={...props.style}`) → remove if the component shouldn't accept inline styles; replace with `className` passthrough. Fix.

### Check 3 — Inline SVG outside icon components (Rule: SVGR icons)

```bash
rg -n -U --multiline '<svg[\s>]' app/ components/ src/ lib/ \
  --glob '!components/icons/**' \
  --glob '!**/icons/**' 2>/dev/null
```

For each hit:
1. Extract the SVG markup
2. Create `components/icons/<IconName>.tsx` as an SVGR-style component:
   - Named export, forward `className` and `...props`
   - Replace hardcoded fills with `currentColor` unless the color is intentional
3. Replace the inline SVG at the call site with the icon component import

If the project has a different convention (e.g. `src/components/icons/`), match it. Check existing icon files for the established pattern before writing a new one.

### Check 4 — Forbidden styling approaches (Rule: Tailwind-only)

```bash
# CSS modules
rg -n "from ['\"][^'\"]*\.module\.(css|scss|sass)['\"]" app/ components/ src/ lib/ 2>/dev/null

# styled-components / emotion / vanilla-extract / stitches
rg -n "from ['\"]\
(styled-components|@emotion/[a-z-]+|@vanilla-extract/[a-z-]+|@stitches/[a-z-]+)['\"]" \
  app/ components/ src/ lib/ 2>/dev/null

# Global CSS files beyond the expected ones
fd -e css -e scss -E 'globals.css' -E 'tailwind.css' app components src styles 2>/dev/null
```

These should not exist in a reconstruction project. If found, ask before bulk-removing — there may be a justified case (e.g. a third-party component the user explicitly accepted).

### Check 5 — Interactive elements missing state coverage (Rule: state coverage)

```bash
# Interactive elements without obvious hover/focus styling on their own className
rg -n -U --multiline \
  -e '<(button|a|Link)\b[^>]*className=' \
  -e 'onClick=' \
  app/ components/ src/ lib/ 2>/dev/null
```

This check is fuzzy — you cannot fully automate it. For each interactive element:
- Open the file and inspect the `className`
- Does it (or a wrapping primitive it composes) include `hover:`, `focus-visible:`, and `active:` variants?
- Does it set `transition-*` or rely on a parent that does?

If the element is a one-off (not built on a shared primitive) and lacks state variants, flag for manual review. **Don't blindly add hover states** — you need the reference to know the correct color / transform / duration. Ask the user.

### Check 6 — Component duplication / missed sharing (Rule: shared components)

Look for repeated JSX shapes or className strings:

```bash
# Repeated long className strings (potential candidates for extraction)
rg -no 'className="[^"]{60,}"' app/ components/ src/ 2>/dev/null | \
  awk -F: '{print $NF}' | sort | uniq -c | sort -rn | head -20
```

Also scan for files that look like near-duplicates by name pattern (`Card`, `Card2`, `HeroCard`, `FeatureCard` all with similar shapes). Open the top candidates and check.

When the same className appears 3+ times across files, propose a shared component or a `cn()` constant. Don't extract aggressively — sometimes repetition is fine if the elements are semantically different and will diverge.

### Check 7 — Next.js conventions

```bash
# Plain <img> instead of next/image
rg -n '<img[\s>]' app/ components/ src/ lib/ 2>/dev/null

# <a href="/..."> for internal links (should be next/link)
rg -n '<a\s+[^>]*href=["'\'']/[^"'\'']' app/ components/ src/ lib/ 2>/dev/null

# @font-face declarations in CSS (should be next/font)
rg -n '@font-face' app/ components/ src/ lib/ styles/ 2>/dev/null

# Over-broad "use client" — at the top of a page or layout
rg -n -A1 '^["'\'']use client["'\'']' app/**/page.tsx app/**/layout.tsx 2>/dev/null
```

For each violation:
- `<img>` → `next/image` (need `width`/`height` or `fill`; check the original DOM for dimensions)
- `<a>` internal → `<Link>` from `next/link`
- `@font-face` → `next/font/local` or `next/font/google`
- Page/layout `"use client"` → audit whether the whole tree truly needs it, or whether you can push the directive down to a leaf

**Before changing anything Next.js-specific, read `node_modules/next/dist/docs/` for the current API.** The `AGENTS.md` warns this is not the Next.js you remember.

### Check 8 — Asset organization

```bash
# Assets in unexpected locations
fd -e png -e jpg -e jpeg -e webp -e avif -e svg -e woff -e woff2 -e ttf -e mp4 -e webm \
  app components src 2>/dev/null
```

Anything that isn't an icon component (`.svg.tsx`) should live in `/public`, not next to source files. Move misplaced assets; update imports.

### Check 9 — Animation package presence

If the original site has animations and `framer-motion` / `gsap` / `lenis` / `@react-spring` aren't in `package.json`, the animations are likely missing or hand-rolled badly. Check:

```bash
cat package.json | rg '"(framer-motion|gsap|lenis|@react-spring|embla-carousel|swiper|lottie-react)"' 2>/dev/null
```

If none are present but the reference site clearly animates, flag for the user.

## Reporting format

Produce a single report grouped by rule, like this:

```
RECONSTRUCTION AUDIT — <date>
Exceptions honored: <list from CLAUDE.md/AGENTS.md>

RULE 1 — Assets local
  ✗ 3 violations
    - components/Hero.tsx:42 — external image URL (cdn.example.com/hero.png)
    - app/page.tsx:18 — Google Fonts <link> tag
    - components/Footer.tsx:91 — exception (YouTube embed, designated in AGENTS.md) — SKIPPED

RULE 2 — State coverage
  ⚠ 5 candidates for manual review (listed below)

RULE 5 — Tailwind-only
  ✗ 2 violations
    - components/Card.tsx:14 — style={{ color: ... }}
    - app/about/page.tsx:8 — CSS module import

[...]

SUMMARY
  Auto-fixable: 4
  Needs confirmation: 3
  Manual review: 5
  Designated exceptions skipped: 1
```

## Fix workflow

After reporting:

1. **Auto-fix the safe ones immediately** (inline style → Tailwind class, `<img>` → `<Image>`, `<a href="/">` → `<Link>`, inline SVG → icon component).
2. **Ask before fixing the risky ones** (removing styled-components, refactoring shared components, downloading large assets, adding new dependencies).
3. **Always ask before fixing state-coverage gaps** — you need the reference to know the correct hover color / duration.
4. After fixes, **re-run the relevant checks** to confirm the violations are gone.
5. Run `pnpm lint && pnpm typecheck` (or the project's equivalent) — fixes shouldn't introduce regressions.
6. Briefly verify the dev server still boots and the touched routes render. If the project doesn't have a quick way to do this, say so explicitly rather than claiming compliance.

## Honoring exceptions

If a check flags something that matches a documented exception:
- Skip the fix
- Note it in the report as "SKIPPED — designated exception in <file>:<rule>"
- Do not remove or "clean up" the exception itself, ever, without an explicit user request

If you encounter something that *looks* like it might be an intentional exception but isn't documented, ask. Don't silently treat it as an exception, and don't auto-fix it either.

## Tooling

If the project doesn't have these yet, suggest (don't auto-install) any that would help:
- **eslint-plugin-jsx-a11y** — catches missing accessible state coverage
- **eslint-plugin-tailwindcss** — flags conflicting/dead Tailwind classes
- **jscpd** — copy-paste detection for component duplication
- **knip** — dead-code / unused export detection

Suggesting tooling is a follow-up; the audit itself runs without them.
