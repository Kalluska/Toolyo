"use client";
import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

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
    
      
      <ToolSeoContent
        title="Remove Duplicate Lines"
        description="Remove repeated lines from text while keeping unique ones."
        about={[
          "Remove Duplicate Lines is useful for cleaning lists, logs, imported records, keyword sets, and copied datasets that contain repeated lines.",
          "This tool keeps the first occurrence of each line and removes repeated duplicates. It is useful for text cleanup, data preparation, and reducing clutter in long lists.",
        ]}
        steps={[
          "Paste your line-based text into the input field.",
          "The tool checks for repeated lines and removes duplicates automatically.",
          "Copy the unique cleaned output from the result box.",
        ]}
        faq={[
          {
            question: "Does it preserve the original order?",
            answer: "Yes. It keeps the first appearance of each unique line in the same order.",
          },
          {
            question: "What kind of text works best?",
            answer: "It works best with line-separated content such as lists, records, logs, and exported data.",
          },
          {
            question: "Can I use it for keyword cleanup?",
            answer: "Yes. It is useful for removing duplicate keywords or repeated phrases in lists.",
          },
        ]}
      />
      <ToolFeaturedTools currentSlug="remove-duplicate-lines" />
      <RelatedTools currentSlug="remove-duplicate-lines" />

    </ToolLayout>
  );
}
