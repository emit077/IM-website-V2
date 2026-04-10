"use client";

import { useMemo, useState } from "react";
import { SmartSearchBar as IMSmartSearchBar } from "@/components/home-3/SmartSearchBar";

type Tutor = {
  name: string;
  location: string;
  subjects: string[];
  languages: string[];
  bio: string;
  rating: number;
  reviews: number;
  classes: number;
  students: number;
  image: string;
  pricePerHour: number;
  featured?: boolean;
};

const tutors: Tutor[] = [
  {
    name: "Anaya Gupta",
    location: "Raipur, Chhattisgarh, India",
    subjects: ["Maths", "Science", "Biology"],
    languages: ["Hindi (Native)", "English (Fluent)", "Tamil (Fluent)"],
    bio: "Math Tutor | 9 years of experience | Engineer | GCSE (Edexcel, AQA) | IGCSE | Calculus | Algebra | AP Calculus",
    rating: 4.5,
    reviews: 14000,
    classes: 100,
    students: 45,
    image: "https://i.pravatar.cc/400?img=5",
    pricePerHour: 1000,
    featured: true,
  },
  {
    name: "Aarav Sharma",
    location: "Noida, Uttar Pradesh, India",
    subjects: ["Maths", "Physics", "Chemistry"],
    languages: ["Hindi (Native)", "English (Fluent)"],
    bio: "JEE Foundation Tutor | 8 years of experience | Problem Solving | Algebra | Trigonometry | Calculus",
    rating: 4.8,
    reviews: 11200,
    classes: 120,
    students: 52,
    image: "https://i.pravatar.cc/400?img=12",
    pricePerHour: 1100,
  },
  {
    name: "Aarav Sharma",
    location: "Noida, Uttar Pradesh, India",
    subjects: ["Maths", "Physics", "Chemistry"],
    languages: ["Hindi (Native)", "English (Fluent)"],
    bio: "JEE Foundation Tutor | 8 years of experience | Problem Solving | Algebra | Trigonometry | Calculus",
    rating: 4.8,
    reviews: 11200,
    classes: 120,
    students: 52,
    image: "https://i.pravatar.cc/400?img=12",
    pricePerHour: 1100,
  },
  {
    name: "Rohan Iyer",
    location: "Bengaluru, Karnataka, India",
    subjects: ["Accounts", "Economics", "Business"],
    languages: ["English (Fluent)", "Kannada (Native)", "Hindi (Fluent)"],
    bio: "Commerce Tutor | 9 years of experience | CA Foundation | Accounts | Economics | Business Studies",
    rating: 4.9,
    reviews: 9800,
    classes: 86,
    students: 39,
    image: "https://i.pravatar.cc/400?img=33",
    pricePerHour: 900,
    featured: true,
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 2.8l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17l-5.6 2.9 1.1-6.2L3 9.4l6.2-.9L12 2.8z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 10.4 3.3 1.9-.8 1.4-4.3-2.5V7h1.8Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2.2c-3.7 0-7 2-7 4.6 0 .7.6 1.2 1.2 1.2h11.6c.7 0 1.2-.6 1.2-1.2 0-2.6-3.3-4.6-7-4.6Z" />
    </svg>
  );
}

type SearchPayload = {
  subject: string;
  grade: string;
  location: string;
  mode: "Online" | "Home";
};

function normalizeSubject(subject: string) {
  const s = subject.toLowerCase();
  if (s === "mathematics") return "maths";
  if (s === "social science") return "social";
  return s;
}

export function TutorsCard() {
  const [search, setSearch] = useState<SearchPayload>({
    subject: "Mathematics",
    grade: "Grade 6-8",
    location: "",
    mode: "Online",
  });

  const filteredTutors = useMemo(() => {
    const subjectNeedle = normalizeSubject(search.subject);
    const locationNeedle = search.location.trim().toLowerCase();
    return tutors.filter((tutor) => {
      const subjectHit = tutor.subjects.some((s) => s.toLowerCase().includes(subjectNeedle));
      const locationHit = locationNeedle ? tutor.location.toLowerCase().includes(locationNeedle) : true;
      return subjectHit && locationHit;
    });
  }, [search]);

  return (
    <div className="space-y-5">
      <IMSmartSearchBar onSearch={setSearch} />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredTutors.map((tutor, idx) => (
          <article
            key={`${tutor.name}-${idx}`}
            className="group overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-[0_4px_24px_rgba(14,165,233,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(14,165,233,0.14)]"
          >
            {/* Card header */}
            <div className="relative bg-gradient-to-br from-[#1a2744] to-[#1e3a6e] px-6 pb-6 pt-5 text-white">
              {/* Dot background */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "14px 14px" }}
                aria-hidden
              />
              {tutor.featured && (
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-sky-400 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#1a2744]">
                    Popular
                  </span>
                </div>
              )}
              <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-2xl border-2 border-white/30 shadow-lg ring-2 ring-sky-400/30">
                <img src={tutor.image} alt={tutor.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-3 text-center text-base font-extrabold">
                {tutor.name}
                <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-400 text-[10px] text-[#1a2744]">✓</span>
              </h3>
              <p className="mt-1 text-center text-xs font-semibold text-sky-200/90">{tutor.location}</p>
              <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                {tutor.subjects.map((s) => (
                  <span key={s} className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-semibold text-sky-100">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 divide-x divide-sky-100 border-b border-sky-100 bg-sky-50/60 py-3 text-center">
              <div className="px-2">
                <p className="flex items-center justify-center gap-0.5 text-base font-extrabold text-[#1a2744]">
                  {tutor.rating}<StarIcon />
                </p>
                <p className="mt-0.5 text-[10px] font-semibold text-slate-500">{Math.floor(tutor.reviews / 1000)}k reviews</p>
              </div>
              <div className="px-2">
                <p className="flex items-center justify-center gap-0.5 text-base font-extrabold text-[#1a2744]">
                  {tutor.classes}<ClockIcon />
                </p>
                <p className="mt-0.5 text-[10px] font-semibold text-slate-500">hrs taught</p>
              </div>
              <div className="px-2">
                <p className="flex items-center justify-center gap-0.5 text-base font-extrabold text-[#1a2744]">
                  {tutor.students}<UserIcon />
                </p>
                <p className="mt-0.5 text-[10px] font-semibold text-slate-500">students</p>
              </div>
            </div>

            <div className="space-y-3 p-5">
              <p className="line-clamp-2 text-[13px] font-medium leading-relaxed text-slate-500">{tutor.bio}</p>
              <p className="text-[11px] font-semibold text-slate-400">{tutor.languages.join(" · ")}</p>
              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="text-xl font-extrabold text-[#1a2744]">₹{tutor.pricePerHour}</span>
                  <span className="ml-1 text-xs font-semibold text-slate-500">/hr</span>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
                  Free demo
                </span>
              </div>
              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  className="flex-1 rounded-xl border border-sky-200 bg-sky-50 py-2 text-sm font-bold text-sky-700 transition hover:bg-sky-100"
                >
                  View Profile
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-xl bg-sky-500 py-2 text-sm font-bold text-white transition hover:bg-sky-600"
                >
                  Book Demo
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredTutors.length === 0 ? (
        <p className="rounded-2xl border border-sky-100 bg-white px-4 py-5 text-center text-sm text-slate-500">
          No mentors found for this search. Try changing subject, mode, or location.
        </p>
      ) : null}
    </div>
  );
}
