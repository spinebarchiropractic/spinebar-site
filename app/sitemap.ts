import type { MetadataRoute } from "next";
import { CONDITIONS, BLOG_POSTS } from "@/lib/constants";

const ALL_CATEGORIES = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://spinebar.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/conditions`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/new-patient`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const conditionRoutes: MetadataRoute.Sitemap = CONDITIONS.map((c) => ({
    url: `${base}/conditions/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = ALL_CATEGORIES.map((cat) => ({
    url: `${base}/blog/category/${cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...conditionRoutes, ...blogRoutes, ...categoryRoutes];
}
