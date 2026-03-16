"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";
import ToolInputCard from "@/components/tool-input-card";
import ToolFaqSchema from "@/components/tool-faq-schema";
import ToolUseCases from "@/components/tool-use-cases";

export default function WordCounterPage() {
  const title = "Word Counter";
  const description = "Count words, characters, lines, paragraphs, and estimated reading time.";
  const [text, setText] = useState("");

  useEffect(() => {
    addRecentTool("word-counter");
  }, []);

  const stats = useMemo(() => {
    const normalized = text.replace(/\r\n/g, "\n");
    const words = normalized.trim() ? normalized.trim().split(/\s+/).length : 0;
    const characters = normalized.length;
    const charactersNoSpaces = normalized.replace(/\s/g, "").length;
    const lines = normalized ? normalized.split("\n").length : 0;
    const paragraphs = normalized.trim()
      ? normalized.split(/\n\s*\n/).filter(Boolean).length
      : 0;
    const readingTime = words === 0 ? 0 : Math.ceil(words / 200);
    const speakingTime = words === 0 ? 0 : Math.ceil(words / 130);

    return {
      words,
      characters,
      charactersNoSpaces,
      lines,
      paragraphs,
      readingTime,
      speakingTime,
    };
  }, [text]);

  return (
    <ToolLayout currentSlug="word-counter" title={title} description={description}>
      <div className="space-y-6">
        <ToolInputCard label="Input text">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste or type your text here..."
            className="min-h-[240px] w-full rounded-2xl border border-zinc-300 bg-zinc-50 p-4 text-zinc-950 outline-none placeholder:text-zinc-500 focus:border-zinc-500"
          />
        </ToolInputCard>

        <div>
          <div className="mb-3 text-sm font-medium">Live statistics</div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <div className="text-sm text-zinc-500">Words</div>
              <div className="mt-2 text-3xl font-bold">{stats.words}</div>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <div className="text-sm text-zinc-500">Characters</div>
              <div className="mt-2 text-3xl font-bold">{stats.characters}</div>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <div className="text-sm text-zinc-500">No spaces</div>
              <div className="mt-2 text-3xl font-bold">{stats.charactersNoSpaces}</div>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <div className="text-sm text-zinc-500">Lines</div>
              <div className="mt-2 text-3xl font-bold">{stats.lines}</div>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <div className="text-sm text-zinc-500">Paragraphs</div>
              <div className="mt-2 text-3xl font-bold">{stats.paragraphs}</div>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <div className="text-sm text-zinc-500">Reading time</div>
              <div className="mt-2 text-3xl font-bold">{stats.readingTime} min</div>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <div className="text-sm text-zinc-500">Speaking time</div>
              <div className="mt-2 text-3xl font-bold">{stats.speakingTime} min</div>
            </div>
          </div>
        </div>
      </div>

            <ToolFaqSchema slug="word-counter" />
<ToolSeoContent title={title} description={description} slug="word-counter" />
      <ToolFeaturedTools currentSlug="word-counter" />
      <RelatedTools currentSlug="word-counter" />
    </ToolLayout>
  );
}
