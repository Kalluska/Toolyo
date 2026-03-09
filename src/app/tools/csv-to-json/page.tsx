"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function CsvToJsonPage() {
  useEffect(() => {
    addRecentTool("csv-to-json");
  }, []);

  const [text, setText] = useState("name,age\nAlice,25\nBob,30");

  const output = useMemo(() => {
    try {
      const lines = text.trim().split(/\r?\n/);
      if (lines.length < 2) return "[]";

      const headers = lines[0].split(",").map((h) => h.trim());
      const rows = lines.slice(1).map((line) => {
        const values = line.split(",").map((v) => v.trim());
        const obj: Record<string, string> = {};
        headers.forEach((header, index) => {
          obj[header] = values[index] ?? "";
        });
        return obj;
      });

      return JSON.stringify(rows, null, 2);
    } catch {
      return "Invalid CSV";
    }
  }, [text]);

  return (
    <ToolLayout
      currentSlug="csv-to-json"
      title="CSV to JSON"
      description="Convert CSV data to JSON instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[260px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
        <textarea readOnly value={output} className="min-h-[260px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
      </div>

      <ToolSeoContent title="CSV to JSON" description="Convert CSV data to JSON instantly." />
      <ToolFeaturedTools currentSlug="csv-to-json" />
      <RelatedTools currentSlug="csv-to-json" />
    </ToolLayout>
  );
}
