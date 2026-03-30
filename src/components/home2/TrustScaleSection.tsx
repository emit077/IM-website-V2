"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal, useReducedMotion } from "@/components/home/scrollUtils";
import {
  ArrowRightIcon,
  ChalkboardStatIcon,
  ClockIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/shared/SvgIcons";

function formatIN(num: number) {
  return new Intl.NumberFormat("en-IN").format(num);
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

type StatIcon = React.ComponentType;

function AnimatedCounter({
  value,
  suffix = "",
  label,
  icon: Icon,
}: {
  value: number;
  suffix?: string;
  label: string;
  icon: StatIcon;
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
    <div ref={ref} className="flex flex-col items-center justify-center">
      <div
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 text-zinc-100 shadow-md ring-1 ring-zinc-950/20 dark:bg-zinc-950 dark:text-zinc-200 dark:ring-white/10 [&_svg]:h-6 [&_svg]:w-6"
        aria-hidden
      >
        <Icon />
      </div>
      <div className="text-4xl font-semibold tabular-nums tracking-tight text-zinc-900 dark:text-zinc-50">
        {formatIN(displayCount)}
        {suffix ? (
          <span className="text-blue-700 dark:text-sky-400">{suffix}</span>
        ) : null}
      </div>
      <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-400">
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
    () =>
      [
        {
          value: 50000,
          suffix: "+",
          label: "Students",
          icon: UsersIcon,
        },
        {
          value: 500000,
          suffix: "+",
          label: "Tutors",
          icon: ChalkboardStatIcon,
        },
        {
          value: 5000000,
          suffix: "+",
          label: "Sessions",
          icon: ClockIcon,
        },
      ] as const,
    []
  );

  return (
    <section className="border-y border-zinc-200/90 bg-zinc-50/80 py-16 dark:border-zinc-800/80 dark:bg-zinc-950/40">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="">
            <div className="mx-auto mb-12 max-w-[1200px] text-center">
              <h2 className="mt-3 text-3xl font-extrabold text-[#1a2744] sm:text-5xl dark:text-zinc-50">
                Learn with verified mentors
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-zinc-400">
                Trusted by families across India. Built for academic results.
              </p>
            </div>
            <div className="col-span-2 md:col-span-2">
              <div className="grid gap-6 sm:grid-cols-3">
                {stats.map((s) => (
                  <AnimatedCounter
                    key={s.label}
                    value={s.value}
                    suffix={s.suffix}
                    label={s.label}
                    icon={s.icon}
                  />
                ))}
              </div>

              <div className="mt-8 rounded-[2rem] border border-white/12 bg-white/45 p-8 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/25">
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
      </div>
    </section>
  );
}

