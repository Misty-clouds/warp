"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import WarpLogoFull from "./icons/WarpLogoFull";
import WarpMark from "./icons/WarpMark";
import OzMark from "./icons/OzMark";
import AppleIcon from "./icons/AppleIcon";
import GitHubIcon from "./icons/GitHubIcon";
import ChevronDownIcon from "./icons/ChevronDownIcon";
import ChevronRightIcon from "./icons/ChevronRightIcon";
import ChevronDownLgIcon from "./icons/ChevronDownLgIcon";
import HamburgerIcon from "./icons/HamburgerIcon";
import XMarkIcon from "./icons/XMarkIcon";
import ShieldCheckIcon from "./icons/ShieldCheckIcon";
import FileTextIcon from "./icons/FileTextIcon";
import PencilIcon from "./icons/PencilIcon";
import UsersIcon from "./icons/UsersIcon";
import CalendarIcon from "./icons/CalendarIcon";
import ListDotsIcon from "./icons/ListDotsIcon";
import MapIcon from "./icons/MapIcon";
import SparklesIcon from "./icons/SparklesIcon";
import BookOpenIcon from "./icons/BookOpenIcon";
import BriefcaseIcon from "./icons/BriefcaseIcon";
import NewspaperIcon from "./icons/NewspaperIcon";
import LightningIcon from "./icons/LightningIcon";
import TagIcon from "./icons/TagIcon";
import GlobeIcon from "./icons/GlobeIcon";

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
      <span className="no-frame inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-[#0b0b0b] text-white shadow-[inset_0_0_0_1px_#1f1f1f]">
        <WarpMark className="size-3.5" />
      </span>
    ),
  },
  {
    label: "Warp Agent",
    description: "The orchestration-native coding agent",
    href: "/agents/warp-agent",
    icon: (
      <span className="no-frame inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-[#1c1a26] text-[#c7aeff] shadow-[inset_0_0_0_1px_#373245]">
        <WarpMark className="size-3.5" />
      </span>
    ),
  },
  {
    label: "Oz Agent Platform",
    description: "The cloud orchestration platform",
    href: "/oz",
    icon: (
      <span className="no-frame inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-[#bda6f7] text-[#111111]">
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
    icon: <ShieldCheckIcon className="size-4" />,
  },
  {
    label: "Insurance",
    description: "Modernize policy & claims systems",
    href: "/enterprise/insurance",
    icon: <ShieldCheckIcon className="size-4" />,
  },
  {
    label: "Telecommunications",
    description: "Scale with your network",
    href: "/enterprise/telecommunications",
    icon: <GlobeIcon className="size-4" />,
  },
];

const resourceDevItems: FlyoutItem[] = [
  { label: "Docs", description: "API docs and guides", href: "https://docs.warp.dev/", icon: <FileTextIcon className="size-4" /> },
  { label: "Blog", description: "News and product updates", href: "/blog", icon: <PencilIcon className="size-4" /> },
  { label: "Community", description: "Get help and connect", href: "https://docs.warp.dev/support-and-community", icon: <UsersIcon className="size-4" /> },
  { label: "Events", description: "Webinars and sessions", href: "https://luma.com/warpdotdev", icon: <CalendarIcon className="size-4" /> },
  { label: "Changelog", description: "What's new in Warp", href: "https://docs.warp.dev/changelog", icon: <ListDotsIcon className="size-4" /> },
  { label: "Roadmap", description: "See what we're building next", href: "https://github.com/warpdotdev/warp/issues", icon: <MapIcon className="size-4" /> },
  { label: "Support", description: "Help and issue tracking", href: "https://docs.warp.dev/support-and-community", icon: <ShieldCheckIcon className="size-4" /> },
];

const resourceCompanyItems: FlyoutItem[] = [
  { label: "About", description: "Our mission and team", href: "/about", icon: <SparklesIcon className="size-4" /> },
  { label: "How We Work", description: "Our culture and values", href: "https://notion.warp.dev/", icon: <BookOpenIcon className="size-4" /> },
  { label: "Careers", description: "Join the team at Warp", href: "/careers", icon: <BriefcaseIcon className="size-4" /> },
  { label: "Press", description: "Media coverage and press kit", href: "/press", icon: <NewspaperIcon className="size-4" /> },
  { label: "Newsroom", description: "Announcements and press releases", href: "/newsroom", icon: <LightningIcon className="size-4" /> },
];

const enterpriseItems: FlyoutItem[] = [
  { label: "Enterprise", description: "Warp for large engineering teams", href: "/enterprise", icon: <TagIcon className="size-4" /> },
  { label: "Security", description: "Enterprise-grade security and compliance", href: "/security", icon: <ShieldCheckIcon className="size-4" /> },
  { label: "Customers", description: "Teams shipping faster with Warp", href: "/customers", icon: <UsersIcon className="size-4" /> },
];

