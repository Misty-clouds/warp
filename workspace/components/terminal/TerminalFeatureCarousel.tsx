"use client";

import { useState, useEffect, useCallback, type CSSProperties } from "react";
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

interface BodyProps {
  tabs: Tab[];
  activeIndex: number;
  progressKey: number;
  autoAdvanceMs: number;
  onSelect: (i: number) => void;
}

function CarouselBody({
  tabs,
  activeIndex,
  progressKey,
  autoAdvanceMs,
  onSelect,
}: BodyProps) {
  return (
    <>
      <div className="flex scrollbar-none flex-row overflow-x-auto border-b border-(--color-border)/40 mask-[linear-gradient(to_right,black_calc(100%-3rem),transparent)] sm:mask-none">
        {tabs.map((tab, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={tab.label}
              className={`flex-1 ${i > 0 ? "border-l border-(--color-border)/40" : ""}`}
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => onSelect(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(i);
                  }
                }}
                className={`group/tab flex w-full min-w-40 cursor-pointer flex-col text-left transition-colors ${
                  isActive
                    ? "bg-text/5"
                    : "hover:bg-text/2"
                }`}
              >
                <div>
                  <div className="h-px w-full overflow-hidden bg-(--color-text)/10">
                    {isActive ? (
                      <div
                        key={progressKey}
                        className="h-full bg-(--color-tertiary) animate-[fill-progress_var(--fp-duration)_linear_forwards]"
                        style={{ "--fp-duration": `${autoAdvanceMs}ms` } as CSSProperties}
                      />
                    ) : (
                      <div className="h-full w-0 bg-(--color-tertiary) transition-[width] duration-300" />
                    )}
                  </div>
                  <div className="px-4 py-3">
                    <span
                      className={`text-sm/5 tracking-tight transition-colors ${
                        isActive
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
          );
        })}
      </div>

      <div className="relative aspect-16/10 w-full overflow-hidden rounded-(--img-radius)">
        {tabs.map((tab, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={tab.label}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-500 *:h-full *:w-full ${
                isActive ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
            >
              <div
                data-color="light"
                data-placement="center"
                className="relative overflow-hidden bg-(--color-panel)"
              >
                <div className="pointer-events-none relative z-20 h-full [&_img]:pointer-events-auto">
                  <div className="relative flex h-full items-center justify-center">
                    <div className="h-full w-full *:relative *:h-full *:w-full *:object-cover">
                      <Image
                        src={tab.image.src}
                        alt={tab.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 80vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <span className="absolute right-3 top-3 z-20 rounded-full bg-background/70 px-2.5 py-1 text-xs font-medium text-(--color-text) backdrop-blur-sm">
          {activeIndex + 1}/{tabs.length}
        </span>
      </div>
    </>
  );
}

export default function TerminalFeatureCarousel({
  tabs,
  autoAdvanceMs = 6000,
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

  return (
    <section
      data-component="FeatureCarousel"
      data-motion-reveal="visible"
      className="py-16"
    >
      <div
        data-component="Container"
        className="mx-auto m-4.75 flex w-full max-w-(--content-max-width) flex-col gap-10 px-6 sm:gap-16 lg:px-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none invisible absolute -left-[9999px]"
        >
          {tabs.map((tab) => (
            <div key={tab.label}>
              <div
                data-component="Text"
                className="text-(--color-text-secondary) text-sm/7 [font-family:var(--font-body)] [font-weight:var(--body-weight)] text-(length:--body-size) leading-(--body-line-height)"
              >
                <p>{tab.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          data-motion-reveal-item=""
          className="overflow-hidden rounded-lg bg-(--color-background) [--reveal-delay:0ms] lg:hidden"
        >
          <CarouselBody
            tabs={tabs}
            activeIndex={activeIndex}
            progressKey={progressKey}
            autoAdvanceMs={autoAdvanceMs}
            onSelect={selectTab}
          />
        </div>

        <div
          data-motion-reveal-item=""
          className="hidden overflow-hidden rounded-lg bg-(--color-background) [--reveal-delay:80ms] lg:flex lg:flex-col"
        >
          <CarouselBody
            tabs={tabs}
            activeIndex={activeIndex}
            progressKey={progressKey}
            autoAdvanceMs={autoAdvanceMs}
            onSelect={selectTab}
          />
        </div>
      </div>
    </section>
  );
}
