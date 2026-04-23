"use client";

import Image from "next/image";
import Link from "next/link";
import { ChartIcon, DashboardIcon, GlobeIcon, MapPinIcon, MessageIcon, UsersIcon } from "@/components/shared/SvgIcons";
import { Navbar } from "@/app/home/Navbar";

const whyPartner = [
  {
    title: "Growing Demand for Personalised Tutoring",
    body: "Students and parents increasingly seek individual academic attention, making personalised tutoring one of the fastest-growing segments in education.",
    icon: UsersIcon,
  },
  {
    title: "Established Service Model",
    body: "Indian Mentors follows clear processes for student admissions, tutor allocation, and ongoing academic coordination.",
    icon: DashboardIcon,
  },
  {
    title: "Nationwide Tutor Network",
    body: "Access verified tutors across grades, boards, and subjects with structured quality checks.",
    icon: GlobeIcon,
  },
  {
    title: "Scalable Business Opportunity",
    body: "Start local and grow to city or regional operations based on market demand and performance.",
    icon: ChartIcon,
  },
];

const partnershipTracks = [
  {
    title: "Local Area Partner",
    subtitle: "Operate within an area or pincode cluster.",
    icon: MapPinIcon,
    iconBg: "bg-gradient-to-br from-cyan-400 to-blue-500",
    responsibilities: [
      "Handling student enquiries",
      "Parent counselling",
      "Demo class coordination",
    ],
  },
  {
    title: "City Channel Partner",
    subtitle: "Manage admissions and tutor coordination across a city or town.",
    icon: MessageIcon,
    iconBg: "bg-gradient-to-br from-violet-400 to-indigo-500",
    responsibilities: [
      "City-level lead management",
      "Tutor onboarding support",
      "Parent relationship management",
    ],
  },
  {
    title: "Regional Partner",
    subtitle: "Expand services across multiple cities or districts.",
    icon: GlobeIcon,
    iconBg: "bg-gradient-to-br from-emerald-400 to-teal-500",
    responsibilities: [
      "Territory expansion",
      "Regional partner support",
      "Business development activities",
    ],
  },
];

const serviceStructure = [
  "Country",
  "Zone",
  "State",
  "Division",
  "District",
  "City",
  "Area / Locality",
  "Pincode",
];

const processSteps = [
  {
    title: "Step 1 - Submit Partnership Application",
    body: "Complete the online form to express your interest in becoming a Channel Partner.",
  },
  {
    title: "Step 2 - Initial Discussion",
    body: "Our team discusses your background, preferred territory, and business goals.",
  },
  {
    title: "Step 3 - Partnership Approval",
    body: "Eligible applicants receive confirmation, territory allocation details, and terms.",
  },
  {
    title: "Step 4 - Training and Onboarding",
    body: "Get trained on service workflows, parent counselling, enrollment, and CRM usage.",
  },
  {
    title: "Step 5 - Start Operations",
    body: "Begin handling enquiries, coordinating demos, and facilitating enrollments.",
  },
];

const suitablePartners = [
  "Education consultants",
  "Coaching centre owners",
  "School teachers",
  "Academic counsellors",
  "Education entrepreneurs",
  "Career guidance professionals",
];

const faqs = [
  {
    q: "Do I need experience in education?",
    a: "Prior experience is helpful but not mandatory. Training and operational support are provided.",
  },
  {
    q: "Is this a full-time opportunity?",
    a: "You can operate full-time or part-time depending on your availability and business goals.",
  },
  {
    q: "How soon can I start working?",
    a: "Most partners can begin operations within a few weeks after onboarding and territory confirmation.",
  },
];

const securityDepositByTerritory = [
  { level: "Pincode Territory", coverage: "Single locality" },
  { level: "City Territory", coverage: "Entire city" },
  { level: "District Territory", coverage: "Multi-city district" },
  { level: "Division Territory", coverage: "Regional coverage" },
  { level: "State Territory", coverage: "State-wide operations" },
  { level: "Zone Territory", coverage: "Multi-state regional operations" },
];

const licensePlans = [
  { plan: "Starter Plan", duration: "1 Year" },
  { plan: "Growth Plan", duration: "2 Years" },
  { plan: "Strategic Plan", duration: "5 Years" },
];

