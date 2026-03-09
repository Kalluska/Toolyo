"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function QueryStringParserPage() {
  useEffect(() => {
    addRecentTool("query-string-parser");
  }, []);

  const [text, setText] = useState("?name=kalle&tool=word-counter&lang=en");

  const rows = useMemo(() => {
    const query = text.startsWith("?") ? text.slice(1) : text;
    const params = new URLSearchParams(query);
    return Array.from(params.entries());
  }, [text]);

  return (
    <ToolLayout
      currentSlug="query-string-parser"
      title="Query String Parser"
      description="Parse URL query strings instantly."
    >
      <div className="space-y-6">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm"
        />

        <div className="overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-100 text-left">
              <tr>
                <th className="px-4 py-3">Key</th>
                <th className="px-4 py-3">Value</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([key, value], index) => (
                <tr key={`${key}-${index}`}>
                  <td className="border-t px-4 py-3 font-mono">{key}</td>
                  <td className="border-t px-4 py-3 font-mono">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ToolSeoContent title="Query String Parser" description="Parse URL query strings instantly." />
      <ToolFeaturedTools currentSlug="query-string-parser" />
      <RelatedTools currentSlug="query-string-parser" />
    </ToolLayout>
  );
}
