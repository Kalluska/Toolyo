"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function RemoveHtmlTagsPage() {
  useEffect(() => {
    addRecentTool("remove-html-tags");
  }, []);

  const [text, setText] = useState("<h1>Hello</h1><p>World</p>");

  const output = useMemo(() => {
    return text.replace(/<[^>]*>/g, "");
  }, [text]);

  return (
    <ToolLayout
      currentSlug="remove-html-tags"
      title="Remove HTML Tags"
      description="Remove HTML tags from text instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[220px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
        <textarea readOnly value={output} className="min-h-[220px] w-full rounded-2xl border border-zinc-200 p-4" />
      </div>

      <ToolSeoContent title="Remove HTML Tags" description="Remove HTML tags from text instantly." />
      <ToolFeaturedTools currentSlug="remove-html-tags" />
      <RelatedTools currentSlug="remove-html-tags" />
    </ToolLayout>
  );
}
