"use client";
import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function CaseConverterPage() {
  const [text, setText] = useState("");

  const upper = useMemo(() => text.toUpperCase(), [text]);
  const lower = useMemo(() => text.toLowerCase(), [text]);
  const title = useMemo(
    () => text.toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase()),
    [text]
  );

  return (
    <ToolLayout
      currentSlug="case-converter"
      title="Case Converter"
      description="Convert text to uppercase, lowercase, or title case."
    >
      <div className="space-y-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your text here..."
          className="min-h-[220px] w-full rounded-2xl border border-zinc-200 p-4 outline-none focus:border-zinc-400"
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {[
            ["UPPERCASE", upper],
            ["lowercase", lower],
            ["Title Case", title],
          ].map(([label, value]) => (
            <div key={String(label)}>
              <div className="mb-2 text-sm font-medium">{label}</div>
              <textarea
                readOnly
                value={String(value)}
                className="min-h-[180px] w-full rounded-2xl border border-zinc-200 p-4"
              />
            </div>
          ))}
        </div>
      </div>
    
      
      <ToolSeoContent
        title="Case Converter"
        description="Convert text to uppercase, lowercase, or title case."
        about={[
          "Case Converter helps you quickly change text formatting without retyping anything manually. It is useful for editing titles, normalizing content, and formatting copy for different platforms.",
          "This tool converts text into uppercase, lowercase, or title case instantly. It is useful for writers, marketers, students, and anyone working with headings or formatted text.",
        ]}
        steps={[
          "Paste or type your text into the input box.",
          "Review the uppercase, lowercase, and title case results.",
          "Copy the version you need.",
        ]}
        faq={[
          {
            question: "What is title case?",
            answer: "Title case capitalizes the first letter of each word, which is useful for headings and titles.",
          },
          {
            question: "Can I convert long text blocks?",
            answer: "Yes. The tool works for both short lines and larger text blocks.",
          },
          {
            question: "Why use a case converter?",
            answer: "It saves time and reduces mistakes when reformatting text manually.",
          },
        ]}
      />
      <ToolFeaturedTools currentSlug="case-converter" />
      <RelatedTools currentSlug="case-converter" />

    </ToolLayout>
  );
}
