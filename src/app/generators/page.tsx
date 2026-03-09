import type { Metadata } from "next";
import CategoryPage from "@/components/category-page";
import { tools } from "@/data/tools";

const generatorKeywords = [
  "generator",
  "current timestamp",
  "password",
  "uuid",
  "random",
  "lorem ipsum",
  "gradient",
  "query string builder",
];

export const metadata: Metadata = {
  title: "Generators",
  description:
    "Browse generator tools for passwords, UUIDs, lorem ipsum, timestamps, random values, gradients, and more.",
  alternates: {
    canonical: "https://toolyo-kappa.vercel.app/generators",
  },
};

export default function GeneratorsPage() {
  const generatorTools = tools.filter((tool) => {
    const name = tool.name.toLowerCase();
    return generatorKeywords.some((keyword) => name.includes(keyword));
  });

  return (
    <CategoryPage
      eyebrow="Category"
      title="Generators"
      description="These generator tools create useful outputs instantly, including passwords, UUIDs, lorem ipsum, random values, gradients, timestamps, and similar helper data."
      tools={generatorTools}
    />
  );
}
