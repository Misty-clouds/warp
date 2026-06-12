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
    <div className="flex items-center justify-between gap-6 rounded-full bg-(--color-surface) p-1 font-mono text-sm/7 text-(--color-text-secondary) inset-ring-1 inset-ring-border">
      <div className="flex items-center gap-2 pl-3">
        <div className="select-none text-current/60">$</div>
        <span className="normal-case tracking-normal" id={id}>{command}</span>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="group relative flex size-9 items-center justify-center rounded-full after:pointer-fine:hidden after:absolute after:-inset-1 hover:bg-(--color-border)"
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
        <Link
          key={item.label}
          href={item.href}
          className="inline-flex items-center justify-center rounded-lg bg-text/10 px-3 py-1 text-xs/5 font-medium text-(--color-text) transition-colors hover:bg-text/20"
        >
          {item.label}
        </Link>
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

type DownloadButton = { primary: string; secondary: string; href: string };

type Platform = {
  name: string;
  icon: React.ReactNode;
  buttons: DownloadButton[];
  command?: { command: string; id: string };
  packages?: { name: string; sub?: string; pkgs: { label: string; href: string }[] }[];
};

const platforms: Platform[] = [
  {
    name: "Mac",
    icon: <AppleIcon className="inline-block size-10" />,
    buttons: [{ primary: "macOS", secondary: "Version 10.14+", href: "/" }],
    command: { command: "brew install --cask warp", id: "install-cmd-brew-install-cask-warp" },
  },
  {
    name: "Linux",
    icon: <LinuxIcon className="size-10" />,
    buttons: [
      { primary: ".deb", secondary: "Debian, Ubuntu", href: "/" },
      { primary: ".rpm", secondary: "Red Hat, Fedora, SUSE", href: "/" },
    ],
    packages: [
      { name: ".deb", pkgs: [{ label: "x64", href: "/" }, { label: "ARM64", href: "/" }] },
      { name: ".rpm", pkgs: [{ label: "x64", href: "/" }, { label: "ARM64", href: "/" }] },
      { name: ".tar.zst", sub: "Arch Linux", pkgs: [{ label: "x64", href: "/" }, { label: "ARM64", href: "/" }] },
      { name: "AppImage", pkgs: [{ label: "x64", href: "/" }, { label: "ARM64", href: "/" }] },
    ],
  },
  {
    name: "Windows",
    icon: <WindowsIcon className="inline-block size-10" />,
    buttons: [
      { primary: ".exe", secondary: "Windows 11/10 x64", href: "/" },
      { primary: ".exe", secondary: "Windows 11/10 ARM64", href: "/" },
    ],
    command: { command: "winget install Warp.Warp", id: "install-cmd-winget-install-warp-warp" },
    packages: [
      { name: ".exe", pkgs: [{ label: "x64", href: "/" }, { label: "ARM64", href: "/" }] },
    ],
  },
];

function PlatformColumn({ platform }: { platform: Platform }) {
  return (
    <div className="flex flex-col gap-6 py-(--space-lg) first:pt-0 last:pb-0 lg:px-(--space-lg) lg:py-0 lg:first:pl-0 lg:last:pr-0">
      <div className="flex flex-col gap-3">
        <div className="text-(--color-text)">{platform.icon}</div>
        <h3 className={headingClassName}>{platform.name}</h3>
      </div>
      <div className="flex gap-3">
        {platform.buttons.map((button) => (
          <Link
            key={button.secondary}
            href={button.href}
            className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl bg-(--color-text) px-5 py-3.5 text-center transition-opacity hover:opacity-85 min-h-20"
          >
            <span className="text-base/5 font-bold text-background">{button.primary}</span>
            <span className="text-xs/4 text-background/50">{button.secondary}</span>
          </Link>
        ))}
      </div>
      {platform.command && (
        <CopyCommand command={platform.command.command} id={platform.command.id} />
      )}
      {platform.packages && (
        <div className="flex flex-col divide-y divide-text/10">
          {platform.packages.map((row) => (
            <PackageRow key={row.name} name={row.name} sub={row.sub} pkgs={row.pkgs} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Downloads() {
  return (
    <section
      id="global-downloads-footer"
      data-component="DownloadsThreeColumn"
      className="bg-transparent py-(--space-section)"
    >
      <div
        data-component="Container"
        className="mx-auto flex w-full max-w-(--content-max-width) flex-col gap-10 px-6 sm:gap-16 lg:px-10"
      >
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-(--color-text-secondary)">
              All Downloads
            </div>
            <h2 data-component="Subheading" className={`text-pretty ${h2HeadingClassName}`}>
              Get Warp today
            </h2>
          </div>
          <div
            data-component="Text"
            className="text-pretty text-(--color-text-secondary) text-(length:--body-size) leading-(--body-line-height) [font-family:var(--font-body)] [font-weight:var(--body-weight)]"
          >
            <p>
              Get early access to unreleased and experimental features with{" "}
              <Link href="/download-preview" className="link-underline-reveal hover:opacity-80">
                Warp Preview
              </Link>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-(--space-lg) divide-y divide-text/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {platforms.map((platform) => (
            <PlatformColumn key={platform.name} platform={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}
