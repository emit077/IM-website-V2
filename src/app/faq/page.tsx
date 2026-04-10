import PageTemplate from "@/components/home-3/PageTemplate";

export default function FaqPage() {
  return (
    <PageTemplate
      title="Frequently Asked Questions"
      subtitle="Quick answers about demo scheduling, online/home tutoring, and how matching works."
      cta={{ label: "Book Free Demo", href: "/#contact" }}
      secondaryCta={{ label: "Explore Tutor Services", href: "/#services" }}
      sections={[
        {
          heading: "How does tutor matching work?",
          body: "You share subject, grade, and mode (Online/Home). We shortlist verified tutors and help you schedule a free demo.",
        },
        {
          heading: "Online vs Home tutoring?",
          body: "Online tutoring uses interactive notes, quizzes, and practice. Home tutoring supports 1:1 focus with structured homework.",
        },
        {
          heading: "What happens after the demo?",
          body: "You’ll get a clear next step plan and a shortlist based on fit. We align on weekly progress and goals.",
        },
      ]}
    />
  );
}

