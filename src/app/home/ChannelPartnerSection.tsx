"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { withBasePath } from "@/lib/withBasePath";
import { SectionHeading } from "@/components/shared/SectionHeading";

const containerMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

const PARTNER_PANEL_BENEFITS = [
  {
    title: "Decentralized growth",
    text: "Each partner manages operations regionally.",
  },
  {
    title: "Transparency",
    text: "Clear earning reports, tutor/student tracking.",
  },
  {
    title: "Engagement",
    text: "Direct communication with local stakeholders.",
  },
  {
    title: "Scalability",
    text: "Easy expansion to multiple regions without losing control.",
  },
] as const;

function CheckIcon({ active }: { active: boolean }) {
  return (
    <span
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md transition-colors duration-200 ${active
        ? "bg-emerald-500 text-white shadow-sm shadow-emerald-600/25"
        : "bg-emerald-500/15 text-emerald-700"
        }`}
      aria-hidden
    >
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414l2.234 2.234 6.543-6.543a1 1 0 0 1 1.414 0Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}


export function ChannelPartnerSection() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  return (
    <section className="px-4 py-12 md:py-16" aria-labelledby="partner-heading">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={containerMotion.initial}
          whileInView={containerMotion.whileInView}
          viewport={containerMotion.viewport}
          transition={containerMotion.transition}
          className="relative overflow-hidden "
        >
          <div className="relative z-10 flex flex-col gap-6 px-5 py-10 sm:px-8 sm:gap-7 md:px-10 md:py-12 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-10">
            <div className="min-w-0 lg:col-span-2">
              <SectionHeading
                id="partner-heading"
                label="Partner programme"
                title="Become an authorised channel partner"
                sub="Build with a trusted academic brand in your region. You lead local growth — we supply verified educators, the platform, and the operational backbone."
              />
            </div>

            <div className="flex h-full w-full items-center justify-center min-[420px]:mx-auto min-[420px]:max-w-md min-[420px]:self-center lg:col-start-1 lg:row-start-2 lg:row-span-2 lg:mx-0 lg:max-w-none lg:justify-self-start lg:self-stretch">
              <Image
                src={withBasePath("/assets/home/channel-partner.png")}
                alt="Channel partners grow with local teams and the Indian Mentors platform"
                width={1000}
                height={900}
                sizes="(min-width: 1024px) 480px, 100vw"
                className="h-auto w-full object-contain object-top lg:h-full"
                unoptimized
                priority={false}
              />
            </div>

            <div className="min-w-0 border-t border-blue-200/50 pt-6 sm:pt-7 lg:col-start-2 lg:row-start-2 lg:border-t-0 lg:pt-0">
              <h3
                id="partner-benefits-heading"
                className="text-sm font-extrabold uppercase tracking-widest text-blue-800/80"
              >
                Key benefits of the channel partner panel
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Select a benefit to see it on the image — on desktop, hover a card to sync.
              </p>
              <div
                className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1 xl:grid-cols-2"
                role="list"
                aria-labelledby="partner-benefits-heading"
              >
                {PARTNER_PANEL_BENEFITS.map((b, i) => {
                  const isActive = active === i;
                  return (
                    <motion.button
                      key={b.title}
                      type="button"
                      role="listitem"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => {
                        if (globalThis.matchMedia?.("(min-width: 1024px)").matches) {
                          setActive(i);
                        }
                      }}
                      onFocus={() => setActive(i)}
                      whileTap={reduced ? undefined : { scale: 0.99 }}
                      whileHover={reduced ? undefined : { y: -1 }}
                      className={[
                        "flex w-full min-w-0 gap-3 rounded-2xl border p-3.5 text-left shadow-sm transition-colors duration-200 sm:p-4",
                        isActive
                          ? "border-blue-400/60 bg-gradient-to-br from-white to-blue-50/80 shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20"
                          : "border-white/60 bg-white/50 ring-1 ring-blue-200/30 backdrop-blur-sm hover:border-blue-200/80 hover:bg-white/70",
                      ].join(" ")}
                      aria-pressed={isActive}
                    >
                      <CheckIcon active={isActive} />
                      <div className="min-w-0 text-left">
                        <p className="text-sm font-bold text-slate-900">{b.title}</p>
                        <p className="mt-0.5 text-sm font-medium leading-snug text-slate-600">{b.text}</p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="flex min-w-0 flex-wrap items-center gap-3 sm:gap-4 lg:col-start-2 lg:row-start-3">
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
        </motion.div>
      </div>
    </section>
  );
}
