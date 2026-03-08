"use client";
import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function JsonFormatterPage() {
  const [jsonInput, setJsonInput] = useState('{\n  "hello": "world"\n}');

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

  return (
    <ToolLayout
      currentSlug="json-formatter"
      title="JSON Formatter"
      description="Format and validate JSON instantly."
    >
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
          <div className="mb-2 text-sm font-medium">Output</div>
          <textarea
            readOnly
            value={formattedJson.value}
            className={`min-h-[260px] w-full rounded-2xl border p-4 font-mono text-sm ${
              formattedJson.ok ? "border-zinc-200" : "border-red-300 bg-red-50"
            }`}
          />
        </div>
      </div>
    
      
      <ToolSeoContent
        title="JSON Formatter"
        description="Format and validate JSON instantly."
        about={[
          "JSON Formatter is useful for developers, analysts, and API users who need to inspect, clean, and read JSON data more easily.",
          "This tool formats raw JSON into a readable structure and helps identify invalid JSON. It is useful for debugging payloads, checking API responses, and preparing structured data.",
        ]}
        steps={[
          "Paste your raw JSON into the input field.",
          "The tool formats the JSON instantly if it is valid.",
          "If the JSON is invalid, review the error message and fix the data.",
        ]}
        faq={[
          {
            question: "What happens if my JSON is invalid?",
            answer: "The tool shows an error instead of formatted output so you can find and fix the issue.",
          },
          {
            question: "Who uses a JSON formatter?",
            answer: "Developers, QA testers, analysts, and anyone working with APIs or structured data.",
          },
          {
            question: "Why format JSON?",
            answer: "Formatted JSON is much easier to read, debug, and inspect than compressed raw data.",
          },
        ]}
      />
      <ToolFeaturedTools currentSlug="json-formatter" />
      <RelatedTools currentSlug="json-formatter" />

    </ToolLayout>
  );
}
