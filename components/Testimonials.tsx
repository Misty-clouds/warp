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
      className="relative overflow-hidden py-20 sm:py-28"
      id="testimonials"
      style={
        {
          "--testimonial-bg": "var(--color-accent-purple)",
          "--testimonial-fg": "var(--color-background)",
          "--testimonial-muted": "color-mix(in oklch, var(--color-background) 65%, transparent)",
          color: "var(--testimonial-fg)",
        } as React.CSSProperties
      }
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[var(--testimonial-bg)]" />
      <div
        className="mx-auto w-full px-6 lg:px-10 relative"
        style={{ maxWidth: "var(--content-max-width)" }}
      >
        {/* Logo tabs */}
        <div
          className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-8 sm:gap-x-10"
          role="tablist"
          aria-label="Customer testimonials"
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
              className="group flex min-h-12 cursor-pointer items-center justify-center rounded-full px-1 outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--testimonial-fg)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--testimonial-bg)]"
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
                  style={{ color: "transparent" }}
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
          className="relative mx-auto mt-16 min-h-[24rem] max-w-5xl text-center sm:mt-20 sm:min-h-[28rem] lg:min-h-[32rem]"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.company}
              aria-hidden={active !== i}
              className={`absolute inset-0 flex flex-col items-center justify-start transition-opacity duration-500 ease-out motion-reduce:transition-none ${active === i ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              <blockquote
                className="font-display mx-auto max-w-5xl text-balance text-4xl/[1.12] font-normal tracking-tight text-[var(--testimonial-fg)] sm:text-5xl/[1.08] lg:text-[4.5rem]/[1.05] [&>p]:before:content-['“'] [&>p]:after:content-['”']"
              >
                <p>{t.quote}</p>
              </blockquote>
              <figcaption className="mt-16 text-base/7 text-[var(--testimonial-muted)] sm:text-lg/8">
                <span className="font-semibold text-[var(--testimonial-fg)]">{t.author}</span>
                <span>, {t.role}</span>
              </figcaption>
            </div>
          ))}
        </figure>
      </div>
    </section>
  );
}