const territoryInvestmentRows = [
  { territory: "Pincode", coverage: "Local neighbourhood", deposit: "₹25,000", y1: "₹15,000", y2: "₹25,000", y5: "₹50,000" },
  { territory: "City", coverage: "Full city operations", deposit: "₹1,00,000", y1: "₹50,000", y2: "₹85,000", y5: "₹2,00,000" },
  { territory: "District", coverage: "Multiple cities", deposit: "₹2,50,000", y1: "₹1,00,000", y2: "₹1,75,000", y5: "₹4,00,000" },
  { territory: "Division", coverage: "Regional cluster", deposit: "₹5,00,000", y1: "₹2,00,000", y2: "₹3,50,000", y5: "₹8,00,000" },
  { territory: "State", coverage: "Statewide operations", deposit: "₹10,00,000", y1: "₹4,00,000", y2: "₹7,00,000", y5: "₹15,00,000" },
  { territory: "Zone", coverage: "Multi-state region", deposit: "₹25,00,000", y1: "₹8,00,000", y2: "₹14,00,000", y5: "₹30,00,000" },
];

const quickHighlights = [
  {
    label: "Revenue Share on Subscriptions",
    value: "90%",
    icon: "📈",
    tone: "from-blue-50 to-indigo-50 border-blue-100",
    badgeTone: "bg-blue-100 text-blue-700",
  },
  {
    label: "Security Deposit",
    value: "Refundable",
    icon: "🛡️",
    tone: "from-emerald-50 to-teal-50 border-emerald-100",
    badgeTone: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Territory Growth Model",
    value: "Local to Regional",
    icon: "🌍",
    tone: "from-violet-50 to-fuchsia-50 border-violet-100",
    badgeTone: "bg-violet-100 text-violet-700",
  },
];

const revenueStatsChart = [
  { label: "Total Monthly Revenue", value: 300000, color: "bg-blue-500" },
  { label: "Partner Monthly Earnings", value: 270000, color: "bg-emerald-500" },
  { label: "IM Monthly Share", value: 30000, color: "bg-slate-500" },
];

const revenueSplit = [
  { label: "Partner Share", percent: 90, color: "bg-emerald-500" },
  { label: "Indian Mentors Share", percent: 10, color: "bg-blue-500" },
];

