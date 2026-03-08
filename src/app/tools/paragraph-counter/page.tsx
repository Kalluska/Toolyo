"use client";

import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";

export default function ParagraphCounterPage() {
  const [text, setText] = useState("");

  const count = useMemo(() => {
    return text.trim() ? text.split(/\n\s*\n/).filter(Boolean).length : 0;
  }, [text]);

  return (
    <ToolLayout
      currentSlug="paragraph-counter"
      title="Paragraph Counter"
      description="Count paragraphs in text instantly."
    >
      <div className="space-y-4">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
        <div className="rounded-2xl border border-zinc-200 p-4">
          <div className="text-sm text-zinc-500">Paragraphs</div>
          <div className="mt-2 text-3xl font-bold">{count}</div>
        </div>
      </div>
    </ToolLayout>
  );
}
