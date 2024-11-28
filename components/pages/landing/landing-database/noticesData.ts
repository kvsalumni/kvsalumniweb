export interface Notice {
  id: string;
  title: string;
  description: string;
  date: string;
  category: "event" | "announcement" | "meeting" | "urgent";
  link?: string;
}

export const noticesList: Notice[] = [
  {
    id: "NT001",
    title: "5th Alumni Meet Announcement",
    description: "Join us for the 5th KV Jawahar Nagar Alumni Meet. Reconnect with old friends and celebrate our shared memories.",
    date: "2024-02-15",
    category: "event",
    link: "/events/5th-alumni-meet"
  },
  {
    id: "NT002",
    title: "Registration Open for Alumni Database Update",
    description: "We are updating our alumni database. Please fill out the online form to keep your information current.",
    date: "2024-01-20",
    category: "announcement",
    link: "/registration/update-profile"
  },
  {
    id: "NT003",
    title: "Urgent: Scholarship Applications Closing Soon",
    description: "Last date to apply for alumni-sponsored scholarships. Don't miss this opportunity!",
    date: "2024-03-10",
    category: "urgent",
    link: "/scholarships/apply"
  },
  {
    id: "NT004",
    title: "Annual General Body Meeting",
    description: "The annual general body meeting will be held virtually. All members are invited to participate.",
    date: "2024-04-05",
    category: "meeting",
    link: "/meetings/agm-2024"
  },
  {
    id: "NT005",
    title: "Alumni Career Mentorship Program Launch",
    description: "We're excited to announce our new Career Mentorship Program connecting experienced alumni with young professionals.",
    date: "2024-01-30",
    category: "announcement",
    link: "/career/mentorship-program"
  },
  {
    id: "NT006",
    title: "Reunion Photoshoot and Memory Book Project",
    description: "Calling all alumni! Submit your old school photos for our commemorative memory book. Digital and physical submissions accepted.",
    date: "2024-02-28",
    category: "event",
    link: "/events/memory-book-project"
  },
  {
    id: "NT007",
    title: "Emergency Alumni Support Fund",
    description: "We've established an emergency support fund for alumni facing unexpected financial challenges. Applications now open.",
    date: "2024-03-15",
    category: "urgent",
    link: "/support/emergency-fund"
  },
  {
    id: "NT008",
    title: "Quarterly Alumni Chapter Webinar",
    description: "Join our quarterly online meetup featuring distinguished alumni sharing their professional journeys and insights.",
    date: "2024-04-20",
    category: "meeting",
    link: "/meetings/quarterly-webinar"
  },
  {
    id: "NT009",
    title: "Alumni Startup Incubation Program",
    description: "Calling entrepreneurs! Our new startup incubation program offers mentorship, networking, and potential seed funding.",
    date: "2024-02-10",
    category: "announcement",
    link: "/entrepreneurship/startup-incubator"
  },
  {
    id: "NT010",
    title: "Urgent: COVID-19 Relief Fundraiser",
    description: "We're organizing a fundraiser to support alumni and their families affected by COVID-19. Every contribution matters.",
    date: "2024-03-25",
    category: "urgent",
    link: "/support/covid-relief"
  }
];
