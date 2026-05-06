"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { withBasePath } from "@/lib/withBasePath";
import { ShieldIcon } from "@/components/shared/SvgIcons";
import { SectionHeading } from "@/components/shared/SectionHeading";

type StatDef = {
  id: "students" | "tutors" | "sessions" | "satisfaction";
  value: number;
  line: string;
};

const STATS: StatDef[] = [
  { id: "students", value: 50_000, line: "active students learning every month" },
  { id: "tutors", value: 500_000, line: "verified tutors across every subject" },
  { id: "sessions", value: 5_000_000, line: "sessions delivered since 2018" },
  { id: "satisfaction", value: 98, line: "satisfaction rate from verified reviews" },
];

function formatFigure(stat: StatDef, shown: number): { num: string; suffix: string } {
  switch (stat.id) {
    case "students":
      return { num: `${Math.max(0, Math.round(shown / 1000))}K`, suffix: "+" };
    case "tutors":
      return { num: `${Math.max(0, Math.round(shown / 100_000))}`, suffix: "+ lakh" };
    case "sessions":
      return { num: `${Math.max(0, Math.round(shown / 100_000))}`, suffix: "+ lakh" };
    case "satisfaction":
      return { num: `${Math.min(100, Math.round(shown))}`, suffix: "%" };
    default:
      return { num: "", suffix: "" };
  }
}

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
    const ms = 1150;
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

function StatBlock({ stat, reduced, i }: { stat: StatDef; reduced: boolean; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-45px" });
  const n = useCountUp(stat.value, inView && !reduced);
  const shown = reduced && inView ? stat.value : n;
  const { num, suffix } = formatFigure(stat, shown);

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-45px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
      className="relative border-l-[3px] border-blue-600 pl-5 md:pl-6"
    >
      <p className="flex flex-wrap items-baseline gap-x-1 text-[clamp(1.875rem,4.5vw,2.875rem)] font-bold leading-[1.08] tracking-tight text-[#0c1929]">
        <span className="tabular-nums">{num}</span>
        <span className="text-[0.92em] font-bold text-blue-600">{suffix}</span>
      </p>
      <p className="mt-4 max-w-[17rem] text-[15px] font-normal leading-snug text-slate-600">{stat.line}</p>
    </motion.div>
  );
}

export function TrustScaleSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section aria-labelledby="trust-scale-heading" className="relative overflow-hidden bg-[#f8fafc] px-4 py-14 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 15%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 15%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1180px]">
        <SectionHeading
          id="trust-scale-heading"
          align="left"
          label="Trusted across India"
          title="Impact at a glance"
          sub="Making tutoring trusted and accessible across the globe — measurable scale you can share with families and institutions."
          className="mb-10 max-w-3xl md:mb-12 [&_h2]:text-left [&_p]:mx-0 [&_p]:max-w-none"
          titleClassName="!bg-none !bg-clip-border !text-[#0c1929]"
          subClassName="text-left text-[15px] leading-relaxed text-slate-600"
        />

        <div className="overflow-hidden rounded-[1.65rem] border border-slate-200/95 bg-white shadow-[0_18px_50px_-12px_rgba(15,23,42,0.1)] ring-1 ring-slate-900/[0.03]">
          <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-500" aria-hidden />

          <div className="grid lg:grid-cols-[1fr_minmax(260px,34%)]">
            <div className="relative px-6 py-10 md:px-10 md:py-12 lg:py-14 lg:pr-12">
              <div
                className="pointer-events-none absolute right-4 top-8 hidden h-[220px] w-[48%] max-w-[340px] opacity-[0.35] lg:block"
                aria-hidden
                style={{
                  backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
                  backgroundSize: "13px 13px",
                  maskImage: "radial-gradient(ellipse 90% 80% at 95% 25%, black 25%, transparent 75%)",
                  WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 95% 25%, black 25%, transparent 75%)",
                }}
              />

              <div className="relative z-[1] grid gap-10 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-12">
                {STATS.map((s, i) => (
                  <StatBlock key={s.id} stat={s} reduced={reduced} i={i} />
                ))}
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center border-t border-slate-100 bg-gradient-to-b from-slate-50 to-white px-8 py-12 lg:border-l lg:border-t-0 lg:py-10">
              <div className="relative aspect-square w-full max-w-[260px] lg:max-w-[280px]">
                <div
                  className="pointer-events-none absolute inset-[-12%] rounded-full bg-blue-400/15 blur-3xl"
                  aria-hidden
                />
                <Image
                  src={withBasePath("/assets/home/globe.png")}
                  alt="Indian Mentors trusted across India and beyond"
                  fill
                  unoptimized
                  sizes="280px"
                  className="object-contain object-center opacity-[0.92]"
                />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 p-8 shadow-[0_20px_50px_rgba(37,99,235,0.18)] sm:p-10"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
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
              href={withBasePath("/contact")}
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700"
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
