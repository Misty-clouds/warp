"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PlayIcon from "./icons/PlayIcon";
import XMarkIcon from "./icons/XMarkIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";

const YOUTUBE_ID = "eRsoRbJs8O0";

export default function OpenSource() {
  const sectionRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("overflow-hidden");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open, close]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="open-source"
      data-component="VideoWithStats"
      data-motion-reveal={revealed ? "visible" : "hidden"}
      className="py-(--space-section)"
    >
      <div className="mx-auto flex w-full max-w-(--content-max-width) flex-col gap-10 px-6 sm:gap-16 lg:px-10">
        <div
          data-motion-reveal-item=""
          className="flex max-w-2xl flex-col gap-6 [--reveal-delay:0ms]"
        >
          <div className="flex flex-col gap-2">
            <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-(--color-text-secondary)">
              Open-source
            </div>
            <h2 className="text-pretty text-[clamp(1.75rem,3.5vw,calc(var(--heading-size)*0.7))] leading-[1.15] text-(--color-text) font-display [font-weight:var(--heading-weight)] [letter-spacing:var(--heading-letter-spacing)]">
              Warp Terminal is now open-source
            </h2>
          </div>
          <div className="text-pretty text-(length:--body-size) leading-(--body-line-height) text-(--color-text-secondary)">
            <p>
              We&apos;re excited to build Warp alongside the community using an open-first workflow
              managed by Oz, our cloud agent orchestration platform.
            </p>
          </div>
          <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/blog/warp-is-now-open-source"
              className="btn-hover inline-flex h-11 w-full shrink-0 items-center justify-center gap-1.5 rounded-(--btn-radius) bg-(--btn-bg) p-(--btn-padding) text-sm/7 font-medium text-(--btn-text-color) [border:var(--btn-border)] [text-transform:var(--btn-transform)] hover:opacity-85 sm:w-auto"
            >
              Read more
              <ArrowRightIcon className="size-3.5 [display:var(--btn-icon-display)]" />
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Play video: Warp Terminal is now open-source"
          aria-haspopup="dialog"
          data-motion-reveal-item=""
          className="group/video relative block aspect-video w-full cursor-pointer overflow-hidden rounded-(--img-radius) border-0 bg-(--color-surface) p-0 text-inherit [--reveal-delay:80ms]"
        >
          <div className="absolute inset-0 *:size-full *:object-cover">
            <Image
              src="/images/open-source-poster.jpg"
              alt="Warp open-source announcement video poster"
              fill
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
          </div>
          <span aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

          <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-white/95 text-black shadow-xl transition-transform duration-200 ease-out group-hover/video:scale-110">
              <PlayIcon className="size-6 translate-x-px" />
            </span>
          </span>
        </button>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Warp Terminal is now open-source"
          onClick={close}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close video"
            className="absolute right-4 top-4 flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <XMarkIcon className="size-5" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl"
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
              title="Warp Terminal is now open-source"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 size-full border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}
