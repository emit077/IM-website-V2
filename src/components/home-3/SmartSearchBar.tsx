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
        ? "bg-gradient-to-br from-blue-500 to-blue-500 text-white shadow-sm"
        : "text-zinc-600 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/5"
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
        className="mt-6 w-full rounded-[2rem] border border-white/12 bg-white/55 p-3 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/35"
        onFocusCapture={() => setExpanded(true)}
        onSubmit={(e) => {
          e.preventDefault();
          onSearch({ subject, grade, location, mode });
        }}
      >
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-2 text-blue-700 ring-1 ring-blue-500/15 dark:text-blue-200">
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
                  className="h-11 w-full appearance-none rounded-2xl border border-black/5 bg-white/60 px-3 text-sm font-semibold text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-500/40 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-zinc-50"
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
                  className="h-11 w-full appearance-none rounded-2xl border border-black/5 bg-white/60 px-3 text-sm font-semibold text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-500/40 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-zinc-50"
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
                  className="h-11 w-full rounded-2xl border border-black/5 bg-white/60 px-3 text-sm font-semibold text-zinc-900 outline-none transition focus:border-blue-500/40 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-zinc-50"
                />
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-2xl border border-black/5 bg-white/60 p-1 dark:border-white/10 dark:bg-white/5">
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
                className=" inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm ring-1 ring-white/10 transition hover:shadow-md hover:shadow-zinc-950/20 dark:bg-white dark:text-zinc-950"
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

            <div className="mt-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              Matching verified tutors in minutes.{" "}
              <span className="text-blue-600 dark:text-blue-300">No spam.</span>
            </div>
          </div>
        </div>
      </motion.form>
    </div>
  );
}

