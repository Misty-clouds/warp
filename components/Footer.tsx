import Link from "next/link";
import WarpLogoFull from "./shared/icons/WarpLogoFull";
import ExternalLinkIcon from "./shared/icons/ExternalLinkIcon";
import ShieldCheckIcon from "./shared/icons/ShieldCheckIcon";

const footerNav = [
  {
    heading: "Product",
    links: [
      { label: "Download", href: "/download" },
      { label: "Pricing", href: "/pricing" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Changelog", href: "https://docs.warp.dev/changelog", external: true },
      { label: "Docs", href: "https://docs.warp.dev/", external: true },
      { label: "Open Source", href: "https://github.com/warpdotdev/warp", external: true },
      { label: "Status", href: "https://status.warp.dev/", external: true },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Community", href: "https://docs.warp.dev/support-and-community", external: true },
      { label: "Support", href: "https://docs.warp.dev/support-and-community", external: true },
      { label: "Do Things with Warp", href: "https://dothings.warp.dev/", external: true },
      { label: "Terminus", href: "/terminus" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How We Work", href: "https://notion.warp.dev/", external: true },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/legal/terms-of-service" },
      { label: "Security", href: "/legal/security" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "X", href: "https://x.com/warpdotdev", external: true },
      { label: "GitHub", href: "https://github.com/warpdotdev", external: true },
      { label: "YouTube", href: "https://www.youtube.com/@warpdotdev", external: true },
      { label: "Slack", href: "https://go.warp.dev/join-preview" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/warpdotdev", external: true },
      { label: "Product Hunt 4.8★ (73)", href: "https://www.producthunt.com/products/warp/reviews", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pt-0" id="footer">
      <div className="bg-(--color-surface) py-(--space-section) text-(--color-text)">
        <div
          className="mx-auto w-full px-6 lg:px-10 flex flex-col gap-16"
          style={{ maxWidth: "var(--content-max-width)" }}
        >
          <div className="text-sm/7">
            <nav className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
              {footerNav.map((col) => (
                <div key={col.heading}>
                  <h3 className="font-mono text-xs/7 font-medium uppercase tracking-widest">{col.heading}</h3>
                  <ul role="list" className="mt-2 flex flex-col gap-2">
                    {col.links.map((link) => (
                      <li key={link.label} className="text-(--color-text-secondary)">
                        <a
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-1 hover:opacity-80"
                        >
                          {link.label}
                          {link.external && <ExternalLinkIcon className="size-3.5 shrink-0" />}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center justify-between gap-10 text-sm/7">
            <div className="text-(--color-muted)">
              <div className="flex flex-wrap items-center gap-4">
                <span>All Rights Reserved © 2026</span>
                <span className="inline-flex items-center gap-1.5 text-(--color-text-secondary)">
                  <ShieldCheckIcon className="size-4" />
                  SOC 2 Certified
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-(--color-text)/5 px-3 py-1 text-xs/5 text-(--color-text-secondary) transition-colors hover:bg-(--color-text)/10"
                href="https://status.warp.dev"
              >
                <span className="size-2 shrink-0 rounded-full" style={{ backgroundColor: "oklch(0.72 0.19 145)" }} />
                All Systems Operational
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
