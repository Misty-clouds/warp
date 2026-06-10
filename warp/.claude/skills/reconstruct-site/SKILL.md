---
name: reconstruct-site
description: Rebuild an existing published website as a 1:1 pixel-perfect React/Next.js replica from references (URL, outerHTML from devtools, computed CSS, screenshots, videos, or any mix). Trigger when the user wants to clone, replicate, mirror, copy, recreate, rebuild, or reconstruct a website with high fidelity; when they paste outerHTML or computed CSS from devtools with reconstruction intent; when they share a site URL asking for a replica; or when they share reference screenshots / recordings of a site to rebuild. Enforces strict rules: local asset download (no external CDNs), full state coverage (hover / focus / active / scroll / touch), 100% animation fidelity, shared component reuse, SVGR-based icon components (never inline SVG), Tailwind-only styling (no inline styles, no CSS modules), proper component separation, and current Next.js App Router conventions.
---

# Website reconstruction (1:1 fidelity)

You are reconstructing an existing published website as a pixel-perfect React / Next.js replica. The bar is: **no one can tell the difference between local and original.**

## Reference inputs

The user provides any mix of:
- **URL** to the live site — fetch it (WebFetch) for current markup
- **outerHTML** copied from devtools — authoritative DOM structure
- **CSS** (computed or stylesheets) from devtools — authoritative styling
- **Screenshots / images** — visual ground truth, especially for states not in HTML
- **Video / GIF** of interactions — for animation timing & easing

Treat outerHTML + computed CSS as the source of truth over your assumptions. When you don't have a reference for something (e.g. an unseen hover state), **ASK rather than guess**.

## Rules (non-negotiable)

