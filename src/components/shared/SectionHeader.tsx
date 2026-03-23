"use client";

import React from "react";
import { SparklesIcon } from "@/components/shared/SvgIcons";

export type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: "default" | "onBlue";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  tone = "default",
}: SectionHeaderProps) {
  const dashIdx = title.lastIndexOf("—");
  const spaceIdx = title.lastIndexOf(" ");

  // Highlight the last chunk after the last em-dash; otherwise the last word.
  const before =
    dashIdx !== -1 && dashIdx < title.length - 1
      ? title.slice(0, dashIdx + 1)
      : spaceIdx !== -1
        ? title.slice(0, spaceIdx + 1)
        : "";

  const highlighted =
    dashIdx !== -1 && dashIdx < title.length - 1
      ? title.slice(dashIdx + 1).replace(/^\s+/, "")
      : spaceIdx !== -1
        ? title.slice(spaceIdx + 1)
        : title;

  const isOnBlue = tone === "onBlue";

  return (
    <div className="text-left">
      <div
        className={[
          "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold tracking-wide backdrop-blur-xl",
          isOnBlue
            ? "border border-white/25 bg-white/10 text-white"
            : "border border-white/12 bg-white/55 text-zinc-950 dark:border-white/15 dark:bg-zinc-950/25 dark:text-zinc-50",
        ].join(" ")}
      >
        <SparklesIcon />
        {eyebrow}
      </div>

      <h2
        className={[
          "mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl",
          isOnBlue ? "text-white" : "text-zinc-950 dark:text-zinc-50",
        ].join(" ")}
      >
        {before}
        <span
          className={[
            "relative z-[1] inline-block",
            isOnBlue ? "text-blue-100" : "text-blue-800 dark:text-[#ff8a3d]",
          ].join(" ")}
        >
          {highlighted}

          {/* Single smooth curved underline behind the highlighted word. */}
          <svg
            aria-hidden="true"
            className="absolute -bottom-1 left-0 right-0 h-[10px] w-full -z-10 bottom-[-7px]"
            viewBox="0 0 120 12"
            preserveAspectRatio="none"
          >
            <path
              d="M0 8 C 35 0, 85 0, 120 8"
              fill="none"
              stroke="#FFD166"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </h2>

      {subtitle ? (
        <p
          className={[
            "mt-3 max-w-2xl text-lg font-semibold leading-relaxed",
            isOnBlue ? "text-blue-100" : "text-zinc-600 dark:text-zinc-300",
          ].join(" ")}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

