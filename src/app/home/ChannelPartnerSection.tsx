"use client";

import { useCallback, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  FileCheck2,
  MessageCircle,
  Rocket,
  Share2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { withBasePath } from "@/lib/withBasePath";
import { SectionHeading } from "@/components/shared/SectionHeading";

const JOURNEY_STEPS = [
  {
    title: "Apply",
    detail: "Tell us about your market and experience.",
    Icon: FileCheck2,
  },
  {
    title: "Onboard",
    detail: "Panel access, training, and launch support.",
    Icon: Sparkles,
  },
  {
    title: "Grow",
    detail: "Enroll students with our tutors and platform.",
    Icon: Rocket,
  },
] as const;

const BENEFITS: readonly {
  title: string;
  summary: string;
  spotlight: string;
  Icon: LucideIcon;
}[] = [
    {
      title: "Decentralized growth",
      summary: "Regional operations, central brand trust.",
      spotlight:
        "You coordinate tutors, families, and institutions locally while Indian Mentors backs you with verified supply and a single operating system.",
      Icon: Share2,
    },
    {
      title: "Transparency",
      summary: "Reports you can stand behind.",
      spotlight:
        "Enrollment, session, and earnings visibility is built into the partner panel so you always know what is live, billed, and owed.",
      Icon: BarChart3,
    },
    {
      title: "Engagement",
      summary: "Relationships that convert.",
      spotlight:
        "Stay in direct touch with schools, parents, and tutors in your geography with messaging patterns that keep deals moving.",
      Icon: MessageCircle,
    },
    {
      title: "Scalability",
      summary: "Add territories without chaos.",
      spotlight:
        "Expand to adjacent areas or deeper verticals using the same workflows, contracts, and tutor bench — no parallel stack to maintain.",
      Icon: TrendingUp,
    },
  ];

export function ChannelPartnerSection() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const benefitRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const count = BENEFITS.length;
  const selected = BENEFITS[active]!;

  const focusBenefitIndex = useCallback(
    (index: number) => {
      const m = ((index % count) + count) % count;
      setActive(m);
      requestAnimationFrame(() => {
        benefitRefs.current[m]?.focus();
      });
    },
    [count],
  );

  const onBenefitsKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusBenefitIndex(active + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusBenefitIndex(active - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusBenefitIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusBenefitIndex(count - 1);
    }
  };

  return (
    <section
      className="relative px-4 py-14 md:py-20"
      aria-labelledby="partner-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50/80 via-white to-slate-50/90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[min(90vw,720px)] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-400/15 via-indigo-300/10 to-transparent blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-indigo-200/50 bg-gradient-to-br from-white via-white to-indigo-50/50 shadow-[0_28px_80px_rgba(49,46,129,0.09)] ring-1 ring-indigo-950/[0.04]"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(99, 102, 241, 0.12) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              maskImage:
                "radial-gradient(ellipse 80% 70% at 70% 20%, black 10%, transparent 65%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 70% at 70% 20%, black 10%, transparent 65%)",
            }}
            aria-hidden
          />

          <div className="relative z-10 flex flex-col gap-10 p-6 sm:p-8 md:gap-12 md:p-10 lg:p-12">
            <SectionHeading
              id="partner-heading"
              label="Partner programme"
              title="Build your region on a national tutoring brand"
              sub="Authorised channel partners run local growth with our verified educator network, platform, and operations playbook — you own the relationships; we carry the heavy lift."
              className="[&_h2]:text-balance"
            />
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 lg:items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-8">
                <Image
                  src={withBasePath("/assets/home/channel-partner.png")}
                  alt="Illustration of channel partners collaborating with Indian Mentors"
                  width={1000}
                  height={900}
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="h-full w-full object-contain object-center p-2"
                  unoptimized
                  priority={false}
                />
              </div>
              {/*  */}
              <div className="flex flex-col gap-8 lg:col-span-7">
                <div className="lg:hidden">
                  <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-b from-slate-50/90 to-white p-3 shadow-lg ring-1 ring-indigo-100/80">
                    <div className="relative aspect-[10/9] overflow-hidden rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50/80">
                      <Image
                        src={withBasePath("/assets/home/channel-partner.png")}
                        alt="Illustration of channel partners collaborating with Indian Mentors"
                        width={1000}
                        height={900}
                        sizes="100vw"
                        className="h-full w-full object-contain object-center p-2"
                        unoptimized
                        priority={false}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-indigo-700/85">
                    How it flows
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {JOURNEY_STEPS.map((step) => {
                      const StepIcon = step.Icon;
                      return (
                        <div
                          key={step.title}
                          className="flex gap-3 rounded-xl border border-slate-200/80 bg-white/80 p-4 shadow-sm"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-600/30">
                            <StepIcon className="h-5 w-5" aria-hidden />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-extrabold text-slate-900">
                              {step.title}
                            </p>
                            <p className="mt-1 text-xs leading-snug text-slate-600">
                              {step.detail}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className="relative overflow-hidden rounded-2xl border border-indigo-100/90 bg-white/90 p-5 shadow-inner shadow-indigo-950/[0.03] sm:p-6"
                  aria-live="polite"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-blue-500 to-indigo-400" aria-hidden />
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={active}
                      initial={reduced ? false : { opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduced ? undefined : { opacity: 0, x: -8 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="pl-4 sm:pl-5"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                      </div>
                      <p className="mt-3 text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
                        {selected.title}
                      </p>
                      <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                        {selected.spotlight}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex flex-col gap-3 border-t border-indigo-100/80 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <Link
                    href="/channel-partner"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition hover:from-indigo-700 hover:to-blue-700 hover:shadow-xl"
                  >
                    View partnership details
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300/90 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-indigo-300 hover:text-indigo-900"
                  >
                    Talk to partnerships
                  </a>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
