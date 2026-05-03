"use client";

import React, { useMemo, useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";

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

type GradeId = (typeof GRADES)[number]["id"];

/** Tints stacked-paper SVG + squircle ring to match resource type. */
type ResourceTheme = "blue" | "violet" | "orange" | "teal" | "pink" | "amber" | "indigo" | "sky";

const RESOURCE_THEME = {
  blue: {
    back: "#dbeafe",
    mid: "#93c5fd",
    front: "#2563eb",
    ring: "ring-blue-200/85",
  },
  violet: {
    back: "#ede9fe",
    mid: "#c4b5fd",
    front: "#7c3aed",
    ring: "ring-violet-200/85",
  },
  orange: {
    back: "#ffedd5",
    mid: "#fdba74",
    front: "#ea580c",
    ring: "ring-orange-200/85",
  },
  teal: {
    back: "#ccfbf1",
    mid: "#5eead4",
    front: "#0d9488",
    ring: "ring-teal-200/85",
  },
  pink: {
    back: "#fce7f3",
    mid: "#f9a8d4",
    front: "#db2777",
    ring: "ring-pink-200/85",
  },
  amber: {
    back: "#fef3c7",
    mid: "#fcd34d",
    front: "#d97706",
    ring: "ring-amber-200/85",
  },
  indigo: {
    back: "#e0e7ff",
    mid: "#a5b4fc",
    front: "#4f46e5",
    ring: "ring-indigo-200/85",
  },
  sky: {
    back: "#e0f2fe",
    mid: "#7dd3fc",
    front: "#0284c7",
    ring: "ring-sky-200/85",
  },
} as const satisfies Record<ResourceTheme, { back: string; mid: string; front: string; ring: string }>;

function resourceThemeForSubjectId(id: string): ResourceTheme {
  switch (id) {
    case "ncert-sol":
    case "foundations":
    case "bridge-maths":
      return "blue";
    case "previous-papers":
    case "practice-papers":
    case "annual-prep":
    case "school-tests":
    case "worksheets":
    case "eng-comm":
    case "stories-rhymes":
      return "violet";
    case "sample-papers":
    case "concept-drills":
    case "primary-maths":
    case "early-maths":
      return "orange";
    case "ncert-books":
    case "revision-notes":
    case "evs-theme":
      return "teal";
    case "important-q":
    case "must-know":
    case "hot-questions":
    case "activity-kit":
      return "pink";
    case "practice-labs":
    case "aptitude":
      return "amber";
    case "full-syllabus-mock":
    case "domain-intro":
      return "indigo";
    case "play-readiness":
      return "sky";
    default:
      return "blue";
  }
}

type SubjectTemplate = {
  id: string;
  title: string;
  sub: string;
};

/** Per-grade curated subjects: order → first item is featured; rest fill the dynamic grid. */
const GRADE_LIBRARY: Record<GradeId, { subjects: SubjectTemplate[] }> = {
  "lkg-ukg": {
    subjects: [
      {
        id: "play-readiness",
        title: "Play & readiness",
        sub: "Movement, listening, and early concepts in short joyful sessions.",
      },
      {
        id: "stories-rhymes",
        title: "Stories & rhymes",
        sub: "Picture-led story time and catchy rhymes for language exposure.",
      },
      {
        id: "early-maths",
        title: "Early numeracy",
        sub: "Counting, shapes, and patterns without worksheet overload.",
      },
    ],
  },
  "1-5": {
    subjects: [
      {
        id: "foundations",
        title: "Foundational literacy",
        sub: "Reading fluency, spelling patterns, and age-right comprehension.",
      },
      {
        id: "primary-maths",
        title: "Primary mathematics",
        sub: "Concept-first arithmetic and word problems with visuals.",
      },
      {
        id: "evs-theme",
        title: "EVS & themes",
        sub: "Integrated science + social snippets mapped to school themes.",
      },
      {
        id: "worksheets",
        title: "Printable worksheets",
        sub: "Skill drills parents can supervise in fifteen-minute bursts.",
      },
      {
        id: "activity-kit",
        title: "Activity kit",
        sub: "Hands-on prompts that reinforce class topics through play.",
      },
    ],
  },
  "6": {
    subjects: [
      {
        id: "ncert-sol",
        title: "NCERT solutions",
        sub: "Line-by-line explanations across Maths, Science, and SST.",
      },
      {
        id: "concept-drills",
        title: "Concept drills",
        sub: "Focused exercises after each chapter — no filler sets.",
      },
      {
        id: "school-tests",
        title: "School-format tests",
        sub: "Half-yearly and annual style papers with rubrics.",
      },
      {
        id: "ncert-books",
        title: "NCERT books",
        sub: "Digital-first textbook layouts with bookmark-friendly chapters.",
      },
    ],
  },
  "7": {
    subjects: [
      {
        id: "ncert-sol",
        title: "NCERT solutions",
        sub: "Step-wise answers with diagrams where boards expect them.",
      },
      {
        id: "practice-papers",
        title: "Practice papers",
        sub: "Mixed-topic papers timed like unit tests.",
      },
      {
        id: "sample-papers",
        title: "Sample papers",
        sub: "Structured mocks before summatives.",
      },
      {
        id: "ncert-books",
        title: "NCERT books",
        sub: "Official texts plus chapter summaries.",
      },
      {
        id: "must-know",
        title: "Must-know questions",
        sub: "Teacher-flagged problems likely to recur.",
      },
    ],
  },
  "8": {
    subjects: [
      {
        id: "ncert-sol",
        title: "NCERT solutions",
        sub: "Science labs explained + Maths reasoning breakdowns.",
      },
      {
        id: "annual-prep",
        title: "Annual exam prep",
        sub: "Full-syllabus sets with difficulty markers.",
      },
      {
        id: "sample-papers",
        title: "Sample papers",
        sub: "Board-style framing even for school-level finals.",
      },
      {
        id: "ncert-books",
        title: "NCERT books",
        sub: "Readable PDFs aligned to class map.",
      },
      {
        id: "hot-questions",
        title: "High-yield questions",
        sub: "Curated lists for rapid revision nights.",
      },
    ],
  },
  "9": {
    subjects: [
      {
        id: "ncert-sol",
        title: "NCERT solutions",
        sub: "Science derivations + Social Science key points.",
      },
      {
        id: "previous-papers",
        title: "Previous year papers",
        sub: "Archive of school-level and benchmark tests.",
      },
      {
        id: "sample-papers",
        title: "Sample papers",
        sub: "Strict timing to build exam stamina.",
      },
      {
        id: "ncert-books",
        title: "NCERT books",
        sub: "All subjects with quick chapter jumps.",
      },
      {
        id: "important-q",
        title: "Important questions",
        sub: "Chapter tags for last-week revision.",
      },
    ],
  },
  "10": {
    subjects: [
      {
        id: "ncert-sol",
        title: "NCERT solutions",
        sub: "Board-ready working for every in-text and back exercise.",
      },
      {
        id: "previous-papers",
        title: "Previous year papers",
        sub: "CBSE archives and state variants in one lane.",
      },
      {
        id: "sample-papers",
        title: "Sample papers",
        sub: "Fresh sets with marking clarity every term.",
      },
      {
        id: "ncert-books",
        title: "NCERT books",
        sub: "Clean digital books for on-the-go revision.",
      },
      {
        id: "important-q",
        title: "Important questions",
        sub: "Predicted repeats vetted by senior tutors.",
      },
    ],
  },
  "11": {
    subjects: [
      {
        id: "ncert-sol",
        title: "NCERT solutions",
        sub: "Core subjects with competitive depth where needed.",
      },
      {
        id: "previous-papers",
        title: "Previous year papers",
        sub: "Board + entrance-style archives by chapter.",
      },
      {
        id: "sample-papers",
        title: "Sample papers",
        sub: "Part A/B splits matching current blueprints.",
      },
      {
        id: "revision-notes",
        title: "Revision notes",
        sub: "One-pagers per topic for weekly refresh.",
      },
      {
        id: "important-q",
        title: "Important questions",
        sub: "JEE/NEET crossover highlights marked clearly.",
      },
      {
        id: "practice-labs",
        title: "Numeric & case practice",
        sub: "Physics chem maths drill sets beyond theory.",
      },
    ],
  },
  "12": {
    subjects: [
      {
        id: "ncert-sol",
        title: "NCERT solutions",
        sub: "Full grade-12 coverage with exam commentary.",
      },
      {
        id: "previous-papers",
        title: "Previous year papers",
        sub: "Board series last ten years, sorted by topic.",
      },
      {
        id: "sample-papers",
        title: "Sample papers",
        sub: "Mock weeks with answer keys under 24h.",
      },
      {
        id: "revision-notes",
        title: "Revision notes",
        sub: "Condensed decks for PCM, PCB, commerce paths.",
      },
      {
        id: "important-q",
        title: "Important questions",
        sub: "Board + entrance overlap flagged by difficulty.",
      },
      {
        id: "full-syllabus-mock",
        title: "Full syllabus mocks",
        sub: "3-hour simulations with analytics snapshots.",
      },
    ],
  },
  "12-pass": {
    subjects: [
      {
        id: "bridge-maths",
        title: "Bridge mathematics",
        sub: "Calc-ready algebra and trig refreshers before college.",
      },
      {
        id: "eng-comm",
        title: "English & communication",
        sub: "Writing studio for applications and interviews.",
      },
      {
        id: "aptitude",
        title: "Aptitude & reasoning",
        sub: "Timed sets for entrance and placement screens.",
      },
      {
        id: "domain-intro",
        title: "Domain intros",
        sub: "Micro-courses on econ, coding, design thinking.",
      },
    ],
  },
};

function libraryForGrade(gradeId: string): { subjects: SubjectTemplate[] } {
  const g = gradeId as GradeId;
  return GRADE_LIBRARY[g] ?? GRADE_LIBRARY["10"];
}

/** Stacked papers — layer colours from resource theme + white rule lines. */
function StackedPapersGlyph({
  className,
  back,
  mid,
  front,
}: {
  className?: string;
  back: string;
  mid: string;
  front: string;
}) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect x="8" y="7" width="22" height="27" rx="2.75" fill={back} />
      <rect x="10.5" y="9" width="22" height="27" rx="2.75" fill={mid} />
      <rect x="13" y="11" width="22" height="27" rx="2.75" fill={front} />
      <path d="M17 17.5h14M17 21h11.5M17 24.5h14" stroke="white" strokeWidth="2" strokeLinecap="round" opacity={0.95} />
    </svg>
  );
}

