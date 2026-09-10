import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: "https://invdgroup.com", lastModified, changeFrequency: "weekly", priority: 1 },
    { url: "https://invdgroup.com/base-digital", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://invdgroup.com/diagnostico", lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
