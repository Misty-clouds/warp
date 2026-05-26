import Image from "next/image";
import Link from "next/link";

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-6 translate-x-[1px]">
    <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3.5" aria-hidden="true">
    <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
  </svg>
);

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
              <ArrowIcon />
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
              <PlayIcon />
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}
