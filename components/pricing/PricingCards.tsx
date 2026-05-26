"use client";

import { useState } from "react";
import Link from "next/link";
import DottedTooltip from "@/components/shared/DottedTooltip";
import ArrowRightIcon from "@/components/shared/icons/ArrowRightIcon";
import InfoCircleIcon from "@/components/shared/icons/InfoCircleIcon";

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
        tooltip: "Limited choice of models and minimal free credits unless BYOK is enabled",
      },
      {
        text: "Limited cloud agents access",
        dotted: true,
        tooltip: "Cloud connected, background agents that run automatically from schedules, CI, webhooks, or integration events.",
      },
      {
        text: "Bring your own API key*",
        dotted: true,
        tooltip: "Power the Warp Agent using your own API key for OpenAI, Anthropic, or Google models. Available to individual users and organizations with 10 or fewer employees. Larger organizations need a Warp Business or Enterprise plan.",
      },
      {
        text: "Custom inference endpoint support*",
        dotted: true,
        tooltip: "Connect an OpenAI-compatible inference endpoint to power Warp Agent. Available to individual users and organizations with 10 or fewer employees. Larger organizations need a Warp Business or Enterprise plan.",
      },
      {
        text: "Use any harness in the cloud (beta)",
        dotted: true,
        tooltip: "Bring Claude Code, Codex, and the Warp Agent into Oz cloud environments, and mix and match them across workflows.",
      },
      {
        text: "Individually configured data controls",
        dotted: true,
        tooltip: "Configure app telemetry and data settings in Settings > Privacy. Warp does not allow contracted model providers to retain, store, or train models on your data.",
      },
      {
        text: "Limited Warp Drive and collaboration feature access",
        dotted: true,
        tooltip: "Create and share a limited number of workflows, notebooks, and shared sessions.",
      },
      {
        text: "Limited cloud conversation storage",
        dotted: true,
        tooltip: "Save and continue past AI conversations across devices. Free includes up to 30 cloud-stored conversations.",
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
        tooltip: "Add-on credits for extra AI usage. Reload credits are tied to individual users, roll over to future billing cycles, and are valid for 12 months.",
      },
      { text: "Extended cloud agents access" },
      { text: "Highest codebase indexing limits" },
      { text: "Unlimited Warp Drive objects and collaboration" },
      {
        text: "Unlimited cloud conversation storage",
        dotted: true,
        tooltip: "Cloud-synced conversations let you view and continue past AI conversations across devices.",
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
        tooltip: "Save 17% on included credits compared to Reload Credits",
      },
      {
        text: "Reload credits with volume-based discounts, auto-reload, and team-wide spend cap",
        dotted: true,
        tooltip: "Add-on credits for extra AI usage. Reload credits are tied to individual users, roll over to future billing cycles, and are valid for 12 months.",
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
        tooltip: "View team-level usage to understand AI adoption, credit consumption, and activity across your team.",
      },
      {
        text: "Admin-configurable data controls",
        dotted: true,
        tooltip: "Admins can configure team-level data settings, including telemetry and data collection controls. Warp does not allow contracted model providers to retain, store, or train models on your data.",
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
        tooltip: "Custom credit allocation, usage terms, and commercial structure based on your organization's needs.",
      },
      {
        text: "Advanced spend controls",
        dotted: true,
        tooltip: "Configure team-wide and per-user spend limits, usage policies, and custom controls for your organization.",
      },
      {
        text: "Enterprise admin controls",
        dotted: true,
        tooltip: "Advanced controls for governance, security, and usage management, including AI autonomy controls, model selection, Codebase Context controls, agent attribution, secret redaction, domain capture, and auditability.",
      },
      {
        text: "Enterprise Analytics API",
        dotted: true,
        tooltip: "Pull team-level usage data into your own dashboards, cost allocation tools, or audit pipelines. Includes access to summary metrics, per-user rollups, and message-level activity metadata.",
      },
      { text: "Multi-admin support" },
      {
        text: "Bring your own LLM",
        dotted: true,
        tooltip: "Use your cloud AI provider or approved inference infrastructure while Warp manages routing, orchestration, governance, and observability. Supports providers such as AWS Bedrock, Google Vertex AI, Azure AI Foundry, and internal gateways.",
      },
      {
        text: "Self-host cloud agents on your infrastructure",
        dotted: true,
        tooltip: "Run Warp cloud agents on your own infrastructure, including Docker, Kubernetes, or custom internal compute environments.",
      },
      {
        text: "Custom codebase indexing",
        dotted: true,
        tooltip: "Custom limits and controls for larger organizations and complex codebases.",
      },
      {
        text: "Cross-harness agent memory (Research Preview)",
        dotted: true,
        tooltip: "Carry preferences, project knowledge, and learnings across harnesses and sessions.",
      },
      {
        text: "White-glove onboarding and implementation engineer support",
        dotted: true,
        tooltip: "A structured multi-week implementation program with hands-on guidance from Warp engineers to help your team deploy production Oz Cloud Agent automations.",
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
            <div className="inline-flex rounded-full px-2.5 py-0.5 text-xs/5 font-medium bg-(--color-tertiary) text-(--color-background)">
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
          <ArrowRightIcon className="size-3.5" />
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
        <div className="relative mt-auto pt-6 border-t border-border/20">
          {reloadOpen && (
            <div className="absolute bottom-full left-0 right-0 mb-2 rounded-xl bg-(--color-panel) p-4 text-xs/5 text-(--color-text-secondary) shadow-lg ring-1 ring-inset ring-border/20 z-10">
              <p className="mb-3 text-(--color-text-secondary)">Purchase additional credits when included monthly credits run out.</p>
              <ul className="mb-3 space-y-1.5">
                <li>• $10 for 400 credits</li>
                <li>• $20 for 1,000 credits <span className="text-(--color-muted)">(20% discount)</span></li>
                <li>• $50 for 3,000 credits <span className="text-(--color-muted)">(35% discount)</span></li>
                <li>• $100 for 6,500 credits <span className="text-(--color-muted)">(40% discount)</span></li>
              </ul>
              <p className="text-(--color-muted)">Note: Reload Credits are tied to individual users, roll over to future billing cycles, and are valid for 12 months.</p>
            </div>
          )}
          <button
            type="button"
            onClick={onToggleReload}
            className={`flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm/6 transition-colors duration-(--duration-normal) ${
              reloadOpen
                ? "border-border/50 text-(--color-text)"
                : "border-border/30 text-(--color-text-secondary) hover:border-border/50 hover:text-(--color-text)"
            }`}
          >
            <InfoCircleIcon className="size-5 shrink-0" />
            Reload credit discounts
          </button>
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
            <span className="text-sm/7 font-medium italic text-(--color-tertiary)">10% off</span>
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
