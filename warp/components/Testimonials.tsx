"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    company: "Microsoft",
    logo: "/logos/microsoft.svg",
    logoWidth: 157,
    logoHeight: 34,
    quote:
      "Turn minutes into seconds, things that would normally take me 10 minutes instead take just a few seconds to do with Warp.",
    author: "Marco Casalaina",
    role: "VP Products, Core AI and AI Futurist at Microsoft",
  },
  {
    company: "OpenAI",
    logo: "/logos/openai-testimonial.svg",
    logoWidth: 123,
    logoHeight: 34,
    quote:
      "We love how Warp supports builders through the entire software development cycle and are excited to see them continue to push the frontier.",
    author: "Marc Manara",
    role: "Head of Startups at OpenAI",
  },
  {
    company: "Stripe",
    logo: "/logos/stripe.svg",
    logoWidth: 152,
    logoHeight: 63,
    quote:
      "Claude Code + Warp is peanut butter and jelly. Warp gracefully manages juggling multiple Claude instances, plus a wide range of other tasks.",
    author: "Lucas Dickey",
    role: "Product at Stripe",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="testimonials"
      data-motion-reveal="visible"
      className="relative overflow-hidden py-20 text-(--testimonial-fg) sm:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-(--testimonial-bg)" />
      <div
        data-component="Container"
        className="relative mx-auto w-full max-w-(--content-max-width) px-6 lg:px-10"
      >
        {/* Logo tabs */}
        <div
          data-motion-reveal-item=""
          role="tablist"
          aria-label="Customer testimonials"
          className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-8 [--reveal-delay:0ms] sm:gap-x-10"
        >
          {testimonials.map((t, i) => (
            <button
              key={t.company}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-controls="testimonials-panel"
              aria-label={`Show ${t.company} testimonial`}
              onClick={() => setActive(i)}
              className="group flex min-h-12 cursor-pointer items-center justify-center rounded-full px-1 outline-none transition focus-visible:ring-2 focus-visible:ring-(--testimonial-fg) focus-visible:ring-offset-4 focus-visible:ring-offset-(--testimonial-bg)"
            >
              <span
                className={`flex h-10 w-36 items-center justify-center transition duration-200 sm:w-40 [&_img]:max-h-8 [&_img]:max-w-full [&_img]:object-contain ${active === i ? "opacity-100" : "opacity-40 group-hover:opacity-70"}`}
              >
                <Image
                  src={t.logo}
                  alt={t.company}
                  width={t.logoWidth}
                  height={t.logoHeight}
                  className="max-h-8 w-auto object-contain"
                />
              </span>
            </button>
          ))}
        </div>

        {/* Testimonial panel */}
        <figure
          id="testimonials-panel"
          role="tabpanel"
          aria-live="polite"
          data-motion-reveal-item=""
          className="relative mx-auto mt-16 min-h-96 max-w-5xl text-center [--reveal-delay:80ms] sm:mt-20 sm:min-h-112 lg:min-h-128"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.company}
              aria-hidden={active !== i}
              className={`absolute inset-0 flex flex-col items-center justify-start transition-opacity duration-500 ease-out motion-reduce:transition-none ${active === i ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              <blockquote
                className="font-display mx-auto max-w-5xl text-balance text-4xl/[1.12] font-normal tracking-tight text-(--testimonial-fg) sm:text-5xl/[1.08] lg:text-[4.5rem]/[1.05] *:first:before:content-['“'] *:last:after:content-['”']"
              >
                <p>{t.quote}</p>
              </blockquote>
              <figcaption className="mt-16 text-base/7 text-(--testimonial-muted) sm:text-lg/8">
                <span className="font-semibold text-(--testimonial-fg)">{t.author}</span>
                <span>, {t.role}</span>
              </figcaption>
            </div>
          ))}
        </figure>
      </div>
    </section>
  );
}
