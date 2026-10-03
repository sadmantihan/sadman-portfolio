import type { MetadataRoute } from "next";
import { articles } from "./articles/article-list";

const SITE_URL = "https://sadman-sami-khan.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
    },
    ...articles.map((article) => ({
      url: `${SITE_URL}/articles/${article.slug}`,
    })),
  ];
}