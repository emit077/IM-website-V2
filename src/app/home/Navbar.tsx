"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { withBasePath } from "@/lib/withBasePath";

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-xl px-2.5 py-1.5 text-sm font-semibold text-zinc-600 transition-colors hover:bg-blue-500/[0.07] hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white/80"
    >
      {label}
    </Link>
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
    { href: "/career", label: "Career" },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  /** Solid bar once user scrolls; also while mobile menu is open for contrast */
  const navOpaque = hasScrolled || isMobileMenuOpen;

  React.useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed ${fixedClassName} inset-x-0 z-50 w-full transition-[box-shadow,background-color,border-color,backdrop-filter] duration-300 ${navOpaque
          ? "border-b border-slate-200/100 bg-white/95 shadow-[0_10px_36px_rgba(15,23,42,0.12)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent shadow-none backdrop-blur-none"
          }`}
      >
        <div className="mx-auto w-full max-w-[1260px] px-4 pt-[max(0.625rem,env(safe-area-inset-top,0px))] pb-2 sm:px-6 sm:pt-[max(0.75rem,env(safe-area-inset-top,0px))] sm:pb-3 lg:px-10">
          <div
            className={`grid w-full grid-cols-[auto_1fr_auto] items-center gap-2.5 rounded-[1.25rem] px-3 py-2.5 transition-[box-shadow,background-color,border-color,backdrop-filter] duration-300 sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3 ${navOpaque
              ? ""
              : ""
              }`}
          >
            <Link
              href="/"
              className="flex min-w-0 items-center gap-2.5 sm:gap-3"
              onClick={closeMobileMenu}
            >
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
            </Link>

            <div className="hidden items-center justify-center gap-6 lg:gap-7 md:flex">
              {links.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-zinc-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/35 md:hidden"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav-menu"
              >
                <span className="text-xl leading-none">
                  {isMobileMenuOpen ? "×" : "☰"}
                </span>
              </button>
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

          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="w-full pb-2">
                <div
                  id="mobile-nav-menu"
                  className="rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex flex-col gap-1.5">
                    {links.map((link) => (
                      <Link
                        key={`mobile-${link.href}`}
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="rounded-xl px-3 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-blue-500/[0.07] hover:text-zinc-950"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.nav>
      {/* Reserve space so page content does not sit under the fixed bar */}
      <div
        className="shrink-0 [height:calc(5rem+env(safe-area-inset-top,0px))] sm:[height:calc(5.5rem+env(safe-area-inset-top,0px))]"
        aria-hidden
      />
    </>
  );
}

