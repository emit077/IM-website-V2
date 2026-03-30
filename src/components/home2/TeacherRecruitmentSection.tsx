"use client";

const hiringTargets = [
  "Coaching Institutes",
  "Schools",
  "Colleges",
  "EdTech Companies",
  "Corporate Academic Programs",
];

const recruitmentFeatures = [
  "Pre-verified teacher database",
  "Bulk recruitment",
  "Interview coordination",
  "Background verification",
  "Contract staffing support",
];

function BulletIcon() {
  return (
    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-[#FFD600]">
      <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path
          d="M4.5 10.2 8.2 14 15.5 6.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function TeacherRecruitmentSection() {
  return (
    <section className="px-4 pb-8 pt-4 md:pt-8  bg-gradient-to-r from-[#0b3c8a] to-[#2563eb] p-6 shadow-[0_20px_50px_rgba(37,99,235,0.25)]">
      <div className="mx-auto max-w-[1200px] overflow-hidden text-white  md:p-10">
        <div className="mt-3 flex flex-wrap items-start justify-between  text-center">
          <div className="">
            <h2 className="text-2xl font-extrabold md:text-4xl">
              Institutional Hiring Division
            </h2>
            <p className="mt-4 text-sm text-blue-50 md:text-base">
              Hire teachers faster with verified profiles, coordinated
              interviews, and complete staffing support for your institution.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
            <h3 className="text-lg font-bold">Hire Teachers for:</h3>
            <ul className="mt-4 space-y-3 text-sm md:text-base">
              {hiringTargets.map((target) => (
                <li key={target} className="flex items-start gap-3">
                  <BulletIcon />
                  <span>{target}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
            <h3 className="text-lg font-bold">Features:</h3>
            <ul className="mt-4 space-y-3 text-sm md:text-base">
              {recruitmentFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <BulletIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#FFD600] px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-[#ffcc00]"
          >
            Hire Teachers
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Talk to Recruiter
          </a>
        </div>
      </div>
    </section>
  );
}
