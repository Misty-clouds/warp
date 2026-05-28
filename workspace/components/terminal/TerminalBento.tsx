import Image from "next/image";

type BentoColor = "neutral" | "dark" | "light" | "photo" | "blue";

interface BentoCardProps {
  image: { src: string; alt: string; width: number; height: number };
  title: string;
  description: string;
  colSpan: 2 | 3;
  color: BentoColor;
  outerRounded?: string;
  innerRounded?: string;
  photoBgClass?: string;
}

function BentoCard({
  image,
  title,
  description,
  colSpan,
  color,
  outerRounded = "",
  innerRounded = "",
  photoBgClass,
}: BentoCardProps) {
  return (
    <div
      data-component="BentoCard"
      className={`relative ${colSpan === 3 ? "lg:col-span-3" : "lg:col-span-2"}`}
    >
      <div
        className={`absolute inset-0 rounded-[calc(var(--radius)*1.5)] bg-(--color-surface) ${outerRounded}`}
      />
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius)*1.5+1px)] ${innerRounded}`}
      >
        <div className="flex h-full flex-col">
          <div
            data-color={color}
            data-placement="full"
            className="group relative overflow-hidden data-[color=neutral]:bg-(--color-surface) data-[color=dark]:bg-(--color-background) data-[color=light]:bg-(--color-panel) data-[color=photo]:bg-(--color-surface) data-[color=blue]:bg-linear-to-br data-[color=blue]:from-[#0a1220] data-[color=blue]:to-[#141e30]"
          >
            {photoBgClass && (
              <div
                className={`absolute inset-0 bg-cover bg-center opacity-40 ${photoBgClass}`}
              />
            )}
            <div className="pointer-events-none relative z-20 h-full [&_img]:pointer-events-auto">
              <div className="relative flex h-full items-center justify-center [--padding:min(10%,--spacing(16))] group-data-[placement=bottom]:px-(--padding) group-data-[placement=bottom]:pt-(--padding) group-data-[placement=bottom-left]:pt-(--padding) group-data-[placement=bottom-left]:pr-(--padding) group-data-[placement=bottom-right]:pt-(--padding) group-data-[placement=bottom-right]:pl-(--padding) group-data-[placement=top]:px-(--padding) group-data-[placement=top]:pb-(--padding) group-data-[placement=top-left]:pr-(--padding) group-data-[placement=top-left]:pb-(--padding) group-data-[placement=top-right]:pb-(--padding) group-data-[placement=top-right]:pl-(--padding)">
                <div className="w-full *:relative *:w-full *:ring-1 *:ring-black/10 group-data-[placement=center]:h-full group-data-[placement=full]:h-full group-data-[placement=center]:*:h-full group-data-[placement=full]:*:h-full group-data-[placement=center]:*:object-cover group-data-[placement=full]:*:object-cover group-data-[placement=center]:*:ring-0 group-data-[placement=full]:*:ring-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes={
                      colSpan === 3
                        ? "(max-width: 1024px) 100vw, 50vw"
                        : "(max-width: 1024px) 100vw, 33vw"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 pt-4 sm:p-10">
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
        className={`pointer-events-none absolute inset-0 rounded-[calc(var(--radius)*1.5)] shadow-sm ${outerRounded}`}
      />
    </div>
  );
}

export default function TerminalBento() {
  return (
    <section
      data-component="Section"
      data-motion-reveal="visible"
      id="terminal-bento"
      className="py-(--space-section)"
    >
      <div
        data-component="Container"
        className="mx-auto flex w-full max-w-(--content-max-width) flex-col gap-10 px-6 sm:gap-16 lg:px-10"
      >
        <div
          data-motion-reveal-item=""
          className="flex max-w-2xl flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-(--color-text-secondary)">
              Capabilities
            </div>
            <h2
              data-component="Subheading"
              className="text-pretty text-[clamp(1.75rem,3.5vw,calc(var(--heading-size)*0.7))] leading-[1.15] text-(--color-text) [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [letter-spacing:var(--heading-letter-spacing)]"
            >
              Build, review, and ship in one surface.
            </h2>
          </div>
          <div
            data-component="Text"
            className="text-pretty text-(length:--body-size) leading-(--body-line-height) text-(--color-text-secondary) [font-family:var(--font-body)] [font-weight:var(--body-weight)]"
          >
            <p>Key agent experiences, structured for fast iteration.</p>
          </div>
        </div>

        <div data-motion-reveal-item="">
          <div
            data-component="BentoGrid"
            className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-[auto_auto]"
          >
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
              color="neutral"
              outerRounded="max-lg:rounded-t-[calc(var(--radius)*3)] lg:rounded-tl-[calc(var(--radius)*3)]"
              innerRounded="max-lg:rounded-t-[calc(var(--radius)*3+1px)] lg:rounded-tl-[calc(var(--radius)*3+1px)]"
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
              color="dark"
              outerRounded="lg:rounded-tr-[calc(var(--radius)*3)]"
              innerRounded="lg:rounded-tr-[calc(var(--radius)*3+1px)]"
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
              color="light"
              outerRounded="lg:rounded-bl-[calc(var(--radius)*3)]"
              innerRounded="lg:rounded-bl-[calc(var(--radius)*3+1px)]"
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
              color="photo"
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
              description="Agents will notify you when they need attention. Approving a command, reviewing a plan, and confirming they’ve finished a task."
              colSpan={2}
              color="blue"
              outerRounded="max-lg:rounded-b-[calc(var(--radius)*3)] lg:rounded-br-[calc(var(--radius)*3)]"
              innerRounded="max-lg:rounded-b-[calc(var(--radius)*3+1px)] lg:rounded-br-[calc(var(--radius)*3+1px)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
