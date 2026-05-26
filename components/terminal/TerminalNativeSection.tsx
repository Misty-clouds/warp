import TerminalNativeCarousel from "./TerminalNativeCarousel";

const tabs = [
  {
    label: "Vertical tabs",
    description:
      "Display terminal sessions as vertical tabs and configure metadata like git branch, worktrees, and pull requests.",
    image: {
      src: "/images/terminal/carousel2-vertical-tabs.jpg",
      alt: "Vertical tabs in Warp",
      width: 1608,
      height: 1005,
    },
  },
  {
    label: "Notifications",
    description:
      "Agents notify you when they need attention — approving a command, reviewing a plan, or confirming they've finished a task.",
    image: {
      src: "/images/terminal/carousel2-notifications.jpg",
      alt: "Agent notifications",
      width: 1200,
      height: 750,
    },
  },
  {
    label: "Interactive code review",
    description:
      "Take agent work from 80% to 100%. Review changes, leave comments, and send them back to agents with one click.",
    image: {
      src: "/images/terminal/carousel2-review.jpg",
      alt: "Interactive code review",
      width: 1608,
      height: 1005,
    },
  },
];

export default function TerminalNativeSection() {
  return (
    <section className="py-(--space-section)">
      <div className="mx-auto flex w-full max-w-(--content-max-width) flex-col gap-10 px-6 sm:gap-16 lg:px-10">
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-(--color-text-secondary)">
              Terminal
            </div>
            <h2 className="text-pretty text-[clamp(1.75rem,3.5vw,calc(var(--heading-size)*0.7))] leading-[1.15] text-(--color-text) [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [letter-spacing:var(--heading-letter-spacing)]">
              Agent workflows that feel native.
            </h2>
          </div>
          <p className="text-pretty text-(length:--body-size) leading-(--body-line-height) text-(--color-text-secondary)">
            Switch between assisted and manual workflows without leaving the
            terminal.
          </p>
        </div>

        <TerminalNativeCarousel tabs={tabs} autoAdvanceMs={6000} />
      </div>
    </section>
  );
}
