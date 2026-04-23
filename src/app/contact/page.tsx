"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Clock3,
  Headset,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Target,
  Users2,
} from "lucide-react";
import { Navbar } from "@/app/home/Navbar";
import { Footer } from "@/components/site/Footer";

const supportPhones = [
  "+91 73895 63564",
  "+91 78690 27983",
  "+91 70245 68193",
  "+91 74152 63564",
  "+91 74153 63564",
  "+91 74159 13564",
  "+91 74159 23564",
  "+91 91791 84304",
];

const whatsappPhones = ["+91 73895 63564", "+91 78690 27983"];

const supportUseCases = [
  "Student enrollment enquiries",
  "Tutor recruitment assistance",
  "Tutor allocation assistance",
  "Demo session booking",
  "Academic counselling",
  "Recruitment partnership",
  "Partnership discussions",
];

const whatsappUseCases = [
  "Demo session booking",
  "Course and subject enquiries",
  "Fee structure details",
  "Tutor application guidance",
  "Local branch support",
];

const primaryCities = [
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Mumbai",
  "Pune",
  "Delhi",
  "Gurugram",
  "Kolkata",
  "Chandigarh",
  "Durg",
  "Raipur",
  "Bilaspur",
  "Nagpur",
  "Bhopal",
  "Indore",
  "Lucknow",
  "Surat",
  "Ahmedabad",
  "Jaipur",
];

const zones = [
  {
    title: "North Zone",
    cities:
      "Noida, Faridabad, Ghaziabad, Dehradun, Kanpur, Varanasi, Prayagraj, Agra, Meerut, Aligarh, Bareilly, Gorakhpur, Amritsar, Ludhiana, Shimla, Jammu, Srinagar, Leh, Haldwani, Roorkee, Haridwar, Panipat, Karnal, Hisar, Ambala, Bathinda, Bikaner, Kota, Ajmer, Alwar, Sikar, Pali, Bharatpur, Firozabad, Mathura, Saharanpur, Muzaffarnagar, Moradabad, Rampur, Shahjahanpur, Budaun, Pilibhit, Etawah, Mainpuri, Hathras, Bulandshahr, Bijnor.",
  },
  {
    title: "East Zone",
    cities:
      "Patna, Ranchi, Bhubaneswar, Guwahati, Imphal, Aizawl, Kohima, Itanagar, Shillong, Gangtok, Dhanbad, Jamshedpur, Siliguri, Cuttack, Sambalpur, Rourkela, Purnia, Muzaffarpur, Darbhanga, Gaya, Bhagalpur, Asansol, Durgapur, Haldia, Kharagpur, Malda, Bardhaman, Jalpaiguri, Balasore, Berhampur, Angul, Tinsukia, Tezpur, Nagaon, Dibrugarh.",
  },
  {
    title: "West Zone",
    cities:
      "Vadodara, Rajkot, Jodhpur, Udaipur, Panaji, Margao, Aurangabad, Nashik, Solapur, Kolhapur, Nanded, Jalgaon, Vapi, Bharuch, Jamnagar, Bhavnagar, Junagadh, Gandhidham, Porbandar, Bhiwandi, Ulhasnagar, Thane, Kalyan, Mira-Bhayandar, Palghar, Ratnagiri, Satara, Sangli, Latur, Dhule, Akola, Amravati, Chandrapur, Yavatmal.",
  },
  {
    title: "South Zone",
    cities:
      "Coimbatore, Kochi, Thiruvananthapuram, Visakhapatnam, Vijayawada, Mysuru, Mangalore, Tiruchirappalli, Madurai, Salem, Warangal, Tirupati, Hubballi, Belagavi, Puducherry, Port Blair, Kakinada, Nellore, Karimnagar, Guntur, Kadapa, Anantapur, Nizamabad, Thrissur, Kozhikode, Kannur, Palakkad, Erode, Tirunelveli, Vellore, Thanjavur, Kanchipuram, Kurnool, Ongole, Rajahmundry, Eluru, Chittoor, Hosur, Udupi, Davanagere, Ballari.",
  },
  {
    title: "Central Zone",
    cities:
      "Jabalpur, Ujjain, Sagar, Rewa, Korba, Jagdalpur, Satna, Chhindwara, Seoni, Ratlam, Dewas, Vidisha, Hoshangabad, Guna, Shivpuri, Damoh, Katni, Betul, Khandwa, Burhanpur, Rajnandgaon, Ambikapur, Dhamtari, Mahasamund, Balaghat.",
  },
];

