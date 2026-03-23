import PageTemplate from "@/components/home/PageTemplate";

export default function ChannelPartnerPage() {
  return (
    <PageTemplate
      title="Channel Partners"
      subtitle="Refer students and mentors with a structured onboarding flow and transparent progress."
      cta={{ label: "Partner with Us", href: "/#contact" }}
      secondaryCta={{ label: "View Tutor Services", href: "/#services" }}
      sections={[
        {
          heading: "Referral & onboarding",
          body: "Share student and mentor requirements. We coordinate the next steps and demo scheduling.",
        },
        {
          heading: "Lead tracking",
          body: "Transparent workflow signals so you know what’s happening across demos and mentoring cycles.",
        },
        {
          heading: "Partner training",
          body: "We provide a simple process so your team can recommend the right tutoring format.",
        },
      ]}
    />
  );
}

