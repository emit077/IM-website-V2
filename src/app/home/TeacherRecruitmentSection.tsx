"use client";

import { motion } from "framer-motion";

const hiringTargets = [
  { icon: "🏫", label: "Coaching Institutes" },
  { icon: "🏫", label: "Schools" },
  { icon: "🎓", label: "Colleges" },
  { icon: "💻", label: "EdTech Companies" },
  { icon: "🏢", label: "Corporate Academic Programs" },
];

const recruitmentFeatures = [
  { icon: "📋", label: "Pre-verified teacher database" },
  { icon: "👥", label: "Bulk recruitment support" },
  { icon: "🗓️", label: "Interview coordination" },
  { icon: "🔍", label: "Background verification" },
  { icon: "📄", label: "Contract staffing support" },
];

export function TeacherRecruitmentSection() {
  return (
    <section className="px-4 py-10 md:py-14" aria-labelledby="recruitment-heading">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1a2744] via-[#1e3a6e] to-[#1a4080] p-8 shadow-[0_24px_80px_rgba(26,39,68,0.30)] md:p-12"
        >
          {/* Background dot grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
            aria-hidden
          />
          {/* Glow blobs */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-16 left-1/4 h-56 w-56 rounded-full bg-blue-400/15 blur-2xl" aria-hidden />

          <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-sky-400">
                Institutional Hiring
              </p>
              <h2 id="recruitment-heading" className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
                Hire Verified Teachers<br className="hidden sm:block" /> at Scale
              </h2>
              <p className="mt-4 text-base font-semibold leading-relaxed text-sky-100/80">
                From single hires to bulk staffing, Indian Mentors&apos; institutional division handles verified teacher sourcing, interview coordination, and contract management for educational organisations.
              </p>

              {/* Hiring targets */}
              <div className="mt-6">
                <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-sky-400/80">
                  We hire for
                </p>
                <div className="flex flex-wrap gap-2">
                  {hiringTargets.map((t) => (
                    <span key={t.label} className="flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold text-sky-200">
                      <span>{t.icon}</span>
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-bold text-[#1a2744] shadow-lg shadow-sky-400/20 transition hover:bg-sky-300 hover:shadow-xl"
                >
                  Hire Teachers
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M5 12h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-white/10 px-6 py-3 text-sm font-semibold text-sky-200 backdrop-blur-sm transition hover:bg-white/20"
                >
                  Talk to Recruiter
                </a>
              </div>
            </div>

            {/* Right — features grid */}
            <div>
              <p className="mb-4 text-xs font-extrabold uppercase tracking-widest text-sky-400/80">
                What&apos;s included
              </p>
              <ul className="space-y-3">
                {recruitmentFeatures.map((f) => (
                  <li key={f.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/8 px-5 py-4 backdrop-blur-sm">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/15 text-xl ring-1 ring-sky-400/20">
                      {f.icon}
                    </span>
                    <span className="text-sm font-semibold text-sky-50">{f.label}</span>
                    <span className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-400/20 text-[10px] font-extrabold text-sky-300">✓</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
