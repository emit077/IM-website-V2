"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { withBasePath } from "@/lib/withBasePath";
import { SectionHeading } from "@/components/shared/SectionHeading";

const containerMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

export function ChannelPartnerSection() {
  return (
    <section className="px-4 pb-8 pt-4 md:py-6" aria-labelledby="partner-heading">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={containerMotion.initial}
          whileInView={containerMotion.whileInView}
          viewport={containerMotion.viewport}
          transition={containerMotion.transition}
          className="relative overflow-hidden rounded-[1.75rem] border border-blue-200/50 shadow-[0_20px_60px_rgba(30,64,175,0.1)]"
        >
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-slate-50 via-blue-50/90 to-indigo-100/80"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
            <Image
              src={withBasePath("/assets/home/map.png")}
              alt=""
              fill
              unoptimized
              sizes="(min-width: 1200px) 1200px, 100vw"
              className="object-cover object-bottom-right object-[85%_100%] opacity-55 sm:object-[100%_100%] sm:opacity-50"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-slate-50/98 via-slate-50/88 to-blue-100/5 sm:from-slate-50/95 sm:via-slate-50/55 sm:via-50% sm:to-indigo-100/20"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-slate-50/25 to-transparent to-45%"
            aria-hidden
          />
          <div className="pointer-events-none absolute -left-20 top-1/2 z-[1] h-72 w-72 -translate-y-1/2 rounded-full bg-blue-300/20 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -right-10 -top-20 z-[1] h-48 w-48 rounded-full bg-indigo-400/15 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute bottom-0 right-1/4 z-[1] h-px w-1/2 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" aria-hidden />

          <div className="relative z-10 grid items-center gap-8 px-5 py-10 sm:px-8 md:grid-cols-12 md:gap-10 md:px-10 md:py-12 lg:gap-14">
            <div className="md:col-span-12">
              <SectionHeading
                id="partner-heading"
                label="Partner programme"
                title="Become an authorised channel partner"
                sub="Build with a trusted academic brand in your region. You lead local growth — we supply verified educators, the platform, and the operational backbone."
              />


              <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/channel-partner"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
                >
                  Apply to partner
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden
                  >
                    <path
                      d="M5 12h12m-5-5 5 5-5 5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300/90 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-300 hover:bg-white"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
