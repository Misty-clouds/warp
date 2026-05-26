import Image from "next/image";
import AppleIcon from "./icons/AppleIcon";

export default function AgentCta() {
  return (
    <section className="py-0" id="home-agent-cta">
      <div className="relative overflow-hidden min-h-120 flex items-center justify-center">
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
          <h2 className="max-w-4xl text-pretty text-[clamp(1.75rem,3.5vw,calc(var(--heading-size)*0.7))] leading-[1.15] text-white [font-family:var(--font-display)] [font-weight:var(--heading-weight)] [letter-spacing:var(--heading-letter-spacing)]">
            Start shipping with agents.
          </h2>
          <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="https://app.warp.dev/get_warp?package=dmg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-1.5 rounded-(--btn-radius) bg-(--btn-bg) px-4 py-2 text-sm/7 font-medium text-(--btn-text-color) transition-opacity hover:opacity-85 sm:w-auto"
            >
              Download <AppleIcon />
            </a>
            <a
              href="/contact-sales"
              className="inline-flex shrink-0 items-center justify-center gap-1 rounded-xl bg-white/10 text-sm/7 font-medium text-white hover:bg-white/15 transition-colors h-11 px-4 py-2 w-full sm:w-auto"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
