"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type VideoTestimonial = {
  category: string;
  title: string;
  quote: string;
  person: string;
  role: string;
  duration: string;
  result: string;
  thumb: string;
};

const videos: VideoTestimonial[] = [
  {
    category: "Student Success Stories",
    title: "From average scores to class topper",
    quote:
      "The mentor's revision strategy and weekly mock tests helped me improve fast. I now approach exams with confidence.",
    person: "Aarushi Verma",
    role: "Class 10 Student",
    duration: "2:08",
    result: "Top 5 rank in class",
    thumb: "https://i.pravatar.cc/800?img=47",
  },
  {
    category: "Parent Reviews",
    title: "Clear progress updates every week",
    quote:
      "We finally had structure at home. The tutor shared progress goals and practical feedback after each session.",
    person: "Rohit Sharma",
    role: "Parent, Grade 8",
    duration: "1:54",
    result: "18% score improvement",
    thumb: "https://i.pravatar.cc/800?img=15",
  },
  {
    category: "Tutor Reviews",
    title: "Quality students and smooth workflow",
    quote:
      "The platform makes planning classes and communicating outcomes much easier. Student consistency has improved.",
    person: "Nisha Kapoor",
    role: "English Tutor",
    duration: "2:25",
    result: "Higher completion rate",
    thumb: "https://i.pravatar.cc/800?img=23",
  },
  {
    category: "School Feedback",
    title: "Stronger classroom participation",
    quote:
      "Students from this program ask better questions and show better fundamentals in regular school sessions.",
    person: "Academic Coordinator",
    role: "Partner School",
    duration: "1:46",
    result: "Better concept retention",
    thumb: "https://i.pravatar.cc/800?img=12",
  },
  {
    category: "Placement Success Stories",
    title: "Interview prep that actually works",
    quote:
      "The mentoring sessions were practical and focused. I landed a strong placement offer in my final semester.",
    person: "Aniket Singh",
    role: "B.Tech Student",
    duration: "2:31",
    result: "Placed at 12 LPA",
    thumb: "https://i.pravatar.cc/800?img=68",
  },
  {
    category: "Channel Partner Reviews",
    title: "Faster onboarding and trust",
    quote:
      "Families quickly trust the verified network. The support team is fast, and onboarding is smooth end-to-end.",
    person: "Neha Jain",
    role: "Channel Partner",
    duration: "1:42",
    result: "Faster onboarding cycle",
    thumb: "https://i.pravatar.cc/800?img=3",
  },
  {
    category: "Video Testimonials",
    title: "Real stories from real outcomes",
    quote:
      "Watch short, authentic stories from students, parents, and tutors sharing measurable academic progress.",
    person: "Featured Stories",
    role: "Curated Reels",
    duration: "3:02",
    result: "Verified journeys",
    thumb: "https://i.pravatar.cc/800?img=56",
  },
];

export function VideoTestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = videos[active];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#f0f7ff] px-4 pb-24 pt-12">
      {/* Pastel blue ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.10),transparent_42%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-6 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl"
      />

      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <p className="text-xs font-extrabold tracking-[0.24em] text-sky-600">
            VIDEO TESTIMONIALS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#1a2744] sm:text-4xl">
            Stories That Feel Real
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-slate-600">
            Watch authentic student, parent, tutor, and partner testimonials in
            one cinematic experience.
          </p>
        </div>

        <div
          className="mt-8 grid gap-5 lg:grid-cols-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.article
                key={`featured-${active}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[2rem] border border-sky-100/80 bg-white/85 p-4 shadow-[0_20px_80px_rgba(14,165,233,0.12)] backdrop-blur-xl"
              >
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={current.thumb}
                    alt={`${current.person} testimonial`}
                    className="h-[280px] w-full object-cover sm:h-[360px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/25 to-transparent" />
                  <button
                    type="button"
                    className="absolute inset-0 m-auto grid h-16 w-16 place-items-center rounded-full bg-white/90 text-slate-900 shadow-xl transition hover:scale-105"
                    aria-label={`Play video testimonial by ${current.person}`}
                  >
                    ▶
                  </button>
                  <span className="absolute right-3 top-3 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-extrabold text-white">
                    {current.duration}
                  </span>
                  <span className="absolute left-3 top-3 rounded-full bg-sky-500/90 px-3 py-1 text-xs font-extrabold text-white">
                    {current.category}
                  </span>
                </div>

                <div className="mt-4 rounded-2xl border border-sky-100 bg-white p-4">
                  <h3 className="text-xl font-extrabold text-[#1a2744]">
                    {current.title}
                  </h3>
                  <p className="mt-2 text-[15px] font-medium leading-relaxed text-slate-600">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-extrabold text-[#1a2744]">{current.person}</p>
                      <p className="text-xs font-semibold text-slate-500">{current.role}</p>
                    </div>
                    <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700">
                      {current.result}
                    </span>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-4">
            <div className="h-full rounded-[1.75rem] border border-sky-100 bg-white/80 p-3 shadow-[0_12px_40px_rgba(14,165,233,0.08)] backdrop-blur-xl">
              <div className="mb-2 px-2 py-1 text-xs font-extrabold tracking-wide text-slate-500">
                MORE STORIES
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-col lg:gap-0 lg:space-y-2 lg:overflow-visible lg:pb-0">
                {videos.map((item, idx) => (
                  <button
                    key={`playlist-${item.category}-${idx}`}
                    type="button"
                    onClick={() => setActive(idx)}
                    className={`flex shrink-0 flex-col gap-2 rounded-2xl border p-2 text-left transition lg:w-full lg:flex-row lg:items-center lg:gap-3 ${
                      idx === active
                        ? "border-sky-200 bg-sky-50"
                        : "border-transparent bg-white hover:border-sky-100 hover:bg-sky-50/50"
                    }`}
                  >
                    <img
                      src={item.thumb}
                      alt={item.category}
                      className="h-14 w-24 shrink-0 rounded-xl object-cover lg:h-14 lg:w-16"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="w-24 truncate text-xs font-extrabold text-[#1a2744] lg:w-auto">
                        {item.category}
                      </p>
                      <p className="mt-0.5 w-24 truncate text-xs font-semibold text-slate-500 lg:w-auto">
                        {item.person}
                      </p>
                    </div>
                    <span className="w-fit rounded-full bg-sky-500 px-2 py-1 text-[10px] font-bold text-white lg:ml-auto">
                      {item.duration}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
