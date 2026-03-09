"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function ReadingTimeCalculatorPage() {
  useEffect(() => {
    addRecentTool("reading-time-calculator");
  }, []);

  const [text, setText] = useState("");

  const { words, minutes } = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const minutes = words === 0 ? 0 : Math.ceil(words / 200);
    return { words, minutes };
  }, [text]);

  return (
    <ToolLayout
      currentSlug="reading-time-calculator"
      title="Reading Time Calculator"
      description="Estimate reading time from text instantly."
    >
      <div className="space-y-4">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-sm text-zinc-500">Words</div>
            <div className="mt-2 text-3xl font-bold">{words}</div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-sm text-zinc-500">Reading time</div>
            <div className="mt-2 text-3xl font-bold">{minutes} min</div>
          </div>
        </div>
      </div>
    
      <ToolSeoContent
        title="Reading Time Calculator"
        description="Estimate reading time from text instantly."
      />
      <ToolFeaturedTools currentSlug="reading-time-calculator" />
      <RelatedTools currentSlug="reading-time-calculator" />

    </ToolLayout>
  );
}
