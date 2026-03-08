"use client";

import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";

export default function TextToCsvPage() {
  const [text, setText] = useState("");

  const output = useMemo(() => {
    return text
      .split(/\r?\n/)
      .map((line) => `"${line.replace(/"/g, '""')}"`)
      .join(",");
  }, [text]);

  return (
    <ToolLayout
      currentSlug="text-to-csv"
      title="Text to CSV"
      description="Convert plain text lines into CSV instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
        />
        <textarea
          readOnly
          value={output}
          className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm"
        />
      </div>
    </ToolLayout>
  );
}
