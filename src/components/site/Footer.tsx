import type { ReactNode } from "react";
import Link from "next/link";
import {
  ClockIcon,
  GlobeIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "@/components/shared/SvgIcons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Our Services", href: "/academic-coverage/" },
  { label: "Tutors", href: "/tutor/" },
  { label: "Parents and Students", href: "/parent-student/" },
  { label: "Subscription Plans", href: "/contact/" },
  { label: "Channel Partners", href: "/channel-partner/" },
  { label: "Careers", href: "/career/" },
  { label: "Success Stories", href: "/#testimonials" },
  { label: "Blog / Resources", href: "/faq/" },
  { label: "Contact Us", href: "/contact/" },
] as const;

const phoneLines = [
  { display: "+91 73895 63564", tel: "+917389563564", wa: "917389563564" },
  { display: "+91 78690 27983", tel: "+917869027983", wa: "917869027983" },
] as const;

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 3h3l1.5 4-2 1.5c1 2.5 3.5 5 6 6L18 12.5 22 14v3c0 1.5-1 2.5-2.5 2.5C9.5 20 4 14.5 4 6.5 4 5 5 3 6.5 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconRow({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex gap-3 text-sm">
      <div className="mt-0.5 shrink-0 text-sky-400 [&_svg]:block [&_svg]:text-current">
        {icon}
      </div>
      <div className="min-w-0 leading-relaxed text-zinc-400">{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-100 [color-scheme:dark]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-zinc-500">
              Contact Us
            </h2>
            <p className="mt-3 text-2xl font-extrabold tracking-tight text-zinc-50">
              We&apos;re Here to Help
            </p>
            <p className="mt-4 text-sm font-semibold text-zinc-300">
              Empowering students with personalised mentorship
            </p>

            <div className="mt-8 space-y-5">
              <IconRow icon={<PhoneIcon className="h-5 w-5" />}>
                <span className="font-semibold text-zinc-100">Phone</span>
                <div className="mt-1 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-3">
                  {phoneLines.map(({ display, tel }) => (
                    <a
                      key={display}
                      href={tel}
                      className="font-medium text-zinc-400 underline-offset-2 hover:text-zinc-100 hover:underline"
                    >
                      {display}
                    </a>
                  ))}
                </div>
              </IconRow>

              <IconRow icon={<WhatsAppIcon />}>
                <span className="font-semibold text-zinc-100">WhatsApp</span>
                <div className="mt-1 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-3">
                  {phoneLines.map(({ display, wa }) => (
                    <a
                      key={wa}
                      href={`https://wa.me/${wa}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-zinc-400 underline-offset-2 hover:text-zinc-100 hover:underline"
                    >
                      {display}
                    </a>
                  ))}
                </div>
              </IconRow>

              <IconRow icon={<MailIcon className="h-5 w-5" />}>
                <span className="font-semibold text-zinc-100">Email</span>
                <div className="mt-1">
                  <a
                    href="mailto:info@indianmentors.in"
                    className="font-medium text-zinc-400 underline-offset-2 hover:text-zinc-100 hover:underline"
                  >
                    info@indianmentors.in
                  </a>
                </div>
              </IconRow>

              <IconRow icon={<GlobeIcon />}>
                <span className="font-semibold text-zinc-100">Website</span>
                <div className="mt-1">
                  <a
                    href="https://www.indianmentors.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-zinc-400 underline-offset-2 hover:text-zinc-100 hover:underline"
                  >
                    www.indianmentors.in
                  </a>
                </div>
              </IconRow>

              <IconRow icon={<MapPinIcon />}>
                <span className="font-semibold text-zinc-100">Office Address</span>
                <p className="mt-1">Bhilai, Chhattisgarh</p>
              </IconRow>

              <IconRow icon={<ClockIcon />}>
                <span className="font-semibold text-zinc-100">Working Hours</span>
                <p className="mt-1">Monday – Saturday | 10:00 AM – 07:00 PM</p>
              </IconRow>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#services"
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-sky-500 px-5 text-sm font-extrabold text-zinc-950 shadow-sm ring-1 ring-white/10 transition hover:bg-sky-400"
              >
                Book Free Demo
              </Link>
              <Link
                href="/contact/"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-zinc-600 bg-zinc-900 px-5 text-sm font-extrabold text-zinc-50 transition hover:bg-zinc-800"
              >
                Talk to a counsellor
              </Link>
            </div>

            <ul className="mt-8 space-y-2 text-sm font-semibold text-zinc-400">
              <li className="flex gap-2">
                <span className="text-emerald-400">✔</span>
                Learn with verified tutors
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">✔</span>
                Structured academic guidance
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">✔</span>
                Personalised learning support
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-zinc-500">
              Quick links
            </h2>
            <nav aria-label="Footer" className="mt-6">
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm font-semibold text-zinc-400 transition hover:text-zinc-100"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-zinc-800 pt-8 text-xs font-semibold text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Indian Mentors. All rights reserved.</p>
          <p>Bhilai, Chhattisgarh · India</p>
        </div>
      </div>
    </footer>
  );
}
