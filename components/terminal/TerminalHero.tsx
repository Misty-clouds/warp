"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TerminalFeatureCarousel from "./TerminalFeatureCarousel";

const carouselTabs = [
  {
    label: "Warp Agent",
    description:
      "The built-in Warp Agent runs natively in the terminal with full context and fast iteration.",
    image: {
      src: "/images/terminal/warp-agent.png",
      alt: "Warp Agent UI",
      width: 2400,
      height: 1500,
    },
  },
  {
    label: "Claude Code",
    description:
      "Run Claude Code agents directly in Warp with shared context and fast iteration.",
    image: {
      src: "/images/terminal/claude-code.jpg",
      alt: "Claude Code in Warp",
      width: 1608,
      height: 1005,
    },
  },
  {
    label: "Codex",
    description:
      "Invoke Codex from the terminal and keep edits, plans, and files in one place.",
    image: {
      src: "/images/terminal/codex.jpg",
      alt: "Codex in Warp",
      width: 1200,
      height: 750,
    },
  },
  {
    label: "OpenCode",
    description:
      "Use OpenCode to iterate on tasks with review-ready output and quick follow-ups.",
    image: {
      src: "/images/terminal/opencode.jpg",
      alt: "OpenCode in Warp",
      width: 1608,
      height: 1005,
    },
  },
  {
    label: "Gemini",
    description:
      "Run Gemini CLI with Warp's agent tooling and keep everything in the terminal.",
    image: {
      src: "/images/terminal/gemini.jpg",
      alt: "Gemini CLI in Warp",
      width: 1608,
      height: 1005,
    },
  },
];

export default function TerminalHero() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("brew install --cask warp").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      className="relative isolate flex min-h-[75vh] flex-col justify-center overflow-hidden py-16 sm:py-24 xl:mx-4 xl:rounded-[calc(var(--radius)*4)] 2xl:mx-auto 2xl:w-[calc(100%-3rem)] 2xl:max-w-352"
      id="terminal-hero"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0">
          <Image
            src="/images/terminal/hero-bg.jpg"
            alt="Textural background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      </div>

      <div
        className="mx-auto w-full px-6 lg:px-10 relative flex flex-col items-center gap-6 text-center text-white"
        style={{ maxWidth: "var(--content-max-width)" }}
      >
        <h1
          className="text-balance text-white max-w-4xl"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: "var(--heading-weight)",
            fontSize: "clamp(2.5rem, 5vw, var(--heading-size))",
            lineHeight: 1.1,
            letterSpacing: "var(--heading-letter-spacing)",
          }}
        >
          The best place to build with agents
        </h1>

        <p
          className="max-w-3xl text-white/75"
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: "var(--body-weight)",
            fontSize: "calc(var(--body-size) * 1.125)",
            lineHeight: "var(--body-line-height)",
          }}
        >
          Ship faster in a modern terminal designed to help you go from prompt
          to production
        </p>

        <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <div className="flex items-center rounded-(--btn-radius) min-h-11 w-full sm:w-auto">
            <Link
              href="https://app.warp.dev/get_warp?package=dmg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex self-stretch shrink-0 items-center justify-center gap-1.5 rounded-l-(--btn-radius) px-5 text-sm/7 font-medium hover:opacity-85 transition-opacity"
              style={{
                background: "var(--btn-bg)",
                color: "var(--btn-text-color)",
              }}
            >
              Download
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline-block size-4 opacity-90"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
              </svg>
            </Link>

            <div className="flex items-center justify-between gap-6 rounded-full p-1 font-mono text-sm/7 bg-white/15 text-white flex-1 self-stretch rounded-l-none rounded-r-(--btn-radius) border-0 py-0 pr-0 pl-2">
              <div className="flex items-center gap-2 pl-3">
                <span className="opacity-60 select-none">$</span>
                <span>brew install --cask warp</span>
              </div>
              <button
                type="button"
                onClick={copy}
                className="group relative flex size-9 items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                aria-label="Copy brew command"
              >
                {copied ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mt-16">
        <div
          className="mx-auto w-full px-6 lg:px-10"
          style={{ maxWidth: "var(--content-max-width)" }}
        >
          <TerminalFeatureCarousel tabs={carouselTabs} autoAdvanceMs={6000} />
        </div>
      </div>
    </section>
  );
}
