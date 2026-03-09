import type { Metadata } from "next";
import CategoryPage from "@/components/category-page";
import { tools } from "@/data/tools";

const converterKeywords = [
  "to ",
  "converter",
  "decode",
  "encode",
  "hex",
  "binary",
  "ascii",
  "morse",
  "timestamp",
  "rgb",
  "hsl",
  "yaml",
  "xml",
  "base32",
  "base64",
  "url",
];

export const metadata: Metadata = {
  title: "Developer Tools",
  description:
    "Browse developer tools for JSON, encoding, formatting, validation, parsing, and common web development tasks.",
  alternates: {
    canonical: "https://toolyo-kappa.vercel.app/developer-tools",
  },
};

export default function DeveloperToolsPage() {
  const developerTools = tools.filter((tool) => {
    if (tool.category !== "Developer") return false;
    const name = tool.name.toLowerCase();
    return !converterKeywords.some((keyword) => name.includes(keyword));
  });

  return (
    <CategoryPage
      eyebrow="Category"
      title="Developer Tools"
      description="These developer tools help with formatting, validating, parsing, generating, and debugging common development data and code structures."
      tools={developerTools}
    />
  );
}
