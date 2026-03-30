"use client";

import { Fragment, type ReactNode } from "react";

const enrollmentSteps = [
  {
    title: "Register Online",
    description:
      "Fill out the quick enrollment form via the website and share your academic requirements.",
  },
  {
    title: "Book a Demo Session",
    description:
      "Select a suitable tutor and schedule a free demo class at your preferred time.",
  },
  {
    title: "Attend Demo & Share Feedback",
    description:
      "Experience the teaching style, clarify expectations, and provide feedback for final tutor confirmation.",
  },
  {
    title: "Choose Your Subscription Plan",
    description:
      "Select Gold | Diamond | Platinum Plan for Half-Yearly or Annual contract with preferred payment option (Upfront/Installment).",
  },
  {
    title: "Start Regular Sessions",
    description:
      "Begin structured, personalised sessions with continuous academic monitoring and support.",
  },
];

function DotPattern({ className }: { className?: string }) {
  return (
    <div
      className={className}
      aria-hidden
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.16) 1.5px, transparent 1.5px)",
        backgroundSize: "13px 13px",
        maskImage:
          "radial-gradient(ellipse at center, black 45%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black 45%, transparent 75%)",
      }}
    />
  );
}

/** Steps 1 & 5: circle · 2–4: tombstone */
function StepNumberBadge({ index }: { index: number }) {
  const n = index + 1;
  const label = `${n}.`;
  const isCircle = index === 0 || index === 4;
  const base =
    "shrink-0 ring-2 ring-white/25 transition duration-300 group-hover:ring-white/45 group-hover:shadow-lg group-hover:shadow-black/25";

  if (isCircle) {
    return (
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg font-extrabold tracking-tight text-[#0c1e45] shadow-md ${base}`}
      >
        {label}
      </div>
    );
  }

  return (
    <div
      className={`flex h-[3.35rem] w-[3.35rem] items-center justify-center rounded-t-[100px] rounded-b-[14px] bg-white text-lg font-extrabold tracking-tight text-[#0c1e45] shadow-md ${base}`}
    >
      {label}
    </div>
  );
}

/** Hollow arrow with thick rounded outline (stroke only, no fill) */
function outlinedArrowLayers(d: string) {
  return (
    <g fill="none" strokeLinejoin="round" strokeLinecap="round">
      <path d={d} stroke="rgba(0,0,0,0.55)" strokeWidth="4.8" />
      <path d={d} stroke="rgba(255,255,255,0.28)" strokeWidth="3.9" />
      <path d={d} stroke="currentColor" strokeWidth="2.85" />
    </g>
  );
}

/**
 * Rounded outlined → : short thick tail, wide head, all corners rounded via stroke.
 * Sits on card seams (overlap + hover).
 */


/** Same style, tip points down (row break) */
function FlowFatArrowDown({
  className,
  title = "Next row",
}: {
  className?: string;
  title?: string;
}) {
  const d =
    "M 11 8 H 21 V 20 L 29 13 L 16 44 L 3 13 L 11 20 V 8 Z";
  return (
    <div
      className={[
        "group/arr pointer-events-auto flex cursor-pointer items-center justify-center rounded-full border border-white/20 bg-[#0c1e45]/85 p-2 text-white shadow-lg shadow-black/30 backdrop-blur-sm transition duration-200",
        "hover:scale-110 hover:border-white/45 hover:bg-[#0c1e45] hover:shadow-xl",
        "relative z-20 -my-3",
        className ?? "",
      ].join(" ")}
      title={title}
    >
      <svg
        className="h-[3.75rem] w-12 lg:h-16 lg:w-12"
        viewBox="0 0 32 50"
        fill="none"
        aria-hidden
      >
        {outlinedArrowLayers(d)}
      </svg>
    </div>
  );
}

function MobileStepRail({ children }: { children: ReactNode }) {
  return <div className="relative md:hidden">{children}</div>;
}
const services = [
  {
    title: "Register Online",
    tagline: "Fill out the quick enrollment form via the website and share your academic requirements.",
    iconBg: "bg-[#B39DDB]",
    iconColor: "#B39DDB",
    icon: (
      <path
        d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Book a Demo Session",
    tagline: "Select a suitable tutor and schedule a free demo class at your preferred time.",
    iconBg: "bg-[#FF8A65]",
    iconColor: "#FF8A65",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2a15.3 15.3 0 0 1 0 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2a15.3 15.3 0 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  {
    title: "Attend Demo & Share Feedback",
    tagline: "Experience the teaching style, clarify expectations, and provide feedback for final tutor confirmation.",
    iconBg: "bg-[#F48FB1]",
    iconColor: "#F48FB1",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="m12 7 5 5-5 5-5-5 5-5z"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),
  },
  {
    title: "Choose Your Subscription Plan",
    tagline: "Select Gold | Diamond | Platinum Plan for Half-Yearly or Annual contract with preferred payment option (Upfront/Installment).",
    iconBg: "bg-[#4DB6AC]",
    iconColor: "#4DB6AC",
    icon: (
      <>
        <path d="M6 17h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 17V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 7h8M8 11h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Live-In Tutor",
    tagline: "Long-term daily coaching with continuous academic monitoring and support.",
    iconBg: "bg-[#FFD600]",
    iconColor: "#FFD600",
    icon: (
      <>
        <path
          d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 12v6M9 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
];
export function StudentEnrollmentProcessSection() {
  const row1 = enrollmentSteps.slice(0, 3);
  const row2 = enrollmentSteps.slice(3, 5);
  const headingId = "student-enrollment-heading";

  return (
    <section className="px-4 pb-12 pt-2 md:pt-8 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]" aria-labelledby={headingId}>
      {/* Floating services strip (same layout as category cards) */}
      <div className="relative z-20 -mt-14 px-4 py-10">
        <div className="mx-auto max-w-[1200px] rounded-3xl p-6 md:p-6 ">
          <p className="text-xs font-semibold tracking-[0.22em] text-blue-700">
            HOW IT WORKS
          </p>
          <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
            <h2 className="max-w-2xl text-2xl font-extrabold text-[#1a2744] md:text-4xl">
              Start Learning in 5 Simple Steps
            </h2>
          </div>
          <p className="mt-4 max-w-4xl text-sm text-slate-600 md:text-base">
            Authorised regional representatives/agents to manage local tutoring
            services, registrations, and operations for a specific
            region/location/area/pincode.
          </p>
          <div className="grid grid-cols-4 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4 pt-5 text-center mt-12">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="items-center gap-3 rounded-2xl transition bg-slate-100 hover:bg-blue-100 px-4 pb-6 relative"
              >
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${s.iconBg} text-white shadow-inner mb-2 mt-[-20px]`}>{i + 1}</div>
                <div className="min-w-0">
                  <p className=" font-bold text-slate-900 my-3">{s.title}</p>
                  <p className="text-xs text-slate-500 mb-3">{s.tagline}</p>
                </div>
                {/* {([3].includes(i)) && (
                  <svg className="object-cover z-10 absolute top-[-10%] right-[-20%]" width="150" height="60" viewBox="0 0 156 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M150.809 15.4866C150.899 15.1666 150.809 15.0966 150.809 15.4866Z" fill={`${s.iconColor}`} />
                    <path d="M155.459 39.8965C154.646 36.0565 153.853 32.2132 153.079 28.3665C152.499 25.4532 151.946 22.5365 151.419 19.6165C151.233 18.5899 151.063 17.5599 150.909 16.5265C150.876 16.2732 150.846 16.0199 150.819 15.7665C150.813 15.6532 150.809 15.5599 150.809 15.4865C150.739 15.7065 150.589 16.0465 150.239 16.4465C151.979 14.4265 149.059 11.4765 147.309 13.5065C146.179 14.8165 146.769 16.7665 146.999 18.3065C147.449 21.2265 148.029 24.1265 148.589 27.0165C144.749 19.6965 140.049 12.8065 134.059 7.20654C130.269 3.65654 124.619 -0.58346 119.109 0.0665397C114.239 0.64654 112.159 5.38654 111.409 9.67654C108.939 23.7565 115.279 37.8765 114.389 52.0365C114.029 57.8865 111.669 67.4365 104.479 67.9765C97.9994 68.4465 92.1894 62.0065 87.9294 58.0165C78.0494 48.7265 69.2194 38.2665 57.4394 31.2465C50.4494 27.0765 42.6794 25.2865 35.3694 29.6965C24.3494 36.3565 18.0294 54.9665 2.5094 49.0265C-0.000602007 48.0665 -1.07062 52.0765 1.39938 53.0265C9.21938 56.0165 16.2994 53.7965 22.2994 48.3265C27.7294 43.3665 31.6994 36.5865 38.1894 32.8665C47.7594 27.3565 58.8194 36.4765 65.7394 42.3565C71.3994 47.1765 76.4994 52.6265 81.7794 57.8465C86.5394 62.5565 91.6194 67.9565 97.8394 70.7165C102.009 72.5665 106.699 72.7165 110.569 70.0965C115.309 66.8965 117.329 60.6165 118.179 55.2565C120.299 42.0565 115.219 29.0665 115.089 15.9165C115.059 12.7065 115.019 5.93654 118.689 4.40654C123.129 2.54654 129.389 8.45654 132.219 11.1965C139.199 17.9565 144.319 26.8565 148.259 35.8265C142.506 33.2132 136.753 30.5999 130.999 27.9865C128.579 26.8865 126.459 30.4765 128.899 31.5765C136.733 35.1365 144.566 38.6932 152.399 42.2465C154.069 43.0065 155.859 41.7865 155.459 39.8965Z" fill={`${s.iconColor}`} />
                  </svg>
                )}
                {([1, 2].includes(i)) && (
                  <svg className="object-cover z-10 absolute bottom-[-10%] right-[-15%]" width="120" height="61" viewBox="0 0 145 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M142.5 5.552C129.866 4.93867 117.23 4.32867 104.59 3.722C101.91 3.592 101.92 7.752 104.59 7.882C115.057 8.38867 125.523 8.892 135.99 9.392C127.65 15.122 119.54 21.172 111.3 27.052C104.6 31.822 96.9399 29.802 92.3499 23.272C88.9699 18.472 87.4098 12.632 84.1898 7.722C80.9798 2.832 75.5099 -0.998001 69.4099 0.232C62.5099 1.622 56.7398 6.892 52.5598 12.302C43.8098 23.622 40.3898 38.142 31.5198 49.332C27.9798 53.802 22.9499 57.392 16.9699 56.532C10.9199 55.662 6.26986 50.502 4.15986 45.052C3.19986 42.582 -0.820154 43.652 0.149846 46.152C4.81985 58.212 18.3899 65.532 29.7299 56.932C34.8399 53.062 38.2498 47.272 41.1998 41.712C44.5098 35.462 47.3098 28.952 50.6998 22.752C54.4098 15.992 59.2298 9.602 66.0698 5.792C73.3798 1.722 78.9698 6.512 82.3698 12.812C85.1298 17.912 86.8799 23.452 90.7199 27.892C95.1399 33.002 101.75 35.132 108.23 33.202C111.39 32.252 113.98 30.222 116.59 28.302C119.203 26.382 121.83 24.4753 124.47 22.582C128.643 19.5687 132.85 16.5953 137.09 13.662C132.197 23.2553 127.303 32.8487 122.41 42.442C121.2 44.822 124.78 46.922 126.01 44.532C132.103 32.5787 138.2 20.6287 144.3 8.682C145.03 7.242 144.12 5.632 142.5 5.552Z" fill={`${s.iconColor}`} />
                  </svg>
                )}
                {([0].includes(i)) && (
                  <svg className="object-cover z-10 absolute rotate-20 top-[-8%] right-[-10%]" width="120px" height="70px" viewBox="0 0 180 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M176.89 0.103605C165.43 4.7236 153.974 9.34359 142.52 13.9636C140.07 14.9536 141.14 18.9736 143.63 17.9736C153.13 14.1403 162.634 10.3069 172.14 6.4736C161.35 17.8236 150.39 29.0036 139.19 39.9436C132.03 46.9336 124.78 53.8636 117.18 60.3936C111.79 65.0236 106.3 70.2636 99.0904 70.5336C88.3204 70.9336 83.1604 59.9236 79.2304 51.7236C75.1204 43.1236 71.6004 34.2336 66.8504 25.9436C62.8004 18.8836 57.5204 11.8536 49.6704 8.85361C40.8604 5.48361 30.9904 10.0036 23.9604 15.2736C4.12037 30.1336 -6.49963 61.5836 4.31037 84.6436C5.44037 87.0736 9.03037 84.9636 7.90037 82.5436C-1.76963 61.9236 7.97037 34.4636 24.4204 20.2036C31.0004 14.4936 41.0604 9.3036 49.7004 13.3436C57.3404 16.9236 61.9804 25.3636 65.7004 32.5136C70.0404 40.8836 73.4204 49.7136 77.7604 58.0836C82.3804 67.0136 88.8504 75.0736 99.9504 74.6636C107.26 74.3936 112.88 69.3936 118.22 64.9436C125.72 58.6936 132.79 51.9336 139.8 45.1436C151.54 33.7836 163.01 22.1236 174.27 10.2836C173.064 19.2903 171.857 28.2969 170.65 37.3036C170.29 39.9536 174.46 39.9236 174.81 37.3036C176.377 25.5703 177.947 13.8369 179.52 2.10361C179.69 0.843605 178.05 -0.366395 176.89 0.103605Z" fill={`${s.iconColor}`} />
                  </svg>
                )} */}

                {/* <img src="/assets/start-learning/arr-1.svg" alt="How It Works" className="object-cover z-10 absolute bottom-[10%] right-[-20%]" width="150px" /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
