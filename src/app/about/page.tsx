"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Navbar } from "@/app/home/Navbar";
import {
  ShieldIcon,
  UsersIcon,
  ChalkboardStatIcon,
  ClockIcon,
  CheckMiniIcon,
  ArrowRightIcon,
} from "@/components/shared/SvgIcons";
import { aboutTimeline, teamMembers, type TeamMember } from "./content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/* ─────────────────────────── helpers ─────────────────────────── */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return reduced;
}

function useCountUp(target: number, play: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!play) return;
    let raf = 0;
    const t0 = performance.now();
    const ms = 1100;
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / ms);
      setN(Math.round(target * (1 - (1 - t) ** 3)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play, target]);
  return n;
}

function INR(n: number) {
  return new Intl.NumberFormat("en-IN").format(n);
}

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const a = parts[0]?.[0] ?? "";
  const b = parts[1]?.[0] ?? parts[0]?.[1] ?? "";
  return (a + b).toUpperCase() || "?";
}

/* ─────────────────────────── sub-components ────────────────────── */

const STATS = [
  { value: 50_000, suffix: "+", label: "Students Empowered", icon: UsersIcon },
  { value: 500_000, suffix: "+", label: "Registered Tutors", icon: ChalkboardStatIcon },
  { value: 5_000_000, suffix: "+", label: "Sessions Delivered", icon: ClockIcon },
  { value: 50_000, suffix: "+", label: "Tutor Reviews", icon: ShieldIcon },
];

function StatCard({
  value,
  suffix,
  label,
  icon: Icon,
  reduced,
}: (typeof STATS)[number] & { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const play = inView && !reduced;
  const animated = useCountUp(value, play);
  const shown = reduced && inView ? value : animated;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center rounded-3xl border border-slate-200/70 bg-white/95 p-8 text-center shadow-[0_8px_30px_rgba(15,23,42,0.07)] backdrop-blur-sm"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/30 [&_svg]:h-6 [&_svg]:w-6">
        <Icon />
      </div>
      <p className="text-4xl font-extrabold tabular-nums tracking-tight text-[#1a2744]">
        {INR(shown)}
        <span className="text-blue-600">{suffix}</span>
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-600/90">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1a2744] sm:text-4xl">
      {children}
    </h2>
  );
}

function CommitmentItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckMiniIcon />
      <span className="text-sm font-semibold leading-relaxed text-slate-700">{text}</span>
    </li>
  );
}

function TeamProfileCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex flex-col rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
      <div className="flex items-start gap-4">
        {member.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.image}
            alt=""
            className="h-20 w-20 shrink-0 rounded-2xl object-cover ring-2 ring-blue-100"
          />
        ) : (
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-xl font-extrabold text-white shadow-md shadow-blue-500/30 ring-2 ring-blue-200/50">
            {initialsFromName(member.name)}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="text-base font-extrabold text-[#1a2744]">{member.name}</h3>
          <p className="mt-0.5 text-sm font-bold text-blue-700">{member.designation}</p>
          <span className="mt-1 inline-block rounded-full bg-blue-50 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-blue-600">
            {member.department}
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm font-semibold leading-relaxed text-slate-600">{member.bio}</p>
      {member.linkedin_url ? (
        <a
          href={member.linkedin_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-blue-600 hover:underline underline-offset-2"
        >
          View on LinkedIn
          <ArrowRightIcon />
        </a>
      ) : null}
    </article>
  );
}

