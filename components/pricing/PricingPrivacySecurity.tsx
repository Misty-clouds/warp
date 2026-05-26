import Link from "next/link";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
        <path d="M120,136V96a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,48a12,12,0,1,0-12-12A12,12,0,0,0,128,184ZM224,56v56c0,52.72-25.52,84.67-46.93,102.19-23.06,18.86-46,25.27-47,25.53a8,8,0,0,1-4.2,0c-1-.26-23.91-6.67-47-25.53C57.52,196.67,32,164.72,32,112V56A16,16,0,0,1,48,40H208A16,16,0,0,1,224,56Zm-16,0L48,56l0,56c0,37.3,13.82,67.51,41.07,89.81A128.25,128.25,0,0,0,128,223.62a129.3,129.3,0,0,0,39.41-22.2C194.34,179.16,208,149.07,208,112Z" />
      </svg>
    ),
    title: "Your data, secure and private.",
    description:
      "Warp is SOC 2 compliant and has Zero Data Retention agreements with contracted LLM providers. These providers do not retain, store, or train models on customer data processed through Warp.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
        <path d="M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z" />
      </svg>
    ),
    title: "Complete control of your agents.",
    description:
      "Control how much autonomy agents have, from approving each step to allowing more autonomous execution. Enterprise teams get additional governance and policy controls.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
      </svg>
    ),
    title: "Full transparency.",
    description:
      "Review high-level telemetry events used for app analytics and monitor telemetry in real time with Warp's native Network Log. Enterprise customers can also export usage data through the Enterprise Analytics API.",
  },
];

export default function PricingPrivacySecurity() {
  return (
    <section className="py-(--space-section)" id="privacy-security">
      <div
        className="mx-auto w-full px-6 lg:px-10 flex flex-col gap-10 sm:gap-16"
        style={{ maxWidth: "var(--content-max-width)" }}
      >
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-(--color-text-secondary)">
              Your privacy and security
            </div>
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
