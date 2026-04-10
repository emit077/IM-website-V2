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
  HomeIcon,
  GlobeIcon,
  ChartIcon,
  MessageIcon,
  CalendarIcon,
} from "@/components/shared/SvgIcons";

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

/* ─────────────────────────── sub-components ────────────────────── */

const STATS = [
  { value: 500_000, suffix: "+", label: "Registered Tutors", icon: ChalkboardStatIcon },
  { value: 50_000, suffix: "+", label: "Active Students", icon: UsersIcon },
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
      className="flex flex-col items-center rounded-3xl border border-slate-200/70 bg-white/95 p-6 text-center shadow-[0_8px_30px_rgba(15,23,42,0.07)] backdrop-blur-sm"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/30 [&_svg]:h-5 [&_svg]:w-5">
        <Icon />
      </div>
      <p className="text-3xl font-extrabold tabular-nums tracking-tight text-[#1a2744] sm:text-4xl">
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
    <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#1a2744] sm:text-3xl lg:text-4xl">
      {children}
    </h2>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckMiniIcon />
      <span className="text-sm font-semibold leading-relaxed text-slate-700">{text}</span>
    </li>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

/* ─────────────────────────── page data ─────────────────────────── */

const WHO_CAN_JOIN = [
  {
    emoji: "🎓",
    title: "Graduate & Postgraduate Educators",
    desc: "Individuals with strong subject expertise in any academic discipline — Science, Mathematics, Commerce, Humanities, and more.",
  },
  {
    emoji: "🏫",
    title: "Experienced School & College Teachers",
    desc: "Certified teachers with school or college teaching experience seeking flexible part-time or full-time mentoring opportunities.",
  },
  {
    emoji: "🧑‍💻",
    title: "Subject-Matter Experts",
    desc: "Professionals from industry or academia with deep knowledge in niche areas like Coding, CA, UPSC, IELTS, or competitive exams.",
  },
  {
    emoji: "📚",
    title: "Online & Home Tutors",
    desc: "Independent tutors already running personal classes who want a verified platform for consistent student discovery and structured workflow.",
  },
  {
    emoji: "🌍",
    title: "NRI & International Educators",
    desc: "Indian educators abroad or international tutors seeking to connect with India-based students through a reliable academic network.",
  },
  {
    emoji: "🧑‍🎓",
    title: "Final Year & Research Students",
    desc: "Bright final-year, master's, or PhD students who can mentor junior learners in their area of study.",
  },
];

const ACADEMIC_COVERAGE = [
  { label: "Primary & Middle School", items: ["English", "Mathematics", "EVS", "Hindi", "General Science"] },
  { label: "High School (9–10)", items: ["Physics", "Chemistry", "Biology", "Maths", "Social Science", "English"] },
  { label: "Senior Secondary (11–12)", items: ["PCM / PCB", "Commerce & Accounts", "Economics", "History & Political Science"] },
  { label: "Competitive Exams", items: ["JEE / NEET", "UPSC / SSC", "CAT / MBA", "IELTS / TOEFL", "NDA / CDS"] },
  { label: "Languages", items: ["English Communication", "Hindi", "Sanskrit", "French", "German", "Spanish"] },
  { label: "Skill & Coding", items: ["Python / Java", "Web Development", "AI & ML Basics", "Data Science", "MS Office"] },
];

const TEACHING_MODES = [
  {
    icon: HomeIcon,
    title: "Home Tuition",
    desc: "Visit students at their home for face-to-face personalised sessions. Build rapport and deliver focused one-on-one attention.",
    badge: "Most Popular",
    badgeColor: "bg-amber-400 text-neutral-900",
  },
  {
    icon: GlobeIcon,
    title: "Online Classes",
    desc: "Conduct live video sessions from anywhere in India or abroad using your preferred platform — Zoom, Google Meet, or our ERP tools.",
    badge: "Flexible",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    icon: ChalkboardStatIcon,
    title: "Coaching Institute Support",
    desc: "Teach as a part-time or full-time faculty at partner coaching institutes integrated with Indian Mentors.",
    badge: "Institutional",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: UsersIcon,
    title: "Group Tuition",
    desc: "Conduct small group sessions for 3–8 students to maximise earnings per session while maintaining learning quality.",
    badge: "Earn More",
    badgeColor: "bg-purple-100 text-purple-700",
  },
];

const HIRING_STEPS = [
  {
    step: "01",
    title: "Submit Application",
    desc: "Fill out our online form with your subject expertise, availability, and teaching experience. Takes just 5 minutes.",
    icon: "📝",
  },
  {
    step: "02",
    title: "Profile Verification",
    desc: "Our recruiter team verifies your qualifications, conducts a background check, and evaluates your subject proficiency.",
    icon: "🔍",
  },
  {
    step: "03",
    title: "Demo & Orientation",
    desc: "Attend a short demo session and orientation to understand our platform workflows, teaching standards, and ERP tools.",
    icon: "🎯",
  },
  {
    step: "04",
    title: "Student Matching",
    desc: "We match you with students who align with your expertise, preferred timing, and teaching location or online availability.",
    icon: "🤝",
  },
  {
    step: "05",
    title: "Start Teaching",
    desc: "Begin your verified teaching journey with structured support, attendance tracking, and performance monitoring.",
    icon: "🚀",
  },
];

const TRUST_BENEFITS = [
  {
    icon: ShieldIcon,
    title: "Verified & Trusted Platform",
    desc: "All tutors are background-verified. Students and parents trust the Indian Mentors quality seal, giving you credibility instantly.",
  },
  {
    icon: UsersIcon,
    title: "Consistent Student Flow",
    desc: "Stop searching for students. Our admission counsellors match you with verified students based on your expertise and location.",
  },
  {
    icon: ChartIcon,
    title: "Performance Dashboard",
    desc: "Access your personalised ERP dashboard to track sessions, attendance, homework submissions, and student performance.",
  },
  {
    icon: CalendarIcon,
    title: "Flexible Scheduling",
    desc: "Choose your own hours. Teach part-time or full-time. Set your available slots and we match students accordingly.",
  },
  {
    icon: MessageIcon,
    title: "Dedicated Support Team",
    desc: "Our team handles parent communication, payment follow-ups, and escalations — so you can focus purely on teaching.",
  },
  {
    icon: ClockIcon,
    title: "Timely Payments",
    desc: "Get paid on time, every time. Transparent billing and structured payment cycles with clear fee split policies.",
  },
];

const EARNINGS_TIERS = [
  {
    tier: "Starter",
    range: "₹8,000 – ₹20,000",
    period: "/ month",
    desc: "Part-time tutors with 3–6 students",
    perks: ["Flexible 2–3 hr/day", "Online or home tuition", "Onboarding support"],
    highlight: false,
  },
  {
    tier: "Professional",
    range: "₹25,000 – ₹60,000",
    period: "/ month",
    desc: "Full-time tutors with 8–15 students",
    perks: ["Priority student matching", "Group class earnings", "Performance bonuses", "ERP access"],
    highlight: true,
  },
  {
    tier: "Expert",
    range: "₹60,000+",
    period: "/ month",
    desc: "Senior tutors, competitive exam specialists",
    perks: ["Premium fee structure", "Institute tie-ups", "Referral incentives", "Top listing visibility"],
    highlight: false,
  },
];

/* ─────────────────────────── page ─────────────────────────── */

export default function TutorPage() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className={`${poppins.className} min-h-screen bg-slate-50 text-slate-900`}>
      <Navbar onPrimaryCTA={() => {}} />

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 pb-24 pt-28 md:pb-20 md:pt-32">
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
              Indian Mentors · Tutor Registration
            </p>
            <h1 className="text-3xl font-extrabold leading-[1.12] text-[#FFD600] drop-shadow-sm sm:text-5xl lg:text-[3.25rem]">
              Teach. Earn. Grow.{" "}
              <span className="relative inline-block whitespace-nowrap text-white">
                Become a Verified Tutor
                <svg
                  className="pointer-events-none absolute left-0 w-full text-white"
                  style={{ bottom: "-8px" }}
                  viewBox="0 0 440 12"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path d="M4 8C120 2 320 2 436 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-white/85 sm:text-lg">
              Join India&apos;s fastest-growing mentorship network. Get verified, get matched
              with students, and build a professional teaching career with structured
              support, timely payments, and a dedicated team behind you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FFD600] px-6 text-sm font-bold text-neutral-900 shadow-lg shadow-amber-600/25 transition hover:bg-[#ffcc00] hover:shadow-xl hover:shadow-amber-600/20"
              >
                Apply as a Tutor
              </Link>
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Book a Free Demo
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
                Why teach with us
              </p>
              <h2 className="mt-3 text-xl font-extrabold tracking-tight text-[#1a2744] sm:text-2xl">
                A platform built for serious educators
              </h2>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-slate-600">
                Indian Mentors is not just a tutor directory — it&apos;s a full ecosystem
                designed to help you grow as an educator. From verified student matching
                to ERP-powered performance tracking, we handle the operations so you
                can focus entirely on teaching.
              </p>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-600/90">
                What we offer tutors
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Verified, pre-screened students matched to your profile",
                  "Transparent fee structure with timely, consistent payments",
                  "ERP dashboard for session tracking and performance reports",
                  "Dedicated support team handling parent communication",
                  "Professional certification and recognition programmes",
                ].map((c) => (
                  <CheckItem key={c} text={c} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Impact Stats ── */}
      <motion.section
        aria-labelledby="stats-heading"
        className="mt-16 border-y border-zinc-200/90 bg-zinc-50/80 py-16"
        {...(reduced ? {} : fadeUp())}
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="mb-10 text-center">
            <SectionLabel>Our scale</SectionLabel>
            <SectionHeading>Trusted by Tutors & Students Across India</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Hundreds of thousands of educators have built successful teaching careers with Indian Mentors.
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
              { icon: "🌍", text: "Pan-India Presence" },
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

      {/* ── Who Can Join ── */}
      <section aria-labelledby="who-can-join-heading" className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>Eligibility</SectionLabel>
            <SectionHeading>Who Can Apply as a Tutor?</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              We welcome educators from all backgrounds — whether you&apos;re a seasoned
              teacher or just starting out. If you have knowledge to share, we have a
              platform for you.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHO_CAN_JOIN.map((item, i) => (
              <motion.div key={item.title} {...(reduced ? {} : fadeUp(i * 0.07))}>
                <div className="group flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                    {item.emoji}
                  </span>
                  <h3 className="mt-4 text-sm font-extrabold text-[#1a2744] sm:text-base">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Academic Coverage ── */}
      <section
        aria-labelledby="academic-coverage-heading"
        className="border-y border-zinc-200/90 bg-zinc-50/80 py-16"
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>Academic coverage</SectionLabel>
            <SectionHeading>Subjects & Levels We Cover</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              From primary school basics to advanced competitive exam preparation — teach
              the subjects you love at the level that matches your expertise.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ACADEMIC_COVERAGE.map((cat, i) => (
              <motion.div key={cat.label} {...(reduced ? {} : fadeUp(i * 0.07))}>
                <div className="rounded-3xl border border-slate-200/70 bg-white/95 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.07)]">
                  <h3 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-blue-600">{cat.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Teaching Modes ── */}
      <section aria-labelledby="teaching-modes-heading" className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>Teaching modes</SectionLabel>
            <SectionHeading>Choose How You Teach</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Flexible engagement models to match your lifestyle, location, and earnings goal.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {TEACHING_MODES.map((mode, i) => (
              <motion.div key={mode.title} {...(reduced ? {} : fadeUp(i * 0.07))}>
                <div className="group relative flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
                  <span className={`absolute right-4 top-4 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold ${mode.badgeColor}`}>
                    {mode.badge}
                  </span>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/30 [&_svg]:h-5 [&_svg]:w-5">
                    <mode.icon />
                  </div>
                  <h3 className="pr-16 text-sm font-extrabold text-[#1a2744] sm:text-base">{mode.title}</h3>
                  <p className="mt-2 flex-1 text-sm font-semibold leading-relaxed text-slate-600">{mode.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tutor Hiring Process ── */}
      <section
        aria-labelledby="hiring-process-heading"
        className="border-y border-zinc-200/90 bg-zinc-50/80 py-16"
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>How it works</SectionLabel>
            <SectionHeading>Tutor Hiring Process</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              A transparent, step-by-step process to get you verified and teaching in as
              little as 3–5 working days.
            </p>
          </motion.div>

          {/* Desktop timeline */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-[52px] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />
              <div className="grid grid-cols-5 gap-4">
                {HIRING_STEPS.map((s, i) => (
                  <motion.div key={s.step} {...(reduced ? {} : fadeUp(i * 0.1))} className="flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-[104px] w-[104px] flex-col items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                      <span className="text-2xl">{s.icon}</span>
                      <span className="mt-1 text-xs font-extrabold">{s.step}</span>
                    </div>
                    <h3 className="mt-5 text-sm font-extrabold text-[#1a2744]">{s.title}</h3>
                    <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-500">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile steps */}
          <div className="space-y-4 md:hidden">
            {HIRING_STEPS.map((s, i) => (
              <motion.div key={s.step} {...(reduced ? {} : fadeUp(i * 0.08))}>
                <div className="flex gap-4 rounded-3xl border border-slate-200/70 bg-white/95 p-5 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/30">
                    <span className="text-xl">{s.icon}</span>
                    <span className="text-[10px] font-extrabold">{s.step}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-extrabold text-[#1a2744]">{s.title}</h3>
                    <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-500">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-10 text-center" {...(reduced ? {} : fadeUp(0.5))}>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-blue-600 px-8 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700 hover:shadow-xl"
            >
              Start Your Application <ArrowRightIcon />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Trust & Benefits ── */}
      <section aria-labelledby="trust-benefits-heading" className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>Trust & benefits</SectionLabel>
            <SectionHeading>Why Tutors Choose Indian Mentors</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              We go beyond just providing students — we build a professional teaching
              environment where you can truly grow.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST_BENEFITS.map((b, i) => (
              <motion.div key={b.title} {...(reduced ? {} : fadeUp(i * 0.07))}>
                <div className="group flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/30 [&_svg]:h-5 [&_svg]:w-5">
                    <b.icon />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#1a2744] sm:text-base">{b.title}</h3>
                  <p className="mt-2 flex-1 text-sm font-semibold leading-relaxed text-slate-600">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Guarantee strip */}
          <motion.div
            className="mt-8 rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-6 sm:p-8"
            {...(reduced ? {} : fadeUp(0.3))}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30 text-2xl">
                🛡️
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-extrabold text-[#1a2744]">Our Tutor Guarantee</h3>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  We guarantee timely student matching within 7 working days of verification, transparent
                  fee communication, and a dedicated point of contact for all your queries.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex h-11 shrink-0 items-center gap-2 rounded-2xl bg-blue-600 px-5 text-sm font-extrabold text-white shadow-md shadow-blue-500/30 transition hover:bg-blue-700"
              >
                Join Now <ArrowRightIcon />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Earnings & Premium ── */}
      <section
        aria-labelledby="earnings-heading"
        className="border-y border-zinc-200/90 bg-zinc-50/80 py-16"
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>Earnings potential</SectionLabel>
            <SectionHeading>What You Can Earn as a Tutor</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Earnings scale with your experience, commitment, and number of students.
              Here&apos;s what tutors at different levels typically earn per month.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {EARNINGS_TIERS.map((tier, i) => (
              <motion.div key={tier.tier} {...(reduced ? {} : fadeUp(i * 0.1))}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)] sm:p-8 ${
                    tier.highlight
                      ? "bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 text-white shadow-[0_20px_50px_rgba(37,99,235,0.25)]"
                      : "border border-slate-200/70 bg-white/95"
                  }`}
                >
                  {tier.highlight && (
                    <span className="absolute right-5 top-5 rounded-full bg-[#FFD600] px-3 py-0.5 text-[10px] font-extrabold text-neutral-900">
                      Most Common
                    </span>
                  )}
                  <p
                    className={`text-xs font-extrabold uppercase tracking-[0.18em] ${
                      tier.highlight ? "text-white/70" : "text-blue-600/90"
                    }`}
                  >
                    {tier.tier}
                  </p>
                  <p
                    className={`mt-2 text-3xl font-extrabold tabular-nums tracking-tight ${
                      tier.highlight ? "text-[#FFD600]" : "text-[#1a2744]"
                    }`}
                  >
                    {tier.range}
                    <span className={`text-sm font-semibold ${tier.highlight ? "text-white/60" : "text-slate-400"}`}>
                      {tier.period}
                    </span>
                  </p>
                  <p className={`mt-1 text-sm font-semibold ${tier.highlight ? "text-white/75" : "text-slate-500"}`}>
                    {tier.desc}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5">
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold ${
                            tier.highlight ? "bg-[#FFD600] text-neutral-900" : "bg-blue-600 text-white"
                          }`}
                        >
                          ✓
                        </span>
                        <span
                          className={`text-sm font-semibold ${
                            tier.highlight ? "text-white/90" : "text-slate-700"
                          }`}
                        >
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-2xl text-sm font-extrabold transition ${
                      tier.highlight
                        ? "bg-[#FFD600] text-neutral-900 hover:bg-[#ffcc00]"
                        : "border border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    Apply Now <ArrowRightIcon />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="mt-6 text-center text-xs font-semibold text-slate-400"
            {...(reduced ? {} : fadeUp(0.4))}
          >
            * Earnings vary based on subject, location, number of students, and session frequency. Figures are indicative.
          </motion.p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section aria-labelledby="testimonials-heading" className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>Tutor voices</SectionLabel>
            <SectionHeading>What Our Tutors Say</SectionHeading>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Priya Sharma",
                subject: "Mathematics · Delhi",
                rating: 5,
                text: "Indian Mentors gave me a consistent flow of students within a week of verification. The ERP dashboard makes it easy to track attendance and homework — I finally feel like a professional.",
                initials: "PS",
              },
              {
                name: "Rajesh Nair",
                subject: "Physics & Chemistry · Bengaluru",
                rating: 5,
                text: "I was skeptical at first, but the support team handled everything — from parent queries to payment follow-ups. I just focus on teaching and the results have been outstanding.",
                initials: "RN",
              },
              {
                name: "Ananya Patel",
                subject: "English Communication · Mumbai",
                rating: 5,
                text: "The online teaching setup is seamless. I teach from home, earn ₹40,000+ a month, and have a dedicated team solving any issues instantly. Highly recommend to any educator.",
                initials: "AP",
              },
            ].map((t, i) => (
              <motion.div key={t.name} {...(reduced ? {} : fadeUp(i * 0.08))}>
                <article className="flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)]">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <span key={si} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="flex-1 text-sm font-semibold leading-relaxed text-slate-700">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-xs font-extrabold text-white">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-[#1a2744]">{t.name}</p>
                      <p className="text-xs font-semibold text-slate-500">{t.subject}</p>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <motion.section
        className="pb-16"
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
              Ready to teach?
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#FFD600] sm:text-4xl">
              Join 5,00,000+ Tutors on Indian Mentors
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-semibold leading-relaxed text-white/85">
              Apply today, get verified in 3–5 days, and start teaching students
              who are already waiting for a tutor like you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#FFD600] px-7 text-sm font-bold text-neutral-900 shadow-lg shadow-amber-600/30 transition hover:bg-[#ffcc00] hover:shadow-xl"
              >
                Apply as a Tutor
              </Link>
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Book Free Demo
              </Link>
              <Link
                href="/about"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                About Indian Mentors
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
