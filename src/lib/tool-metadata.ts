import type { Metadata } from "next";
import { getToolBySlug } from "@/data/tools";

export function getToolMetadata(slug: string): Metadata {
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool Not Found",
      description: "The requested tool could not be found.",
    };
  }

  return {
    title: tool.seoTitle,
    description: tool.seoDescription,
    openGraph: {
      title: `${tool.seoTitle} | Toolyo`,
      description: tool.seoDescription,
      url: `https://toolyo.com/tools/${tool.slug}`,
      siteName: "Toolyo",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.seoTitle} | Toolyo`,
      description: tool.seoDescription,
    },
    alternates: {
      canonical: `https://toolyo.com/tools/${tool.slug}`,
    },
  };
}