/** White squircle tile + theme-tinted ring/shadow (matches card resource type). */
function ResourceIconSquircle({ size, theme }: { size: "compact" | "featured"; theme: ResourceTheme }) {
  const t = RESOURCE_THEME[theme];
  const outer =
    size === "featured"
      ? "h-[4.25rem] w-[4.25rem] rounded-[1.05rem]"
      : "h-14 w-14 rounded-[1rem]";
  const glyph = size === "featured" ? "h-10 w-10" : "h-9 w-9";

  return (
    <div
      className={[
        "flex shrink-0 items-center justify-center bg-white ring-1 transition group-hover:shadow-[0_10px_28px_-12px_rgba(15,23,42,0.15)]",
        size === "featured"
          ? `shadow-[0_4px_18px_rgba(15,23,42,0.12)] ${t.ring}`
          : `shadow-[0_2px_10px_rgba(15,23,42,0.07)] ${t.ring}`,
        outer,
      ].join(" ")}
    >
      <StackedPapersGlyph className={glyph} back={t.back} mid={t.mid} front={t.front} />
    </div>
  );
}

export function ExploreCoursesSection() {
  const [activeGrade, setActiveGrade] = useState<string>("10");

  const subjects = useMemo(() => libraryForGrade(activeGrade).subjects, [activeGrade]);

  const featured = subjects[0];
  const compact = subjects.slice(1);
  const gradeLabel = GRADES.find((g) => g.id === activeGrade)?.label ?? "this class";

  return (
    <section
      className="w-full min-w-0 overflow-x-clip scroll-mt-36 py-12 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] md:scroll-mt-32 md:py-16"
      aria-labelledby="explore-offerings-heading"
    >
      <div className="relative mx-auto w-full min-w-0 max-w-[1200px] overflow-hidden rounded-[1.25rem] border border-blue-100/90 bg-white px-4 py-7 shadow-[0_20px_50px_rgba(37,99,235,0.08)] sm:rounded-[1.75rem] sm:px-5 sm:py-8 md:rounded-[2rem] md:px-10 md:py-12">
        <div
          className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-blue-400/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-blue-200/25 blur-3xl"
          aria-hidden
        />

        <div className="relative flex min-w-0 flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="w-full min-w-0 max-w-2xl">
            <SectionHeading
              id="explore-offerings-heading"
              label="Learning library"
              title="Resources built for your grade"
              sub="Switch classes to preview curated study kits — subjects and resource types update for each stage, from early years to Class 12."
            />
          </div>
        </div>

        <div className="relative z-[1] mt-6 md:mt-10">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-blue-950/50 md:hidden">
            Swipe classes — →
          </p>
          <div
            className={[
              "flex touch-pan-x snap-x snap-mandatory items-stretch gap-2 overflow-x-auto overscroll-x-contain rounded-2xl border border-blue-100/90 bg-blue-50/60 p-2 [-ms-overflow-style:none] [scrollbar-width:none] [scroll-padding-inline:10px]",
              "[&::-webkit-scrollbar]:hidden md:inline-flex md:snap-none md:flex-nowrap md:items-center md:justify-start md:overflow-visible",
            ].join(" ")}
            aria-label="Select class or grade"
          >
            {GRADES.map((g) => {
              const isActive = activeGrade === g.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveGrade(g.id)}
                  className={[
                    "inline-flex min-h-[44px] shrink-0 snap-start items-center justify-center gap-1.5 rounded-xl px-3.5 py-2.5 text-left text-[13px] font-semibold transition-all",
                    "active:scale-[0.98] motion-reduce:active:scale-100",
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

        <div className="relative z-[1] mt-7 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-blue-950/70">
              Study materials
            </h3>
            <p className="mt-1 text-pretty text-[13px] leading-snug text-slate-600">
              <span className="font-semibold text-blue-950">{gradeLabel}</span>
              {" — "}
              {subjects.length} resource {subjects.length === 1 ? "type" : "types"}
              {compact.length > 0 ? " (featured + grid below)." : "."}
            </p>
          </div>
          <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-blue-200/80 to-transparent sm:block" />
        </div>

        <div className="relative z-[1] mt-5 min-w-0" key={activeGrade}>
          {featured ? (
            <div className="flex min-w-0 flex-col gap-3 lg:min-h-[260px] lg:flex-row lg:items-stretch lg:gap-4">
              <div
                className={[
                  "min-h-0 min-w-0 lg:flex lg:min-w-0",
                  compact.length > 0 ? "lg:w-[min(100%,26rem)] lg:max-w-[46%] lg:flex-shrink-0" : "lg:w-full",
                ].join(" ")}
              >
                <a
                  href="#services"
                  className="group relative flex h-full min-h-[200px] w-full min-w-0 flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-5 shadow-[0_16px_40px_-12px_rgba(37,99,235,0.45)] transition [-webkit-tap-highlight-color:transparent] hover:brightness-[1.03] active:brightness-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 motion-reduce:transition-none sm:min-h-[240px] sm:rounded-[1.35rem] sm:p-6 md:p-8 lg:min-h-full lg:rounded-3xl"
                >
                  <div className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" aria-hidden />
                  <div className="pointer-events-none absolute -bottom-10 left-1/4 h-36 w-56 rounded-full bg-indigo-400/25 blur-2xl" aria-hidden />
                  <ResourceIconSquircle size="featured" theme={resourceThemeForSubjectId(featured.id)} />
                  <div className="relative mt-6 flex flex-1 flex-col">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-100/90">
                      Featured for {gradeLabel}
                    </p>
                    <p className="mt-2 text-balance break-words text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl md:text-[1.65rem]">
                      {featured.title}
                    </p>
                    <p className="mt-3 max-w-md text-pretty text-sm font-medium leading-relaxed text-blue-100/95">{featured.sub}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-white">
                      Open in library
                      <svg className="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" aria-hidden>
                        <path d="M6 12h12M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>

              {compact.length > 0 ? (
                <ul
                  className={[
                    "list-none grid min-h-0 min-w-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 lg:gap-4 xl:grid-cols-3",
                    compact.length <= 2 ? "lg:content-start xl:grid-cols-2" : "",
                  ].join(" ")}
                  aria-label={`More resources for ${gradeLabel}`}
                >
                  {compact.map((m) => (
                    <li key={`${activeGrade}-${m.id}`} className="min-h-0 min-w-0">
                      <a
                        href="#services"
                        className={[
                          "group flex h-full min-h-[min(160px,44vw)] flex-col rounded-2xl border border-slate-200/95 bg-white p-4 shadow-[0_4px_14px_rgba(15,23,42,0.06)] transition [-webkit-tap-highlight-color:transparent] sm:min-h-[152px] sm:p-5 lg:rounded-[1.25rem]",
                          "hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_14px_28px_-10px_rgba(37,99,235,0.18)]",
                          "active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-1 sm:focus-visible:ring-offset-2",
                        ].join(" ")}
                      >
                        <ResourceIconSquircle size="compact" theme={resourceThemeForSubjectId(m.id)} />
                        <p className="mt-3 text-balance break-words text-[14px] font-bold leading-snug text-slate-900 sm:text-[15px]">{m.title}</p>
                        <p className="mt-1 flex-1 text-pretty text-[12px] leading-snug text-slate-600 line-clamp-4 sm:text-[13px] sm:line-clamp-3">{m.sub}</p>
                        <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-blue-600 sm:text-xs">
                          View
                          <svg className="h-3 w-3 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                            <path d="M6 12h12M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
