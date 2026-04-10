"use client";

import React, { useId, useRef, useState } from "react";

/** Aligns with landing-page-1: navy headings, CTA yellow, service strip hues */
const THEME = {
  navy: "#1a2744",
  gold: "#FFD600",
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
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor={THEME.gold} />
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
      panel: "bg-gradient-to-br from-amber-50/90 via-yellow-50/50 to-white",
      iconWrap: "bg-white/95 shadow-sm ring-1 ring-amber-200/70",
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
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: Math.min(300, el.clientWidth * 0.75), behavior: "smooth" });
  };

  return (
    <section
      className="scroll-mt-36 px-4 pb-14 pt-6 md:scroll-mt-32 md:pb-20 md:pt-10"
      aria-labelledby="explore-offerings-heading"
    >
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white px-5 py-10 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:px-10 md:py-12">
        <div
          className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-sky-400/[0.10] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-blue-200/25 blur-3xl"
          aria-hidden
        />

        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
              Learning library
            </p>
            <h2
              id="explore-offerings-heading"
              className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#1a2744] sm:text-3xl md:text-[2rem]"
            >
              Resources built{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-[#1a2744] bg-clip-text text-transparent">
                for your grade
              </span>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
              Switch classes to preview what we bundle—notes, papers, and book-aligned help in one place.
            </p>
          </div>
          <p className="hidden text-right text-xs font-medium text-slate-500 md:block md:max-w-[200px] md:text-[13px] md:leading-snug">
            Tip · Swipe the row on your phone, or use the arrow on larger screens.
          </p>
        </div>

        <div className="relative z-[1] mt-8 md:mt-10">
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200/90 bg-[#F8F9FA]/90 p-2 md:inline-flex md:flex-nowrap md:justify-start">
            {GRADES.map((g) => {
              const isActive = activeGrade === g.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setActiveGrade(g.id)}
                  className={[
                    "inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[13px] font-semibold transition-all",
                    isActive
                      ? "bg-sky-500 text-white shadow-md shadow-sky-400/30"
                      : "text-[#1a2744]/85 hover:bg-white hover:text-[#1a2744]",
                  ].join(" ")}
                >
                  {g.label}
                  {"isNew" in g && g.isNew ? (
                    <span className="rounded-md bg-[#FFD600] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-900 shadow-sm">
                      New
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative z-[1] mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#1a2744]/70">
            Study materials
          </h3>
          <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent sm:block" />
        </div>

        <div className="relative z-[1] mt-5">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-4"
          >
            {materials.map((m) => (
              <a
                key={m.title}
                href="#services"
                className={[
                  "group relative flex min-w-[11.5rem] max-w-[13rem] shrink-0 snap-start flex-col rounded-2xl border border-black/[0.06] p-4 md:min-w-[13.5rem] md:max-w-[14rem] md:p-5",
                  "shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition",
                  "hover:border-sky-400/25 hover:shadow-[0_12px_28px_rgba(14,165,233,0.08)]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/35",
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
                <p className="mt-4 text-left text-[15px] font-bold leading-snug text-[#1a2744]">
                  {m.title}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-sky-600 opacity-90 group-hover:opacity-100">
                  Open
                  <svg className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M6 12h12M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollNext}
            className="absolute -right-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-sky-100 bg-white text-[#1a2744] shadow-md transition hover:border-sky-400/35 hover:text-sky-600 md:flex"
            aria-label="Scroll study materials"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
