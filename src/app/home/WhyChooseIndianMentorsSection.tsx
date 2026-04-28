"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  Bot,
  CalendarClock,
  ClipboardCheck,
  Headphones,
  HeartHandshake,
  LayoutGrid,
  RefreshCw,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const REASONS: {
  title: string;
  detail: string;
  Icon: LucideIcon;
  chip: string;
  glow: string;
  iconBg: string;
  iconFg: string;
}[] = [
  {
    title: "Verified & background-checked tutors",
    detail: "Identity, qualifications, and teaching quality checked before anyone joins your child’s learning journey.",
    Icon: ShieldCheck,
    chip: "Trust & safety",
    glow: "from-emerald-400/25 via-teal-300/20 to-cyan-400/20",
    iconBg: "from-emerald-500 to-teal-600",
    iconFg: "text-white",
  },
  {
    title: "AI-based tutor–student matching",
    detail: "Smart pairing by subject, level, and learning style so the first shortlist is already relevant.",
    Icon: Bot,
    chip: "Smarter match",
    glow: "from-violet-400/30 via-fuchsia-300/20 to-indigo-400/25",
    iconBg: "from-violet-500 to-indigo-600",
    iconFg: "text-white",
  },
  {
    title: "Personalised learning plans",
    detail: "Roadmaps that adapt to pace, goals, and exams — not one-size-fits-all worksheets.",
    Icon: Target,
    chip: "Your goals",
    glow: "from-rose-300/30 via-amber-200/25 to-orange-300/20",
    iconBg: "from-rose-500 to-amber-500",
    iconFg: "text-white",
  },
  {
    title: "Structured curriculum alignment",
    detail: "Boards and school expectations reflected in what gets taught, week by week.",
    Icon: BookOpen,
    chip: "Syllabus-fit",
    glow: "from-amber-300/30 via-yellow-200/20 to-amber-400/20",
    iconBg: "from-amber-500 to-amber-700",
    iconFg: "text-white",
  },
  {
    title: "Transparent progress tracking",
    detail: "Clear visibility for parents: milestones, practice, and what to improve next.",
    Icon: BarChart3,
    chip: "Visible progress",
    glow: "from-cyan-400/30 via-sky-300/20 to-blue-400/25",
    iconBg: "from-cyan-500 to-blue-600",
    iconFg: "text-white",
  },
  {
    title: "Flexible days & time scheduling",
    detail: "Classes that work around school, sports, and family time — not the other way around.",
    Icon: CalendarClock,
    chip: "Any rhythm",
    glow: "from-sky-400/25 via-blue-300/20 to-indigo-400/20",
    iconBg: "from-sky-500 to-indigo-600",
    iconFg: "text-white",
  },
  {
    title: "Multiple learning formats",
    detail: "Home, online, and blended options so geography never blocks a great tutor match.",
    Icon: LayoutGrid,
    chip: "Anywhere",
    glow: "from-indigo-400/30 via-violet-300/20 to-purple-400/20",
    iconBg: "from-indigo-500 to-violet-600",
    iconFg: "text-white",
  },
  {
    title: "Tutor replacement support",
    detail: "If fit or schedules change, we help you move to another verified tutor without losing momentum.",
    Icon: RefreshCw,
    chip: "Continuity",
    glow: "from-fuchsia-400/30 via-pink-300/20 to-rose-400/20",
    iconBg: "from-fuchsia-500 to-rose-600",
    iconFg: "text-white",
  },
  {
    title: "ERP-based attendance monitoring",
    detail: "System-backed logs so sessions, leaves, and make-ups stay auditable and fair.",
    Icon: ClipboardCheck,
    chip: "Accountability",
    glow: "from-slate-400/25 via-slate-300/15 to-zinc-400/20",
    iconBg: "from-slate-600 to-slate-800",
    iconFg: "text-white",
  },
  {
    title: "Dedicated academic & support team",
    detail: "Humans in the loop for escalations, planning, and making sure the experience delivers.",
    Icon: Headphones,
    chip: "We’re here",
    glow: "from-blue-400/30 via-indigo-300/20 to-blue-500/20",
    iconBg: "from-blue-500 to-indigo-700",
    iconFg: "text-white",
  },
  {
    title: "Safe, supportive & result-oriented environment",
    detail: "A culture focused on respect, growth, and measurable academic outcomes for every student.",
    Icon: HeartHandshake,
    chip: "Outcome-first",
    glow: "from-teal-400/30 via-emerald-300/20 to-cyan-400/20",
    iconBg: "from-teal-500 to-emerald-600",
    iconFg: "text-white",
  },
];

