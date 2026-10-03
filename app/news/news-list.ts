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
];