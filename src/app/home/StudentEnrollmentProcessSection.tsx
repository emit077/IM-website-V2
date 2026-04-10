"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Register Online",
    desc: "Fill out the quick enrollment form and share your subject, grade, and preferred schedule.",
    iconBg: "bg-[#B39DDB]",
    icon: (
      <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    n: "02",
    title: "Get Tutor Matched",
    desc: "Our counsellors shortlist verified tutors based on your subject, level, and availability within 24 hours.",
    iconBg: "bg-[#FF8A65]",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  {
    n: "03",
    title: "Attend Free Demo",
    desc: "Experience the tutor's teaching style in a free demo session. Share feedback and confirm your match.",
    iconBg: "bg-[#F48FB1]",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="m12 7 5 5-5 5-5-5 5-5z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    n: "04",
    title: "Choose Your Plan",
    desc: "Select from Gold, Diamond, or Platinum — half-yearly or annual — with upfront or instalment payments.",
    iconBg: "bg-[#4DB6AC]",
    icon: (
      <>
        <path d="M6 17h12M4 17V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 7h8M8 11h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    n: "05",
    title: "Start Learning",
    desc: "Begin structured sessions with weekly progress tracking, homework support, and exam preparation.",
    iconBg: "bg-[#64B5F6]",
    icon: (
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a2 2 0 0 0-2-2H2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a2 2 0 0 1 2-2h8z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </>
    ),
  },
];

export function StudentEnrollmentProcessSection() {
  return (
    <section className="px-4 py-16 md:py-20" aria-labelledby="enrollment-heading">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-sky-500">
            How it works
          </p>
          <h2 id="enrollment-heading" className="mt-3 text-3xl font-extrabold text-[#1a2744] sm:text-4xl">
            Start Learning in 5 Simple Steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            From registration to your first session — simple, transparent, and completely risk-free with a free demo.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="group relative flex flex-col rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_4px_20px_rgba(14,165,233,0.07)] transition duration-300 hover:-translate-y-1 hover:border-sky-200/80 hover:shadow-[0_16px_40px_rgba(14,165,233,0.12)]"
            >
              {/* Step number pill */}
              <span className="mb-4 inline-flex w-fit rounded-full border border-sky-100 bg-sky-50 px-2.5 py-0.5 text-xs font-extrabold tracking-widest text-sky-500">
                STEP {s.n}
              </span>

              {/* Icon */}
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${s.iconBg} text-white shadow-md ring-2 ring-white/60`}>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                  {s.icon}
                </svg>
              </div>

              <h3 className="text-sm font-extrabold text-[#1a2744] sm:text-base">{s.title}</h3>
              <p className="mt-2 flex-1 text-xs font-semibold leading-relaxed text-slate-500">{s.desc}</p>

              {/* Connector arrow (hidden on last) */}
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:flex">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-sky-100 bg-white shadow-sm">
                    <svg className="h-3 w-3 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-400/25 transition hover:bg-sky-600 hover:shadow-xl"
          >
            Register &amp; Get Matched Today
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M5 12h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="mt-3 text-xs font-semibold text-slate-400">Free demo · No commitment · Match in 24 hours</p>
        </motion.div>
      </div>
    </section>
  );
}
