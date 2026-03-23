import PageTemplate from "@/components/home/PageTemplate";

export default function CareerPage() {
  return (
    <PageTemplate
      title="Careers"
      subtitle="Join a mentorship-first EdTech team that focuses on quality learning outcomes."
      cta={{ label: "Partner as a Tutor", href: "/#tutors" }}
      secondaryCta={{ label: "Contact Our Team", href: "/#contact" }}
      sections={[
        {
          heading: "Tutor roles (Home/Online)",
          body: "Teach with verified matching, weekly structure, and progress insights—so your mentorship stays consistent.",
        },
        {
          heading: "Mentor quality & support",
          body: "We help tutors follow a curriculum-fit plan and keep students on track with transparent workflows.",
        },
        {
          heading: "How to apply",
          body: "Request a free demo / apply flow. We review your profile and share the next steps for onboarding.",
        },
      ]}
    />
  );
}

