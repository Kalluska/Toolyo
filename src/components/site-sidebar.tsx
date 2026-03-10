"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Tool, tools } from "@/data/tools";
import ContactModal from "@/components/contact-modal";
import { getRecentTools } from "@/lib/recentTools";

type SiteSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  search: string;
  setSearch: (value: string) => void;
  currentSlug?: string;
};

function rankTools(query: string): Tool[] {
  const q = query.trim().toLowerCase();
  if (!q) return tools;

  return tools
    .map((tool) => {
      const name = tool.name.toLowerCase();
      const slug = tool.slug.toLowerCase();
      const description = tool.description.toLowerCase();
      const category = tool.category.toLowerCase();

      let score = 0;

      if (name === q) score = 100;
      else if (slug === q) score = 95;
      else if (name.startsWith(q)) score = 90;
      else if (slug.startsWith(q)) score = 85;
      else if (name.includes(q)) score = 70;
      else if (slug.includes(q)) score = 60;
      else if (category.includes(q)) score = 40;
      else if (description.includes(q)) score = 30;

      return { tool, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.tool.name.localeCompare(b.tool.name);
    })
    .map((item) => item.tool);
}

export default function SiteSidebar({
  isOpen,
  onClose,
  search,
  setSearch,
  currentSlug,
}: SiteSidebarProps) {
  const [contactOpen, setContactOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [recentSlugs, setRecentSlugs] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      setRecentSlugs(getRecentTools());
    }
  }, [isOpen, currentSlug]);

  const recentTools = useMemo(() => {
    return recentSlugs
      .map((slug) => tools.find((tool) => tool.slug === slug))
      .filter(Boolean) as Tool[];
  }, [recentSlugs]);

  const query = search.trim().toLowerCase();
  const isSearching = query.length > 0;

  const filteredTools = useMemo(() => rankTools(query), [query]);

  const groupedTools = useMemo(() => {
    return tools.reduce<Record<string, Tool[]>>((acc, tool) => {
      if (!acc[tool.category]) acc[tool.category] = [];
      acc[tool.category].push(tool);
      return acc;
    }, {});
  }, []);

  return (
    <>
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        title="Contact Toolyo"
        subject="Toolyo Contact"
      />

      <ContactModal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
        title="Send feedback"
        subject="Toolyo Feedback"
      />

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

          {isSearching && (
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between px-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                  Search results
                </div>
                <div className="text-xs text-zinc-400">
                  {filteredTools.length} result{filteredTools.length === 1 ? "" : "s"}
                </div>
              </div>

              {filteredTools.length > 0 ? (
                <div className="space-y-2">
                  {filteredTools.map((tool) => {
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
              ) : (
                <div className="rounded-xl border border-dashed border-zinc-300 p-4 text-sm text-zinc-500">
                  No tools found.
                </div>
              )}
            </div>
          )}

          {!isSearching && recentTools.length > 0 && (
            <div className="mb-6">
              <div className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                Recently used
              </div>
              <div className="space-y-2">
                {recentTools.map((tool) => {
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
          )}

          {!isSearching && (
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
            </div>
          )}

          <div className="mt-8 space-y-3">
            <button
              onClick={() => setContactOpen(true)}
              className="block w-full rounded-xl border border-zinc-200 px-4 py-3 text-left transition hover:border-zinc-400"
            >
              <div className="font-semibold">Request a tool</div>
              <div className="mt-1 text-sm text-zinc-500">
                Suggest a new tool idea for Toolyo.
              </div>
            </button>

            <button
              onClick={() => setFeedbackOpen(true)}
              className="block w-full rounded-xl border border-zinc-200 px-4 py-3 text-left transition hover:border-zinc-400"
            >
              <div className="font-semibold">Send feedback</div>
              <div className="mt-1 text-sm text-zinc-500">
                Report issues or share improvement ideas.
              </div>
            </button>
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
