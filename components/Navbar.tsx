"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import WarpLogoFull from "./shared/icons/WarpLogoFull";
import WarpMark from "./shared/icons/WarpMark";
import OzMark from "./shared/icons/OzMark";
import AppleIcon from "./shared/icons/AppleIcon";
import GitHubIcon from "./shared/icons/GitHubIcon";
import ChevronDownIcon from "./shared/icons/ChevronDownIcon";
import ChevronRightIcon from "./shared/icons/ChevronRightIcon";
import ChevronDownLgIcon from "./shared/icons/ChevronDownLgIcon";
import HamburgerIcon from "./shared/icons/HamburgerIcon";
import XMarkIcon from "./shared/icons/XMarkIcon";
import ShieldCheckIcon from "./shared/icons/ShieldCheckIcon";
import FileTextIcon from "./shared/icons/FileTextIcon";
import PencilIcon from "./shared/icons/PencilIcon";
import UsersIcon from "./shared/icons/UsersIcon";
import CalendarIcon from "./shared/icons/CalendarIcon";
import ListDotsIcon from "./shared/icons/ListDotsIcon";
import MapIcon from "./shared/icons/MapIcon";
import SparklesIcon from "./shared/icons/SparklesIcon";
import BookOpenIcon from "./shared/icons/BookOpenIcon";
import BriefcaseIcon from "./shared/icons/BriefcaseIcon";
import NewspaperIcon from "./shared/icons/NewspaperIcon";
import LightningIcon from "./shared/icons/LightningIcon";
import TagIcon from "./shared/icons/TagIcon";
import GlobeIcon from "./shared/icons/GlobeIcon";

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
                    <ChevronDownIcon className={`mt-0.5 size-4 opacity-50 transition-transform duration-200 ${activeFlyout === "products" ? "rotate-180" : ""}`} />
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
                    <ChevronDownIcon className={`mt-0.5 size-4 opacity-50 transition-transform duration-200 ${activeFlyout === "solutions" ? "rotate-180" : ""}`} />
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
                    <ChevronDownIcon className={`mt-0.5 size-4 opacity-50 transition-transform duration-200 ${activeFlyout === "resources" ? "rotate-180" : ""}`} />
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
                    <ChevronDownIcon className={`mt-0.5 size-4 opacity-50 transition-transform duration-200 ${activeFlyout === "enterprise" ? "rotate-180" : ""}`} />
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
                <HamburgerIcon className="size-6" />
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
