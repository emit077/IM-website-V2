"use client";

import { Poppins } from "next/font/google";
import { Navbar } from "@/app/home/Navbar";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { withBasePath } from "@/lib/withBasePath";
import { TutorsCard } from "@/app/home/TutorsCard";
import { VideoTestimonialsSection } from "@/app/home/VideoTestimonialsSection";
import { TeacherRecruitmentSection } from "@/app/home/TeacherRecruitmentSection";
import { ChannelPartnerSection } from "@/app/home/ChannelPartnerSection";
import { StudentEnrollmentProcessSection } from "@/app/home/StudentEnrollmentProcessSection";
import { TrustScaleSection } from "@/app/home/TrustScaleSection";
import { ExploreCoursesSection } from "@/app/home/ExploreCoursesSection";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/* ─── service types ─────────────────────────────────────────── */
const services = [
  {
    title: "Home Tutor",
    tagline: "1-on-1 at your pace",
    iconBg: "bg-[#B39DDB]",
    icon: (
      <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Online Tutor",
    tagline: "Live classes anywhere",
    iconBg: "bg-[#FF8A65]",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  {
    title: "Shadow Tutor",
    tagline: "Extra focus & depth",
    iconBg: "bg-[#F48FB1]",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="m12 7 5 5-5 5-5-5 5-5z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    title: "Travel Tutor",
    tagline: "Mentors at your location",
    iconBg: "bg-[#4DB6AC]",
    icon: (
      <>
        <path d="M6 17h12M4 17V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 7h8M8 11h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Live-In Tutor",
    tagline: "Daily immersive coaching",
    iconBg: "bg-[#64B5F6]",
    icon: (
      <>
        <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12v6M9 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
];

/* ─── hero floating stat card ───────────────────────────────── */
function FloatCard({ icon, value, label, delay }: { icon: string; value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white/95 px-4 py-3 shadow-[0_8px_24px_rgba(14,165,233,0.12)] backdrop-blur-sm"
    >
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-base font-extrabold leading-none text-[#1a2744]">{value}</p>
        <p className="mt-0.5 text-xs font-semibold text-slate-500">{label}</p>
      </div>
    </motion.div>
  );
}

/* ─── animated count-up ─────────────────────────────────────── */
function useCountUp(target: number, play: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!play) return;
    let raf = 0;
    const t0 = performance.now();
    const ms = 1100;
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / ms);
      setN(Math.round(target * (1 - (1 - t) ** 3)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play, target]);
  return n;
}

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const n = useCountUp(value, inView);
  return (
    <div ref={ref} className="text-center">
      <p className="text-2xl font-extrabold tabular-nums text-[#1a2744] sm:text-3xl">
        {new Intl.NumberFormat("en-IN").format(n)}<span className="text-sky-500">{suffix}</span>
      </p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500">{label}</p>
    </div>
  );
}

/* ─── hero search bar ────────────────────────────────────────── */
function HeroSearch() {
  return (
    <form
      className="flex flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white p-1.5 shadow-[0_12px_40px_rgba(14,165,233,0.14)] ring-1 ring-sky-100/80 sm:flex-row sm:items-stretch sm:rounded-full"
      action="#"
      role="search"
      aria-label="Find a tutor"
    >
      <div className="flex shrink-0 items-center px-3 sm:px-4">
        <label htmlFor="hero-service" className="sr-only">Service type</label>
        <select
          id="hero-service"
          name="service"
          className="cursor-pointer bg-transparent py-3 text-sm font-semibold text-slate-700 outline-none"
          defaultValue="all"
        >
          <option value="all">All Services</option>
          <option value="home">Home Tutor</option>
          <option value="online">Online Tutor</option>
          <option value="shadow">Shadow Tutor</option>
          <option value="travel">Travel Tutor</option>
          <option value="live-in">Live-In Tutor</option>
        </select>
      </div>
      <span className="hidden w-px self-stretch bg-sky-100 sm:block" aria-hidden />
      <input
        type="search"
        name="q"
        placeholder="Subject, grade, or location…"
        className="min-w-0 flex-1 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none"
      />
      <button
        type="submit"
        className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-sky-400/30 transition hover:bg-sky-600 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" strokeLinecap="round" />
        </svg>
        <span>Find Tutor</span>
      </button>
    </form>
  );
}

/* ─── hero section ───────────────────────────────────────────── */
function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 pb-32 pt-28 md:pb-24 md:pt-36"
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-sky-200/30 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-200/25 blur-[80px]" aria-hidden />

      {/* Dot lattice */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(56,189,248,0.35) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Trust pill */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/80 px-4 py-1.5 text-xs font-bold text-sky-700 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-sky-400">
                <span className="h-2 w-2 animate-ping rounded-full bg-sky-400 opacity-75" />
              </span>
              India&apos;s #1 Verified Tutor Platform
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#1a2744] sm:text-5xl lg:text-[3.5rem]">
              Find the Perfect<br />
              <span className="relative mt-1 inline-block">
                <span className="relative z-10 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                  Tutor for Your Child
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full text-sky-300/60"
                  viewBox="0 0 400 14"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path d="M4 10C100 3 300 3 396 10" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
              Verified home &amp; online tutors across India. Personalised sessions, weekly progress reports, and a free demo before you commit.
            </p>

            {/* Search */}
            <div className="mt-7">
              <HeroSearch />
            </div>

            {/* CTAs */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/parent-student"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#1a2744] px-7 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition hover:bg-[#243560] hover:shadow-xl"
              >
                Book Free Demo
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M5 12h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="#services"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-7 text-sm font-bold text-sky-700 shadow-sm backdrop-blur-sm transition hover:border-sky-300 hover:bg-white hover:shadow-md"
              >
                Browse Tutors
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              {[
                { icon: "🛡️", text: "100% Verified Tutors" },
                { icon: "📅", text: "Free Demo Session" },
                { icon: "⚡", text: "Match in 24 Hours" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right column — image + floating cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative hidden lg:block"
          >
            {/* Main image */}
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(14,165,233,0.18)] ring-2 ring-sky-200/60">
              <Image
                src={withBasePath("/assets/landing-page-1/hero.png")}
                alt="Students learning with Indian Mentors tutors"
                width={560}
                height={640}
                className="h-auto w-full object-cover object-top"
                priority
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-sky-50/60 to-transparent" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -left-8 top-10">
              <FloatCard icon="🎓" value="50,000+" label="Active Students" delay={0.45} />
            </div>
            <div className="absolute -right-6 top-1/3">
              <FloatCard icon="⭐" value="4.9 / 5" label="Average Rating" delay={0.55} />
            </div>
            <div className="absolute -bottom-4 left-8">
              <FloatCard icon="✅" value="500,000+" label="Verified Tutors" delay={0.65} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── services strip ────────────────────────────────────────── */
function ServicesStrip() {
  return (
    <div className="relative z-20 mx-auto -mt-10 max-w-[1200px] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
        className="rounded-3xl border border-sky-100 bg-white/98 p-5 shadow-[0_24px_60px_rgba(14,165,233,0.10)] backdrop-blur-sm md:p-6"
      >
        <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.22em] text-sky-500">
          What we offer
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="#services"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.06, duration: 0.45 }}
              className="group flex flex-col items-center gap-2.5 rounded-2xl border border-transparent bg-sky-50/60 px-3 py-5 text-center transition duration-200 hover:-translate-y-1 hover:border-sky-200/70 hover:bg-white hover:shadow-lg hover:shadow-sky-100/80"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.iconBg} text-white shadow-md ring-2 ring-white/50 transition group-hover:scale-110 group-hover:shadow-lg`}>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>{s.icon}</svg>
              </span>
              <div>
                <p className="text-sm font-bold text-[#1a2744]">{s.title}</p>
                <p className="mt-0.5 text-xs text-slate-500">{s.tagline}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ─── inline social proof bar ────────────────────────────────── */
function ProofBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="border-b border-sky-100 bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-12 gap-y-4 px-4 py-6">
        <AnimatedStat value={50000} suffix="+" label="Active Students" />
        <div className="hidden h-8 w-px bg-sky-100 sm:block" aria-hidden />
        <AnimatedStat value={500000} suffix="+" label="Verified Tutors" />
        <div className="hidden h-8 w-px bg-sky-100 sm:block" aria-hidden />
        <AnimatedStat value={5000000} suffix="+" label="Sessions Delivered" />
        <div className="hidden h-8 w-px bg-sky-100 sm:block" aria-hidden />
        <AnimatedStat value={98} suffix="%" label="Satisfaction Rate" />
      </div>
    </div>
  );
}

/* ─── tutors section header ──────────────────────────────────── */
function SectionHeader({ label, heading, sub }: { label: string; heading: string; sub: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="text-center"
    >
      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-sky-500">{label}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1a2744] sm:text-4xl">{heading}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">{sub}</p>
    </motion.div>
  );
}

/* ─── page ───────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className={`${poppins.className} min-h-screen bg-[#f0f7ff] text-slate-900`}>
      <Navbar onPrimaryCTA={() => {}} />

      <Hero />
      <ServicesStrip />
      <ProofBar />
      <ExploreCoursesSection />
      <TrustScaleSection />

      {/* Tutors section */}
      <section id="services" className="scroll-mt-32 px-4 pb-20 pt-16 md:pt-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            label="Our tutors"
            heading="Meet Verified Mentors"
            sub="Browse profiles with subjects, ratings, and quick actions to find the right fit for your goals."
          />
          <div className="mt-10">
            <TutorsCard />
          </div>
        </div>
      </section>

      <TeacherRecruitmentSection />
      <ChannelPartnerSection />
      <StudentEnrollmentProcessSection />
      <VideoTestimonialsSection />
    </div>
  );
}
