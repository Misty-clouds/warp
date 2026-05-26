"use client";

import { useState } from "react";
import Link from "next/link";
import DottedTooltip from "@/components/shared/DottedTooltip";
import CheckCircleIcon from "@/components/shared/icons/CheckCircleIcon";
import ArrowRightIcon from "@/components/shared/icons/ArrowRightIcon";

const plans = [
  { name: "Free", price: "$0 /mo", cta: "Download Now", href: "https://app.warp.dev/get_warp" },
  { name: "Build", price: "Starts at $20 /mo", cta: "Start Today", href: "https://app.warp.dev/login?redirect_to=/upgrade" },
  { name: "Max", price: "Starts at $200 /mo", cta: "Start Today", href: "https://app.warp.dev/login?redirect_to=/upgrade" },
  { name: "Business", price: "Starts at $50 /mo", cta: "Start Today", href: "https://app.warp.dev/login?redirect_to=/upgrade" },
  { name: "Enterprise", price: "Custom", cta: "Contact Sales", href: "/contact-sales" },
];

const CHECK = "check";
const DASH = "dash";
type CellValue = typeof CHECK | typeof DASH | string;

interface Row {
  label: string;
  tooltip?: string;
  values: [CellValue, CellValue, CellValue, CellValue, CellValue];
}

interface Group {
  title: string;
  rows: Row[];
}

const tableData: Group[] = [
  {
    title: "AI features",
    rows: [
      {
        label: "Monthly AI credits",
        tooltip: "Credits consumed by AI interactions, resetting every 30 days from your subscription date",
        values: ["150/mo for 2 mo, 60/mo after", "1,500/mo", "18,000/mo", "1,500/mo", "Custom"],
      },
      {
        label: "Reload credits",
        tooltip: "Additional credits you can purchase beyond your monthly allotment, with volume-based discounts",
        values: [DASH, CHECK, CHECK, CHECK, CHECK],
      },
      {
        label: "Concurrent cloud agents",
        tooltip: "Number of cloud agents that can run simultaneously per user",
        values: ["4", "20", "20", "40", "Custom"],
      },
      {
        label: "Cloud agent compute resources",
        tooltip: "CPU cores and memory allocated to each cloud agent instance",
        values: ["2 vCPU, 4 GiB RAM", "4 vCPUs, 8 GiB RAM", "4 vCPUs, 8 GiB RAM", "8 vCPUs, 16 GiB RAM", "Custom"],
      },
      {
        label: "Bring your own API key",
        tooltip: "Connect your own OpenAI, Anthropic, or other provider API keys to use with Warp",
        values: [DASH, CHECK, CHECK, CHECK, DASH],
      },
      {
        label: "Bring your own LLM",
        tooltip: "Integrate and use your organization's own hosted language models with Warp",
        values: [DASH, DASH, DASH, DASH, CHECK],
      },
      {
        label: "Indexed codebases",
        tooltip: "Number of codebases that can be indexed for AI-assisted coding",
        values: ["3", "40", "40", "40", "Custom"],
      },
      {
        label: "Files per codebase",
        tooltip: "Maximum number of files indexed per codebase for AI context",
        values: ["3,000", "100,000", "100,000", "100,000", "Custom"],
      },
      {
        label: "Access to frontier AI models",
        tooltip: "Use the latest and most capable models from leading AI providers",
        values: [DASH, "OpenAI, Anthropic, and Google", "OpenAI, Anthropic, and Google", "OpenAI, Anthropic, and Google", "Custom"],
      },
      {
        label: "MCP support",
        tooltip: "Support for Model Context Protocol tool integrations",
        values: [CHECK, CHECK, CHECK, CHECK, CHECK],
      },
      {
        label: "Cloud conversation storage",
        tooltip: "Number of AI conversations stored and accessible in Warp's cloud",
        values: ["30 conversations", "Unlimited", "Unlimited", "Unlimited", "Custom"],
      },
      {
        label: "Self-hosting for cloud agents",
        tooltip: "Run Warp cloud agents entirely within your own infrastructure for maximum data control",
        values: [DASH, DASH, DASH, DASH, CHECK],
      },
    ],
  },
  {
    title: "Terminal and Collaboration",
    rows: [
      {
        label: "Shared Warp Drive",
        tooltip: "Shared workspace for workflows, notebooks, and other team resources",
        values: ["10 workflows, 3 notebooks", "Unlimited", "Unlimited", "Unlimited", "Custom"],
      },
      {
        label: "Session sharing",
        tooltip: "Share live terminal sessions with teammates for collaboration or debugging",
        values: ["Up to 5 shared sessions", "Unlimited", "Unlimited", "Unlimited", "Custom"],
      },
    ],
  },
  {
    title: "Admin and Security",
    rows: [
      {
        label: "SOC 2 Compliance",
        tooltip: "Certified SOC 2 Type 2 compliant for security, availability, and confidentiality",
        values: [CHECK, CHECK, CHECK, CHECK, CHECK],
      },
      {
        label: "SAML-based SSO",
        tooltip: "Single sign-on via SAML identity providers like Okta, Azure AD, or Google Workspace",
        values: [DASH, DASH, DASH, CHECK, CHECK],
      },
      {
        label: "Zero data retention policy for AI",
        tooltip: "AI providers contractually commit not to store, retain, or train models on your data",
        values: ["Individually configured", "Individually configured", "Individually configured", "Enforced team-wide", "Enforced team-wide"],
      },
      {
        label: "Admin dashboard",
        tooltip: "Central dashboard for managing team members, usage metrics, billing, and settings",
        values: [DASH, CHECK, CHECK, CHECK, CHECK],
      },
      {
        label: "Multi-admin controls",
        tooltip: "Multiple team administrators with shared management responsibilities and access",
        values: [DASH, DASH, DASH, DASH, CHECK],
      },
    ],
  },
  {
    title: "Support",
    rows: [
      {
        label: "Private email support",
        tooltip: "Direct email access to Warp's support team with priority response times",
        values: [DASH, CHECK, CHECK, CHECK, CHECK],
      },
      {
        label: "Dedicated account manager",
        tooltip: "A named Warp contact for your organization's questions, renewals, and escalations",
        values: [DASH, DASH, DASH, DASH, CHECK],
      },
    ],
  },
];


