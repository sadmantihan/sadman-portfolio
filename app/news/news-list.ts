export type NewsItem = {
  id: string;
  date: string; // YYYY-MM-DD
  text: string;
  href?: string;
  linkLabel?: string;
};

export const news: NewsItem[] = [
  {
    id: "sample-project",
    date: "2026-10-03",
    text: "Example: Added a new project to my portfolio.",
    href: "#projects",
    linkLabel: "View projects",
  },
  {
    id: "sample-training",
    date: "2026-09-20",
    text: "Example: Completed a training course and added the certificate.",
    href: "#education",
    linkLabel: "View training",
  },
  {
    id: "sample-research",
    date: "2026-09-10",
    text: "Example: Shared an update on my undergraduate research.",
  },
];