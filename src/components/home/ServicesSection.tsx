"use client";

import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "./scrollUtils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  ArrowRightIcon,
  FocusIcon,
  GlobeIcon,
  HomeIcon,
  HomePlusIcon,
  TrainIcon,
} from "@/components/shared/SvgIcons";

function ServicesGrid() {
  const services = [
    {
      title: "Home Tutor",
      desc: "1:1 learning at your pace with structured homework and progress tracking.",
      icon: <HomeIcon />,
    },
    {
      title: "Online Tutor",
      desc: "Live classes with interactive notes, quizzes, and recorded practice clips.",
      icon: <GlobeIcon />,
    },
    {
      title: "Shadow Tutor",
      desc: "Extra academic support to keep your student focused and consistent.",
      icon: <FocusIcon />,
    },
    {
      title: "Travel Tutor",
      desc: "Mentors travel to your location for flexible learning schedules.",
      icon: <TrainIcon />,
    },
    {
      title: "Live-In Tutor",
      desc: "For long-term coaching with daily guidance, revision, and habit building.",
      icon: <HomePlusIcon />,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <motion.div
          key={s.title}
          whileHover={{ y: -6, boxShadow: "0 18px 60px rgba(59,130,246,0.18)" }}
          transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
          className="group rounded-[2rem] border border-white/12 bg-white/45 p-6 shadow-sm backdrop-blur-xl transition dark:border-white/15 dark:bg-zinc-950/25"
        >
          <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-3 text-blue-700 ring-1 ring-blue-500/15 transition group-hover:text-blue-500 dark:text-blue-200">
            {s.icon}
          </div>
          <div className="mt-4 text-lg font-extrabold text-zinc-950 dark:text-zinc-50">
            {s.title}
          </div>
          <div className="mt-2 text-sm font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300">
            {s.desc}
          </div>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 transition group-hover:text-blue-600 dark:text-blue-200">
            Explore{" "}
            <span className="translate-y-[1px]">
              <ArrowRightIcon />
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 pt-16">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeader
              eyebrow="Services"
              title="Flexible tutoring formats"
              subtitle="Choose home or online—Indian Mentors matches verified mentors with a clear plan."
            />
          </Reveal>
        </div>
        <div className="lg:col-span-12">
          <ServicesGrid />
        </div>
      </div>
    </section>
  );
}

