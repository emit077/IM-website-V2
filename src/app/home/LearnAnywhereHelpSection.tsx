"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Code2, GraduationCap, Lightbulb, Ruler } from "lucide-react";
import { withBasePath } from "@/lib/withBasePath";

const QUICK_WINS = [
  "Verified tutors matched to your board, grade, and goals",
  "Live online or at-home sessions — you pick the format",
  "Progress you can track; support when you need it",
];

function FloatingIcon({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={`pointer-events-none absolute flex h-11 w-11 items-center justify-center rounded-2xl border border-white/80 bg-white/95 text-blue-600 shadow-lg shadow-blue-500/15 sm:h-12 sm:w-12 ${className}`}
      initial={reduced ? false : { opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45, ease: "easeOut" }}
      aria-hidden
    >
      {children}
    </motion.div>
  );
}

export function LearnAnywhereHelpSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative px-4 py-14 md:py-20" aria-labelledby="learn-anywhere-heading">
      {/* Pastel background shapes — theme blues */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-24 top-20 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
        <div className="absolute -right-16 top-40 h-48 w-48 rounded-full bg-indigo-200/20 blur-3xl" />
        <div className="absolute bottom-32 left-1/3 h-40 w-40 rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        {/* ── Split: image left, copy right ── */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative order-2 min-h-[260px] lg:order-1">
            <motion.div
              className="relative mx-auto max-w-lg lg:mx-0"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-blue-100/80 bg-white shadow-[0_24px_60px_rgba(37,99,235,0.12)] ring-1 ring-blue-500/5">
                <Image
                  src={withBasePath("/assets/landing-page-1/hero.png")}
                  alt="Students and mentors learning together with Indian Mentors"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  unoptimized
                  priority={false}
                />
              </div>
              <FloatingIcon className="-left-2 top-6 sm:-left-3 sm:top-8" delay={0.1}>
                <Ruler className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
              </FloatingIcon>
              <FloatingIcon className="-right-1 top-1/3 sm:right-0" delay={0.2}>
                <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
              </FloatingIcon>
              <FloatingIcon className="bottom-8 left-2 sm:bottom-10 sm:left-4" delay={0.25}>
                <Code2 className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
              </FloatingIcon>
              <FloatingIcon className="bottom-14 right-0 sm:bottom-16 sm:right-2" delay={0.15}>
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
              </FloatingIcon>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-extrabold uppercase tracking-widest text-blue-600/90">
              Why families choose us
            </p>
            <h2
              id="learn-anywhere-heading"
              className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl"
            >
              Learn from{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                anywhere
              </span>{" "}
              — with mentors who fit your rhythm.
            </h2>
            <p className="mt-4 text-pretty text-base font-medium leading-relaxed text-slate-600">
              Indian Mentors brings verified educators, structured plans, and real humans in the loop so
              students stay on track — whether you prefer home visits, online classes, or a mix of both.
            </p>
            <ul className="mt-6 space-y-2.5">
              {QUICK_WINS.map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-sm font-semibold text-slate-800 sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" strokeWidth={2} aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={withBasePath("/contact")}
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-extrabold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-700"
              >
                Book a free demo
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300/90 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:border-blue-300"
              >
                Meet our tutors
              </a>
            </div>
          </div>
        </div>

        {/* ── CTA band (reference “Happy to help”) — IM blues ── */}
        <motion.div
          className="relative mt-14 overflow-hidden rounded-[1.75rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-6 shadow-[0_24px_50px_rgba(37,99,235,0.3)] sm:mt-16 sm:rounded-3xl sm:p-8 md:p-10 lg:mt-20"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 10px)`,
            }}
            aria-hidden
          />
          <div className="pointer-events-none absolute -right-20 top-0 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute bottom-0 left-1/4 h-24 w-24 text-white/10" aria-hidden>
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
              <path d="M12 2l2.2 6.8H21l-5.5 4 2.1 6.4L12 16.2 6.4 19.2l2.1-6.4L3 8.8h6.8L12 2z" />
            </svg>
          </div>

          <div className="relative flex flex-col items-stretch gap-8 md:flex-row md:items-center md:gap-10">
            <div className="min-w-0 flex-1 text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">Happy to help you!</h3>
              <p className="mt-2 max-w-xl text-pretty text-sm font-medium leading-relaxed text-white/90 sm:text-base">
                Not sure which format or plan fits? Our team will walk you through options — no pressure,
                no spam, just clear next steps.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-extrabold text-white shadow-lg transition hover:bg-slate-900"
              >
                Speak to an expert
              </a>
            </div>
            <div className="relative mx-auto w-full max-w-sm shrink-0 md:max-w-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/20 bg-white/10">
                <Image
                  src={withBasePath("/assets/channel-partner/partner.webp")}
                  alt="Indian Mentors academic team"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 768px) 400px, 100vw"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
