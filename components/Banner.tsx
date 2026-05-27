"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import XIcon from "./icons/XIcon";

export default function Banner() {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDismissed = localStorage.getItem("site-banner-dismissed") === "1";
    setDismissed(isDismissed);
  }, []);

  if (!mounted || dismissed) return null;

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
          className="link-underline-reveal inline-flex items-center gap-0.5"
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
        <XIcon className="size-4" />
      </button>
    </div>
  );
}
