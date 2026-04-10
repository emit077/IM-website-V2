import PageTemplate from "@/components/home-3/PageTemplate";

export default function AcademicCoveragePage() {
  return (
    <PageTemplate
      title="Academic Coverage"
      subtitle="Grades, boards, and subjects—taught with a syllabus-aligned mentorship approach."
      cta={{ label: "Find a Tutor", href: "/#services" }}
      secondaryCta={{ label: "Book Free Demo", href: "/#contact" }}
      sections={[
        {
          heading: "Grades",
          body: "From fundamentals to board-year strategy: Grade 1–5, 6–8, 9–10, and 11–12 learning plans.",
        },
        {
          heading: "Boards",
          body: "CBSE, ICSE, and State Boards—chapter planning plus practice loops for consistent improvement.",
        },
        {
          heading: "Subjects",
          body: "Mathematics, Science, English, Social Science, and Computer Science basics to exam-level practice.",
        },
      ]}
    />
  );
}

