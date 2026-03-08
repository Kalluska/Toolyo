"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Tool, tools } from "@/data/tools";

type ToolLayoutProps = {
  currentSlug: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function ToolLayout({
  currentSlug,
  title,
  description,
  children,
}: ToolLayoutProps) {
  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return tools;

    return tools.filter((tool) => {
      return (
        tool.name.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
      );
    });
  }, [search]);

  const groupedTools = useMemo(() => {
    return filteredTools.reduce<Record<string, Tool[]>>((acc, tool) => {
      if (!acc[tool.category]) acc[tool.category] = [];
      acc[tool.category].push(tool);
      return acc;
    }, {});
  }, [filteredTools]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: title,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "All",
    description,
    url: `https://toolyo.com/tools/${currentSlug}`,
    isAccessibleForFree: true,
    author: {
      "@type": "Organization",
      name: "Toolyo",
    },
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="block">
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">MVP</div>
            <h1 className="text-2xl font-bold">Toolyo</h1>
          </Link>
          <div className="rounded-full border border-zinc-200 px-4 py-2 text-sm">
            Text + Developer Tools
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <aside className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-zinc-100 lg:sticky lg:top-6 lg:h-[calc(100vh-4rem)] lg:overflow-hidden">
            <div className="mb-4 px-2 text-sm font-semibold text-zinc-500">Tools</div>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools..."
              className="mb-4 w-full rounded-xl border border-zinc-200 px-3 py-2 outline-none focus:border-zinc-400"
            />

            <div className="h-[calc(100%-4.5rem)] space-y-5 overflow-y-auto pr-1">
              {Object.entries(groupedTools).map(([category, categoryTools]) => (
                <div key={category}>
                  <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    {category}
                  </div>
                  <div className="space-y-3">
                    {categoryTools.map((tool) => {
                      const active = tool.slug === currentSlug;

                      return (
                        <Link
                          key={tool.slug}
                          href={`/tools/${tool.slug}`}
                          className={`block rounded-2xl border px-4 py-3 text-left transition ${
                            active
                              ? "border-black bg-black text-white"
                              : "border-zinc-200 bg-white hover:border-zinc-400"
                          }`}
                        >
                          <div
                            className={`text-sm ${
                              active ? "text-zinc-300" : "text-zinc-500"
                            }`}
                          >
                            {tool.category}
                          </div>
                          <div className="font-semibold">{tool.name}</div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}

              {filteredTools.length === 0 && (
                <div className="rounded-2xl border border-dashed border-zinc-300 p-4 text-sm text-zinc-500">
                  No tools found.
                </div>
              )}
            </div>
          </aside>

          <main className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
            <div className="mb-6">
              <h2 className="text-3xl font-bold">{title}</h2>
              <p className="mt-2 text-zinc-600">{description}</p>
            </div>
            {children}
          </main>
        </div>
      </section>
    </div>
  );
}
