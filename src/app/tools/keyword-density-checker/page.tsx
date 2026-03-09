"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function KeywordDensityCheckerPage() {
  useEffect(() => {
    addRecentTool("keyword-density-checker");
  }, []);

  const [text, setText] = useState("");

  const rows = useMemo(() => {
    const words = (text.toLowerCase().match(/\b[a-z0-9]+\b/g) || []);
    const total = words.length;
    const map = new Map<string, number>();

    for (const word of words) {
      map.set(word, (map.get(word) || 0) + 1);
    }

    return [...map.entries()]
      .map(([keyword, count]) => ({
        keyword,
        count,
        density: total === 0 ? 0 : ((count / total) * 100).toFixed(2),
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 25);
  }, [text]);

  return (
    <ToolLayout
      currentSlug="keyword-density-checker"
      title="Keyword Density Checker"
      description="Check keyword density in text instantly."
    >
      <div className="space-y-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your article or text here..."
          className="min-h-[220px] w-full rounded-2xl border border-zinc-200 p-4"
        />

        <div className="overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-100 text-left">
              <tr>
                <th className="px-4 py-3">Keyword</th>
                <th className="px-4 py-3">Count</th>
                <th className="px-4 py-3">Density</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.keyword}>
                  <td className="border-t px-4 py-3">{row.keyword}</td>
                  <td className="border-t px-4 py-3">{row.count}</td>
                  <td className="border-t px-4 py-3">{row.density}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ToolSeoContent title="Keyword Density Checker" description="Check keyword density in text instantly." />
      <ToolFeaturedTools currentSlug="keyword-density-checker" />
      <RelatedTools currentSlug="keyword-density-checker" />
    </ToolLayout>
  );
}
