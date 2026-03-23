"use client";

import React from "react";
import { motion } from "framer-motion";
import { InViewMount, Reveal, useReducedMotion } from "./scrollUtils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  CheckMiniIcon,
  ClockIcon,
  ChartIcon,
  DashboardIcon,
  FileIcon,
} from "@/components/shared/SvgIcons";

function ERPFeature({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/45 p-4 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/25">
      <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-2 text-blue-700 ring-1 ring-blue-500/15 dark:text-blue-200">
        {icon}
      </div>
      <div>
        <div className="text-sm font-extrabold text-zinc-900 dark:text-zinc-50">
          {title}
        </div>
        <div className="mt-1 text-xs font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300">
          {desc}
        </div>
      </div>
    </div>
  );
}

function SkeletonRow({ reduced }: { reduced: boolean }) {
  const w1 = 78;
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-black/5 bg-white/60 px-4 py-3 dark:border-white/10 dark:bg-white/5">
      <div className="min-w-0">
        <div className="truncate text-xs font-extrabold text-zinc-900 dark:text-zinc-50">
          Practice sheet • {w1} mins
        </div>
        <div className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
          Submitted by {Math.max(3, Math.floor(w1 / 10))}/5
        </div>
      </div>
      <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 ring-1 ring-blue-500/15 flex items-center justify-center text-blue-700 dark:text-blue-200">
        <motion.div
          animate={
            reduced ? undefined : { rotate: [0, 10, 0], scale: [1, 1.06, 1] }
          }
          transition={{
            duration: 2.2,
            repeat: reduced ? 0 : Infinity,
            ease: "easeInOut",
          }}
        >
          <CheckMiniIcon />
        </motion.div>
      </div>
    </div>
  );
}

function ERPPreview() {
  const reduced = useReducedMotion();
  const bars = [18, 26, 22, 34, 28, 40, 33];

  return (
    <div className="rounded-[2rem] border border-white/12 bg-white/45 p-4 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/25">
      <div className="grid gap-4 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="text-2xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
              ERP dashboard preview for mentors & students
            </div>
            <div className="mt-2 text-sm font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300">
              Attendance tracking, performance charts, and homework—so learning
              stays consistent.
            </div>
          </Reveal>

          <div className="mt-4 grid gap-2">
            <ERPFeature
              title="Attendance tracking"
              desc="On-time session insights and class updates."
              icon={<ClockIcon />}
            />
            <ERPFeature
              title="Performance charts"
              desc="Track progress across topics and test scores."
              icon={<ChartIcon />}
            />
            <ERPFeature
              title="Homework workflows"
              desc="Assignment schedules with submissions and feedback."
              icon={<FileIcon />}
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-[1.7rem] border border-black/5 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/60 px-4 py-3 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-2 text-blue-700 ring-1 ring-blue-500/15 dark:text-blue-200">
                  <DashboardIcon />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-zinc-900 dark:text-zinc-50">
                    Mentor dashboard
                  </div>
                  <div className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                    Live view for academic week
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 px-3 py-2 text-xs font-extrabold text-emerald-700 dark:text-emerald-300">
                On track
              </div>
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-black/5 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-extrabold text-zinc-900 dark:text-zinc-50">
                      Performance
                    </div>
                    <div className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                      Topic-wise improvement
                    </div>
                  </div>
                  <div className="mt-4 flex items-end gap-2">
                    {bars.map((h, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ height: 8, opacity: 0.6 }}
                        animate={
                          reduced ? { height: h, opacity: 1 } : { height: h, opacity: 1 }
                        }
                        transition={{
                          duration: 0.7,
                          delay: idx * 0.06,
                          ease: [0.2, 0.8, 0.2, 1],
                        }}
                        className="flex-1 rounded-xl bg-gradient-to-b from-blue-500/70 to-blue-500/55"
                        style={{ height: h }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-4 gap-2 text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
                    {["Maths", "Science", "English", "CS"].map((t) => (
                      <div
                        key={t}
                        className="truncate rounded-lg bg-black/5 px-2 py-1 dark:bg-white/10"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-black/5 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-extrabold text-zinc-900 dark:text-zinc-50">
                      Homework
                    </div>
                    <div className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                      Due this week
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <SkeletonRow reduced={reduced} />
                    <SkeletonRow reduced={reduced} />
                    <SkeletonRow reduced={reduced} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-black/5 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-extrabold text-zinc-900 dark:text-zinc-50">
                  Attendance
                </div>
                <div className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                  Week overview
                </div>
              </div>
              <div className="mt-3 grid grid-cols-7 gap-2">
                {[2, 5, 3, 6, 4, 6, 5].map((n, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-black/5 p-2 text-center text-[11px] font-extrabold text-zinc-700 dark:bg-white/10 dark:text-zinc-200"
                  >
                    {
                      ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][idx]
                    }{" "}
                    <div className="mt-1 text-xs text-blue-700 dark:text-blue-200">
                      {n}/7
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/10 blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ERPDashboardSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16">
      <Reveal>
        <SectionHeader
          eyebrow="ERP Dashboard"
          title="Modern tracking for mentors and students"
          subtitle="Attendance, performance charts, and homework—one connected dashboard."
        />
      </Reveal>
      <div className="mt-6">
        <InViewMount>
          <ERPPreview />
        </InViewMount>
      </div>
    </section>
  );
}

