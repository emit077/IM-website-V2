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
    secondaryCTAs: string[];
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
                primaryCTA: "Book Your Free Demo Today",
                secondaryCTAs: ["Find A Tutor", "Book A Tutor", "Become A Tutor"],
                theme: "blue",
                visualDirection: "Digital books, glowing particles and academic grid motion",
            },
            {
                headline: "Stronger Concepts. Better Grades. Brighter Future.",
                subheadline: "1:1 Personalised Learning Designed for Academic Excellence",
                tagline: "Indian Mentors - Where Learning Meets Mentorship",
                supportingText:
                    "From foundation to advanced levels, we ensure measurable academic improvement.",
                primaryCTA: "Book Your Free Demo Today",
                secondaryCTAs: ["Browse Tutors", "Talk to a Counsellor"],
                theme: "purple",
                visualDirection: "Rising progress charts, floating subject icons and motion blur",
            },
            {
                headline: "Learn from Verified & Background-Checked Tutors",
                subheadline: "Safety, Quality & Transparency in Every Session",
                tagline: "Building Strong Foundations for Lifelong Learning",
                supportingText:
                    "Every tutor undergoes structured verification and performance monitoring.",
                primaryCTA: "Book Free Demo",
                secondaryCTAs: ["Explore Our Tutors", "Talk to Counsellor"],
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
                        key={slide.headline}
                        className="relative h-full min-w-full"
                        aria-hidden={i !== idx}
                    >
                        <div
                            className={[
                                "relative h-full overflow-hidden pt-10",
                                "bg-gradient-to-br from-[#0c47b7] via-[#115ad3] to-[#0f7be8]",
                            ]
                                .filter(Boolean)
                                .join(" ")}
                        >
                            <div
                                className="pointer-events-none absolute inset-0 opacity-25"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                                    backgroundSize: "38px 38px",
                                }}
                            />
                            <div className="relative z-10 mx-auto grid h-full w-full max-w-[1260px] items-start gap-6 px-4 py-8 sm:items-center sm:gap-8 sm:px-6 sm:py-8 md:grid-cols-2 md:px-8 md:py-12 lg:px-10">
                                <div className="max-w-2xl">
                                    <p className="mb-3 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-white/95 sm:text-xs">
                                        {slide.subheadline}
                                    </p>
                                    <h1 className="text-[1.9rem] font-extrabold leading-tight text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.1]">
                                        {slide.headline}
                                    </h1>
                                    <p className="mt-3 max-w-2xl text-sm font-medium text-white/95 sm:text-base md:text-lg">
                                        {slide.tagline}
                                    </p>
                                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
                                        {slide.supportingText}
                                    </p>

                                    <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                                        <button
                                            type="button"
                                            className="inline-flex w-full items-center justify-center rounded-full bg-[#FFD600] px-6 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:brightness-95 sm:w-auto"
                                        >
                                            <span className="mr-2 text-base">👉</span> {slide.primaryCTA}
                                        </button>
                                        <div className="flex flex-wrap items-center gap-2">
                                            {slide.secondaryCTAs.map((item) => (
                                                <button
                                                    key={item}
                                                    type="button"
                                                    className="rounded-full border border-white/35 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/20 sm:px-4 sm:py-2 sm:text-sm"
                                                >
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <form
                                        className="mt-5 flex flex-col overflow-hidden rounded-2xl bg-white p-1.5 shadow-xl shadow-black/10 sm:mt-6 sm:rounded-full sm:flex-row sm:items-stretch"
                                        action="#"
                                        role="search"
                                    >
                                        <div className="flex shrink-0 items-center px-3 sm:px-4">
                                            <label htmlFor={`landing-service-${i}`} className="sr-only">
                                                Service
                                            </label>
                                            <select
                                                id={`landing-service-${i}`}
                                                name="service"
                                                className="max-w-none cursor-pointer bg-transparent py-3 text-sm font-medium text-slate-600 outline-none sm:max-w-[170px]"
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
                                            placeholder="Find Your Courses..."
                                            className="min-w-0 flex-1 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                                        />
                                        <button
                                            type="submit"
                                            className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#FFD600] px-6 py-3 text-sm font-bold text-neutral-900 shadow-sm transition hover:bg-[#ffcc00]"
                                        >
                                            Search
                                        </button>
                                    </form>
                                    <p className="mt-2 text-[11px] text-white/70 sm:mt-3 sm:text-xs">
                                        Visual mood: {slide.visualDirection}
                                    </p>
                                </div>

                                <div className="relative hidden justify-center md:flex md:justify-end">
                                    <div className="relative w-full max-w-sm lg:max-w-md">
                                        <div className="overflow-hidden rounded-3xl">
                                            <Image
                                                src={withBasePath("/assets/landing-page-1/hero.png")}
                                                alt="Students with study materials"
                                                width={540}
                                                height={620}
                                                className="h-auto w-full rounded-2xl object-cover object-top"
                                                priority={i === 0}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/18 to-transparent" />
                        </div>
                    </div>
                ))}
            </div>

            {showControls ? (
                <>
                    <div className="pointer-events-none absolute inset-x-0 bottom-4 z-10 flex justify-center sm:bottom-5">
                        <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">
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
                                            "h-1.5 w-1.5 rounded-full transition cursor-pointer",
                                            active ? "bg-blue-600" : "bg-white/45 hover:bg-white/70",
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
