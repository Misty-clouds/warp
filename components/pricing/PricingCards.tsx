"use client";

import { useState } from "react";
import Link from "next/link";
import DottedTooltip from "@/components/shared/DottedTooltip";

interface Feature {
  text: string;
  dotted?: boolean;
  tooltip?: string;
}

interface Plan {
  name: string;
  priceLine?: string;
  price: string;
  period?: string;
  description: string;
  cta: string;
  ctaHref: string;
  accentLabel: string;
  accentGreen?: boolean;
  features: Feature[];
  recommended?: boolean;
  animated?: boolean;
  hasReloadSection?: boolean;
}

const MONTHLY_PLANS: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For developers who want a modern terminal with support for agentic coding (up to 10 seats)",
    cta: "Download Now",
    ctaHref: "https://app.warp.dev/get_warp",
    accentLabel: "Includes free AI credits",
    accentGreen: true,
    features: [
      { text: "State-of-the-art modern terminal" },
      {
        text: "Limited Warp Agent access",
        dotted: true,
        tooltip: "Up to 150 AI credits for the first 2 months, then 60/month",
      },
      {
        text: "Limited cloud agents access",
        dotted: true,
        tooltip: "Run up to 4 concurrent cloud agents with 2 vCPUs and 4 GiB RAM",
      },
      {
        text: "Bring your own API key*",
        dotted: true,
        tooltip: "Connect your own OpenAI, Anthropic, or other provider API keys",
      },
      {
        text: "Custom inference endpoint support*",
        dotted: true,
        tooltip: "Route AI requests to a custom inference endpoint you control",
      },
      {
        text: "Use any harness in the cloud (beta)",
        dotted: true,
        tooltip: "Choose from available cloud execution environments for your agents",
      },
      {
        text: "Individually configured data controls",
        dotted: true,
        tooltip: "Each user can configure their own Zero Data Retention and privacy settings",
      },
      {
        text: "Limited Warp Drive and collaboration feature access",
        dotted: true,
        tooltip: "Access to 10 workflows and 3 notebooks in shared Warp Drive; up to 5 shared sessions",
      },
      {
        text: "Limited cloud conversation storage",
        dotted: true,
        tooltip: "Store up to 30 AI conversations in the cloud",
      },
    ],
  },
  {
    name: "Build",
    priceLine: "Pay as you go, starting at:",
    price: "$20",
    period: "/month",
    description: "For developers who want flexible access to AI that scales with their usage (up to 10 seats)",
    cta: "Start Today",
    ctaHref: "https://app.warp.dev/login?redirect_to=/upgrade",
    accentLabel: "Everything in Free, plus:",
    accentGreen: true,
    recommended: true,
    animated: true,
    hasReloadSection: true,
    features: [
      { text: "1,500 credits per month for cloud and local agents" },
      { text: "Full Warp Agent access (including frontier OpenAI, Anthropic, and Google models)" },
      {
        text: "Reload credits with volume-based discounts, auto-reload, and team-wide spend cap",
        dotted: true,
        tooltip: "Purchase additional credits beyond your monthly allotment at discounted rates; configure auto-reload and team spending limits",
      },
      { text: "Extended cloud agents access" },
      { text: "Highest codebase indexing limits" },
      { text: "Unlimited Warp Drive objects and collaboration" },
      {
        text: "Unlimited cloud conversation storage",
        dotted: true,
        tooltip: "Store an unlimited number of AI conversations in the cloud",
      },
      { text: "Private email support" },
    ],
  },
  {
    name: "Max",
    priceLine: "Pay as you go, starting at:",
    price: "$200",
    period: "/month",
    description: "For developers who need maximum AI capacity with all the flexibility of Build (up to 10 seats)",
    cta: "Start Today",
    ctaHref: "https://app.warp.dev/login?redirect_to=/upgrade",
    accentLabel: "Everything in Build, plus:",
    accentGreen: true,
    hasReloadSection: true,
    features: [
      {
        text: "12× the included credits of Build",
        dotted: true,
        tooltip: "18,000 monthly AI credits vs 1,500 in the Build plan",
      },
      {
        text: "Reload credits with volume-based discounts, auto-reload, and team-wide spend cap",
        dotted: true,
        tooltip: "Purchase additional credits at discounted rates; configure auto-reload and team spending limits",
      },
    ],
  },
];

