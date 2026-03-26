"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./scrollUtils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ArrowRightIcon, CheckMiniIcon } from "@/components/shared/SvgIcons";

function CoverageTabs() {
  const tabs = [
    {
      id: "grades",
      label: "Grades",
      title: "Grades that move with your student",
      bullets: [
        "Grade 1-5: fundamentals + reading fluency",
        "Grade 6-8: concepts, problem-solving, revision loops",
        "Grade 9-10: board-focused strategy + mock tests",
        "Grade 11-12: deep understanding + IIT/JEE-style practice",
      ],
    },
    {
      id: "boards",
      label: "Boards",
      title: "Boards supported by verified mentors",
      bullets: [
        "CBSE: structured chapter planning and question practice",
        "ICSE: clarity-first teaching with writing-focused practice",
        "State Boards: syllabus-aligned schedules + revision plans",
      ],
    },
    {
      id: "subjects",
      label: "Subjects",
      title: "Subjects taught with mastery",
      bullets: [
        "Mathematics, Science, English, Social Science",
        "Computer Science basics to exam-level coding practice",
        "Optional: Physics/Chemistry deep dives for board years",
      ],
    },
  ] as const;

  const [active, setActive] = useState<(typeof tabs)[number]["id"]>(
    tabs[0].id
  );
  const selected = tabs.find((t) => t.id === active)!;

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-zinc-900/40 sm:p-5">
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-1 dark:border-white/10 dark:bg-zinc-900">
        <div className="grid min-w-[320px] grid-cols-3 gap-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(t.id)}
            className={`rounded-xl px-3 py-2 text-sm font-bold transition sm:px-4 ${
              t.id === active
                ? "bg-blue-600 text-white shadow-sm"
                : "text-zinc-700 hover:bg-white dark:text-zinc-200 dark:hover:bg-white/5"
            }`}
          >
            {t.label}
          </button>
        ))}
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-12 lg:items-start">
        <Reveal delay={0.05}>
          <div className="lg:col-span-4">
            <div className="text-xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-2xl">
              {selected.title}
            </div>
            <div className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Your mentor builds a plan around your syllabus, pace, and exam
              readiness.
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.ul
              key={selected.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.2,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-zinc-50 dark:divide-white/10 dark:border-white/10 dark:bg-zinc-900/40"
            >
              {selected.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 px-4 py-3 text-sm text-zinc-700 dark:text-zinc-200"
                >
                  <CheckMiniIcon />
                  <span>{b}</span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-100 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-200 dark:hover:bg-blue-500/20"
        >
          Talk to an academic advisor
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
}

export function AcademicCoverageSection() {
  return (
    <section id="coverage" className="mx-auto max-w-6xl px-4 pt-16">
      <Reveal>
        <SectionHeader
          eyebrow="Academic Coverage"
          title="Grades, boards, and subjects—covered"
          subtitle="A curriculum-aligned approach for academic confidence."
        />
      </Reveal>
      <div className="mt-6">
        <CoverageTabs />
      </div>
    </section>
  );
}

