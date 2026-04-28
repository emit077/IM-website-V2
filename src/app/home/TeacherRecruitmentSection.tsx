"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { withBasePath } from "@/lib/withBasePath";
import { SectionHeading } from "@/components/shared/SectionHeading";

function IconCoaching(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={props.className} aria-hidden>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      <path d="M8 7h8" />
      <path d="M8 11h5" />
    </svg>
  );
}

function IconSchool(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={props.className} aria-hidden>
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 5v8.5" />
      <path d="M6 5v8.5" />
      <path d="M2.7 6.3 12 2l9.3 4.2a1 1 0 0 1 .7.95V19a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.25a1 1 0 0 1 .7-.95Z" />
    </svg>
  );
}

function IconCollege(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={props.className} aria-hidden>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function IconEdtech(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={props.className} aria-hidden>
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}

function IconCorporate(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={props.className} aria-hidden>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6h20v-5a1 1 0 0 0-1-1h-1" />
      <path d="M9 6h1" />
      <path d="M9 10h1" />
      <path d="M9 14h1" />
      <path d="M14 6h1" />
      <path d="M14 10h1" />
      <path d="M14 14h1" />
    </svg>
  );
}

const hiringTargets = [
  { label: "Coaching Institutes", blurb: "Test-prep & centres", Icon: IconCoaching, iconBg: "from-violet-500/15 to-indigo-500/10", iconFg: "text-indigo-700" },
  { label: "Schools", blurb: "K–12 programmes", Icon: IconSchool, iconBg: "from-sky-500/15 to-blue-500/10", iconFg: "text-blue-700" },
  { label: "Colleges", blurb: "Higher education", Icon: IconCollege, iconBg: "from-amber-500/15 to-orange-500/10", iconFg: "text-amber-800" },
  { label: "EdTech Companies", blurb: "Product & content teams", Icon: IconEdtech, iconBg: "from-cyan-500/15 to-teal-500/10", iconFg: "text-teal-800" },
  { label: "Corporate Academic Programs", blurb: "L&D & upskilling", Icon: IconCorporate, iconBg: "from-slate-500/12 to-slate-600/10", iconFg: "text-slate-800" },
] as const;

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
          className="relative overflow-hidden rounded-[2rem] border border-blue-100/90 bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/40 p-8 md:p-12"
        >

          <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div>

              <SectionHeading
                id="recruitment-heading"
                label="Institutional Hiring"
                title="Hire Verified Teachers at Scale"
                sub="From single hires to bulk staffing, Indian Mentors' institutional division handles verified teacher sourcing, interview coordination, and contract management for educational organisations."
              />

              {/* Hiring targets — scannable grid */}
              <div className="mt-8">
                <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-blue-700/85">
                      We hire for
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-600">
                      Every type of learning organisation — one verified pipeline.
                    </p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
                  {hiringTargets.map((t, i) => {
                    const Icon = t.Icon;
                    return (
                      <li key={t.label} className={i === 4 ? "sm:col-span-2" : ""}>
                        <div
                          className="group flex h-full gap-3 rounded-2xl border border-blue-100/90 bg-white/90 p-3.5 shadow-sm shadow-blue-500/5 ring-1 ring-blue-500/[0.06] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/10"
                        >
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${t.iconBg} ${t.iconFg}`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0 flex-1 pt-0.5">
                            <p className="text-sm font-bold leading-snug text-blue-950">{t.label}</p>
                            <p className="mt-0.5 text-xs font-medium leading-snug text-slate-500">{t.blurb}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-700"
                >
                  Hire Teachers
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M5 12h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-6 py-3 text-sm font-semibold text-blue-900 backdrop-blur-sm transition hover:bg-white"
                >
                  Talk to Recruiter
                </a>
              </div>
            </div>

            {/* Right — image + features grid */}
            <div className="h-full">
              <div className="h-full overflow-hidden rounded-2xl">
                <Image
                  src={withBasePath("/assets/home/hire/hire.png")}
                  alt="Institutional teacher hiring support"
                  width={720}
                  height={420}
                  className="h-full min-h-[320px] w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
