import Image from "next/image";

const logos = [
  {
    name: "GitHub",
    darkSrc: "/logos/terminal/github-dark.svg",
    lightSrc: "/logos/terminal/github-light.svg",
    width: 88,
    height: 25,
  },
  {
    name: "Amazon",
    darkSrc: "/logos/terminal/amazon-dark.svg",
    lightSrc: "/logos/terminal/amazon-light.svg",
    width: 76,
    height: 23,
  },
  {
    name: "Asana",
    darkSrc: "/logos/terminal/asana-dark.svg",
    lightSrc: "/logos/terminal/asana-light.svg",
    width: 77,
    height: 20,
  },
  {
    name: "Nvidia",
    darkSrc: "/logos/terminal/nvidia-dark.svg",
    lightSrc: "/logos/terminal/nvidia-light.svg",
    width: 74,
    height: 14,
  },
  {
    name: "Retool",
    darkSrc: "/logos/terminal/retool-dark.svg",
    lightSrc: "/logos/terminal/retool-light.svg",
    width: 74,
    height: 20,
  },
  {
    name: "Docker",
    darkSrc: "/logos/terminal/docker-dark.svg",
    lightSrc: "/logos/terminal/docker-light.svg",
    width: 74,
    height: 20,
  },
];

function LogoSet() {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="group/logo relative flex w-auto shrink-0 flex-col items-center opacity-40 grayscale transition-opacity hover:opacity-70"
        >
          <div className="flex h-7 items-center">
            <Image
              src={logo.darkSrc}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              style={{ height: "1.5rem", width: "auto" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PricingLogoMarquee() {
  return (
    <section className="pt-(--space-section) pb-0" id="trusted-by">
      <div
        className="mx-auto w-full px-6 lg:px-10 mb-10"
        style={{ maxWidth: "var(--content-max-width)" }}
      >
        <p className="text-center text-sm/7 font-semibold text-(--color-text-secondary)">
          Trusted by over 700,000 developers
        </p>
      </div>
      <div className="relative overflow-hidden pb-10 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className="flex w-max animate-scroll-left"
          style={{ "--scroll-duration": "40s" } as React.CSSProperties}
        >
          <LogoSet />
          <LogoSet />
        </div>
      </div>
    </section>
  );
}
