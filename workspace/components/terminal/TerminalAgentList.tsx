import Image from "next/image";
import Link from "next/link";
import WarpMark from "@/components/icons/WarpMark";
import ClaudeIcon from "@/components/icons/ClaudeIcon";
import ArrowRightLgIcon from "@/components/icons/ArrowRightLgIcon";

interface Agent {
  name: string;
  title: string;
  description: string;
  href: string;
  iconBg: string;
  icon: React.ReactNode;
}

const agents: Agent[] = [
  {
    name: "Claude Code",
    title: "Claude Code.",
    description:
      "Pair Claude Code with Warp for expert agents in full harness, streaming logs, and notifications.",
    href: "/agents/claude-code",
    iconBg: "bg-[#d97757]",
    icon: <ClaudeIcon className="size-3.25!" />,
  },
  {
    name: "Codex",
    title: "Codex.",
    description:
      "Run the OpenAI Codex CLI in Warp with vertical tabs, notifications, and code review.",
    href: "/agents/codex",
    iconBg: "bg-white",
    icon: (
      <Image
        src="/logos/openai-black.svg"
        alt=""
        aria-hidden
        width={17}
        height={17}
        className="size-4.25 object-contain"
      />
    ),
  },
  {
    name: "Opencode",
    title: "Opencode.",
    description:
      "Level up Opencode with Warp's agentic workflows, context sharing, and session management.",
    href: "/agents/opencode",
    iconBg: "bg-black",
    icon: (
      <Image
        src="/logos/open-code.svg"
        alt=""
        aria-hidden
        width={13}
        height={13}
        className="size-3.25 object-contain"
      />
    ),
  },
  {
    name: "Gemini CLI",
    title: "Gemini CLI.",
    description:
      "Supercharge the Gemini CLI with remote control, rich context, and multi-session views.",
    href: "/agents/gemini-cli",
    iconBg: "bg-transparent",
    icon: (
      <Image
        src="/logos/gemini-cli.svg"
        alt=""
        aria-hidden
        width={20}
        height={20}
        className="size-5 object-contain"
      />
    ),
  },
  {
    name: "Warp",
    title: "Warp Agent.",
    description:
      "The built-in coding agent at the center of Warp's agentic development environment.",
    href: "/agents/warp-agent",
    iconBg: "bg-background",
    icon: <WarpMark className="size-3.25! text-white" />,
  },
];

export default function TerminalAgentList() {
  return (
    <section
      data-component="Section"
      data-motion-reveal="visible"
      className="py-(--space-section)"
    >
      <div
        data-component="Container"
        className="mx-auto flex w-full max-w-(--content-max-width) flex-col gap-10 px-6 sm:gap-16 lg:px-10"
      >
        <div
          data-motion-reveal-item=""
          className="flex max-w-2xl flex-col gap-6 [--reveal-delay:0ms]"
        >
          <div className="flex flex-col gap-2">
            <h2
              data-component="Subheading"
              className="text-pretty text-(--color-text) [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] text-[clamp(1.75rem,3.5vw,calc(var(--heading-size)*0.7))] leading-[1.15] [letter-spacing:var(--heading-letter-spacing)]"
            >
              Built with any agent
            </h2>
          </div>
        </div>

        <div
          data-motion-reveal-item=""
          className="[--reveal-delay:80ms]"
        >
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <div
                key={agent.name}
                data-component="Feature"
                className="flex flex-col gap-4 text-base/7"
              >
                <div className="flex size-6 items-center justify-start text-(--color-text) [&_svg]:size-full">
                  <div
                    title={agent.name}
                    className={`inline-flex size-6 shrink-0 items-center justify-center rounded-md ring-1 ring-white/10 ${agent.iconBg}`}
                  >
                    <div className="flex items-center justify-center [&_svg]:fill-white! [&_svg]:text-white! [&_svg_path]:fill-white!">
                      {agent.icon}
                    </div>
                  </div>
                </div>

                <div className="text-(--color-text-secondary) [&_p]:m-0 [&_p]:inline">
                  <h3 className="inline font-semibold text-(--color-text)">
                    {agent.title}
                  </h3>{" "}
                  <p>{agent.description}</p>
                </div>

                <div className="mt-auto pt-2">
                  <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
                    <Link
                      href={agent.href}
                      data-variant="plain"
                      data-size="lg"
                      className="-ml-4 inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm/7 font-medium text-(--color-text) transition-colors duration-(--duration-normal) hover:bg-text/10 sm:w-auto"
                    >
                      Learn more
                      <ArrowRightLgIcon />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
