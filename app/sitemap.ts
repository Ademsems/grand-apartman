import type { MetadataRoute } from "next";
import { APARTMENTS } from "@/lib/data";

const BASE_URL = "https://grandapartman.sk";

export default function sitemap(): MetadataRoute.Sitemap {
  const aptPages = APARTMENTS.map((a) => ({
    url: `${BASE_URL}/apartments/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/apartments`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...aptPages,
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
