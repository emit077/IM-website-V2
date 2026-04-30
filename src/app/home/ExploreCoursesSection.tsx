"use client";

import React, { useId, useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";

/** Blue-forward brand */
const THEME = {
  navy: "#1e40af",
  brandBlue: "#2563eb",
} as const;

const GRADES = [
  { id: "12-pass", label: "Class 12 pass" },
  { id: "12", label: "Class 12" },
  { id: "11", label: "Class 11" },
  { id: "10", label: "Class 10" },
  { id: "9", label: "Class 9" },
  { id: "8", label: "Class 8" },
  { id: "7", label: "Class 7" },
  { id: "6", label: "Class 6" },
  { id: "1-5", label: "Class 1 – 5" },
  { id: "lkg-ukg", label: "LKG – UKG", isNew: true as const },
] as const;

type Material = {
  title: string;
  panel: string;
  iconWrap: string;
  art: React.ReactNode;
};

function NcertBooksArt({ uid }: { uid: string }) {
  const g1 = `${uid}-g1`;
  const g2 = `${uid}-g2`;
  return (
    <svg viewBox="0 0 80 80" className="h-11 w-11" aria-hidden>
      <rect x="18" y="22" width="44" height="52" rx="5" fill={`url(#${g1})`} opacity="0.9" />
      <rect x="22" y="18" width="36" height="48" rx="4" fill={`url(#${g2})`} />
      <defs>
        <linearGradient id={g1} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ca8a04" />
          <stop offset="100%" stopColor={THEME.navy} />
        </linearGradient>
        <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor={THEME.brandBlue} />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PapersArt({ tone }: { tone: "purple" | "coral" }) {
  const fills =
    tone === "purple"
      ? ["#D1C4E9", "#B39DDB", "#9575CD"]
      : ["#FFCCBC", "#FF8A65", "#F4511E"];
  return (
    <svg viewBox="0 0 80 80" className="h-11 w-11" aria-hidden>
      <rect x="20" y="28" width="36" height="44" rx="4" fill={fills[0]} transform="rotate(-10 38 50)" />
      <rect x="24" y="24" width="36" height="44" rx="4" fill={fills[1]} transform="rotate(6 42 46)" />
      <rect x="22" y="20" width="36" height="44" rx="4" fill={fills[2]} />
      <path d="M28 34h24M28 42h16M28 50h20" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

function buildMaterials(uidBase: string): Material[] {
  return [
    {
      title: "NCERT solutions",
      panel: "bg-gradient-to-br from-blue-50/90 via-sky-50/40 to-white",
      iconWrap: "bg-white/95 shadow-sm ring-1 ring-blue-200/70",
      art: <NcertBooksArt uid={`${uidBase}-ncert-sol`} />,
    },
    {
      title: "Previous year papers",
      panel: "bg-gradient-to-br from-[#ede7f6]/90 via-purple-50/40 to-white",
      iconWrap: "bg-white/95 shadow-sm ring-1 ring-[#D1C4E9]/90 text-[#5E35B1]",
      art: <PapersArt tone="purple" />,
    },
    {
      title: "Sample papers",
      panel: "bg-gradient-to-br from-[#fbe9e7]/80 via-orange-50/50 to-white",
      iconWrap: "bg-white/95 shadow-sm ring-1 ring-[#FFCCBC]/90 text-[#E64A19]",
      art: <PapersArt tone="coral" />,
    },
    {
      title: "NCERT books",
      panel: "bg-gradient-to-br from-[#e0f2f1]/90 via-teal-50/40 to-white",
      iconWrap: "bg-white/95 shadow-sm ring-1 ring-[#B2DFDB]/90 text-[#00695C]",
      art: (
        <svg viewBox="0 0 80 80" className="h-11 w-11" aria-hidden>
          <rect x="24" y="18" width="10" height="48" rx="2" fill="#4DB6AC" />
          <rect x="36" y="14" width="10" height="52" rx="2" fill="#26A69A" />
          <rect x="48" y="20" width="10" height="46" rx="2" fill="#00897B" />
        </svg>
      ),
    },
    {
      title: "Important questions",
      panel: "bg-gradient-to-br from-[#fce4ec]/80 via-pink-50/40 to-white",
      iconWrap: "bg-white/95 shadow-sm ring-1 ring-[#F48FB1]/40 text-[#AD1457]",
      art: <PapersArt tone="coral" />,
    },
  ];
}

export function ExploreCoursesSection() {
  const uidBase = useId().replace(/:/g, "");
  const materials = buildMaterials(uidBase);
  const [activeGrade, setActiveGrade] = useState<string>("10");
  const activeGradeLabel = GRADES.find((grade) => grade.id === activeGrade)?.label ?? "Class 10";

  return (
    <section
      className="scroll-mt-36 px-4 py-12 md:scroll-mt-32 md:py-16"
      aria-labelledby="explore-offerings-heading"
    >
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[1.75rem] border border-blue-100/90 bg-white px-4 py-8 shadow-[0_20px_50px_rgba(37,99,235,0.08)] sm:px-5 md:rounded-[2rem] md:px-10 md:py-12">
        <div
          className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-blue-400/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-blue-200/25 blur-3xl"
          aria-hidden
        />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <SectionHeading
              id="explore-offerings-heading"
              label="Learning library"
              title="Resources built for your grade"
              sub="Switch classes to preview curated study kits with chapter-wise notes, papers, and board-aligned books in one place."
            />
          </div>
          <div className="inline-flex max-w-max items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-1.5 text-xs font-semibold text-blue-800">
            <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden />
            Showing kit for {activeGradeLabel}
          </div>
        </div>

        <div className="relative z-[1] mt-6 md:mt-10">
          <div className="flex snap-x snap-mandatory items-center gap-2 overflow-x-auto rounded-2xl border border-blue-100/90 bg-blue-50/60 p-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:inline-flex md:flex-nowrap md:justify-start md:overflow-visible">
            {GRADES.map((g) => {
              const isActive = activeGrade === g.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setActiveGrade(g.id)}
                  className={[
                    "inline-flex shrink-0 snap-start items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-[13px] font-semibold transition-all",
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                      : "text-blue-950/85 hover:bg-white hover:text-blue-950",
                  ].join(" ")}
                >
                  {g.label}
                  {"isNew" in g && g.isNew ? (
                    <span className="rounded-md bg-white/95 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-700 shadow-sm ring-1 ring-white/50">
                      New
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative z-[1] mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-blue-950/70">
            Study materials
          </h3>
          <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-blue-200/80 to-transparent sm:block" />
        </div>

        <div className="relative z-[1] mt-4">
          <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-5">
            {materials.map((m) => (
              <a
                key={m.title}
                href="#services"
                className={[
                  "group relative flex min-h-[10.5rem] flex-col rounded-2xl border border-black/[0.06] p-4 md:min-h-[11rem] md:p-5",
                  "shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition",
                  "hover:border-blue-300/40 hover:shadow-[0_12px_28px_rgba(37,99,235,0.1)]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40",
                  m.panel,
                ].join(" ")}
              >
                <div
                  className={[
                    "flex h-14 w-14 items-center justify-center rounded-2xl transition group-hover:scale-[1.03]",
                    m.iconWrap,
                  ].join(" ")}
                >
                  {m.art}
                </div>
                <p className="mt-4 text-left text-[15px] font-bold leading-snug text-blue-950">
                  {m.title}
                </p>
                <span className="mt-auto pt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 opacity-90 group-hover:opacity-100">
                  Open
                  <svg className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M6 12h12M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
