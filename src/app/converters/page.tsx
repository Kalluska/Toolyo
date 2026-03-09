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
  title: "Converters",
  description:
    "Browse converter tools for text, encoding, colors, timestamps, structured data, and common web formats.",
  alternates: {
    canonical: "https://toolyo-kappa.vercel.app/converters",
  },
};

export default function ConvertersPage() {
  const converterTools = tools.filter((tool) => {
    const name = tool.name.toLowerCase();
    return converterKeywords.some((keyword) => name.includes(keyword));
  });

  return (
    <CategoryPage
      eyebrow="Category"
      title="Converters"
      description="These converter tools help transform data from one format to another, including text, encoding, timestamps, colors, structured data, and common developer formats."
      tools={converterTools}
    />
  );
}
