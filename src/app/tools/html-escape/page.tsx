"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function HtmlEscapePage() {
  const title = "HTML Escape";
  const description = "Escape HTML characters instantly.";
  const [input, setInput] = useState("");

  useEffect(() => {
    addRecentTool("html-escape");
  }, []);

  const output = useMemo(() => {
    return input
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }, [input]);

  return (
    <ToolLayout currentSlug="html-escape" title={title} description={description}>
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea value={input} onChange={(e) => setInput(e.target.value)} className="min-h-[240px] rounded-2xl border border-zinc-200 p-4" />
        <textarea readOnly value={output} className="min-h-[240px] rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
      </div>
      <ToolSeoContent title={title} description={description} slug="html-escape" />
      <ToolFeaturedTools currentSlug="html-escape" />
      <RelatedTools currentSlug="html-escape" />
    </ToolLayout>
  );
}
