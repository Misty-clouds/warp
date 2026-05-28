"use client";

import { useState } from "react";

interface DottedTooltipProps {
  children: React.ReactNode;
  tooltip: string;
}

export default function DottedTooltip({ children, tooltip }: DottedTooltipProps) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline">
      <span
        className="cursor-pointer decoration-text-secondary/50 decoration-dotted underline underline-offset-4"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </span>
      <span
        className={`pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max max-w-60 rounded-md bg-(--color-text) px-3 py-1.5 text-xs/5 text-(--color-background) shadow-lg transition-opacity duration-150 ${open ? "opacity-100" : "opacity-0"}`}
      >
        {tooltip}
      </span>
    </span>
  );
}
