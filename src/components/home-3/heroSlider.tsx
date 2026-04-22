"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { withBasePath } from "@/lib/withBasePath";

type Slide = {
    headline: string;
    subheadline: string;
    tagline: string;
    supportingText: string;
    primaryCTA: string;
    theme: "blue" | "purple" | "green";
    visualDirection: string;
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
                headline: "Personalised Learning for Academic Success",
                subheadline: "India’s Trusted Platform for Verified Home & Online Tutors",
                tagline: "Guiding Every Student Towards Academic Excellence",
                supportingText:
                    "Providing structured tutoring services and reliable teacher recruitment solutions across India.",
                primaryCTA: "",
                theme: "blue",
                visualDirection: "Digital books, glowing particles and academic grid motion",
            },
            {
                headline: "Stronger Concepts. Better Grades. Brighter Future.",
                subheadline: "1:1 Personalised Learning Designed for Academic Excellence",
                tagline: "Indian Mentors - Where Learning Meets Mentorship",
                supportingText:
                    "From foundation to advanced levels, we ensure measurable academic improvement.",
                primaryCTA: "Book Your Free Demo",
                theme: "purple",
                visualDirection: "Rising progress charts, floating subject icons and motion blur",
            },
            {
                headline: "Learn from Verified & Background-Checked Tutors",
                subheadline: "Safety, Quality & Transparency in Every Session",
                tagline: "Building Strong Foundations for Lifelong Learning",
                supportingText:
                    "Every tutor undergoes structured verification and performance monitoring.",
                primaryCTA: "Book Your Free Demo",
                theme: "green",
                visualDirection: "Floating verification badges and shield pulse animation",
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
                " relative flex min-h-0 flex-col overflow-hidden  border-0 bg-white/50 shadow-sm ring-1 ring-slate-900/[0.06] backdrop-blur-xl  md:border md:border-black/5 md:bg-white/70 md:shadow-lg md:ring-0",
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
                className="flex min-h-0 w-full flex-1"
                style={{
                    transform: `translate3d(-${idx * 100}%, 0, 0)`,
                    transition: reduced ? "none" : "transform 520ms cubic-bezier(0.22, 1, 0.36, 1)",
                    willChange: "transform",
                }}
            >
                {slides.map((slide, i) => (
                    <div
                        key={slide.headline}
                        className="relative flex min-h-0 w-full min-w-full flex-1"
                        aria-hidden={i !== idx}
                    >
                        <div
                            className={[
                                "relative flex h-full min-h-0 w-full min-w-0 flex-1 flex-col overflow-hidden md:pt-25",
                                "bg-gradient-to-br from-[#0c47b7] via-[#115ad3] to-[#0f7be8]",
                            ]
                                .filter(Boolean)
                                .join(" ")}
                        >
                            <div
                                className="pointer-events-none absolute inset-0 opacity-[0.12] sm:opacity-20 md:opacity-25"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                                    backgroundSize: "38px 38px",
                                }}
                            />
                            <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-[1260px] grid-cols-1 content-center items-stretch gap-10 px-0 pb-28 pt-[max(5.75rem,env(safe-area-inset-top,0px))] sm:gap-12 sm:pb-16 sm:pt-[max(4.75rem,env(safe-area-inset-top,0px))] md:grid-cols-2 md:items-center md:gap-x-10 md:gap-y-0 md:px-8 md:pb-14 md:pt-10 lg:gap-x-12 lg:px-10">
                                {/* Copy */}
                                <div className="mx-auto w-full min-w-0 max-w-2xl text-center md:col-start-1 md:row-start-1 md:mx-0 md:text-left">
                                    <p className="mb-4 text-balance text-[11px] font-medium leading-relaxed text-white/80 sm:mb-5 sm:text-xs sm:text-white/90 md:mb-0 md:inline-block md:max-w-2xl md:rounded-2xl md:border md:border-white/20 md:bg-white/10 md:px-4 md:py-2.5 md:text-left md:font-semibold md:leading-snug md:tracking-[0.04em] md:text-white/95">
                                        {slide.subheadline}
                                    </p>
                                    <h1 className="mt-4 text-balance text-[1.4rem] font-bold leading-[1.3] tracking-[-0.02em] text-white sm:mt-5 sm:text-4xl sm:font-extrabold sm:leading-[1.2] sm:tracking-normal md:mt-5 lg:text-[3rem] lg:leading-[1.1]">
                                        {slide.headline}
                                    </h1>
                                    <p className="mt-5 text-[0.9375rem] font-medium text-white/95 sm:mt-6 sm:text-base md:mt-6 md:text-lg">
                                        {slide.tagline}
                                    </p>
                                    <p className="mt-5 mx-auto max-w-prose text-[0.8125rem] leading-[1.75] text-white/80 [text-wrap:pretty] sm:mt-5 sm:max-w-none sm:text-sm sm:leading-relaxed sm:text-white/85 md:mx-0 md:mt-5 md:text-base">
                                        {slide.supportingText}
                                    </p>
                                </div>

                                {/* Image: below intro on mobile, right column on md+ */}
                                <div className="flex w-full justify-center md:col-start-2 md:row-span-2 md:row-start-1 md:justify-end md:self-stretch">
                                    <div className="relative w-full max-w-[min(100%,420px)] sm:max-w-lg md:max-w-xl md:pt-0 lg:max-w-2xl">
                                        <div className="overflow-hidden">
                                            <Image
                                                src={withBasePath("/assets/landing-page-1/hero.png")}
                                                alt="Students with study materials"
                                                width={540}
                                                height={620}
                                                className=" mt-8 aspect-[5/4] w-full object-cover object-top sm:aspect-[4/3] sm:max-h-[min(60vh,440px)] md:aspect-auto md:max-h-none md:min-w-0 md:h-auto md:max-w-none"
                                                priority={i === 0}
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 672px"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* CTA + search */}
                                <div className="mx-auto w-full min-w-0 max-w-2xl text-center md:col-start-1 md:row-start-2 md:mx-0 md:pt-0 md:mt-[-80px] md:text-left">
                                    {slide.primaryCTA ? (
                                        <div className="mt-0 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start sm:gap-3">
                                            <button
                                                type="button"
                                                className="inline-flex w-full max-w-sm items-center justify-center self-center rounded-full bg-[#FFD600] px-6 py-3.5 text-sm font-bold text-slate-900 shadow-md shadow-black/10 transition hover:brightness-105 sm:w-auto sm:max-w-none sm:py-3 md:self-start"
                                            >
                                                {slide.primaryCTA}
                                            </button>
                                        </div>
                                    ) : null}
                                    {i === 0 ? (
                                        <form
                                            className="hidden w-full min-w-0 max-w-md flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-[0_20px_50px_-15px_rgba(15,23,42,0.22)] ring-1 ring-slate-900/[0.04] sm:max-w-none sm:rounded-full sm:border-0 sm:p-1.5 sm:shadow-lg sm:shadow-black/[0.08] sm:ring-0 md:mx-0 md:mt-0 md:flex md:flex-row md:items-stretch"
                                            action="#"
                                            role="search"
                                        >
                                            <div className="flex shrink-0 items-center border-b border-slate-100 px-4 py-3.5 sm:border-0 sm:px-3 sm:py-0">
                                                <label htmlFor="landing-service-hero" className="sr-only">
                                                    Service
                                                </label>
                                                <select
                                                    id="landing-service-hero"
                                                    name="service"
                                                    className="w-full min-w-0 max-w-full cursor-pointer bg-transparent text-sm font-medium text-slate-600 outline-none sm:max-w-[170px] sm:py-3"
                                                    defaultValue="all"
                                                >
                                                    <option value="all">All Services</option>
                                                    <option value="home">Home Tutor</option>
                                                    <option value="online">Online Tutor</option>
                                                    <option value="shadow">Shadow Tutor</option>
                                                    <option value="travel">Travel Tutor</option>
                                                    <option value="live-in">Live-In Tutor</option>
                                                    <option value="home-schooling">Home Schooling</option>
                                                </select>
                                            </div>
                                            <span className="hidden w-px self-stretch bg-slate-200 sm:block" />
                                            <input
                                                type="search"
                                                name="q"
                                                placeholder="Find your courses…"
                                                className="min-w-0 flex-1 border-b border-slate-100 px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none sm:border-0 sm:py-3"
                                            />
                                            <button
                                                type="submit"
                                                className="flex w-full shrink-0 items-center justify-center gap-2 rounded-b-2xl bg-[#FFD600] py-3.5 text-sm font-bold text-neutral-900 transition hover:brightness-105 sm:w-auto sm:rounded-full sm:px-6 sm:py-3 sm:shadow-sm sm:hover:brightness-95"
                                            >
                                                Search
                                            </button>
                                        </form>
                                    ) : null}
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/18 to-transparent" />
                        </div>
                    </div>
                ))}
            </div>

            {showControls ? (
                <>
                    <div className="pointer-events-none absolute inset-x-0 bottom-3 z-10 flex justify-center sm:bottom-5">
                        <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-900/20 px-3 py-2 backdrop-blur-md sm:gap-2 sm:px-3.5">
                            {slides.map((s, i) => {
                                const active = i === idx;
                                return (
                                    <button
                                        key={s.headline}
                                        type="button"
                                        onClick={() => go(i)}
                                        aria-label={`Go to slide ${i + 1}`}
                                        aria-current={active}
                                        className={[
                                            "h-1.5 rounded-full transition cursor-pointer",
                                            active
                                                ? "w-5 bg-white shadow-sm sm:w-6"
                                                : "w-1.5 bg-white/50 hover:bg-white/75",
                                        ].join(" ")}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onPrev}
                        aria-label="Previous slide"
                        className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white shadow-sm backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-blue-500/20 sm:block"
                    >
                        <span className="sr-only">Previous</span>
                        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                            <path
                                d="M14.5 5.5 8 12l6.5 6.5"
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
                        className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white shadow-sm backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-blue-500/20 sm:block"
                    >
                        <span className="sr-only">Next</span>
                        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                            <path
                                d="M9.5 5.5 16 12l-6.5 6.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </>
            ) : null}
        </div>
    );
}
