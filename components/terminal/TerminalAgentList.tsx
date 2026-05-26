import Image from "next/image";
import Link from "next/link";
import WarpMark from "@/components/shared/icons/WarpMark";
import ClaudeIcon from "@/components/shared/icons/ClaudeIcon";
import ArrowRightLgIcon from "@/components/shared/icons/ArrowRightLgIcon";

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
      <div
        className="inline-flex shrink-0 items-center justify-center ring-1 ring-white/10"
        style={{
          width: 24,
          height: 24,
          borderRadius: 6,
          backgroundColor: "rgb(217, 119, 87)",
        }}
      >
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
      <div
        className="inline-flex shrink-0 items-center justify-center ring-1 ring-white/10"
        style={{
          width: 24,
          height: 24,
          borderRadius: 6,
          backgroundColor: "rgb(255, 255, 255)",
        }}
      >
        <Image
          src="/logos/openai-black.svg"
          alt=""
          aria-hidden
          width={17}
          height={17}
          style={{ width: 17, height: 17, objectFit: "contain" }}
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
      <div
        className="inline-flex shrink-0 items-center justify-center ring-1 ring-white/10"
        style={{
          width: 24,
          height: 24,
          borderRadius: 6,
          backgroundColor: "rgb(0, 0, 0)",
        }}
      >
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
      <div
        className="inline-flex shrink-0 items-center justify-center ring-1 ring-white/10"
        style={{
          width: 24,
          height: 24,
          borderRadius: 6,
          backgroundColor: "transparent",
        }}
      >
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
      <div
        className="inline-flex shrink-0 items-center justify-center ring-1 ring-white/10 text-white"
        style={{
          width: 24,
          height: 24,
          borderRadius: 6,
          backgroundColor: "rgb(18, 18, 18)",
        }}
      >
        <WarpMark className="size-3.5" />
      </div>
    ),
  },
];

export default function TerminalAgentList() {
  return (
    <section className="py-(--space-section)">
      <div
        className="mx-auto w-full px-6 lg:px-10 flex flex-col gap-10 sm:gap-16"
        style={{ maxWidth: "var(--content-max-width)" }}
      >
        <div className="flex max-w-2xl flex-col gap-6">
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
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-(--radius-xl) text-sm/7 font-medium transition-colors text-(--color-text) hover:bg-text/10 h-11 px-4 py-2 -ml-4"
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
