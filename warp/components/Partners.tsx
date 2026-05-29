import Image from "next/image";

const logos = [
  { name: "GitHub", src: "/logos/github-dark.svg", width: 88, height: 25, chip: "Since 2023", chipUrl: "https://github.com" },
  { name: "Asana", src: "/logos/asana-dark.svg", width: 123, height: 24 },
  { name: "Retool", src: "/logos/retool-dark.svg", width: 113, height: 24 },
  { name: "VMware", src: "/logos/vmware-dark.svg", width: 118, height: 18 },
];

const partners = [
  {
    name: "Anthropic",
    logo: "/logos/anthropic.svg",
    logoWidth: 150,
    logoHeight: 16,
    bg: "/images/partner-anthropic-bg.jpg",
    badge: "Livestream",
    badgeUrl: "https://www.youtube.com/watch?v=GBe0X14E0GM",
  },
  {
    name: "OpenAI",
    logo: "/logos/openai-partner.svg",
    logoWidth: 123,
    logoHeight: 33,
    bg: "/images/partner-openai-bg.jpg",
    badge: "Livestream",
    badgeUrl: "https://www.youtube.com/watch?v=Kw6bfR5oLuQ",
  },
  {
    name: "Docker",
    logo: "/logos/docker.svg",
    logoWidth: 130,
    logoHeight: 30,
    bg: "/images/partner-docker-bg.jpg",
    badge: "Case Study",
    badgeUrl: "https://www.warp.dev/customers/docker",
  },
  {
    name: "Google",
    logo: "/logos/google.svg",
    logoWidth: 115,
    logoHeight: 37,
    bg: "/images/partner-docker-bg.jpg",
    badge: "Launch Partner",
    badgeUrl: "https://cloud.google.com/blog/products/ai-machine-learning/gemini-3-flash-for-enterprises",
  },
  {
    name: "Stanford",
    logo: "/logos/stanford.svg",
    logoWidth: 132,
    logoHeight: 32,
    bg: "/images/partner-anthropic-bg.jpg",
    badge: "Course Partner",
    badgeUrl: "https://themodernsoftware.dev/",
  },
];

const headingClassName = "text-pretty text-(--color-text) text-[clamp(1.75rem,3.5vw,calc(var(--heading-size)*0.7))] leading-[1.15] [font-family:var(--font-display)] [font-weight:var(--heading-weight)] [letter-spacing:var(--heading-letter-spacing)]";
const bodyClassName = "text-(--color-text-secondary) text-pretty text-(length:--body-size) leading-(--body-line-height) [font-family:var(--font-sans)]";

function LogoMarquee() {
  return (
    <div className="relative overflow-hidden pb-10 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-[scroll-left_40s_linear_infinite]">
        {[false, true, true].map((hidden, groupIdx) => (
          <div
            key={groupIdx}
            className="flex shrink-0 items-center gap-12 pr-12"
            aria-hidden={hidden}
          >
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="group/logo relative flex w-auto shrink-0 flex-col items-center opacity-40 grayscale transition-opacity hover:opacity-70"
              >
                <div className="flex h-7 items-center">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                    className="h-6 w-auto"
                  />
                </div>
                {logo.chip && (
                  <span className="pointer-events-none absolute top-full mt-2 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px]/[1.15] tracking-wide bg-text/10 text-(--color-text) translate-y-1 opacity-0 transition-all duration-200 group-hover/logo:pointer-events-auto group-hover/logo:translate-y-0 group-hover/logo:opacity-100">
                    <a href={logo.chipUrl} target="_blank" rel="noopener noreferrer">{logo.chip}</a>
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function PartnerCard({ partner, className = "" }: { partner: typeof partners[0]; className?: string }) {
  return (
    <div className={`relative flex h-full min-h-35 flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl p-6 ${className}`}>
      <Image
        src={partner.bg}
        alt=""
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 25vw, 50vw"
      />
      <div className="absolute inset-0 bg-black/30" />
      <a
        href={partner.badgeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 left-3 z-10 rounded-full px-2.5 py-1 text-[10px]/[1.15] font-medium tracking-wide transition-colors bg-white/20 text-white backdrop-blur-sm hover:bg-white/35"
      >
        {partner.badge}
      </a>
      <Image
        src={partner.logo}
        alt={`${partner.name} logo`}
        width={partner.logoWidth}
        height={partner.logoHeight}
        className="relative z-10 max-h-8 w-auto max-w-40 object-contain"
      />
    </div>
  );
}

export default function Partners() {
  return (
    <section
      id="partners"
      data-component="PartnersBento"
      data-motion-reveal="visible"
      className="py-(--space-section)"
    >
      <div
        data-component="Container"
        className="mx-auto w-full max-w-(--content-max-width) px-6 lg:px-10"
      >
        {/* Mobile layout */}
        <div
          data-motion-reveal-item=""
          className="flex flex-col gap-10 [--reveal-delay:0ms] sm:hidden"
        >
          <div className="flex min-w-0 flex-col gap-6">
            <h2 data-component="Subheading" className={headingClassName}>
              Proud partner of industry leaders
            </h2>
            <div data-component="Text" className={bodyClassName}>
              <p>Trusted by over 800,000 developers and thousands of engineering teams at leading companies</p>
            </div>
            <div className="pt-4">
              <LogoMarquee />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {partners.map(p => <PartnerCard key={p.name} partner={p} />)}
          </div>
        </div>

        {/* Desktop layout */}
        <div
          data-motion-reveal-item=""
          className="hidden grid-cols-1 items-center gap-10 [--reveal-delay:80ms] sm:grid lg:grid-cols-[2fr_3fr] lg:gap-16"
        >
          <div className="flex min-w-0 flex-col gap-6">
            <h2 data-component="Subheading" className={headingClassName}>
              Proud partner of industry leaders
            </h2>
            <div data-component="Text" className={bodyClassName}>
              <p>Trusted by over 800,000 developers and thousands of engineering teams at leading companies</p>
            </div>
            <div className="pt-4">
              <LogoMarquee />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-6">
              {partners.map((p, i) => (
                <PartnerCard
                  key={p.name}
                  partner={p}
                  className={i < 3 ? "sm:col-span-2" : "sm:col-span-3"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
