"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function RandomNumberGeneratorPage() {
  useEffect(() => {
    addRecentTool("random-number-generator");
  }, []);

  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [refresh, setRefresh] = useState(0);

  const output = useMemo(() => {
    const low = Math.min(min, max);
    const high = Math.max(min, max);
    const safeCount = Math.max(1, Math.min(100, count));

    return Array.from({ length: safeCount }, () => {
      return Math.floor(Math.random() * (high - low + 1)) + low;
    }).join("\n");
  }, [min, max, count, refresh]);

  return (
    <ToolLayout
      currentSlug="random-number-generator"
      title="Random Number Generator"
      description="Generate random numbers instantly."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 p-4">
          <label className="mb-2 block text-sm font-medium">Min</label>
          <input type="number" value={min} onChange={(e) => setMin(Number(e.target.value))} className="w-full rounded-xl border border-zinc-200 px-3 py-2" />
        </div>
        <div className="rounded-2xl border border-zinc-200 p-4">
          <label className="mb-2 block text-sm font-medium">Max</label>
          <input type="number" value={max} onChange={(e) => setMax(Number(e.target.value))} className="w-full rounded-xl border border-zinc-200 px-3 py-2" />
        </div>
        <div className="rounded-2xl border border-zinc-200 p-4">
          <label className="mb-2 block text-sm font-medium">Count</label>
          <input type="number" min="1" max="100" value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-full rounded-xl border border-zinc-200 px-3 py-2" />
        </div>
      </div>

      <textarea readOnly value={output} className="mt-6 min-h-[220px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />

      <button onClick={() => setRefresh((v) => v + 1)} className="mt-4 rounded-xl bg-black px-4 py-2 text-white">
        Generate again
      </button>

      <ToolSeoContent title="Random Number Generator" description="Generate random numbers instantly." />
      <ToolFeaturedTools currentSlug="random-number-generator" />
      <RelatedTools currentSlug="random-number-generator" />
    </ToolLayout>
  );
}
