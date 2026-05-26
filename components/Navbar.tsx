"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import WarpLogoFull from "./shared/icons/WarpLogoFull";
import WarpMark from "./shared/icons/WarpMark";
import OzMark from "./shared/icons/OzMark";

const AppleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block size-4 opacity-90" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block size-4">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ChevronDown = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
    <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
);

const ChevronRight = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

const ChevronDownLg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-5 opacity-50 transition-transform group-open:rotate-180">
    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
  </svg>
);

type FlyoutItem = {
  label: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

const productsItems: FlyoutItem[] = [
  {
    label: "Warp Terminal",
    description: "A modern terminal for agentic coding",
    href: "/terminal",
    icon: (
      <span className="no-frame inline-flex shrink-0 items-center justify-center size-6 rounded-md" style={{ backgroundColor: "#0b0b0b", color: "#ffffff", boxShadow: "inset 0 0 0 1px #1f1f1f" }}>
        <WarpMark className="size-3.5" />
      </span>
    ),
  },
  {
    label: "Warp Agent",
    description: "The orchestration-native coding agent",
    href: "/agents/warp-agent",
    icon: (
      <span className="no-frame inline-flex shrink-0 items-center justify-center size-6 rounded-md" style={{ backgroundColor: "#1c1a26", color: "#c7aeff", boxShadow: "inset 0 0 0 1px #373245" }}>
        <WarpMark className="size-3.5" />
      </span>
    ),
  },
  {
    label: "Oz Agent Platform",
    description: "The cloud orchestration platform",
    href: "/oz",
    icon: (
      <span className="no-frame inline-flex shrink-0 items-center justify-center size-6 rounded-md" style={{ backgroundColor: "#bda6f7", color: "#111111" }}>
        <OzMark className="size-4" />
      </span>
    ),
  },
];

const solutionsItems: FlyoutItem[] = [
  {
    label: "Financial Services",
    description: "Secure, compliant AI development",
    href: "/enterprise/financial-services",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" /></svg>,
  },
  {
    label: "Insurance",
    description: "Modernize policy & claims systems",
    href: "/enterprise/insurance",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" /></svg>,
  },
  {
    label: "Telecommunications",
    description: "Scale with your network",
    href: "/enterprise/telecommunications",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z" /></svg>,
  },
];

const resourceDevItems: FlyoutItem[] = [
  { label: "Docs", description: "API docs and guides", href: "https://docs.warp.dev/", icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z" /></svg> },
  { label: "Blog", description: "News and product updates", href: "/blog", icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z" /></svg> },
  { label: "Community", description: "Get help and connect", href: "https://docs.warp.dev/support-and-community", icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z" /></svg> },
  { label: "Events", description: "Webinars and sessions", href: "https://luma.com/warpdotdev", icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z" /></svg> },
  { label: "Changelog", description: "What's new in Warp", href: "https://docs.warp.dev/changelog", icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z" /></svg> },
  { label: "Roadmap", description: "See what we're building next", href: "https://github.com/warpdotdev/warp/issues", icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z" /></svg> },
  { label: "Support", description: "Help and issue tracking", href: "https://docs.warp.dev/support-and-community", icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" /></svg> },
];

const resourceCompanyItems: FlyoutItem[] = [
  { label: "About", description: "Our mission and team", href: "/about", icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z" /></svg> },
  { label: "How We Work", description: "Our culture and values", href: "https://notion.warp.dev/", icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z" /></svg> },
  { label: "Careers", description: "Join the team at Warp", href: "/careers", icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z" /></svg> },
  { label: "Press", description: "Media coverage and press kit", href: "/press", icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M88,112a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H96A8,8,0,0,1,88,112Zm8,40h80a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM232,64V184a24,24,0,0,1-24,24H32A24,24,0,0,1,8,184.11V88a8,8,0,0,1,16,0v96a8,8,0,0,0,16,0V64A16,16,0,0,1,56,48H216A16,16,0,0,1,232,64Zm-16,0H56V184a23.84,23.84,0,0,1-1.37,8H208a8,8,0,0,0,8-8Z" /></svg> },
  { label: "Newsroom", description: "Announcements and press releases", href: "/newsroom", icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z" /></svg> },
];

const enterpriseItems: FlyoutItem[] = [
  { label: "Enterprise", description: "Warp for large engineering teams", href: "/enterprise", icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z" /></svg> },
  { label: "Security", description: "Enterprise-grade security and compliance", href: "/security", icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" /></svg> },
  { label: "Customers", description: "Teams shipping faster with Warp", href: "/customers", icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-4"><path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z" /></svg> },
];

function FlyoutItemRow({ item, external }: { item: FlyoutItem; external?: boolean }) {
  return (
    <a
      href={item.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-start gap-3 rounded-[calc(var(--radius)*1.5)] p-3 hover:bg-text/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-text)"
    >
      <span className="mt-0.5 inline-flex shrink-0 items-center justify-center size-6 rounded-md bg-text/5 text-(--color-text-secondary) ring-1 ring-inset ring-(--color-border)">
        {item.icon}
      </span>
      <span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-(--color-text)">{item.label}</span>
        <span className="block text-sm text-(--color-muted)">{item.description}</span>
      </span>
    </a>
  );
}

function FlyoutItemProduct({ item }: { item: FlyoutItem }) {
  return (
    <a
      href={item.href}
      className="group flex items-start gap-3 rounded-[calc(var(--radius)*1.5)] p-3 hover:bg-text/5"
    >
      <span className="mt-0.5 inline-flex shrink-0 items-center justify-center size-6">
        {item.icon}
      </span>
      <div>
        <p className="inline-flex items-center gap-1 text-sm font-semibold text-(--color-text)">{item.label}</p>
        <p className="mt-0.5 text-sm text-(--color-muted)">{item.description}</p>
      </div>
    </a>
  );
}

type ActiveFlyout = "products" | "solutions" | "resources" | "enterprise" | null;

export default function Navbar() {
  const [activeFlyout, setActiveFlyout] = useState<ActiveFlyout>(null);
  const [flyoutLeft, setFlyoutLeft] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const flyoutPanelRef = useRef<HTMLDivElement>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        !navRef.current?.contains(target) &&
        !flyoutPanelRef.current?.contains(target)
      ) {
        setActiveFlyout(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const cancelLeave = useCallback(() => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
  }, []);

  const scheduleLeave = useCallback(() => {
    leaveTimerRef.current = setTimeout(() => setActiveFlyout(null), 200);
  }, []);

  const openFlyout = useCallback((name: ActiveFlyout, trigger: HTMLElement) => {
    cancelLeave();
    setFlyoutLeft(trigger.getBoundingClientRect().left);
    setActiveFlyout(name);
  }, [cancelLeave]);

  const toggleFlyout = (name: ActiveFlyout, trigger: HTMLElement) => {
    setFlyoutLeft(trigger.getBoundingClientRect().left);
    setActiveFlyout(prev => prev === name ? null : name);
  };

  const getFlyoutTop = (): string => {
    if (!headerRef.current) return "4.5rem";
    const bottom = headerRef.current.getBoundingClientRect().bottom;
    return `${bottom - 12}px`;
  };

  const flyoutPanelClass = "fixed z-9999 rounded-[calc(var(--radius)*3)] bg-[#0C0C0C] p-2 shadow-lg ring-1 ring-(--color-border)";

  const renderFlyoutPanel = () => {
    if (!activeFlyout) return null;
    const top = getFlyoutTop();
    const sharedProps = {
      ref: flyoutPanelRef,
      onMouseEnter: cancelLeave,
      onMouseLeave: scheduleLeave,
      style: { top, left: flyoutLeft },
    };

    if (activeFlyout === "products") {
      return (
        <div {...sharedProps} className={`${flyoutPanelClass} w-max max-w-[calc(100%-3rem)] lg:max-w-2xl`}>
          <FlyoutItemProduct item={productsItems[0]} />
          <FlyoutItemProduct item={productsItems[1]} />
          <FlyoutItemProduct item={productsItems[2]} />
        </div>
      );
    }
    if (activeFlyout === "solutions") {
      return (
        <div {...sharedProps} className={`${flyoutPanelClass} w-max max-w-[calc(100%-3rem)] lg:max-w-2xl`}>
          {solutionsItems.map(item => <FlyoutItemRow key={item.label} item={item} />)}
        </div>
      );
    }
    if (activeFlyout === "resources") {
      return (
        <div {...sharedProps} className={`${flyoutPanelClass} w-[calc(100%-3rem)] max-w-3xl`}>
          <div className="flex p-2 divide-x divide-(--color-border) *:flex-1 [&>*:first-child]:pr-4 [&>*:not(:first-child)]:pl-4">
            <div className="min-w-44">
              <div className="mb-1 px-3 py-1">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-(--color-muted)">Developers</span>
              </div>
              <div className="flex flex-col">
                {resourceDevItems.map(item => (
                  <FlyoutItemRow key={item.label} item={item} external={item.href.startsWith("http")} />
                ))}
              </div>
            </div>
            <div className="min-w-44">
              <div className="mb-1 px-3 py-1">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-(--color-muted)">Company</span>
              </div>
              <div className="flex flex-col">
                {resourceCompanyItems.map(item => (
                  <FlyoutItemRow key={item.label} item={item} external={item.href.startsWith("http")} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (activeFlyout === "enterprise") {
      return (
        <div {...sharedProps} className={`${flyoutPanelClass} w-max max-w-[calc(100%-3rem)] lg:max-w-2xl`}>
          {enterpriseItems.map(item => <FlyoutItemRow key={item.label} item={item} />)}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {mounted && createPortal(renderFlyoutPanel(), document.body)}

      <header ref={headerRef} className="sticky top-0 z-10 bg-background/70 backdrop-blur-md supports-backdrop-filter:bg-background/60">
        <nav ref={navRef}>
          <div className="mx-auto flex h-(--scroll-padding-top) max-w-7xl items-center gap-4 px-6 lg:px-10">
            <div className="flex flex-1 items-center gap-12">
              <div className="flex items-center">
                <Link href="/" className="inline-flex items-stretch">
                  <WarpLogoFull className="hidden h-5 w-auto lg:block" />
                  <WarpMark className="h-6 w-auto lg:hidden" />
                </Link>
              </div>

              {/* Desktop nav */}
              <div className="flex items-center gap-1 max-lg:hidden">
                {/* Products */}
                <span
                  onMouseEnter={(e) => openFlyout("products", e.currentTarget)}
                  onMouseLeave={scheduleLeave}
                >
                  <button
                    onClick={(e) => toggleFlyout("products", e.currentTarget.parentElement as HTMLElement)}
                    className="inline-flex cursor-default items-center gap-1 text-3xl/10 font-medium text-(--color-text) lg:rounded-lg lg:px-2.5 lg:py-1 lg:text-sm/7 lg:hover:bg-text/5"
                  >
                    Products
                    <ChevronDown className={`mt-0.5 size-4 opacity-50 transition-transform duration-200 ${activeFlyout === "products" ? "rotate-180" : ""}`} />
                  </button>
                </span>

                {/* Solutions */}
                <span
                  onMouseEnter={(e) => openFlyout("solutions", e.currentTarget)}
                  onMouseLeave={scheduleLeave}
                >
                  <button
                    onClick={(e) => toggleFlyout("solutions", e.currentTarget.parentElement as HTMLElement)}
                    className="inline-flex cursor-default items-center gap-1 text-3xl/10 font-medium text-(--color-text) lg:rounded-lg lg:px-2.5 lg:py-1 lg:text-sm/7 lg:hover:bg-text/5"
                  >
                    Solutions
                    <ChevronDown className={`mt-0.5 size-4 opacity-50 transition-transform duration-200 ${activeFlyout === "solutions" ? "rotate-180" : ""}`} />
                  </button>
                </span>

                {/* Resources */}
                <span
                  onMouseEnter={(e) => openFlyout("resources", e.currentTarget)}
                  onMouseLeave={scheduleLeave}
                >
                  <button
                    onClick={(e) => toggleFlyout("resources", e.currentTarget.parentElement as HTMLElement)}
                    className="inline-flex cursor-default items-center gap-1 text-3xl/10 font-medium text-(--color-text) lg:rounded-lg lg:px-2.5 lg:py-1 lg:text-sm/7 lg:hover:bg-text/5"
                  >
                    Resources
                    <ChevronDown className={`mt-0.5 size-4 opacity-50 transition-transform duration-200 ${activeFlyout === "resources" ? "rotate-180" : ""}`} />
                  </button>
                </span>

                {/* Enterprise */}
                <span
                  onMouseEnter={(e) => openFlyout("enterprise", e.currentTarget)}
                  onMouseLeave={scheduleLeave}
                >
                  <button
                    onClick={(e) => toggleFlyout("enterprise", e.currentTarget.parentElement as HTMLElement)}
                    className="inline-flex cursor-default items-center gap-1 text-3xl/10 font-medium text-(--color-text) lg:rounded-lg lg:px-2.5 lg:py-1 lg:text-sm/7 lg:hover:bg-text/5"
                  >
                    Enterprise
                    <ChevronDown className={`mt-0.5 size-4 opacity-50 transition-transform duration-200 ${activeFlyout === "enterprise" ? "rotate-180" : ""}`} />
                  </button>
                </span>

                {/* Pricing */}
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-between gap-2 text-3xl/10 font-medium text-(--color-text) lg:rounded-lg lg:px-2.5 lg:py-1 lg:text-sm/7 lg:hover:bg-text/5"
                >
                  Pricing
                </Link>
              </div>
            </div>

            {/* Right side */}
            <div className="flex flex-1 items-center justify-end gap-4">
              <div className="flex shrink-0 items-center gap-5">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium h-8.75 gap-2 rounded-lg px-3 text-sm/6 text-(--color-text) hover:bg-text/10 focus-visible:bg-text/10 max-lg:hidden"
                  aria-label="Star Warp on GitHub (60k stars)"
                  href="https://github.com/warpdotdev/warp"
                >
                  <GitHubIcon />
                  <span className="tabular-nums">60k</span>
                </a>
                <a
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl text-sm/7 font-medium text-(--color-text) hover:bg-text/10 h-9 px-3 py-1 max-lg:hidden"
                  href="/contact-sales"
                >
                  Contact sales
                </a>
                <a
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 text-sm/7 font-medium hover:opacity-85 transition-opacity h-8.75"
                  style={{
                    background: "var(--btn-bg)",
                    border: "var(--btn-border)",
                    color: "var(--btn-text-color)",
                    padding: "var(--btn-padding)",
                    borderRadius: "var(--btn-radius)",
                  }}
                  href="https://app.warp.dev/get_warp?package=dmg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                  <AppleIcon />
                  <kbd className="ml-1 inline-flex size-5 items-center justify-center rounded bg-current/10 text-[11px] font-semibold uppercase opacity-60">D</kbd>
                </a>
              </div>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Toggle menu"
                className="inline-flex rounded-full p-1.5 text-(--color-text) hover:bg-text/10 lg:hidden"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M3.748 8.248a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75ZM3.748 15.75a.75.75 0 0 1 .75-.751h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="fixed inset-0 flex flex-col bg-(--color-background) px-6 py-6 lg:px-10 z-9999 lg:hidden overflow-y-auto">
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex rounded-full p-1.5 text-(--color-text) hover:bg-text/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flex min-h-0 flex-1 flex-col gap-6">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-3xl/10 font-medium text-(--color-text)">
                    Products<ChevronDownLg />
                  </summary>
                  <div className="mt-4 flex flex-col gap-1 pl-1">
                    {productsItems.map(item => <FlyoutItemProduct key={item.label} item={item} />)}
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-3xl/10 font-medium text-(--color-text)">
                    Solutions<ChevronDownLg />
                  </summary>
                  <div className="mt-4 flex flex-col gap-1 pl-1">
                    {solutionsItems.map(item => <FlyoutItemRow key={item.label} item={item} />)}
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-3xl/10 font-medium text-(--color-text)">
                    Resources<ChevronDownLg />
                  </summary>
                  <div className="mt-4 flex flex-col gap-1 pl-1">
                    {[...resourceDevItems, ...resourceCompanyItems].map(item => (
                      <FlyoutItemRow key={item.label} item={item} external={item.href.startsWith("http")} />
                    ))}
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-3xl/10 font-medium text-(--color-text)">
                    Enterprise<ChevronDownLg />
                  </summary>
                  <div className="mt-4 flex flex-col gap-1 pl-1">
                    {enterpriseItems.map(item => <FlyoutItemRow key={item.label} item={item} />)}
                  </div>
                </details>
                <Link
                  href="/pricing"
                  onClick={() => setMobileOpen(false)}
                  className="group inline-flex items-center justify-between text-3xl/10 font-medium text-(--color-text)"
                >
                  Pricing
                  <span className="inline-flex p-1.5 opacity-0 group-hover:opacity-100" aria-hidden="true"><ChevronRight /></span>
                </Link>
              </div>
              <div className="mt-8 flex flex-col gap-4 border-t border-(--color-border) pt-8">
                <a
                  href="https://app.warp.dev/get_warp?package=dmg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-sm/7 font-medium hover:opacity-85 transition-opacity h-11"
                  style={{ background: "var(--btn-bg)", color: "var(--btn-text-color)", borderRadius: "var(--btn-radius)", padding: "0.5rem 1.25rem" }}
                >
                  Download <AppleIcon />
                </a>
                <a href="/contact-sales" className="text-center text-sm/7 font-medium text-(--color-text-secondary) hover:text-(--color-text)">
                  Contact sales
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
