"use client";

const partnerBenefits = [
  {
    title: "Decentralized Growth",
    description: "Each partner manages operations regionally.",
  },
  {
    title: "Transparency",
    description: "Clear earning reports, tutor/student tracking.",
  },
  {
    title: "Engagement",
    description: "Direct communication with local stakeholders.",
  },
  {
    title: "Scalability",
    description:
      "Easy expansion to multiple regions without losing control.",
  },
];

const benefitIcons = [
  <path
    key="decentralized"
    d="M10 4v5M4 10h12M6 16l4-3 4 3M10 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  <path
    key="transparency"
    d="M10 3 4 6v4c0 4 2.5 6.6 6 7.8 3.5-1.2 6-3.8 6-7.8V6l-6-3Zm-2.4 7.2L9.4 12l3-3"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  <path
    key="engagement"
    d="M4 5h12v8H9l-3 3v-3H4V5Zm3 3h6M7 10h4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  <path
    key="scalability"
    d="M5 15V9m4 6V6m4 9v-4m-9 6h12M12.8 7.2 16 4m0 0H13m3 0v3"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
];

export function ChannelPartnerSection() {
  return (
    <section className="px-4 pb-8 pt-2 md:pt-6">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.09)] md:p-10">
        <p className="text-xs font-semibold tracking-[0.22em] text-blue-700">
          BECOME OUR CHANNEL PARTNER
        </p>
        <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
          <h2 className="max-w-2xl text-2xl font-extrabold text-[#1a2744] md:text-4xl">
            Grow Your Region as an Authorized Partner
          </h2>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <svg className="h-16 w-16 text-blue-700" viewBox="0 0 64 64" fill="none" aria-hidden>
              <circle cx="32" cy="32" r="23" stroke="currentColor" strokeWidth="3" />
              <path d="M19 32h26M32 19c5 4 8 8 8 13s-3 9-8 13c-5-4-8-8-8-13s3-9 8-13Z" stroke="currentColor" strokeWidth="3" />
              <circle cx="32" cy="32" r="4" fill="currentColor" />
            </svg>
          </div>
        </div>
        <p className="mt-4 max-w-4xl text-sm text-slate-600 md:text-base">
          Authorised regional representatives/agents to manage local tutoring
          services, registrations, and operations for a specific
          region/location/area/pincode.
        </p>

        <div className="mt-7 rounded-2xl bg-blue-50 p-4 md:p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
            Partnership Process
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm font-bold text-slate-800 md:text-base">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">Register</span>
            <span aria-hidden className="text-blue-600">→</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Collaborate
            </span>
            <span aria-hidden className="text-blue-600">→</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">Earn</span>
          </div>
        </div>

        <h3 className="mt-8 text-lg font-bold text-slate-900">
          Key Benefits of Channel Partner Panel
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {partnerBenefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <p className="flex items-center gap-2 font-semibold text-slate-900">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden>
                    {benefitIcons[index]}
                  </svg>
                </span>
                {benefit.title}
              </p>
              <p className="mt-1 text-sm text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
          >
            Register Now
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-blue-300 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Talk to Expert
          </a>
        </div>
      </div>
    </section>
  );
}
