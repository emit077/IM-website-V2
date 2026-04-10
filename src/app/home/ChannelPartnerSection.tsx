"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { withBasePath } from "@/lib/withBasePath";

const perks = [
  { icon: "📍", text: "Manage local registrations in your area" },
  { icon: "🤝", text: "Onboard and coordinate tutor deployments" },
  { icon: "💰", text: "Earn recurring commissions on every enrolment" },
  { icon: "📊", text: "Access partner dashboard for real-time tracking" },
];

export function ChannelPartnerSection() {
  return (
    <section className="px-4 pb-6 pt-2 md:py-4" aria-labelledby="partner-heading">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 border border-sky-200/50 shadow-[0_16px_60px_rgba(14,165,233,0.12)]"
        >
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full border-2 border-sky-300/30" aria-hidden />
          <div className="pointer-events-none absolute right-16 top-8 h-5 w-5 rotate-12 rounded-md bg-sky-300/40" aria-hidden />
          <div className="pointer-events-none absolute bottom-8 right-8 h-3 w-3 rounded-full bg-blue-400/40" aria-hidden />
          <div className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl" aria-hidden />

          <div className="grid items-center gap-0 md:grid-cols-12">
            {/* Image column */}
            <div className="relative hidden md:flex md:col-span-5 md:items-end md:justify-center">
              <div className="pointer-events-none absolute left-6 bottom-4 h-52 w-52 rounded-full border border-sky-300/40 border-dashed" aria-hidden />
              <Image
                src={withBasePath("/assets/landing-page-1/hero.png")}
                alt="Become a Channel Partner with Indian Mentors"
                width={380}
                height={280}
                className="relative z-10 h-[280px] w-auto object-contain object-bottom"
              />
            </div>

            {/* Content column */}
            <div className="col-span-full px-8 py-10 md:col-span-7 md:px-10 md:py-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-sky-600">
                Partner Programme
              </p>
              <h2 id="partner-heading" className="mt-3 text-3xl font-extrabold leading-tight text-[#1a2744] md:text-4xl">
                Become an Authorised<br className="hidden sm:block" />
                <span className="text-sky-600">Channel Partner</span>
              </h2>
              <p className="mt-4 max-w-md text-base font-semibold leading-relaxed text-slate-600">
                Join our regional partner network. You manage local operations — we provide the verified tutors, platform, and support.
              </p>

              {/* Perks list */}
              <ul className="mt-6 space-y-2.5">
                {perks.map((p) => (
                  <li key={p.text} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm">
                      {p.icon}
                    </span>
                    {p.text}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/channel-partner"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-sky-400/25 transition hover:bg-sky-600 hover:shadow-lg"
                >
                  Apply to Partner
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M5 12h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-white/70 px-6 py-3 text-sm font-semibold text-sky-700 transition hover:bg-white hover:shadow-md"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
