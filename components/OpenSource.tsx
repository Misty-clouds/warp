import Image from "next/image";
import Link from "next/link";
import PlayIcon from "./shared/icons/PlayIcon";
import ArrowRightIcon from "./shared/icons/ArrowRightIcon";

export default function OpenSource() {
  return (
    <section className="py-(--space-section)" id="open-source">
      <div
        className="mx-auto w-full px-6 lg:px-10 flex flex-col gap-10 sm:gap-16"
        style={{ maxWidth: "var(--content-max-width)" }}
      >
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-(--color-text-secondary)">
              Open-source
            </div>
            <h2
              className="text-pretty text-(--color-text)"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: "var(--heading-weight)",
                fontSize: "clamp(1.75rem, 3.5vw, calc(var(--heading-size) * 0.7))",
                lineHeight: 1.15,
                letterSpacing: "var(--heading-letter-spacing)",
              }}
            >
              Warp Terminal is now open-source
            </h2>
          </div>
          <div
            className="text-(--color-text-secondary) text-pretty"
            style={{ fontSize: "var(--body-size)", lineHeight: "var(--body-line-height)" }}
          >
            <p>
              We&apos;re excited to build Warp alongside the community using an open-first workflow
              managed by Oz, our cloud agent orchestration platform.
            </p>
          </div>
          <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/blog/warp-is-now-open-source"
              className="btn-hover inline-flex shrink-0 items-center justify-center gap-1.5 text-sm/7 font-medium hover:opacity-85 h-11 px-4 py-2 w-full sm:w-auto"
              style={{
                background: "var(--btn-bg)",
                border: "var(--btn-border)",
                color: "var(--btn-text-color)",
                padding: "var(--btn-padding)",
                borderRadius: "var(--btn-radius)",
              }}
            >
              Read more
              <ArrowRightIcon className="size-3.5" />
            </Link>
          </div>
        </div>

        <button
          type="button"
          aria-label="Play video: Warp Terminal is now open-source"
          className="group/video relative block w-full cursor-pointer overflow-hidden border-0 bg-transparent p-0 text-inherit aspect-video rounded-[var(--img-radius)] bg-(--color-surface)"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/open-source-poster.jpg"
              alt="Warp open-source announcement video poster"
              fill
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
          </div>
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-white/95 text-black shadow-xl transition-transform duration-200 ease-out group-hover/video:scale-110">
              <PlayIcon className="size-6 translate-x-px" />
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}
