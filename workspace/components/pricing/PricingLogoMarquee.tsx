import Image from "next/image";

type Logo = {
  name: string;
  alt: string;
  dark: string;
  width: number;
  height: number;
  href?: string;
  since?: string;
};

const logos: Logo[] = [
  {
    name: "GitHub",
    alt: "GitHub dark logo",
    dark: "/logos/terminal/github-dark.svg",
    width: 88,
    height: 25,
    href: "https://github.com",
    since: "Since 2023",
  },
  { name: "Amazon", alt: "Amazon", dark: "/logos/terminal/amazon-dark.svg", width: 76, height: 23 },
  { name: "Asana", alt: "Asana dark logo", dark: "/logos/terminal/asana-dark.svg", width: 123, height: 24 },
  { name: "Nvidia", alt: "Nvidia", dark: "/logos/terminal/nvidia-dark.svg", width: 111, height: 23 },
  { name: "Retool", alt: "Retool dark logo", dark: "/logos/terminal/retool-dark.svg", width: 113, height: 24 },
  { name: "Docker", alt: "Docker", dark: "/logos/terminal/docker-dark.svg", width: 100, height: 23 },
  { name: "VMware", alt: "VMware dark logo", dark: "/logos/terminal/vmware-dark.svg", width: 118, height: 18 },
  { name: "Ramp", alt: "Ramp", dark: "/logos/terminal/ramp-dark.svg", width: 86, height: 23 },
  { name: "DoorDash", alt: "DoorDash", dark: "/logos/terminal/doordash-dark.svg", width: 147, height: 17 },
  { name: "Amplitude", alt: "Amplitude", dark: "/logos/terminal/amplitude-dark.svg", width: 154, height: 33 },
  { name: "Peloton", alt: "Peloton", dark: "/logos/terminal/peloton-dark.svg", width: 125, height: 37 },
  { name: "Teamworks", alt: "Teamworks", dark: "/logos/terminal/teamworks-dark.svg", width: 148, height: 37 },
];

function LogoItem({ logo }: { logo: Logo }) {
  return (
    <div className="group/logo relative flex w-auto shrink-0 flex-col items-center opacity-40 grayscale transition-opacity hover:opacity-70">
      <div className="flex h-7 items-center">
        <Image
          src={logo.dark}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          loading="lazy"
          className="h-6 w-auto"
        />
      </div>
      {logo.href && logo.since && (
        <span className="pointer-events-none absolute top-full mt-2 translate-y-1 rounded-full bg-text/10 px-2.5 py-1 text-[10px]/[1.15] tracking-wide whitespace-nowrap text-(--color-text) opacity-0 transition-all duration-200 group-hover/logo:pointer-events-auto group-hover/logo:translate-y-0 group-hover/logo:opacity-100">
          <a href={logo.href} target="_blank" rel="noopener noreferrer">
            {logo.since}
          </a>
        </span>
      )}
    </div>
  );
}

function LogoSet({ suffix, ariaHidden }: { suffix: string; ariaHidden: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={ariaHidden}>
      {logos.map((logo) => (
        <LogoItem key={`${logo.name}-${suffix}`} logo={logo} />
      ))}
    </div>
  );
}

export default function PricingLogoMarquee() {
  return (
    <section className="py-16" id="trusted-by">
      <div className="mx-auto mb-8 w-full max-w-(--content-max-width) px-6 lg:px-10">
        <p className="text-center text-sm/7 font-semibold text-(--color-text-secondary)">
          Trusted by over 700,000 developers
        </p>
      </div>
      <div className="relative overflow-hidden pb-10 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-[scroll-left_calc(40s*var(--motion-speed,1))_linear_infinite]">
          <LogoSet suffix="a" ariaHidden={false} />
          <LogoSet suffix="b" ariaHidden={true} />
          <LogoSet suffix="c" ariaHidden={true} />
        </div>
      </div>
    </section>
  );
}
