import type { Metadata } from "next";
import CategoryPage from "@/components/category-page";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "SEO Tools",
  description:
    "Browse SEO tools for slugs, keyword analysis, metadata checks, and other search-focused content tasks.",
  alternates: {
    canonical: "https://toolyo-kappa.vercel.app/seo-tools",
  },
};

export default function SeoToolsPage() {
  const seoTools = tools.filter((tool) => tool.category === "SEO");

  return (
    <CategoryPage
      eyebrow="Category"
      title="SEO Tools"
      description="These SEO tools are built for content creators, marketers, and site owners who want to improve structure, metadata, keywords, and search readiness."
      tools={seoTools}
    />
  );
}
