"use client";

import { useState } from "react";
import PlusIcon from "@/components/shared/icons/PlusIcon";
import MinusIcon from "@/components/shared/icons/MinusIcon";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "What counts as a credit in Warp?",
    answer: (
      <>
        <p>
          Interactions with agents in Warp consume credits through a combination of inference costs
          and Platform fees. Inference costs are charged for any use of the Warp Agent and are based
          on the tokens used to complete the task. Platform fees cover the cost of compute when
          running cloud agents or routing requests through the Warp server.
        </p>
        <p>
          Credit usage depends on factors like the model used, the size of the task, the amount of
          context gathered, codebase size, and whether the agent runs locally or in the cloud.
        </p>
      </>
    ),
  },
  {
    question: "Does Warp have a SOC 2 Type 2 attestation?",
    answer: (
      <p>
        Yes, Warp has obtained a SOC 2 Type 2 attestation from an accredited third party. Visit{" "}
        <a href="https://trust.warp.dev/resources" className="underline underline-offset-2 hover:opacity-70">
          Warp&apos;s Trust Center
        </a>{" "}
        to request the report.
      </p>
    ),
  },
  {
    question: "Should I subscribe to the Build plan, Max plan, or the Business plan?",
    answer: (
      <>
        <p>
          Build is a good fit for individual developers or small teams that want flexible access to
          Warp AI. It includes 1,500 monthly credits, Reload credits, full Warp Agent access, BYOK,
          custom inference endpoint support, collaboration features, and higher codebase indexing
          limits.
        </p>
        <p>
          Max is best for heavy AI users who consistently need more capacity. It includes 18,000
          monthly credits, 10× the included credits of Build, and a 17% lower effective credit rate
          than the best Reload credit tier.
        </p>
        <p>
          Business is best for teams that need SSO, team usage metrics, admin-configurable data
          controls, and centralized spend management. Business supports up to 25 team members and
          includes 1,500 credits per seat per month.
        </p>
        <p>
          For larger organizations that need unlimited seats, advanced governance, custom credits and
          usage terms, Enterprise Analytics API, BYOLLM, per-user spend controls, or self-hosted
          cloud agents,{" "}
          <a href="/contact-sales" className="underline underline-offset-2 hover:opacity-70">
            contact us
          </a>{" "}
          about Enterprise.
        </p>
      </>
    ),
  },
  {
    question: "How can I subscribe to a Warp Business or Enterprise plan?",
    answer: (
      <>
        <p>
          You can subscribe to the Business plan directly from our{" "}
          <a href="https://app.warp.dev/upgrade" className="underline underline-offset-2 hover:opacity-70">
            upgrade page
          </a>{" "}
          or via your in-app Settings &gt; Billing &amp; usage page.
        </p>
        <p>
          For larger engineering organizations or companies that need advanced compliance,
          governance, custom usage terms, or dedicated support, Warp also offers an Enterprise plan
          with custom pricing and deployment options. To learn more, contact us at{" "}
          <a href="mailto:sales@warp.dev" className="underline underline-offset-2 hover:opacity-70">
            sales@warp.dev
          </a>{" "}
          or{" "}
          <a href="/contact-sales" className="underline underline-offset-2 hover:opacity-70">
            submit a request
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: "Does Warp have Zero Data Retention policies with LLM providers?",
    answer: (
      <>
        <p>
          Warp integrates with multiple Large Language Model (LLM) providers to power its
          AI-driven features.
        </p>
        <p>These providers include, but are not limited to:</p>
        <ul className="list-disc pl-5">
          <li>Anthropic</li>
          <li>OpenAI</li>
          <li>Google</li>
          <li>Fireworks AI</li>
        </ul>
        <p>
          Warp has executed Zero Data Retention (ZDR) agreements with these providers. This means
          that, by default across all plans:
        </p>
        <ul className="list-disc pl-5">
          <li>LLM providers commit not to train their models on any customer-generated data processed through Warp&apos;s services.</li>
          <li>LLM providers commit to delete inputs and outputs after generating the relevant output, within a fixed time period.</li>
        </ul>
        <p>Warp enforces these commitments through both technical measures and contractual safeguards with the LLM providers.</p>
      </>
    ),
  },
  {
    question: "How can I enable Zero Data Retention in Warp?",
    answer: (
      <>
        <p>Zero Data Retention (ZDR) can be enabled in two ways:</p>
        <ul className="list-disc pl-5">
          <li>Individual level — Any user can enable full ZDR for their own account by disabling Help Improve Warp in their Warp settings under Privacy.</li>
          <li>Organization-wide — On the Business and Enterprise plans, admins can enforce ZDR for all members by default via the admin panel, ensuring team-wide compliance without relying on individual settings.</li>
        </ul>
        <p>
          If you&apos;d like to request organization-wide ZDR, please contact your Warp sales
          representative at{" "}
          <a href="mailto:sales@warp.dev" className="underline underline-offset-2 hover:opacity-70">
            sales@warp.dev
          </a>{" "}
          or submit a request via our{" "}
          <a href="/contact-sales" className="underline underline-offset-2 hover:opacity-70">
            Contact Sales form
          </a>
          .
        </p>
        <p>
          Regardless of plan, Warp never allows OpenAI, Anthropic, Google, or other model
          providers to store, retain, or train their models on your data. Warp has full Zero Data
          Retention policies with all LLM providers.
        </p>
      </>
    ),
  },
  {
    question: "Do paid plans support additional AI usage beyond the included credits?",
    answer: (
      <>
        <p>Yes. Build, Max, and Business support additional AI usage through Reload credits.</p>
        <p>
          After a user&apos;s included monthly credits are used, they can continue using AI features
          with Reload credits. Reload credits are tied to individual users, roll over month to month,
          remain valid for 12 months, and offer discounts for larger denominations.
        </p>
        <p>Team admins can configure team-wide spend caps and auto-reload settings for Reload credit usage.</p>
      </>
    ),
  },
  {
    question: "How often do AI credit limits reset?",
    answer: (
      <>
        <p>
          Your included plan credits reset every 30 days from your subscription or renewal date.
          You can view your remaining balance under Settings &gt; Billing and usage.
        </p>
        <p>
          If you run out of credits before your next reset, you can purchase Reload credits to keep
          using AI features without interruption. On eligible plans, admins can also configure
          auto-reload and team-wide spend caps.
        </p>
      </>
    ),
  },
  {
    question: "How does auto-reload work for teams?",
    answer: (
      <>
        <p>On Build, Max, and Business, team admins can configure auto-reload for Reload credit usage.</p>
        <p>
          When auto-reload is ON, the admin selects the Reload credit denomination for the team.
          Warp automatically reloads credits when a user&apos;s credit pool drops below the
          threshold, subject to the team-wide spend cap.
        </p>
        <p>
          When auto-reload is OFF, eligible team members can purchase Reload credits manually, as
          long as the team remains below the team-wide spend cap.
        </p>
      </>
    ),
  },
  {
    question: "How do Reload credits work for multi-seat teams?",
    answer: (
      <>
        <p>
          For teams on Build, Max, or Business, included monthly credits are tied to each paid seat
          and reset monthly based on the subscription or renewal date.
        </p>
        <p>
          Reload credits are also tied to individual users rather than pooled across the team. If a
          user runs out of included credits, they can purchase additional credits that will be tied
          to their account and purchased via the billing method on file.
        </p>
        <p>Team admins can configure team-wide spend caps and auto-reload settings to manage overall Reload credit usage.</p>
        <p>
          Existing pooled Reload credits purchased before this change remain available and will be
          used first. After those credits are used, new Reload credits will be attributed to
          individual users.
        </p>
      </>
    ),
  },
];


export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-(--space-section)" id="faqs">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 lg:max-w-5xl lg:px-10">
        <div className="flex flex-col gap-6">
          <h2
            className="text-pretty text-(--color-text)"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--heading-weight)",
              fontSize: "clamp(1.75rem, 3.5vw, calc(var(--heading-size) * 0.7))",
              lineHeight: 1.15,
              letterSpacing: "var(--heading-letter-spacing)",
            }}
          >
            Pricing FAQ
          </h2>
        </div>
        <div className="divide-y divide-(--color-border)/20 border-y border-border/20">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-4 text-left text-base/7 text-(--color-text)"
                >
                  {faq.question}
                  {isOpen ? <MinusIcon className="h-lh shrink-0" /> : <PlusIcon className="h-lh shrink-0" />}
                </button>
                <div
                  className="grid transition-[grid-template-rows]"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transitionDuration: "300ms",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="-mt-2 flex flex-col gap-2 pr-12 pb-4 text-sm/7 text-(--color-text-secondary)">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
