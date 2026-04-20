import Link from "next/link";
import React from "react";

export type PageTemplateProps = {
  title: string;
  subtitle?: string;
  sections?: Array<{
    heading: string;
    body: string;
  }>;
  cta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export default function PageTemplate({
  title,
  subtitle,
  sections = [],
  cta,
  secondaryCta,
}: PageTemplateProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-indigo-50/40 font-sans dark:from-blue-950 dark:via-zinc-950 dark:to-zinc-950">
      <div className="mx-auto max-w-6xl px-4 pt-16">
        <div className="rounded-[2rem] border border-blue-100/80 bg-gradient-to-br from-white/90 via-blue-50/40 to-indigo-50/30 p-8 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/10 backdrop-blur-xl dark:border-blue-500/20 dark:from-blue-950/40 dark:via-zinc-950/50 dark:to-indigo-950/30 dark:ring-blue-400/10">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-2 text-xs font-extrabold tracking-wide text-blue-900 backdrop-blur-xl dark:border-blue-500/30 dark:bg-blue-950/50 dark:text-blue-100">
              Indian Mentors
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-blue-950 dark:text-zinc-50 sm:text-5xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-3 max-w-2xl text-lg font-semibold leading-relaxed text-blue-900/70 dark:text-blue-100/70">
                {subtitle}
              </p>
            ) : null}

            {cta ? (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={cta.href}
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 px-6 text-sm font-extrabold text-white shadow-lg shadow-blue-500/30 ring-1 ring-white/15 transition hover:bg-blue-700 hover:opacity-95"
                >
                  {cta.label}
                </Link>
                {secondaryCta ? (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex h-12 items-center justify-center rounded-2xl border border-blue-200/90 bg-white/80 px-6 text-sm font-extrabold text-blue-900 transition hover:bg-blue-50 dark:border-blue-500/30 dark:bg-blue-950/40 dark:text-blue-50 dark:hover:bg-blue-950/60"
                  >
                    {secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        {sections.length ? (
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {sections.map((s) => (
              <div
                key={s.heading}
                className="rounded-[2rem] border border-blue-100/80 bg-white/70 p-6 shadow-md shadow-blue-500/5 backdrop-blur-xl dark:border-blue-500/20 dark:bg-blue-950/25"
              >
                <div className="text-base font-extrabold text-blue-950 dark:text-zinc-50">
                  {s.heading}
                </div>
                <div className="mt-2 text-sm font-semibold leading-relaxed text-blue-900/65 dark:text-blue-100/65">
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-sm font-semibold text-blue-700 transition hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

