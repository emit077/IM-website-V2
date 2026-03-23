"use client";

import React, { useState } from "react";
import { motion, type MotionValue } from "framer-motion";
import { Reveal, useReducedMotion } from "./scrollUtils";
import { HeroScreen2 } from "./HeroScreen2";
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  ShieldIcon,
  SparklesIcon,
  TargetIcon,
  UsersIcon,
} from "@/components/shared/SvgIcons";

function MiniTrust({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-[2rem] border border-white/12 bg-white/45 p-4 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/30">
      <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-3 text-blue-700 ring-1 ring-blue-500/10 dark:text-blue-200">
        {icon}
      </div>
      <div className="mt-3 text-sm font-extrabold text-zinc-950 dark:text-zinc-50">
        {title}
      </div>
      <div className="mt-1 text-xs font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300">
        {desc}
      </div>
    </div>
  );
}

function HeroIllustration({ floatY }: { floatY: MotionValue<number> }) {
  return (
    <motion.div style={{ y: floatY }} className="relative h-full w-full">
      <HeroScreen2 />
    </motion.div>
  );
}

export function HeroScreen({
  onPrimaryCTA,
  onSecondaryCTA,
  onSubmitLead,
  floatY,
}: {
  onPrimaryCTA: () => void;
  onSecondaryCTA: () => void;
  onSubmitLead: (payload: { name: string; phone: string }) => void;
  floatY: MotionValue<number>;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] flex-col">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 left-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-emerald-500/15 to-blue-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-24 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-blue-500/20 to-pink-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex-1 max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid h-full items-stretch gap-10 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-6">
            <Reveal>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/55 px-4 py-2 backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/30"
              >
                <span className="text-blue-700 dark:text-blue-200">
                  <ShieldIcon />
                </span>
                <span className="text-xs font-extrabold tracking-wide text-zinc-950 dark:text-zinc-50">
                  Verified tutors
                </span>
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  • Verified home & online sessions
                </span>
              </motion.div>
            </Reveal>

            <div className="mt-6 flex flex-1 flex-col">
              <motion.h1
                className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
              >
                Personalised Learning for Academic Success
              </motion.h1>

              <motion.p
                className="mt-4 max-w-xl text-pretty text-lg font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.05,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
              >
                India’s Trusted Platform for Verified Home & Online Tutors
              </motion.p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <motion.button
                  type="button"
                  onClick={onPrimaryCTA}
                  whileTap={{ scale: 0.99 }}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-600 px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-500/20 ring-1 ring-white/15 transition hover:shadow-xl hover:shadow-blue-500/25"
                  animate={
                    reduced
                      ? undefined
                      : {
                        scale: [1, 1.02, 1],
                        boxShadow: [
                          "0 0 0 rgba(0,0,0,0)",
                          "0 0 28px rgba(59,130,246,0.22)",
                          "0 0 0 rgba(0,0,0,0)",
                        ],
                      }
                  }
                  transition={
                    reduced
                      ? undefined
                      : {
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                  }
                >
                  <SparklesIcon />
                  Book Free Demo
                </motion.button>

                <button
                  type="button"
                  onClick={onSecondaryCTA}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/60 px-5 py-3 text-sm font-extrabold text-zinc-900 transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-zinc-50"
                >
                  <UsersIcon />
                  Find Tutor / Become Tutor
                </button>
              </div>

              <div className="mt-8 grid gap-3 rounded-[2rem] border border-white/12 bg-white/55 p-4 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/30">
                <form
                  className="grid gap-3 sm:grid-cols-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const safeName = name.trim();
                    const safePhone = phone.replace(/\D/g, "");
                    if (safeName.length < 2 || safePhone.length < 10) return;
                    onSubmitLead({ name: safeName, phone: safePhone });
                    setName("");
                    setPhone("");
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-zinc-700 dark:text-zinc-200">
                      Your name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-11 rounded-xl border border-black/5 bg-white/70 px-4 text-sm font-semibold text-zinc-900 outline-none transition focus:border-blue-500/40 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-zinc-50"
                      placeholder="e.g., Ananya"
                      autoComplete="name"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-zinc-700 dark:text-zinc-200">
                      Phone number
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-11 rounded-xl border border-black/5 bg-white/70 px-4 text-sm font-semibold text-zinc-900 outline-none transition focus:border-blue-500/40 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-zinc-50"
                      placeholder="e.g., 9876543210"
                      inputMode="numeric"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 py-3 text-sm font-extrabold text-white shadow-sm ring-1 ring-white/10 transition hover:opacity-95 dark:bg-white dark:text-zinc-950"
                    >
                      <ClockIcon />
                      Get matched today
                      <ArrowRightIcon />
                    </button>
                    <div className="mt-2 text-center text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                      It takes less than 30 seconds.
                    </div>
                  </div>
                </form>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <Reveal>
                  <MiniTrust
                    icon={<ShieldIcon />}
                    title="Verified mentors"
                    desc="Background-checked and performance-reviewed."
                  />
                </Reveal>
                <Reveal delay={0.05}>
                  <MiniTrust
                    icon={<TargetIcon />}
                    title="Academic focus"
                    desc="Curriculum-aligned plans and practice."
                  />
                </Reveal>
                <Reveal delay={0.1}>
                  <MiniTrust
                    icon={<CalendarIcon />}
                    title="On-time sessions"
                    desc="Clear schedule with progress tracking."
                  />
                </Reveal>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-full w-full">
              <HeroIllustration floatY={floatY} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

