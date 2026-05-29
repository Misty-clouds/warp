import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

export default function PricingHaveMoreQuestions() {
  return (
    <section className="py-0" id="call-to-action">
      <div className="relative flex min-h-120 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 *:size-full *:object-cover">
          <Image
            src="/photos/1.webp"
            alt=""
            width={1800}
            height={945}
            sizes="100vw"
            quality={75}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-20 text-center">
          <h2 className="max-w-4xl text-pretty text-[clamp(1.75rem,3.5vw,calc(var(--heading-size)*0.7))] leading-[1.15] text-white! [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [letter-spacing:var(--heading-letter-spacing)]">
            Have more questions?
          </h2>
          <div className="max-w-3xl text-pretty text-(length:--body-size) leading-(--body-line-height) text-white/80! [font-family:var(--font-body)] [font-weight:var(--body-weight)]">
            <p>Talk to our team about which plan is right for you.</p>
          </div>
          <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/contact-sales"
              className="btn-hover inline-flex h-11 w-full shrink-0 items-center justify-center gap-1.5 rounded-(--btn-radius) bg-(--btn-bg) p-(--btn-padding) text-sm/7 font-medium text-(--btn-text-color) [border:var(--btn-border)] [text-transform:var(--btn-transform)] hover:opacity-85 sm:w-auto"
            >
              Contact Sales
              <ArrowRightIcon className="size-3.5" />
            </Link>
            <Link
              href="https://docs.warp.dev/"
              className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm/7 font-medium text-white transition-colors duration-(--duration-normal) hover:bg-white/10 sm:w-auto"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
