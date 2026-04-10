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
  LiveSessionStatIcon,
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
  { value: 50_000, suffix: "+", label: "Active Students", icon: UsersIcon },
  { value: 500_000, suffix: "+", label: "Verified Tutors", icon: ChalkboardStatIcon },
  { value: 5_000_000, suffix: "+", label: "Sessions Delivered", icon: LiveSessionStatIcon },
  { value: 98, suffix: "%", label: "Satisfaction Rate", icon: ShieldIcon },
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

const FOUR_PILLARS = [
  {
    emoji: "🎯",
    title: "Skilled Mentorship",
    desc: "Access India's largest pool of background-verified tutors — each screened for subject expertise, communication, and teaching quality.",
    color: "from-blue-50 to-blue-100/60",
    accent: "text-blue-600",
  },
  {
    emoji: "📊",
    title: "Data-Driven Insights",
    desc: "Parents and students get weekly progress reports, attendance logs, and performance analytics through our dedicated ERP dashboard.",
    color: "from-indigo-50 to-indigo-100/60",
    accent: "text-indigo-600",
  },
  {
    emoji: "📚",
    title: "Adaptive Curriculum",
    desc: "Sessions are tailored to each student's pace, learning gaps, and school syllabus — keeping them ahead with structured revision cycles.",
    color: "from-violet-50 to-violet-100/60",
    accent: "text-violet-600",
  },
  {
    emoji: "📈",
    title: "Assessment & Growth",
    desc: "Regular chapter tests, topic check-ins, and exam-readiness drills ensure continuous academic growth and mark improvement.",
    color: "from-emerald-50 to-emerald-100/60",
    accent: "text-emerald-600",
  },
];

const ENROLLMENT_STEPS = [
  {
    step: "01",
    icon: "📝",
    title: "Register Online",
    desc: "Fill out the quick enrollment form with your academic requirements, preferred subject, and location. Takes just 5 minutes.",
  },
  {
    step: "02",
    icon: "🔍",
    title: "Get Matched with Tutors",
    desc: "Our counsellors shortlist verified tutors best suited to your subject, level, learning style, and scheduling preferences.",
  },
  {
    step: "03",
    icon: "🎯",
    title: "Attend a Free Demo Session",
    desc: "Experience the teaching style first-hand. Attend a free demo class, share feedback, and confirm your preferred tutor.",
  },
  {
    step: "04",
    icon: "💳",
    title: "Choose Your Learning Plan",
    desc: "Pick from Gold, Diamond, or Platinum plans — available as half-yearly or annual contracts with flexible payment options.",
  },
  {
    step: "05",
    icon: "🚀",
    title: "Start Your Learning Journey",
    desc: "Begin structured, personalised sessions with continuous academic monitoring, homework support, and exam preparation.",
  },
];

