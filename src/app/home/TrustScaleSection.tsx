"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChalkboardStatIcon, ClockIcon, ShieldIcon, UsersIcon } from "@/components/shared/SvgIcons";
import { SectionHeading } from "@/components/shared/SectionHeading";

const STATS = [
  {
    value: 50_000,
    suffix: "+",
    label: "Active Students",
    sub: "learning every month",
    icon: UsersIcon,
    color: "bg-blue-100 text-blue-700",
    accent: "text-blue-600",
  },
  {
    value: 500_000,
    suffix: "+",
    label: "Verified Tutors",
    sub: "across every subject",
    icon: ChalkboardStatIcon,
    color: "bg-blue-100 text-blue-600",
    accent: "text-blue-600",
  },
  {
    value: 5_000_000,
    suffix: "+",
    label: "Sessions Delivered",
    sub: "since 2018",
    icon: ClockIcon,
    color: "bg-indigo-100 text-indigo-600",
    accent: "text-indigo-600",
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    sub: "from verified reviews",
    icon: ShieldIcon,
    color: "bg-indigo-100 text-indigo-700",
    accent: "text-indigo-600",
  },
] as const;

function usePrefersReducedMotion() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = () => setR(mq.matches);
    fn(); mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return r;
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

function StatCard({ value, suffix, label, sub, icon: Icon, color, accent, reduced, i }: (typeof STATS)[number] & { reduced: boolean; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const n = useCountUp(value, inView && !reduced);
  const shown = reduced && inView ? value : n;

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
      className="flex flex-col rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(37,99,235,0.12)]"
    >
      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${color} [&_svg]:h-5 [&_svg]:w-5`}>
        <Icon />
      </div>
      <p className="text-4xl font-extrabold tabular-nums tracking-tight text-blue-950">
        {new Intl.NumberFormat("en-IN").format(shown)}
        <span className={accent}>{suffix}</span>
      </p>
      <p className="mt-1.5 text-sm font-bold text-blue-950">{label}</p>
      <p className="mt-0.5 text-xs font-semibold text-slate-500">{sub}</p>
    </motion.div>
  );
}

export function TrustScaleSection({
  onBookFreeDemo = () => {},
}: {
  onBookFreeDemo?: () => void;
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <section aria-labelledby="trust-scale-heading" className="px-4 py-20">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <SectionHeading
          id="trust-scale-heading"
          label="Trusted across India"
          title="Numbers That Speak for Themselves"
          sub="Over half a million tutors and 50,000 students trust Indian Mentors to deliver consistent, measurable academic results."
          className="mb-12"
        />

        {/* Stat cards */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} reduced={reduced} i={i} />
          ))}
        </div>

        {/* Feature strip */}
        <motion.div
          className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 p-8 shadow-[0_20px_50px_rgba(37,99,235,0.2)] sm:p-10"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
        >
          {/* Dot decoration */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
            aria-hidden
          />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-400/20 text-blue-200 ring-1 ring-blue-300/40 [&_svg]:h-6 [&_svg]:w-6">
              <ShieldIcon />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-extrabold text-white">
                Verified &amp; Performance-Reviewed Tutors
              </h3>
              <p className="mt-2 max-w-2xl text-sm font-semibold leading-relaxed text-blue-100/85">
                Every tutor on Indian Mentors is background-checked, qualification-verified, and reviewed by our academic team. Students and parents get peace of mind — we handle the vetting so you can focus on learning.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Background Checked", "Subject Verified", "Demo Evaluated", "Parent Reviewed"].map((b) => (
                  <span key={b} className="rounded-full border border-blue-300/35 bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-100">
                    ✓ {b}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-[#FFD600] px-6 py-3 text-sm font-extrabold text-neutral-900 shadow-lg shadow-blue-900/20 transition hover:brightness-95"
            >
              Book Free Demo
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M5 12h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
