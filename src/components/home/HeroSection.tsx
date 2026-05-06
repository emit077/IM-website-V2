"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { withBasePath } from "@/lib/withBasePath";

const heroImage = withBasePath("/assets/home/hero1.png");

const MotionLink = motion.create(Link);

const ctaSpring = { type: "spring", stiffness: 420, damping: 10 } as const;

function StarRating() {
    return (
        <div className="flex items-center gap-0.5 text-amber-500" aria-label="Rated 4.9 out of 5">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current" aria-hidden>
                    <path d="M10 1.8l2.42 4.9 5.4.78-3.91 3.8.92 5.37L10 14.2l-4.83 2.45.92-5.37-3.91-3.8 5.4-.78L10 1.8z" />
                </svg>
            ))}
        </div>
    );
}

const fadeUp = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
};

export function HeroSection({
    className,
}: {
    className?: string;
}) {
    return (
        <section
            className={[
                "relative isolate flex w-full flex-col overflow-hidden",
                className ?? "",
            ].join(" ")}
            aria-label="Hero"
        >
            {/* Base wash — theme primary-soft + background */}
            <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,color-mix(in_srgb,var(--primary-soft-2)_78%,transparent)_0%,transparent_56%),radial-gradient(90%_62%_at_100%_100%,color-mix(in_srgb,var(--primary)_22%,transparent)_0%,transparent_52%),linear-gradient(180deg,var(--primary-soft)_0%,var(--primary-soft-2)_42%,var(--background)_100%)]"
                aria-hidden
            />

            {/* Soft bloom behind copy */}
            <div
                className="pointer-events-none absolute -left-24 top-1/4 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary/22 blur-3xl md:left-0"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-primary/14 blur-3xl"
                aria-hidden
            />

            {/* Photo: atmospheric full-width on mobile; right column on md+ with feather overlays */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 md:inset-y-0 md:left-auto md:right-8 md:h-full md:w-[min(56%,720px)] lg:right-12 xl:right-16">
                    <Image
                        src={heroImage}
                        alt="Smiling student with books and backpack"
                        fill
                        className="object-cover object-[82%_12%] opacity-[0.26] saturate-[1.05] md:object-[72%_18%] md:object-right md:opacity-100"
                        sizes="(max-width: 767px) 100vw, min(56vw, 720px)"
                        priority
                    />
                </div>
                {/* Mobile: heavy wash so type stays crisp */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-background via-background/93 to-background md:hidden"
                    aria-hidden
                />
                <div
                    className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-primary-soft/45 md:hidden"
                    aria-hidden
                />
                {/* Desktop: feather left edge + subtle depth */}
                <div
                    className="absolute inset-0 hidden bg-gradient-to-r from-background from-[4%] via-background/74 via-[36%] to-transparent to-[88%] md:block"
                    aria-hidden
                />
                <div
                    className="absolute inset-0 hidden bg-[linear-gradient(270deg,transparent_0%,transparent_52%,color-mix(in_srgb,var(--primary)_14%,transparent)_88%)] md:block"
                    aria-hidden
                />
                <div
                    className="absolute inset-0 hidden bg-gradient-to-b from-primary-soft/40 via-transparent to-primary-soft-2/28 md:block"
                    aria-hidden
                />
                <div
                    className="absolute inset-x-0 bottom-0 hidden h-2/5 bg-gradient-to-t from-primary-soft/90 to-transparent md:block"
                    aria-hidden
                />
            </div>

            {/* Decorative mesh grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply dark:opacity-[0.12]"
                style={{
                    backgroundImage:
                        "linear-gradient(color-mix(in srgb, var(--primary) 12%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--primary) 12%, transparent) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
                aria-hidden
            />

            <div className="relative z-10 mx-auto flex h-full w-full min-h-0 max-w-[1260px] flex-1 flex-col justify-center px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 md:px-10 md:pb-14 md:pt-14 lg:px-12">
                <div className="max-w-xl lg:max-w-[32rem]">
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-5 md:mb-6"
                    >
                        <div
                            className="relative inline-flex max-w-full flex-wrap items-center gap-3 overflow-hidden rounded-2xl border border-card-border bg-card px-2.5 py-2 shadow-[0_12px_40px_-12px_color-mix(in_srgb,var(--primary)_28%,transparent)] ring-1 ring-primary/10 backdrop-blur-xl sm:gap-3 sm:rounded-[1.35rem] sm:px-3.5 sm:py-2.5"
                            role="group"
                            aria-label="India's number one verified tutor platform"
                        >
                            <div
                                className="pointer-events-none absolute inset-0 opacity-70 bg-[linear-gradient(115deg,color-mix(in_srgb,var(--primary)_10%,transparent)_0%,transparent_42%,color-mix(in_srgb,var(--primary-soft-2)_90%,transparent)_100%)]"
                                aria-hidden
                            />
                            <span
                                className="relative flex shrink-0 items-center justify-center rounded-[0.65rem] bg-primary px-2.5 py-1 text-[0.8125rem] font-black tabular-nums leading-none tracking-tight text-primary-foreground shadow-[inset_0_1px_0_color-mix(in_srgb,var(--primary-foreground)_34%,transparent),0_6px_18px_-4px_color-mix(in_srgb,var(--primary)_45%,transparent)] sm:rounded-xl sm:px-3 sm:py-1.5 sm:text-base"
                                aria-hidden
                            >
                                #1
                            </span>
                            <div className="relative min-w-0 flex-1 text-balance sm:flex-none">
                                <p className="text-[0.8125rem] font-semibold leading-snug sm:text-sm sm:leading-tight">
                                    <span className="font-bold text-foreground">India&apos;s</span>{" "}
                                    <span className="text-muted">Verified Tutor Platform</span>
                                </p>
                            </div>
                            <span
                                className="relative hidden h-7 w-px shrink-0 bg-gradient-to-b from-transparent via-primary/25 to-transparent sm:block"
                                aria-hidden
                            />
                            <span
                                className="relative inline-flex shrink-0 items-center gap-1 rounded-full border border-primary/15 bg-primary-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-sm shadow-primary/10 sm:text-[11px]"
                                title="Background-checked tutors"
                            >
                                <svg viewBox="0 0 20 20" className="h-3 w-3 shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth="1.65" aria-hidden>
                                    <path d="M10 2.5 4.5 4.8v4.1c0 3.6 2.2 6.8 5.5 8.1 3.3-1.3 5.5-4.5 5.5-8.1V4.8L10 2.5Z" strokeLinejoin="round" />
                                    <path d="m7.4 10 1.7 1.7 3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Verified
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        {...fadeUp}
                        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
                        className="text-balance text-[1.55rem] font-bold leading-[1.22] tracking-[-0.03em] text-foreground sm:text-4xl sm:leading-[1.15] lg:text-[2.75rem] lg:leading-[1.12]"
                    >
                        Find the perfect tutor{" "}
                        <span className="mt-1 block bg-[linear-gradient(102deg,var(--primary)_0%,color-mix(in_srgb,var(--primary),var(--foreground)_32%)_100%)] bg-clip-text text-transparent sm:mt-1.5 lg:inline lg:mt-0">
                            for your child
                        </span>
                    </motion.h1>

                    <motion.p
                        {...fadeUp}
                        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="mt-4 text-[0.9375rem] font-semibold text-blue-900/90 sm:mt-5 sm:text-lg"
                    >
                        Guiding every student towards academic excellence
                    </motion.p>

                    <motion.p
                        {...fadeUp}
                        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
                        className="mt-4 max-w-prose text-[0.8125rem] leading-relaxed text-slate-600 [text-wrap:pretty] sm:text-sm md:text-[0.9375rem] md:leading-relaxed"
                    >
                        Structured tutoring and reliable teacher recruitment—built for families and educators across India.
                    </motion.p>

                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                        className="mt-8 flex flex-col gap-4 sm:mt-9"
                    >
                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                            <MotionLink
                                href="/contact"
                                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-[0_14px_36px_-8px_color-mix(in_srgb,var(--primary)_52%,transparent)] ring-1 ring-primary-foreground/18 transition-[filter] duration-200 hover:brightness-[1.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto  sm:py-[1.05rem]"
                                whileHover={{ y: -3, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={ctaSpring}
                            >
                                <span className="pointer-events-none absolute inset-0 translate-x-[-120%] skew-x-[-18deg] rounded-md bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent opacity-0 transition duration-500 group-hover:translate-x-[120%] group-hover:opacity-100 group-hover:duration-700" aria-hidden />
                                <span className="relative">Book your free demo</span>
                                <ArrowRight
                                    className="relative ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                                    aria-hidden
                                    strokeWidth={2.25}
                                />
                            </MotionLink>
                            <MotionLink
                                href="#services"
                                className="group inline-flex w-full items-center justify-center gap-2 border rounded-md border-card-border bg-card/95 px-8 py-4 text-sm font-bold text-foreground shadow-[0_10px_28px_-14px_color-mix(in_srgb,var(--foreground)_22%,transparent)] backdrop-blur-md transition-colors duration-200 hover:border-primary/45 hover:bg-background hover:text-primary hover:shadow-[0_18px_40px_-16px_color-mix(in_srgb,var(--primary)_26%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 sm:w-auto  sm:py-[1.05rem]"
                                whileHover={{ y: -3, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={ctaSpring}
                            >
                                <Compass
                                    className="h-4 w-4 shrink-0 text-primary/80 transition-transform duration-300 group-hover:rotate-45 group-hover:text-primary"
                                    aria-hidden
                                    strokeWidth={2.25}
                                />
                                Browse tutors
                                <ArrowRight
                                    className="h-4 w-4 shrink-0 opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                                    aria-hidden
                                    strokeWidth={2.25}
                                />
                            </MotionLink>
                        </div>

                        <div className="flex flex-col gap-4 border-t border-card-border pt-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 sm:border-0 sm:pt-0">
                            <div className="flex items-center gap-3.5">
                                <div className="flex -space-x-2" aria-hidden>
                                    {["AP", "NK", "RS", "MJ"].map((initials) => (
                                        <span
                                            key={initials}
                                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-slate-100 to-slate-200 text-[10px] font-bold text-slate-700 shadow-sm"
                                        >
                                            {initials}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-col leading-tight">
                                    <StarRating />
                                    <p className="mt-0.5 text-[11px] font-semibold text-muted sm:text-xs">
                                        Rated 4.9 by 14k+ parents
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-medium text-muted sm:text-xs">
                                <span className="inline-flex items-center gap-1.5">
                                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-primary" fill="none" aria-hidden>
                                        <path
                                            d="M10 2.5 4.5 4.8v4.1c0 3.6 2.2 6.8 5.5 8.1 3.3-1.3 5.5-4.5 5.5-8.1V4.8L10 2.5Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                        <path d="m7.6 9.8 1.7 1.7 3.2-3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Background checked
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-primary" fill="none" aria-hidden>
                                        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="m7.4 10.2 1.6 1.6 3.6-3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Subject verified
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-primary" fill="none" aria-hidden>
                                        <rect x="3.5" y="4.5" width="13" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="m7.4 10 1.7 1.7 3.3-3.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Demo evaluated
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
