import Link from "next/link";
import { tools } from "@/data/tools";

type ToolFeaturedToolsProps = {
  currentSlug: string;
};

const featuredSlugs = ["word-counter", "character-counter", "json-formatter"];

export default function ToolFeaturedTools({
  currentSlug,
}: ToolFeaturedToolsProps) {
  const featured = tools.filter(
    (tool) => featuredSlugs.includes(tool.slug) && tool.slug !== currentSlug
  );

  if (featured.length === 0) return null;

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 p-6">
      <h3 className="text-2xl font-bold">Featured tools</h3>
      <p className="mt-2 text-zinc-600">
        These are some of the most useful and frequently visited tools on Toolyo.
      </p>

      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((tool) => (
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
