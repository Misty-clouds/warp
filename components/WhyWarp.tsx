"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import WarpMark from "./icons/WarpMark";
import OzMark from "./icons/OzMark";
import LineChartIcon from "./icons/LineChartIcon";

const sections = [
  {
    id: "home-agent-control-warp-terminal",
    eyebrow: "Warp Terminal",
    headline: "Start in the terminal",
    description:
      "A modern, open-source agentic development environment (ADE) born out of the terminal, built to give developers the best interface to work with any coding agent.",
    ctaLabel: "Learn More",
    ctaHref: "/terminal",
    screenshot: "/images/warp-terminal-screenshot.jpg",
    screenshotAlt: "Warp terminal agent workflow",
    screenshotWidth: 1608,
    screenshotHeight: 1005,
    icon: (
      <span className="no-frame inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-[#0b0b0b] text-white shadow-[inset_0_0_0_1px_#1f1f1f]">
        <WarpMark className="size-3.5" />
      </span>
    ),
    navIcon: (active: boolean) => (
      <span className={`no-frame inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-[#0b0b0b] text-white shadow-[inset_0_0_0_1px_#1f1f1f] transition-opacity ${active ? "opacity-100" : ""}`}>
        <WarpMark className="size-3.5" />
      </span>
    ),
  },
  {
    id: "home-agent-control-oz-agent-platform",
    eyebrow: "Oz Agent Platform",
    headline: "Automate with fleets of cloud agents",
    description:
      "Connect, orchestrate, and control cloud agents to automate workflows and ship with confidence. Agent infrastructure for shared context, observability, and administration.",
    ctaLabel: "Explore Oz",
    ctaHref: "/oz",
    screenshot: "/images/oz-agent-screenshot.jpg",
    screenshotAlt: "Oz agent platform dashboard",
    screenshotWidth: 1608,
    screenshotHeight: 1005,
    icon: (
      <span className="no-frame inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-[#bda6f7] text-[#111111]">
        <OzMark className="size-4" />
      </span>
    ),
    navIcon: (active: boolean) => (
      <span className={`no-frame inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-[#bda6f7] text-[#111111] transition-opacity ${active ? "opacity-100" : "opacity-45"}`}>
        <OzMark className="size-4" />
      </span>
    ),
  },
  {
    id: "home-agent-control-warp-agent",
    eyebrow: "Warp Agent",
    headline: "Build with Warp Agent",
    description:
      "An orchestration-native coding agent that thinks in terms of tasks, tools, and context — not just conversations. Run it locally, in CI, or in the cloud.",
    ctaLabel: "Meet Warp Agent",
    ctaHref: "/agents/warp-agent",
    screenshot: "/images/warp-agent-screenshot.jpg",
    screenshotAlt: "Warp agent coding session",
    screenshotWidth: 1608,
    screenshotHeight: 1005,
    icon: (
      <span className="no-frame inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-[#1c1a26] text-[#c7aeff] shadow-[inset_0_0_0_1px_#373245]">
        <WarpMark className="size-3.5" />
      </span>
    ),
    navIcon: (active: boolean) => (
      <span className={`no-frame inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-[#1c1a26] text-[#c7aeff] shadow-[inset_0_0_0_1px_#373245] transition-opacity ${active ? "opacity-100" : "opacity-45"}`}>
        <WarpMark className="size-3.5" />
      </span>
    ),
  },
  {
    id: "home-agent-control-scale-across-your-team",
    eyebrow: "Scale Across Your Team",
    headline: "Scale across your team",
    description:
      "Centralize context, share workflows, and give every engineer in your org access to the same powerful agentic tooling. Built for teams that ship together.",
    ctaLabel: "See Team Features",
    ctaHref: "/enterprise",
    screenshot: "/images/scale-team-screenshot.jpg",
    screenshotAlt: "Team collaboration in Warp",
    screenshotWidth: 1608,
    screenshotHeight: 1005,
    icon: (
      <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-(--color-surface) text-(--color-text-secondary)">
        <LineChartIcon className="size-4" />
      </span>
    ),
    navIcon: (active: boolean) => (
      <span
        className={`flex size-6 shrink-0 items-center justify-center rounded-md transition-colors ${active ? "bg-(--color-panel) text-(--color-text)" : "bg-(--color-surface) text-(--color-text-secondary)"}`}
      >
        <LineChartIcon className="size-4" />
      </span>
    ),
  },
];

function RevealItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const delayClass = delay === 240 ? "delay-[240ms]" : delay === 160 ? "delay-[160ms]" : delay === 80 ? "delay-[80ms]" : "delay-0";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${delayClass} ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
    >
      {children}
    </div>
  );
}

export default function WhyWarp() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const articleRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section, i) => {
      const el = articleRefs.current[i];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(section.id);
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="home-agent-control"
      className="bg-(--color-background) py-(--space-section) text-(--color-text)"
    >
      <div className="mx-auto flex w-full max-w-(--content-max-width) flex-col gap-14 px-6 lg:px-10">
        <RevealItem>
          <div className="max-w-3xl">
            <div className="mb-5 text-xs font-medium tracking-[0.28em] text-(--color-text-secondary) uppercase">
              Why Warp
            </div>
            <h2 className="text-pretty text-[clamp(1.75rem,3.5vw,calc(var(--heading-size)*0.7))] leading-[1.15] text-(--color-text) font-display [font-weight:var(--heading-weight)] [letter-spacing:var(--heading-letter-spacing)]">
              Be more productive. Stay in control.
            </h2>
          </div>
        </RevealItem>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-12">
          {/* Sticky sidebar nav (desktop only) */}
          <nav className="hidden lg:sticky lg:top-24 lg:block lg:self-start" aria-label="Why Warp sections">
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`group flex min-w-max items-center gap-3 border-border/45 px-3 py-3 text-left transition-colors lg:min-w-0 lg:border-b lg:px-0 lg:py-4 ${
                      isActive
                        ? "text-(--color-text)"
                        : "text-text-secondary/70 hover:text-(--color-text)"
                    }`}
                  >
                    {section.navIcon(isActive)}
                    <span className="text-[10px] font-medium tracking-[0.28em] uppercase">
                      {section.eyebrow}
                    </span>
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Articles */}
          <div className="flex flex-col gap-20">
            {sections.map((section, i) => (
              <RevealItem key={section.id} delay={i * 80}>
                <article
                  id={section.id}
                  className="scroll-mt-28"
                  ref={(el) => { articleRefs.current[i] = el; }}
                >
                  <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex max-w-3xl flex-col gap-5">
                      <div className="flex items-center gap-3">
                        {section.icon}
                        <span className="text-xs font-medium tracking-[0.22em] text-(--color-text-secondary) uppercase">
                          {section.eyebrow}
                        </span>
                      </div>
                      <h3 className="max-w-2xl text-balance text-3xl/10 text-(--color-text) font-display [font-weight:var(--heading-weight)] [letter-spacing:var(--heading-letter-spacing)] sm:text-4xl/11">
                        {section.headline}
                      </h3>
                      <p className="max-w-3xl text-(length:--body-size) leading-(--body-line-height) text-(--color-text-secondary) font-sans">
                        {section.description}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <a
                        href={section.ctaHref}
                        className="inline-flex h-9 w-full shrink-0 items-center justify-center gap-1.5 rounded-(--btn-radius) bg-(--btn-bg) px-3 py-1 text-sm/7 font-medium text-(--btn-text-color) hover:opacity-85 sm:w-auto"
                      >
                        {section.ctaLabel}
                      </a>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-xl bg-(--color-surface) shadow-sm">
                    <Image
                      src={section.screenshot}
                      alt={section.screenshotAlt}
                      width={section.screenshotWidth}
                      height={section.screenshotHeight}
                      className="w-full h-auto"
                      quality={85}
                      sizes="(max-width: 1024px) 100vw, calc(100vw - 320px)"
                    />
                  </div>
                </article>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