function FlyoutItemRow({ item, external }: { item: FlyoutItem; external?: boolean }) {
  return (
    <a
      href={item.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-start gap-3 rounded-(--radius-lg) p-3 hover:bg-text/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-text)"
    >
      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-text/5 text-(--color-text-secondary) ring-1 ring-inset ring-(--color-border)">
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
      className="group flex items-start gap-3 rounded-(--radius-lg) p-3 hover:bg-text/5"
    >
      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center">
        {item.icon}
      </span>
      <div>
        <p className="inline-flex items-center gap-1 text-sm font-semibold text-(--color-text)">{item.label}</p>
        <p className="mt-0.5 text-sm text-(--color-muted)">{item.description}</p>
      </div>
    </a>
  );
}

const flyoutPanelBase = "absolute top-full left-0 z-[9999] mt-1 rounded-(--img-radius) bg-(--color-background) p-2 shadow-xl ring-1 ring-(--color-border)";

type ActiveFlyout = "products" | "solutions" | "resources" | "enterprise" | null;

export default function Navbar() {
  const [activeFlyout, setActiveFlyout] = useState<ActiveFlyout>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!navRef.current?.contains(e.target as Node)) {
        setActiveFlyout(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileOpen);
    return () => { document.body.classList.remove("overflow-hidden"); };
  }, [mobileOpen]);

  const cancelLeave = useCallback(() => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
  }, []);

  const scheduleLeave = useCallback(() => {
    leaveTimerRef.current = setTimeout(() => setActiveFlyout(null), 200);
  }, []);

  const openFlyout = useCallback((name: ActiveFlyout) => {
    cancelLeave();
    setActiveFlyout(name);
  }, [cancelLeave]);

  const toggleFlyout = (name: ActiveFlyout) => {
    setActiveFlyout(prev => prev === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-10 bg-background/70 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <nav ref={navRef}>
        <div className="mx-auto flex h-(--scroll-padding-top) max-w-7xl items-center gap-4 px-6 lg:px-10">
          <div className="flex flex-1 items-center gap-12">
            <div className="flex items-center">
              <Link href="/" className="inline-flex items-stretch">
                <WarpLogoFull className="hidden h-5 w-auto lg:block" />
                <WarpMark className="h-6 w-auto lg:hidden" />
              </Link>
            </div>

            {/* Desktop nav — items-stretch so each wrapper fills the full nav height */}
            <div className="flex items-stretch gap-1 max-lg:hidden">

              {/* Products */}
              <div
                className="relative flex items-center"
                onMouseEnter={() => openFlyout("products")}
                onMouseLeave={scheduleLeave}
              >
                <button
                  onClick={() => toggleFlyout("products")}
                  className="inline-flex cursor-default items-center gap-1 rounded-lg px-2.5 py-1 text-sm/7 font-medium text-(--color-text) hover:bg-text/5"
                >
                  Products
                  <ChevronDownIcon className={`mt-0.5 size-4 opacity-50 transition-transform duration-200 ${activeFlyout === "products" ? "rotate-180" : ""}`} />
                </button>
                {activeFlyout === "products" && (
                  <div
                    className={`${flyoutPanelBase} w-72`}
                    onMouseEnter={cancelLeave}
                    onMouseLeave={scheduleLeave}
                  >
                    <FlyoutItemProduct item={productsItems[0]} />
                    <FlyoutItemProduct item={productsItems[1]} />
                    <FlyoutItemProduct item={productsItems[2]} />
                  </div>
                )}
              </div>

              {/* Solutions */}
              <div
                className="relative flex items-center"
                onMouseEnter={() => openFlyout("solutions")}
                onMouseLeave={scheduleLeave}
              >
                <button
                  onClick={() => toggleFlyout("solutions")}
                  className="inline-flex cursor-default items-center gap-1 rounded-lg px-2.5 py-1 text-sm/7 font-medium text-(--color-text) hover:bg-text/5"
                >
                  Solutions
                  <ChevronDownIcon className={`mt-0.5 size-4 opacity-50 transition-transform duration-200 ${activeFlyout === "solutions" ? "rotate-180" : ""}`} />
                </button>
                {activeFlyout === "solutions" && (
                  <div
                    className={`${flyoutPanelBase} w-72`}
                    onMouseEnter={cancelLeave}
                    onMouseLeave={scheduleLeave}
                  >
                    {solutionsItems.map(item => <FlyoutItemRow key={item.label} item={item} />)}
                  </div>
                )}
              </div>

              {/* Resources */}
              <div
                className="relative flex items-center"
                onMouseEnter={() => openFlyout("resources")}
                onMouseLeave={scheduleLeave}
              >
                <button
                  onClick={() => toggleFlyout("resources")}
                  className="inline-flex cursor-default items-center gap-1 rounded-lg px-2.5 py-1 text-sm/7 font-medium text-(--color-text) hover:bg-text/5"
                >
                  Resources
                  <ChevronDownIcon className={`mt-0.5 size-4 opacity-50 transition-transform duration-200 ${activeFlyout === "resources" ? "rotate-180" : ""}`} />
                </button>
                {activeFlyout === "resources" && (
                  <div
                    className={`${flyoutPanelBase} w-[44rem]`}
                    onMouseEnter={cancelLeave}
                    onMouseLeave={scheduleLeave}
                  >
                    <div className="flex divide-x divide-(--color-border) p-2">
                      <div className="flex min-w-52 flex-1 flex-col pr-4">
                        <div className="mb-1 px-3 py-1">
                          <span className="font-mono text-xs font-medium uppercase tracking-wider text-(--color-muted)">Developers</span>
                        </div>
                        {resourceDevItems.map(item => (
                          <FlyoutItemRow key={item.label} item={item} external={item.href.startsWith("http")} />
                        ))}
                      </div>
                      <div className="flex min-w-52 flex-1 flex-col pl-4">
                        <div className="mb-1 px-3 py-1">
                          <span className="font-mono text-xs font-medium uppercase tracking-wider text-(--color-muted)">Company</span>
                        </div>
                        {resourceCompanyItems.map(item => (
                          <FlyoutItemRow key={item.label} item={item} external={item.href.startsWith("http")} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Enterprise */}
              <div
                className="relative flex items-center"
                onMouseEnter={() => openFlyout("enterprise")}
                onMouseLeave={scheduleLeave}
              >
                <button
                  onClick={() => toggleFlyout("enterprise")}
                  className="inline-flex cursor-default items-center gap-1 rounded-lg px-2.5 py-1 text-sm/7 font-medium text-(--color-text) hover:bg-text/5"
                >
                  Enterprise
                  <ChevronDownIcon className={`mt-0.5 size-4 opacity-50 transition-transform duration-200 ${activeFlyout === "enterprise" ? "rotate-180" : ""}`} />
                </button>
                {activeFlyout === "enterprise" && (
                  <div
                    className={`${flyoutPanelBase} w-72`}
                    onMouseEnter={cancelLeave}
                    onMouseLeave={scheduleLeave}
                  >
                    {enterpriseItems.map(item => <FlyoutItemRow key={item.label} item={item} />)}
                  </div>
                )}
              </div>

              {/* Pricing */}
              <div className="flex items-center">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-between gap-2 rounded-lg px-2.5 py-1 text-sm/7 font-medium text-(--color-text) hover:bg-text/5"
                >
                  Pricing
                </Link>
              </div>
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
                className="inline-flex h-8.75 shrink-0 items-center justify-center gap-1.5 rounded-(--btn-radius) bg-(--btn-bg) p-(--btn-padding) text-sm/7 font-medium text-(--btn-text-color) transition-opacity [border:var(--btn-border)] hover:opacity-85"
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
              <HamburgerIcon className="size-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="fixed inset-0 z-[9999] flex flex-col overflow-y-auto bg-(--color-background) px-6 py-6 lg:hidden lg:px-10">
            <div className="flex justify-end">
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="inline-flex rounded-full p-1.5 text-(--color-text) hover:bg-text/10"
              >
                <XMarkIcon className="size-6" />
              </button>
            </div>
            <div className="mt-6 flex min-h-0 flex-1 flex-col gap-6">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between text-3xl/10 font-medium text-(--color-text)">
                  Products<ChevronDownLgIcon className="size-5 opacity-50 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-4 flex flex-col gap-1 pl-1">
                  {productsItems.map(item => <FlyoutItemProduct key={item.label} item={item} />)}
                </div>
              </details>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between text-3xl/10 font-medium text-(--color-text)">
                  Solutions<ChevronDownLgIcon className="size-5 opacity-50 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-4 flex flex-col gap-1 pl-1">
                  {solutionsItems.map(item => <FlyoutItemRow key={item.label} item={item} />)}
                </div>
              </details>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between text-3xl/10 font-medium text-(--color-text)">
                  Resources<ChevronDownLgIcon className="size-5 opacity-50 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-4 flex flex-col gap-1 pl-1">
                  {[...resourceDevItems, ...resourceCompanyItems].map(item => (
                    <FlyoutItemRow key={item.label} item={item} external={item.href.startsWith("http")} />
                  ))}
                </div>
              </details>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between text-3xl/10 font-medium text-(--color-text)">
                  Enterprise<ChevronDownLgIcon className="size-5 opacity-50 transition-transform group-open:rotate-180" />
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
                <span className="inline-flex p-1.5 opacity-0 group-hover:opacity-100" aria-hidden="true"><ChevronRightIcon className="size-6" /></span>
              </Link>
            </div>
            <div className="mt-8 flex flex-col gap-4 border-t border-(--color-border) pt-8">
              <a
                href="https://app.warp.dev/get_warp?package=dmg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-(--btn-radius) bg-(--btn-bg) px-5 py-2 text-sm/7 font-medium text-(--btn-text-color) transition-opacity hover:opacity-85"
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
  );
}
