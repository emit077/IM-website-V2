"use client";

import { useCallback, useEffect, useState } from "react";
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
    heroSrc: "/assets/home/hero_carousel/webslide1.jpg",
    heroAlt: "Indian Mentors learning highlights — slide one",
    heroPosition: "object-cover object-center",
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
    heroSrc: "/assets/home/hero_carousel/webslide2.jpg",
    heroAlt: "Indian Mentors learning highlights — slide two",
    heroPosition: "object-cover object-center",
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
    heroSrc: "/assets/home/hero_carousel/webslide3.jpg",
    heroAlt: "Indian Mentors learning highlights — slide three",
    heroPosition: "object-cover object-center",
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

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % N);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [reduced]);

  return (
    <section
      className="px-4 py-12 md:py-16"
      aria-roledescription="carousel"
      aria-label="What is new on Indian Mentors"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-6 text-center sm:mb-8 md:mb-10">
          {/* <h2 className="text-2xl font-extrabold tracking-tight text-blue-950 sm:text-3xl md:text-4xl">
            What&apos;s new on{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Indian Mentors
              </span>
              <span
                className="absolute -bottom-0.5 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-amber-300/90 via-amber-200 to-amber-400/80 opacity-90"
                aria-hidden
              />
            </span>
          </h2> */}
          {/* <p className="mx-auto mt-2 max-w-xl text-sm font-medium text-slate-600 sm:text-base">
            Highlights from our platform and programmes — use the arrows to explore.
          </p> */}
        </div>

        <div className="relative px-4">
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
                  <div className="relative min-h-[20.5rem] overflow-hidden rounded-[inherit] sm:min-h-[24rem] md:min-h-[26rem]">
                    <Image
                      src={withBasePath(slide.heroSrc)}
                      alt={slide.heroAlt}
                      fill
                      sizes="(min-width: 1200px) 1200px, 100vw"
                      className={slide.heroPosition}
                      unoptimized
                      priority={slide.id === "excellence"}
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/92 via-blue-950/55 to-blue-950/25"
                      aria-hidden
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent sm:from-slate-950/50" aria-hidden />

                    <div className="absolute right-2 top-2 z-10 sm:right-4 sm:top-4">
                      <div className="relative h-7 w-24 drop-shadow-md sm:h-8 sm:w-28">
                        <Image
                          src={withBasePath("/assets/logo/im-logo.png")}
                          alt="Indian Mentors"
                          fill
                          className="object-contain object-right brightness-0 invert"
                          unoptimized
                        />
                      </div>
                    </div>

                    <div className="relative z-[1] flex h-full min-h-[20.5rem] flex-col justify-end p-4 sm:min-h-[24rem] sm:p-6 md:min-h-[26rem] md:max-w-[min(36rem,85%)] md:pb-8 md:pl-8">
                      <h3 className="text-lg font-extrabold leading-snug text-white drop-shadow sm:text-xl md:text-2xl">
                        <span className="text-amber-200">{slide.titleLead}</span> {slide.titleRest}
                      </h3>
                      <ul className="mt-2.5 flex flex-col gap-2 sm:mt-3 sm:gap-2.5">
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
                        className="mt-4 inline-flex w-fit items-center justify-center rounded-full border border-white/25 bg-slate-950/50 px-5 py-2.5 text-xs font-extrabold text-white shadow-lg backdrop-blur-sm transition hover:bg-slate-950/70 sm:text-sm"
                      >
                        {slide.cta.label}
                      </a>
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
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-blue-600" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </div>
          <p className="mt-2 text-right text-xs font-medium text-slate-500 mt-[-20px]">
            Click the banner to know more.
          </p>
        </div>
      </div>
    </section>
  );
}