### 1. Assets — all local, no exceptions
Every asset must be downloaded into `/public` (or the project's static directory):
- Images (jpg, png, webp, avif)
- Fonts (woff2, ttf) — also wire up via `next/font`
- Videos / audio
- Background images referenced from CSS
- Favicons, OG images, manifest icons
- Lottie / animation JSON

Do NOT reference external CDNs or original-site URLs in the final code.

**Exception:** third-party *embeds* the user explicitly designates (YouTube, Vimeo, Spotify, Twitter, etc.) stay external as embeds. Always ask before assuming an asset is an intentional embed vs. something to download. Check `AGENTS.md` / `CLAUDE.md` for designated exceptions.

### 2. State coverage — every interactive element
For each interactive element (button, link, input, card, nav item, etc.), implement and verify:
- **Default**
- **Hover** (`hover:`)
- **Focus / focus-visible** (`focus-visible:`)
- **Active / pressed** (`active:`)
- **Disabled** (`disabled:`)
- **Touch / tap** behavior on mobile — often differs from hover; use `@media (hover: hover)` via Tailwind's `hover:` (Tailwind v3+ already gates this) or `pointer-fine`
- **Scroll-linked** states (sticky headers, scroll-triggered reveals, parallax, progress bars)
- **Group / peer** dependent states where parent or sibling drives the visual
- **aria / data state** variants (`aria-expanded:`, `data-[state=open]:`)

Match the exact `transition-duration`, `timing-function`, and `delay` from the reference. Don't approximate as "smooth" — copy the values.

### 3. Animations — 100% fidelity
Inventory every animation in the reference: CSS keyframes, transitions, scroll-driven, intersection-triggered, page transitions, micro-interactions. Reproduce each one exactly.

Reach for packages when needed — don't reinvent:
- **framer-motion** — declarative React animations, gestures, layout animations
- **gsap** + **ScrollTrigger** — complex timelines, scroll choreography, morphing
- **lenis** — smooth scroll (very common in modern marketing sites)
- **embla-carousel** / **swiper** — carousels
- **@react-spring** — physics-based animations
- **lottie-react** — Lottie / After Effects animations

Match easing curves precisely. If the reference uses `cubic-bezier(0.65, 0, 0.35, 1)`, use that — not `ease-in-out`.

### 4. No inline SVG — use SVGR
- Convert every SVG to a React component via SVGR (`@svgr/webpack` or CLI)
- Place icon components in `components/icons/` (or the project's equivalent)
- One file per icon, named export `IconName`
- Forward `className` and `...props` so they accept Tailwind classes and a11y props
- For multi-color or themed SVGs, expose colors via `currentColor` or props — not hardcoded fills

### 5. No inline styles — Tailwind utilities only
- Zero `style={{}}` in JSX
- Zero CSS modules / styled-components / emotion / vanilla-extract
- For arbitrary values: `bg-[#1a1a1a]`, `w-[324px]`, `[mask-image:linear-gradient(...)]`
- For values that genuinely must be dynamic at runtime, set a CSS custom property and consume it via a Tailwind arbitrary value — never set the final visual property via `style`
- For complex selectors and states, use Tailwind variants: `group-hover:`, `peer-checked:`, `data-[state=open]:`, `aria-expanded:`, `has-[:checked]:`, `[&:nth-child(odd)]:`

### 6. Shared components — no duplication
Before writing a new component:
1. Search the codebase for similar existing components (grep for related class lists, JSX shapes, or names)
2. If one exists, extend or reuse it
3. If a pattern is repeated 2+ times, lift it into `components/shared/` (or the project's shared dir)

Components in `shared/` should be:
- Prop-driven (no hardcoded copy / images / colors)
- Composable (children, slot props, `asChild` where appropriate)
- Style-overridable via `className` (use `clsx` / `cn` helper to merge)

### 7. Proper component separation
- One component per file
- Components do one thing — split when a file mixes layout + data + heavy logic
- Co-locate component-specific subcomponents in a folder when they aren't shared
- Page-level files in `app/` stay thin — they compose section components from `components/`
- Keep server / client boundaries deliberate; push `"use client"` as low in the tree as possible

### 8. Next.js conventions — read the docs first
**This is not the Next.js in your training data.** Before writing routing, image, font, metadata, caching, or server / client component code:
1. Read the relevant guide in `node_modules/next/dist/docs/`
2. Heed deprecation notices
3. Default to App Router conventions unless the project explicitly uses Pages Router
4. Use `next/image` for raster images, `next/font` for fonts, `next/link` for nav
5. Mark client components with `"use client"` only when needed (state, effects, browser APIs, event handlers)
6. Use `metadata` exports for SEO; build OG images via `opengraph-image.tsx` route conventions

## Reconstruction workflow

### Phase 1 — Discover
- Fetch the URL (WebFetch) if available; save the raw HTML for reference
- Catalog every asset URL (images, fonts, videos, icons) — keep a running list
- Catalog the design system: colors, typography scale, spacing scale, border radii, shadows, breakpoints
- Catalog every interactive element and its states
- Catalog every animation with its trigger, duration, and easing

### Phase 2 — Set up foundations
- Configure `tailwind.config` with the site's exact colors, font families, spacing, breakpoints
- Wire up fonts via `next/font` (self-host if the original self-hosts; check font licensing)
- Download all assets into `/public` with sensible subdirectories
- Set up `components/icons/` and the SVGR pipeline

### Phase 3 — Build primitives
- Build shared primitives first: `Button`, `Link`, `Container`, `Section`, `Heading`, etc.
- Each primitive covers all its states upfront — don't ship a Button without hover / focus / active

### Phase 4 — Build sections
- Top to bottom of the page, section by section
- After each section, compare side-by-side with the reference at multiple breakpoints
- Don't move to the next section until the current one matches

### Phase 5 — Wire animations
- Layer animations on once layout is locked
- Test each one against the reference recording — slow it down (devtools animation panel) if you need to compare frame-by-frame

### Phase 6 — Verify
- Run the local dev server, open the reference and the local side by side
- Walk through every breakpoint (mobile, tablet, desktop, ultra-wide)
- Test every interactive state — keyboard tab through everything
- Test every animation
- Emulate touch — hover and touch states often differ
- Run lint + typecheck
- Diff `<head>`: title, meta tags, favicons, OG images, manifest

## When the reference is ambiguous

If a state, animation, or asset isn't visible in the references — **ASK, don't invent.** A "close enough" hover state is the difference between 95% and 100%, and 100% is the bar.

## Common gotchas

- **Font rendering** differs across OS — `-webkit-font-smoothing: antialiased` may be needed to match macOS rendering the original was designed on
- **Scrollbar styling** — if the original hides or styles scrollbars, replicate (`scrollbar-gutter`, `::-webkit-scrollbar`)
- **Cumulative layout shift** — `next/image` requires `width` / `height` or `fill`; reserve space to match the original's stable layout
- **Hydration mismatches** — anything that depends on `window`, `Date.now()`, `Math.random()` must run client-only or be deterministic
- **Reduced motion** — respect `prefers-reduced-motion`; the original may already
- **Color profiles** — exported assets in P3 vs sRGB can look slightly different; use the original's color space
