"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Tool, tools } from "@/data/tools";

type SiteSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  search: string;
  setSearch: (value: string) => void;
  currentSlug?: string;
};

const featuredSlugs = ["word-counter", "character-counter", "json-formatter"];

export default function SiteSidebar({
  isOpen,
  onClose,
  search,
  setSearch,
  currentSlug,
}: SiteSidebarProps) {
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

  const featuredTools = tools.filter((tool) => featuredSlugs.includes(tool.slug));

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose} />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[320px] transform border-r border-zinc-200 bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Menu</div>
            <div className="text-xl font-bold">Toolyo</div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg border border-zinc-200 px-3 py-2 text-sm hover:border-zinc-400"
          >
            Close
          </button>
        </div>

        <div className="h-[calc(100%-73px)] overflow-y-auto p-4">
          <div className="mb-6 space-y-2">
            <Link
              href="/"
              onClick={onClose}
              className="block rounded-xl border border-zinc-200 px-4 py-3 transition hover:border-zinc-400"
            >
              <div className="font-semibold">Home</div>
              <div className="mt-1 text-sm text-zinc-500">
                Go back to the main Toolyo homepage.
              </div>
            </Link>
          </div>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tools..."
            className="mb-6 w-full rounded-xl border border-zinc-200 px-3 py-2 outline-none focus:border-zinc-400"
          />

          <div className="mb-6">
            <div className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Most used tools
            </div>
            <div className="space-y-2">
              {featuredTools.map((tool) => {
                const active = tool.slug === currentSlug;

                return (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    onClick={onClose}
                    className={`block rounded-xl border px-4 py-3 transition ${
                      active
                        ? "border-black bg-black text-white"
                        : "border-zinc-200 hover:border-zinc-400"
                    }`}
                  >
                    <div className={`font-semibold ${active ? "text-white" : "text-zinc-900"}`}>
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
                        onClick={onClose}
                        className={`block rounded-xl border px-4 py-3 transition ${
                          active
                            ? "border-black bg-black text-white"
                            : "border-zinc-200 hover:border-zinc-400"
                        }`}
                      >
                        <div className={`font-semibold ${active ? "text-white" : "text-zinc-900"}`}>
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

          <div className="mt-8 space-y-3">
            <a
              href="mailto:kalle.etelaaho15@gmail.com?subject=Toolyo%20Tool%20Request&body=Hi,%20I%20would%20like%20to%20request%20this%20tool:%20"
              className="block rounded-xl border border-zinc-200 px-4 py-3 transition hover:border-zinc-400"
            >
              <div className="font-semibold">Request a tool</div>
              <div className="mt-1 text-sm text-zinc-500">
                Suggest a new tool idea for Toolyo.
              </div>
            </a>

            <a
              href="mailto:kalle.etelaaho15@gmail.com?subject=Toolyo%20Feedback&body=Hi,%20here%20is%20my%20feedback:%20"
              className="block rounded-xl border border-zinc-200 px-4 py-3 transition hover:border-zinc-400"
            >
              <div className="font-semibold">Send feedback</div>
              <div className="mt-1 text-sm text-zinc-500">
                Report issues or share improvement ideas.
              </div>
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <div className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
              About Toolyo
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Toolyo is a growing collection of simple browser-based tools for text,
              SEO, and developer workflows.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
