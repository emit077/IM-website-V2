"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal, useReducedMotion } from "./scrollUtils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ArrowRightIcon, ShieldIcon } from "@/components/shared/SvgIcons";

function formatIN(num: number) {
  return new Intl.NumberFormat("en-IN").format(num);
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function AnimatedCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;

    const start = performance.now();
    const duration = 900;

    let raf = 0;
    const tick = (now: number) => {
      const t = clamp((now - start) / duration, 0, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value]);

  const displayCount = reduced ? value : count;

  return (
    <div ref={ref} className="flex flex-col">
      <div className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {formatIN(displayCount)}
        {suffix}
      </div>
      <div className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">
        {label}
      </div>
    </div>
  );
}

export function TrustScaleSection({
  onBookFreeDemo,
}: {
  onBookFreeDemo: () => void;
}) {
  const stats = useMemo(
    () => [
      { value: 50000, suffix: "+", label: "Students" },
      { value: 500000, suffix: "+", label: "Tutors" },
      { value: 5000000, suffix: "+", label: "Sessions" },
    ],
    []
  );

  return (
    <section className="mx-auto max-w-6xl px-4 pt-16">
      <Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/12 bg-white/45 p-6 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/25">
            <SectionHeader
              eyebrow="Trust & scale"
              title="Learn with verified mentors"
              subtitle="Trusted by families across India. Built for academic results."
            />
          </div>
          <div className="col-span-2 md:col-span-2">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((s) => (
                <AnimatedCounter
                  key={s.label}
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                />
              ))}
            </div>

            <div className="mt-6 rounded-[2rem] border border-white/12 bg-white/45 p-6 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/25">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-3 text-blue-700 ring-1 ring-blue-500/15 dark:text-blue-200">
                  <ShieldIcon />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-zinc-950 dark:text-zinc-50">
                    Verified & performance-reviewed tutors
                  </div>
                  <div className="mt-2 text-sm font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300">
                    We match students with mentors who teach clearly, track progress
                    weekly, and keep learning on schedule.
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={onBookFreeDemo}
                      className="inline-flex h-11 items-center justify-center rounded-2xl bg-zinc-950 px-5 text-sm font-extrabold text-white ring-1 ring-white/10 transition hover:opacity-95 dark:bg-white dark:text-zinc-950"
                    >
                      Book Free Demo
                      <ArrowRightIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

