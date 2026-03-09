"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function RemovePunctuationPage() {
  useEffect(() => {
    addRecentTool("remove-punctuation");
  }, []);

  const [text, setText] = useState("");

  const output = useMemo(() => {
    return text.replace(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g, "");
  }, [text]);

  return (
    <ToolLayout
      currentSlug="remove-punctuation"
      title="Remove Punctuation"
      description="Remove punctuation from text instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
        <textarea readOnly value={output} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
      </div>
    
      <ToolSeoContent
        title="Remove Punctuation"
        description="Remove punctuation from text instantly."
      />
      <ToolFeaturedTools currentSlug="remove-punctuation" />
      <RelatedTools currentSlug="remove-punctuation" />

    </ToolLayout>
  );
}
