"use client";

import Image from "next/image";
import { withBasePath } from "@/lib/withBasePath";

export function ChannelPartnerSection() {
  return (
    <section className="px-4 pb-10 pt-4 md:pt-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#f7b500] px-6 py-7 shadow-[0_16px_40px_rgba(15,23,42,0.15)] md:px-10 md:py-9">
          <div className="pointer-events-none absolute -left-8 top-6 h-28 w-28 rounded-full border-2 border-black/30" />
          <div className="pointer-events-none absolute left-36 top-5 h-4 w-4 rounded-sm bg-sky-300/80" />
          <div className="pointer-events-none absolute right-10 top-10 h-5 w-5 rotate-12 rounded-sm bg-white/30" />

          <div className="grid items-center gap-6 md:grid-cols-12">
            <div className="relative min-h-[190px] md:col-span-5">
              <div className="pointer-events-none absolute -left-4 bottom-3 h-40 w-40 rounded-full border border-white/50 border-dashed" />
              <Image
                src={withBasePath("/assets/landing-page-1/hero.png")}
                alt="Channel partner"
                width={360}
                height={260}
                className="relative z-10 h-[220px] w-auto object-contain object-left-bottom md:h-[250px]"
                priority={false}
              />
            </div>
            <div className="text-[#1a1a1a] md:col-span-7">
              <p className="text-xs font-bold tracking-[0.18em] text-black/75">

              </p>
              <p className="mt-2 text-4xl font-extrabold leading-none md:text-5xl">
                Become A Partner
              </p>
              {/* <h3 className="mt-3 max-w-md text-2xl font-extrabold leading-tight md:text-3xl">
                Special monthly partner package for everyone
              </h3> */}
              <p className="mt-2 max-w-md text-lg font-medium text-black/70">
                Authorised regional partners manage local registrations, tutor
                onboarding, and operations in their service area.
              </p>
              <div className="mt-5">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#1a2744] shadow-sm transition hover:bg-zinc-100"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
