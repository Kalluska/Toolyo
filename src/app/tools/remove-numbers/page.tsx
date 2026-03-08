"use client";

import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";

export default function RemoveNumbersPage() {
  const [text, setText] = useState("");

  const output = useMemo(() => text.replace(/\d+/g, ""), [text]);

  return (
    <ToolLayout
      currentSlug="remove-numbers"
      title="Remove Numbers"
      description="Remove numbers from text instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
        <textarea readOnly value={output} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
      </div>
    
      <ToolSeoContent
        title="Remove Numbers"
        description="Remove numbers from text instantly."
      />
      <RelatedTools currentSlug="remove-numbers" />

    </ToolLayout>
  );
}
