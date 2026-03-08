"use client";

import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";

export default function CsvToTextPage() {
  const [text, setText] = useState("");

  const output = useMemo(() => {
    return text
      .split(/\r?\n/)
      .map((line) => line.split(",").map((cell) => cell.trim()).join(" "))
      .join("\n");
  }, [text]);

  return (
    <ToolLayout
      currentSlug="csv-to-text"
      title="CSV to Text"
      description="Convert CSV content into plain text instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm"
        />
        <textarea
          readOnly
          value={output}
          className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
        />
      </div>
    
      <ToolSeoContent
        title="CSV to Text"
        description="Convert CSV content into plain text instantly."
      />
      <RelatedTools currentSlug="csv-to-text" />

    </ToolLayout>
  );
}
