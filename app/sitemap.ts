import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://invdgroup.com/",
      lastModified: "2026-10-19",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://invdgroup.com/base-digital",
      lastModified: "2026-10-19",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://invdgroup.com/diagnostico",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
