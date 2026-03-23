import PageTemplate from "@/components/home/PageTemplate";

export default function TutorPage() {
  return (
    <PageTemplate
      title="Become a Verified Tutor"
      subtitle="Teach with a mentorship-first platform—verified matching, weekly structure, and support tools."
      cta={{ label: "Apply as a Tutor", href: "/#contact" }}
      secondaryCta={{ label: "View Services", href: "/#services" }}
      sections={[
        {
          heading: "Verified student matching",
          body: "Tutors are shortlisted based on fit so you teach students who match your expertise and pace.",
        },
        {
          heading: "Weekly learning structure",
          body: "Attendance signals, homework workflow, and progress checkpoints keep sessions consistent.",
        },
        {
          heading: "Support that helps you teach",
          body: "Curriculum-fit guidance and clear expectations reduce guesswork and improve outcomes.",
        },
      ]}
    />
  );
}