function RoleBlock({
  emoji,
  title,
  roles,
}: {
  emoji: string;
  title: string;
  roles: { role: string; desc: string }[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)]">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-xl">
          {emoji}
        </span>
        <h3 className="text-base font-extrabold text-[#1a2744]">{title}</h3>
      </div>
      <ul className="space-y-3">
        {roles.map((r) => (
          <li key={r.role} className="flex gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-extrabold text-white">
              ✓
            </span>
            <div>
              <p className="text-sm font-extrabold text-slate-800">{r.role}</p>
              <p className="mt-0.5 text-xs font-semibold leading-relaxed text-slate-500">{r.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

/* ─────────────────────────── page ─────────────────────────── */

export default function AboutPage() {
  const reduced = usePrefersReducedMotion();
  const activeTimeline = aboutTimeline.filter((t) => t.status === "Active");
  const activeTeam = teamMembers.filter((m) => m.status === "Active");

  const yearGroups = activeTimeline.reduce<Record<string, typeof activeTimeline>>(
    (acc, entry) => {
      acc[entry.year] = acc[entry.year] ? [...acc[entry.year], entry] : [entry];
      return acc;
    },
    {}
  );

  return (
    <div className={`${poppins.className} min-h-screen bg-slate-50 text-slate-900`}>
      <Navbar onPrimaryCTA={() => { }} />

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 pb-24 pt-28 md:pb-20 md:pt-32">
        {/* dot pattern */}
        <div
          className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full opacity-30 md:right-0"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.55) 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
            maskImage: "radial-gradient(circle at center, black 35%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 35%, transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-4">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/95 shadow-sm backdrop-blur-sm md:text-xs">
              Indian Mentors · About Us
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.12] text-[#FFD600] drop-shadow-sm sm:text-5xl lg:text-[3.25rem]">
              Building Futures Through{" "}
              <span className="relative inline-block whitespace-nowrap text-white">
                Personalised
                <svg
                  className="pointer-events-none absolute left-0 w-full text-white"
                  style={{ bottom: "-8px" }}
                  viewBox="0 0 260 12"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path d="M4 8C70 2 190 2 256 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>{" "}
              Education
            </h1>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-white/85 sm:text-lg">
              A trusted educational ecosystem connecting students, parents, tutors, and
              institutions through structured, transparent, and technology-enabled
              academic mentorship.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FFD600] px-6 text-sm font-bold text-neutral-900 shadow-lg shadow-amber-600/25 transition hover:bg-[#ffcc00] hover:shadow-xl hover:shadow-amber-600/20"
              >
                Book Free Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Talk to Counsellor
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Overview floating card ── */}
      <div className="relative z-20 mx-auto mt-[-28px] max-w-[1200px] px-4 sm:mt-[-32px]">
        <div className="rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.1)] backdrop-blur-sm md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-600/90">
                Who we are
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#1a2744] sm:text-3xl">
                More than a tutoring platform
              </h2>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-slate-600">
                Indian Mentors delivers verified, high-quality, result-oriented mentorship
                through structured learning journeys backed by accountability, performance
                tracking, and evolving academic standards. We don&apos;t just provide tutors —
                we build organised academic journeys that promote clarity, discipline, and
                measurable outcomes.
              </p>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-600/90">
                Our commitment
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Personalised learning paths tailored to individual goals",
                  "Transparent operational & monitoring systems",
                  "Global academic and competitive exam alignment",
                  "Technology-enabled learning & reporting support",
                  "Verified and professionally screened mentors",
                ].map((c) => (
                  <CommitmentItem key={c} text={c} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Impact Stats ── */}
      <motion.section
        aria-labelledby="impact-heading"
        className="mt-16 border-y border-zinc-200/90 bg-zinc-50/80 py-16"
        {...(reduced ? {} : fadeUp())}
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="mb-10 text-center">
            <SectionLabel>Our impact</SectionLabel>
            <SectionHeading>Trusted at scale across India</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Structured growth, trusted partnerships, and sustained academic engagement.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div key={s.label} {...(reduced ? {} : fadeUp(i * 0.08))}>
                <StatCard {...s} reduced={reduced} />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-semibold text-slate-600"
            {...(reduced ? {} : fadeUp(0.35))}
          >
            {[
              { icon: "🏆", text: "500+ Rewards & Recognitions" },
              { icon: "⭐", text: "50,000+ Tutor Reviews" },
              { icon: "🌍", text: "Expanding Global Presence" },
            ].map(({ icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2"
              >
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── Mission & Vision ── */}
      <section aria-labelledby="mission-heading" className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="mb-10 text-center">
            <SectionLabel>Mission & vision</SectionLabel>
            <SectionHeading>Why we exist and where we&apos;re going</SectionHeading>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Mission */}
            <motion.div
              className="rounded-3xl bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 p-8 text-white shadow-[0_20px_50px_rgba(37,99,235,0.25)]"
              {...(reduced ? {} : fadeUp(0))}
            >
              <div className="mb-4 inline-flex rounded-2xl bg-white/15 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                🎯 Our Mission
              </div>
              <h3 className="text-xl font-extrabold text-[#FFD600] sm:text-2xl">
                Empowering Every Learner Through Structured Mentorship
              </h3>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-white/85">
                Deliver structured, transparent, and personalised academic mentorship that
                empowers students to achieve consistent and measurable growth. Learning is
                not left to chance — it&apos;s guided by planning, monitoring, and
                accountability.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Deliver verified & high-quality tutors",
                  "Ensure transparent tracking for parents",
                  "Provide measurable academic reporting",
                  "Support tutors with professional systems",
                  "Maintain operational excellence through technology",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-white/90">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFD600] text-[10px] font-extrabold text-neutral-900">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* Vision */}
            <motion.div
              className="rounded-3xl border border-slate-200/70 bg-white/95 p-8 shadow-[0_8px_30px_rgba(15,23,42,0.07)]"
              {...(reduced ? {} : fadeUp(0.1))}
            >
              <div className="mb-4 inline-flex rounded-2xl bg-blue-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">
                🌍 Our Vision
              </div>
              <h3 className="text-xl font-extrabold text-[#1a2744] sm:text-2xl">
                Building India&apos;s Most Trusted Personalised Tutoring Ecosystem
              </h3>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-slate-600">
                Become India&apos;s most trusted personalised tutoring ecosystem by combining
                mentorship, structure, and technology to redefine academic support at
                scale — setting new standards across India.
              </p>
              <p className="mt-6 text-sm font-extrabold uppercase tracking-wide text-slate-700">
                We envision a future where:
              </p>
              <ul className="mt-3 space-y-3">
                {[
                  "Every student receives customised academic guidance aligned with their goals",
                  "Parents experience transparency, reliability, and consistent communication",
                  "Tutors operate within a professional, technology-enabled system",
                  "Educational partnerships are built on accountability and long-term value",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckMiniIcon />
                    <span className="text-sm font-semibold leading-relaxed text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex h-11 items-center gap-2 rounded-2xl bg-[#1a2744] px-5 text-sm font-extrabold text-white shadow-md transition hover:opacity-90"
                >
                  Book Free Demo <ArrowRightIcon />
                </Link>
                <Link
                  href="/channel-partner"
                  className="inline-flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm font-extrabold text-slate-800 transition hover:bg-slate-100"
                >
                  Partner With Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Journey ── */}
      <section
        aria-labelledby="journey-heading"
        className="border-y border-zinc-200/90 bg-zinc-50/80 py-16"
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>Our journey</SectionLabel>
            <SectionHeading>Milestones That Shaped Indian Mentors</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              The growth of Indian Mentors reflects a continuous effort to improve
              personalised education support.
            </p>
          </motion.div>

          <div className="space-y-8">
            {Object.entries(yearGroups).map(([year, entries], yi) => (
              <motion.div key={year} {...(reduced ? {} : fadeUp(yi * 0.08))}>
                <div className="mb-4 flex items-center gap-4">
                  <span className="rounded-2xl bg-blue-600 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white shadow-md shadow-blue-500/30">
                    {year}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {entries.map((entry, ei) => (
                    <div
                      key={entry.timeline_id}
                      className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(15,23,42,0.1)]"
                    >
                      <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-xs font-extrabold text-blue-500">
                        {String(ei + 1).padStart(2, "0")}
                      </div>
                      <h4 className="pr-10 text-base font-extrabold text-[#1a2744]">
                        {entry.milestone_title}
                      </h4>
                      <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">
                        {entry.milestone_description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership Structure ── */}
      <section aria-labelledby="leadership-heading" className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>Our team</SectionLabel>
            <SectionHeading>A Structured Team Powering Academic Excellence</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Every student engagement is backed by coordination, monitoring, compliance,
              and continuous improvement — ensuring consistency across cities and academic
              levels.
            </p>
          </motion.div>

          {/* Highlight: Founder */}
          <motion.div
            className="mb-6 flex flex-col items-start gap-4 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 sm:flex-row sm:items-center sm:p-8"
            {...(reduced ? {} : fadeUp(0))}
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-2xl shadow-lg shadow-blue-500/30">
              👔
            </div>
            <div className="flex-1">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">
                Leadership & Strategy
              </p>
              <h3 className="mt-1 text-xl font-extrabold text-[#1a2744]">Founder & CEO</h3>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">
                Provides strategic direction, governance oversight, and long-term growth
                planning to ensure sustainability, accountability, and institutional
                credibility.
              </p>
            </div>
            <Link
              href="/career"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-2xl bg-blue-600 px-5 text-sm font-extrabold text-white shadow-md shadow-blue-500/30 transition hover:bg-blue-700"
            >
              Join Our Team <ArrowRightIcon />
            </Link>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                emoji: "🎓",
                title: "Academic & Admission",
                roles: [
                  { role: "Admission Counsellors", desc: "Guide parents and students through requirement assessment, academic planning, and structured onboarding." },
                  { role: "Academic Counsellors", desc: "Monitor student progress, intervene when necessary, and ensure learning objectives remain aligned with performance goals." },
                  { role: "Admission Coordinators", desc: "Manage demo scheduling, coordination between parents, student and tutor, and onboarding workflows." },
                ],
              },
              {
                emoji: "👨‍🏫",
                title: "Tutor Management & Quality",
                roles: [
                  { role: "Tutor Recruiters", desc: "Identify, screen, and verify qualified tutors through structured compliance and evaluation processes." },
                  { role: "Quality Review Team", desc: "Monitor sessions, review feedback, assess performance metrics, and ensure academic standards are maintained." },
                ],
              },
              {
                emoji: "🏢",
                title: "Operations & Support",
                roles: [
                  { role: "Customer Support", desc: "Serve as the primary communication bridge for parents and students, ensuring timely response and structured resolution." },
                  { role: "Human Resources", desc: "Manage onboarding, compliance documentation, performance processes, and professional development frameworks." },
                  { role: "Finance & Accounts", desc: "Maintain transparent billing, payment processing, and financial compliance systems." },
                ],
              },
              {
                emoji: "💻",
                title: "Technology & Expansion",
                roles: [
                  { role: "ERP & Tech Operations", desc: "Develop and maintain technology-enabled monitoring systems, dashboards, reporting tools, and workflow integrations." },
                  { role: "Channel Partners", desc: "Support outreach, regional expansion, and local coordination while maintaining centralised operational standards." },
                ],
              },
              {
                emoji: "📋",
                title: "Compliance & Administration",
                roles: [
                  { role: "Administrative Officers", desc: "Ensure documentation accuracy, policy adherence, and operational discipline across all functions." },
                  { role: "Compliance Officers", desc: "Oversee regulatory adherence, audit readiness, and governance frameworks across all departments." },
                ],
              },
            ].map((block, i) => (
              <motion.div key={block.title} {...(reduced ? {} : fadeUp(i * 0.07))}>
                <RoleBlock {...block} />
              </motion.div>
            ))}

            {/* System-driven card */}
            <motion.div
              className="rounded-3xl bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 p-6 text-white shadow-[0_8px_30px_rgba(37,99,235,0.2)]"
              {...(reduced ? {} : fadeUp(0.35))}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-xl">
                ⚡
              </div>
              <h3 className="text-base font-extrabold text-[#FFD600]">A System-Driven Team</h3>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-white/85">
                Each team member operates within a defined framework of accountability
                and collaboration.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Deliver structured mentorship",
                  "Ensure measurable academic growth",
                  "Maintain transparency and trust",
                  "Uphold professional standards",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-semibold text-white/90">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFD600] text-[10px] font-extrabold text-neutral-900">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs font-extrabold uppercase tracking-wide text-white/60">
                Indian Mentors — People, Processes & Purpose.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Managing Team ── */}
      {activeTeam.length > 0 && (
        <section
          aria-labelledby="managing-heading"
          className="border-t border-zinc-200/90 bg-zinc-50/80 py-16"
        >
          <div className="mx-auto max-w-[1200px] px-4">
            <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
              <SectionLabel>Managing team</SectionLabel>
              <SectionHeading>Leadership & Management</SectionHeading>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                Experienced professionals committed to building a responsible mentorship
                ecosystem — combining expertise in education, operations, academic
                counselling, and technology.
              </p>
            </motion.div>
            <div className="grid gap-6 lg:grid-cols-2">
              {activeTeam.map((member, i) => (
                <motion.div key={member.team_id} {...(reduced ? {} : fadeUp(i * 0.08))}>
                  <TeamProfileCard member={member} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Banner ── */}
      <motion.section
        className="py-16"
        {...(reduced ? {} : fadeUp())}
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 p-8 text-center shadow-[0_20px_50px_rgba(37,99,235,0.3)] sm:p-12">
            <div
              className="pointer-events-none absolute -left-16 -top-16 h-[320px] w-[320px] rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.55) 1.5px, transparent 1.5px)",
                backgroundSize: "14px 14px",
                maskImage: "radial-gradient(circle at center, black 35%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 35%, transparent 70%)",
              }}
              aria-hidden
            />
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
              Ready to begin?
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#FFD600] sm:text-4xl">
              Indian Mentors — Where Learning Meets Leadership
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-semibold leading-relaxed text-white/85">
              Book a free demo today and get matched with a verified mentor tailored to
              your academic goals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#FFD600] px-7 text-sm font-bold text-neutral-900 shadow-lg shadow-amber-600/30 transition hover:bg-[#ffcc00] hover:shadow-xl"
              >
                Book Free Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Talk to Counsellor
              </Link>
              <Link
                href="/channel-partner"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
