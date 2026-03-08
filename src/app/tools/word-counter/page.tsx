"use client";
import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";

export default function WordCounterPage() {
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

    return {
      words,
      characters,
      charactersNoSpaces,
      lines,
      paragraphs,
      readingTime,
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
          className="min-h-[220px] w-full rounded-2xl border border-zinc-200 p-4 outline-none focus:border-zinc-400"
        />

        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          {[
            ["Words", stats.words],
            ["Characters", stats.characters],
            ["No spaces", stats.charactersNoSpaces],
            ["Lines", stats.lines],
            ["Paragraphs", stats.paragraphs],
            ["Read time", stats.readingTime === 0 ? "0 min" : `${stats.readingTime} min`],
          ].map(([label, value]) => (
            <div key={String(label)} className="rounded-2xl border border-zinc-200 p-4">
              <div className="text-sm text-zinc-500">{label}</div>
              <div className="mt-2 text-2xl font-bold">{value}</div>
            </div>
          ))}
        </div>
      </div>
    
      
      <ToolSeoContent
        title="Word Counter"
        description="Count words, characters, lines, paragraphs, and estimated reading time."
        about={[
          "Word Counter is useful for writing, editing, SEO work, school assignments, and social media copy. It gives you a quick overview of text length without needing external software.",
          "This tool counts words, characters, characters without spaces, lines, paragraphs, and estimated reading time. It is useful when you need to stay within limits or measure the size of a text block accurately.",
        ]}
        steps={[
          "Paste your text into the input box.",
          "Review the live counts for words, characters, lines, paragraphs, and reading time.",
          "Edit the text until it matches your target length.",
        ]}
        faq={[
          {
            question: "What does Word Counter measure?",
            answer: "It measures words, characters, characters without spaces, lines, paragraphs, and estimated reading time.",
          },
          {
            question: "Who uses a word counter?",
            answer: "Students, writers, bloggers, marketers, and SEO professionals often use word counters to control text length.",
          },
          {
            question: "Why is reading time useful?",
            answer: "Reading time helps estimate how long a visitor or reader may spend with your content.",
          },
        ]}
      />
      <RelatedTools currentSlug="word-counter" />

    </ToolLayout>
  );
}
