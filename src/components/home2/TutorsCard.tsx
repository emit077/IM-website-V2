"use client";

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

export function TutorsCard() {
    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {tutors.map((tutor) => (
                <article
                    key={tutor.name}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                    <div className="relative bg-blue-600 px-6 pb-5 pt-4 text-white">
                        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-4 border-white/90 bg-white shadow">
                            <img src={tutor.image} alt={tutor.name} className="h-full w-full object-cover" />
                        </div>
                        <h3 className="mt-3 text-center text-1xl font-semibold">
                            {tutor.name} <span className="text-green-300">✓</span>
                        </h3>
                        <p className="mx-auto mt-2 w-fit rounded-lg bg-white/20 px-3 py-1 text-xs font-medium">
                            {tutor.location}
                        </p>
                        <p className="mt-3 text-center text-sm">{tutor.subjects.join(" | ")}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 bg-slate-100 px-4 py-3 text-center">
                        <div>
                            <p className="flex items-center justify-center gap-1 text-xl font-semibold text-slate-900">
                                {tutor.rating} <StarIcon />
                            </p>
                            <p className="text-xs text-slate-500">{Math.floor(tutor.reviews / 1000)}k Reviews</p>
                        </div>
                        <div>
                            <p className="flex items-center justify-center gap-1 text-xl font-semibold text-slate-900">
                                {tutor.classes} <ClockIcon />
                            </p>
                            <p className="text-xs text-slate-500">Hrs Classes</p>
                        </div>
                        <div>
                            <p className="flex items-center justify-center gap-1 text-xl font-semibold text-slate-900">
                                {tutor.students} <UserIcon />
                            </p>
                            <p className="text-xs text-slate-500">Students</p>
                        </div>
                    </div>

                    <div className="space-y-3 p-5">
                        <p className="text-xs text-slate-700">
                            {tutor.languages.join(", ")}
                        </p>
                        <p className="line-clamp-3 text-[14px] leading-relaxed text-slate-500">{tutor.bio}</p>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-2xl font-bold text-slate-900">₹{tutor.pricePerHour}</span>
                                <span className="ml-1 text-sm text-slate-500">/hour</span>
                            </div>
                            {tutor.featured ? <span className="text-xs font-semibold text-green-500">↗ Popular Tutor</span> : null}
                        </div>
                        <button
                            type="button"
                            className="mt-1 inline-flex w-full items-center justify-center rounded-md border border-blue-600 bg-white px-4 py-2 text-1xl font-medium text-blue-600 transition hover:bg-blue-50"
                        >
                            Know More
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
}
