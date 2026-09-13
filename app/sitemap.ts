import type { MetadataRoute } from "next";
import { categories } from "@/data/products";

const BASE_URL = "https://www.zamzamdoor.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categories.map((c) => ({
      url: `${BASE_URL}/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
