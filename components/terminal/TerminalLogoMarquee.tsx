import Image from "next/image";

const logos = [
  {
    name: "GitHub",
    dark: "/logos/terminal/github-dark.svg",
    width: 88,
    height: 25,
    href: "https://github.com",
    since: "Since 2023",
  },
  { name: "Amazon", dark: "/logos/terminal/amazon-dark.svg", width: 76, height: 23 },
  { name: "Asana", dark: "/logos/terminal/asana-dark.svg", width: 123, height: 24 },
  { name: "Nvidia", dark: "/logos/terminal/nvidia-dark.svg", width: 111, height: 23 },
  { name: "Retool", dark: "/logos/terminal/retool-dark.svg", width: 113, height: 24 },
  { name: "Docker", dark: "/logos/terminal/docker-dark.svg", width: 100, height: 23 },
  { name: "VMware", dark: "/logos/terminal/vmware-dark.svg", width: 118, height: 18 },
  { name: "Ramp", dark: "/logos/terminal/ramp-dark.svg", width: 86, height: 23 },
  { name: "DoorDash", dark: "/logos/terminal/doordash-dark.svg", width: 147, height: 17 },
  { name: "Amplitude", dark: "/logos/terminal/amplitude-dark.svg", width: 154, height: 33 },
  { name: "Peloton", dark: "/logos/terminal/peloton-dark.svg", width: 125, height: 37 },
  { name: "Teamworks", dark: "/logos/terminal/teamworks-dark.svg", width: 148, height: 37 },
];

const marqueeLogoHeight = 24;

function LogoItem({ logo }: { logo: (typeof logos)[0] }) {
  return (
    <div className="group/logo relative flex w-auto shrink-0 flex-col items-center opacity-40 grayscale transition-opacity hover:opacity-70">
      <div className="flex h-7 items-center">
        <Image
          src={logo.dark}
          alt={logo.name}
          width={logo.width}
          height={logo.height}
          style={{
            height: `${marqueeLogoHeight}px`,
            width: `${Math.round((logo.width / logo.height) * marqueeLogoHeight)}px`,
          }}
        />
      </div>
      {logo.since && logo.href && (
        <span className="pointer-events-none absolute top-full mt-2 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px]/[1.15] tracking-wide bg-text/10 text-(--color-text) translate-y-1 opacity-0 transition-all duration-200 group-hover/logo:pointer-events-auto group-hover/logo:translate-y-0 group-hover/logo:opacity-100">
          <a href={logo.href} target="_blank" rel="noopener noreferrer">
            {logo.since}
          </a>
        </span>
      )}
    </div>
  );
}

function LogoSet({ suffix }: { suffix: string }) {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12">
      {logos.map((logo) => (
        <LogoItem key={`${logo.name}-${suffix}`} logo={logo} />
      ))}
    </div>
  );
}

export default function TerminalLogoMarquee() {
  return (
    <section className="py-(--space-section)">
      <div
        className="mx-auto w-full px-6 lg:px-10 mb-8"
        style={{ maxWidth: "var(--content-max-width)" }}
      >
        <p className="text-center text-sm/7 font-semibold text-(--color-text-secondary)">
          Trusted by over 800,000 developers and thousands of engineering teams
          at leading companies
        </p>
      </div>

      <div className="relative overflow-hidden pb-10 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className="flex w-max animate-[scroll-left_var(--scroll-duration)_linear_infinite]"
          style={{ "--scroll-duration": "calc(40s * var(--motion-speed, 1))" } as React.CSSProperties}
        >
          <LogoSet suffix="a" />
          <LogoSet suffix="b" />
        </div>
      </div>
    </section>
  );
}
