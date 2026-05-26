"use client";

import { useState } from "react";
import Image from "next/image";

const AppleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block size-4 opacity-90" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
  </svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
    <path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
  </svg>
);

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
                    {copied ? <CheckIcon /> : <CopyIcon />}
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
