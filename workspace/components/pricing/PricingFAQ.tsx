"use client";

import { useState } from "react";
import Link from "next/link";
import PlusIcon from "@/components/icons/PlusIcon";
import MinusIcon from "@/components/icons/MinusIcon";

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
        <a href="https://trust.warp.dev/resources" className="inline-link-underline">
          Warp’s Trust Center
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
          monthly credits, 10× the included credits of Build, and a 17% lower effective credit
          rate than the best Reload credit tier.
        </p>
        <p>
          Business is best for teams that need SSO, team usage metrics, admin-configurable data
          controls, and centralized spend management. Business supports up to 25 team members and
          includes 1,500 credits per seat per month.
        </p>
        <p>
          For larger organizations that need unlimited seats, advanced governance, custom credits
          and usage terms, Enterprise Analytics API, BYOLLM, per-user spend controls, or
          self-hosted cloud agents,{" "}
          <Link href="/contact-sales" className="inline-link-underline">
            contact us
          </Link>{" "}
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
          <a href="https://app.warp.dev/upgrade" className="inline-link-underline">
            upgrade page
          </a>{" "}
          or via your in-app Settings &gt; Billing &amp; usage page.
        </p>
        <p>
          For larger engineering organizations or companies that need advanced compliance,
          governance, custom usage terms, or dedicated support, Warp also offers an Enterprise plan
          with custom pricing and deployment options. To learn more, contact us at{" "}
          <a href="mailto:sales@warp.dev" className="inline-link-underline">
            sales@warp.dev
          </a>{" "}
          or{" "}
          <Link href="/contact-sales" className="inline-link-underline">
            submit a request
          </Link>
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
          Warp integrates with multiple Large Language Model (LLM) providers to power its AI-driven
          features.
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
          <li>
            LLM providers commit not to train their models on any customer-generated data processed
            through Warp’s services.
          </li>
          <li>
            LLM providers commit to delete inputs and outputs after generating the relevant output,
            within a fixed time period.
          </li>
        </ul>
        <p>
          Warp enforces these commitments through both technical measures and contractual
          safeguards with the LLM providers.
        </p>
      </>
    ),
  },
  {
    question: "How can I enable Zero Data Retention in Warp?",
    answer: (
      <>
        <p>Zero Data Retention (ZDR) can be enabled in two ways:</p>
        <ul className="list-disc pl-5">
          <li>
            Individual level — Any user can enable full ZDR for their own account by disabling
            Help Improve Warp in their Warp settings under Privacy.
          </li>
          <li>
            Organization-wide — On the Business and Enterprise plans, admins can enforce ZDR
            for all members by default via the admin panel, ensuring team-wide compliance without
            relying on individual settings.
          </li>
        </ul>
        <p>
          If you’d like to request organization-wide ZDR, please contact your Warp sales
          representative at{" "}
          <a href="mailto:sales@warp.dev" className="inline-link-underline">
            sales@warp.dev
          </a>{" "}
          or submit a request via our{" "}
          <Link href="/contact-sales" className="inline-link-underline">
            Contact Sales form
          </Link>
          .
        </p>
        <p>
          Regardless of plan, Warp never allows OpenAI, Anthropic, Google, or other model providers
          to store, retain, or train their models on your data. Warp has full Zero Data Retention
          policies with all LLM providers.
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
          After a user’s included monthly credits are used, they can continue using AI
          features with Reload credits. Reload credits are tied to individual users, roll over
          month to month, remain valid for 12 months, and offer discounts for larger denominations.
        </p>
        <p>
          Team admins can configure team-wide spend caps and auto-reload settings for Reload credit
          usage.
        </p>
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
        <p>
          On Build, Max, and Business, team admins can configure auto-reload for Reload credit
          usage.
        </p>
        <p>
          When auto-reload is ON, the admin selects the Reload credit denomination for the team.
          Warp automatically reloads credits when a user’s credit pool drops below the
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
          For teams on Build, Max, or Business, included monthly credits are tied to each paid
          seat and reset monthly based on the subscription or renewal date.
        </p>
        <p>
          Reload credits are also tied to individual users rather than pooled across the team. If
          a user runs out of included credits, they can purchase additional credits that will be
          tied to their account and purchased via the billing method on file.
        </p>
        <p>
          Team admins can configure team-wide spend caps and auto-reload settings to manage overall
          Reload credit usage.
        </p>
        <p>
          Existing pooled Reload credits purchased before this change remain available and will be
          used first. After those credits are used, new Reload credits will be attributed to
          individual users.
        </p>
      </>
    ),
  },
  {
    question:
      "How are service account or team-scoped API key requests billed on self-serve plans?",
    answer: (
      <>
        <p>
          On self-serve plans, Reload credits are tied to individual users. Some requests, such as
          requests made through a team-scoped API key, may not be attributable to a specific
          individual user.
        </p>
        <p>
          When Warp cannot identify an individual billing user for a request, usage is billed to
          the team owner. In that case, usage draws from the team owner’s included credits
          first, then from the team owner’s Reload credits.
        </p>
        <p>
          If auto-reload is enabled, service account usage may trigger auto-reload for the team
          owner’s credit pool, subject to the team-wide spend cap.
        </p>
      </>
    ),
  },
  {
    question: "What payment options are available?",
    answer: (
      <>
        <p>
          Warp uses Stripe for payment processing and the only available payment method is by
          credit card.
        </p>
        <p>Warp cannot currently accept payment by ACH, cash, check, money order, or crypto-currency.</p>
      </>
    ),
  },
  {
    question: "Are there any Warp discounts for students, non-profits, or open-source teams?",
    answer: (
      <p>
        At this time, Warp does not offer any discounts for students, non-profits, or open-source
        teams. We recommend checking out Warp’s Free plan which includes all of the core
        terminal features and enough AI usage to help you get started.
      </p>
    ),
  },
  {
    question: "I’m an individual developer. Can I bring my own LLM API key?",
    answer: (
      <>
        <p>
          Yes. You can bring your own API key for supported model providers, including OpenAI,
          Anthropic, and Google.
        </p>
        <p>
          This lets you use your own provider account while still using Warp’s agent
          experience, tools, and interface.
        </p>
        <p>To add your own key, go to Settings &gt; AI in Warp.</p>
      </>
    ),
  },
  {
    question: "Does Warp support custom inference endpoints?",
    answer: (
      <>
        <p>
          Yes. Warp supports custom inference endpoints for OpenAI-compatible providers and
          gateways.
        </p>
        <p>
          You can connect endpoints such as OpenRouter, LiteLLM, z.ai, or an internal
          OpenAI-compatible gateway, as long as the endpoint supports the OpenAI Chat Completions
          API.
        </p>
        <p>
          Use this when you want to route Warp’s AI features through your own provider,
          router, or internal inference gateway.{" "}
          <a
            href="https://docs.warp.dev/agents/using-agents/model-choice"
            className="inline-link-underline"
          >
            Learn more in our docs
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: "Does Warp support other model routers or “Bring your own LLM”?",
    answer: (
      <>
        <p>
          On the Enterprise plan, Warp lets you connect to major cloud providers’
          Model-as-a-Service offerings (including AWS Bedrock, Google Vertex AI, and Azure AI
          Foundry). Warp still manages model support, routing, and orchestration, but inference
          runs in your cloud environment so you can maintain data locality, security controls, and
          existing cloud spend commitments.
        </p>
        <p>
          <a
            href="https://docs.warp.dev/agents/using-agents/model-choice"
            className="inline-link-underline"
          >
            Learn more in our docs
          </a>
          .
        </p>
        <p>
          If you’re looking to use a different router or a custom / in-house model, that
          isn’t supported by default today. Reach out to{" "}
          <a href="mailto:sales@warp.dev" className="inline-link-underline">
            sales@warp.dev
          </a>{" "}
          with your requirements.
        </p>
      </>
    ),
  },
  {
    question: "What features are available during multi-harness orchestration beta?",
    answer: (
      <>
        <p>
          During beta, multi-harness orchestration is available to all users. This lets you use
          Claude Code, Codex, and the Warp Agent in Oz cloud environments, and mix and match
          harnesses across workflows.
        </p>
        <p>
          Agent Memory is currently in Research Preview. It allows preferences, project knowledge,
          and learnings from past sessions to carry across harnesses and future agent runs. You
          can join the waitlist to request access.
        </p>
        <p>
          As these features move out of beta or Research Preview, availability, limits, and
          pricing may change.
        </p>
      </>
    ),
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-[var(--space-section)]" id="faqs">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 lg:max-w-5xl lg:px-10">
        <div className="flex flex-col gap-6">
          <h2 className="text-pretty text-[clamp(1.75rem,3.5vw,calc(var(--heading-size)*0.7))] leading-[1.15] text-[var(--color-text)] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [letter-spacing:var(--heading-letter-spacing)]">
            Pricing FAQ
          </h2>
        </div>
        <div className="divide-y divide-[var(--color-border)]/20 border-y border-[var(--color-border)]/20">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-4 text-left text-base/7 text-[var(--color-text)] transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:opacity-80"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <MinusIcon className="h-lh shrink-0" />
                  ) : (
                    <PlusIcon className="h-lh shrink-0" />
                  )}
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="-mt-2 flex flex-col gap-2 pr-12 pb-4 text-sm/7 text-[var(--color-text-secondary)]">
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
