"use client";

import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";

export default function DomainExtractorPage() {
  const [text, setText] = useState("");

  const output = useMemo(() => {
    return text;
  }, [text]);

  return (
    <ToolLayout
      currentSlug="domain-extractor"
      title="Domain Extractor"
      description="Extract domain names from text instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <div className="mb-2 text-sm font-medium">Input</div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text here..."
            className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4 outline-none focus:border-zinc-400"
          />
        </div>
        <div>
          <div className="mb-2 text-sm font-medium">Output</div>
          <textarea
            readOnly
            value={output}
            className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
          />
        </div>
      </div>
    </ToolLayout>
  );
}
