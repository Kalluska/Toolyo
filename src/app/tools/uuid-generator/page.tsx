"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

function makeUuid() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

export default function UuidGeneratorPage() {
  useEffect(() => {
    addRecentTool("uuid-generator");
  }, []);

  const [count, setCount] = useState(5);
  const [refresh, setRefresh] = useState(0);

  const uuids = useMemo(() => {
    const safeCount = Math.max(1, Math.min(100, count));
    return Array.from({ length: safeCount }, () => makeUuid()).join("\n");
  }, [count, refresh]);

  return (
    <ToolLayout
      currentSlug="uuid-generator"
      title="UUID Generator"
      description="Generate UUID values instantly."
    >
      <div className="space-y-6">
        <div className="rounded-2xl border border-zinc-200 p-4">
          <label className="mb-2 block text-sm font-medium">How many UUIDs?</label>
          <input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full rounded-xl border border-zinc-200 px-3 py-2"
          />
        </div>

        <textarea
          readOnly
          value={uuids}
          className="min-h-[260px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm"
        />

        <button
          onClick={() => setRefresh((v) => v + 1)}
          className="rounded-xl bg-black px-4 py-2 text-white"
        >
          Generate new UUIDs
        </button>
      </div>

      <ToolSeoContent title="UUID Generator" description="Generate UUID values instantly." />
      <ToolFeaturedTools currentSlug="uuid-generator" />
      <RelatedTools currentSlug="uuid-generator" />
    </ToolLayout>
  );
}
