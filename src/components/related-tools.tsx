import { tools, type Tool } from "@/data/tools";
import { relatedToolsMap } from "@/lib/relatedToolsMap";
import ToolCard from "@/components/tool-card";

type RelatedToolsProps = {
  currentSlug: string;
  currentCategory?: string;
};

export default function RelatedTools({
  currentSlug,
  currentCategory,
}: RelatedToolsProps) {
  const currentTool = tools.find((tool) => tool.slug === currentSlug);

  const mappedSlugs = relatedToolsMap[currentSlug] || [];
  const mappedTools: Tool[] = mappedSlugs
    .map((slug) => tools.find((tool) => tool.slug === slug))
    .filter((tool): tool is Tool => Boolean(tool));

  const fallbackTools: Tool[] = tools
    .filter((tool) => tool.slug !== currentSlug)
    .filter((tool) =>
      currentCategory
        ? tool.category === currentCategory
        : currentTool
          ? tool.category === currentTool.category
          : false
    )
    .filter((tool) => !mappedSlugs.includes(tool.slug))
    .slice(0, Math.max(0, 6 - mappedTools.length));

  const related: Tool[] = [...mappedTools, ...fallbackTools].slice(0, 6);

  if (related.length === 0) return null;

  return (
    <section className="mt-8 rounded-2xl border border-zinc-300 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-bold text-zinc-950">Related tools</h3>
      <p className="mt-2 text-zinc-700">
        Continue your workflow with closely related tools on Toolyo.
      </p>

      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {related.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} compact />
        ))}
      </div>
    </section>
  );
}
