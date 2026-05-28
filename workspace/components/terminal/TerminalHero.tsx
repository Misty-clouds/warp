"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TerminalFeatureCarousel from "./TerminalFeatureCarousel";
import AppleIcon from "@/components/icons/AppleIcon";
import CopyIcon from "@/components/icons/CopyIcon";
import CheckmarkIcon from "@/components/icons/CheckmarkIcon";

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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("brew install --cask warp");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silent fail
    }
  };

  return (
    <section
      id="terminal-hero"
      data-motion-reveal="visible"
      className="relative isolate flex min-h-[75vh] flex-col justify-center overflow-hidden py-16 sm:py-24 xl:mx-4 xl:rounded-[calc(var(--radius)*4)] 2xl:mx-auto 2xl:w-[calc(100%-3rem)] 2xl:max-w-352"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0">
          <Image
            src="/images/terminal/hero-bg.jpg"
            alt="Textural background"
            fill
            sizes="100vw"
            className="size-full object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      </div>

      <div
        data-component="Container"
        className="relative mx-auto flex w-full max-w-(--content-max-width) flex-col items-center gap-6 px-6 text-center text-white lg:px-10"
      >
        <h1
          data-component="Heading"
          data-motion-reveal-item=""
          className="max-w-4xl text-balance text-white [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] text-[clamp(2.5rem,5vw,var(--heading-size))] leading-[1.1] [letter-spacing:var(--heading-letter-spacing)] [--reveal-delay:0ms]"
        >
          The best place to build with agents
        </h1>

        <div
          data-component="Text"
          data-motion-reveal-item=""
          className="max-w-3xl text-white/75 [font-family:var(--font-body)] [font-weight:var(--body-weight)] text-[calc(var(--body-size)*1.125)] leading-(--body-line-height) [--reveal-delay:80ms]"
        >
          <p>
            Ship faster in a modern terminal designed to help you go from prompt
            to production
          </p>
        </div>

        <div
          data-motion-reveal-item=""
          className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center [--reveal-delay:160ms]"
        >
          <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <div className="flex min-h-11 w-full items-center rounded-(--btn-radius) sm:w-auto">
              <Link
                href="https://app.warp.dev/get_warp?package=dmg"
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="download in hero clicked"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 self-stretch rounded-l-(--btn-radius) border-0 bg-(--btn-bg) px-5 text-sm/7 font-medium text-(--btn-text-color) [text-transform:var(--btn-transform)] transition-opacity hover:opacity-85"
              >
                Download
                <AppleIcon className="inline-block size-4 opacity-90" />
              </Link>

              <div className="flex flex-1 items-center justify-between gap-6 self-stretch rounded-full rounded-l-none rounded-r-(--btn-radius) border-0 bg-white/15 py-0! pr-0! pl-2! font-mono text-sm/7 text-white">
                <div className="flex items-center gap-2 pl-3">
                  <div className="select-none text-current/60">$</div>
                  <span className="normal-case tracking-normal">
                    brew install --cask warp
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  data-track-event="brew install in header clicked "
                  aria-label="Copy brew install command"
                  className="group relative flex size-9 items-center justify-center rounded-full after:absolute after:-inset-1 hover:bg-(--color-border) after:pointer-fine:hidden"
                >
                  {copied ? <CheckmarkIcon /> : <CopyIcon />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mt-16">
        <TerminalFeatureCarousel tabs={carouselTabs} autoAdvanceMs={6000} />
      </div>
    </section>
  );
}
