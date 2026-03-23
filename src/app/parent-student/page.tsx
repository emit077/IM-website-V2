import PageTemplate from "@/components/home/PageTemplate";

export default function ParentStudentPage() {
  return (
    <PageTemplate
      title="For Parents & Students"
      subtitle="Student-centric learning with verified tutors and transparent weekly progress."
      cta={{ label: "Book Free Demo", href: "/#contact" }}
      secondaryCta={{ label: "Explore Tutor Cards", href: "/#tutors" }}
      sections={[
        {
          heading: "What parents get",
          body: "A clear plan, a verified mentor shortlist, and weekly progress signals—so you always know what’s working.",
        },
        {
          heading: "What students get",
          body: "A structured approach: concept clarity, practice loops, homework workflows, and exam-ready revision.",
        },
        {
          heading: "Confidence with consistency",
          body: "We align sessions with syllabus pace so students build momentum instead of cramming.",
        },
      ]}
    />
  );
}

