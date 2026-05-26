import LockIcon from "@/components/shared/icons/LockIcon";
import ShieldWarningIcon from "@/components/shared/icons/ShieldWarningIcon";
import SlidersIcon from "@/components/shared/icons/SlidersIcon";
import KeyIcon from "@/components/shared/icons/KeyIcon";

const features = [
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
    <section className="py-(--space-section)" id="terminal-features">
      <div
        className="mx-auto w-full px-6 lg:px-10 flex flex-col gap-10 sm:gap-16"
        style={{ maxWidth: "var(--content-max-width)" }}
      >
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-(--color-text-secondary)">
              Features
            </div>
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
              Designed for security. Built for organizations.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 text-base/7"
            >
              <div className="flex size-6 items-center justify-start text-(--color-text) [&_svg]:size-full">
                {feature.icon ?? <div aria-hidden="true" className="h-6" />}
              </div>
              <div className="text-(--color-text-secondary) [&_p]:inline [&_p]:m-0">
                <h3 className="inline font-semibold text-(--color-text)">
                  {feature.title}{" "}
                </h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
