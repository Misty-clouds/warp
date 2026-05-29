"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PlayIcon from "./icons/PlayIcon";
import XMarkIcon from "./icons/XMarkIcon";
import WarpMark from "./icons/WarpMark";

const YOUTUBE_ID = "eRsoRbJs8O0";

export default function OpenSource() {
  const [open, setOpen] = useState(false);
  const [revealPhase, setRevealPhase] = useState<"idle" | "in" | "out">("idle");
  const posterRef = useRef<HTMLButtonElement>(null);

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
    const el = posterRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealPhase("in");
        const fadeOut = window.setTimeout(() => setRevealPhase("out"), 2600);
        obs.disconnect();
        return () => window.clearTimeout(fadeOut);
      },
      { threshold: 0.45 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-16" id="open-source">
      <div className="mx-auto flex w-full max-w-(--content-max-width) flex-col gap-10 px-6 sm:gap-16 lg:px-10">
        <div className="flex max-w-2xl flex-col gap-6">
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
              className="btn-hover inline-flex h-11 w-full shrink-0 items-center justify-center gap-1.5 rounded-(--btn-radius) bg-(--btn-bg) p-(--btn-padding) text-sm/7 font-medium text-(--btn-text-color) [border:var(--btn-border)] hover:opacity-85 sm:w-auto"
            >
              Read more
            </Link>
          </div>
        </div>

        <button
          ref={posterRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Play video: Warp Terminal is now open-source"
          aria-haspopup="dialog"
          className="group/video relative block aspect-video w-full cursor-pointer overflow-hidden rounded-(--img-radius) border-0 bg-(--color-surface) p-0 text-inherit"
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

          <span
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-5 transition-opacity duration-700 ease-out motion-reduce:hidden ${
              revealPhase === "in" ? "opacity-100" : "opacity-0"
            }`}
          >
            <span
              className={`flex size-28 items-center justify-center rounded-3xl bg-linear-to-br from-[#9c7bff] via-[#7b5cf0] to-[#3d2484] p-7 shadow-2xl ring-1 ring-white/15 transition-transform duration-700 ease-out sm:size-36 ${
                revealPhase === "in" ? "scale-100" : "scale-90"
              }`}
            >
              <WarpMark className="size-full text-white" />
            </span>
            <span className="inline-flex items-center gap-3 rounded-full bg-black/40 px-5 py-3 backdrop-blur-md ring-1 ring-white/10">
              <WarpMark className="size-5 text-white" />
              <span className="text-base font-medium text-white sm:text-lg">Open-Source Terminal</span>
            </span>
          </span>

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
