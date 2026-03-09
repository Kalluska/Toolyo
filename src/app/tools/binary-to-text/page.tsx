"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function BinaryToTextPage() {
  useEffect(() => {
    addRecentTool("binary-to-text");
  }, []);

  const [text, setText] = useState("01001000 01101001");

  const output = useMemo(() => {
    try {
      return text
        .trim()
        .split(/\s+/)
        .map((bin) => String.fromCharCode(parseInt(bin, 2)))
        .join("");
    } catch {
      return "Invalid binary";
    }
  }, [text]);

  return (
    <ToolLayout
      currentSlug="binary-to-text"
      title="Binary to Text"
      description="Convert binary to readable text instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[220px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
        <textarea readOnly value={output} className="min-h-[220px] w-full rounded-2xl border border-zinc-200 p-4" />
      </div>

      <ToolSeoContent title="Binary to Text" description="Convert binary to readable text instantly." />
      <ToolFeaturedTools currentSlug="binary-to-text" />
      <RelatedTools currentSlug="binary-to-text" />
    </ToolLayout>
  );
}
