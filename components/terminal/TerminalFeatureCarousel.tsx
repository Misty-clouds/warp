"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Tab {
  label: string;
  description: string;
  image: { src: string; alt: string; width: number; height: number };
  aspect?: string;
}

interface Props {
  tabs: Tab[];
  autoAdvanceMs?: number;
  aspect?: "16/10" | "square";
}

export default function TerminalFeatureCarousel({
  tabs,
  autoAdvanceMs = 6000,
  aspect = "16/10",
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

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

  const aspectClass = aspect === "square" ? "aspect-square" : "aspect-[16/10]";

  return (
    <>
      {/* Mobile accordion */}
      <div className="overflow-hidden rounded-lg bg-(--color-background) lg:hidden">
        {tabs.map((tab, i) => (
          <div
            key={tab.label}
            className="border-t border-border/40 first:border-t-0"
          >
            <button
              type="button"
              onClick={() => selectTab(i === activeIndex ? -1 : i)}
              className="flex w-full cursor-pointer items-center justify-between px-4 pt-4 pb-2 text-left"
            >
              <span
                className={`text-xl/8 tracking-tight transition-colors ${
                  i === activeIndex
                    ? "text-(--color-text)"
                    : "text-(--color-muted)"
                }`}
              >
                {tab.label}
              </span>
              <span
                className={`text-lg text-(--color-muted) transition-transform ${
                  i === activeIndex ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ${i === activeIndex ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="flex flex-col gap-4 px-4 pb-6">
                  <p className="text-sm text-(--color-text-secondary)">
                    {tab.description}
                  </p>
                  <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                    <Image
                      src={tab.image.src}
                      alt={tab.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop tabs */}
      <div className="hidden overflow-hidden rounded-lg bg-(--color-background) lg:flex lg:flex-col">
        <div className="flex scrollbar-none flex-row overflow-x-auto border-b border-border/40 mask-[linear-gradient(to_right,black_calc(100%-3rem),transparent)] sm:mask-none">
          {tabs.map((tab, i) => (
            <div
              key={tab.label}
              className={`flex-1 ${i > 0 ? "border-l border-border/40" : ""}`}
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => selectTab(i)}
                onKeyDown={(e) => e.key === "Enter" && selectTab(i)}
                className={`group/tab flex w-full cursor-pointer flex-col text-left transition-colors min-w-40 ${
                  i === activeIndex
                    ? "bg-text/5"
                    : "hover:bg-text/2"
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
                      <div className="h-full bg-(--color-tertiary) transition-[width] duration-300 w-0" />
                    )}
                  </div>
                  <div className="px-4 py-3">
                    <span
                      className={`tracking-tight transition-colors text-sm/5 ${
                        i === activeIndex
                          ? "text-(--color-text)"
                          : "text-(--color-muted) group-hover/tab:text-(--color-text-secondary)"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`relative w-full overflow-hidden rounded-sm ${aspectClass}`}>
          {tabs.map((tab, i) => (
            <div
              key={tab.label}
              className={`absolute inset-0 transition-opacity duration-300 *:h-full *:w-full ${
                i === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
              aria-hidden={i !== activeIndex}
            >
              <Image
                src={tab.image.src}
                alt={tab.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
