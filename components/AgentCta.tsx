import Image from "next/image";

const AppleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block size-4 opacity-90" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
  </svg>
);

export default function AgentCta() {
  return (
    <section className="py-0" id="home-agent-cta">
      <div className="relative overflow-hidden min-h-[480px] flex items-center justify-center">
        <div className="absolute inset-0 *:size-full *:object-cover">
          <Image
            src="/images/cta-bg.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-20 text-center">
          <h2
            className="text-pretty max-w-4xl text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--heading-weight)",
              fontSize: "clamp(1.75rem, 3.5vw, calc(var(--heading-size) * 0.7))",
              lineHeight: 1.15,
              letterSpacing: "var(--heading-letter-spacing)",
            }}
          >
            Start shipping with agents.
          </h2>
          <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="https://app.warp.dev/get_warp?package=dmg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-1.5 text-sm/7 font-medium hover:opacity-85 transition-opacity h-11 px-4 py-2 w-full sm:w-auto"
              style={{
                background: "var(--btn-bg)",
                color: "var(--btn-text-color)",
                borderRadius: "var(--btn-radius)",
              }}
            >
              Download <AppleIcon />
            </a>
            <a
              href="/contact-sales"
              className="inline-flex shrink-0 items-center justify-center gap-1 rounded-[var(--radius-xl)] bg-[var(--color-text)]/10 text-sm/7 font-medium text-[var(--color-text)] hover:bg-[var(--color-text)]/15 transition-colors h-11 px-4 py-2 w-full sm:w-auto text-white"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
