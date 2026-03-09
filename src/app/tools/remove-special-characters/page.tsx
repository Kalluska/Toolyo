"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function RemoveSpecialCharactersPage() {
  useEffect(() => {
    addRecentTool("remove-special-characters");
  }, []);

  const [text, setText] = useState("");

  const output = useMemo(() => text.replace(/[^a-zA-Z0-9\s]/g, ""), [text]);

  return (
    <ToolLayout
      currentSlug="remove-special-characters"
      title="Remove Special Characters"
      description="Remove special characters from text instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
        <textarea readOnly value={output} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
      </div>
    
      <ToolSeoContent
        title="Remove Special Characters"
        description="Remove special characters from text instantly."
      />
      <ToolFeaturedTools currentSlug="remove-special-characters" />
      <RelatedTools currentSlug="remove-special-characters" />

    </ToolLayout>
  );
}
