"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/app/home/Navbar";
import { TrustScaleSection } from "@/app/home/TrustScaleSection";
import { LearnAnywhereHelpSection } from "@/app/home/LearnAnywhereHelpSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CheckMiniIcon, ArrowRightIcon } from "@/components/shared/SvgIcons";
import { withBasePath } from "@/lib/withBasePath";
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

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const a = parts[0]?.[0] ?? "";
  const b = parts[1]?.[0] ?? parts[0]?.[1] ?? "";
  return (a + b).toUpperCase() || "?";
}

/* ─────────────────────────── sub-components ────────────────────── */

const homeCard =
  "rounded-3xl border border-blue-100/90 bg-white/98 shadow-[0_24px_60px_rgba(37,99,235,0.08)] ring-1 ring-blue-500/5 backdrop-blur-sm";

function TeamProfileCard({ member }: { member: TeamMember }) {
  return (
    <article
      className={`group flex flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(37,99,235,0.14)] ${homeCard}`}
    >
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
    <div className={`p-6 ${homeCard}`}>
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
  const [isAboutVideoPlaying, setIsAboutVideoPlaying] = useState(false);
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
    <div
      className={`${poppins.className} min-h-screen overflow-x-clip bg-gradient-to-b from-blue-50/90 via-[#f0f7ff] to-white text-blue-950`}
    >
      <Navbar onPrimaryCTA={() => { }} />

      {/* ── Hero (home-style soft shell + gradient headline) ── */}
      <header className="relative overflow-hidden px-4 pb-10 pt-10 md:pb-14 md:pt-14">
        <div
          className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-blue-200/25 blur-3xl"
          aria-hidden
        />
        <div className="relative z-[1] mx-auto max-w-[1200px] text-center">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-blue-600/90">
              About Indian Mentors
            </p>
            <h1 className="mx-auto mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.15rem]">
              <span className="bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Building futures through personalised education
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base font-semibold leading-relaxed text-slate-600 sm:text-lg">
              A trusted educational ecosystem connecting students, parents, tutors, and institutions
              through structured, transparent, and technology-enabled academic mentorship.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={withBasePath("/#contact")}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-sm font-extrabold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-700"
              >
                Book free demo
              </Link>
              <Link
                href={withBasePath("/contact")}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-300/90 bg-white px-6 text-sm font-bold text-slate-800 shadow-sm transition hover:border-blue-300 hover:shadow-md"
              >
                Talk to counsellor
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ── About video (services-strip style card) ── */}
      <div className="relative z-20 mx-auto -mt-2 max-w-[1200px] px-4 sm:-mt-4">
        <motion.div
          className={`p-5 sm:p-6 md:p-8 ${homeCard}`}
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5 lg:pt-1">
              <SectionHeading
                id="about-video-heading"
                align="left"
                label="See how we work"
                title="Inside Indian Mentors"
                sub="Watch how we combine verified tutors, structured processes, and technology-backed reporting to deliver personalised, measurable academic progress."
                className="[&_h2]:text-left [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_p]:mx-0 [&_p]:max-w-none"
                titleClassName="!bg-none !bg-clip-border !text-slate-900"
                subClassName="text-left text-sm font-semibold leading-relaxed text-slate-600"
              />
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-blue-100/90 bg-slate-900 shadow-[0_12px_36px_rgba(37,99,235,0.15)] ring-1 ring-blue-500/10">
                <div className="aspect-video w-full mx-auto">
                  {isAboutVideoPlaying ? (
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/N78TDRRCqEo?autoplay=1&rel=0&modestbranding=1&playsinline=1"
                      title="Indian Mentors overview video"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsAboutVideoPlaying(true)}
                      className="group relative h-full w-full"
                      aria-label="Play Indian Mentors overview video"
                    >
                      <Image
                        src="https://img.youtube.com/vi/N78TDRRCqEo/maxresdefault.jpg"
                        alt="Indian Mentors video cover"
                        fill
                        unoptimized
                        className="object-cover"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/20 to-transparent" />

                      <span className="absolute inset-0 m-auto inline-flex h-20 w-20 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-300/35" />
                        <span className="absolute inline-flex h-[88%] w-[88%] animate-[pulse_2.6s_ease-in-out_infinite] rounded-full bg-blue-500/35 blur-[1px]" />
                        <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-[0_12px_35px_rgba(37,99,235,0.45)] transition duration-300 group-hover:scale-110 group-hover:from-blue-400 group-hover:to-blue-600">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-7 w-7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                          >
                            <path d="M8 6v12l9-6-9-6z" fill="currentColor" stroke="none" />
                          </svg>
                        </span>
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Impact (same block as home TrustScaleSection) ── */}
      <div className="mt-12 md:mt-16">
        <TrustScaleSection />
      </div>

      {/* ── Mission & Vision ── */}
      <section aria-labelledby="mission-heading" className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            id="mission-heading"
            align="center"
            label="Mission & vision"
            title="Why we exist and where we&apos;re going"
            sub="Structured mentorship, transparent operations, and technology that keeps families, tutors, and institutions aligned."
            className="mx-auto mb-10 max-w-3xl md:mb-12 [&_h2]:text-center [&_p]:mx-auto [&_p]:max-w-2xl [&_p]:text-center"
            subClassName="!mx-auto text-center text-[15px] leading-relaxed text-slate-600"
          />
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
            <motion.div className={`p-8 ${homeCard}`} {...(reduced ? {} : fadeUp(0.1))}>
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
                  href={withBasePath("/#contact")}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-blue-600 px-5 text-sm font-extrabold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-700"
                >
                  Book free demo <ArrowRightIcon />
                </Link>
                <Link
                  href={withBasePath("/channel-partner")}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-300/90 bg-white px-5 text-sm font-extrabold text-slate-800 shadow-sm transition hover:border-blue-300"
                >
                  Partner with us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Journey (home TrustScale-style surface) ── */}
      <section
        aria-labelledby="journey-heading"
        className="relative overflow-hidden border-y border-blue-100/70 bg-[#f8fafc] px-4 py-14 md:py-20"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 0%, black 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 0%, black 20%, transparent 75%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1200px]">
          <SectionHeading
            id="journey-heading"
            align="center"
            label="Our journey"
            title="Milestones that shaped Indian Mentors"
            sub="The growth of Indian Mentors reflects a continuous effort to improve personalised education support."
            className="mx-auto mb-10 max-w-3xl md:mb-14 [&_h2]:text-center [&_p]:mx-auto [&_p]:max-w-2xl [&_p]:text-center"
            subClassName="!mx-auto text-center text-[15px] leading-relaxed text-slate-600"
          />

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
                      className={`group relative overflow-hidden p-6 transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(37,99,235,0.12)] ${homeCard}`}
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
      <section aria-labelledby="leadership-heading" className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            id="leadership-heading"
            align="center"
            label="Our team"
            title="A structured team powering academic excellence"
            sub="Every student engagement is backed by coordination, monitoring, compliance, and continuous improvement — ensuring consistency across cities and academic levels."
            className="mx-auto mb-10 max-w-3xl md:mb-12 [&_h2]:text-center [&_p]:mx-auto [&_p]:max-w-2xl [&_p]:text-center"
            subClassName="!mx-auto text-center text-[15px] leading-relaxed text-slate-600"
          />

          {/* Highlight: Founder */}
          <motion.div
            className="mb-6 flex flex-col items-start gap-4 rounded-3xl border border-blue-100/90 bg-gradient-to-r from-blue-50/90 to-indigo-50/90 p-6 shadow-[0_18px_44px_rgba(37,99,235,0.08)] ring-1 ring-blue-500/5 sm:flex-row sm:items-center sm:p-8"
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
              href={withBasePath("/career")}
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-blue-600 px-5 text-sm font-extrabold text-white shadow-md shadow-blue-500/30 transition hover:bg-blue-700"
            >
              Join our team <ArrowRightIcon />
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
          className="border-t border-blue-100/70 bg-gradient-to-b from-blue-50/40 to-white px-4 py-14 md:py-20"
        >
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              id="managing-heading"
              align="center"
              label="Managing team"
              title="Leadership & management"
              sub="Experienced professionals committed to building a responsible mentorship ecosystem — combining expertise in education, operations, academic counselling, and technology."
              className="mx-auto mb-10 max-w-3xl md:mb-12 [&_h2]:text-center [&_p]:mx-auto [&_p]:max-w-2xl [&_p]:text-center"
              subClassName="!mx-auto text-center text-[15px] leading-relaxed text-slate-600"
            />
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

      <LearnAnywhereHelpSection />
    </div>
  );
}
