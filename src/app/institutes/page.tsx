"use client";

import Link from "next/link";
import Image from "next/image";
import { BadgeCheck, Building2, Workflow, Zap } from "lucide-react";
import { Navbar } from "@/app/home/Navbar";

const keyValueProps = [
  {
    title: "Verified educator network across India",
    icon: BadgeCheck,
    accent: "from-blue-600 to-indigo-600",
  },
  {
    title: "Structured recruitment and screening process",
    icon: Workflow,
    accent: "from-indigo-600 to-violet-600",
  },
  {
    title: "Flexible hiring models for institutions",
    icon: Building2,
    accent: "from-sky-600 to-blue-600",
  },
  {
    title: "Fast and reliable teacher placement",
    icon: Zap,
    accent: "from-cyan-600 to-blue-600",
  },
];

const hireForSectors = [
  {
    title: "Coaching Institutes",
    description:
      "Recruit subject experts for competitive exam preparation and academic coaching programs.",
    points: [
      "Board exam preparation",
      "NEET coaching faculty",
      "IIT-JEE preparation experts",
      "CUET entrance mentors",
      "Olympiad trainers",
      "Foundation course instructors",
    ],
  },
  {
    title: "Schools",
    description:
      "Recruit qualified teachers across primary, middle, and senior secondary levels with curriculum alignment.",
    points: [
      "PRT, TGT, and PGT teacher categories",
      "CBSE and ICSE school recruitment",
      "State board institution staffing",
      "International curriculum teacher support",
    ],
  },
  {
    title: "Colleges & Higher Education",
    description:
      "Build strong academic departments with experienced faculty and subject specialists.",
    points: [
      "Assistant Professors",
      "Subject Lecturers",
      "Visiting Faculty",
      "Academic Coordinators",
      "Departmental Faculty Members",
    ],
  },
  {
    title: "EdTech Companies",
    description:
      "Scale digital learning with reliable teaching teams and remote-first educators.",
    points: [
      "Online instructors",
      "Subject tutors",
      "Doubt-solving mentors",
      "Curriculum content creators",
      "Digital classroom educators",
    ],
  },
  {
    title: "Corporate Academic Programs",
    description:
      "Deliver structured learning and professional development programs with verified trainers.",
    points: [
      "Skill development trainers",
      "Language instructors",
      "Professional certification mentors",
      "Soft skills trainers",
      "Academic program facilitators",
    ],
  },
];

const reliabilityBlocks = [
  {
    title: "Pre-Verified Teacher Database",
    body: "Every shortlisted educator goes through quality checks before recommendation.",
    checks: [
      "Qualification verification",
      "Subject expertise assessment",
      "Teaching experience review",
      "Communication and teaching ability evaluation",
    ],
  },
  {
    title: "Bulk Recruitment Support",
    body: "Efficiently manage large hiring drives for institutions with multi-role requirements.",
    checks: [
      "School expansion",
      "New academic session hiring",
      "Coaching institute batch launches",
      "Multi-subject faculty requirements",
    ],
  },
  {
    title: "Interview & Demo Coordination",
    body: "Our team coordinates interviews and demo classes for structured candidate evaluation.",
    checks: [
      "Academic interviews",
      "Demo teaching sessions",
      "Subject expertise assessments",
      "Classroom communication evaluation",
    ],
  },
  {
    title: "Background Verification",
    body: "Structured verification helps ensure safer and more reliable hiring decisions.",
    checks: [
      "Academic certificate validation",
      "Identity verification",
      "Teaching experience confirmation",
    ],
  },
  {
    title: "Contract Staffing Support",
    body: "Choose hiring models based on short-term, long-term, or session-based faculty needs.",
    checks: [
      "Full-time faculty recruitment",
      "Visiting faculty placements",
      "Contract-based teachers",
      "Short-term staffing and substitutes",
    ],
  },
];

const processSteps = [
  {
    title: "Step 1 - Requirement Analysis",
    body: "Understand institutional goals, subject needs, role scope, and hiring timelines.",
  },
  {
    title: "Step 2 - Teacher Sourcing",
    body: "Source candidates through our educator database, network outreach, and referrals.",
  },
  {
    title: "Step 3 - Screening & Shortlisting",
    body: "Run qualification checks, HR screening, demo assessment, and verification workflows.",
  },
  {
    title: "Step 4 - Interview & Selection",
    body: "Institution teams conduct final interviews with high-fit shortlisted candidates.",
  },
  {
    title: "Step 5 - Onboarding & Support",
    body: "Coordinate joining, documentation, and replacement support when required.",
  },
];

