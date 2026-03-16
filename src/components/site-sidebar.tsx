"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Tool, tools } from "@/data/tools";
import ContactModal from "@/components/contact-modal";
import { getRecentTools } from "@/lib/recentTools";
import { getToolIcon } from "@/lib/tool-icons";

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

function ToolCard({
  tool,
  active,
  onClick,
}: {
  tool: Tool;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      onClick={onClick}
      className={`block rounded-2xl border px-4 py-3 transition ${
        active
          ? "border-black bg-black text-white shadow-md"
          : "border-zinc-300 bg-white hover:border-zinc-500 hover:bg-zinc-50"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="pt-0.5 text-xl leading-none">
          {getToolIcon(tool.category, tool.slug)}
        </div>

        <div className="min-w-0 flex-1">
          <div className={`font-semibold ${active ? "text-white" : "text-zinc-950"}`}>
            {tool.name}
          </div>
          <div
            className={`mt-1 text-sm ${
              active ? "text-zinc-200" : "text-zinc-700"
            }`}
          >
            {tool.description}
          </div>
        </div>
      </div>
    </Link>
  );
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
        <div className="fixed inset-0 z-40 bg-black/55" onClick={onClose} />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[360px] transform border-r border-zinc-300 bg-zinc-100 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-300 bg-white px-5 py-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-600">Menu</div>
            <div className="text-2xl font-bold text-zinc-950">Toolyo</div>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm hover:border-zinc-500"
          >
            Close
          </button>
        </div>

        <div className="h-[calc(100%-81px)] overflow-y-auto p-4">
          <div className="mb-6 space-y-2">
            <Link
              href="/"
              onClick={onClose}
              className="block rounded-2xl border border-zinc-300 bg-white px-4 py-4 transition hover:border-zinc-500"
            >
              <div className="font-semibold text-zinc-950">Home</div>
              <div className="mt-1 text-sm text-zinc-700">
                Go back to the main Toolyo homepage.
              </div>
            </Link>
          </div>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tools..."
            className="mb-6 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none placeholder:text-zinc-500 focus:border-zinc-500"
          />

          {isSearching && (
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between px-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
                  Search results
                </div>
                <div className="text-xs text-zinc-600">
                  {filteredTools.length} result{filteredTools.length === 1 ? "" : "s"}
                </div>
              </div>

              {filteredTools.length > 0 ? (
                <div className="space-y-2">
                  {filteredTools.map((tool) => (
                    <ToolCard
                      key={tool.slug}
                      tool={tool}
                      active={tool.slug === currentSlug}
                      onClick={onClose}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-zinc-400 bg-white p-4 text-sm text-zinc-700">
                  No tools found.
                </div>
              )}
            </div>
          )}

          {!isSearching && recentTools.length > 0 && (
            <div className="mb-6">
              <div className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                Recently used
              </div>
              <div className="space-y-2">
                {recentTools.map((tool) => (
                  <ToolCard
                    key={tool.slug}
                    tool={tool}
                    active={tool.slug === currentSlug}
                    onClick={onClose}
                  />
                ))}
              </div>
            </div>
          )}

          {!isSearching && (
            <div className="space-y-6">
              {Object.entries(groupedTools).map(([category, categoryTools]) => (
                <div key={category}>
                  <div className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                    {category}
                  </div>
                  <div className="space-y-2">
                    {categoryTools.map((tool) => (
                      <ToolCard
                        key={tool.slug}
                        tool={tool}
                        active={tool.slug === currentSlug}
                        onClick={onClose}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 space-y-3">
            <button
              onClick={() => setContactOpen(true)}
              className="block w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-left transition hover:border-zinc-500"
            >
              <div className="font-semibold text-zinc-950">Request a tool</div>
              <div className="mt-1 text-sm text-zinc-700">
                Suggest a new tool idea for Toolyo.
              </div>
            </button>

            <button
              onClick={() => setFeedbackOpen(true)}
              className="block w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-left transition hover:border-zinc-500"
            >
              <div className="font-semibold text-zinc-950">Send feedback</div>
              <div className="mt-1 text-sm text-zinc-700">
                Report issues or share improvement ideas.
              </div>
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-zinc-300 bg-white p-4">
            <div className="text-sm font-semibold uppercase tracking-wide text-zinc-600">
              About Toolyo
            </div>
            <p className="mt-2 text-sm text-zinc-700">
              Toolyo is a growing collection of simple browser-based tools for text,
              SEO, and developer workflows.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
