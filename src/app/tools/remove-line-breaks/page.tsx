"use client";
import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";

export default function RemoveLineBreaksPage() {
  const [text, setText] = useState("");

  const output = useMemo(() => {
    return text.replace(/\s*\n\s*/g, " ").replace(/\s{2,}/g, " ").trim();
  }, [text]);

  return (
    <ToolLayout
      currentSlug="remove-line-breaks"
      title="Remove Line Breaks"
      description="Turn multi-line text into a single clean line."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <div className="mb-2 text-sm font-medium">Input</div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste text with line breaks here..."
            className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4 outline-none focus:border-zinc-400"
          />
        </div>
        <div>
          <div className="mb-2 text-sm font-medium">Output</div>
          <textarea
            readOnly
            value={output}
            className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
          />
        </div>
      </div>
    
      <ToolSeoContent
        title="Remove Line Breaks"
        description="Turn multi-line text into a single clean line."
      />
      <RelatedTools currentSlug="remove-line-breaks" />

    </ToolLayout>
  );
}
