"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { tools } from "@/data/tools";
import { useRouter } from "next/navigation";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      setQuery("");
      setActiveIndex(0);
    }
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    const ranked =
      q === ""
        ? tools.slice(0, 20)
        : tools
            .map((t) => {
              const haystack = `${t.name} ${t.slug} ${t.description || ""}`.toLowerCase();
              const name = t.name.toLowerCase();
              const slug = t.slug.toLowerCase();

              let score = 0;
              if (name === q) score = 100;
              else if (slug === q) score = 95;
              else if (name.startsWith(q)) score = 90;
              else if (slug.startsWith(q)) score = 85;
              else if (name.includes(q)) score = 70;
              else if (slug.includes(q)) score = 60;
              else if (haystack.includes(q)) score = 30;

              return { tool: t, score };
            })
            .filter((x) => x.score > 0)
            .sort((a, b) => {
              if (b.score !== a.score) return b.score - a.score;
              return a.tool.name.localeCompare(b.tool.name);
            })
            .map((x) => x.tool)
            .slice(0, 20);

    return ranked;
  }, [query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const openTool = (slug: string) => {
    router.push(`/tools/${slug}`);
    setOpen(false);
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!filtered.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filtered.length);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const selected = filtered[activeIndex];
      if (selected) openTool(selected.slug);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/65 pt-28"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-[640px] overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onInputKeyDown}
          placeholder="Search tools..."
          className="w-full border-b border-zinc-300 px-5 py-4 text-lg font-medium text-zinc-950 outline-none placeholder:text-zinc-700"
        />

        <div className="max-h-[420px] overflow-y-auto">
          {filtered.map((tool, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={tool.slug}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => openTool(tool.slug)}
                className={`flex w-full flex-col items-start px-5 py-3 text-left transition ${
                  active
                    ? "bg-zinc-900 text-white"
                    : "bg-white hover:bg-zinc-100 text-zinc-900"
                }`}
              >
                <span className={`font-semibold ${active ? "text-white" : "text-zinc-950"}`}>
                  {tool.name}
                </span>
                <span className={`text-sm ${active ? "text-zinc-200" : "text-zinc-700"}`}>
                  {tool.description}
                </span>
              </button>
            );
          })}

          {filtered.length === 0 && (
            <div className="px-5 py-6 text-sm text-zinc-700">
              No tools found
            </div>
          )}
        </div>

        <div className="border-t border-zinc-300 bg-zinc-100 px-5 py-3 text-xs text-zinc-700">
          ↑↓ navigate · Enter open · Esc close
        </div>
      </div>
    </div>
  );
}
