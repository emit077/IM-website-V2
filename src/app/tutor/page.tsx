"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Atom,
  BadgeCheck,
  BookMarked,
  BookOpen,
  Brain,
  Code2,
  Crown,
  FileText,
  FlaskConical,
  Globe2,
  GraduationCap,
  Handshake,
  Headphones,
  Languages,
  LayoutDashboard,
  LayoutGrid,
  Library,
  Presentation,
  Quote,
  Rocket,
  School,
  ShieldCheck,
  Sparkles,
  Trophy,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { Navbar } from "@/app/home/Navbar";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { withBasePath } from "@/lib/withBasePath";
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
      className="flex flex-col items-center rounded-3xl border border-blue-100/90 bg-white/95 p-6 text-center shadow-[0_8px_30px_rgba(37,99,235,0.08)] ring-1 ring-blue-500/[0.06] backdrop-blur-sm"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-500/25 [&_svg]:h-5 [&_svg]:w-5">
        <Icon />
      </div>
      <p className="text-3xl font-extrabold tabular-nums tracking-tight text-blue-950 sm:text-4xl">
        {INR(shown)}
        <span className="text-blue-600">{suffix}</span>
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-900/45">
        {label}
      </p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 rounded-2xl border border-blue-100/80 bg-blue-50/50 px-4 py-3">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
        <CheckMiniIcon />
      </span>
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

const TUTOR_VALUE_STRIP: { title: string; sub: string; Icon: LucideIcon; iconBg: string; iconFg: string }[] = [
  {
    title: "Verified students",
    sub: "Pre-screened matches",
    Icon: BadgeCheck,
    iconBg: "from-emerald-500 to-teal-600",
    iconFg: "text-white",
  },
  {
    title: "On-time pay",
    sub: "Clear fee splits",
    Icon: Wallet,
    iconBg: "from-amber-500 to-orange-600",
    iconFg: "text-white",
  },
  {
    title: "ERP dashboard",
    sub: "Sessions & reports",
    Icon: LayoutDashboard,
    iconBg: "from-sky-500 to-blue-600",
    iconFg: "text-white",
  },
  {
    title: "Ops support",
    sub: "We handle parents",
    Icon: Headphones,
    iconBg: "from-violet-500 to-indigo-600",
    iconFg: "text-white",
  },
  {
    title: "Grow income",
    sub: "Home & online",
    Icon: TrendingUp,
    iconFg: "text-white",
    iconBg: "from-rose-500 to-pink-600",
  },
];

const WHO_CAN_JOIN: { title: string; desc: string; Icon: LucideIcon; glow: string; iconBg: string }[] = [
  {
    title: "Graduate & Postgraduate Educators",
    desc: "Strong subject expertise — Science, Mathematics, Commerce, Humanities, and more.",
    Icon: GraduationCap,
    glow: "from-sky-400/20 via-blue-300/15 to-indigo-400/20",
    iconBg: "from-sky-500 to-indigo-600",
  },
  {
    title: "School & College Teachers",
    desc: "Certified teachers seeking flexible part-time or full-time mentoring.",
    Icon: School,
    glow: "from-amber-300/25 via-orange-200/15 to-amber-400/20",
    iconBg: "from-amber-500 to-orange-600",
  },
  {
    title: "Subject-Matter Experts",
    desc: "Deep knowledge in Coding, CA, UPSC, IELTS, competitive exams, and niche domains.",
    Icon: Brain,
    glow: "from-violet-400/25 via-fuchsia-200/15 to-purple-400/20",
    iconBg: "from-violet-500 to-purple-600",
  },
  {
    title: "Online & Home Tutors",
    desc: "Independent tutors who want verified discovery and structured workflows.",
    Icon: LayoutGrid,
    glow: "from-cyan-400/20 via-teal-300/15 to-emerald-400/20",
    iconBg: "from-cyan-500 to-teal-600",
  },
  {
    title: "NRI & International Educators",
    desc: "Connect with India-based students through a reliable academic network.",
    Icon: Globe2,
    glow: "from-blue-400/20 via-indigo-300/15 to-blue-500/20",
    iconBg: "from-blue-500 to-indigo-700",
  },
  {
    title: "Final Year & Research Students",
    desc: "Mentor junior learners in your field of study with flexible hours.",
    Icon: BookMarked,
    glow: "from-rose-300/25 via-pink-200/15 to-rose-400/20",
    iconBg: "from-rose-500 to-pink-600",
  },
];

