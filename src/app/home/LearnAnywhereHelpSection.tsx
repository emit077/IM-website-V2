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

function FloatingIcon({ tone }: { tone: "purple" | "coral" }) {
  const fills =
    tone === "purple"
      ? ["#D1C4E9", "#B39DDB", "#9575CD"]
      : ["#FFCCBC", "#FF8A65", "#F4511E"];
  return (
    <svg viewBox="0 0 80 80" className="h-10 w-10" aria-hidden>
      <rect x="20" y="28" width="36" height="44" rx="4" fill={fills[0]} transform="rotate(-10 38 50)" />
      <rect x="24" y="24" width="36" height="44" rx="4" fill={fills[1]} transform="rotate(6 42 46)" />
      <rect x="22" y="20" width="36" height="44" rx="4" fill={fills[2]} />
      <path d="M28 34h24M28 42h16M28 50h20" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}
// function FloatingIcon({
//   children,
//   className,
//   delay = 0,
// }: {
//   children: ReactNode;
//   className: string;
//   delay?: number;
// }) {
//   const reduced = useReducedMotion();
//   return (
//     <motion.div
//       className={`pointer-events-none absolute flex h-11 w-11 items-center justify-center rounded-2xl border border-white/80 bg-white/95 text-blue-600 shadow-lg shadow-blue-500/15 sm:h-12 sm:w-12 ${className}`}
//       initial={reduced ? false : { opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ delay, duration: 0.45, ease: "easeOut" }}
//       aria-hidden
//     >
//       {children}
//     </motion.div>
//   );
// }

export function LearnAnywhereHelpSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative px-4 py-12 md:py-16" aria-labelledby="learn-anywhere-heading">
      {/* Pastel background shapes — theme blues */}
      {/* <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-24 top-20 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
        <div className="absolute -right-16 top-40 h-48 w-48 rounded-full bg-indigo-200/20 blur-3xl" />
        <div className="absolute bottom-32 left-1/3 h-40 w-40 rounded-full bg-blue-200/20 blur-3xl" />
      </div> */}

      <div className="relative mx-auto max-w-[1200px]">
        {/* ── Split: image left, copy right ── */}
        {/* <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
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
              Learn at{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                your comfort
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
        </div> */}

        {/* ── CTA band (reference “Happy to help”) — IM blues ── */}
        <motion.div
          className="relative overflow-hidden rounded-[1.25rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-5 pb-6 pt-5 shadow-[0_14px_36px_rgba(37,99,235,0.28)] md:overflow-visible md:rounded-2xl md:px-7 md:pb-6 md:pt-6 md:pr-[min(486px,38%)] lg:px-8 lg:pr-[min(537px,36%)]"
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
          <div className="pointer-events-none absolute -right-16 top-0 h-32 w-32 rounded-full bg-amber-300/20 blur-3xl md:h-36 md:w-36" aria-hidden />

          {/* Portrait: bottom+right aligned; tall frame lets the head extend above the card */}
          <div className="pointer-events-none absolute bottom-0 right-0 z-[2] hidden w-[min(486px,78%)] md:block md:w-[min(546px,38%)] lg:w-[min(597px,36%)]">
            <div className="relative h-[510px] w-full md:h-[543px] lg:h-[576px]">
              <div className="absolute bottom-0 right-0 h-[904px] w-full lg:h-[944px]">
                <Image
                  src={withBasePath("/assets/home/support-executive.png")}
                  alt="Indian Mentors support executive"
                  fill
                  className="object-contain object-right-bottom drop-shadow-[0_18px_28px_rgba(15,23,42,0.38)]"
                  sizes="(min-width: 1024px) 597px, (min-width: 768px) 546px, 486px"
                  unoptimized
                  priority={false}
                />
              </div>
            </div>
          </div>

          <div className="relative z-[1] flex flex-col gap-6 md:min-h-[198px] md:flex-row md:items-end md:gap-6 lg:min-h-[222px]">
            <div className="min-w-0 flex-1 pb-0 text-center md:text-left">
              <h3 className="text-xl font-extrabold text-white sm:text-2xl md:text-[1.65rem] lg:text-[1.75rem]">
                Happy to help you!
              </h3>
              <p className="mt-2 max-w-xl text-pretty text-xs font-medium leading-relaxed text-white/90 sm:text-sm md:mt-1.5 lg:max-w-lg">
                Not sure which format or plan fits? Our team will walk you through options — no pressure,
                no spam, just clear next steps.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-xs font-extrabold text-white shadow-lg transition hover:bg-slate-900 md:mt-5 md:px-6 md:py-3 md:text-sm"
              >
                Speak to an expert
              </a>
            </div>
            {/* Mobile: in-flow image; desktop uses absolute layer above */}
            <div className="relative mx-auto mt-2 h-[438px] w-full max-w-[504px] md:hidden">
              <Image
                src={withBasePath("/assets/home/support-executive.png")}
                alt="Indian Mentors support executive"
                fill
                className="object-contain object-bottom drop-shadow-[0_18px_28px_rgba(15,23,42,0.38)]"
                sizes="504px"
                unoptimized
                priority={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
