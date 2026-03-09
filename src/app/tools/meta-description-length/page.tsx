"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function MetaDescriptionLengthPage() {
  useEffect(() => {
    addRecentTool("meta-description-length");
  }, []);

  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const length = text.length;
    let status = "Good";
    if (length === 0) status = "Empty";
    else if (length < 120) status = "Too short";
    else if (length > 160) status = "Too long";
    return { length, status };
  }, [text]);

  return (
    <ToolLayout
      currentSlug="meta-description-length"
      title="Meta Description Length Checker"
      description="Check meta description length instantly."
    >
      <div className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[180px] w-full rounded-2xl border border-zinc-200 p-4"
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-sm text-zinc-500">Characters</div>
            <div className="mt-2 text-3xl font-bold">{stats.length}</div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-sm text-zinc-500">Status</div>
            <div className="mt-2 text-3xl font-bold">{stats.status}</div>
          </div>
        </div>
      </div>
    
      <ToolSeoContent
        title="Meta Description Length Checker"
        description="Check meta description length instantly."
      />
      <ToolFeaturedTools currentSlug="meta-description-length" />
      <RelatedTools currentSlug="meta-description-length" />

    </ToolLayout>
  );
}
