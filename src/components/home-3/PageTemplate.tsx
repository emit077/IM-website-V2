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
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white font-sans dark:from-black dark:via-zinc-950 dark:to-zinc-950">
      <div className="mx-auto max-w-6xl px-4 pt-16">
        <div className="rounded-[2rem] border border-white/12 bg-white/45 p-8 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/25">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/55 px-4 py-2 text-xs font-extrabold tracking-wide text-zinc-950 backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/25 dark:text-zinc-50">
              Indian Mentors
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-3 max-w-2xl text-lg font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300">
                {subtitle}
              </p>
            ) : null}

            {cta ? (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={cta.href}
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-600 px-6 text-sm font-extrabold text-white shadow-lg shadow-blue-500/20 ring-1 ring-white/15 transition hover:opacity-95"
                >
                  {cta.label}
                </Link>
                {secondaryCta ? (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex h-12 items-center justify-center rounded-2xl border border-black/10 bg-white/60 px-6 text-sm font-extrabold text-zinc-900 transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-zinc-50"
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
                className="rounded-[2rem] border border-white/12 bg-white/40 p-6 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-zinc-950/25"
              >
                <div className="text-base font-extrabold text-zinc-950 dark:text-zinc-50">
                  {s.heading}
                </div>
                <div className="mt-2 text-sm font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-sm font-semibold text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

