import PageTemplate from "@/components/home/PageTemplate";

export default function ContactPage() {
  return (
    <PageTemplate
      title="Contact Indian Mentors"
      subtitle="Book a free demo and get matched with verified home & online tutors."
      cta={{ label: "Book Free Demo", href: "/#contact" }}
      secondaryCta={{ label: "Browse Services", href: "/#services" }}
      sections={[
        {
          heading: "Fast demo scheduling",
          body: "Tell us your subject, grade, and mode (Online/Home). We’ll coordinate your free demo with a verified mentor.",
        },
        {
          heading: "Verified communication",
          body: "No spam. You’ll hear from us only to confirm your demo and share your tutor shortlist.",
        },
        {
          heading: "Working hours support",
          body: "We respond within 15 minutes during working hours so learning starts on time.",
        },
      ]}
    />
  );
}

