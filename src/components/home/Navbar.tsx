"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-sm font-semibold text-zinc-700 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
    >
      {label}
    </a>
  );
}

export function Navbar({
  onPrimaryCTA,
}: {
  onPrimaryCTA: () => void;
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
      className="fixed top-0 z-40 w-full"
    >
      <div
        className={`mx-auto w-full max-w-6xl px-4 transition ${scrolled ? "pt-2" : "pt-3"
          }`}
      >
        <div
          className={`flex items-center justify-between rounded-3xl border px-4 py-3 shadow-sm backdrop-blur-xl transition ${scrolled
            ? "border-white/12 bg-white/65 dark:border-white/15 dark:bg-zinc-950/55"
            : "border-white/10 bg-white/55 dark:border-white/15 dark:bg-zinc-950/45"
            }`}
        >
          <div className="flex items-center gap-3">
              <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 ring-1 ring-blue-500/20 shadow-sm">
                <Image
                  src="/assets/logo/im-logo-mini.png"
                  alt="Indian Mentors"
                  fill
                  sizes="40px"
                  className="object-contain p-2"
                  priority
                />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-wide text-zinc-950 dark:text-zinc-50">
                Indian Mentors
              </div>
              <div className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
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
              className="hidden rounded-2xl bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-white/10 transition hover:shadow-md hover:shadow-zinc-950/20 dark:bg-white dark:text-zinc-950 md:inline-flex"
            >
              Book Free Demo
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="mx-auto max-w-6xl px-4 pb-3">
          <div className="flex items-center justify-between rounded-3xl border bg-white/55 px-3 py-2 backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/35">
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              <span className="rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 px-3 py-1 text-blue-700 dark:text-blue-200">
                Trusted
              </span>
              <span className="text-zinc-500 dark:text-zinc-400">
                Verified tutors
              </span>
            </div>
            <button
              type="button"
              onClick={onPrimaryCTA}
              className="rounded-2xl bg-zinc-950 px-3 py-2 text-xs font-semibold text-white transition hover:opacity-95 dark:bg-white dark:text-zinc-950"
            >
              Demo
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

