"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  id?: string;
  label: string;
  title: ReactNode;
  sub: ReactNode;
  align?: "responsive" | "left" | "center";
  tone?: "partner";
  className?: string;
  titleClassName?: string;
  subClassName?: string;
  labelClassName?: string;
};

const alignClasses = {
  responsive: "text-center lg:text-left",
  left: "text-left",
  center: "text-center",
} as const;

const toneClasses = {
  partner: {
    label: "text-[11px] text-blue-800/80",
    title: "mt-2 text-balance leading-[1.15] bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-600 bg-clip-text text-transparent",
    sub: "text-pretty text-slate-600",
  },
} as const;

export function SectionHeading({
  id,
  label,
  title,
  sub,
  align = "responsive",
  tone = "partner",
  className = "",
  titleClassName = "",
  subClassName = "",
  labelClassName = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`${alignClasses[align]} ${className}`.trim()}
    >
      <p
        className={`text-xs font-extrabold uppercase tracking-[0.25em] ${toneClasses[tone].label} ${labelClassName}`.trim()}
      >
        {label}
      </p>
      <h2
        id={id}
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${toneClasses[tone].title} ${titleClassName}`.trim()}
      >
        {title}
      </h2>
      <p
        className={`mx-auto mt-4 max-w-xl text-base leading-relaxed lg:mx-0 ${toneClasses[tone].sub} ${subClassName}`.trim()}
      >
        {sub}
      </p>
    </motion.div>
  );
}
