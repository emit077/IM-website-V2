"use client";

import { Poppins } from "next/font/google";
import { LandingPageNavbar } from "./LandingPageNavbar";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/withBasePath";
import { TutorsCard } from "@/components/home2/TutorsCard";
import { VideoTestimonialsSection } from "@/components/home2/VideoTestimonialsSection";
import { TeacherRecruitmentSection } from "@/components/home2/TeacherRecruitmentSection";
import { ChannelPartnerSection } from "@/components/home2/ChannelPartnerSection";
import { StudentEnrollmentProcessSection } from "@/components/home2/StudentEnrollmentProcessSection";
import { TrustScaleSection } from "@/components/home2/TrustScaleSection";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/** Mirrors main site services; same card UI as former category strip */
const services = [
  {
    title: "Home Tutor",
    tagline: "1:1 at your pace",
    iconBg: "bg-[#B39DDB]",
    icon: (
      <path
        d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Online Tutor",
    tagline: "Live classes & notes",
    iconBg: "bg-[#FF8A65]",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2a15.3 15.3 0 0 1 0 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2a15.3 15.3 0 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  {
    title: "Shadow Tutor",
    tagline: "Extra focus & consistency",
    iconBg: "bg-[#F48FB1]",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="m12 7 5 5-5 5-5-5 5-5z"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),
  },
  {
    title: "Travel Tutor",
    tagline: "Mentors at your location",
    iconBg: "bg-[#4DB6AC]",
    icon: (
      <>
        <path d="M6 17h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 17V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 7h8M8 11h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Live-In Tutor",
    tagline: "Long-term daily coaching",
    iconBg: "bg-[#FFD600]",
    icon: (
      <>
        <path
          d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 12v6M9 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
];

type Slide = {
  src: string;
  alt: string;
};

export function HeroSlider({
  className,
  autoMs = 4500,
  showControls = true,
}: {
  className?: string;
  autoMs?: number;
  showControls?: boolean;
}) {
  const [reduced, setReduced] = useState(false);

  const slides = useMemo<Slide[]>(
    () => [
      {
        src: withBasePath("/assets/home/hero_carousel/webslide1.jpg"),
        alt: "Hero carousel slide 1",
      },
      {
        src: withBasePath("/assets/home/hero_carousel/webslide2.jpg"),
        alt: "Hero carousel slide 2",
      },
      {
        src: withBasePath("/assets/home/hero_carousel/webslide3.jpg"),
        alt: "Hero carousel slide 3",
      },
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced || paused || slides.length <= 1) return;
    const t = window.setInterval(() => {
      setIdx((prev) => (prev + 1) % slides.length);
    }, autoMs);
    return () => window.clearInterval(t);
  }, [autoMs, paused, reduced, slides.length]);

  const go = (nextIdx: number) => {
    setIdx((prev) => {
      const n = ((nextIdx % slides.length) + slides.length) % slides.length;
      return n === prev ? prev : n;
    });
  };

  const onPrev = () => go(idx - 1);
  const onNext = () => go(idx + 1);

  return (
    <div
      className={[
        "relative overflow-hidden border border-black/5 bg-white/70 shadow-lg backdrop-blur-xl",
        className ?? "h-[240px] sm:h-[320px]",
      ].join(" ")}
      tabIndex={0}
      role="region"
      aria-label="Hero carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") onPrev();
        if (e.key === "ArrowRight") onNext();
      }}
    >
      <div
        className="flex h-full w-full"
        style={{
          transform: `translate3d(-${idx * 100}%, 0, 0)`,
          transition: reduced ? "none" : "transform 520ms cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform",
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="relative h-full min-w-full"
            aria-hidden={i !== idx}
          >
            {/* Using Next/Image for automatic optimization. */}

            <div className="relative overflow-hidden bg-blue-700 pb-24 pt-28 md:pb-13 md:pt-24">
              <div
                className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full opacity-35 md:right-0"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.55) 1.5px, transparent 1.5px)",
                  backgroundSize: "14px 14px",
                  maskImage:
                    "radial-gradient(circle at center, black 35%, transparent 70%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, black 35%, transparent 70%)",
                }}
              />

              <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-10 px-4 pt-10 md:grid-cols-2 md:gap-8 md:pt-10 lg:gap-14">
                <div className="max-w-xl">
                  <p className="mb-3 text-xs font-bold tracking-[0.1em] text-white/90 md:text-sm pt-10">
                    India’s Trusted Platform for Verified Home & Online Tutors
                  </p>
                  <h1 className="text-3xl font-extrabold leading-tight text-[#FFD600] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                    Personalised Learning for {" "}
                    <span className="relative inline-block whitespace-nowrap text-white">
                      Academic
                      <svg
                        className="pointer-events-none absolute -bottom-1 left-0 w-full text-white bottom-[-10px]"
                        viewBox="0 0 200 12"
                        preserveAspectRatio="none"
                        aria-hidden
                      >
                        <path
                          d="M4 8C50 2 150 2 196 8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>{" "}
                    Success
                  </h1>

                  <form
                    className="mt-8 flex flex-col overflow-hidden rounded-full bg-white p-1.5 shadow-xl shadow-black/10 sm:flex-row sm:items-stretch"
                    action="#"
                    role="search"
                  >
                    <div className="flex shrink-0 items-center px-3 sm:px-4">
                      <label htmlFor="landing-service" className="sr-only">
                        Service
                      </label>
                      <select
                        id="landing-service"
                        name="service"
                        className="max-w-[150px] cursor-pointer bg-transparent py-3 text-sm font-medium text-slate-600 outline-none sm:max-w-[170px]"
                        defaultValue="all"
                      >
                        <option value="all">All Services</option>
                        <option value="home">Home Tutor</option>
                        <option value="online">Online Tutor</option>
                        <option value="shadow">Shadow Tutor</option>
                        <option value="travel">Travel Tutor</option>
                        <option value="live-in">Live-In Tutor</option>
                      </select>
                    </div>
                    <span className="hidden w-px self-stretch bg-slate-200 sm:block" />
                    <input
                      type="search"
                      name="q"
                      placeholder="Find Your Courses..."
                      className="min-w-0 flex-1 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                    />
                    <button
                      type="submit"
                      className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#FFD600] px-6 py-3 text-sm font-bold text-neutral-900 shadow-sm transition hover:bg-[#ffcc00]"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <circle cx="11" cy="11" r="7" />
                        <path d="M20 20l-4-4" strokeLinecap="round" />
                      </svg>
                      Search
                    </button>
                  </form>
                </div>

                <div className="relative flex justify-center md:justify-end">
                  <div className="relative w-full max-w-md lg:max-w-lg">
                    <div className="relative overflow-hidden rounded-3xl">
                      <Image
                        src={withBasePath("/assets/landing-page-1/hero.png")}
                        alt="Students with study materials"
                        width={540}
                        height={620}
                        className="h-auto w-full object-cover object-top"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showControls ? (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-4 z-10 flex items-center justify-center -mt-20 ">
            <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">
              {slides.map((s, i) => {
                const active = i === idx;
                return (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={active}
                    className={[
                      "h-1.5 w-1.5 rounded-full transition cursor-pointer",
                      active ? "bg-blue-600" : "bg-white/45 hover:bg-white/70",
                    ].join(" ")}
                  />
                );
              })}
            </div>
          </div>
          {/* controll buttons */}
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous slide"
            className={[
              "absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white",
              "shadow-sm backdrop-blur transition hover:bg-white/20",
              "focus:outline-none focus:ring-4 focus:ring-blue-500/20",
            ].join(" ")}
          >
            <span className="sr-only">Previous</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M14.5 5.5L8 12l6.5 6.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next slide"
            className={[
              "absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white",
              "shadow-sm backdrop-blur transition hover:bg-white/20",
              "focus:outline-none focus:ring-4 focus:ring-blue-500/20",
            ].join(" ")}
          >
            <span className="sr-only">Next</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M9.5 5.5L16 12l-6.5 6.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/*  */}
        </>
      ) : null}
    </div>
  );
}
export default function LandingPage1() {
  return (
    <div
      className={`${poppins.className} min-h-screen bg-[#F8F9FA] text-slate-900`}
    >
      <LandingPageNavbar />

      <HeroSlider className="relative z-0 h-[150px] sm:h-[320px] md:h-[600px]" />

      {/* Floating services strip below hero; z-20 overlaps bottom of hero (z-0) */}
      <div className="relative z-20 mx-auto mt-[-30px] max-w-[1200px] px-4">
        <div className="rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.12)] md:p-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {services.map((s) => (
              <a
                key={s.title}
                href="#services"
                className="flex items-center gap-3 rounded-2xl transition bg-slate-100 hover:bg-blue-100 px-4 py-6"
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${s.iconBg} text-white shadow-inner`}
                >
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    {s.icon}
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="truncate font-bold text-slate-900">{s.title}</p>
                  <p className="text-xs text-slate-500">{s.tagline}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>


      <TrustScaleSection onBookFreeDemo={() => { }} />

      <section
        id="services"
        className="scroll-mt-36 px-4 pb-20 pt-16 md:scroll-mt-32 md:pt-20"
      >
        <div className="mx-auto max-w-[1200px] text-center">
          {/* <p className="text-xs font-bold tracking-[0.25em] text-slate-500">
            OUR SERVICES
          </p> */}
          <h2 className="mt-3 text-3xl font-extrabold text-[#1a2744] sm:text-4xl">
            Meet verified mentors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Modern tutor cards with subjects, ratings, and quick actions.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-[1200px]">
          <TutorsCard />
        </div>
      </section>



      <TeacherRecruitmentSection />
      <ChannelPartnerSection />
      <StudentEnrollmentProcessSection />
      <VideoTestimonialsSection />
    </div>
  );
}
