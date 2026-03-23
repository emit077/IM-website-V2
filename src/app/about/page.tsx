import PageTemplate from "@/components/home/PageTemplate";

export default function AboutPage() {
  return (
    <PageTemplate
      title="About Indian Mentors"
      subtitle="Premium, student-centric tutoring—built around verified mentors and weekly progress."
      cta={{ label: "Book Free Demo", href: "/#contact" }}
      secondaryCta={{ label: "Explore Tutor Profiles", href: "/#tutors" }}
      sections={[
        {
          heading: "Mentor-first matching",
          body: "We match students with tutors based on syllabus-fit, learning goals, and pace—so tutoring stays effective.",
        },
        {
          heading: "Transparent weekly plan",
          body: "Your student’s plan includes practice loops, homework structure, and progress checkpoints.",
        },
        {
          heading: "Verified tutoring quality",
          body: "Verified tutors focus on academic outcomes: concept clarity, exam readiness, and consistent revision.",
        },
      ]}
    />
  );
}

