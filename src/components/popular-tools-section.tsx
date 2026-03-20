import { tools } from "@/data/tools";
import ToolCard from "@/components/tool-card";

type PopularToolsSectionProps = {
  title: string;
  description?: string;
  slugs: string[];
};

export default function PopularToolsSection({
  title,
  description,
  slugs,
}: PopularToolsSectionProps) {
  const selectedTools = slugs
    .map((slug) => tools.find((tool) => tool.slug === slug))
    .filter(Boolean);

  if (selectedTools.length === 0) return null;

  return (
    <section className="mt-10">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">{title}</h3>
        {description ? (
          <p className="mt-2 max-w-3xl text-zinc-700 dark:text-zinc-300">{description}</p>
        ) : null}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {selectedTools.map((tool) => (
          <ToolCard key={tool!.slug} tool={tool!} badge="Popular" />
        ))}
      </div>
    </section>
  );
}
