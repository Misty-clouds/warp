import Link from "next/link";
import ShieldWarningIcon from "@/components/icons/ShieldWarningIcon";
import SlidersIcon from "@/components/icons/SlidersIcon";
import SearchIcon from "@/components/icons/SearchIcon";

const features = [
  {
    icon: <ShieldWarningIcon />,
    title: "Your data, secure and private.",
    description:
      "Warp is SOC 2 compliant and has Zero Data Retention agreements with contracted LLM providers. These providers do not retain, store, or train models on customer data processed through Warp.",
  },
  {
    icon: <SlidersIcon />,
    title: "Complete control of your agents.",
    description:
      "Control how much autonomy agents have, from approving each step to allowing more autonomous execution. Enterprise teams get additional governance and policy controls.",
  },
  {
    icon: <SearchIcon />,
    title: "Full transparency.",
    description:
      "Review high-level telemetry events used for app analytics and monitor telemetry in real time with Warp’s native Network Log. Enterprise customers can also export usage data through the Enterprise Analytics API.",
  },
];

export default function PricingPrivacySecurity() {
  return (
    <section
      id="privacy-security"
      data-component="Section"
      data-motion-reveal="visible"
      className="py-16"
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
            <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-(--color-text-secondary)">
              Your privacy and security
            </div>
            <h2
              data-component="Subheading"
              className="text-pretty font-heading text-(--color-text) text-[clamp(1.75rem,3.5vw,calc(var(--heading-size)*0.7))] leading-[1.15] [font-weight:var(--heading-weight)] [letter-spacing:var(--heading-letter-spacing)]"
            >
              Transparency and control at every touchpoint.
            </h2>
          </div>
          <div
            data-component="Text"
            className="text-pretty text-(--color-text-secondary) text-(length:--body-size) leading-(--body-line-height) [font-family:var(--font-body)] [font-weight:var(--body-weight)]"
          >
        
          </div>
          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/privacy"
              data-variant="plain"
              data-size="lg"
              className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm/7 font-medium text-(--color-text) transition-colors duration-(--duration-normal) hover:bg-text/10 sm:w-auto"
            >
              Explore Privacy at Warp
            </Link>
          </div>
        </div>
        <div
          data-motion-reveal-item=""
          className="[--reveal-delay:80ms]"
        >
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                data-component="Feature"
                className="flex flex-col gap-4 text-base/7"
              >
                <div className="flex size-6 items-center justify-start text-(--color-text) [&_svg]:size-full">
                  {feature.icon}
                </div>
                <div className="text-(--color-text-secondary) [&_p]:m-0 [&_p]:inline">
                  <h3 className="inline font-semibold text-(--color-text)">{feature.title}</h3>{" "}
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
