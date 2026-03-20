import { tools, Tool } from "@/data/tools";

const categoryPathMap: Record<string, string> = {
  Text: "/text-tools",
  SEO: "/seo-tools",
  Developer: "/developer-tools",
  Converters: "/converters",
  Generators: "/generators",
};

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getCategoryPath(category?: string): string | undefined {
  if (!category) return undefined;
  return categoryPathMap[category] || undefined;
}

export function getCategoryLabel(category?: string): string | undefined {
  return category;
}