function usePrefersReducedMotion() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = () => setR(mq.matches);
    fn();
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return r;
}

function SpotlightPanel({ active, reduced }: { active: (typeof REASONS)[number]; reduced: boolean }) {
  const Icon = active.Icon;
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/60 p-6 shadow-[0_24px_60px_rgba(37,99,235,0.12)] ring-1 ring-blue-500/10 backdrop-blur-md sm:p-8">
      <div
        className={`pointer-events-none absolute -right-1/4 -top-1/2 h-[120%] w-[80%] rounded-full bg-gradient-to-br opacity-60 blur-3xl ${active.glow}`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_0%,rgba(255,255,255,0.85),transparent)]"
        aria-hidden
      />
      <div className="relative flex min-h-[280px] flex-col sm:min-h-[300px]">
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200/60 bg-white/80 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-blue-800/90 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#34d399]" aria-hidden />
          {active.chip}
        </div>
        <div className="mb-5 flex items-start gap-4">
          <motion.div
            layout
            className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg ${active.iconBg} sm:h-20 sm:w-20 sm:rounded-3xl ${active.iconFg}`}
            whileHover={reduced ? undefined : { scale: 1.05, rotate: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-white/10 sm:rounded-3xl" aria-hidden />
            <Icon className="relative h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.5} aria-hidden />
          </motion.div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            <h3 className="text-balance text-xl font-extrabold leading-tight text-blue-950 sm:text-2xl">
              {active.title}
            </h3>
            <p className="mt-3 text-pretty text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
              {active.detail}
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-6 flex flex-wrap gap-2" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1 flex-1 rounded-full bg-gradient-to-r from-blue-200/50 to-indigo-200/40"
              style={{ maxWidth: "4.5rem", opacity: 0.4 + i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function WhyChooseIndianMentorsSection() {
  const reduced = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = REASONS[activeIndex]!;

  return (
    <section
      className="relative overflow-hidden px-4 py-16 md:py-20"
      aria-labelledby="why-choose-im-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-64 w-[min(100%,42rem)] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-200/20 to-transparent blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeading
          id="why-choose-im-heading"
          label="Why us"
          title="Why choose Indian Mentors?"
          sub="From verified educators and smart matching to transparent progress and flexible formats — we built the experience around outcomes you can see."
          className="mb-8 md:mb-10"
        />
        <p className="mb-6 text-center text-sm font-medium text-slate-500 lg:mb-8 lg:text-left">
          Explore each pillar — <span className="font-bold text-slate-700">hover</span> on desktop or{" "}
          <span className="font-bold text-slate-700">tap</span> a card to see it in focus.
        </p>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="order-1 lg:col-span-5 lg:sticky lg:top-24">
            <SpotlightPanel active={active} reduced={reduced} />
          </div>

          <div className="order-2 min-w-0 lg:col-span-7">
            <ul className="grid list-none grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
              {REASONS.map((item, i) => {
                const Icon = item.Icon;
                const isOn = activeIndex === i;
                return (
                  <li key={item.title} className="min-w-0">
                    <motion.button
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      onMouseEnter={() => {
                        if (globalThis.matchMedia?.("(min-width: 1024px)").matches) {
                          setActiveIndex(i);
                        }
                      }}
                      onFocus={() => setActiveIndex(i)}
                      whileTap={reduced ? undefined : { scale: 0.98 }}
                      whileHover={reduced ? undefined : { y: -2 }}
                      aria-pressed={isOn}
                      aria-label={`${item.title}. ${item.detail}`}
                      className={[
                        "group relative w-full overflow-hidden rounded-2xl border p-3.5 text-left transition-colors duration-200 sm:p-4",
                        isOn
                          ? "border-blue-400/60 bg-gradient-to-br from-white to-blue-50/90 shadow-md shadow-blue-500/10 ring-2 ring-blue-500/25"
                          : "border-blue-100/80 bg-white/80 shadow-sm hover:border-blue-200 hover:bg-white",
                      ].join(" ")}
                    >
                      {isOn ? (
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.07] to-indigo-500/[0.05]"
                          aria-hidden
                        />
                      ) : null}
                      <div className="relative flex gap-3">
                        <span
                          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100/80 text-[10px] font-extrabold tabular-nums text-blue-800"
                          aria-hidden
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.iconBg} ${item.iconFg} shadow-md transition group-hover:scale-105 sm:h-11 sm:w-11`}
                        >
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.6} aria-hidden />
                        </div>
                        <span className="min-w-0 text-pretty text-left text-xs font-bold leading-snug text-blue-950 sm:text-sm">
                          {item.title}
                        </span>
                      </div>
                    </motion.button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