const DashCell = () => (
  <span aria-label="Not included" className="text-(--color-muted)">—</span>
);

function CellContent({ value }: { value: CellValue }) {
  if (value === CHECK) return <CheckCircleIcon className="inline-block size-5 text-(--color-tertiary)" />;
  if (value === DASH) return <DashCell />;
  return <>{value}</>;
}

function RowLabel({ row }: { row: Row }) {
  if (row.tooltip) {
    return <DottedTooltip tooltip={row.tooltip}>{row.label}</DottedTooltip>;
  }
  return <>{row.label}</>;
}


export default function PricingComparisonTable() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-(--space-section)" id="comparison">
      <div
        className="mx-auto w-full px-6 lg:px-10"
        style={{ maxWidth: "var(--content-max-width)" }}
      >
        {/* Desktop table */}
        <table className="w-full table-fixed border-collapse text-left text-sm/5 max-lg:hidden">
          <colgroup>
            <col className="w-1/5" />
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead className="sticky top-(--scroll-padding-top) z-10">
            <tr>
              <th className="bg-(--color-background) py-5 pr-3 align-bottom" />
              {plans.map((plan) => (
                <th key={plan.name} className="bg-(--color-background) p-3 text-center align-bottom">
                  <div className="flex h-full flex-col items-stretch gap-3">
                    <div className="text-center">
                      <p className="text-base/7 font-semibold text-(--color-text)">{plan.name}</p>
                      <p className="text-sm/5 text-(--color-muted)">{plan.price}</p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href={plan.href}
                        className="btn-hover inline-flex w-full shrink-0 items-center justify-center gap-1.5 text-sm/7 font-medium hover:opacity-85 h-10 px-0"
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
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          {tableData.map((group) => (
            <tbody key={group.title}>
              <tr>
                <th
                  colSpan={6}
                  scope="colgroup"
                  className="border-t border-border/20 pt-10 pb-4 text-base/7 font-semibold text-(--color-text)"
                >
                  {group.title}
                </th>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.label} className="group">
                  <th scope="row" className="border-t border-border/20 py-5 pl-0 pr-3 font-normal text-(--color-text-secondary)">
                    <RowLabel row={row} />
                  </th>
                  {row.values.map((val, i) => (
                    <td key={i} className="border-t border-border/20 px-3 py-5 text-center text-sm/5 text-(--color-text-secondary)">
                      <CellContent value={val} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>

        {/* Mobile tabs */}
        <div className="lg:hidden">
          <div className="flex gap-6" role="tablist">
            {plans.map((plan, i) => (
              <button
                key={plan.name}
                type="button"
                role="tab"
                aria-selected={activeTab === i}
                onClick={() => setActiveTab(i)}
                className={`relative -mb-px flex-1 border-b px-2 py-6 text-sm/5 font-medium transition-colors ${
                  activeTab === i
                    ? "border-(--color-text) text-(--color-text)"
                    : "border-b-transparent text-(--color-muted)"
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>
          <table className="w-full border-collapse text-left text-sm/5">
            <colgroup>
              <col className="w-3/4" />
              <col className="w-1/4" />
            </colgroup>
            <tbody>
              {tableData.map((group) => (
                <>
                  <tr key={group.title}>
                    <th
                      colSpan={2}
                      scope="colgroup"
                      className="border-t border-border/20 pt-10 pb-4 text-base/7 font-semibold text-(--color-text)"
                    >
                      {group.title}
                    </th>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.label} className="group">
                      <th scope="row" className="border-t border-border/20 py-5 pl-0 pr-3 font-normal text-(--color-text-secondary)">
                        <RowLabel row={row} />
                      </th>
                      <td className="border-t border-border/20 px-3 py-5 text-center text-sm/5 text-(--color-text-secondary)">
                        <CellContent value={row.values[activeTab]} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
