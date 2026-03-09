"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { tools } from "@/data/tools";

export default function HeroSearch() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return [];

    return tools
      .filter((tool) => {
        return (
          tool.name.toLowerCase().includes(query) ||
          tool.slug.toLowerCase().includes(query) ||
          tool.category.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query)
        );
      })
      .slice(0, 8);
  }, [search]);

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
