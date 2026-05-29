import Image from "next/image";
import AppleIcon from "./icons/AppleIcon";

export default function AgentCta() {
  return (
    <section
      id="home-agent-cta"
      data-motion-reveal="visible"
      className="py-0"
    >
      <div className="relative flex min-h-120 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 *:size-full *:object-cover">
          <Image
            src="/images/cta-bg.jpg"
            alt=""
            width={1800}
            height={945}
            sizes="100vw"
            loading="lazy"
          />
        </div>
        <div
          data-motion-reveal-target="true"
          data-motion-reveal-item=""
          className="relative z-10 flex flex-col items-center gap-8 px-6 py-20 text-center [--reveal-delay:0ms]"
        >
          <h2
            data-component="Subheading"
            className="text-pretty max-w-4xl text-white! [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] text-[clamp(1.75rem,3.5vw,calc(var(--heading-size)*0.7))] leading-[1.15] [letter-spacing:var(--heading-letter-spacing)]"
          >
            Start shipping with agents.
          </h2>
          <div
            data-component="Text"
            className="max-w-3xl text-pretty text-white/80! [font-family:var(--font-body)] [font-weight:var(--body-weight)] text-(length:--body-size) leading-(--body-line-height)"
          >
            <p>&nbsp;</p>
          </div>
          <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="https://app.warp.dev/get_warp?package=dmg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-1.5 text-sm/7 font-medium hover:opacity-85 transition-opacity w-full sm:w-auto h-11 bg-[var(--btn-bg)] text-[var(--btn-text-color)] [padding:var(--btn-padding)] rounded-[var(--btn-radius)] [text-transform:var(--btn-transform)]"
            >
              Download
              <AppleIcon className="inline-block size-4 opacity-90" />
            </a>
            <a
              href="/contact-sales"
              className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-1 rounded-xl bg-text/10 px-4 py-2 text-sm/7 font-medium text-(--color-text) transition-colors duration-(--duration-normal) hover:bg-text/15 sm:w-auto"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
