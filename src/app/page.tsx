import Link from "next/link";
import { tools } from "@/data/tools";

const categoryIntro: Record<string, { title: string; description: string }> = {
  Text: {
    title: "Text tools for writing, cleanup, and formatting",
    description:
      "These text tools help with counting, cleaning, sorting, transforming, and restructuring text. They are useful for writers, students, marketers, editors, and anyone who needs quick browser-based text processing.",
  },
  SEO: {
    title: "SEO tools for content and metadata work",
    description:
      "These SEO tools help with slugs, keyword checks, and metadata-related tasks. They are useful for improving content structure, preparing pages for publishing, and working faster on search-focused content.",
  },
  Developer: {
    title: "Developer tools for encoding, JSON, and text processing",
    description:
      "These developer tools help with common technical tasks such as formatting JSON, encoding and decoding strings, normalizing text, and preparing structured content. They are built for speed and simple browser-based use.",
  },
};

export default function HomePage() {
  const groupedTools = tools.reduce<Record<string, typeof tools>>((acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = [];
    acc[tool.category].push(tool);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">MVP</div>
            <h1 className="text-2xl font-bold">Toolyo</h1>
          </div>
          <div className="rounded-full border border-zinc-200 px-4 py-2 text-sm">
            Text + Developer Tools
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
          <h2 className="text-4xl font-bold">Simple tools people actually search for</h2>
          <p className="mt-4 max-w-3xl text-lg text-zinc-600">
            Toolyo is a growing collection of text, SEO, and developer utilities built for speed,
            simplicity, and search demand. Each tool is designed to solve one specific problem
            quickly in the browser without unnecessary complexity.
          </p>

          <div className="mt-10 space-y-10">
            {Object.entries(groupedTools).map(([category, categoryTools]) => {
              const intro = categoryIntro[category];

              return (
                <div key={category}>
                  <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-400">
                    {category}
                  </div>

                  {intro && (
                    <div className="mb-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                      <h3 className="text-2xl font-bold">{intro.title}</h3>
                      <p className="mt-2 max-w-3xl text-zinc-600">{intro.description}</p>
                    </div>
                  )}

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {categoryTools.map((tool) => (
                      <Link
                        key={tool.slug}
                        href={`/tools/${tool.slug}`}
                        className="rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-400"
                      >
                        <div className="text-sm text-zinc-500">{tool.category}</div>
                        <div className="mt-1 text-xl font-semibold">{tool.name}</div>
                        <p className="mt-2 text-sm text-zinc-600">{tool.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
