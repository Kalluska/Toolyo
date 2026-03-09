"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function TextLengthCounterPage() {
  useEffect(() => {
    addRecentTool("text-length-counter");
  }, []);

  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const normalized = text.replace(/\r\n/g, "\n");
    return {
      characters: normalized.length,
      noSpaces: normalized.replace(/\s/g, "").length,
      words: normalized.trim() ? normalized.trim().split(/\s+/).length : 0,
      lines: normalized ? normalized.split("\n").length : 0,
    };
  }, [text]);

  return (
    <ToolLayout
      currentSlug="text-length-counter"
      title="Text Length Counter"
      description="Count text length instantly."
    >
      <div className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-sm text-zinc-500">Characters</div>
            <div className="mt-2 text-3xl font-bold">{stats.characters}</div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-sm text-zinc-500">No spaces</div>
            <div className="mt-2 text-3xl font-bold">{stats.noSpaces}</div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-sm text-zinc-500">Words</div>
            <div className="mt-2 text-3xl font-bold">{stats.words}</div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-sm text-zinc-500">Lines</div>
            <div className="mt-2 text-3xl font-bold">{stats.lines}</div>
          </div>
        </div>
      </div>
    
      <ToolSeoContent
        title="Text Length Counter"
        description="Count text length instantly."
      />
      <ToolFeaturedTools currentSlug="text-length-counter" />
      <RelatedTools currentSlug="text-length-counter" />

    </ToolLayout>
  );
}