function toTel(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

function toWhatsApp(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}

export default function ContactPage() {
  return (
    <>
      <main className="bg-gradient-to-b from-blue-50/80 via-white to-indigo-50/60 px-4 pb-20 pt-28 md:pt-32">
        <Navbar
          onPrimaryCTA={() => {
            window.location.href = "/#contact";
          }}
        />

        <div className="mx-auto max-w-[1200px] space-y-14">
          <section className="relative overflow-hidden sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 " />
            <div className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 " />
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-blue-700/90">Contact Us</p>
                <h1 className="mt-3 text-balance bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-600 bg-clip-text text-3xl font-extrabold leading-[1.15] text-transparent sm:text-4xl md:text-5xl">
                  We&apos;re Here to Help
                </h1>
                <p className="mt-4 max-w-4xl text-base font-semibold text-slate-700 sm:text-lg">
                  Connect with the Indian Mentors Team for Personalised Academic Support
                </p>
                <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700/90">
                  Indian Mentors - Guiding Students Toward Academic Success
                </p>
                <p className="mt-5 max-w-5xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  Whether you are a parent looking for the right tutor, a student seeking academic support, or an
                  educator interested in joining our mentor network, the team at Indian Mentors is always ready to
                  assist you. Our support team helps with tutor selection, demo session booking, student enrollment,
                  and partnership enquiries, ensuring a smooth and professional experience for every learner and
                  mentor.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Fast Response", icon: Headset, tone: "from-blue-600 to-indigo-600" },
                    { label: "Verified Mentors", icon: Users2, tone: "from-indigo-600 to-violet-600" },
                    { label: "Pan India Support", icon: Globe2, tone: "from-cyan-600 to-blue-600" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="group rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_24px_rgba(37,99,235,0.16)]"
                    >
                      <span
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${item.tone} text-white shadow-md`}
                      >
                        <item.icon className="h-4 w-4" />
                      </span>
                      <p className="mt-2 text-sm font-bold text-blue-900">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative w-full max-w-2xl lg:ml-auto">
                <div className="absolute -left-6 top-5 z-10 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-xs font-extrabold text-blue-800 shadow-md">
                  24-48h Email Response
                </div>
                <div className="absolute -bottom-4 right-5 z-10 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="overflow-hidden ">
                  <Image
                    src="/assets/institutes/institutes.webp"
                    alt="Indian Mentors support team"
                    width={1300}
                    height={1000}
                    className="aspect-[4/3] w-full  object-contain object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-5 lg:grid-cols-3">
            <article className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_8px_28px_rgba(15,23,42,0.08)] lg:col-span-2">
              <div className="flex items-center gap-2 text-blue-700">
                <MapPin className="h-5 w-5" />
                <p className="text-xs font-extrabold uppercase tracking-[0.2em]">Head Office</p>
              </div>
              <h2 className="mt-3 text-2xl font-extrabold text-slate-900">Indian Mentors Headquarters</h2>
              <p className="mt-3 text-sm font-semibold text-slate-700">
                Indian Mentors - Personalised Tutoring Services
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                32A, Indian Mentors Building, Near Avantibai Chowk, Junwani Road, Beside Dubey Dairy, Kohka, Bhilai,
                District Durg, Chhattisgarh, India - 490023
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                The headquarters of Indian Mentors is located in Bhilai, serving as the central hub for academic
                operations, tutor coordination, technology systems, and nationwide tutoring services.
              </p>
            </article>

            <article className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-indigo-50/60 p-6 shadow-[0_8px_24px_rgba(30,64,175,0.1)]">
              <div className="flex items-center gap-2 text-indigo-700">
                <Clock3 className="h-5 w-5" />
                <p className="text-xs font-extrabold uppercase tracking-[0.2em]">Need Help?</p>
              </div>
              <h3 className="mt-3 text-lg font-extrabold text-slate-900">We&apos;re Available to Support You</h3>
              <p className="mt-3 text-sm font-semibold text-slate-700">Office Working Days</p>
              <p className="text-sm text-slate-600">Monday - Saturday</p>
              <p className="mt-3 text-sm font-semibold text-slate-700">Office Working Hours</p>
              <p className="text-sm text-slate-600">10:00 AM - 07:00 PM</p>
              <p className="mt-4 rounded-xl border border-indigo-100 bg-white/70 px-3 py-2 text-xs font-semibold text-indigo-800">
                Reach out anytime during working hours for quick support.
              </p>
            </article>
          </section>

          <section className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_8px_28px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-2 text-blue-700">
                <Phone className="h-5 w-5" />
                <p className="text-xs font-extrabold uppercase tracking-[0.2em]">Call Us</p>
              </div>
              <h3 className="mt-3 text-xl font-extrabold text-slate-900">Speak with Our Support Team</h3>
              <ul className="mt-4 space-y-2">
                {supportUseCases.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-700">
                    <span className="mt-[4px] inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[8px] font-extrabold text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {supportPhones.map((phone) => (
                  <a
                    key={phone}
                    href={toTel(phone)}
                    className="rounded-xl border border-blue-100 bg-blue-50/60 px-3 py-2 text-sm font-bold text-blue-800 transition hover:bg-blue-100/70"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/70 to-blue-50/50 p-6 shadow-[0_8px_24px_rgba(16,185,129,0.12)]">
              <div className="flex items-center gap-2 text-emerald-700">
                <MessageCircle className="h-5 w-5" />
                <p className="text-xs font-extrabold uppercase tracking-[0.2em]">WhatsApp Support</p>
              </div>
              <h3 className="mt-3 text-xl font-extrabold text-slate-900">Instant Support on WhatsApp</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Connect with our support team for quick responses regarding tutoring services and enquiries.
              </p>
              <ul className="mt-4 space-y-2">
                {whatsappUseCases.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-700">
                    <span className="mt-[4px] inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[8px] font-extrabold text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-col gap-2">
                {whatsappPhones.map((phone) => (
                  <a
                    key={phone}
                    href={toWhatsApp(phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-emerald-200 bg-white/80 px-3 py-2 text-sm font-bold text-emerald-800 transition hover:bg-emerald-100/70"
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <a
                href={toWhatsApp(whatsappPhones[0])}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-emerald-700"
              >
                Chat on WhatsApp
              </a>
            </article>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_8px_28px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-2 text-blue-700">
                <Mail className="h-5 w-5" />
                <p className="text-xs font-extrabold uppercase tracking-[0.2em]">Email Support</p>
              </div>
              <h3 className="mt-3 text-xl font-extrabold text-slate-900">Write to Our Team</h3>
              <p className="mt-3 text-sm text-slate-600">
                For detailed enquiries, institutional partnerships, or official communication, contact us by email.
              </p>
              <a
                href="mailto:info@indianmentors.in"
                className="mt-4 inline-flex rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-800 transition hover:bg-blue-100"
              >
                info@indianmentors.in
              </a>
              <p className="mt-3 text-xs font-semibold text-slate-500">Response Time: 24-48 working hours</p>
            </article>

            <article className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_8px_28px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-2 text-indigo-700">
                <Globe2 className="h-5 w-5" />
                <p className="text-xs font-extrabold uppercase tracking-[0.2em]">Visit Our Website</p>
              </div>
              <h3 className="mt-3 text-xl font-extrabold text-slate-900">Learn More About Indian Mentors</h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Personalised tutoring services",
                  "Tutor registration process",
                  "Student enrollment procedures",
                  "Academic programs and subjects offered",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-700">
                    <span className="mt-[4px] inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[8px] font-extrabold text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.indianmentors.in"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-800 transition hover:bg-indigo-100"
              >
                www.indianmentors.in
              </a>
            </article>
          </section>

          <section className="overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-white shadow-[0_16px_40px_rgba(37,99,235,0.35)] sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-100">Let&apos;s Get Started</p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Empowering Students with Personalised Mentorship
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-blue-50 sm:text-base">
              Take the first step towards better academic performance with expert guidance from Indian Mentors.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-4 text-right justify-end">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-extrabold text-blue-700 shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Talk to Counsellor
              </Link>
            </div>
            <p className="mt-5 text-sm font-semibold text-blue-100">
              At Indian Mentors, your academic success is our priority. Reach out today and let us help you achieve
              your learning goals with the right guidance and support.
            </p>
          </section>

          <section>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-blue-700/90">Cities of Operation</p>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Expanding Structured Mentorship Across India
            </h2>
            <p className="mt-3 max-w-5xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Indian Mentors operates as a growing national academic ecosystem dedicated to delivering structured and
              personalised tutoring services across multiple cities in India. Our operational network combines
              centralised academic quality control with local accessibility.
            </p>
          </section>

          <section className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_8px_28px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-2 text-blue-700">
                <Building2 className="h-5 w-5" />
                <p className="text-xs font-extrabold uppercase tracking-[0.2em]">Headquarters</p>
              </div>
              <h3 className="mt-3 text-xl font-extrabold text-slate-900">Indian Mentors - National Operations Center</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                32A, Indian Mentors Building, Near Avantibai Chowk, Junwani Road, Beside Dubey Dairy, Kohka, Bhilai,
                District Durg, Chhattisgarh, India - 490023
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Academic operations and mentor coordination",
                  "Tutor verification and onboarding processes",
                  "ERP system management and monitoring",
                  "Academic compliance and quality control",
                  "Strategic expansion of tutoring services across India",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-700">
                    <span className="mt-[4px] inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[8px] font-extrabold text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_8px_28px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-2 text-indigo-700">
                <Building2 className="h-5 w-5" />
                <p className="text-xs font-extrabold uppercase tracking-[0.2em]">Corporate Office</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                The corporate office of Indian Mentors serves as the central hub for academic operations, tutor
                management, student support, and strategic coordination across India.
              </p>
              <p className="mt-3 rounded-2xl border border-indigo-100 bg-indigo-50/60 px-4 py-3 text-sm font-semibold text-indigo-900">
                Office No 7-8-9, 5th Floor, Surya Treasure Island Mall, South Office Block, Junwani Road, Surya
                Vihar, Nehru Nagar, Bhilai, District Durg, Chhattisgarh 490020
              </p>
            </article>
          </section>

          <section className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_8px_28px_rgba(15,23,42,0.08)] sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-700/90">
              Branch Offices - Major Cities with Operational Presence
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {primaryCities.map((city) => (
                <div
                  key={city}
                  className="rounded-2xl border border-blue-100 bg-blue-50/60 px-3 py-3 text-sm font-bold text-blue-900 transition hover:-translate-y-0.5 hover:bg-blue-100/80"
                >
                  {city}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-700/90">Also Serving In</p>
              <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">Nationwide Educational Hubs</h3>
              <p className="mt-3 max-w-5xl text-sm leading-relaxed text-slate-600 sm:text-base">
                In addition to branch locations, Indian Mentors actively serves students through our home tutoring
                network and online learning ecosystem.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {zones.map((zone) => (
                <article
                  key={zone.title}
                  className="rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
                >
                  <h4 className="text-base font-extrabold text-slate-900">{zone.title}</h4>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">{zone.cities}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/70 to-blue-50/50 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-emerald-700">
              <Target className="h-5 w-5" />
              <p className="text-xs font-extrabold uppercase tracking-[0.22em]">Continuous Expansion</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              Indian Mentors continues to expand its tutoring network across India to ensure that more students gain
              access to qualified mentors, personalised academic support, and structured learning systems.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "Tutor verification and screening",
                "Academic monitoring and ERP tracking",
                "Structured tutoring methodology",
                "Dedicated academic support services",
              ].map((item) => (
                <li key={item} className="rounded-xl border border-emerald-100 bg-white/85 px-4 py-3 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-white shadow-[0_16px_40px_rgba(37,99,235,0.35)] sm:p-9">
            <div className="flex items-center gap-2 text-blue-100">
              <Users2 className="h-5 w-5" />
              <p className="text-xs font-extrabold uppercase tracking-[0.22em]">Find a Mentor in Your City</p>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Get Personalised Tutoring Support in Your City
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-blue-50 sm:text-base">
              Experience structured mentorship designed to help students achieve confidence, clarity, and academic
              success.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">

              <a
                href={toTel(supportPhones[0])}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-extrabold text-blue-700 shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Talk to Counsellor
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

