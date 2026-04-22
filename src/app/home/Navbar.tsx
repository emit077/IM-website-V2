"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { withBasePath } from "@/lib/withBasePath";

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-xl px-2.5 py-1.5 text-sm font-semibold text-zinc-600 transition-colors hover:bg-blue-500/[0.07] hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white/80"
    >
      {label}
    </a>
  );
}

export function Navbar({
  onPrimaryCTA,
  fixedClassName = "top-0",
}: {
  onPrimaryCTA: () => void;
  /** e.g. `top-[42px]` when a bar sits above the nav */
  fixedClassName?: string;
}) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed z-40 w-full ${fixedClassName}`}
    >
      <div
        className="mx-auto w-full max-w-6xl px-3.5 pt-2.5 transition sm:px-4 sm:pt-3"
      >
        <div
          className="grid grid-cols-[auto_1fr_auto] items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white px-3 py-2.5 shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition-[box-shadow,background-color,border-color] duration-300 sm:gap-3 sm:rounded-3xl sm:px-4 sm:py-3 sm:shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
        >
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 ring-1 ring-blue-500/20 shadow-sm sm:h-10 sm:w-10 sm:rounded-2xl">
              <Image
                src={withBasePath("/assets/logo/im-logo-mini.png")}
                alt="Indian Mentors"
                fill
                sizes="40px"
                className="object-contain p-2"
                priority
              />
            </div>
            <div className="min-w-0 leading-tight">
              <div className="truncate text-[13px] font-extrabold tracking-tight text-zinc-950 sm:text-sm sm:tracking-wide">
                Indian Mentors
              </div>
              <div className="truncate text-[10px] font-medium text-zinc-500 sm:text-[11px] sm:font-semibold">
                Verified tutors for home & online
              </div>
            </div>
          </div>

          <div className="hidden items-center justify-center gap-6 lg:gap-7 md:flex">
            <NavLink href="#services" label="Services" />
            <NavLink href="#coverage" label="Academic coverage" />
            <NavLink href="#tutors" label="Tutors" />
            <NavLink href="#pricing" label="Pricing" />
            <NavLink href="#testimonials" label="Testimonials" />
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onPrimaryCTA}
              className="hidden rounded-2xl px-4 py-2.5 text-sm font-semibold shadow-md shadow-blue-600/25 ring-1 ring-blue-600/20 transition hover:brightness-105 hover:shadow-lg hover:shadow-blue-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2 md:inline-flex"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            >
              Book Free Demo
            </button>
          </div>
        </div>
      </div>

      {/* <div className="md:hidden">
        <div className="mx-auto max-w-6xl px-4 pb-3">
          <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-3 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
              <span className="rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 px-3 py-1 text-blue-700">
                Trusted
              </span>
              <span className="text-zinc-500">
                Verified tutors
              </span>
            </div>
            <button
              type="button"
              onClick={onPrimaryCTA}
              className="rounded-2xl px-3 py-2 text-xs font-semibold shadow-sm transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            >
              Demo
            </button>
          </div>
        </div>
      </div> */}
    </motion.nav>
  );
}

