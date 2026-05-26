import Image from "next/image";
import Link from "next/link";

interface Agent {
  name: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
    </svg>
  );
}

function WarpMark() {
  return (
    <svg viewBox="0 0 268 214" fill="white" style={{ width: 13, height: 13 }}>
      <path d="M136.6 0.879178C136.676 0.565012 136.714 0.407929 136.801 0.290884C136.877 0.187623 136.98 0.106759 137.098 0.0567192C137.232 0 137.394 0 137.717 0H237.714C254.047 0 267.288 13.6823 267.288 30.5603V149.206C267.288 166.084 254.047 179.766 237.714 179.766H94.7818C94.2834 179.766 94.0342 179.766 93.8631 179.663C93.7131 179.572 93.6013 179.43 93.5487 179.263C93.4887 179.073 93.5473 178.831 93.6645 178.346L136.6 0.879178Z" />
      <path d="M110.265 35.474C110.381 34.9903 110.439 34.7484 110.378 34.5581C110.326 34.3913 110.214 34.2496 110.064 34.1593C109.893 34.0564 109.644 34.0564 109.147 34.0564H29.3224C13.1281 34.0564 0 47.7387 0 64.6166V183.262C0 200.14 13.1281 213.822 29.3224 213.822H128.457C128.781 213.822 128.943 213.822 129.077 213.766C129.195 213.715 129.298 213.634 129.375 213.531C129.461 213.413 129.499 213.256 129.575 212.941L133.035 198.516C133.151 198.032 133.209 197.79 133.149 197.6C133.096 197.433 132.984 197.291 132.834 197.201C132.663 197.098 132.415 197.098 131.917 197.098H72.953C72.4556 197.098 72.2068 197.098 72.0359 196.995C71.886 196.905 71.7742 196.763 71.7214 196.597C71.6612 196.406 71.7192 196.164 71.8353 195.681L110.265 35.474Z" />
    </svg>
  );
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
        <svg
          height="13"
          viewBox="0 0 24 24"
          width="13"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flex: "0 0 auto", lineHeight: 1 }}
        >
          <title>Claude</title>
          <path
            d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"
            fill="#D97757"
            fillRule="nonzero"
          />
        </svg>
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
        className="inline-flex shrink-0 items-center justify-center ring-1 ring-white/10"
        style={{
          width: 24,
          height: 24,
          borderRadius: 6,
          backgroundColor: "rgb(18, 18, 18)",
        }}
      >
        <WarpMark />
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
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
