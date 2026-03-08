import Link from "next/link";
import { tools } from "@/data/tools";

type RelatedToolsProps = {
  currentSlug: string;
  currentCategory?: string;
};

export default function RelatedTools({
  currentSlug,
  currentCategory,
}: RelatedToolsProps) {
  const currentTool = tools.find((tool) => tool.slug === currentSlug);

  const related = tools
    .filter((tool) => tool.slug !== currentSlug)
    .filter((tool) =>
      currentCategory
        ? tool.category === currentCategory
        : currentTool
          ? tool.category === currentTool.category
          : true
    )
    .slice(0, 6);

  if (related.length === 0) return null;

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 p-6">
      <h3 className="text-2xl font-bold">Related tools</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {related.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="rounded-xl border border-zinc-200 p-4 transition hover:border-zinc-400"
          >
            <div className="text-sm text-zinc-500">{tool.category}</div>
            <div className="mt-1 font-semibold">{tool.name}</div>
            <p className="mt-2 text-sm text-zinc-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
