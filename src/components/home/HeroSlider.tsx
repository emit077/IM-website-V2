"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

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
                src: "/assets/home/hero_carousel/webslide1.jpg",
                alt: "Hero carousel slide 1",
            },
            {
                src: "/assets/home/hero_carousel/webslide2.jpg",
                alt: "Hero carousel slide 2",
            },
            {
                src: "/assets/home/hero_carousel/webslide3.jpg",
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
                "relative overflow-hidden rounded-2xl border border-black/5 bg-white/70 shadow-lg backdrop-blur-xl",
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
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 760px, 760px"
                            priority={i === 0}
                            className="object-cover"
                        />

                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
                        />
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
                </>
            ) : null}
        </div>
    );
}
