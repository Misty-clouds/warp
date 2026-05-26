"use client";

import { useState } from "react";
import Link from "next/link";

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

const AppleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="image" className="inline-block size-10">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
  </svg>
);

const WindowsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="image" className="inline-block size-10">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
  </svg>
);

function CopyCommand({ command, id }: { command: string; id: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* silent */ }
  };

  return (
    <div className="flex items-center justify-between gap-6 rounded-full p-1 font-mono text-sm/7 ring-1 ring-inset bg-(--color-surface) text-(--color-text-secondary) ring-(--color-border)">
      <div className="flex items-center gap-2 pl-3">
        <div className="text-current/60 select-none">$</div>
        <span style={{ textTransform: "none", letterSpacing: "normal" }} id={id}>{command}</span>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="group relative flex size-9 items-center justify-center rounded-full hover:bg-(--color-border)"
        aria-label={`Copy: ${command}`}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  );
}

function PkgLinks({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="flex items-center gap-2">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="inline-flex items-center justify-center rounded-lg bg-text/10 px-3 py-1 text-xs/5 font-medium text-(--color-text) transition-colors hover:bg-text/20"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

function PackageRow({ name, sub, pkgs }: { name: string; sub?: string; pkgs: { label: string; href: string }[] }) {
  return (
    <div className="py-3 first:pt-0 last:pb-0">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-baseline gap-2">
          <span className="text-sm/7 font-medium text-(--color-text)">{name}</span>
          {sub && <span className="text-xs/5 text-(--color-text-secondary)">{sub}</span>}
        </div>
        <PkgLinks items={pkgs} />
      </div>
    </div>
  );
}

const headingStyle = {
  fontFamily: "var(--font-heading)",
  fontWeight: "var(--heading-weight)",
  fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
  lineHeight: 1.2,
  letterSpacing: "var(--heading-letter-spacing)",
};

export default function Downloads() {
  return (
    <section id="global-downloads-footer" className="bg-transparent py-(--space-section)">
      <div
        className="mx-auto w-full px-6 lg:px-10 flex flex-col gap-10 sm:gap-16"
        style={{ maxWidth: "var(--content-max-width)" }}
      >
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-(--color-text-secondary)">
              All Downloads
            </div>
            <h2 className="text-pretty text-(--color-text)" style={headingStyle}>
              Get Warp today
            </h2>
          </div>
          <p
            className="text-(--color-text-secondary) text-pretty"
            style={{ fontSize: "var(--body-size)", lineHeight: "var(--body-line-height)" }}
          >
            Get early access to unreleased and experimental features with{" "}
            <Link href="/download-preview" className="link-underline-reveal hover:opacity-80">
              Warp Preview
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-(--space-lg) divide-y divide-(--color-border)/20 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {/* Mac */}
          <div className="flex flex-col gap-6 py-(--space-lg) first:pt-0 last:pb-0 lg:px-(--space-lg) lg:py-0 lg:first:pl-0 lg:last:pr-0">
            <div className="flex flex-col gap-3">
              <div className="text-(--color-text)"><AppleIcon /></div>
              <h3 className="text-(--color-text)" style={headingStyle}>Mac</h3>
            </div>
            <div className="flex gap-3">
              <a
                href="https://app.warp.dev/get_warp?package=dmg"
                className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl bg-(--color-text) px-5 py-3.5 text-center transition-opacity hover:opacity-85 min-h-20"
              >
                <span className="text-base/5 font-bold text-(--color-background)">macOS</span>
                <span className="text-xs/4 text-background/50">Version 10.14+</span>
              </a>
            </div>
            <CopyCommand command="brew install --cask warp" id="install-cmd-brew-install-cask-warp" />
          </div>

          {/* Linux */}
          <div className="flex flex-col gap-6 py-(--space-lg) first:pt-0 last:pb-0 lg:px-(--space-lg) lg:py-0 lg:first:pl-0 lg:last:pr-0">
            <div className="flex flex-col gap-3">
              <div className="text-(--color-text)">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/linux-dark.svg"
                  alt=""
                  className="inline-block bg-transparent align-middle size-10"
                  style={{ background: "none", boxShadow: "none", border: "none", borderRadius: 0 }}
                />
              </div>
              <h3 className="text-(--color-text)" style={headingStyle}>Linux</h3>
            </div>
            <div className="flex gap-3">
              <a
                href="https://app.warp.dev/get_warp?package=deb"
                className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl bg-(--color-text) px-5 py-3.5 text-center transition-opacity hover:opacity-85 min-h-20"
              >
                <span className="text-base/5 font-bold text-(--color-background)">.deb</span>
                <span className="text-xs/4 text-background/50">Debian, Ubuntu</span>
              </a>
              <a
                href="https://app.warp.dev/get_warp?package=rpm"
                className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl bg-(--color-text) px-5 py-3.5 text-center transition-opacity hover:opacity-85 min-h-20"
              >
                <span className="text-base/5 font-bold text-(--color-background)">.rpm</span>
                <span className="text-xs/4 text-background/50">Red Hat, Fedora, SUSE</span>
              </a>
            </div>
            <div className="flex flex-col divide-y divide-border/20">
              <PackageRow name=".deb" pkgs={[
                { label: "x64", href: "https://app.warp.dev/get_warp?package=deb" },
                { label: "ARM64", href: "https://app.warp.dev/get_warp?package=deb_arm64" },
              ]} />
              <PackageRow name=".rpm" pkgs={[
                { label: "x64", href: "https://app.warp.dev/get_warp?package=rpm" },
                { label: "ARM64", href: "https://app.warp.dev/get_warp?package=rpm_arm64" },
              ]} />
              <PackageRow name=".tar.zst" sub="Arch Linux" pkgs={[
                { label: "x64", href: "https://app.warp.dev/get_warp?package=pacman" },
                { label: "ARM64", href: "https://app.warp.dev/get_warp?package=pacman_arm64" },
              ]} />
              <PackageRow name="AppImage" pkgs={[
                { label: "x64", href: "https://app.warp.dev/get_warp?package=appimage" },
                { label: "ARM64", href: "https://app.warp.dev/get_warp?package=appimage_arm64" },
              ]} />
            </div>
          </div>

          {/* Windows */}
          <div className="flex flex-col gap-6 py-(--space-lg) first:pt-0 last:pb-0 lg:px-(--space-lg) lg:py-0 lg:first:pl-0 lg:last:pr-0">
            <div className="flex flex-col gap-3">
              <div className="text-(--color-text)"><WindowsIcon /></div>
              <h3 className="text-(--color-text)" style={headingStyle}>Windows</h3>
            </div>
            <div className="flex gap-3">
              <a
                href="https://app.warp.dev/get_warp?package=exe_x86_64"
                className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl bg-(--color-text) px-5 py-3.5 text-center transition-opacity hover:opacity-85 min-h-20"
              >
                <span className="text-base/5 font-bold text-(--color-background)">.exe</span>
                <span className="text-xs/4 text-background/50">Windows 11/10 x64</span>
              </a>
              <a
                href="https://app.warp.dev/get_warp?package=exe_arm64"
                className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl bg-(--color-text) px-5 py-3.5 text-center transition-opacity hover:opacity-85 min-h-20"
              >
                <span className="text-base/5 font-bold text-(--color-background)">.exe</span>
                <span className="text-xs/4 text-background/50">Windows 11/10 ARM64</span>
              </a>
            </div>
            <CopyCommand command="winget install Warp.Warp" id="install-cmd-winget-install-warp-warp" />
            <div className="flex flex-col divide-y divide-border/20">
              <PackageRow name=".exe" pkgs={[
                { label: "x64", href: "https://app.warp.dev/get_warp?package=exe_x86_64" },
                { label: "ARM64", href: "https://app.warp.dev/get_warp?package=exe_arm64" },
              ]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
