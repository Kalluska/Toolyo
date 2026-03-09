"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function TextDeduplicatorPage() {
  useEffect(() => {
    addRecentTool("text-deduplicator");
  }, []);

  const [text, setText] = useState("");

  const output = useMemo(() => {
    return text;
  }, [text]);

  return (
    <ToolLayout
      currentSlug="text-deduplicator"
      title="Text Deduplicator"
      description="Remove duplicate text fragments instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <div className="mb-2 text-sm font-medium">Input</div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text here..."
            className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4 outline-none focus:border-zinc-400"
          />
        </div>
        <div>
          <div className="mb-2 text-sm font-medium">Output</div>
          <textarea
            readOnly
            value={output}
            className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
          />
        </div>
      </div>
    
      <ToolSeoContent
        title="Text Deduplicator"
        description="Remove duplicate text fragments instantly."
      />
      <ToolFeaturedTools currentSlug="text-deduplicator" />
      <RelatedTools currentSlug="text-deduplicator" />

    </ToolLayout>
  );
}
