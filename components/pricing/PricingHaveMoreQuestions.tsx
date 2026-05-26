import Image from "next/image";
import Link from "next/link";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3.5" aria-hidden="true" style={{ display: "var(--btn-icon-display)" }}>
    <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
  </svg>
);

export default function PricingHaveMoreQuestions() {
  return (
    <section className="py-0" id="call-to-action">
      <div className="relative min-h-120 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/have-more-questions-bg.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            quality={80}
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-20 text-center">
          <h2
            className="text-pretty text-white max-w-4xl"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--heading-weight)",
              fontSize: "clamp(1.75rem, 3.5vw, calc(var(--heading-size) * 0.7))",
              lineHeight: 1.15,
              letterSpacing: "var(--heading-letter-spacing)",
            }}
          >
            Have more questions?
          </h2>
          <p
            className="text-white/80 max-w-3xl text-pretty"
            style={{
              fontSize: "var(--body-size)",
              lineHeight: "var(--body-line-height)",
            }}
          >
            Talk to our team about which plan is right for you.
          </p>
          <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/contact-sales"
              className="btn-hover inline-flex shrink-0 items-center justify-center gap-1.5 text-sm/7 font-medium hover:opacity-85 h-11 px-4 py-2 w-full sm:w-auto"
              style={{
                background: "var(--btn-bg)",
                border: "var(--btn-border)",
                color: "var(--btn-text-color)",
                padding: "var(--btn-padding)",
                borderRadius: "var(--btn-radius)",
                textTransform: "var(--btn-transform)" as React.CSSProperties["textTransform"],
              }}
            >
              Contact Sales
              <ArrowIcon />
            </Link>
            <Link
              href="https://docs.warp.dev/"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl text-sm/7 font-medium transition-colors duration-(--duration-normal) text-white hover:bg-white/10 h-11 px-4 py-2 w-full sm:w-auto"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
