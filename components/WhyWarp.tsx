"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import WarpMark from "./shared/icons/WarpMark";
import OzMark from "./shared/icons/OzMark";

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
      <span
        className="no-frame inline-flex shrink-0 items-center justify-center size-6 rounded-md"
        style={{ backgroundColor: "#0b0b0b", color: "#ffffff", boxShadow: "inset 0 0 0 1px #1f1f1f" }}
      >
        <WarpMark className="size-3.5" />
      </span>
    ),
    navIcon: (active: boolean) => (
      <span
        className="no-frame inline-flex shrink-0 items-center justify-center size-6 rounded-md transition-opacity"
        style={{
          backgroundColor: "#0b0b0b",
          color: "#ffffff",
          boxShadow: "inset 0 0 0 1px #1f1f1f",
          opacity: active ? 1 : undefined,
        }}
      >
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
      <span
        className="no-frame inline-flex shrink-0 items-center justify-center size-6 rounded-md"
        style={{ backgroundColor: "#bda6f7", color: "#111111" }}
      >
        <OzMark className="size-4" />
      </span>
    ),
    navIcon: (active: boolean) => (
      <span
        className="no-frame inline-flex shrink-0 items-center justify-center size-6 rounded-md transition-opacity"
        style={{
          backgroundColor: "#bda6f7",
          color: "#111111",
          opacity: active ? 1 : 0.45,
        }}
      >
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
      <span
        className="no-frame inline-flex shrink-0 items-center justify-center size-6 rounded-md"
        style={{ backgroundColor: "#1c1a26", color: "#c7aeff", boxShadow: "inset 0 0 0 1px #373245" }}
      >
        <WarpMark className="size-3.5" />
      </span>
    ),
    navIcon: (active: boolean) => (
      <span
        className="no-frame inline-flex shrink-0 items-center justify-center size-6 rounded-md transition-opacity"
        style={{
          backgroundColor: "#1c1a26",
          color: "#c7aeff",
          boxShadow: "inset 0 0 0 1px #373245",
          opacity: active ? 1 : 0.45,
        }}
      >
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
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4">
          <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z" />
        </svg>
      </span>
    ),
    navIcon: (active: boolean) => (
      <span
        className="flex size-6 shrink-0 items-center justify-center rounded-md transition-colors"
        style={{
          backgroundColor: active ? "var(--color-panel)" : "var(--color-surface)",
          color: active ? "var(--color-text)" : "var(--color-text-secondary)",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4">
          <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z" />
        </svg>
      </span>
    ),
  },
];

function RevealItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: "600ms",
        transitionProperty: "opacity, transform",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
      }}
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
      <div
        className="mx-auto w-full px-6 lg:px-10 flex flex-col gap-14"
        style={{ maxWidth: "var(--content-max-width)" }}
      >
        <RevealItem>
          <div className="max-w-3xl">
            <div className="mb-5 text-xs font-medium tracking-[0.28em] text-(--color-text-secondary) uppercase">
              Why Warp
            </div>
            <h2
              className="text-pretty text-(--color-text)"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "var(--heading-weight)",
                fontSize: "clamp(1.75rem, 3.5vw, calc(var(--heading-size) * 0.7))",
                lineHeight: 1.15,
                letterSpacing: "var(--heading-letter-spacing)",
              }}
            >
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
                      <h3
                        className="max-w-2xl text-balance text-3xl/10 text-(--color-text) sm:text-4xl/11"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: "var(--heading-weight)",
                          letterSpacing: "var(--heading-letter-spacing)",
                        }}
                      >
                        {section.headline}
                      </h3>
                      <p
                        className="text-(--color-text-secondary) max-w-3xl"
                        style={{ fontFamily: "var(--font-sans)", fontSize: "var(--body-size)", lineHeight: "var(--body-line-height)" }}
                      >
                        {section.description}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <a
                        href={section.ctaHref}
                        className="inline-flex shrink-0 items-center justify-center gap-1.5 text-sm/7 font-medium hover:opacity-85 h-9 px-3 py-1 w-full sm:w-auto"
                        style={{
                          background: "var(--btn-bg)",
                          color: "var(--btn-text-color)",
                          borderRadius: "var(--btn-radius)",
                        }}
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
