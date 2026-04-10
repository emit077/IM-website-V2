"use client";

import React, { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed z-40 w-full ${fixedClassName}`}
    >
      <div
        className={`mx-auto w-full max-w-6xl px-4 transition ${scrolled ? "pt-2" : "pt-3"
          }`}
      >
        <div
          className={`flex items-center justify-between rounded-3xl border px-4 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-[box-shadow,background-color,border-color] duration-300 ${
            scrolled
              ? "border-slate-200/80 bg-white/92 shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
              : "border-white/40 bg-white/78"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 ring-1 ring-blue-500/20 shadow-sm">
              <Image
                src={withBasePath("/assets/logo/im-logo-mini.png")}
                alt="Indian Mentors"
                fill
                sizes="40px"
                className="object-contain p-2"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-wide text-zinc-950">
                Indian Mentors
              </div>
              <div className="text-[11px] font-semibold text-zinc-500">
                Verified tutors for home & online
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-7 md:flex">
            <NavLink href="#services" label="Services" />
            <NavLink href="#coverage" label="Academic coverage" />
            <NavLink href="#tutors" label="Tutors" />
            <NavLink href="#pricing" label="Pricing" />
            <NavLink href="#testimonials" label="Testimonials" />
          </div>

          <div className="flex items-center gap-3">
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

      <div className="md:hidden">
        <div className="mx-auto max-w-6xl px-4 pb-3">
          <div className="flex items-center justify-between rounded-3xl border bg-white/55 px-3 py-2 backdrop-blur-xl">
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
      </div>
    </motion.nav>
  );
}

