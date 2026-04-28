"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkle } from "lucide-react";
import { withBasePath } from "@/lib/withBasePath";

const SLIDES = [
  {
    id: "excellence",
    titleLead: "Smarter start.",
    titleRest: "Verified tutors + AI-matched learning.",
    bullets: [
      "Background-checked educators with clear qualification trails",
      "AI helps pair the right mentor to your child’s level and style",
      "Personalised roadmaps that track goals — not generic printouts",
    ],
    cta: { label: "Book a free demo", href: "/contact" },
    image: {
      src: "/assets/landing-page-1/hero.png",
      alt: "Students learning with Indian Mentors",
      className: "object-contain object-[center_15%] sm:object-center",
    },
  },
  {
    id: "experience",
    titleLead: "Full clarity.",
    titleRest: "Progress you can see and a schedule that fits home.",
    bullets: [
      "Syllabus-aligned sessions and transparent progress snapshots",
      "Flexible time slots for school, sports, and family routines",
      "Home, online, and blended options — you choose the format",
    ],
    cta: { label: "See how it works", href: "/parent-student" },
    image: {
      src: "/assets/institutes/institutes.webp",
      alt: "Learning programmes and institutes",
      className: "object-cover object-center",
    },
  },
  {
    id: "support",
    titleLead: "Always backed.",
    titleRest: "People + systems on your side.",
    bullets: [
      "Tutor replacement support if fit or schedule changes",
      "ERP-based attendance and session records you can trust",
      "Academic and care teams in a safe, result-focused environment",
    ],
    cta: { label: "Talk to us", href: "#contact" },
    image: {
      src: "/assets/channel-partner/partner.webp",
      alt: "Support and partnership with Indian Mentors",
      className: "object-cover object-top",
    },
  },
] as const;

const N = SLIDES.length;

function ctaHref(href: string) {
  if (href.startsWith("#")) return href;
  return withBasePath(href);
}

export function WhatsNewOnIndianMentorsSection() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  const go = useCallback((dir: -1 | 1) => {
    setIndex((i) => (i + dir + N) % N);
  }, []);

  return (
    <section
      className="px-4 py-12 md:py-16"
      aria-roledescription="carousel"
      aria-label="What is new on Indian Mentors"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-6 text-center sm:mb-8 md:mb-10">
          <h2 className="text-2xl font-extrabold tracking-tight text-blue-950 sm:text-3xl md:text-4xl">
            What&apos;s <span className="inline-block" aria-hidden>✨</span> new on{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Indian Mentors
              </span>
              <span
                className="absolute -bottom-0.5 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-amber-300/90 via-amber-200 to-amber-400/80 opacity-90"
                aria-hidden
              />
            </span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm font-medium text-slate-600 sm:text-base">
            Highlights from our platform and programmes — use the arrows to explore.
          </p>
        </div>

        <div className="relative px-2 sm:px-10 md:px-12">
          <div className="overflow-hidden rounded-[1.5rem] sm:rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
              style={{
                width: `${N * 100}%`,
                transform: `translateX(-${(index * 100) / N}%)`,
              }}
            >
              {SLIDES.map((slide) => (
                <div
                  key={slide.id}
                  className="shrink-0"
                  style={{ width: `${100 / N}%` }}
                  aria-hidden={SLIDES[index]!.id !== slide.id}
                >
                  <div
                    className="relative h-[min(24rem,78vw)] min-h-[20.5rem] overflow-hidden sm:min-h-[22rem] md:h-[20rem] md:min-h-0"
                    style={{
                      background: `
                        radial-gradient(ellipse 90% 80% at 85% 15%, rgba(255,255,255,0.18), transparent 52%),
                        radial-gradient(ellipse 65% 50% at 15% 85%, rgba(99,102,241,0.22), transparent 50%),
                        linear-gradient(135deg, #1d4ed8 0%, #3730a3 42%, #2563eb 100%)
                      `,
                    }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-35"
                      style={{
                        backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.05) 0deg, transparent 7deg)`,
                      }}
                      aria-hidden
                    />
                    <div className="absolute right-2 top-2 z-10 sm:right-3 sm:top-3">
                      <div className="relative h-7 w-24 opacity-95 sm:h-8 sm:w-28">
                        <Image
                          src={withBasePath("/assets/logo/im-logo.png")}
                          alt="Indian Mentors"
                          fill
                          className="object-contain object-right brightness-0 invert"
                          unoptimized
                        />
                      </div>
                    </div>

                    <div className="relative z-[1] flex h-full flex-col p-3.5 sm:flex-row sm:items-stretch sm:p-5 md:p-6">
                      <div className="flex min-w-0 flex-1 flex-col sm:max-w-[58%] sm:pr-2">
                        <h3 className="pt-0.5 text-base font-extrabold leading-snug text-white sm:pt-0 sm:text-lg md:text-xl">
                          <span className="text-amber-200 drop-shadow-sm">{slide.titleLead}</span>{" "}
                          {slide.titleRest}
                        </h3>
                        <ul className="mt-2.5 flex flex-1 flex-col gap-2 sm:mt-3 sm:gap-2.5">
                          {slide.bullets.map((line) => (
                            <li
                              key={line}
                              className="flex gap-2 text-[12.5px] font-semibold leading-snug text-white/95 sm:text-sm"
                            >
                              <Sparkle
                                className="mt-0.5 h-4 w-4 shrink-0 text-amber-300"
                                fill="currentColor"
                                strokeWidth={1.25}
                                aria-hidden
                              />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                        <a
                          href={ctaHref(slide.cta.href)}
                          className="mt-3 inline-flex w-fit items-center justify-center rounded-full border border-white/20 bg-slate-950/35 px-4 py-2 text-xs font-extrabold text-white shadow-lg backdrop-blur-sm transition hover:bg-slate-950/55 sm:mt-4 sm:px-5 sm:py-2.5 sm:text-sm"
                        >
                          {slide.cta.label}
                        </a>
                      </div>
                      <div className="relative mt-2.5 min-h-[8.5rem] flex-1 sm:mt-0 sm:min-h-0 sm:pl-1">
                        <div className="absolute inset-0 min-h-[8.5rem] sm:min-h-0">
                          <Image
                            src={withBasePath(slide.image.src)}
                            alt={slide.image.alt}
                            fill
                            sizes="(min-width: 768px) 360px, 100vw"
                            className={slide.image.className}
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5 sm:mt-5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-blue-600" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </div>

          <motion.button
            type="button"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg ring-1 ring-white/15 sm:h-10 sm:w-10"
            aria-label="Next slide"
            whileTap={reduced ? undefined : { scale: 0.95 }}
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.5} aria-hidden />
          </motion.button>
          <motion.button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-800 shadow-md sm:h-10 sm:w-10"
            aria-label="Previous slide"
            whileTap={reduced ? undefined : { scale: 0.95 }}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} aria-hidden />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
