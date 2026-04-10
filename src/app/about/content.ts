/**
 * Static seed data shaped for future CMS / API replacement.
 * Database: ABOUT_TIMELINE
 */
export type TimelineEntry = {
  timeline_id: number;
  year: string;
  milestone_title: string;
  milestone_description: string;
  display_order: number;
  status: "Active" | "Inactive";
};

const timelineSeed: TimelineEntry[] = [
  {
    timeline_id: 1,
    year: "Year 1",
    milestone_title: "Concept & Foundation",
    milestone_description:
      "Establishment of the vision to build a structured personalised tutoring platform.",
    display_order: 1,
    status: "Active",
  },
  {
    timeline_id: 2,
    year: "Year 1",
    milestone_title: "Mentor Network Development",
    milestone_description:
      "Recruitment and verification of qualified subject mentors.",
    display_order: 2,
    status: "Active",
  },
  {
    timeline_id: 3,
    year: "Year 2",
    milestone_title: "Student Mentorship Programs",
    milestone_description:
      "Launch of personalised tutoring services for students across multiple boards.",
    display_order: 3,
    status: "Active",
  },
  {
    timeline_id: 4,
    year: "Year 2",
    milestone_title: "Academic Monitoring Framework",
    milestone_description:
      "Introduction of structured progress tracking and learning reports.",
    display_order: 4,
    status: "Active",
  },
  {
    timeline_id: 5,
    year: "Year 3",
    milestone_title: "Technology Integration",
    milestone_description:
      "Implementation of digital platforms for tutor management and academic tracking.",
    display_order: 5,
    status: "Active",
  },
  {
    timeline_id: 6,
    year: "Year 3",
    milestone_title: "Expansion of Services",
    milestone_description:
      "Expansion of services including online tutoring, academic counselling, and institutional support.",
    display_order: 6,
    status: "Active",
  },
  {
    timeline_id: 7,
    year: "Year 4",
    milestone_title: "National Mentor Network",
    milestone_description:
      "Building a pan-India network of verified mentors and academic professionals.",
    display_order: 7,
    status: "Active",
  },
];

export const aboutTimeline = [...timelineSeed].sort(
  (a, b) => a.display_order - b.display_order
);

/**
 * Database: TEAM_MEMBERS
 */
export type TeamMember = {
  team_id: number;
  name: string;
  image: string | null;
  designation: string;
  department: string;
  bio: string;
  linkedin_url: string | null;
  display_order: number;
  status: "Active" | "Inactive";
};

const teamSeed: TeamMember[] = [
  {
    team_id: 1,
    name: "Ananya Desai",
    image: null,
    designation: "Academic Director",
    department: "Academic Operations",
    bio: "An experienced education professional with expertise in curriculum development, mentor training, and academic performance management. Responsible for overseeing academic quality standards and mentorship programs across the organisation.",
    linkedin_url: null,
    display_order: 1,
    status: "Active",
  },
];

export const teamMembers = [...teamSeed].sort(
  (a, b) => a.display_order - b.display_order
);