const dashboardModules = [
  {
    icon: "📊",
    title: "Institution Dashboard",
    description:
      "A central overview to monitor teacher requirements, candidate pipeline, and hiring updates.",
    features: [
      "Overview of active requirements",
      "Recruitment progress tracking",
      "New candidate notifications",
      "Quick access to modules",
    ],
    benefit: "Instant visibility of all recruitment activities.",
  },
  {
    icon: "🏫",
    title: "Institution Profile",
    description:
      "Manage institution details for accurate candidate matching and structured recruitment setup.",
    features: [
      "Institution details and contacts",
      "Location and board information",
      "Subjects and grade levels",
      "Profile verification options",
    ],
    benefit: "Improves matching based on institutional requirements.",
  },
  {
    icon: "📢",
    title: "Post Teacher Requirement",
    description:
      "Create and publish role requirements directly from the dashboard with defined hiring criteria.",
    features: [
      "Subject and grade requirement",
      "Full-time / part-time / contract options",
      "Experience and qualification preferences",
      "Role expectations and job details",
    ],
    benefit: "Makes requirement submission quick and structured.",
  },
  {
    icon: "🔍",
    title: "Browse Verified Teachers",
    description:
      "Explore verified educator profiles with complete qualification and experience context.",
    features: [
      "Qualifications and certifications",
      "Subject and grade expertise",
      "Verification status",
      "Resume and profile details",
    ],
    benefit: "Helps select high-fit candidates faster.",
  },
  {
    icon: "🎓",
    title: "Interview & Demo Management",
    description:
      "Schedule and coordinate interviews or demo classes with candidate status tracking.",
    features: [
      "Interview scheduling tools",
      "Demo class coordination",
      "Candidate evaluation notes",
      "Interview status tracking",
    ],
    benefit: "Creates a consistent and professional selection workflow.",
  },
  {
    icon: "📑",
    title: "Recruitment Tracking",
    description:
      "Track every stage of recruitment from shortlist to final offer in real time.",
    features: [
      "Shortlisted candidate tracking",
      "Interview progress updates",
      "Selection records",
      "Recruitment completion status",
    ],
    benefit: "Maintains end-to-end process transparency.",
  },
  {
    icon: "💬",
    title: "Communication & Coordination",
    description:
      "Communicate with recruiters and candidates through organised hiring conversations.",
    features: [
      "Recruitment coordination messages",
      "Candidate communication",
      "Hiring updates",
      "Support assistance threads",
    ],
    benefit: "Keeps communication clear and centralised.",
  },
  {
    icon: "📈",
    title: "Hiring Reports & Analytics",
    description:
      "Get data-backed insights on hiring performance, speed, and candidate pipeline outcomes.",
    features: [
      "Recruitment activity summaries",
      "Candidate pipeline reports",
      "Hiring timeline analysis",
      "Placement records",
    ],
    benefit: "Supports better, data-driven hiring decisions.",
  },
  {
    icon: "💳",
    title: "Recruitment Billing & Payments",
    description:
      "Maintain financial transparency with invoice history, plan visibility, and reminders.",
    features: [
      "Recruitment invoices",
      "Payment history records",
      "Service plan tracking",
      "Billing reminders",
    ],
    benefit: "Ensures clear recruitment finance management.",
  },
  {
    icon: "🔔",
    title: "Notifications & Updates",
    description:
      "Receive real-time alerts for candidate movement and recruitment milestones.",
    features: [
      "New teacher applications",
      "Interview reminders",
      "Shortlisting alerts",
      "Recruitment status updates",
    ],
    benefit: "Helps teams act quickly with up-to-date information.",
  },
  {
    icon: "🛠",
    title: "Institutional Support",
    description:
      "Get direct support from recruitment specialists for platform and hiring assistance.",
    features: [
      "Recruitment consultation support",
      "Requirement modification requests",
      "Technical assistance",
      "Candidate replacement requests",
    ],
    benefit: "Ensures smooth, uninterrupted recruitment operations.",
  },
  {
    icon: "⚙️",
    title: "Account Settings",
    description:
      "Manage administrator preferences, security controls, and communication settings.",
    features: [
      "Admin profile management",
      "Password and security settings",
      "Notification preferences",
      "Access control management",
    ],
    benefit: "Provides secure and customisable dashboard access.",
  },
];

