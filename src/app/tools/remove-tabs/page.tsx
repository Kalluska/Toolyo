"use client";

import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function RemoveTabsPage() {
  const [text, setText] = useState("");

  const output = useMemo(() => text.replace(/\t/g, ""), [text]);

  return (
    <ToolLayout
      currentSlug="remove-tabs"
      title="Remove Tabs"
      description="Remove tab characters from text instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
        <textarea readOnly value={output} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
      </div>
    
      <ToolSeoContent
        title="Remove Tabs"
        description="Remove tab characters from text instantly."
      />
      <ToolFeaturedTools currentSlug="remove-tabs" />
      <RelatedTools currentSlug="remove-tabs" />

    </ToolLayout>
  );
}
