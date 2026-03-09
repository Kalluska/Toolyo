"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function CharacterCounterPage() {
  useEffect(() => {
    addRecentTool("character-counter");
  }, []);

  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const normalized = text.replace(/\r\n/g, "\n");
    const characters = normalized.length;
    const charactersNoSpaces = normalized.replace(/\s/g, "").length;
    const words = normalized.trim() ? normalized.trim().split(/\s+/).length : 0;
    const lines = normalized ? normalized.split("\n").length : 0;
    return { characters, charactersNoSpaces, words, lines };
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
          className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4 outline-none focus:border-zinc-400"
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-sm text-zinc-500">Characters</div>
            <div className="mt-2 text-3xl font-bold">{stats.characters}</div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-sm text-zinc-500">No spaces</div>
            <div className="mt-2 text-3xl font-bold">{stats.charactersNoSpaces}</div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-sm text-zinc-500">Words</div>
            <div className="mt-2 text-3xl font-bold">{stats.words}</div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-sm text-zinc-500">Lines</div>
            <div className="mt-2 text-3xl font-bold">{stats.lines}</div>
          </div>
        </div>
      </div>

      <ToolSeoContent
        title="Character Counter"
        description="Count characters, characters without spaces, words, and lines."
        about={[
          "Character Counter is useful when you need exact text length for SEO titles, descriptions, ads, captions, forms, or any content with character limits.",
          "This tool shows total characters, characters without spaces, words, and lines, making it easier to adjust text before publishing or submitting it.",
        ]}
        steps={[
          "Paste or type your text into the input box.",
          "Review the character totals and no-spaces count.",
          "Trim or expand the text until it fits your target.",
        ]}
        faq={[
          {
            question: "Why count characters without spaces?",
            answer: "Some platforms and systems treat spaces differently, so the no-spaces number gives you a stricter text measurement.",
          },
          {
            question: "Is this useful for SEO work?",
            answer: "Yes. Character count matters for titles, descriptions, and snippet optimization.",
          },
          {
            question: "Can I use this for social media text limits?",
            answer: "Yes. It is useful for captions, bios, ad copy, and short-form content.",
          },
        ]}
      />
      <ToolFeaturedTools currentSlug="character-counter" />
      <RelatedTools currentSlug="character-counter" />
    </ToolLayout>
  );
}
