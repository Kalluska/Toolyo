import type { Metadata } from "next";
import CategoryPage from "@/components/category-page";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Text Tools",
  description:
    "Browse text tools for counting, formatting, cleaning, converting, and editing text online.",
  alternates: {
    canonical: "https://toolyo-kappa.vercel.app/text-tools",
  },
};

export default function TextToolsPage() {
  const textTools = tools.filter((tool) => tool.category === "Text");

  return (
    <CategoryPage
      eyebrow="Category"
      title="Text Tools"
      description="These text tools help with counting, formatting, cleaning, comparing, trimming, transforming, and restructuring text directly in the browser."
      tools={textTools}
    />
  );
}