export default function ChannelPartnerPage() {
  return (
    <main className="bg-gradient-to-b from-blue-50/70 via-white to-blue-50/40 px-4 pb-20 pt-28 md:pt-32">
      <Navbar onPrimaryCTA={() => { window.location.href = "/#contact"; }} />
      <div className="mx-auto max-w-[1200px]">
        <section className="relative  sm:px-10 sm:py-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-300/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl"
            aria-hidden
          />
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-blue-800/80">
                Channel Partner Program
              </p>
              <h1 className="mt-3 text-balance bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-600 bg-clip-text text-3xl font-extrabold leading-[1.15] text-transparent sm:text-4xl md:text-5xl">
                Partner with Indian Mentors - Personalised Tutoring Services
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Build a rewarding education business by collaborating with Indian Mentors. Help students access
                high-quality one-to-one tutoring in your city while earning attractive commissions through a
                structured partnership model.
              </p>
              <p className="mt-3 text-sm font-semibold text-blue-800/80 sm:text-base">
                Start your journey in the fast-growing personalised education sector today.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/30 transition hover:from-blue-700 hover:to-indigo-700"
                >
                  Apply for Channel Partnership
                </Link>
                <a
                  href="#territories"
                  className="inline-flex items-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
                >
                  Explore Available Territories
                </a>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {quickHighlights.map((item) => (
                  <div
                    key={item.label}
                    className={`group rounded-2xl border bg-gradient-to-br px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${item.tone}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-lg font-extrabold text-slate-900">{item.value}</p>
                      <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm ${item.badgeTone}`}>
                        {item.icon}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-semibold text-slate-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden p-3">
                <Image
                  src="/assets/channel-partner/partner.webp"
                  alt="Indian Mentors channel partner program visual"
                  width={700}
                  height={500}
                  className="h-full w-full object-cover "
                  unoptimized
                />
                <div className="pointer-events-none absolute left-6 top-6 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-blue-800 shadow-sm">
                  Active Territories Growing
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-center text-3xl font-extrabold text-slate-900 lg:text-left">About the Partnership Program</h2>
          <p className="mt-4 max-w-4xl text-center text-base leading-relaxed text-slate-600 lg:text-left">
            Indian Mentors is expanding its nationwide channel partner network to connect students with verified
            tutors for personalised academic support. Partners operate within defined territories, receive
            operational guidance and lead support, and contribute to expanding quality education services.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          {whyPartner.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_8px_28px_rgba(37,99,235,0.08)]"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <item.icon />
              </div>
              <h3 className="text-lg font-extrabold text-blue-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="relative mt-14 overflow-hidden rounded-[2rem] border border-blue-300/30 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-6 shadow-[0_24px_70px_rgba(30,64,175,0.3)] sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-300/20 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-indigo-300/15 blur-3xl" aria-hidden />
          <h2 className="relative text-center text-3xl font-extrabold text-white lg:text-left">Partnership Opportunities</h2>
          <p className="relative mt-3 text-center text-blue-100/90 lg:text-left">
            Choose a model based on your experience, market reach, and operational capacity.
          </p>
          <div className="relative mt-6 grid gap-4 lg:grid-cols-3">
            {partnershipTracks.map((track) => (
              <article
                key={track.title}
                className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md ${track.iconBg}`}>
                  <track.icon />
                </div>
                <h3 className="text-xl font-extrabold text-white">{track.title}</h3>
                <p className="mt-1 text-sm font-semibold text-blue-100/90">{track.subtitle}</p>
                <ul className="mt-4 space-y-2">
                  {track.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 rounded-lg bg-white/10 px-2 py-1.5 text-sm text-blue-50">
                      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-700">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
          <h2 className="text-center text-3xl font-extrabold text-slate-900 lg:text-left">Channel Partner Investment Structure</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            To ensure professional operations and long-term commitment, Indian Mentors follows a structured investment framework with two key components:
            <span className="font-semibold text-slate-800"> Security Deposit</span> and
            <span className="font-semibold text-slate-800"> Digital Platform Licensing Fee</span>.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700/80">Security Deposit</p>
              <p className="mt-1 text-sm text-slate-600">One-time refundable commitment amount linked to territory level.</p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700/80">Digital Platform License</p>
              <p className="mt-1 text-sm text-slate-600">Subscription fee for CRM, enrollment, tutor management, and revenue tools.</p>
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_8px_24px_rgba(37,99,235,0.08)]">
            <h3 className="text-2xl font-extrabold text-slate-900">Security Deposit (Refundable)</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Security deposit secures authorised territory operations and reinforces service quality, brand integrity, and responsible platform usage.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {[
                "Fully refundable upon termination of partnership agreement",
                "Supports exclusive or semi-exclusive territory allocation",
                "Protects brand integrity and service standards",
                "Ensures responsible operational conduct",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 rounded-lg bg-blue-50/40 px-3 py-2">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-700">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_8px_24px_rgba(37,99,235,0.08)]">
            <h3 className="text-2xl font-extrabold text-slate-900">Digital Platform Licensing Fee</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Partners operate on the Indian Mentors digital ecosystem for student management, tutor allocation,
              communication, and business reporting.
            </p>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-blue-100">
              <table className="min-w-full text-sm">
                <thead className="bg-blue-50/70 text-left text-blue-900">
                  <tr>
                    <th className="px-4 py-3 font-bold">Platform License</th>
                    <th className="px-4 py-3 font-bold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {licensePlans.map((plan) => (
                    <tr key={plan.plan} className="border-t border-blue-100">
                      <td className="px-4 py-3 font-semibold text-slate-800">{plan.plan}</td>
                      <td className="px-4 py-3 text-slate-600">{plan.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </section>

        <section className="mt-14 rounded-3xl border border-blue-100 bg-white p-6">
          <h3 className="text-2xl font-extrabold text-slate-900">Security Deposit by Territory Level</h3>
          <p className="mt-2 text-sm text-slate-600">
            Deposit value depends on market potential, student population, and service demand in the selected territory.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-blue-100">
            <table className="min-w-full text-sm">
              <thead className="bg-blue-50/70 text-left text-blue-900">
                <tr>
                  <th className="px-4 py-3 font-bold">Territory Level</th>
                  <th className="px-4 py-3 font-bold">Operational Coverage</th>
                </tr>
              </thead>
              <tbody>
                {securityDepositByTerritory.map((row) => (
                  <tr key={row.level} className="border-t border-blue-100">
                    <td className="px-4 py-3 font-semibold text-slate-800">{row.level}</td>
                    <td className="px-4 py-3 text-slate-600">{row.coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-blue-100 bg-white p-6">
          <h3 className="text-2xl font-extrabold text-slate-900">Territory Investment Table (Sample Pricing Model)</h3>
          <p className="mt-2 text-sm text-slate-600">
            Illustrative model for planning. Actual pricing may vary by city category and population.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-blue-100">
            <table className="min-w-[860px] w-full text-sm">
              <thead className="bg-blue-50/70 text-left text-blue-900">
                <tr>
                  <th className="px-4 py-3 font-bold">Territory Level</th>
                  <th className="px-4 py-3 font-bold">Example Coverage</th>
                  <th className="px-4 py-3 font-bold">Security Deposit</th>
                  <th className="px-4 py-3 font-bold">License (1 Year)</th>
                  <th className="px-4 py-3 font-bold">License (2 Years)</th>
                  <th className="px-4 py-3 font-bold">License (5 Years)</th>
                </tr>
              </thead>
              <tbody>
                {territoryInvestmentRows.map((row) => (
                  <tr key={row.territory} className="border-t border-blue-100">
                    <td className="px-4 py-3 font-semibold text-slate-800">{row.territory}</td>
                    <td className="px-4 py-3 text-slate-600">{row.coverage}</td>
                    <td className="px-4 py-3 font-semibold text-slate-700">{row.deposit}</td>
                    <td className="px-4 py-3 text-slate-700">{row.y1}</td>
                    <td className="px-4 py-3 text-slate-700">{row.y2}</td>
                    <td className="px-4 py-3 text-slate-700">{row.y5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs font-semibold text-slate-500">
            Tiered pricing supports scalability so partners can start local and expand over time.
          </p>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-blue-100 bg-white p-6">
            <h3 className="text-2xl font-extrabold text-slate-900">Revenue Sharing Model</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Partners earn through enrollment fees and subscription-based tutoring services.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4">
                <p className="text-xs font-extrabold uppercase tracking-wide text-blue-700">Enrollment Fee Share</p>
                <p className="mt-2 text-sm text-slate-700">Channel Partner: <span className="font-extrabold text-blue-900">10%</span></p>
                <p className="text-sm text-slate-700">Indian Mentors: <span className="font-extrabold text-blue-900">90%</span></p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-emerald-50 to-white p-4">
                <p className="text-xs font-extrabold uppercase tracking-wide text-blue-700">Subscription Share</p>
                <p className="mt-2 text-sm text-slate-700">Channel Partner: <span className="font-extrabold text-emerald-700">90%</span></p>
                <p className="text-sm text-slate-700">Indian Mentors: <span className="font-extrabold text-slate-800">10%</span></p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_8px_24px_rgba(37,99,235,0.08)]">
            <h3 className="text-2xl font-extrabold text-slate-900">Partner Earnings Illustration</h3>
            <p className="mt-3 text-sm text-slate-600">
              Example: City-level partner with 50 students at ₹6,000/month subscription.
            </p>
            <div className="mt-4 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4">
              <p className="text-sm font-semibold text-slate-700">Total Monthly Revenue: <span className="font-extrabold text-blue-900">₹3,00,000</span></p>
              <p className="mt-1 text-sm text-slate-700">Partner (90%): <span className="font-extrabold text-emerald-700">₹2,70,000</span></p>
              <p className="text-sm text-slate-700">Indian Mentors (10%): <span className="font-extrabold text-slate-800">₹30,000</span></p>
            </div>
            <div className="mt-3 rounded-2xl border border-blue-100 bg-white p-4">
              <p className="text-sm text-slate-700">Annual Revenue: <span className="font-bold">₹36,00,000</span></p>
              <p className="text-sm text-slate-700">Partner Earnings (90%): <span className="font-bold text-emerald-700">₹32,40,000</span></p>
              <p className="text-sm text-slate-700">Indian Mentors Share (10%): <span className="font-bold">₹3,60,000</span></p>
            </div>
          </article>
        </section>

        <section className="mt-8 rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_8px_24px_rgba(37,99,235,0.08)]">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-extrabold text-slate-900">Revenue Snapshot (Visual)</h3>
              <p className="mt-2 text-sm text-slate-600">
                Quick visualisation of the city-level sample scenario (50 students at ₹6,000/month).
              </p>
              <div className="mt-5 space-y-4">
                {revenueStatsChart.map((item) => {
                  const width = Math.max(10, (item.value / 300000) * 100);
                  return (
                    <div key={item.label}>
                      <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-slate-600">
                        <span>{item.label}</span>
                        <span>₹{new Intl.NumberFormat("en-IN").format(item.value)}</span>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-slate-100">
                        <div className={`h-2.5 rounded-full ${item.color}`} style={{ width: `${width}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">Subscription Revenue Split</p>
                <div className="mt-4 overflow-hidden rounded-full bg-slate-100">
                  <div className="flex h-5 w-full">
                    {revenueSplit.map((item) => (
                      <div
                        key={item.label}
                        className={`${item.color}`}
                        style={{ width: `${item.percent}%` }}
                        title={`${item.label}: ${item.percent}%`}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  {revenueSplit.map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-sm">
                      <span className="inline-flex items-center gap-2 text-slate-700">
                        <span className={`inline-flex h-2.5 w-2.5 rounded-full ${item.color}`} />
                        {item.label}
                      </span>
                      <span className="font-extrabold text-slate-900">{item.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_8px_24px_rgba(37,99,235,0.08)]">
            <h3 className="text-2xl font-extrabold text-slate-900">Channel Partner Revenue Streams</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {[
                "Student enrollment commissions",
                "Monthly subscription plans",
                "Tutor network expansion",
                "Institutional partnerships",
                "Academic programs and test preparation",
                "Specialised skill learning programs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 rounded-lg bg-blue-50/40 px-3 py-2">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-700">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_8px_24px_rgba(37,99,235,0.08)]">
            <h3 className="text-2xl font-extrabold text-slate-900">Why This Model Works</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {[
                "Low infrastructure investment",
                "High recurring revenue potential",
                "Territory-based exclusivity",
                "Centralised digital platform",
                "National brand credibility",
                "Scalable tutoring network",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 rounded-lg bg-blue-50/40 px-3 py-2">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-700">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-12" id="territories">
          <div className="lg:col-span-7 rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
            <h2 className="text-2xl font-extrabold text-slate-900">Geographical Territory Structure</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Indian Mentors follows a structured geographical hierarchy for efficient lead distribution,
              tutor allocation, and partner operations.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {serviceStructure.map((level) => (
                <div
                  key={level}
                  className="rounded-xl border border-blue-100 bg-blue-50/60 px-3 py-2 text-center text-xs font-bold text-blue-900"
                >
                  {level}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl border border-blue-100 bg-white p-4 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
            <p className="px-2 pb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700/80">
              Available Territories
            </p>
            <div className="relative overflow-hidden rounded-2xl border border-blue-100">
              <Image
                src="/assets/home/map1.png"
                alt="Interactive map preview for channel partner territories"
                width={700}
                height={450}
                className="h-auto w-full object-cover"
                unoptimized
              />
            </div>
            <p className="px-2 pt-3 text-xs text-slate-500">
              Explore availability by city and region. Final territory allocation is confirmed after review.
            </p>
          </div>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-100 bg-white p-6">
            <h2 className="text-2xl font-extrabold text-slate-900">Who Can Become a Channel Partner</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              We welcome individuals and organisations interested in contributing to education. No large
              infrastructure investment is required to begin.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {suitablePartners.map((item) => (
                <li key={item} className="rounded-xl border border-blue-100 bg-blue-50/40 px-3 py-2 text-sm font-semibold text-blue-900">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-6">
            <h2 className="text-2xl font-extrabold text-slate-900">Stories From Our Partner Network</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Partners across territories have scaled student enrollments and built recurring education
              businesses through consistent local operations and quality service delivery.
            </p>
            <div className="mt-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
              <div className="mb-2 flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={`partner-star-${i}`} className="text-amber-500" aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm font-semibold leading-relaxed text-blue-950">
                “Within months, we expanded from one locality to city-wide operations with strong parent trust
                and steady referral growth.”
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wide text-blue-700/80">Channel Partner, North India Region</p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-blue-100 bg-white p-6">
          <h2 className="text-center text-3xl font-extrabold text-slate-900 lg:text-left">Frequently Asked Questions</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-blue-100 bg-blue-50/30 p-4">
                <summary className="cursor-pointer list-none text-sm font-extrabold text-blue-950">{faq.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-blue-200 bg-gradient-to-r from-blue-700 to-indigo-800 p-8 text-white shadow-[0_20px_50px_rgba(30,64,175,0.25)] sm:p-10">
          <h2 className="text-3xl font-extrabold">Become a Channel Partner Today</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-blue-100 sm:text-base">
            Join the Indian Mentors Channel Partner Network and help deliver high-quality personalised tutoring
            services across India. Together, we can build a stronger academic support ecosystem for students,
            parents, tutors, and education partners.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-extrabold text-blue-800 transition hover:bg-blue-50"
            >
              Apply Now
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full border border-blue-200/50 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Start Your Partnership Journey with Indian Mentors
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

