import { MetadataRoute } from "next";
import { arabicTopics } from "@/data/subjects/arabic/content";
import { englishTopics } from "@/data/subjects/english/content";
import { csTopics } from "@/data/subjects/cs/content";

const BASE_URL = "https://academiq-edu.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/courses`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/courses/arabic`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/courses/english`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/courses/cs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exam`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guide/national-exam`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guide/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic topic routes — Arabic
  const arabicTopicRoutes: MetadataRoute.Sitemap = arabicTopics.map((topic) => ({
    url: `${BASE_URL}/courses/arabic/${topic.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic topic routes — English
  const englishTopicRoutes: MetadataRoute.Sitemap = englishTopics.map((topic) => ({
    url: `${BASE_URL}/courses/english/${topic.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic topic routes — Computer Science
  const csTopicRoutes: MetadataRoute.Sitemap = csTopics.map((topic) => ({
    url: `${BASE_URL}/courses/cs/${topic.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...arabicTopicRoutes, ...englishTopicRoutes, ...csTopicRoutes];
}