const STUDENT_BENEFITS = [
  {
    icon: ShieldIcon,
    title: "100% Verified Tutors",
    desc: "Every tutor on our platform is background-checked, qualification-verified, and reviewed by our academic team before being listed.",
  },
  {
    icon: ChartIcon,
    title: "Progress Reports & Analytics",
    desc: "Parents receive detailed weekly reports on sessions attended, topics covered, homework completion, and assessment scores.",
  },
  {
    icon: CalendarIcon,
    title: "Flexible Scheduling",
    desc: "Morning, evening, or weekend slots — you choose when your sessions happen. Reschedule with 24-hour notice.",
  },
  {
    icon: HomeIcon,
    title: "Home & Online Options",
    desc: "Choose between comfortable home tuition visits or live online video sessions — based on what works best for you.",
  },
  {
    icon: MessageIcon,
    title: "Dedicated Support Team",
    desc: "A dedicated relationship manager handles tutor coordination, feedback loops, and any academic queries throughout your plan.",
  },
  {
    icon: ClockIcon,
    title: "Exam-Ready Prep",
    desc: "Structured revision schedules, mock tests, and last-mile preparation strategies built around your board or competitive exam calendar.",
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

const LEARNING_MODES = [
  {
    icon: HomeIcon,
    title: "Home Tuition",
    desc: "A verified tutor visits your home for personalised one-on-one sessions in a comfortable, familiar learning environment.",
    badge: "Most Popular",
    badgeColor: "bg-amber-400 text-neutral-900",
  },
  {
    icon: GlobeIcon,
    title: "Online Classes",
    desc: "Live video sessions via Zoom, Google Meet, or our platform — learn from anywhere with full flexibility and convenience.",
    badge: "Flexible",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    icon: UsersIcon,
    title: "Group Tuition",
    desc: "Study alongside 3–5 peers at the same level for collaborative learning with reduced cost per session.",
    badge: "Affordable",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    icon: ChalkboardStatIcon,
    title: "Hybrid Learning",
    desc: "Combine home visits during the week with online sessions on weekends — designed for busy school schedules.",
    badge: "Best of Both",
    badgeColor: "bg-blue-100 text-blue-700",
  },
];

const SUBSCRIPTION_PLANS = [
  {
    tier: "Gold",
    icon: "🥇",
    sessions: "8 sessions/month",
    hours: "1 hr per session",
    desc: "Ideal for students needing focused support in 1–2 subjects",
    perks: ["1 subject, 1 tutor", "Free demo included", "Weekly progress report", "WhatsApp support"],
    highlight: false,
    color: "border-amber-200 bg-gradient-to-br from-amber-50 to-white",
    accentColor: "text-amber-700",
    buttonClass: "border border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100",
  },
  {
    tier: "Diamond",
    icon: "💎",
    sessions: "16 sessions/month",
    hours: "1.5 hr per session",
    desc: "Best for students targeting top scores in multiple subjects",
    perks: ["Up to 3 subjects", "Free demo included", "Bi-weekly assessments", "Dedicated counsellor", "Monthly parent meet"],
    highlight: true,
    color: "bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 text-white",
    accentColor: "text-[#FFD600]",
    buttonClass: "bg-[#FFD600] text-neutral-900 hover:bg-[#ffcc00]",
  },
  {
    tier: "Platinum",
    icon: "🏆",
    sessions: "24+ sessions/month",
    hours: "2 hr per session",
    desc: "Complete academic support for board exam & competitive exam aspirants",
    perks: ["Unlimited subjects", "Free demo included", "Weekly tests & reports", "Exam strategy sessions", "Priority tutor matching", "VIP parent dashboard"],
    highlight: false,
    color: "border-slate-200 bg-gradient-to-br from-slate-50 to-white",
    accentColor: "text-blue-700",
    buttonClass: "bg-blue-600 text-white hover:bg-blue-700",
  },
];

const TESTIMONIALS = [
  {
    name: "Ananya Verma",
    grade: "Class 12 · Science · Delhi",
    rating: 5,
    text: "My Physics marks jumped from 54% to 87% in one term. The tutor explained every concept from scratch without making me feel behind. Indian Mentors matched me with exactly the right person.",
    initials: "AV",
  },
  {
    name: "Rohan Mehta",
    grade: "Class 10 · Mathematics · Mumbai",
    rating: 5,
    text: "I was struggling with algebra and geometry for months. After just 6 weeks of sessions, I actually started enjoying Maths. The homework support and weekly tests made a huge difference.",
    initials: "RM",
  },
  {
    name: "Ishaan Pillai",
    grade: "JEE Aspirant · Bengaluru",
    rating: 5,
    text: "The JEE preparation sessions were incredibly structured. My mentor gave me a proper study plan, timed practice sets, and exam strategies. I improved my mock rank by 8,000 positions.",
    initials: "IP",
  },
  {
    name: "Priya Nair",
    grade: "Class 8 · English & Hindi · Chennai",
    rating: 5,
    text: "My daughter was too shy to speak in class. After three months with her Indian Mentors tutor, she gives presentations confidently. The personalised attention made all the difference.",
    initials: "PN",
  },
  {
    name: "Arjun Singh",
    grade: "Class 11 · Commerce · Pune",
    rating: 5,
    text: "Accounts and Economics made no sense to me until I got my tutor through Indian Mentors. The weekly progress reports also helped my parents stay informed without extra calls.",
    initials: "AS",
  },
  {
    name: "Meera Kapoor",
    grade: "NEET Aspirant · Hyderabad",
    rating: 5,
    text: "NEET preparation is intense, but my biology and chemistry tutor broke it down into manageable chunks. The adaptive curriculum approach is genuinely different — no generic study plans.",
    initials: "MK",
  },
];

/* ─────────────────────────── page ─────────────────────────── */

export default function StudentPage() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className={`${poppins.className} min-h-screen bg-slate-50 text-slate-900`}>
      <Navbar onPrimaryCTA={() => {}} />

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 pb-24 pt-28 md:pb-20 md:pt-32">
        {/* Dot pattern decoration */}
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
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-[300px] w-[300px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255,214,0,0.6) 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
            maskImage: "radial-gradient(circle at center, black 35%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 35%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left: copy */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/95 shadow-sm backdrop-blur-sm md:text-xs">
                Indian Mentors · Student Enrolment
              </p>
              <h1 className="text-3xl font-extrabold leading-[1.12] text-white drop-shadow-sm sm:text-5xl lg:text-[3.25rem]">
                <span className="text-[#FFD600]">Learning</span> Meets{" "}
                <span className="relative inline-block">
                  Mentorship
                  <svg
                    className="pointer-events-none absolute left-0 w-full text-[#FFD600]"
                    style={{ bottom: "-8px" }}
                    viewBox="0 0 440 12"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path d="M4 8C120 2 320 2 436 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-base font-semibold leading-relaxed text-white/85 sm:text-lg">
                Personalised Learning Designed for Academic Excellence. India&apos;s trusted
                platform for verified home &amp; online tutors — matched to your exact needs.
              </p>

              {/* Trust pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Verified Tutors", "Adaptive Curriculum", "Weekly Progress Reports", "Free Demo"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FFD600] px-6 text-sm font-bold text-neutral-900 shadow-lg shadow-amber-600/25 transition hover:bg-[#ffcc00] hover:shadow-xl hover:shadow-amber-600/20"
                >
                  Book Your Free Demo Today!
                </Link>
                <Link
                  href="/#tutors"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Explore Tutors
                </Link>
              </div>
            </motion.div>

            {/* Right: feature grid (from presentation pillars) */}
            <motion.div
              initial={reduced ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="relative mx-auto grid max-w-sm grid-cols-2 gap-3">
                {/* Centre logo block */}
                <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/20 shadow-xl">
                    <span className="text-3xl">🎓</span>
                    <span className="mt-1 text-[9px] font-extrabold uppercase tracking-widest text-white/80">IM</span>
                  </div>
                </div>
                {[
                  { emoji: "🎯", label: "Skilled Mentorship", pos: "rounded-tl-3xl" },
                  { emoji: "📊", label: "Data-Driven Insights", pos: "rounded-tr-3xl" },
                  { emoji: "📚", label: "Adaptive Curriculum", pos: "rounded-bl-3xl" },
                  { emoji: "📈", label: "Assessment & Growth", pos: "rounded-br-3xl" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex flex-col items-center justify-center gap-2 rounded-2xl ${item.pos} border border-white/10 bg-white/10 p-6 text-center backdrop-blur-sm`}
                  >
                    <span className="text-3xl">{item.emoji}</span>
                    <p className="text-xs font-bold text-white/90 leading-tight">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Overview floating card ── */}
      <div className="relative z-20 mx-auto mt-[-28px] max-w-[1200px] px-4 sm:mt-[-32px]">
        <div className="rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.1)] backdrop-blur-sm md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-600/90">
                Why learn with us
              </p>
              <h2 className="mt-3 text-xl font-extrabold tracking-tight text-[#1a2744] sm:text-2xl">
                Personalised learning at every stage
              </h2>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-slate-600">
                Indian Mentors isn&apos;t just a tutor directory — it&apos;s a complete academic
                ecosystem. From expert tutor matching to ERP-tracked progress reports,
                we ensure every student gets the focused attention they deserve.
              </p>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-600/90">
                What students get
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Background-verified tutors matched to your subject and level",
                  "Free demo session before committing to any plan",
                  "ERP dashboard with attendance, homework & performance data",
                  "Dedicated counsellor for ongoing support and guidance",
                  "Flexible home tuition or online session formats",
                ].map((c) => (
                  <CheckItem key={c} text={c} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4 Pillars ── */}
      <section aria-labelledby="pillars-heading" className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>Our approach</SectionLabel>
            <SectionHeading>The 4 Pillars of Indian Mentors Learning</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Every student who joins Indian Mentors benefits from our four-pillar academic
              framework — designed for consistent improvement and lasting academic confidence.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {FOUR_PILLARS.map((pillar, i) => (
              <motion.div key={pillar.title} {...(reduced ? {} : fadeUp(i * 0.09))}>
                <div className={`group flex h-full flex-col rounded-3xl bg-gradient-to-br ${pillar.color} border border-slate-200/70 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]`}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-3xl shadow-sm">
                    {pillar.emoji}
                  </span>
                  <h3 className={`mt-4 text-sm font-extrabold ${pillar.accent} sm:text-base`}>{pillar.title}</h3>
                  <p className="mt-2 flex-1 text-sm font-semibold leading-relaxed text-slate-600">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <motion.section
        aria-labelledby="stats-heading"
        className="border-y border-zinc-200/90 bg-zinc-50/80 py-16"
        {...(reduced ? {} : fadeUp())}
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="mb-10 text-center">
            <SectionLabel>Our scale</SectionLabel>
            <SectionHeading>Trusted by Students & Parents Across India</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Tens of thousands of students have improved their grades and built lasting
              academic confidence through Indian Mentors.
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
              { icon: "🏆", text: "500+ Awards & Recognitions" },
              { icon: "⭐", text: "4.8/5 Average Student Rating" },
              { icon: "🌍", text: "Pan-India Coverage" },
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

      {/* ── Enrollment Steps ── */}
      <section
        aria-labelledby="enrollment-heading"
        className="py-16"
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>How it works</SectionLabel>
            <SectionHeading>Start Learning in 5 Simple Steps</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              From registration to your first session — we make getting started easy,
              transparent, and completely risk-free with a free demo.
            </p>
          </motion.div>

          {/* Desktop timeline */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-[52px] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />
              <div className="grid grid-cols-5 gap-4">
                {ENROLLMENT_STEPS.map((s, i) => (
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
            {ENROLLMENT_STEPS.map((s, i) => (
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
              Register Now &amp; Get Matched <ArrowRightIcon />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Student Benefits ── */}
      <section
        aria-labelledby="benefits-heading"
        className="border-y border-zinc-200/90 bg-zinc-50/80 py-16"
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>Student benefits</SectionLabel>
            <SectionHeading>Why Students Choose Indian Mentors</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              We go beyond just finding a tutor — we build a full support system for
              students to thrive academically with consistency and confidence.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STUDENT_BENEFITS.map((b, i) => (
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
                <h3 className="text-lg font-extrabold text-[#1a2744]">Our Student Guarantee</h3>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  We guarantee a tutor match within 48 hours of registration, a 100% free demo
                  session, and a full replacement if you&apos;re not satisfied with your tutor within
                  the first two weeks — no questions asked.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex h-11 shrink-0 items-center gap-2 rounded-2xl bg-blue-600 px-5 text-sm font-extrabold text-white shadow-md shadow-blue-500/30 transition hover:bg-blue-700"
              >
                Get Started <ArrowRightIcon />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Academic Coverage ── */}
      <section aria-labelledby="academic-coverage-heading" className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>Academic coverage</SectionLabel>
            <SectionHeading>Subjects &amp; Levels We Cover</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              From primary school foundations to competitive exam coaching — we cover every
              academic stage with expert tutors matched to your curriculum.
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

      {/* ── Learning Modes ── */}
      <section
        aria-labelledby="learning-modes-heading"
        className="border-y border-zinc-200/90 bg-zinc-50/80 py-16"
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>Learning modes</SectionLabel>
            <SectionHeading>Choose How You Learn</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              We adapt to your schedule and preferences — whether you prefer face-to-face
              at home, flexible online sessions, or group learning with peers.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {LEARNING_MODES.map((mode, i) => (
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

      {/* ── Subscription Plans ── */}
      <section aria-labelledby="plans-heading" className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>Learning plans</SectionLabel>
            <SectionHeading>Choose the Right Plan for Your Goals</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Transparent, flexible subscription plans — available as half-yearly or
              annual contracts with upfront or instalment payment options.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {SUBSCRIPTION_PLANS.map((plan, i) => (
              <motion.div key={plan.tier} {...(reduced ? {} : fadeUp(i * 0.1))}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)] sm:p-8 ${
                    plan.highlight
                      ? plan.color
                      : `border ${plan.color}`
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute right-5 top-5 rounded-full bg-[#FFD600] px-3 py-0.5 text-[10px] font-extrabold text-neutral-900">
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{plan.icon}</span>
                    <div>
                      <p className={`text-xs font-extrabold uppercase tracking-[0.18em] ${plan.highlight ? "text-white/70" : plan.accentColor}`}>
                        {plan.tier} Plan
                      </p>
                      <p className={`text-lg font-extrabold ${plan.highlight ? "text-[#FFD600]" : "text-[#1a2744]"}`}>
                        {plan.sessions}
                      </p>
                    </div>
                  </div>
                  <p className={`mt-2 text-sm font-semibold ${plan.highlight ? "text-white/70" : "text-slate-500"}`}>
                    {plan.hours} &bull; {plan.desc}
                  </p>

                  <ul className="mt-5 flex-1 space-y-2.5">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5">
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold ${
                            plan.highlight ? "bg-[#FFD600] text-neutral-900" : "bg-blue-600 text-white"
                          }`}
                        >
                          ✓
                        </span>
                        <span className={`text-sm font-semibold ${plan.highlight ? "text-white/90" : "text-slate-700"}`}>
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-2xl text-sm font-extrabold transition ${plan.buttonClass}`}
                  >
                    Book Free Demo <ArrowRightIcon />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="mt-6 text-center text-xs font-semibold text-slate-400"
            {...(reduced ? {} : fadeUp(0.4))}
          >
            * All plans include a free demo session. Pricing shared post-consultation based on location, subject, and level.
          </motion.p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        aria-labelledby="testimonials-heading"
        className="border-y border-zinc-200/90 bg-zinc-50/80 py-16"
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-12 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>Student stories</SectionLabel>
            <SectionHeading>What Students &amp; Parents Say</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Real results from real students — improved marks, stronger concepts, and
              renewed confidence in the classroom and beyond.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={t.name} {...(reduced ? {} : fadeUp(i * 0.07))}>
                <article className="flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)]">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <span key={si} className="text-sm text-amber-400">★</span>
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
                      <p className="text-xs font-semibold text-slate-500">{t.grade}</p>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ strip ── */}
      <section aria-labelledby="faq-heading" className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <motion.div className="mb-10 text-center" {...(reduced ? {} : fadeUp())}>
            <SectionLabel>Common questions</SectionLabel>
            <SectionHeading>Frequently Asked by Parents &amp; Students</SectionHeading>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-3">
            {[
              {
                q: "How quickly can I get a tutor?",
                a: "We typically match students with a verified tutor within 24–48 hours of registration. In most metro cities, it happens the same day.",
              },
              {
                q: "Is the demo session really free?",
                a: "Yes, completely free — no credit card or commitment needed. You experience the session, share feedback, and only proceed if you&apos;re happy with the tutor.",
              },
              {
                q: "What if I&apos;m not satisfied with my tutor?",
                a: "We offer a free tutor replacement within the first two weeks. Our counsellors handle the re-matching process so there&apos;s no disruption to learning.",
              },
              {
                q: "Do you cover online tuition outside India?",
                a: "Yes! Our online tuition is available globally. NRI families and international students can book verified Indian tutors for online sessions.",
              },
              {
                q: "Which boards and curricula do you support?",
                a: "We cover CBSE, ICSE, state boards, IB, and IGCSE — across all grades from Class 1 to 12, plus undergraduate and competitive exam prep.",
              },
            ].map((faq, i) => (
              <motion.div key={faq.q} {...(reduced ? {} : fadeUp(i * 0.06))}>
                <details className="group rounded-2xl border border-slate-200/70 bg-white/95 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-sm font-extrabold text-[#1a2744] marker:hidden [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-sm font-semibold leading-relaxed text-slate-600">
                    {faq.a}
                  </p>
                </details>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-8 text-center" {...(reduced ? {} : fadeUp(0.4))}>
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 underline-offset-2 hover:underline"
            >
              View all FAQs <ArrowRightIcon />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <motion.section className="pb-16" {...(reduced ? {} : fadeUp())}>
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
            <div
              className="pointer-events-none absolute -bottom-8 right-0 h-[240px] w-[240px] rounded-full opacity-15"
              style={{
                background: "radial-gradient(circle, rgba(255,214,0,0.7) 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px",
                maskImage: "radial-gradient(circle at center, black 35%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 35%, transparent 70%)",
              }}
              aria-hidden
            />
            <span className="relative z-10 text-4xl">🎓</span>
            <p className="relative z-10 mt-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
              Ready to excel?
            </p>
            <h2 className="relative z-10 mt-3 text-2xl font-extrabold text-[#FFD600] sm:text-4xl">
              Book Your Free Demo Today!
            </h2>
            <p className="relative z-10 mx-auto mt-4 max-w-xl text-base font-semibold leading-relaxed text-white/85">
              Join 50,000+ students already learning with verified Indian Mentors tutors.
              Get matched in 48 hours. First session is on us.
            </p>
            <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#FFD600] px-7 text-sm font-bold text-neutral-900 shadow-lg shadow-amber-600/30 transition hover:bg-[#ffcc00] hover:shadow-xl"
              >
                Book Free Demo
              </Link>
              <Link
                href="/#tutors"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Browse Tutors
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
