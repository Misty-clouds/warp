"use client";

import { useState } from "react";
import Image from "next/image";
import AppleIcon from "./shared/icons/AppleIcon";
import CopyIcon from "./shared/icons/CopyIcon";
import CheckmarkIcon from "./shared/icons/CheckmarkIcon";

const slides = [
  {
    src: "/images/hero-slide-1.jpg",
    alt: "Warp agent prompt and orchestration interface",
    width: 1608,
    height: 1005,
    delay: "0s",
    caption: "Control your cloud agent workforce with central visibility, oversight, and the ability to join agent sessions with a single click.",
  },
  {
    src: "/images/hero-slide-2.jpg",
    alt: "Warp terminal with agentic coding session",
    width: 1800,
    height: 1250,
    delay: "4s",
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
      <div
        className="mx-auto w-full px-6 lg:px-10 flex flex-col gap-16"
        style={{ maxWidth: "var(--content-max-width)" }}
      >
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-start gap-6">
            <h1
              className="text-balance text-(--color-text) max-w-5xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "var(--heading-weight)",
                fontSize: "clamp(2.5rem, 5vw, var(--heading-size))",
                lineHeight: 1.1,
                letterSpacing: "var(--heading-letter-spacing)",
              }}
            >
              Ship better software with any agent
            </h1>
            <div
              className="text-(--color-text-secondary) flex max-w-3xl flex-col gap-4"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: "var(--body-weight)",
                fontSize: "calc(var(--body-size) * 1.125)",
                lineHeight: "var(--body-line-height)",
              }}
            >
              <p>
                Warp is an open agentic development environment born from the terminal. Run coding agents locally and in the cloud, across any model, any harness, repo, or tool.
              </p>
            </div>
            <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
              {/* Download + brew install */}
              <div
                className="flex items-center p-1 w-full sm:w-auto"
                style={{ borderRadius: "var(--btn-radius)", background: "var(--color-surface)" }}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex self-stretch shrink-0 items-center justify-center gap-1.5 px-5 text-sm/7 font-medium hover:opacity-85 transition-opacity"
                  style={{
                    background: "var(--btn-bg)",
                    color: "var(--btn-text-color)",
                    borderRadius: "var(--btn-radius)",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  href="https://app.warp.dev/get_warp?package=dmg"
                >
                  Download
                  <AppleIcon />
                </a>
                <div className="flex items-center justify-between gap-6 flex-1 self-stretch pl-2 border-0 bg-transparent text-(--color-text-secondary)">
                  <div className="flex items-center gap-2 pl-3">
                    <div className="text-current/60 select-none font-mono text-sm/7">$</div>
                    <span className="font-mono text-sm/7" style={{ textTransform: "none", letterSpacing: "normal" }}>
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
                className="inline-flex shrink-0 items-center justify-center gap-1 rounded-xl bg-(--color-text)/10 text-sm/7 font-medium text-(--color-text) hover:bg-(--color-text)/15 transition-colors h-11 px-4 py-2 w-full sm:w-auto"
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
                  className="col-start-1 row-start-1 opacity-0 sm:absolute sm:inset-0"
                  style={{
                    animationName: "hero-left-photo-carousel",
                    animationDuration: "8s",
                    animationIterationCount: "infinite",
                    animationDelay: slide.delay,
                  }}
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
