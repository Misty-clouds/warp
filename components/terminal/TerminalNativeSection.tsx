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
      <div
        className="mx-auto w-full px-6 lg:px-10 flex flex-col gap-10 sm:gap-16"
        style={{ maxWidth: "var(--content-max-width)" }}
      >
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-(--color-text-secondary)">
              Terminal
            </div>
            <h2
              className="text-pretty text-(--color-text)"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: "var(--heading-weight)",
                fontSize:
                  "clamp(1.75rem, 3.5vw, calc(var(--heading-size) * 0.7))",
                lineHeight: 1.15,
                letterSpacing: "var(--heading-letter-spacing)",
              }}
            >
              Agent workflows that feel native.
            </h2>
          </div>
          <p
            className="text-(--color-text-secondary) text-pretty"
            style={{
              fontSize: "var(--body-size)",
              lineHeight: "var(--body-line-height)",
            }}
          >
            Switch between assisted and manual workflows without leaving the
            terminal.
          </p>
        </div>

        <TerminalNativeCarousel tabs={tabs} autoAdvanceMs={6000} />
      </div>
    </section>
  );
}
