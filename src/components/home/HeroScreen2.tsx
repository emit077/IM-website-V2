"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckMiniIcon,
  SparklesIcon,
} from "@/components/shared/SvgIcons";
import { HeroSlider } from "./HeroSlider";

function GridBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-70"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(99,102,241,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.12) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
  );
}

export function HeroScreen2() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden border border-black/5 p-6 shadow-xl"
      style={{
        alignContent: "center",
        background:
          "linear-gradient(to bottom, var(--primary-soft), var(--background))",
      }}
    >
      <GridBackdrop />
      <div className="relative flex h-full flex-col items-center">
        <div className="flex-1 w-full flex flex-col items-center justify-center">
          {/* Hero Slider */}
          <motion.div initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.65,
              ease: [0.2, 0.8, 0.2, 1],
            }} className="relative sm:-mb-12 mb-10 w-full">
            <div className="mx-auto w-full max-w-6xl">
              <HeroSlider className="h-[150px] sm:h-[320px] md:h-[400px]" />
            </div>
          </motion.div>
        </div>
        {/* Hero Content */}
        <div
          className="z-10 rounded-3xl p-6 text-center shadow-lg backdrop-blur-xl"
          style={{
            background:
              "linear-gradient(to bottom right, color-mix(in srgb, var(--primary) 10%, white), color-mix(in srgb, var(--primary) 4%, white))",
          }}
        >
          <div className="text-[42px] font-extrabold leading-[1.05] tracking-tight text-zinc-900">
            <motion.h1
              className="text-balance text-3xl font-extrabold leading-[1.08] tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              Personalised Learning for
              <span className="text-blue-700"> Academic Success</span>
            </motion.h1>
            <motion.p
              className="mt-4 text-pretty text-lg font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300"
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
            <div className="mt-2 text-sm font-semibold text-zinc-700">
              Guiding Every Student Towards Academic Excellence
            </div>
          </div>
        </div>

        <div className="mt-8 relative pb-2 pt-2">
          <button
            type="button"
            className="mx-auto flex items-center gap-2 rounded-xl px-5 py-3 text-[13px] font-extrabold shadow-md ring-1 ring-white/10"
            style={{
              background:
                "linear-gradient(to bottom right, var(--primary), color-mix(in srgb, var(--primary) 82%, #0f172a))",
              color: "var(--primary-foreground)",
            }}
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/15">
              <SparklesIcon />
            </span>
            Book now before it&apos;s too late
          </button>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-semibold text-zinc-600">
            <span className="inline-flex items-center gap-2">
              <CheckMiniIcon />
              Led by Chemists
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckMiniIcon />
              Gain Practical Chemistry Skills
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckMiniIcon />
              Certificate Provided
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

