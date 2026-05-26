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
      "Review high-level telemetry events used for app analytics and monitor telemetry in real time with Warp's native Network Log. Enterprise customers can also export usage data through the Enterprise Analytics API.",
  },
];

export default function PricingPrivacySecurity() {
  return (
    <section className="py-(--space-section)" id="privacy-security">
      <div className="mx-auto flex w-full max-w-(--content-max-width) flex-col gap-10 px-6 sm:gap-16 lg:px-10">
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-(--color-text-secondary)">
              Your privacy and security
            </div>
            <h2 className="text-pretty text-[clamp(1.75rem,3.5vw,calc(var(--heading-size)*0.7))] leading-[1.15] text-(--color-text) [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [letter-spacing:var(--heading-letter-spacing)]">
              Transparency and control at every touchpoint.
            </h2>
          </div>
          <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/privacy"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl text-sm/7 font-medium transition-colors duration-(--duration-normal) text-(--color-text) hover:bg-text/10 h-11 px-4 py-2 w-full sm:w-auto"
            >
              Explore Privacy at Warp
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-4 text-base/7">
              <div className="flex size-6 items-center justify-start text-(--color-text) [&_svg]:size-full">
                {feature.icon}
              </div>
              <div className="text-(--color-text-secondary) [&_p]:inline [&_p]:m-0">
                <h3 className="inline font-semibold text-(--color-text)">{feature.title} </h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
