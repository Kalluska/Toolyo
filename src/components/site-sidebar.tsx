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
      className={
        active
          ? "block rounded-2xl border border-transparent bg-[var(--button-bg)] px-4 py-3 text-[var(--button-text)] shadow-md"
          : "block rounded-2xl border border-[var(--border-main)] bg-[var(--bg-elevated)] px-4 py-3 text-[var(--text-main)] shadow-sm transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-soft)]"
      }
    >
      <div className="flex items-start gap-3">
        <div className="pt-0.5 text-xl leading-none opacity-90">
          {getToolIcon(tool.category, tool.slug)}
        </div>

        <div className="min-w-0 flex-1">
          <div className="font-semibold">{tool.name}</div>
          <div
            className={`mt-1 text-sm leading-6 ${
              active ? "text-[var(--button-text)]/80" : "text-[var(--text-soft)]"
            }`}
          >
            {tool.description}
          </div>
        </div>
      </div>
    </Link>
  );
}

function PanelLink({
  href,
  title,
  description,
  onClick,
}: {
  href: string;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-2xl border border-[var(--border-main)] bg-[var(--bg-elevated)] px-4 py-4 shadow-sm transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-soft)]"
    >
      <div className="font-semibold text-[var(--text-main)]">{title}</div>
      <div className="mt-1 text-sm leading-6 text-[var(--text-soft)]">
        {description}
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
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px]"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[360px] border-r border-[var(--border-main)] bg-[var(--bg-main)] shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--border-main)] bg-[var(--bg-elevated)] px-5 py-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-faint)]">
              Menu
            </div>
            <div className="mt-1 text-2xl font-bold text-[var(--text-main)]">
              Toolyo
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-2xl border border-[var(--border-main)] bg-[var(--bg-elevated)] px-4 py-2 text-sm font-medium text-[var(--text-main)] shadow-sm transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-soft)]"
          >
            Close
          </button>
        </div>

        <div className="h-[calc(100%-85px)] overflow-y-auto px-4 py-4">
          <div className="mb-6">
            <PanelLink
              href="/"
              onClick={onClose}
              title="Home"
              description="Go back to the main Toolyo homepage."
            />
          </div>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tools..."
            className="mb-6 w-full rounded-2xl border border-[var(--border-main)] bg-[var(--bg-elevated)] px-4 py-3 text-[var(--text-main)] outline-none placeholder:text-[var(--text-faint)] focus:border-[var(--border-strong)]"
          />

          {isSearching && (
            <div className="mb-6">
              <div className="mb-3 flex items-center justify-between px-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)]">
                  Search results
                </div>
                <div className="text-xs text-[var(--text-faint)]">
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
                <div className="rounded-2xl border border-dashed border-[var(--border-main)] bg-[var(--bg-elevated)] p-4 text-sm text-[var(--text-soft)]">
                  No tools found.
                </div>
              )}
            </div>
          )}

          {!isSearching && recentTools.length > 0 && (
            <div className="mb-6">
              <div className="mb-3 px-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)]">
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
                  <div className="mb-3 px-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)]">
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
              className="block w-full rounded-2xl border border-[var(--border-main)] bg-[var(--bg-elevated)] px-4 py-3 text-left shadow-sm transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-soft)]"
            >
              <div className="font-semibold text-[var(--text-main)]">
                Request a tool
              </div>
              <div className="mt-1 text-sm leading-6 text-[var(--text-soft)]">
                Suggest a new tool idea for Toolyo.
              </div>
            </button>

            <button
              onClick={() => setFeedbackOpen(true)}
              className="block w-full rounded-2xl border border-[var(--border-main)] bg-[var(--bg-elevated)] px-4 py-3 text-left shadow-sm transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-soft)]"
            >
              <div className="font-semibold text-[var(--text-main)]">
                Send feedback
              </div>
              <div className="mt-1 text-sm leading-6 text-[var(--text-soft)]">
                Report issues or share improvement ideas.
              </div>
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--border-main)] bg-[var(--bg-elevated)] p-4 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-wide text-[var(--text-faint)]">
              About Toolyo
            </div>
            <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
              Toolyo is a growing collection of simple browser-based tools for text,
              SEO, and developer workflows.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}