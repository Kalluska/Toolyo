"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function WordCounterPage() {
  useEffect(() => {
    addRecentTool("word-counter");
  }, []);

  const [text, setText] = useState("");

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
    <ToolLayout
      currentSlug="word-counter"
      title="Word Counter"
      description="Count words, characters, lines, paragraphs, and estimated reading time."
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

      <ToolSeoContent
        title="Word Counter"
        description="Count words, characters, lines, paragraphs, and estimated reading time."
        about={[
          "Word Counter helps you measure text length instantly in the browser. It is useful for writing, editing, school assignments, blog posts, social media copy, and SEO content planning.",
          "This tool calculates words, characters, characters without spaces, lines, paragraphs, reading time, and speaking time, which makes it useful for both content creation and content review.",
        ]}
        steps={[
          "Paste or type your text into the input field.",
          "Review the live numbers for words, characters, lines, paragraphs, reading time, and speaking time.",
          "Edit the text until it matches your target length or format.",
        ]}
        faq={[
          {
            question: "Why use a word counter?",
            answer: "A word counter helps you stay within length limits for articles, essays, descriptions, and other content formats.",
          },
          {
            question: "What is the difference between reading time and speaking time?",
            answer: "Reading time estimates how long it takes to read the text, while speaking time estimates how long it may take to say it aloud.",
          },
          {
            question: "Does the tool update live?",
            answer: "Yes. Counts update immediately as you type or paste text.",
          },
        ]}
      />
      <ToolFeaturedTools currentSlug="word-counter" />
      <RelatedTools currentSlug="word-counter" />
    </ToolLayout>
  );
}
