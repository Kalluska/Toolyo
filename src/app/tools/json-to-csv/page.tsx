"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function JsonToCsvPage() {
  useEffect(() => {
    addRecentTool("json-to-csv");
  }, []);

  const [text, setText] = useState('[{"name":"Alice","age":25},{"name":"Bob","age":30}]');

  const output = useMemo(() => {
    try {
      const data = JSON.parse(text);
      const rows = Array.isArray(data) ? data : [data];
      if (!rows.length || typeof rows[0] !== "object") return "";

      const headers = Array.from(
        new Set(rows.flatMap((row) => Object.keys(row)))
      );

      const escapeCell = (value: unknown) =>
        `"${String(value ?? "").replace(/"/g, '""')}"`;

      const csvRows = [
        headers.join(","),
        ...rows.map((row) =>
          headers.map((h) => escapeCell((row as Record<string, unknown>)[h])).join(",")
        ),
      ];

      return csvRows.join("\n");
    } catch {
      return "Invalid JSON";
    }
  }, [text]);

  return (
    <ToolLayout
      currentSlug="json-to-csv"
      title="JSON to CSV"
      description="Convert JSON data to CSV instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[260px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
        <textarea readOnly value={output} className="min-h-[260px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
      </div>

      <ToolSeoContent title="JSON to CSV" description="Convert JSON data to CSV instantly." />
      <ToolFeaturedTools currentSlug="json-to-csv" />
      <RelatedTools currentSlug="json-to-csv" />
    </ToolLayout>
  );
}
