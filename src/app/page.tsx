"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
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

const featuredSlugs = [
  "word-counter",
  "character-counter",
  "json-formatter",
];

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const groupedTools = useMemo(() => {
    return tools.reduce<Record<string, typeof tools>>((acc, tool) => {
      if (!acc[tool.category]) acc[tool.category] = [];
      acc[tool.category].push(tool);
      return acc;
    }, {});
  }, []);

  const featuredTools = tools.filter((tool) => featuredSlugs.includes(tool.slug));

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

  const groupedSidebarTools = useMemo(() => {
    return filteredTools.reduce<Record<string, typeof tools>>((acc, tool) => {
      if (!acc[tool.category]) acc[tool.category] = [];
      acc[tool.category].push(tool);
      return acc;
    }, {});
  }, [filteredTools]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[320px] transform border-r border-zinc-200 bg-white shadow-xl transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Menu</div>
            <div className="text-xl font-bold">All Tools</div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg border border-zinc-200 px-3 py-2 text-sm hover:border-zinc-400"
          >
            Close
          </button>
        </div>

        <div className="h-[calc(100%-73px)] overflow-y-auto p-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tools..."
            className="mb-5 w-full rounded-xl border border-zinc-200 px-3 py-2 outline-none focus:border-zinc-400"
          />

          <div className="space-y-6">
            {Object.entries(groupedSidebarTools).map(([category, categoryTools]) => (
              <div key={category}>
                <div className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                  {category}
                </div>
                <div className="space-y-2">
                  {categoryTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      onClick={() => setSidebarOpen(false)}
                      className="block rounded-xl border border-zinc-200 px-4 py-3 transition hover:border-zinc-400"
                    >
                      <div className="font-semibold">{tool.name}</div>
                      <div className="mt-1 text-sm text-zinc-500">{tool.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {filteredTools.length === 0 && (
              <div className="rounded-xl border border-dashed border-zinc-300 p-4 text-sm text-zinc-500">
                No tools found.
              </div>
            )}
          </div>
        </div>
      </aside>

      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl border border-zinc-200 p-3 transition hover:border-zinc-400"
              aria-label="Open tools menu"
            >
              <div className="flex w-5 flex-col gap-1">
                <span className="h-0.5 w-full bg-zinc-900" />
                <span className="h-0.5 w-full bg-zinc-900" />
                <span className="h-0.5 w-full bg-zinc-900" />
              </div>
            </button>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">MVP</div>
              <h1 className="text-2xl font-bold">Toolyo</h1>
            </div>
          </div>

          <div className="rounded-full border border-zinc-200 px-4 py-2 text-sm">
            Text + Developer Tools
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
              Free Online Utility Platform
            </div>
            <h2 className="mt-3 text-5xl font-bold leading-tight">
              Simple tools people actually search for
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Toolyo is a growing collection of text, SEO, and developer utilities built
              for speed, simplicity, and real search demand. Each tool solves one specific
              task quickly in the browser without unnecessary complexity.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Browse all tools
              </button>
              <Link
                href="/tools/word-counter"
                className="rounded-2xl border border-zinc-200 px-5 py-3 text-sm font-semibold transition hover:border-zinc-400"
              >
                Try Word Counter
              </Link>
            </div>
          </div>

          <section className="mt-10">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-400">
              Most used tools
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {featuredTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition hover:border-zinc-400"
                >
                  <div className="text-sm text-zinc-500">{tool.category}</div>
                  <div className="mt-1 text-2xl font-bold">{tool.name}</div>
                  <p className="mt-2 text-sm text-zinc-600">{tool.description}</p>
                </Link>
              ))}
            </div>
          </section>

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