export default function InstitutesPage() {
  return (
    <main className="bg-gradient-to-b from-blue-50/80 via-white to-indigo-50/50 px-4 pb-20 pt-0">
      <Navbar
        onPrimaryCTA={() => {
          window.location.href = "/#contact";
        }}
      />

      <div className="mx-auto max-w-[1200px]">
        <section className="relative overflow-hidden sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full  blur-3xl" />

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-blue-700/90">
                Teacher Recruitment Services
              </p>
              <h1 className="mt-3 text-balance bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-600 bg-clip-text text-3xl font-extrabold leading-[1.15] text-transparent sm:text-4xl md:text-5xl">
                Institutional Hiring Division - Build Strong Academic Teams with Confidence
              </h1>
              <p className="mt-5 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
                Indian Mentors supports schools, coaching institutes, colleges, EdTech companies, and educational
                organizations in recruiting qualified, verified, and performance-ready teachers across India.
              </p>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
                From candidate sourcing and screening to interview coordination and onboarding support, we simplify the
                full recruitment journey for institutions that need quality educators quickly.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {keyValueProps.map((item) => (
                  <div
                    key={item.title}
                    className="group relative flex min-h-[128px] flex-col overflow-hidden rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-4 text-blue-900 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-[0_12px_28px_rgba(37,99,235,0.16)]"
                  >
                    <div className="flex flex-col items-start gap-3">
                      <span
                        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} text-white shadow-md transition group-hover:scale-105`}
                      >
                        <item.icon className="h-[18px] w-[18px]" strokeWidth={2.4} />
                      </span>
                      <p className="text-sm font-bold leading-snug text-blue-900">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700"
                >
                  Hire Teachers
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
                >
                  Talk to a Recruiter
                </Link>
              </div>
            </div>
            <div className="relative h-full w-full max-w-xl overflow-hidden lg:ml-auto lg:justify-self-end">
              <Image
                src="/assets/institutes/institutes.webp"
                alt="Institutes hiring teachers with Indian Mentors"
                width={1300}
                height={1300}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-700/90">
            Hire Teachers For
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Sector-focused teacher recruitment support
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Indian Mentors supports structured faculty hiring across multiple education sectors and learning
            organizations.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {hireForSectors.map((sector) => (
              <article
                key={sector.title}
                className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_8px_28px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-lg font-extrabold text-slate-900">{sector.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{sector.description}</p>
                <ul className="mt-4 space-y-2">
                  {sector.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-slate-700">
                      <span className="mt-[3px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-extrabold text-white">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-700/90">
            What Makes Recruitment Reliable
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Built around quality assurance, verification, and speed
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {reliabilityBlocks.map((block) => (
              <article
                key={block.title}
                className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/70 p-6 shadow-[0_8px_26px_rgba(30,64,175,0.08)]"
              >
                <h3 className="text-lg font-extrabold text-slate-900">{block.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{block.body}</p>
                <ul className="mt-4 space-y-2">
                  {block.checks.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-slate-700">
                      <span className="mt-[3px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-extrabold text-white">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_8px_28px_rgba(15,23,42,0.08)] sm:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-700/90">Our Hiring Process</p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Structured framework from requirement to onboarding
          </h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">0{index + 1}</p>
                <h3 className="mt-2 text-sm font-extrabold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{step.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold leading-relaxed text-slate-700">
            This process helps institutions reduce hiring time, improve candidate quality, and ensure academic
            alignment.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-700/90">Why Institutions Choose Us</p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Reliable hiring support with transparency and speed
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Large nationwide educator network",
              "Subject-specific screening processes",
              "Quick turnaround time",
              "Transparent communication",
              "Dedicated recruitment support team",
              "Cost-effective hiring solutions",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-800"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50/70 to-blue-50/40 p-6 sm:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-indigo-700/90">
            Schools & Institutions Collaboration
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Structured academic support beyond recruitment
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Bulk faculty hiring programs",
              "Subject specialist onboarding",
              "Academic training workshops",
              "Competitive exam support programs",
              "Academic quality audit and monitoring systems",
            ].map((item) => (
              <li key={item} className="rounded-2xl border border-indigo-100 bg-white/85 px-4 py-3 text-sm font-semibold text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_8px_28px_rgba(15,23,42,0.08)] sm:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-700/90">
            ERP System & Transparency
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Institutions Management Dashboard
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Manage teacher recruitment, track hiring progress, and stay informed through a secure, technology-enabled
            workflow.
          </p>
          <p className="mt-3 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3 text-sm font-semibold text-blue-900">
            Post Requirement - Review Candidates - Interview - Select - Appoint
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {dashboardModules.map((module) => (
              <article
                key={module.title}
                className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/80 p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-xl">
                    {module.icon}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900">{module.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{module.description}</p>
                <ul className="mt-4 space-y-2">
                  {module.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-xs text-slate-700">
                      <span className="mt-[4px] inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[8px] font-extrabold text-white">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-2 text-xs font-semibold text-blue-900">
                  {module.benefit}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/70 to-blue-50/50 p-6 sm:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-700/90">
            Secure Recruitment Ecosystem
          </p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              "Secure institutional login authentication",
              "Encrypted communication channels",
              "Verified teacher profile database",
              "Protected recruitment documentation",
              "Real-time hiring workflow tracking",
              "Clear visibility of candidate availability, shortlisting, and completion",
            ].map((item) => (
              <li key={item} className="rounded-xl border border-emerald-100 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-white shadow-[0_16px_40px_rgba(37,99,235,0.35)] sm:p-9">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-100">
            Conversion Strip
          </p>
          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
            Find the Right Teachers for Your Institution
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-blue-50 sm:text-base">
            Connect with qualified and verified educators through a structured recruitment system supported by
            technology and transparency.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-extrabold text-blue-700 shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Post Teacher Requirement
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-extrabold text-blue-700 shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Schedule Recruitment Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-extrabold text-blue-700 shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Talk to Recruitment Advisor
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