const MONTHLY_PLANS_ROW2: Plan[] = [
  {
    name: "Business",
    priceLine: "Pay as you go, starting at:",
    price: "$50",
    period: "/month",
    description: "For teams scaling AI-powered development (up to 25 seats)",
    cta: "Start Today",
    ctaHref: "https://app.warp.dev/login?redirect_to=/upgrade",
    accentLabel: "Everything in Build, plus:",
    accentGreen: false,
    hasReloadSection: true,
    features: [
      { text: "1,500 credits per month for cloud and local agents" },
      {
        text: "Team usage metrics",
        dotted: true,
        tooltip: "Track credit consumption, agent activity, and spending across all team members",
      },
      {
        text: "Admin-configurable data controls",
        dotted: true,
        tooltip: "Admins can enforce Zero Data Retention and other privacy policies for all team members",
      },
      { text: "SAML-based SSO" },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations needing advanced control, security, and scale",
    cta: "Contact Sales",
    ctaHref: "/contact-sales",
    accentLabel: "Everything in Business, plus:",
    accentGreen: false,
    features: [
      { text: "Unlimited seats" },
      {
        text: "Custom shared credit pools and usage terms",
        dotted: true,
        tooltip: "Negotiate custom credit volumes and pricing terms for your organization",
      },
      {
        text: "Advanced spend controls",
        dotted: true,
        tooltip: "Set granular per-user and organization-wide spending limits",
      },
      {
        text: "Enterprise admin controls",
        dotted: true,
        tooltip: "Advanced administrative features including multi-admin support and custom policy enforcement",
      },
      {
        text: "Enterprise Analytics API",
        dotted: true,
        tooltip: "Export usage, billing, and activity data programmatically via API integration",
      },
      { text: "Multi-admin support" },
      {
        text: "Bring your own LLM",
        dotted: true,
        tooltip: "Integrate and use your organization's own hosted language models with Warp",
      },
      {
        text: "Self-host cloud agents on your infrastructure",
        dotted: true,
        tooltip: "Run Warp cloud agents entirely within your own cloud environment for maximum data control",
      },
      {
        text: "Custom codebase indexing",
        dotted: true,
        tooltip: "Index codebases beyond standard limits with custom file counts tailored to your needs",
      },
      {
        text: "Cross-harness agent memory (Research Preview)",
        dotted: true,
        tooltip: "Agents can share context and memory across different cloud execution environments",
      },
      {
        text: "White-glove onboarding and implementation engineer support",
        dotted: true,
        tooltip: "Dedicated Warp implementation engineers assist with your team's setup, configuration, and integration",
      },
      { text: "Dedicated account manager and a shared Slack channel with your team" },
    ],
  },
];

const ANNUAL_PLANS: Plan[] = MONTHLY_PLANS.map((p) => {
  if (p.name === "Build") return { ...p, price: "$18" };
  if (p.name === "Max") return { ...p, price: "$180" };
  return p;
});

const ANNUAL_PLANS_ROW2: Plan[] = MONTHLY_PLANS_ROW2.map((p) => {
  if (p.name === "Business") return { ...p, price: "$45" };
  return p;
});

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3.5" aria-hidden="true">
    <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-5 shrink-0">
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" />
  </svg>
);

function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-lh shrink-0 items-center" aria-hidden="true">○</span>
      <p>
        {feature.dotted && feature.tooltip ? (
          <DottedTooltip tooltip={feature.tooltip}>{feature.text}</DottedTooltip>
        ) : feature.dotted ? (
          <span className="decoration-text-secondary/50 decoration-dotted underline underline-offset-4">
            {feature.text}
          </span>
        ) : (
          feature.text
        )}
      </p>
    </li>
  );
}

