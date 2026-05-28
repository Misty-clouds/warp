"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Tab {
  label: string;
  description: string;
  color?: "neutral" | "dark" | "light";
  image: { src: string; alt: string; width: number; height: number };
}

interface Props {
  tabs: Tab[];
  autoAdvanceMs?: number;
}

const colorBgClass: Record<NonNullable<Tab["color"]>, string> = {
  neutral: "bg-(--color-surface)",
  dark: "bg-(--color-background)",
  light: "bg-(--color-panel)",
};

function ImagePanel({
  tab,
  sizes,
}: {
  tab: Tab;
  sizes: string;
}) {
  const bg = colorBgClass[tab.color ?? "neutral"];
  return (
    <div
      data-color={tab.color ?? "neutral"}
      data-placement="full"
      className={`group relative overflow-hidden ${bg}`}
    >
      <div className="pointer-events-none relative z-20 h-full [&_img]:pointer-events-auto">
        <div className="relative flex h-full items-center justify-center">
          <Image
            src={tab.image.src}
            alt={tab.image.alt}
            fill
            className="object-cover"
            sizes={sizes}
          />
        </div>
      </div>
    </div>
  );
}

export default function TerminalNativeCarousel({
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

  const toggleMobile = (i: number) => {
    if (i === activeIndex) {
      // Tapping the open one collapses; keep activeIndex but render closed
      setActiveIndex(-1);
    } else {
      selectTab(i);
    }
  };

  return (
    <>
      {/* Mobile accordion */}
      <div className="rounded-(--radius-lg) bg-(--color-background) lg:hidden">
        {tabs.map((tab, i) => {
          const isOpen = i === activeIndex;
          return (
            <div
              key={tab.label}
              className="border-t border-(--color-border)/40 first:border-t-0"
            >
              <button
                type="button"
                onClick={() => toggleMobile(i)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between px-4 pt-4 pb-2 text-left"
              >
                <span
                  className={`text-xl/8 tracking-tight transition-colors duration-(--duration-normal) ${
                    isOpen ? "text-(--color-text)" : "text-(--color-muted)"
                  }`}
                >
                  {tab.label}
                </span>
                <span
                  className="text-lg text-(--color-muted) transition-transform duration-(--duration-normal)"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-(--duration-slow) ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-4 px-4 pb-6">
                    <p className="text-(length:--body-size) leading-(--body-line-height) text-(--color-text-secondary) [font-family:var(--font-body)] [font-weight:var(--body-weight)]">
                      {tab.description}
                    </p>
                    <div className="relative aspect-square w-full overflow-hidden rounded-(--img-radius) [&>*]:h-full [&>*]:w-full">
                      <ImagePanel tab={tab} sizes="100vw" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: side-by-side tabs + image panel */}
      <div className="hidden overflow-hidden rounded-(--radius-lg) bg-(--color-background) lg:grid lg:grid-cols-12">
        <div className="flex lg:col-span-5 lg:self-stretch">
          <div className="flex w-full flex-col">
            {tabs.map((tab, i) => {
              const isActive = i === activeIndex;
              return (
                <div key={tab.label} className="flex-1">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => selectTab(i)}
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") && selectTab(i)
                    }
                    className={`group/tab flex h-full w-full cursor-pointer flex-col justify-between pb-6 text-left transition-colors duration-(--duration-normal) ${
                      isActive
                        ? "bg-text/5"
                        : "hover:bg-text/[0.02] focus-visible:bg-text/[0.02]"
                    }`}
                  >
                    <div>
                      <div className="h-px w-full overflow-hidden bg-text/10">
                        {isActive ? (
                          <div
                            key={progressKey}
                            className="h-full bg-(--color-tertiary) animate-[fill-progress_6000ms_linear_forwards]"
                          />
                        ) : (
                          <div className="h-full w-0 bg-(--color-tertiary) transition-[width] duration-(--duration-normal)" />
                        )}
                      </div>
                      <div className="px-6 pt-6">
                        <span
                          className={`text-2xl/10 tracking-tight transition-colors duration-(--duration-normal) ${
                            isActive
                              ? "text-(--color-text)"
                              : "text-(--color-muted) group-hover/tab:text-(--color-text-secondary)"
                          }`}
                        >
                          {tab.label}
                        </span>
                      </div>
                    </div>
                    <div className="relative min-h-[26px] px-6">
                      <div
                        className={`transition-opacity duration-(--duration-slow) ${
                          isActive ? "opacity-100" : "opacity-60"
                        }`}
                      >
                        <p className="text-(length:--body-size) leading-(--body-line-height) text-(--color-text-secondary) [font-family:var(--font-body)] [font-weight:var(--body-weight)]">
                          {tab.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 lg:self-stretch">
          <div className="relative aspect-square w-full overflow-hidden rounded-(--img-radius)">
            {tabs.map((tab, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={tab.label}
                  aria-hidden={!isActive}
                  className={`absolute inset-0 transition-opacity duration-(--duration-slow) [&>*]:h-full [&>*]:w-full ${
                    isActive ? "z-10 opacity-100" : "z-0 opacity-0"
                  }`}
                >
                  <ImagePanel
                    tab={tab}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