const ACADEMIC_COVERAGE: {
  label: string;
  items: string[];
  Icon: LucideIcon;
  accent: string;
  bar: string;
}[] = [
  {
    label: "Primary & Middle School",
    items: ["English", "Mathematics", "EVS", "Hindi", "General Science"],
    Icon: BookOpen,
    accent: "text-sky-700",
    bar: "from-sky-500 to-blue-500",
  },
  {
    label: "High School (9–10)",
    items: ["Physics", "Chemistry", "Biology", "Maths", "Social Science", "English"],
    Icon: Library,
    accent: "text-indigo-700",
    bar: "from-indigo-500 to-violet-500",
  },
  {
    label: "Senior Secondary (11–12)",
    items: ["PCM / PCB", "Commerce & Accounts", "Economics", "History & Political Science"],
    Icon: FlaskConical,
    accent: "text-violet-700",
    bar: "from-violet-500 to-purple-600",
  },
  {
    label: "Competitive Exams",
    items: ["JEE / NEET", "UPSC / SSC", "CAT / MBA", "IELTS / TOEFL", "NDA / CDS"],
    Icon: Trophy,
    accent: "text-amber-800",
    bar: "from-amber-500 to-orange-600",
  },
  {
    label: "Languages",
    items: ["English Communication", "Hindi", "Sanskrit", "French", "German", "Spanish"],
    Icon: Languages,
    accent: "text-teal-800",
    bar: "from-teal-500 to-emerald-600",
  },
  {
    label: "Skill & Coding",
    items: ["Python / Java", "Web Development", "AI & ML Basics", "Data Science", "MS Office"],
    Icon: Code2,
    accent: "text-slate-800",
    bar: "from-slate-600 to-slate-800",
  },
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

const HIRING_STEPS: {
  step: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
  iconBg: string;
}[] = [
  {
    step: "01",
    title: "Submit Application",
    desc: "Online form with subjects, availability, and experience — about 5 minutes.",
    Icon: FileText,
    iconBg: "bg-[#64B5F6]",
  },
  {
    step: "02",
    title: "Profile Verification",
    desc: "Qualifications, background check, and subject evaluation by our team.",
    Icon: UserCheck,
    iconBg: "bg-[#BA68C8]",
  },
  {
    step: "03",
    title: "Demo & Orientation",
    desc: "Short demo plus walkthrough of teaching standards and ERP tools.",
    Icon: Presentation,
    iconBg: "bg-[#FFB74D]",
  },
  {
    step: "04",
    title: "Student Matching",
    desc: "We align students with your expertise, timing, and location or online slots.",
    Icon: Handshake,
    iconBg: "bg-[#4DB6AC]",
  },
  {
    step: "05",
    title: "Start Teaching",
    desc: "Verified journey with attendance tracking and performance visibility.",
    Icon: Rocket,
    iconBg: "bg-[#9575CD]",
  },
];

const TRUST_BENEFITS: {
  icon: typeof ShieldIcon;
  title: string;
  desc: string;
  chip: string;
}[] = [
  {
    icon: ShieldIcon,
    title: "Verified & Trusted Platform",
    desc: "Background-verified tutors earn the Indian Mentors quality seal — instant credibility with families.",
    chip: "Trust",
  },
  {
    icon: UsersIcon,
    title: "Consistent Student Flow",
    desc: "Admission counsellors match you with verified students by expertise and location.",
    chip: "Pipeline",
  },
  {
    icon: ChartIcon,
    title: "Performance Dashboard",
    desc: "ERP view for sessions, attendance, homework, and student performance trends.",
    chip: "Visibility",
  },
  {
    icon: CalendarIcon,
    title: "Flexible Scheduling",
    desc: "Part-time or full-time — set slots and we align matches to your calendar.",
    chip: "Your time",
  },
  {
    icon: MessageIcon,
    title: "Dedicated Support Team",
    desc: "Parent communication, payment follow-ups, and escalations handled for you.",
    chip: "Light lift",
  },
  {
    icon: ClockIcon,
    title: "Timely Payments",
    desc: "Transparent billing and structured cycles with clear fee-split policies.",
    chip: "Cash flow",
  },
];

const EARNINGS_TIERS: {
  tier: string;
  range: string;
  period: string;
  desc: string;
  perks: string[];
  highlight: boolean;
  Icon: LucideIcon;
}[] = [
  {
    tier: "Starter",
    range: "₹8,000 – ₹20,000",
    period: "/ month",
    desc: "Part-time tutors with 3–6 students",
    perks: ["Flexible 2–3 hr/day", "Online or home tuition", "Onboarding support"],
    highlight: false,
    Icon: Sparkles,
  },
  {
    tier: "Professional",
    range: "₹25,000 – ₹60,000",
    period: "/ month",
    desc: "Full-time tutors with 8–15 students",
    perks: ["Priority student matching", "Group class earnings", "Performance bonuses", "ERP access"],
    highlight: true,
    Icon: Zap,
  },
  {
    tier: "Expert",
    range: "₹60,000+",
    period: "/ month",
    desc: "Senior tutors, competitive exam specialists",
    perks: ["Premium fee structure", "Institute tie-ups", "Referral incentives", "Top listing visibility"],
    highlight: false,
    Icon: Crown,
  },
];

export default function TutorPage() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className={`${poppins.className} min-h-screen overflow-x-clip bg-gradient-to-b from-blue-50/90 via-[#f0f7ff] to-white text-blue-950`}>
      <Navbar onPrimaryCTA={() => {}} />

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 pb-20 pt-12 md:pb-16 md:pt-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.45) 1.5px, transparent 1.5px)",
            backgroundSize: "18px 18px",
            maskImage: "radial-gradient(ellipse 80% 70% at 70% 30%, black 10%, transparent 65%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 70% 30%, black 10%, transparent 65%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-10 px-4 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/95 shadow-sm backdrop-blur-sm md:text-xs">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFD600]/90 text-[10px] text-neutral-900" aria-hidden>
                ✓
              </span>
              Indian Mentors · Tutor registration
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
            <p className="mt-6 max-w-xl text-base font-semibold leading-relaxed text-white/85 sm:text-lg">
              Join India&apos;s fastest-growing mentorship network. Get verified, get matched with students, and build a
              professional teaching career with structured support and timely payments.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-white/90">
              {[
                { Icon: BadgeCheck, text: "Background verified" },
                { Icon: LayoutDashboard, text: "ERP & reports" },
                { Icon: Wallet, text: "Structured payouts" },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                  <Icon className="h-4 w-4 shrink-0 text-[#FFD600]" aria-hidden />
                  {text}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FFD600] px-6 text-sm font-bold text-neutral-900 shadow-lg shadow-amber-600/25 transition hover:bg-[#ffcc00] hover:shadow-xl hover:shadow-amber-600/20"
              >
                Apply as a Tutor
                <ArrowRightIcon />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Book a Free Demo
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-2xl shadow-black/20 ring-1 ring-white/10 backdrop-blur-sm">
              <Image
                src={withBasePath("/assets/home/hero/hero-2.png")}
                alt="Educators and students in a collaborative learning setting"
                width={560}
                height={420}
                className="h-auto w-full rounded-[1.65rem] object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-sm font-bold text-blue-950 shadow-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md">
                <Users className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest text-blue-600/80">Live network</p>
                <p className="text-sm">Students matched weekly</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Value strip — home ServicesStrip style */}
      <div className="relative z-20 mx-auto -mt-6 max-w-[1200px] px-4 sm:-mt-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          className="rounded-3xl border border-blue-100/90 bg-white/98 p-4 shadow-[0_24px_60px_rgba(37,99,235,0.1)] ring-1 ring-blue-500/5 backdrop-blur-sm sm:p-5 md:p-6"
        >
          <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.22em] text-blue-600">At a glance</p>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
            {TUTOR_VALUE_STRIP.map((item, i) => {
              const Icon = item.Icon;
              return (
                <motion.div
                  key={item.title}
                  initial={reduced ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 + i * 0.05, duration: 0.45 }}
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-transparent bg-blue-50/70 px-2.5 py-4 text-center transition duration-200 hover:-translate-y-1 hover:border-blue-200/80 hover:bg-white hover:shadow-lg hover:shadow-blue-500/10 sm:gap-2.5 sm:px-3 sm:py-5"
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.iconBg} ${item.iconFg} shadow-md ring-2 ring-white/50 transition group-hover:scale-110 group-hover:shadow-lg`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-blue-950 sm:text-sm">{item.title}</p>
                    <p className="mt-0.5 text-[11px] leading-snug text-blue-900/50 sm:text-xs">{item.sub}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Overview */}
      <section className="px-4 py-14 md:py-16" aria-labelledby="tutor-overview-heading">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[2rem] border border-blue-100/90 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/40 p-8 shadow-[0_20px_50px_rgba(37,99,235,0.08)] md:p-12"
          >
            <div
              className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400/15 to-indigo-400/10 blur-3xl"
              aria-hidden
            />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <SectionHeading
                  id="tutor-overview-heading"
                  align="left"
                  label="Why teach with us"
                  title="A platform built for serious educators"
                  sub="Indian Mentors is a full ecosystem — verified matching, ERP-backed tracking, and operations support so you can focus on teaching."
                  className="[&_h2]:text-left [&_p]:mx-0 [&_p]:max-w-none"
                  titleClassName="!bg-none !bg-clip-border !text-blue-950"
                  subClassName="text-left text-[15px] text-slate-600"
                />
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-700"
                  >
                    Start application
                    <ArrowRightIcon />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-6 py-3 text-sm font-semibold text-blue-900 transition hover:bg-white"
                  >
                    About Indian Mentors
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-blue-800/80">What we offer tutors</p>
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
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <motion.section
        aria-labelledby="stats-heading"
        className="relative overflow-hidden border-y border-blue-100/90 bg-[#f8fafc] py-14 md:py-16"
        {...(reduced ? {} : fadeUp())}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 12%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 12%, transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1200px] px-4">
          <SectionHeading
            id="stats-heading"
            label="Our scale"
            title="Trusted by tutors & students across India"
            sub="Hundreds of thousands of educators have built teaching careers with measurable reach you can stand behind."
            className="mb-10 md:mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div key={s.label} {...(reduced ? {} : fadeUp(i * 0.08))}>
                <StatCard {...s} reduced={reduced} />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold text-slate-600"
            {...(reduced ? {} : fadeUp(0.35))}
          >
            {[
              { Icon: Trophy, text: "500+ rewards & recognitions", bg: "from-amber-500/15 to-orange-500/10", fg: "text-amber-800" },
              { Icon: Sparkles, text: "50,000+ tutor reviews", bg: "from-violet-500/15 to-indigo-500/10", fg: "text-indigo-800" },
              { Icon: Globe2, text: "Pan-India presence", bg: "from-sky-500/15 to-blue-500/10", fg: "text-blue-800" },
            ].map(({ Icon, text, bg, fg }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm ring-1 ring-blue-500/[0.04]"
              >
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${bg} ${fg}`}>
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Who can join */}
      <section aria-labelledby="who-can-join-heading" className="px-4 py-14 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            id="who-can-join-heading"
            label="Eligibility"
            title="Who can apply as a tutor?"
            sub="Seasoned teacher or first-time mentor — if you have knowledge to share, we have a structured path for you."
            className="mb-10 md:mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHO_CAN_JOIN.map((item, i) => {
              const Icon = item.Icon;
              return (
                <motion.div
                  key={item.title}
                  {...(reduced ? {} : fadeUp(i * 0.07))}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100/90 bg-white p-6 shadow-[0_8px_30px_rgba(37,99,235,0.07)] ring-1 ring-blue-500/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]`}
                >
                  <div
                    className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${item.glow} blur-2xl`}
                    aria-hidden
                  />
                  <span
                    className={`relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.iconBg} text-white shadow-lg ring-2 ring-white/40`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="relative mt-4 text-sm font-extrabold text-blue-950 sm:text-base">{item.title}</h3>
                  <p className="relative mt-2 flex-1 text-sm font-semibold leading-relaxed text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic coverage */}
      <section
        aria-labelledby="academic-coverage-heading"
        className="border-y border-blue-100/90 bg-gradient-to-b from-white to-blue-50/40 px-4 py-14 md:py-16"
      >
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            id="academic-coverage-heading"
            label="Academic coverage"
            title="Subjects & levels we cover"
            sub="From primary basics to competitive exams — teach what you love at the level that fits your expertise."
            className="mb-10 md:mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ACADEMIC_COVERAGE.map((cat, i) => {
              const Icon = cat.Icon;
              return (
                <motion.div key={cat.label} {...(reduced ? {} : fadeUp(i * 0.07))}>
                  <div className="overflow-hidden rounded-3xl border border-blue-100/90 bg-white shadow-[0_8px_30px_rgba(37,99,235,0.07)] ring-1 ring-blue-500/[0.04]">
                    <div className={`h-1.5 bg-gradient-to-r ${cat.bar}`} aria-hidden />
                    <div className="p-5">
                      <div className="flex items-start gap-3">
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cat.bar} text-white shadow-md`}
                        >
                          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                        </span>
                        <h3 className={`pt-1 text-sm font-extrabold uppercase tracking-wide ${cat.accent}`}>{cat.label}</h3>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800 ring-1 ring-blue-100/80"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teaching modes */}
      <section aria-labelledby="teaching-modes-heading" className="px-4 py-14 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            id="teaching-modes-heading"
            label="Teaching modes"
            title="Choose how you teach"
            sub="Flexible models for your lifestyle, location, and earnings goals."
            className="mb-10 md:mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {TEACHING_MODES.map((mode, i) => (
              <motion.div key={mode.title} {...(reduced ? {} : fadeUp(i * 0.07))}>
                <div className="group relative flex h-full flex-col rounded-3xl border border-blue-100/90 bg-white p-6 shadow-[0_8px_30px_rgba(37,99,235,0.07)] ring-1 ring-blue-500/[0.04] transition duration-300 hover:-translate-y-1 hover:border-blue-200/80 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]">
                  <span className={`absolute right-4 top-4 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold ${mode.badgeColor}`}>
                    {mode.badge}
                  </span>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-500/25 ring-2 ring-white/50 transition group-hover:scale-105 [&_svg]:h-5 [&_svg]:w-5">
                    <mode.icon />
                  </div>
                  <h3 className="pr-16 text-sm font-extrabold text-blue-950 sm:text-base">{mode.title}</h3>
                  <p className="mt-2 flex-1 text-sm font-semibold leading-relaxed text-slate-600">{mode.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring process — enrollment-style cards */}
      <section aria-labelledby="hiring-process-heading" className="border-y border-blue-100/90 bg-[#f8fafc] px-4 py-14 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            id="hiring-process-heading"
            label="How it works"
            title="Tutor hiring process"
            sub="Transparent steps to get verified and teaching — typically 3–5 working days."
            className="mb-10 md:mb-12"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {HIRING_STEPS.map((s, i) => {
              const Icon = s.Icon;
              return (
                <motion.div
                  key={s.step}
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                  className="group relative flex flex-col rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_4px_20px_rgba(37,99,235,0.07)] transition duration-300 hover:-translate-y-1 hover:border-blue-200/80 hover:shadow-[0_16px_40px_rgba(37,99,235,0.12)]"
                >
                  <span className="mb-4 inline-flex w-fit rounded-full border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-xs font-extrabold tracking-widest text-blue-600">
                    STEP {s.step}
                  </span>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${s.iconBg} text-white shadow-md ring-2 ring-white/60`}>
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="text-sm font-extrabold text-blue-950 sm:text-base">{s.title}</h3>
                  <p className="mt-2 flex-1 text-xs font-semibold leading-relaxed text-slate-500">{s.desc}</p>
                  {i < HIRING_STEPS.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:flex">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-100 bg-white shadow-sm">
                        <svg className="h-3 w-3 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div className="mt-10 text-center" {...(reduced ? {} : fadeUp(0.45))}>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-blue-600 px-8 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700 hover:shadow-xl"
            >
              Start your application
              <ArrowRightIcon />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust benefits */}
      <section aria-labelledby="trust-benefits-heading" className="px-4 py-14 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            id="trust-benefits-heading"
            label="Trust & benefits"
            title="Why tutors choose Indian Mentors"
            sub="Beyond student introductions — a professional environment where you can grow."
            className="mb-10 md:mb-12"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST_BENEFITS.map((b, i) => (
              <motion.div key={b.title} {...(reduced ? {} : fadeUp(i * 0.07))}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100/90 bg-white p-6 shadow-[0_8px_30px_rgba(37,99,235,0.07)] ring-1 ring-blue-500/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]">
                  <span className="mb-3 inline-flex w-fit rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-blue-700 ring-1 ring-blue-100">
                    {b.chip}
                  </span>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-500/25 [&_svg]:h-5 [&_svg]:w-5">
                    <b.icon />
                  </div>
                  <h3 className="text-sm font-extrabold text-blue-950 sm:text-base">{b.title}</h3>
                  <p className="mt-2 flex-1 text-sm font-semibold leading-relaxed text-slate-600">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-indigo-50/80 to-violet-50/60 p-6 sm:p-8"
            {...(reduced ? {} : fadeUp(0.3))}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-500/30">
                <ShieldCheck className="h-7 w-7" aria-hidden />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-extrabold text-blue-950">Our tutor guarantee</h3>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  Timely matching within 7 working days of verification, transparent fees, and a dedicated contact for your queries.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex h-11 shrink-0 items-center gap-2 rounded-2xl bg-blue-600 px-5 text-sm font-extrabold text-white shadow-md shadow-blue-500/30 transition hover:bg-blue-700"
              >
                Join now
                <ArrowRightIcon />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Earnings */}
      <section aria-labelledby="earnings-heading" className="border-y border-blue-100/90 bg-gradient-to-b from-blue-50/50 to-white px-4 py-14 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            id="earnings-heading"
            label="Earnings potential"
            title="What you can earn as a tutor"
            sub="Earnings scale with experience, commitment, and student count. Indicative monthly bands below."
            className="mb-10 md:mb-12"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {EARNINGS_TIERS.map((tier, i) => {
              const TierIcon = tier.Icon;
              return (
                <motion.div key={tier.tier} {...(reduced ? {} : fadeUp(i * 0.1))}>
                  <div
                    className={`relative flex h-full flex-col rounded-3xl p-6 shadow-[0_8px_30px_rgba(15,23,42,0.07)] sm:p-8 ${
                      tier.highlight
                        ? "bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 text-white shadow-[0_20px_50px_rgba(37,99,235,0.25)] ring-1 ring-white/10"
                        : "border border-blue-100/90 bg-white ring-1 ring-blue-500/[0.04]"
                    }`}
                  >
                    {tier.highlight && (
                      <span className="absolute right-5 top-5 rounded-full bg-[#FFD600] px-3 py-0.5 text-[10px] font-extrabold text-neutral-900">
                        Most common
                      </span>
                    )}
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl shadow-md ring-2 ring-white/30 ${
                        tier.highlight ? "bg-white/15 text-[#FFD600]" : "bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700"
                      }`}
                    >
                      <TierIcon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                    </div>
                    <p className={`text-xs font-extrabold uppercase tracking-[0.18em] ${tier.highlight ? "text-white/70" : "text-blue-600/90"}`}>
                      {tier.tier}
                    </p>
                    <p className={`mt-2 text-3xl font-extrabold tabular-nums tracking-tight ${tier.highlight ? "text-[#FFD600]" : "text-blue-950"}`}>
                      {tier.range}
                      <span className={`text-sm font-semibold ${tier.highlight ? "text-white/60" : "text-slate-400"}`}>{tier.period}</span>
                    </p>
                    <p className={`mt-1 text-sm font-semibold ${tier.highlight ? "text-white/75" : "text-slate-500"}`}>{tier.desc}</p>
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
                          <span className={`text-sm font-semibold ${tier.highlight ? "text-white/90" : "text-slate-700"}`}>{perk}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-2xl text-sm font-extrabold transition ${
                        tier.highlight ? "bg-[#FFD600] text-neutral-900 hover:bg-[#ffcc00]" : "border border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100"
                      }`}
                    >
                      Apply now
                      <ArrowRightIcon />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p className="mt-6 text-center text-xs font-semibold text-slate-400" {...(reduced ? {} : fadeUp(0.4))}>
            * Earnings vary by subject, location, students, and frequency. Figures are indicative.
          </motion.p>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="testimonials-heading" className="px-4 py-14 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            id="testimonials-heading"
            label="Tutor voices"
            title="What our tutors say"
            sub="Real feedback from educators on the platform."
            className="mb-10 md:mb-12"
          />
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
                <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100/90 bg-white p-6 shadow-[0_8px_30px_rgba(37,99,235,0.07)] ring-1 ring-blue-500/[0.04]">
                  <Quote className="absolute right-4 top-4 h-10 w-10 text-blue-100" aria-hidden />
                  <div className="relative mb-3 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <span key={si} className="text-sm text-amber-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="relative flex-1 text-sm font-semibold leading-relaxed text-slate-700">&ldquo;{t.text}&rdquo;</p>
                  <div className="relative mt-5 flex items-center gap-3 border-t border-blue-50 pt-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-xs font-extrabold text-white shadow-md">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-blue-950">{t.name}</p>
                      <p className="text-xs font-semibold text-slate-500">{t.subject}</p>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section className="px-4 pb-16" {...(reduced ? {} : fadeUp())}>
        <div className="mx-auto max-w-[1200px]">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 p-8 text-center shadow-[0_20px_50px_rgba(37,99,235,0.3)] sm:p-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1.5px, transparent 1.5px)",
                backgroundSize: "16px 16px",
                maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 20%, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 20%, transparent 75%)",
              }}
              aria-hidden
            />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-2 ring-white/20">
                <Atom className="h-7 w-7 text-[#FFD600]" aria-hidden />
              </span>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">Ready to teach?</p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#FFD600] sm:text-4xl">Join 5,00,000+ tutors on Indian Mentors</h2>
              <p className="mx-auto mt-4 max-w-xl text-base font-semibold leading-relaxed text-white/85">
                Apply today, get verified in 3–5 days, and start teaching students who are already waiting for a tutor like you.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-[#FFD600] px-7 text-sm font-bold text-neutral-900 shadow-lg shadow-amber-600/30 transition hover:bg-[#ffcc00] hover:shadow-xl"
                >
                  Apply as a Tutor
                  <ArrowRightIcon />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Book free demo
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
        </div>
      </motion.section>
    </div>
  );
}
