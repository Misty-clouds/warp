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
  icon: React.ReactNode;
}


const agents: Agent[] = [
  {
    name: "Claude Code",
    title: "Claude Code.",
    description:
      "Pair Claude Code with Warp for expert agents in full harness, streaming logs, and notifications.",
    href: "/agents/claude-code",
    icon: (
      <div className="inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-[rgb(217,119,87)] ring-1 ring-white/10">
        <ClaudeIcon />
      </div>
    ),
  },
  {
    name: "Codex",
    title: "Codex.",
    description:
      "Run the OpenAI Codex CLI in Warp with vertical tabs, notifications, and code review.",
    href: "/agents/codex",
    icon: (
      <div className="inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-white ring-1 ring-white/10">
        <Image
          src="/logos/openai-black.svg"
          alt=""
          aria-hidden
          width={17}
          height={17}
          className="size-[17px] object-contain"
        />
      </div>
    ),
  },
  {
    name: "Opencode",
    title: "Opencode.",
    description:
      "Level up Opencode with Warp's agentic workflows, context sharing, and session management.",
    href: "/agents/opencode",
    icon: (
      <div className="inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-black ring-1 ring-white/10">
        <Image
          src="/logos/open-code.svg"
          alt=""
          aria-hidden
          width={13}
          height={13}
          className="object-contain"
        />
      </div>
    ),
  },
  {
    name: "Gemini CLI",
    title: "Gemini CLI.",
    description:
      "Supercharge the Gemini CLI with remote control, rich context, and multi-session views.",
    href: "/agents/gemini-cli",
    icon: (
      <div className="inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-transparent ring-1 ring-white/10">
        <Image
          src="/logos/gemini-cli.svg"
          alt=""
          aria-hidden
          width={20}
          height={20}
          className="object-contain"
        />
      </div>
    ),
  },
  {
    name: "Warp Agent",
    title: "Warp Agent.",
    description:
      "The built-in coding agent at the center of Warp's agentic development environment.",
    href: "/agents/warp-agent",
    icon: (
      <div className="inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-[rgb(18,18,18)] text-white ring-1 ring-white/10">
        <WarpMark className="size-3.5" />
      </div>
    ),
  },
];

export default function TerminalAgentList() {
  return (
    <section className="py-(--space-section)">
      <div className="mx-auto flex w-full max-w-(--content-max-width) flex-col gap-10 px-6 sm:gap-16 lg:px-10">
        <div className="flex max-w-2xl flex-col gap-6">
          <h2 className="text-pretty text-[clamp(1.75rem,3.5vw,calc(var(--heading-size)*0.7))] leading-[1.15] text-(--color-text) [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [letter-spacing:var(--heading-letter-spacing)]">
            Built with any agent
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <div key={agent.name} className="flex flex-col gap-4 text-base/7">
              <div className="flex size-6 items-center justify-start text-(--color-text) [&_svg]:size-full">
                {agent.icon}
              </div>
              <div className="text-(--color-text-secondary) [&_p]:inline [&_p]:m-0">
                <h3 className="inline font-semibold text-(--color-text)">
                  {agent.title}{" "}
                </h3>
                <p>{agent.description}</p>
              </div>
              <div className="mt-auto pt-2">
                <Link
                  href={agent.href}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl text-sm/7 font-medium transition-colors text-(--color-text) hover:bg-text/10 h-11 px-4 py-2 -ml-4"
                >
                  Learn more
                  <ArrowRightLgIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
