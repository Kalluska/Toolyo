"use client";

import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";

export default function RemoveEmptyLinesPage() {
  const [text, setText] = useState("");

  const output = useMemo(() => {
    return text
      .replace(/\r\n/g, "\n")
      .split("\n")
      .filter((line) => line.trim() !== "")
      .join("\n");
  }, [text]);

  return (
    <ToolLayout
      currentSlug="remove-empty-lines"
      title="Remove Empty Lines"
      description="Remove empty lines from text instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <div className="mb-2 text-sm font-medium">Input</div>
          <textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
        </div>
        <div>
          <div className="mb-2 text-sm font-medium">Output</div>
          <textarea readOnly value={output} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
        </div>
      </div>
    </ToolLayout>
  );
}
