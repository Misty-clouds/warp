"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Tab {
  label: string;
  description: string;
  image: { src: string; alt: string; width: number; height: number };
}

interface Props {
  tabs: Tab[];
  autoAdvanceMs?: number;
}

export default function TerminalNativeCarousel({ tabs, autoAdvanceMs = 6000 }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(0);

  const advance = useCallback(() => {
    setActiveIndex((i) => (i + 1) % tabs.length);
    setProgressKey((k) => k + 1);
  }, [tabs.length]);

  useEffect(() => {
    const t = setTimeout(advance, autoAdvanceMs);
    return () => clearTimeout(t);
  }, [activeIndex, advance, autoAdvanceMs]);

  const selectTab = (i: number) => {
    setActiveIndex(i);
    setProgressKey((k) => k + 1);
  };

  return (
    <>
      {/* Mobile accordion */}
      <div className="rounded-lg bg-(--color-background) lg:hidden">
        {tabs.map((tab, i) => (
          <div key={tab.label} className="border-t border-border/40 first:border-t-0">
            <button
              type="button"
              onClick={() => setMobileOpen(mobileOpen === i ? -1 : i)}
              className="flex w-full cursor-pointer items-center justify-between px-4 pt-4 pb-2 text-left"
            >
              <span
                className={`text-xl/8 tracking-tight transition-colors ${
                  mobileOpen === i ? "text-(--color-text)" : "text-(--color-muted)"
                }`}
              >
                {tab.label}
              </span>
              <span className="text-lg text-(--color-muted)">
                {mobileOpen === i ? "−" : "+"}
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ${mobileOpen === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="flex flex-col gap-4 px-4 pb-6">
                  <p className="text-(length:--body-size) leading-(--body-line-height) text-(--color-text-secondary) [font-family:var(--font-body)] [font-weight:var(--body-weight)]">
                    {tab.description}
                  </p>
                  <div className="relative aspect-square w-full overflow-hidden rounded-(--img-radius)">
                    <Image
                      src={tab.image.src}
                      alt={tab.image.alt}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: side-by-side */}
      <div className="hidden overflow-hidden rounded-(--radius-lg) lg:grid lg:grid-cols-12">
        {/* Left: stacked tab list */}
        <div className="flex lg:col-span-5 lg:self-stretch">
          <div className="flex w-full flex-col">
            {tabs.map((tab, i) => (
              <div key={tab.label} className="flex-1">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => selectTab(i)}
                  onKeyDown={(e) => e.key === "Enter" && selectTab(i)}
                  className={`group/tab flex h-full w-full cursor-pointer flex-col justify-between pb-6 text-left transition-colors ${
                    i === activeIndex
                      ? "bg-text/5"
                      : "hover:bg-text/[0.02]"
                  }`}
                >
                  <div>
                    <div className="h-px w-full overflow-hidden bg-text/10">
                      {i === activeIndex ? (
                        <div
                          key={progressKey}
                          className={`h-full bg-(--color-tertiary) ${autoAdvanceMs === 6000 ? "animate-[fill-progress_6000ms_linear_forwards]" : "animate-[fill-progress_6000ms_linear_forwards]"}`}
                        />
                      ) : (
                        <div className="h-full w-0 bg-(--color-tertiary) transition-[width] duration-300" />
                      )}
                    </div>
                    <div className="px-6 pt-6">
                      <span
                        className={`tracking-tight transition-colors text-2xl/10 ${
                          i === activeIndex
                            ? "text-(--color-text)"
                            : "text-(--color-muted) group-hover/tab:text-(--color-text-secondary)"
                        }`}
                      >
                        {tab.label}
                      </span>
                    </div>
                  </div>
                  <div className="relative min-h-[26px] px-6">
                    <div className={`transition-opacity duration-300 ${i === activeIndex ? "opacity-100" : "opacity-60"}`}>
                      <p className="text-(length:--body-size) leading-(--body-line-height) text-(--color-text-secondary) [font-family:var(--font-body)] [font-weight:var(--body-weight)]">
                        {tab.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image panel */}
        <div className="lg:col-span-7 lg:self-stretch">
          <div className="relative aspect-square w-full overflow-hidden rounded-(--img-radius)">
            {tabs.map((tab, i) => (
              <div
                key={tab.label}
                className={`absolute inset-0 transition-opacity duration-300 *:h-full *:w-full ${i === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0"}`}
                aria-hidden={i !== activeIndex}
              >
                <Image
                  src={tab.image.src}
                  alt={tab.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
