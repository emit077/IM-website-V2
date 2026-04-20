"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, SearchIcon } from "@/components/shared/SvgIcons";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

function SegmentButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-9 flex-1 rounded-xl px-3 text-xs font-bold transition ${active
        ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 ring-1 ring-white/20"
        : "text-blue-900/70 hover:bg-blue-50 dark:text-blue-100/80 dark:hover:bg-blue-950/40"
        }`}
    >
      {children}
    </button>
  );
}

export function SmartSearchBar({
  onSearch,
}: {
  onSearch: (payload: {
    subject: string;
    grade: string;
    location: string;
    mode: "Online" | "Home";
  }) => void;
}) {
  const [expanded, setExpanded] = useState(true);
  const [subject, setSubject] = useState("Mathematics");
  const [grade, setGrade] = useState("Grade 6-8");
  const [location, setLocation] = useState("");
  const [mode, setMode] = useState<"Online" | "Home">("Online");

  const reduced = useReducedMotion();

  useEffect(() => {
    const onResize = () => setExpanded(true);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      className=" top-[88px] z-30 mx-auto px-4"
      onMouseEnter={() => setExpanded(true)}
    >
      <motion.form
        initial={false}
        animate={{ width: expanded ? "100%" : "min(540px,100%)" }}
        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
        className="mt-6 w-full rounded-[2rem] border border-blue-100/90 bg-gradient-to-br from-white/95 via-blue-50/50 to-indigo-50/40 p-3 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/10 backdrop-blur-xl dark:border-blue-500/25 dark:from-blue-950/50 dark:via-zinc-950/60 dark:to-indigo-950/40 dark:ring-blue-400/15"
        onFocusCapture={() => setExpanded(true)}
        onSubmit={(e) => {
          e.preventDefault();
          onSearch({ subject, grade, location, mode });
        }}
      >
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-blue-600/15 to-indigo-600/20 p-2 text-blue-700 ring-1 ring-blue-200/80 dark:text-blue-200 dark:ring-blue-500/30">
            <SearchIcon />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <div className="flex-1">
                <label className="sr-only" htmlFor="subject">
                  Subject
                </label>
                <select
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="h-11 w-full appearance-none rounded-2xl border border-blue-100/90 bg-white/80 px-3 text-sm font-semibold text-blue-950 outline-none transition placeholder:text-blue-900/40 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/15 dark:border-blue-500/25 dark:bg-blue-950/30 dark:text-zinc-50 dark:placeholder:text-blue-200/40"
                >
                  <option>Mathematics</option>
                  <option>Science</option>
                  <option>English</option>
                  <option>Computer Science</option>
                  <option>Social Science</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="sr-only" htmlFor="grade">
                  Grade
                </label>
                <select
                  id="grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="h-11 w-full appearance-none rounded-2xl border border-blue-100/90 bg-white/80 px-3 text-sm font-semibold text-blue-950 outline-none transition placeholder:text-blue-900/40 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/15 dark:border-blue-500/25 dark:bg-blue-950/30 dark:text-zinc-50 dark:placeholder:text-blue-200/40"
                >
                  <option>Grade 1-5</option>
                  <option>Grade 6-8</option>
                  <option>Grade 9-10</option>
                  <option>Grade 11-12</option>
                </select>
              </div>

              <div className="hidden flex-1 sm:block">
                <label className="sr-only" htmlFor="location">
                  Location
                </label>
                <input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., Bengaluru, Indiranagar"
                  className="h-11 w-full rounded-2xl border border-blue-100/90 bg-white/80 px-3 text-sm font-semibold text-blue-950 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-500/15 dark:border-blue-500/25 dark:bg-blue-950/30 dark:text-zinc-50"
                />
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-2xl border border-blue-100/90 bg-blue-50/70 p-1 dark:border-blue-500/25 dark:bg-blue-950/35">
                <SegmentButton
                  active={mode === "Online"}
                  onClick={() => setMode("Online")}
                >
                  Online
                </SegmentButton>
                <SegmentButton
                  active={mode === "Home"}
                  onClick={() => setMode("Home")}
                >
                  Home
                </SegmentButton>
              </div>

              <div className="flex-1" />

              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-md shadow-blue-500/30 ring-1 ring-white/15 transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/35"
                animate={
                  reduced
                    ? undefined
                    : expanded
                      ? {
                        boxShadow: [
                          "0 0 0 rgba(0,0,0,0)",
                          "0 0 24px rgba(59,130,246,0.18)",
                        ],
                      }
                      : undefined
                }
              >
                <span className="hidden sm:inline">Search</span>
                <ArrowRightIcon />
              </motion.button>
            </div>

            <div className="mt-2 text-xs font-semibold text-blue-900/55 dark:text-blue-100/60">
              Matching verified tutors in minutes.{" "}
              <span className="font-bold text-blue-600 dark:text-blue-300">No spam.</span>
            </div>
          </div>
        </div>
      </motion.form>
    </div>
  );
}

