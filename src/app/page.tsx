"use client";

import { Poppins } from "next/font/google";
import { Navbar } from "@/app/home/Navbar";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HeroSlider } from "@/components/home-3/heroSlider";
import { TutorsCard } from "@/app/home/TutorsCard";
import { VideoTestimonialsSection } from "@/app/home/VideoTestimonialsSection";
import { TeacherRecruitmentSection } from "@/app/home/TeacherRecruitmentSection";
import { ChannelPartnerSection } from "@/app/home/ChannelPartnerSection";
import { StudentEnrollmentProcessSection } from "@/app/home/StudentEnrollmentProcessSection";
import { TrustScaleSection } from "@/app/home/TrustScaleSection";
import { ExploreCoursesSection } from "@/app/home/ExploreCoursesSection";
import { SectionHeading } from "@/components/shared/SectionHeading";

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
    iconBg: "bg-blue-600",
    icon: (
      <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Online Tutor",
    tagline: "Live classes anywhere",
    iconBg: "bg-indigo-600",
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
    iconBg: "bg-blue-700",
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
    iconBg: "bg-indigo-700",
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
    iconBg: "bg-blue-500",
    icon: (
      <>
        <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12v6M9 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Home Schooling",
    tagline: "Structured at-home learning",
    iconBg: "bg-indigo-500",
    icon: (
      <>
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v14H6.5A2.5 2.5 0 0 0 4 20.5V6.5z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 7h2.5A2.5 2.5 0 0 1 9 9.5V20" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 8h6M11 11h6M11 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
];

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
      <p className="text-2xl font-extrabold tabular-nums text-blue-950 sm:text-3xl">
        {new Intl.NumberFormat("en-IN").format(n)}<span className="text-blue-600">{suffix}</span>
      </p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-blue-900/50">{label}</p>
    </div>
  );
}

/* ─── services strip ────────────────────────────────────────── */
function ServicesStrip() {
  return (
    <div className="relative z-20 mx-auto -mt-4 max-w-[1200px] px-4 sm:-mt-8 md:-mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
        className="rounded-3xl border border-blue-100/90 bg-white/98 p-4 shadow-[0_24px_60px_rgba(37,99,235,0.1)] ring-1 ring-blue-500/5 backdrop-blur-sm sm:p-5 md:p-6"
      >
        <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.22em] text-blue-600">
          What we offer
        </p>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="#services"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.06, duration: 0.45 }}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-transparent bg-blue-50/70 px-2.5 py-4 text-center transition duration-200 hover:-translate-y-1 hover:border-blue-200/80 hover:bg-white hover:shadow-lg hover:shadow-blue-500/10 sm:gap-2.5 sm:px-3 sm:py-5"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.iconBg} text-white shadow-md ring-2 ring-white/50 transition group-hover:scale-110 group-hover:shadow-lg`}>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>{s.icon}</svg>
              </span>
              <div>
                <p className="text-xs font-bold text-blue-950 sm:text-sm">{s.title}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-blue-900/50 sm:text-xs">{s.tagline}</p>
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
    <div ref={ref} className="border-b border-blue-100 bg-gradient-to-r from-white via-blue-50/40 to-indigo-50/30">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-12 gap-y-4 px-4 py-6">
        <AnimatedStat value={50000} suffix="+" label="Active Students" />
        <div className="hidden h-8 w-px bg-blue-100 sm:block" aria-hidden />
        <AnimatedStat value={500000} suffix="+" label="Verified Tutors" />
        <div className="hidden h-8 w-px bg-blue-100 sm:block" aria-hidden />
        <AnimatedStat value={5000000} suffix="+" label="Sessions Delivered" />
        <div className="hidden h-8 w-px bg-blue-100 sm:block" aria-hidden />
        <AnimatedStat value={98} suffix="%" label="Satisfaction Rate" />
      </div>
    </div>
  );
}

/* ─── page ───────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className={`${poppins.className} min-h-screen bg-gradient-to-b from-blue-50/90 via-[#f0f7ff] to-white text-blue-950`}>
      <Navbar onPrimaryCTA={() => { }} />

      <main>
        <div className="">
          <HeroSlider className="relative z-0 h-auto w-full min-h-[min(100svh,620px)] sm:min-h-[min(100svh,800px)] md:min-h-[650px] md:h-[680px]" />
        </div>
      </main>
      <ServicesStrip />
      {/* <ProofBar /> */}
      <ExploreCoursesSection />
      <TrustScaleSection />

      {/* Tutors section */}
      <section id="services" className="scroll-mt-32 px-4 pb-20 pt-16 md:pt-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            label="Our tutors"
            title="Meet Verified Mentors"
            sub="Browse profiles with subjects, ratings, and quick actions to find the right fit for your goals."
          />
          <div className="mt-10">
            <TutorsCard />
          </div>
        </div>
      </section>

      <TeacherRecruitmentSection />
      <StudentEnrollmentProcessSection />
      <VideoTestimonialsSection />
      <ChannelPartnerSection />
    </div>
  );
}
