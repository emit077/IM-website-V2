"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { withBasePath } from "@/lib/withBasePath";

function HeroSecondLineUnderline({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 400 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
            preserveAspectRatio="none"
        >
            {/* Single arc: low → rises toward centre → returns low (slightly darker stroke) */}
            <path
                d="M 5 26 Q 200 7 386 26"
                stroke="#FFCF59"
                strokeWidth="10"
                // strokeLinecap="round"
                // strokeLinejoin="round"
                fill="none"
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
}

type Slide = {
    /** Use `\n` in the string for a manual line break. */
    headline: string;
    /** Second line with decorative underline; `\n` is respected for breaks inside this line. */
    headlineSecondLine: string;
    subheadline: string;
    tagline: string;
    supportingText: string;
    primaryCTA: string;
    theme: "blue" | "purple" | "green";
    visualDirection: string;
    imageSrc?: string;
    imageAlt?: string;
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
                headline: "Find the \nPerfect Tutor ",
                headlineSecondLine: "for Your Child",
                subheadline: "India’s Trusted Platform for Verified Home & Online Tutors",
                tagline: "Guiding Every Student Towards Academic Excellence",
                supportingText:
                    "Providing structured tutoring services and reliable teacher recruitment solutions across India.",
                primaryCTA: "Book Your Free Demo",
                theme: "blue",
                visualDirection: "Digital books, glowing particles and academic grid motion",
                imageSrc: "/assets/home/hero/hero-1.png",
                imageAlt: "Student with study materials",
            },
            {
                headline: "Stronger Concepts. Better Grades.",
                headlineSecondLine: "Brighter Future.",
                subheadline: "1:1 Personalised Learning Designed for Academic Excellence",
                tagline: "Indian Mentors - Where Learning Meets Mentorship",
                supportingText:
                    "From foundation to advanced levels, we ensure measurable academic improvement.",
                primaryCTA: "Book Your Free Demo",
                theme: "purple",
                visualDirection: "Rising progress charts, floating subject icons and motion blur",
                imageSrc: "/assets/home/hero/hero-2.png",
                imageAlt: "Student with study materials",
            },
            {
                headline: "Learn from our & Background",
                headlineSecondLine: "Checked Tutors",
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
                " relative flex min-h-0 flex-col overflow-hidden border-0 bg-white/60 ring-1 ring-slate-900/[0.06] backdrop-blur-xl md:border md:border-black/5 md:bg-white/80 md:ring-0 shadow-lg",
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
                                "bg-gradient-to-br from-[#f8fbff] via-[#eef5ff] to-[#e5f0ff]",
                            ]
                                .filter(Boolean)
                                .join(" ")}
                        >
                            <div
                                className="pointer-events-none absolute inset-0 opacity-[0.2] sm:opacity-25 md:opacity-30"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(rgba(30,64,175,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(30,64,175,0.08) 1px, transparent 1px)",
                                    backgroundSize: "38px 38px",
                                }}
                            />
                            <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-[1260px] grid-cols-1 content-center items-stretch gap-10 px-0 pb-36 pt-[max(5.75rem,env(safe-area-inset-top,0px))] sm:gap-12 sm:pb-28 sm:pt-[max(4.75rem,env(safe-area-inset-top,0px))] md:grid-cols-2 md:items-center md:gap-x-10 md:gap-y-4 md:px-8 md:pb-28 md:pt-10 lg:gap-x-12 lg:px-10">
                                {/* Copy */}
                                <div className="mx-auto w-full min-w-0 max-w-2xl text-center md:col-start-1 md:row-start-1 md:mx-0 md:text-left">
                                    <p className="mb-4 text-balance text-[11px] font-medium leading-relaxed text-blue-800 sm:mb-5 sm:text-xs sm:text-blue-900 md:mb-0 md:inline-block md:max-w-2xl md:rounded-2xl md:border md:border-blue-200/90 md:bg-white/80 md:px-4 md:py-2.5 md:text-left md:font-semibold md:leading-snug md:tracking-[0.04em] md:text-blue-900">
                                        {slide.subheadline}
                                    </p>
                                    <h1 className="mt-4 text-balance text-[1.4rem] font-bold leading-[1.3] tracking-[-0.02em] sm:mt-5 sm:text-4xl sm:font-extrabold sm:leading-[1.2] sm:tracking-normal md:mt-5 lg:text-[3rem] lg:leading-[1.1]">
                                        <span className="block whitespace-pre-line text-blue-950">{slide.headline}</span>
                                        <span className="relative mt-1.5 inline-block max-w-full pb-4 text-[1.35rem] font-extrabold leading-tight tracking-[-0.02em] text-[#2466fb] sm:mt-2 sm:pb-5 sm:text-4xl sm:leading-[1.15] lg:pb-3 lg:text-[2.95rem]">
                                            <span className="relative z-10 whitespace-pre-line">{slide.headlineSecondLine}</span>
                                            <HeroSecondLineUnderline className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[0.52em] min-h-[14px] w-full sm:h-[0.48em] sm:min-h-[16px]" />
                                        </span>
                                    </h1>
                                    <p className="mt-5 text-[0.9375rem] font-medium text-blue-800 sm:mt-6 sm:text-base md:mt-6 md:text-lg">
                                        {slide.tagline}
                                    </p>
                                    <p className="mt-5 mx-auto max-w-prose text-[0.8125rem] leading-[1.75] text-blue-900/80 [text-wrap:pretty] sm:mt-5 sm:max-w-none sm:text-sm sm:leading-relaxed sm:text-blue-900/80 md:mx-0 md:mt-5 md:text-base">
                                        {slide.supportingText}
                                    </p>
                                    {/* CTA + search */}
                                    {slide.primaryCTA ? (
                                        <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center md:justify-start">
                                            <button
                                                type="button"
                                                className="inline-flex w-full max-w-sm items-center justify-center self-start rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/30 transition hover:bg-blue-700 sm:w-auto sm:max-w-none sm:py-3"
                                            >
                                                {slide.primaryCTA}
                                            </button>
                                        </div>
                                    ) : null}
                                </div>

                                {/* Image: below intro on mobile, right column on md+ */}
                                <div className="flex w-full justify-center md:col-start-2 md:row-span-2 md:row-start-1 md:justify-end md:self-stretch">
                                    <div className="relative w-full max-w-[min(100%,420px)] sm:max-w-lg md:max-w-xl md:pt-0 lg:max-w-2xl">
                                        <div className="overflow-hidden">
                                            <Image
                                                src={withBasePath(slide.imageSrc ?? "/assets/landing-page-1/hero.png")}
                                                alt={slide.imageAlt ?? "Students with study materials"}
                                                width={540}
                                                height={620}
                                                className="mt-2 aspect-[5/4] w-full object-cover object-top sm:mt-3 sm:aspect-[4/3] sm:max-h-[min(60vh,440px)] md:mt-0 md:aspect-auto md:max-h-none md:min-w-0 md:h-auto md:max-w-none"
                                                priority={i === 0}
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 672px"
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
                    <button
                        type="button"
                        onClick={onPrev}
                        aria-label="Previous slide"
                        className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-blue-200 bg-white/85 p-2 text-blue-800 backdrop-blur transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/20 sm:block"
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
                        className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-blue-200 bg-white/85 p-2 text-blue-800 backdrop-blur transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/20 sm:block"
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
