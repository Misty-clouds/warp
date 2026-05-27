"use client";

import { useState } from "react";
import Link from "next/link";
import CopyIcon from "./icons/CopyIcon";
import CheckmarkIcon from "./icons/CheckmarkIcon";
import AppleIcon from "./icons/AppleIcon";
import WindowsIcon from "./icons/WindowsIcon";
import LinuxIcon from "./icons/LinuxIcon";

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
        <span className="normal-case tracking-normal" id={id}>{command}</span>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="group relative flex size-9 items-center justify-center rounded-full after:absolute after:-inset-1 after:pointer-fine:hidden hover:bg-(--color-border)"
        aria-label={`Copy: ${command}`}
      >
        {copied ? <CheckmarkIcon /> : <CopyIcon />}
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

const h2HeadingClassName = "text-(--color-text) text-[clamp(1.75rem,3.5vw,calc(var(--heading-size)_*_0.7))] leading-[1.15] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [letter-spacing:var(--heading-letter-spacing)]";

const headingClassName = "text-(--color-text) text-[clamp(1.25rem,2.5vw,1.5rem)] leading-[1.2] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [letter-spacing:var(--heading-letter-spacing)]";

export default function Downloads() {
  return (
    <section id="global-downloads-footer" className="bg-transparent py-(--space-section)">
      <div className="mx-auto flex w-full max-w-(--content-max-width) flex-col gap-10 px-6 sm:gap-16 lg:px-10">
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-(--color-text-secondary)">
              All Downloads
            </div>
            <h2 className={`text-pretty ${h2HeadingClassName}`}>
              Get Warp today
            </h2>
          </div>
          <p className="text-(--color-text-secondary) text-pretty text-(length:--body-size) leading-(--body-line-height)">
            Get early access to unreleased and experimental features with{" "}
            <Link href="/download-preview" className="link-underline-reveal hover:opacity-80">
              Warp Preview
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-(--space-lg) divide-y divide-border/20 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {/* Mac */}
          <div className="flex flex-col gap-6 py-(--space-lg) first:pt-0 last:pb-0 lg:px-(--space-lg) lg:py-0 lg:first:pl-0 lg:last:pr-0">
            <div className="flex flex-col gap-3">
              <div className="text-(--color-text)"><AppleIcon className="inline-block size-10" /></div>
              <h3 className={headingClassName}>Mac</h3>
            </div>
            <div className="flex gap-3">
              <a
                href="https://app.warp.dev/get_warp?package=dmg"
                className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl bg-(--color-text) px-5 py-3.5 text-center transition-opacity hover:opacity-85 min-h-20"
              >
                <span className="text-base/5 font-bold text-background">macOS</span>
                <span className="text-xs/4 text-background/50">Version 10.14+</span>
              </a>
            </div>
            <CopyCommand command="brew install --cask warp" id="install-cmd-brew-install-cask-warp" />
          </div>

          {/* Linux */}
          <div className="flex flex-col gap-6 py-(--space-lg) first:pt-0 last:pb-0 lg:px-(--space-lg) lg:py-0 lg:first:pl-0 lg:last:pr-0">
            <div className="flex flex-col gap-3">
              <div className="text-(--color-text)">
                <LinuxIcon className="size-10" />
              </div>
              <h3 className={headingClassName}>Linux</h3>
            </div>
            <div className="flex gap-3">
              <a
                href="https://app.warp.dev/get_warp?package=deb"
                className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl bg-(--color-text) px-5 py-3.5 text-center transition-opacity hover:opacity-85 min-h-20"
              >
                <span className="text-base/5 font-bold text-background">.deb</span>
                <span className="text-xs/4 text-background/50">Debian, Ubuntu</span>
              </a>
              <a
                href="https://app.warp.dev/get_warp?package=rpm"
                className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl bg-(--color-text) px-5 py-3.5 text-center transition-opacity hover:opacity-85 min-h-20"
              >
                <span className="text-base/5 font-bold text-background">.rpm</span>
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
              <div className="text-(--color-text)"><WindowsIcon className="inline-block size-10" /></div>
              <h3 className={headingClassName}>Windows</h3>
            </div>
            <div className="flex gap-3">
              <a
                href="https://app.warp.dev/get_warp?package=exe_x86_64"
                className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl bg-(--color-text) px-5 py-3.5 text-center transition-opacity hover:opacity-85 min-h-20"
              >
                <span className="text-base/5 font-bold text-background">.exe</span>
                <span className="text-xs/4 text-background/50">Windows 11/10 x64</span>
              </a>
              <a
                href="https://app.warp.dev/get_warp?package=exe_arm64"
                className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl bg-(--color-text) px-5 py-3.5 text-center transition-opacity hover:opacity-85 min-h-20"
              >
                <span className="text-base/5 font-bold text-background">.exe</span>
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