function CardInner({ plan, reloadOpen, onToggleReload }: {
  plan: Plan;
  reloadOpen: boolean;
  onToggleReload: () => void;
}) {
  return (
    <div className="flex h-full flex-col gap-6 rounded-xl bg-(--color-surface) p-(--space-lg) shadow-(--shadow) transition-shadow duration-(--duration-normal)">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl/8 tracking-tight text-(--color-text)">{plan.name}</h3>
          {plan.recommended && (
            <div className="inline-flex rounded-full px-2.5 py-0.5 text-xs/5 font-medium bg-(--color-accent-purple) text-black">
              Recommended
            </div>
          )}
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-sm/5 text-(--color-muted)">{plan.priceLine ?? " "}</p>
          <p className="inline-flex items-baseline gap-1">
            <span className="text-5xl font-semibold tracking-tight text-(--color-text)">{plan.price}</span>
            {plan.period && <span className="text-base text-(--color-muted)">{plan.period}</span>}
          </p>
        </div>
        <div className="text-sm/6 text-(--color-text-secondary)">
          <p>{plan.description}</p>
        </div>
      </div>
      <div className="self-stretch">
        <Link
          href={plan.ctaHref}
          className="btn-hover inline-flex w-full shrink-0 items-center justify-center gap-1.5 text-sm/7 font-medium hover:opacity-85 h-11 px-4 py-2"
          style={{
            background: "var(--btn-bg)",
            border: "var(--btn-border)",
            color: "var(--btn-text-color)",
            borderRadius: "var(--btn-radius)",
          }}
        >
          {plan.cta}
          <ArrowIcon />
        </Link>
      </div>
      <div>
        <p className={`mb-4 text-sm/6 font-medium ${plan.accentGreen ? "text-(--color-accent)" : "text-(--color-text-secondary)"}`}>
          {plan.accentLabel}
        </p>
        <ul className="space-y-4 text-sm/6 text-(--color-text-secondary)">
          {plan.features.map((f, i) => (
            <FeatureItem key={i} feature={f} />
          ))}
        </ul>
      </div>
      {plan.hasReloadSection && (
        <div className="mt-auto pt-6 border-t border-border/20">
          <button
            type="button"
            onClick={onToggleReload}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-border/30 px-4 py-3 text-sm/6 text-(--color-text-secondary) transition-colors duration-(--duration-normal) hover:border-border/50 hover:text-(--color-text)"
          >
            <InfoIcon />
            Reload credit discounts
          </button>
          {reloadOpen && (
            <div className="mt-3 rounded-lg bg-(--color-panel) p-3 text-xs/5 text-(--color-text-secondary)">
              Reload credits offer volume-based discounts: larger purchases get better per-credit rates. Credits roll over month to month and remain valid for 12 months.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const [reloadOpen, setReloadOpen] = useState(false);

  if (plan.animated) {
    return (
      <div className="relative h-full">
        {/* Spinning border layer — overflow hidden only on this layer */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[calc(0.25rem+2px)]">
          <div className="animated-border absolute inset-[-50%] animate-spin-slow" />
        </div>
        {/* Card content — separate from overflow-hidden border layer */}
        <div className="relative z-10 m-0.5 overflow-visible rounded-xl">
          <CardInner plan={plan} reloadOpen={reloadOpen} onToggleReload={() => setReloadOpen(!reloadOpen)} />
        </div>
      </div>
    );
  }

  return (
    <CardInner plan={plan} reloadOpen={reloadOpen} onToggleReload={() => setReloadOpen(!reloadOpen)} />
  );
}

export default function PricingCards() {
  const [isAnnual, setIsAnnual] = useState(true);

  const row1 = isAnnual ? ANNUAL_PLANS : MONTHLY_PLANS;
  const row2 = isAnnual ? ANNUAL_PLANS_ROW2 : MONTHLY_PLANS_ROW2;

  return (
    <section className="py-(--space-section)" id="pricing">
      <div
        className="mx-auto w-full px-6 lg:px-10 flex flex-col gap-16"
        style={{ maxWidth: "var(--content-max-width)" }}
      >
        <div className="flex flex-col items-center gap-6">
          <h1
            className="text-balance text-(--color-text)"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--heading-weight)",
              fontSize: "clamp(2.5rem, 5vw, var(--heading-size))",
              lineHeight: 1.1,
              letterSpacing: "var(--heading-letter-spacing)",
            }}
          >
            Pricing
          </h1>
          <p
            className="text-(--color-text-secondary) max-w-xl text-center"
            style={{
              fontSize: "calc(var(--body-size) * 1.125)",
              lineHeight: "var(--body-line-height)",
            }}
          >
            Start free and scale as your team grows. Simple, transparent pricing with no surprises.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full bg-text/5 p-1" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={!isAnnual}
                onClick={() => setIsAnnual(false)}
                className={`rounded-full px-4 py-1 text-sm/7 font-medium transition-colors duration-(--duration-normal) ${
                  !isAnnual
                    ? "bg-text/10 text-(--color-text)"
                    : "text-(--color-text-secondary) hover:bg-text/5 hover:text-(--color-text)"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={isAnnual}
                onClick={() => setIsAnnual(true)}
                className={`rounded-full px-4 py-1 text-sm/7 font-medium transition-colors duration-(--duration-normal) ${
                  isAnnual
                    ? "bg-text/10 text-(--color-text)"
                    : "text-(--color-text-secondary) hover:bg-text/5 hover:text-(--color-text)"
                }`}
              >
                Annually
              </button>
            </div>
            <span className="text-sm/7 font-medium italic text-(--color-accent-purple)">10% off</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:[&>:last-child:nth-child(odd)]:col-span-2 lg:grid-cols-3 lg:*:last:col-span-1!">
            {row1.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {row2.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
