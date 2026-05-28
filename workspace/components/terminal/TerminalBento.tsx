import Image from "next/image";

interface BentoCardProps {
  image: { src: string; alt: string; width: number; height: number };
  title: string;
  description: string;
  colSpan: number;
  roundedClass: string;
  bgClass?: string;
  photoBgClass?: string;
}

function BentoCard({
  image,
  title,
  description,
  colSpan,
  roundedClass,
  bgClass = "bg-(--color-surface)",
  photoBgClass,
}: BentoCardProps) {
  return (
    <div
      className={`relative ${colSpan === 3 ? "lg:col-span-3" : colSpan === 2 ? "lg:col-span-2" : ""}`}
    >
      <div
        className={`absolute inset-0 rounded-[calc(var(--radius)*1.5)] ${bgClass} ${roundedClass}`}
      />
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius)*1.5)] ${roundedClass}`}
      >
        <div className="flex h-full flex-col">
          <div className="relative overflow-hidden">
            {photoBgClass && (
              <div className={`absolute inset-0 bg-cover bg-center opacity-40 ${photoBgClass}`} />
            )}
            <div className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="p-8 sm:p-10 pt-4">
            <p className="mt-2 text-lg font-medium tracking-tight text-(--color-text)">
              {title}
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-(--color-text-secondary)">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`pointer-events-none absolute inset-0 rounded-[calc(var(--radius)*1.5)] shadow-sm ${roundedClass}`}
      />
    </div>
  );
}

export default function TerminalBento() {
  return (
    <section
      className="py-(--space-section)"
      id="terminal-bento"
    >
      <div className="mx-auto flex w-full max-w-(--content-max-width) flex-col gap-10 px-6 sm:gap-16 lg:px-10">
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-(--color-text-secondary)">
              Capabilities
            </div>
            <h2 className="text-pretty text-[clamp(1.75rem,3.5vw,calc(var(--heading-size)*0.7))] leading-[1.15] text-(--color-text) [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [letter-spacing:var(--heading-letter-spacing)]">
              Build, review, and ship in one surface.
            </h2>
          </div>
          <p className="text-pretty text-(length:--body-size) leading-(--body-line-height) text-(--color-text-secondary)">
            Key agent experiences, structured for fast iteration.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-[auto_auto]">
          <BentoCard
            image={{
              src: "/images/terminal/bento-vertical-tabs.jpg",
              alt: "Vertical Tabs",
              width: 792,
              height: 495,
            }}
            title="Vertical Tabs"
            description="Display terminal sessions as vertical tabs and configure metadata like git branch, worktrees, and pull-requests."
            colSpan={3}
            roundedClass="max-lg:rounded-t-[calc(var(--radius)*3)] lg:rounded-tl-[calc(var(--radius)*3)]"
          />
          <BentoCard
            image={{
              src: "/images/terminal/bento-review.jpg",
              alt: "Review output",
              width: 792,
              height: 495,
            }}
            title="Interactive Code Review"
            description="Take agent work from 80% to 100%. Review changes, leave comments, and send to agents with one click."
            colSpan={3}
            roundedClass="lg:rounded-tr-[calc(var(--radius)*3)]"
          />
          <BentoCard
            image={{
              src: "/images/terminal/bento-themes.jpg",
              alt: "Themes",
              width: 1200,
              height: 750,
            }}
            title="Customizable Appearance"
            description="Customize your theme, input, default model, tab colors, and more."
            colSpan={2}
            roundedClass="lg:rounded-bl-[calc(var(--radius)*3)]"
          />
          <BentoCard
            image={{
              src: "/images/terminal/bento-drive.jpg",
              alt: "Warp Drive",
              width: 1200,
              height: 750,
            }}
            title="Drive"
            description="From MCP to rules to Drive, Warp centralizes knowledge for agents and teammates to build and ship high quality software."
            colSpan={2}
            roundedClass=""
            photoBgClass="bg-[url('/photos/1.webp')]"
          />
          <BentoCard
            image={{
              src: "/images/terminal/bento-notifications.jpg",
              alt: "Notifications",
              width: 1200,
              height: 750,
            }}
            title="Notifications"
            description="Agents will notify you when they need attention. Approving a command, reviewing a plan, and confirming they've finished a task."
            colSpan={2}
            roundedClass="max-lg:rounded-b-[calc(var(--radius)*3)] lg:rounded-br-[calc(var(--radius)*3)]"
          />
        </div>
      </div>
    </section>
  );
}
