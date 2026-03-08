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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    url: `https://toolyo-kappa.vercel.app/tools/${currentSlug}`,
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
            {Object.entries(groupedTools).map(([category, categoryTools]) => (
              <div key={category}>
                <div className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                  {category}
                </div>
                <div className="space-y-2">
                  {categoryTools.map((tool) => {
                    const active = tool.slug === currentSlug;

                    return (
                      <Link
                        key={tool.slug}
                        href={`/tools/${tool.slug}`}
                        onClick={() => setSidebarOpen(false)}
                        className={`block rounded-xl border px-4 py-3 transition ${
                          active
                            ? "border-black bg-black text-white"
                            : "border-zinc-200 hover:border-zinc-400"
                        }`}
                      >
                        <div
                          className={`font-semibold ${
                            active ? "text-white" : "text-zinc-900"
                          }`}
                        >
                          {tool.name}
                        </div>
                        <div
                          className={`mt-1 text-sm ${
                            active ? "text-zinc-300" : "text-zinc-500"
                          }`}
                        >
                          {tool.description}
                        </div>
                      </Link>
                    );
                  })}
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

            <Link href="/" className="block">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">MVP</div>
              <h1 className="text-2xl font-bold">Toolyo</h1>
            </Link>
          </div>

          <div className="rounded-full border border-zinc-200 px-4 py-2 text-sm">
            Text + Developer Tools
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <main className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
          <div className="mb-6">
            <div className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
              Tool
            </div>
            <h2 className="mt-2 text-3xl font-bold">{title}</h2>
            <p className="mt-2 text-zinc-600">{description}</p>
          </div>
          {children}
        </main>
      </section>
    </div>
  );
}
