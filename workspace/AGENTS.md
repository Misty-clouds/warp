<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-audit-exceptions -->
# Project audit exceptions

- The YouTube embed/link URL in the open-source video experience is intentional and must be excluded from external-asset/network cleanup. Do not delete or replace it unless explicitly requested.
- External documentation URLs in `README.md` are allowed and should be left as-is.
- Self-hosted fonts use manual `@font-face` rules in `app/globals.css` (Inter + DM Mono) that point at warp.dev's exact `.woff2` builds in `/public/fonts`, with the original's unicode-ranges and size-adjusted metric fallbacks. This is intentional: `next/font` cannot reproduce the original's exact glyph metrics / subset split, and the 1:1 pixel match depends on it. Do **not** "fix" these back to `next/font` during an audit — treat them as compliant.
- **No external links to other sites.** This codebase must not contain outbound navigation links to third-party domains. Any such href (e.g. `app.warp.dev` download/login links) is replaced with the internal placeholder `"/"`. The only permitted `http(s)://` references are: the YouTube embed above, the README documentation URLs above, and the SVG `xmlns="http://www.w3.org/2000/svg"` namespace (required markup, not a link). Flag and replace any newly introduced external link.
<!-- END:project-audit-exceptions -->

<!-- BEGIN:verification-breakpoints -->
# Verification breakpoints

When verifying UI/layout/theming fidelity against the real site, always check BOTH
**1024px** and **1440px** viewport widths (not just one). 1024px is the `lg` breakpoint
edge where the desktop nav appears and where wide dropdowns/flyouts are most likely to
collide with the viewport edge; 1440px is the standard wide-desktop reference. Use chrome devtools and 
Playwright (driving system Chrome via `channel: 'chrome'` to avoid a browser download) to
load the running dev server, exercise interactive states (hover/open flyouts, etc.), and
screenshot at each width before declaring a change correct.
<!-- END:verification-breakpoints -->
