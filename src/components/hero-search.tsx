"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { tools } from "@/data/tools";

type RankedTool = (typeof tools)[number] & { score: number };

function rankTools(query: string): RankedTool[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

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

      return { ...tool, score };
    })
    .filter((tool) => tool.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.name.localeCompare(b.name);
    })
    .slice(0, 8);
}

export default function HeroSearch() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => rankTools(search), [search]);

  const openTool = (slug: string) => {
    setFocused(false);
    setSearch("");
    router.push(`/tools/${slug}`);
  };

  return (
    <div className="relative w-full">
      <div className="flex w-full items-center rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-zinc-400">
        <svg
          className="mr-3 h-5 w-5 shrink-0 text-zinc-400"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Search tools..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
        />
      </div>

      {focused && search.trim() && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl">
          {results.length > 0 ? (
            <div className="max-h-[360px] overflow-y-auto p-2">
              {results.map((tool) => (
                <button
                  key={tool.slug}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => openTool(tool.slug)}
                  className="block w-full rounded-xl px-4 py-3 text-left transition hover:bg-zinc-50"
                >
                  <div className="text-xs uppercase tracking-wide text-zinc-400">
                    {tool.category}
                  </div>
                  <div className="mt-1 font-semibold text-zinc-900">{tool.name}</div>
                  <div className="mt-1 text-sm text-zinc-500">{tool.description}</div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 text-sm text-zinc-500">No tools found.</div>
          )}
        </div>
      )}
    </div>
  );
}
