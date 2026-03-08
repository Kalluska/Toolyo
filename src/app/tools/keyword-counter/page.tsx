"use client";

import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";

export default function KeywordCounterPage() {
  const [text, setText] = useState("");
  const [keyword, setKeyword] = useState("");

  const count = useMemo(() => {
    const q = keyword.trim();
    if (!q) return 0;
    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const matches = text.match(new RegExp(escaped, "gi"));
    return matches ? matches.length : 0;
  }, [text, keyword]);

  return (
    <ToolLayout
      currentSlug="keyword-counter"
      title="Keyword Counter"
      description="Count keyword occurrences in text instantly."
    >
      <div className="space-y-4">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter keyword..."
          className="w-full rounded-2xl border border-zinc-200 p-4"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
        />
        <div className="rounded-2xl border border-zinc-200 p-4">
          <div className="text-sm text-zinc-500">Occurrences</div>
          <div className="mt-2 text-3xl font-bold">{count}</div>
        </div>
      </div>
    </ToolLayout>
  );
}
