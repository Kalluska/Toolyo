"use client";
import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";

export default function CharacterCounterPage() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const normalized = text.replace(/\r\n/g, "\n");
    const characters = normalized.length;
    const charactersNoSpaces = normalized.replace(/\s/g, "").length;
    const words = normalized.trim() ? normalized.trim().split(/\s+/).length : 0;
    const lines = normalized ? normalized.split("\n").length : 0;

    return {
      characters,
      charactersNoSpaces,
      words,
      lines,
    };
  }, [text]);

  return (
    <ToolLayout
      currentSlug="character-counter"
      title="Character Counter"
      description="Count characters, characters without spaces, words, and lines."
    >
      <div className="space-y-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your text here..."
          className="min-h-[220px] w-full rounded-2xl border border-zinc-200 p-4 outline-none focus:border-zinc-400"
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Characters", stats.characters],
            ["No spaces", stats.charactersNoSpaces],
            ["Words", stats.words],
            ["Lines", stats.lines],
          ].map(([label, value]) => (
            <div key={String(label)} className="rounded-2xl border border-zinc-200 p-4">
              <div className="text-sm text-zinc-500">{label}</div>
              <div className="mt-2 text-2xl font-bold">{value}</div>
            </div>
          ))}
        </div>
      </div>
    
      <ToolSeoContent
        title="Character Counter"
        description="Count characters, characters without spaces, words, and lines."
      />
      <RelatedTools currentSlug="character-counter" />

    </ToolLayout>
  );
}
