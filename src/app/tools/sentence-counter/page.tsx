"use client";

import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";

export default function SentenceCounterPage() {
  const [text, setText] = useState("");

  const count = useMemo(() => {
    const matches = text.match(/[^.!?]+[.!?]+/g);
    if (matches) return matches.length;
    return text.trim() ? 1 : 0;
  }, [text]);

  return (
    <ToolLayout
      currentSlug="sentence-counter"
      title="Sentence Counter"
      description="Count sentences in text instantly."
    >
      <div className="space-y-4">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
        <div className="rounded-2xl border border-zinc-200 p-4">
          <div className="text-sm text-zinc-500">Sentences</div>
          <div className="mt-2 text-3xl font-bold">{count}</div>
        </div>
      </div>
    
      <ToolSeoContent
        title="Sentence Counter"
        description="Count sentences in text instantly."
      />
      <RelatedTools currentSlug="sentence-counter" />

    </ToolLayout>
  );
}
