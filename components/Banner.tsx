"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Banner() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(localStorage.getItem("site-banner-dismissed") === "1");
  }, []);

  if (dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    localStorage.setItem("site-banner-dismissed", "1");
  };

  return (
    <div
      role="banner"
      className="relative flex w-full items-center justify-center border-b border-black/10 bg-white px-10 py-2.5 text-sm text-gray-900"
    >
      <p className="text-center">
        Now available: Orchestrate Claude Code, Codex, and Warp Agent in Oz{" "}
        <Link
          href="/blog/multi-harness-cloud-agent-orchestration"
          className="inline-flex items-center gap-0.5 underline decoration-gray-300 underline-offset-2 transition-colors hover:decoration-gray-900"
        >
          Learn More
        </Link>
      </p>
      <button
        type="button"
        aria-label="Dismiss banner"
        onClick={dismiss}
        className="absolute right-3 flex size-7 items-center justify-center rounded text-gray-500 transition-colors hover:bg-black/5 hover:text-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="size-4"
          aria-hidden="true"
        >
          <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
        </svg>
      </button>
    </div>
  );
}
