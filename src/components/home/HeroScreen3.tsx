"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  ArrowRightIcon,
  CapIcon,
  ChartIcon,
  CheckMiniIcon,
  HomeIcon,
  ShieldIcon,
  SparklesIcon,
  UsersIcon,
} from "@/components/shared/SvgIcons";
import { HeroSlider } from "./HeroSlider";

type Audience = "families" | "tutors";

function GridBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.55] dark:opacity-40"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(37,99,235,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.1) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage:
          "radial-gradient(ellipse 80% 70% at 50% 0%, black 20%, transparent 75%)",
      }}
    />
  );
}

function GlowOrbs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -left-[20%] top-[10%] h-[min(520px,55vw)] w-[min(520px,55vw)] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--primary) 35%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute -right-[15%] bottom-[5%] h-[min(420px,45vw)] w-[min(420px,45vw)] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, #0ea5e9 22%, transparent), transparent 72%)",
        }}
      />
    </div>
  );
}

const copy: Record<
  Audience,
  {
    headline: React.ReactNode;
    sub: string;
    bullets: { icon: React.ReactNode; text: string }[];
    primary: { label: string };
    secondary: { label: string };
  }
> = {
  families: {
    headline: (
      <>
        Home & online tutors
        <span className="text-blue-700 dark:text-blue-300">
          {" "}
          who fit your child
        </span>
      </>
    ),
    sub:
      "Verified mentors, personalised plans, and a free demo—so every student gets the attention they deserve.",
    bullets: [
      {
        icon: <ShieldIcon />,
        text: "Background-checked & curriculum-aligned",
      },
      { icon: <HomeIcon />, text: "At your door or live on screen" },
      { icon: <ChartIcon />, text: "Weekly progress you can see" },
    ],
    primary: { label: "Browse verified tutors" },
    secondary: { label: "WhatsApp us" },
  },
  tutors: {
    headline: (
      <>
        Teach with Indian Mentors
        <span className="text-blue-700 dark:text-blue-300">
          {" "}
          — grow your practice
        </span>
      </>
    ),
    sub:
      "Join our marketplace: matched students, fair visibility, and tools so you focus on teaching—not admin.",
    bullets: [
      {
        icon: <UsersIcon />,
        text: "Steady leads from serious families",
      },
      { icon: <SparklesIcon />, text: "Profile, ratings & demo support" },
      { icon: <CapIcon />, text: "Grades & boards we already serve" },
    ],
    primary: { label: "Apply to teach" },
    secondary: { label: "See plans & earnings" },
  },
};

export function HeroScreen3() {
  const [audience, setAudience] = useState<Audience>("families");

  const waBase = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999";

  const links = useMemo(() => {
    const studentMsg =
      "Hi! I'd like a free demo and help finding a home or online tutor for my child.";
    return {
      familiesPrimary: "#tutors",
      familiesWa: `https://wa.me/${waBase}?text=${encodeURIComponent(studentMsg)}`,
    };
  }, [waBase]);

  const c = copy[audience];
  const primaryHref = audience === "families" ? links.familiesPrimary : "/tutor";
  const secondaryHref =
    audience === "families" ? links.familiesWa : "#pricing";

  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden border-b border-zinc-200/60 dark:border-white/10"
      style={{
        background:
          "linear-gradient(165deg, var(--primary-soft) 0%, var(--background) 48%, color-mix(in srgb, var(--primary-soft) 40%, var(--background)) 100%)",
      }}
    >
      <GlowOrbs />
      <GridBackdrop />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:pb-24 lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.02fr] lg:gap-12 xl:gap-16">
          {/* Copy column */}
          <div className="order-2 flex flex-col lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/15 bg-white/70 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-blue-800 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/50 dark:text-blue-200"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]"
                aria-hidden
              />
              India&apos;s trusted edtech partner
            </motion.div>

            {/* Audience switch */}
            <LayoutGroup>
              <div
                className="mt-6 flex rounded-2xl border border-zinc-200/80 bg-white/60 p-1 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/40"
                role="tablist"
                aria-label="Choose student or tutor journey"
              >
                {(
                  [
                    ["families", "Students & parents"] as const,
                    ["tutors", "Tutors"] as const,
                  ] as const
                ).map(([key, label]) => {
                  const active = audience === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      id={`hero-tab-${key}`}
                      onClick={() => setAudience(key)}
                      className={[
                        "relative flex-1 rounded-xl px-3 py-2.5 text-center text-sm font-extrabold transition",
                        active
                          ? "text-zinc-950 dark:text-zinc-50"
                          : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200",
                      ].join(" ")}
                    >
                      {active ? (
                        <motion.span
                          layoutId="hero-audience-pill"
                          className="absolute inset-0 -z-10 rounded-xl border border-blue-500/20 shadow-sm"
                          style={{
                            background:
                              "linear-gradient(135deg, color-mix(in srgb, var(--primary) 14%, white), color-mix(in srgb, var(--primary) 6%, white))",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 34,
                          }}
                        />
                      ) : null}
                      {label}
                    </button>
                  );
                })}
              </div>
            </LayoutGroup>

            <div className="mt-6 min-h-[200px] sm:min-h-[168px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={audience}
                  role="tabpanel"
                  aria-labelledby={`hero-tab-${audience}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <h1 className="text-balance text-3xl font-extrabold leading-[1.08] tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[2.35rem] xl:text-5xl">
                    {c.headline}
                  </h1>
                  <p className="mt-4 max-w-xl text-pretty text-base font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg">
                    {c.sub}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <ul className="mt-6 flex flex-col gap-3 sm:mt-7">
              {c.bullets.map((b) => (
                <li
                  key={b.text}
                  className="flex items-start gap-3 text-sm font-semibold text-zinc-700 dark:text-zinc-200"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 ring-1 ring-blue-500/15 dark:text-blue-300">
                    {b.icon}
                  </span>
                  {b.text}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <motion.a
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-extrabold shadow-lg ring-1 ring-white/20 transition hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:ring-white/10"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary), color-mix(in srgb, var(--primary) 75%, #0f172a))",
                  color: "var(--primary-foreground)",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {c.primary.label}
                <ArrowRightIcon />
              </motion.a>
              <a
                href={secondaryHref}
                {...(audience === "families"
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-200/90 bg-white/80 px-6 py-3.5 text-sm font-extrabold text-zinc-800 shadow-sm backdrop-blur transition hover:bg-white dark:border-white/15 dark:bg-zinc-950/50 dark:text-zinc-100 dark:hover:bg-zinc-950/70"
              >
                {c.secondary.label}
                <ArrowRightIcon />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-zinc-200/60 pt-6 text-[11px] font-bold uppercase tracking-wide text-zinc-500 dark:border-white/10 dark:text-zinc-400">
              <span className="inline-flex items-center gap-1.5">
                <CheckMiniIcon />
                Free demo
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckMiniIcon />
                Pan-India
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckMiniIcon />
                Boards & competitive exams
              </span>
            </div>
          </div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/15 blur-2xl lg:-inset-6"
              />
              <HeroSlider className="relative h-[200px] sm:h-[300px] md:h-[380px] lg:h-[min(420px,42vh)]" />
            </div>
            <p className="mt-4 text-center text-xs font-semibold text-zinc-500 dark:text-zinc-400 lg:text-left">
              Real classrooms, real outcomes—matched to your goals.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
