"use client";

import { useState } from "react";
import Image from "next/image";
import AppleIcon from "./icons/AppleIcon";
import CopyIcon from "./icons/CopyIcon";
import CheckmarkIcon from "./icons/CheckmarkIcon";

const slides = [
  {
    src: "/images/hero-slide-1.jpg",
    alt: "Warp agent prompt and orchestration interface",
    width: 1608,
    height: 1005,
    animationClassName: "animate-[hero-left-photo-carousel_8s_infinite]",
    caption: "Control your cloud agent workforce with central visibility, oversight, and the ability to join agent sessions with a single click.",
  },
  {
    src: "/images/hero-slide-2.jpg",
    alt: "Warp terminal with agentic coding session",
    width: 1800,
    height: 1250,
    animationClassName: "animate-[hero-left-photo-carousel_8s_infinite] [animation-delay:4s]",
    caption: "A modern, open-source agentic development environment. Run coding agents locally and in the cloud.",
  },
];

export default function Hero() {
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
    <section className="py-16" id="home-hero">
      <div className="mx-auto flex w-full max-w-(--content-max-width) flex-col gap-16 px-6 lg:px-10">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-start gap-6">
            <h1 className="max-w-5xl text-balance text-[clamp(2.5rem,5vw,var(--heading-size))] leading-[1.1] text-(--color-text) font-display [font-weight:var(--heading-weight)] [letter-spacing:var(--heading-letter-spacing)]">
              Ship better software with any agent
            </h1>
            <div className="flex max-w-3xl flex-col gap-4 text-[calc(var(--body-size)*1.125)] leading-(--body-line-height) text-(--color-text-secondary) font-sans [font-weight:var(--body-weight)]">
              <p>
                Warp is an open agentic development environment born from the terminal. Run coding agents locally and in the cloud, across any model, any harness, repo, or tool.
              </p>
            </div>
            <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
              {/* Download + brew install */}
              <div className="flex w-full items-center rounded-(--btn-radius) bg-(--color-surface) p-1 sm:w-auto">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 self-stretch rounded-(--btn-radius) rounded-r-none bg-(--btn-bg) px-5 text-sm/7 font-medium text-(--btn-text-color) transition-opacity hover:opacity-85"
                  href="https://app.warp.dev/get_warp?package=dmg"
                >
                  Download
                  <AppleIcon />
                </a>
                <div className="flex items-center justify-between gap-6 flex-1 self-stretch pl-2 border-0 bg-transparent text-(--color-text-secondary)">
                  <div className="flex items-center gap-2 pl-3">
                    <div className="text-current/60 select-none font-mono text-sm/7">$</div>
                    <span className="font-mono text-sm/7 normal-case tracking-normal">
                      brew install --cask warp
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="group relative flex size-9 items-center justify-center rounded-full hover:bg-(--color-border)"
                    aria-label="Copy brew install command"
                  >
                    {copied ? <CheckmarkIcon /> : <CopyIcon />}
                  </button>
                </div>
              </div>
              <a
                className="inline-flex shrink-0 items-center justify-center gap-1 rounded-xl bg-text/10 text-sm/7 font-medium text-(--color-text) hover:bg-text/15 transition-colors h-11 px-4 py-2 w-full sm:w-auto"
                href="/contact-sales"
              >
                Contact Sales
              </a>
            </div>
          </div>

          {/* Image carousel */}
          <div className="overflow-hidden rounded-xl outline -outline-offset-1 outline-black/5 dark:outline-white/5">
            <div className="relative grid bg-(--color-surface) sm:aspect-16/10">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`col-start-1 row-start-1 opacity-0 sm:absolute sm:inset-0 ${slide.animationClassName}`}
                >
                  <div className="*:block *:h-auto *:w-full sm:size-full sm:*:size-full sm:*:object-cover">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={slide.width}
                      height={slide.height}
                      quality={90}
                      sizes="100vw"
                      priority={i === 0}
                    />
                  </div>
                  <div className="pointer-events-none bg-black px-4 py-3 sm:absolute sm:right-auto sm:bottom-5 sm:left-5 sm:max-w-[min(32rem,calc(100%-2.5rem))] sm:rounded-lg sm:px-3 sm:py-2">
                    <p className="text-sm/6 font-medium text-white">{slide.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
