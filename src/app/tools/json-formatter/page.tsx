"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";
import ToolInputCard from "@/components/tool-input-card";
import ToolOutputCard from "@/components/tool-output-card";
import ToolFaqSchema from "@/components/tool-faq-schema";
import ToolUseCases from "@/components/tool-use-cases";

export default function JsonFormatterPage() {
  const title = "JSON Formatter";
  const description = "Format and validate JSON instantly.";
  const [jsonInput, setJsonInput] = useState('{\n  "hello": "world"\n}');
  const [mode, setMode] = useState<"format" | "minify">("format");

  useEffect(() => {
    addRecentTool("json-formatter");
  }, []);

  const result = useMemo(() => {
    try {
      const parsed = JSON.parse(jsonInput);
      return {
        ok: true,
        output: mode === "format" ? JSON.stringify(parsed, null, 2) : JSON.stringify(parsed),
        status: mode === "format" ? "Valid JSON · formatted" : "Valid JSON · minified",
      };
    } catch (error: unknown) {
      return {
        ok: false,
        output: error instanceof Error ? error.message : "Invalid JSON",
        status: "Invalid JSON",
      };
    }
  }, [jsonInput, mode]);

  return (
    <ToolLayout currentSlug="json-formatter" title={title} description={description}>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setMode("format")}
            className={`rounded-xl border px-4 py-2 text-sm ${
              mode === "format" ? "border-black bg-black text-white" : "border-zinc-200"
            }`}
            type="button"
          >
            Format
          </button>
          <button
            onClick={() => setMode("minify")}
            className={`rounded-xl border px-4 py-2 text-sm ${
              mode === "minify" ? "border-black bg-black text-white" : "border-zinc-200"
            }`}
            type="button"
          >
            Minify
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <ToolInputCard label="Input JSON">
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              className="min-h-[280px] w-full rounded-2xl border border-zinc-300 bg-zinc-50 p-4 font-mono text-sm text-zinc-950 outline-none focus:border-zinc-500"
            />
          </ToolInputCard>

          <ToolOutputCard
            label="Output"
            status={result.status}
            statusTone={result.ok ? "success" : "error"}
          >
            <textarea
              readOnly
              value={result.output}
              className={`min-h-[280px] w-full rounded-2xl border p-4 font-mono text-sm ${
                result.ok
                  ? "border-zinc-300 bg-zinc-50 text-zinc-950"
                  : "border-red-300 bg-red-50 text-red-700"
              }`}
            />
          </ToolOutputCard>
        </div>
      </div>

            <ToolFaqSchema slug="json-formatter" />
<ToolSeoContent title={title} description={description} slug="json-formatter" />
      <ToolFeaturedTools currentSlug="json-formatter" />
      <RelatedTools currentSlug="json-formatter" />
    </ToolLayout>
  );
}
