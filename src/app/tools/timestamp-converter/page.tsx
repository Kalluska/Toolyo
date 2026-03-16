"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";
import ToolInputCard from "@/components/tool-input-card";
import ToolFaqSchema from "@/components/tool-faq-schema";
import ToolUseCases from "@/components/tool-use-cases";

export default function TimestampConverterPage() {
  const title = "Timestamp Converter";
  const description = "Convert Unix timestamps instantly.";
  const [value, setValue] = useState(String(Math.floor(Date.now() / 1000)));

  useEffect(() => {
    addRecentTool("timestamp-converter");
  }, []);

  const result = useMemo(() => {
    const trimmed = value.trim();
    if (!trimmed) return { ok: false, text: "Enter a Unix timestamp." };

    const num = Number(trimmed);
    if (Number.isNaN(num)) return { ok: false, text: "Invalid number." };

    const ms = trimmed.length <= 10 ? num * 1000 : num;
    const date = new Date(ms);
    if (Number.isNaN(date.getTime())) return { ok: false, text: "Invalid timestamp." };

    return {
      ok: true,
      iso: date.toISOString(),
      utc: date.toUTCString(),
      local: date.toString(),
    };
  }, [value]);

  return (
    <ToolLayout currentSlug="timestamp-converter" title={title} description={description}>
      <div className="space-y-6">
        <ToolInputCard label="Unix timestamp">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter Unix timestamp..."
            className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 p-4 text-zinc-950 outline-none placeholder:text-zinc-500 focus:border-zinc-500"
          />
        </ToolInputCard>

        {result.ok ? (
          <div className="space-y-4">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <div className="text-sm text-zinc-500">ISO</div>
              <div className="mt-2 font-mono text-sm">{result.iso}</div>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <div className="text-sm text-zinc-500">UTC</div>
              <div className="mt-2 font-mono text-sm">{result.utc}</div>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <div className="text-sm text-zinc-500">Local time</div>
              <div className="mt-2 font-mono text-sm">{result.local}</div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-red-300 bg-red-50 p-4 text-red-700">
            {result.text}
          </div>
        )}
      </div>

            <ToolFaqSchema slug="timestamp-converter" />
<ToolSeoContent title={title} description={description} slug="timestamp-converter" />
      <ToolFeaturedTools currentSlug="timestamp-converter" />
      <RelatedTools currentSlug="timestamp-converter" />
    </ToolLayout>
  );
}
