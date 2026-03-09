"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function JsonFormatterPage() {
  useEffect(() => {
    addRecentTool("json-formatter");
  }, []);

  const [jsonInput, setJsonInput] = useState('{\n  "hello": "world"\n}');
  const [copied, setCopied] = useState(false);

  const formattedJson = useMemo(() => {
    try {
      return { ok: true, value: JSON.stringify(JSON.parse(jsonInput), null, 2) };
    } catch (error: unknown) {
      return {
        ok: false,
        value: error instanceof Error ? error.message : "Invalid JSON",
      };
    }
  }, [jsonInput]);

  const copyOutput = async () => {
    if (!formattedJson.ok) return;
    await navigator.clipboard.writeText(formattedJson.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <ToolLayout
      currentSlug="json-formatter"
      title="JSON Formatter"
      description="Format and validate JSON instantly."
    >
      <div className="space-y-4">
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <div className="mb-2 text-sm font-medium">Input JSON</div>
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              className="min-h-[260px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm"
            />
          </div>
          <div>
            <div className="mb-2 text-sm font-medium">Formatted output</div>
            <textarea
              readOnly
              value={formattedJson.value}
              className={`min-h-[260px] w-full rounded-2xl border p-4 font-mono text-sm ${
                formattedJson.ok ? "border-zinc-200" : "border-red-300 bg-red-50"
              }`}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={copyOutput}
            disabled={!formattedJson.ok}
            className="rounded-xl bg-black px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {copied ? "Copied" : "Copy formatted JSON"}
          </button>
        </div>
      </div>

      <ToolSeoContent
        title="JSON Formatter"
        description="Format and validate JSON instantly."
        about={[
          "JSON Formatter helps developers, testers, analysts, and API users make raw JSON easier to read and debug.",
          "This tool formats valid JSON into a structured layout and shows an error message if the JSON is invalid, which makes it useful for API payloads, responses, and configuration files.",
        ]}
        steps={[
          "Paste your raw JSON into the input field.",
          "Check the formatted result instantly on the right side.",
          "If the JSON is valid, copy the formatted output for easier reading or debugging.",
        ]}
        faq={[
          {
            question: "What happens if my JSON is invalid?",
            answer: "The tool shows an error message instead of formatted output so you can identify and fix the issue.",
          },
          {
            question: "Why format JSON?",
            answer: "Formatted JSON is much easier to read, inspect, debug, and share than compressed or messy raw JSON.",
          },
          {
            question: "Who uses a JSON formatter?",
            answer: "Developers, QA testers, analysts, and anyone working with APIs or structured data.",
          },
        ]}
      />
      <ToolFeaturedTools currentSlug="json-formatter" />
      <RelatedTools currentSlug="json-formatter" />
    </ToolLayout>
  );
}
