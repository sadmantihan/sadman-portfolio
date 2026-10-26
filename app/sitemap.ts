import type { MetadataRoute } from "next";
import { articles } from "./articles/article-list";
import { SITE_URL } from "@/lib/site";

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