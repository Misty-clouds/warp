import LockIcon from "@/components/icons/LockIcon";
import ShieldWarningIcon from "@/components/icons/ShieldWarningIcon";
import SlidersIcon from "@/components/icons/SlidersIcon";
import KeyIcon from "@/components/icons/KeyIcon";

const features: {
  icon: React.ReactNode | null;
  title: string;
  description: string;
}[] = [
  {
    icon: <LockIcon />,
    title: "Enterprise-Grade controls.",
    description:
      "SAML-based SSO, role based access control for permission management",
  },
  {
    icon: <ShieldWarningIcon />,
    title: "Your data, your control.",
    description:
      "SOC2 Type 2 compliance; industry leading data policies including zero-data retention",
  },
  {
    icon: null,
    title: "Privacy, even from agents.",
    description: "Secret redaction with custom regexes",
  },
  {
    icon: null,
    title: "Flexible hosting and compute.",
    description:
      "BYOLLM support and flexible hosting so your code stays inside your infrastructure",
  },
  {
    icon: <SlidersIcon />,
    title: "Centralized admin controls.",
    description:
      "Set agent permissions for your whole team; central usage reporting",
  },
  {
    icon: <KeyIcon />,
    title: "Password manager integrations.",
    description: "Read secrets directly from 1Password or LastPass",
  },
];

export default function TerminalFeatureList() {
  return (
    <section
      data-component="Section"
      id="terminal-features"
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
              Features
            </div>
            <h2
              data-component="Subheading"
              className="text-pretty text-(--color-text) [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] text-[clamp(1.75rem,3.5vw,calc(var(--heading-size)*0.7))] leading-[1.15] [letter-spacing:var(--heading-letter-spacing)]"
            >
              Designed for security. Built for organizations.
            </h2>
          </div>
          <div
            data-component="Text"
            className="text-pretty text-(--color-text-secondary) [font-family:var(--font-body)] [font-weight:var(--body-weight)] [font-size:var(--body-size)] leading-(--body-line-height)"
          >
            <p>&nbsp;</p>
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
                {feature.icon ? (
                  <div className="flex size-6 items-center justify-start text-(--color-text) [&_svg]:size-full">
                    {feature.icon}
                  </div>
                ) : (
                  <div aria-hidden="true" className="h-6" />
                )}
                <div className="text-(--color-text-secondary) [&_p]:m-0 [&_p]:inline">
                  <h3 className="inline font-semibold text-(--color-text)">
                    {feature.title}
                  </h3>{" "}
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
