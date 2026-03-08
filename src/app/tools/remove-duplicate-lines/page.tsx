"use client";
import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";

export default function RemoveDuplicateLinesPage() {
  const [text, setText] = useState("");

  const output = useMemo(() => {
    const lines = text.replace(/\r\n/g, "\n").split("\n");
    const seen = new Set<string>();
    const unique: string[] = [];

    for (const line of lines) {
      if (!seen.has(line)) {
        seen.add(line);
        unique.push(line);
      }
    }

    return unique.join("\n");
  }, [text]);

  const removedCount = useMemo(() => {
    const lines = text.replace(/\r\n/g, "\n").split("\n");
    const uniqueCount = new Set(lines).size;
    return Math.max(0, lines.length - uniqueCount);
  }, [text]);

  return (
    <ToolLayout
      currentSlug="remove-duplicate-lines"
      title="Remove Duplicate Lines"
      description="Remove repeated lines from text while keeping unique ones."
    >
      <div className="space-y-6">
        <div className="rounded-2xl border border-zinc-200 p-4">
          <div className="text-sm text-zinc-500">Duplicate lines removed</div>
          <div className="mt-2 text-2xl font-bold">{removedCount}</div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <div className="mb-2 text-sm font-medium">Input</div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste text with duplicate lines here..."
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
      </div>
    </ToolLayout>
  );
}
