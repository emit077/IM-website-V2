"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
} from "framer-motion";
import { Navbar as IMNavbar } from "@/components/home/Navbar";
import { SmartSearchBar as IMSmartSearchBar } from "@/components/home/SmartSearchBar";
import { WhatsAppButton as IMWhatsAppButton } from "@/components/home/WhatsAppButton";
import { HeroScreen2 } from "@/components/home/HeroScreen2";
import { HeroScreen } from "@/components/home/HeroScreen";
import { TrustScaleSection } from "@/components/home/TrustScaleSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AcademicCoverageSection } from "@/components/home/AcademicCoverageSection";
import { ERPDashboardSection } from "@/components/home/ERPDashboardSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  ArrowRightIcon,
  CheckMiniIcon,
  ChartIcon,
  MessageIcon,
  ShieldIcon,
  SparklesIcon,
  TargetIcon,
  PlayIcon,
} from "@/components/shared/SvgIcons";

type Tutor = {
  name: string;
  badge: string;
  subjects: string[];
  rating: number;
  reviews: number;
  focus: string;
};

type PricingPlan = {
  name: string;
  priceLabel: string;
  highlights: string[];
  cta: string;
  mostPopular?: boolean;
};

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

function Reveal({
  children,
  delay = 0,
  y = 18,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function InViewMount({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return <div ref={ref}>{inView ? children : null}</div>;
}

function Toast({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const t = window.setTimeout(onClose, 3800);
    return () => window.clearTimeout(t);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.25 }}
      className="pointer-events-auto w-[min(520px,calc(100vw-32px))] rounded-2xl border border-white/10 bg-white/85 p-4 shadow-xl backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/60"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-2 text-blue-700 dark:text-blue-200">
          <SparklesIcon />
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Request received
          </div>
          <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            {message}
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-xl px-2 py-1 text-xs font-semibold text-zinc-600 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/5"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
}

// (Removed unused legacy components: CoverageTabs, CheckMiniIconLocal)

function HowItWorks() {
  const steps = [
    {
      title: "Tell us your requirement",
      desc: "Subject, grade, and learning mode. We understand your goals first.",
      icon: <MessageIcon />,
    },
    {
      title: "Choose a verified tutor",
      desc: "We shortlist mentors with proven results and curriculum-fit plans.",
      icon: <ShieldIcon />,
    },
    {
      title: "Book your free demo",
      desc: "Experience the teaching style and confirm fit for success.",
      icon: <SparklesIcon />,
    },
    {
      title: "Track progress every week",
      desc: "Attendance, performance charts, and homework feedback stay aligned.",
      icon: <ChartIcon />,
    },
  ];

  return (
    <div className="relative">
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, idx) => (
          <Reveal key={s.title} delay={idx * 0.06} y={22}>
            <motion.div
              className="relative rounded-[2rem] border border-white/12 bg-white/45 p-5 shadow-sm backdrop-blur-xl transition hover:shadow-lg dark:border-white/15 dark:bg-zinc-950/25"
              whileHover={{ y: -6 }}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-2 text-blue-700 ring-1 ring-blue-500/15 dark:text-blue-200">
                  {s.icon}
                </div>
                <div className="text-xs font-extrabold text-zinc-500 dark:text-zinc-400">
                  Step {idx + 1}
                </div>
              </div>
              <div className="mt-4 text-lg font-extrabold text-zinc-950 dark:text-zinc-50">
                {s.title}
              </div>
              <div className="mt-2 text-sm font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300">
                {s.desc}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function TutorGrid({
  tutors,
  onBook,
}: {
  tutors: Tutor[];
  onBook: (tutorName: string) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tutors.map((t) => (
        <TutorCard key={t.name} tutor={t} onBook={onBook} />
      ))}
    </div>
  );
}

function TutorCard({
  tutor,
  onBook,
}: {
  tutor: Tutor;
  onBook: (tutorName: string) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const ratingText = `${tutor.rating.toFixed(1)} (${tutor.reviews} reviews)`;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/45 shadow-sm backdrop-blur-xl transition dark:border-white/15 dark:bg-zinc-950/25"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 to-blue-500/8 opacity-0 transition group-hover:opacity-100" />
      <div className="relative p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <TutorAvatar seed={tutor.name} />
            <div className="min-w-0">
              <div className="truncate text-lg font-extrabold text-zinc-950 dark:text-zinc-50">
                {tutor.name}
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-gradient-to-br from-blue-600 to-blue-600 px-3 py-1 text-xs font-extrabold text-white shadow-sm">
                  {tutor.badge}
                </span>
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  {ratingText}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-black/5 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="text-xs font-extrabold text-zinc-900 dark:text-zinc-50">
            Focus
          </div>
          <div className="mt-1 text-sm font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300">
            {tutor.focus}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {tutor.subjects.map((s) => (
              <span
                key={s}
                className="rounded-full bg-black/5 px-3 py-1 text-xs font-extrabold text-zinc-700 dark:bg-white/10 dark:text-zinc-200"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`mt-4 flex items-center gap-3 transition ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
        >
          <button
            type="button"
            className="flex-1 rounded-2xl border border-black/10 bg-white/60 px-4 py-2.5 text-sm font-extrabold text-zinc-900 transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-zinc-50"
          >
            View Profile
          </button>
          <button
            type="button"
            onClick={() => onBook(tutor.name)}
            className="flex-1 rounded-2xl bg-zinc-950 px-4 py-2.5 text-sm font-extrabold text-white shadow-sm ring-1 ring-white/10 transition hover:opacity-95 dark:bg-white dark:text-zinc-950"
          >
            Book Demo
          </button>
        </div>

        <div className="mt-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          Hover to reveal actions.
        </div>
      </div>
    </motion.div>
  );
}

function TutorAvatar({ seed }: { seed: string }) {
  const hash = seed
    .split("")
    .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const hue = hash % 360;
  const hue2 = (hue + 45) % 360;
  const initials = seed
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm ring-1 ring-white/10"
      style={{
        background: `linear-gradient(135deg, hsla(${hue}, 90%, 60%, 0.25), hsla(${hue2}, 90%, 60%, 0.18))`,
      }}
    >
      <div
        className="text-xs font-extrabold text-zinc-950 dark:text-zinc-50"
        style={{ textShadow: "0 1px 0 rgba(255,255,255,0.25)" }}
      >
        {initials}
      </div>
    </div>
  );
}

function WhyChooseUs() {
  const items = [
    {
      title: "Premium mentor matching",
      desc: "We shortlist tutors based on your syllabus, learning goals, and pace.",
      icon: <SparklesIcon />,
    },
    {
      title: "Transparent progress tracking",
      desc: "Attendance, performance charts, and homework workflow keep students accountable.",
      icon: <ChartIcon />,
    },
    {
      title: "Exam-ready teaching approach",
      desc: "Revision loops, question practice, and mock-test strategy built into every plan.",
      icon: <TargetIcon />,
    },
    {
      title: "Student-centric micro-feedback",
      desc: "Your mentor adjusts teaching based on weekly performance and gaps.",
      icon: <ShieldIcon />,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((it) => (
        <Reveal key={it.title}>
          <div className="rounded-[2rem] border border-white/12 bg-white/45 p-6 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/25">
            <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-3 text-blue-700 ring-1 ring-blue-500/15 dark:text-blue-200">
              {it.icon}
            </div>
            <div className="mt-4 text-lg font-extrabold text-zinc-950 dark:text-zinc-50">
              {it.title}
            </div>
            <div className="mt-2 text-sm font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300">
              {it.desc}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function PricingPreview({
  plans,
  onSelect,
}: {
  plans: PricingPlan[];
  onSelect: (planName: string) => void;
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {plans.map((p) => (
        <motion.div
          key={p.name}
          whileHover={{ y: -6 }}
          className={`relative overflow-hidden rounded-[2rem] border p-6 backdrop-blur-xl shadow-sm dark:shadow-none ${p.mostPopular
            ? "border-blue-500/30 bg-gradient-to-b from-blue-500/10 to-white/40 dark:border-blue-400/25 dark:bg-gradient-to-b dark:from-blue-400/10 dark:to-zinc-950/25"
            : "border-white/12 bg-white/45 dark:border-white/15 dark:bg-zinc-950/25"
            }`}
        >
          {p.mostPopular ? (
            <div className="absolute right-4 top-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-600 px-4 py-2 text-xs font-extrabold text-white shadow-lg">
              Most Popular
            </div>
          ) : null}
          <div className="text-sm font-extrabold text-zinc-600 dark:text-zinc-300">
            {p.name}
          </div>
          <div className="mt-3 text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
            {p.priceLabel}
          </div>

          <ul className="mt-4 space-y-2">
            {p.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200"
              >
                <CheckMiniIcon />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => onSelect(p.name)}
            className={`mt-6 flex h-12 w-full items-center justify-center rounded-2xl px-4 text-sm font-extrabold transition ${p.mostPopular
              ? "bg-gradient-to-br from-blue-600 to-blue-600 text-white shadow-lg shadow-blue-500/20 ring-1 ring-white/15 hover:opacity-95"
              : "bg-white/70 text-zinc-900 ring-1 ring-black/10 hover:bg-white dark:bg-white/5 dark:text-zinc-50 dark:ring-white/15"
              }`}
          >
            {p.cta}
          </button>
        </motion.div>
      ))}
    </div>
  );
}

function TestimonialsCarousel() {
  const items = [
    {
      name: "Ananya • Grade 8",
      quote:
        "My child finally started enjoying Science. The mentor’s weekly plan and homework feedback made a huge difference.",
      duration: "1:12",
    },
    {
      name: "Rohit • CBSE Grade 10",
      quote:
        "We booked a free demo and immediately felt the structure. The mock test strategy and revision loops improved our scores.",
      duration: "0:58",
    },
    {
      name: "Meera • Online Tutor",
      quote:
        "The tutor explained concepts clearly and made problem-solving easy. Performance charts kept us motivated.",
      duration: "1:05",
    },
    {
      name: "Parent • State Board Grade 9",
      quote:
        "Transparent tracking, punctual sessions, and targeted practice. We saw consistent progress within weeks.",
      duration: "0:49",
    },
  ];

  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduced) return;
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((x) => (x + 1) % items.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [items.length, paused, reduced]);

  const current = items[index];
  const nextIndex = (index + 1) % items.length;
  const next = items[nextIndex];

  return (
    <div className="rounded-[2rem] border border-white/12 bg-white/45 p-4 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/25">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
        <div className="flex-1">
          <Reveal>
            <div className="text-2xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
              What students and parents say
            </div>
            <div className="mt-2 text-sm font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300">
              Real outcomes from verified home & online tutors.
            </div>
          </Reveal>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { label: "Average improvement", value: "+28%" },
              { label: "Demo to booking rate", value: "41%" },
              { label: "Session punctuality", value: "98%" },
              { label: "Homework completion", value: "93%" },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-black/5 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <div className="text-2xl font-extrabold text-zinc-950 dark:text-zinc-50">
                  {m.value}
                </div>
                <div className="mt-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div
            className="h-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="grid h-full gap-3 lg:grid-rows-2">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-extrabold text-zinc-900 dark:text-zinc-50">
                      {current.name}
                    </div>
                    <div className="mt-2 text-sm font-semibold leading-relaxed text-zinc-700 dark:text-zinc-200">
                      “{current.quote}”
                    </div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-2 text-blue-700 ring-1 ring-blue-500/15 dark:text-blue-200">
                    <PlayIcon />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    Verified video-style review
                  </div>
                  <div className="rounded-2xl bg-black/5 px-3 py-1 text-xs font-extrabold text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                    {current.duration}
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-3">
                {[next, items[(nextIndex + 1) % items.length]].map((it, idx) => (
                  <motion.div
                    key={it.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.05 }}
                    className="rounded-[2rem] border border-black/5 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-xs font-extrabold text-zinc-900 dark:text-zinc-50">
                        {it.name}
                      </div>
                      <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-2 text-blue-700 ring-1 ring-blue-500/15 dark:text-blue-200">
                        <PlayIcon />
                      </div>
                    </div>
                    <div className="mt-2 text-[11px] font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300">
                      “{it.quote}”
                    </div>
                    <div className="mt-3 text-[11px] font-extrabold text-zinc-500 dark:text-zinc-400">
                      {it.duration}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-10 rounded-full transition ${i === index
                      ? "bg-gradient-to-br from-blue-600 to-blue-600"
                      : "bg-black/10 dark:bg-white/15"
                      }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setIndex((x) => (x - 1 + items.length) % items.length)
                  }
                  className="rounded-2xl border border-black/10 bg-white/60 px-3 py-2 text-xs font-extrabold text-zinc-900 transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-zinc-50"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => setIndex((x) => (x + 1) % items.length)}
                  className="rounded-2xl border border-black/10 bg-white/60 px-3 py-2 text-xs font-extrabold text-zinc-900 transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-zinc-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer({
  onPrimaryCTA,
}: {
  onPrimaryCTA: () => void;
}) {
  return (
    <footer className="relative mt-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-[2.5rem] border border-white/12 bg-white/45 p-8 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/25">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
                Talk to an Academic Advisor
              </div>
              <div className="mt-3 text-sm font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300">
                Get a clear learning plan and a shortlist of verified tutors for
                your student’s goals.
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={onPrimaryCTA}
                  className="flex h-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-600 px-5 text-sm font-extrabold text-white shadow-lg shadow-blue-500/20 ring-1 ring-white/15 transition hover:opacity-95"
                >
                  Book Free Demo
                  <ArrowRightIcon />
                </button>
                <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  Response within 15 minutes (working hours).
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/5 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="text-xs font-extrabold text-zinc-900 dark:text-zinc-50">
                    Support channels
                  </div>
                  <div className="mt-1 text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                    WhatsApp & calls after your free demo request.
                  </div>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="text-xs font-extrabold text-zinc-900 dark:text-zinc-50">
                    Next step
                  </div>
                  <div className="mt-1 text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                    We match verified tutors based on your grade & subject.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="text-sm font-extrabold text-zinc-900 dark:text-zinc-50">
                Quick links
              </div>
              <div className="mt-3 grid gap-2 text-sm font-semibold">
                <FooterLink href="#services" label="Services" />
                <FooterLink href="#coverage" label="Academic coverage" />
                <FooterLink href="#tutors" label="Tutor profiles" />
                <FooterLink href="#pricing" label="Pricing" />
                <FooterLink href="#testimonials" label="Testimonials" />
                <FooterLink href="#contact" label="Contact" />
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="text-sm font-extrabold text-zinc-900 dark:text-zinc-50">
                Get started
              </div>
              <div className="mt-3 rounded-2xl border border-black/5 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
                <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                  Students & parents
                </div>
                <div className="mt-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  Book a free demo and get a tutor shortlist.
                </div>
                <button
                  type="button"
                  onClick={onPrimaryCTA}
                  className="mt-4 flex h-10 w-full items-center justify-center rounded-2xl bg-zinc-950 text-xs font-extrabold text-white ring-1 ring-white/10 transition hover:opacity-95 dark:bg-white dark:text-zinc-950"
                >
                  Request demo
                </button>
              </div>
              <div className="mt-3 rounded-2xl border border-black/5 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
                <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                  Tutors
                </div>
                <div className="mt-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  Apply and teach with verified student matching.
                </div>
                <button
                  type="button"
                  className="mt-4 flex h-10 w-full items-center justify-center rounded-2xl border border-black/10 bg-white/60 text-xs font-extrabold text-zinc-900 transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-zinc-50"
                >
                  Become a tutor
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs font-semibold text-zinc-500 dark:border-white/10 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Indian Mentors. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50">Privacy</a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50">Terms</a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50">Refunds</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
    >
      {label}
    </a>
  );
}

export default function Home() {
  const [toast, setToast] = useState<string | null>(null);

  const tutors: Tutor[] = useMemo(
    () => [
      {
        name: "Dr. Aditi Sharma",
        badge: "Verified",
        subjects: ["Science", "Mathematics"],
        rating: 4.9,
        reviews: 126,
        focus: "CBSE board strategy + concept clarity",
      },
      {
        name: "Ravi Kumar",
        badge: "Top Rated",
        subjects: ["English", "Social Science"],
        rating: 4.8,
        reviews: 98,
        focus: "Writing practice + exam-ready frameworks",
      },
      {
        name: "Neha Singh",
        badge: "Verified",
        subjects: ["Computer Science", "Mathematics"],
        rating: 4.9,
        reviews: 141,
        focus: "Problem-solving drills + coding fundamentals",
      },
      {
        name: "Arjun Mehta",
        badge: "Mentor of the Week",
        subjects: ["Grade 6-8 Maths", "Science"],
        rating: 4.7,
        reviews: 76,
        focus: "Weekly revision loops + confidence building",
      },
      {
        name: "Simran Kaur",
        badge: "Verified",
        subjects: ["Physics", "Chemistry"],
        rating: 4.8,
        reviews: 84,
        focus: "Deep understanding + application-based practice",
      },
      {
        name: "Vikram Joshi",
        badge: "Top Rated",
        subjects: ["English", "Mathematics"],
        rating: 4.8,
        reviews: 102,
        focus: "Personalised plans + homework feedback",
      },
    ],
    []
  );

  const pricingPlans: PricingPlan[] = useMemo(
    () => [
      {
        name: "Gold",
        priceLabel: "₹ 1,499",
        highlights: [
          "Free demo session",
          "Tutor shortlist (3 options)",
          "Weekly learning plan",
          "Homework feedback summary",
        ],
        cta: "Choose Gold",
      },
      {
        name: "Diamond",
        priceLabel: "₹ 2,499",
        mostPopular: true,
        highlights: [
          "Free demo + personalised syllabus map",
          "Priority mentor matching",
          "Performance chart insights",
          "Homework workflow with progress notes",
        ],
        cta: "Choose Diamond",
      },
      {
        name: "Platinum",
        priceLabel: "₹ 3,499",
        highlights: [
          "Free demo + revision sprint",
          "Premium tutor shortlist (5 options)",
          "Mock-test strategy session",
          "Mentor progress check-ins",
        ],
        cta: "Choose Platinum",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white font-sans dark:from-black dark:via-zinc-950 dark:to-zinc-950">
      <IMNavbar
        onPrimaryCTA={() =>
          setToast(
            "Thanks! Tell us your details below and our advisor will schedule your free demo."
          )
        }
      />

      <HeroScreen2 />


      <main className="pb-24">
        <TrustScaleSection
          onBookFreeDemo={() =>
            setToast("Perfect. Book a free demo to get matched with the right tutor.")
          }
        />

        <ServicesSection />

        <AcademicCoverageSection />

        <ERPDashboardSection />

        <section className="mx-auto max-w-6xl px-4 pt-16">
          <Reveal>
            <SectionHeader
              eyebrow="How it works"
              title="From discovery to results—fast"
              subtitle="A premium, mentor-first process designed for consistency."
            />
          </Reveal>
          <HowItWorks />
        </section>
        {/* <HeroScreen /> */}
        <IMSmartSearchBar
          onSearch={({ subject, grade, location, mode }) => {
            const place = location.trim() ? ` in ${location.trim()}` : "";
            setToast(
              `Searching verified ${mode.toLowerCase()} tutors for ${subject}, ${grade}${place}.`
            );
          }}
        />
        <section id="tutors" className="mx-auto max-w-6xl px-4 pt-16">
          <Reveal>
            <SectionHeader
              eyebrow="Tutor Cards"
              title="Meet verified mentors"
              subtitle="Modern tutor cards with subjects, ratings, and quick actions."
            />
          </Reveal>
          <div className="mt-6">
            <InViewMount>
              <TutorGrid
                tutors={tutors}
                onBook={(name) =>
                  setToast(
                    `Booked! We’ll connect you for a free demo with ${name}.`
                  )
                }
              />
            </InViewMount>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pt-16">
          <Reveal>
            <SectionHeader
              eyebrow="Why choose us"
              title="Premium outcomes, not generic tutoring"
              subtitle="Student-centric plans, transparent progress tracking, and exam-ready teaching."
            />
          </Reveal>
          <div className="mt-6">
            <WhyChooseUs />
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-4 pt-16">
          <Reveal>
            <SectionHeader
              eyebrow="Pricing Preview"
              title="Choose a plan that fits your learning goals"
              subtitle="Start with a free demo and upgrade to structured mentorship."
            />
          </Reveal>
          <div className="mt-6">
            <PricingPreview
              plans={pricingPlans}
              onSelect={(planName) =>
                setToast(`Excellent. ${planName} selected. Book your free demo to begin.`)
              }
            />
          </div>
        </section>

        <section id="testimonials" className="mx-auto max-w-6xl px-4 pt-16">
          <InViewMount>
            <TestimonialsCarousel />
          </InViewMount>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 pt-16">
          <Reveal>
            <SectionHeader
              eyebrow="Contact"
              title="Ready for personalised learning?"
              subtitle="Book a free demo and get a tutor shortlist based on your goals."
            />
          </Reveal>
        </section>

        <Footer
          onPrimaryCTA={() =>
            setToast(
              "Thanks! Our advisor will reach out to schedule your free demo shortly."
            )
          }
        />
      </main>

      <IMWhatsAppButton />

      <div className="fixed right-0 top-20 z-50 flex w-full justify-center px-4">
        <AnimatePresence mode="wait">
          {toast ? (
            <Toast message={toast} onClose={() => setToast(null)} />
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
