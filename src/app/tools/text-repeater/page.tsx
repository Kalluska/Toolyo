"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function TextRepeaterPage() {
  useEffect(() => {
    addRecentTool("text-repeater");
  }, []);

  const [text, setText] = useState("");
  const [count, setCount] = useState(3);

  const output = useMemo(() => {
    const safeCount = Math.max(1, Math.min(100, count || 1));
    return Array.from({ length: safeCount }, () => text).join("\n");
  }, [text, count]);

  return (
    <ToolLayout
      currentSlug="text-repeater"
      title="Text Repeater"
      description="Repeat text multiple times instantly."
    >
      <div className="space-y-4">
        <input
          type="number"
          min="1"
          max="100"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-32 rounded-xl border border-zinc-200 px-3 py-2"
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
          <textarea readOnly value={output} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
        </div>
      </div>
    
      <ToolSeoContent
        title="Text Repeater"
        description="Repeat text multiple times instantly."
      />
      <ToolFeaturedTools currentSlug="text-repeater" />
      <RelatedTools currentSlug="text-repeater" />

    </ToolLayout>
  );
}
