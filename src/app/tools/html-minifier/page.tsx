"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function HtmlMinifierPage() {
  useEffect(() => {
    addRecentTool("html-minifier");
  }, []);

  const [text, setText] = useState("");

  const output = useMemo(() => {
    return text
      .replace(/>\s+</g, "><")
      .replace(/\s{2,}/g, " ")
      .replace(/\n/g, "")
      .trim();
  }, [text]);

  return (
    <ToolLayout
      currentSlug="html-minifier"
      title="HTML Minifier"
      description="Minify HTML code instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[260px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
        <textarea readOnly value={output} className="min-h-[260px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
      </div>

      <ToolSeoContent title="HTML Minifier" description="Minify HTML code instantly." />
      <ToolFeaturedTools currentSlug="html-minifier" />
      <RelatedTools currentSlug="html-minifier" />
    </ToolLayout>
  );
}
