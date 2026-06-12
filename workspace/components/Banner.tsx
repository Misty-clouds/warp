"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import XIcon from "./icons/XIcon";

const STORAGE_KEY = "site-banner-dismissed";
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

// Reads the dismissed flag from localStorage on the client.
function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY) === "1";
}

// Treat as dismissed during SSR and hydration so the markup matches and the
// banner only appears once the client has confirmed it wasn't dismissed.
function getServerSnapshot() {
  return true;
}

function dismissBanner() {
  localStorage.setItem(STORAGE_KEY, "1");
  listeners.forEach((listener) => listener());
}

export default function Banner() {
  const dismissed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (dismissed) return null;

  return (
    <div
      role="banner"
      className="theme-invert relative flex w-full items-center justify-center border-b border-(--color-border) bg-(--color-surface) px-10 py-2.5 text-sm text-(--color-text)"
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
        onClick={dismissBanner}
        className="absolute right-3 flex size-7 items-center justify-center rounded-[4px] text-(--color-text-secondary) transition-colors hover:bg-(--color-text)/5 hover:text-(--color-text)"
      >
        <XIcon className="size-4" />
      </button>
    </div>
  );
}
