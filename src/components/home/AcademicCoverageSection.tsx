"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./scrollUtils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CheckMiniIcon } from "@/components/shared/SvgIcons";

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
    <div className="rounded-[2rem] border border-white/12 bg-white/45 p-4 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/25">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(t.id)}
            className={`rounded-2xl px-4 py-2 text-sm font-extrabold transition ${t.id === active
                ? "bg-gradient-to-br from-blue-600 to-blue-600 text-white shadow-md"
                : "border border-black/10 bg-white/60 text-zinc-900 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-zinc-50"
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-12 lg:items-start">
        <Reveal delay={0.05}>
          <div className="lg:col-span-5">
            <div className="text-2xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
              {selected.title}
            </div>
            <div className="mt-2 text-sm font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300">
              Your mentor builds a plan around your syllabus, pace, and exam
              readiness.
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.ul
              key={selected.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.25,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="grid gap-2 sm:grid-cols-2"
            >
              {selected.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 rounded-2xl border border-black/5 bg-white/60 px-4 py-3 text-sm font-semibold text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
                >
                  <CheckMiniIcon />
                  <span>{b}</span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
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

