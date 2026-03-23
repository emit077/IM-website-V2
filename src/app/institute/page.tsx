import PageTemplate from "@/components/home/PageTemplate";

export default function InstitutePage() {
  return (
    <PageTemplate
      title="Institute Partnerships"
      subtitle="Bring verified mentors and curriculum-fit learning plans to your learners."
      cta={{ label: "Become an Institute Partner", href: "/#contact" }}
      secondaryCta={{ label: "Explore Academic Coverage", href: "/#coverage" }}
      sections={[
        {
          heading: "Coaching that stays aligned",
          body: "We align mentoring structure with grades and boards so learners progress with clarity.",
        },
        {
          heading: "Verified mentors & consistent outcomes",
          body: "We focus on tutoring quality: practice loops, homework workflows, and transparent progress.",
        },
        {
          heading: "Mentor onboarding support",
          body: "We help institutions onboard mentors with a learning-first process and clear expectations.",
        },
      ]}
    />
  );
}

