export type NewsItem = {
  id: string;
  date: string; // YYYY-MM-DD
  text: string;
  href?: string;
  linkLabel?: string;
};

export const news: NewsItem[] = [
  {
    id: "data-annotator-bdai",
    date: "2026-04-01",
    text: "Joined BDAI-HEAT Sub-Project (HEAT-13211-CU), funded by World Bank as a Data Annotator in the Department of Computer Science and Engineering, University of Chittagong.",
  },
  {
    id: "aspire-leaders-cohort-4-2026",
    date: "2026-10-19",
    text: "Accepted into Cohort 4 of the 2026 Aspire Leaders Program, a global leadership development program offered by Aspire Institute.",
    href: "https://www.aspireleaders.org/",
    linkLabel: "About Aspire",
  },
  {
    id: "flyrank-ai-ml-internship",
    date: "2026-10-12",
    text: "Started Machine Learning internship at FlyRank AI, joining the July 2026 cohort through its self-paced program.",
    href: "https://flyrank.ai/",
    linkLabel: "About FlyRank AI",
  },
];
