"use client";
import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";

export default function SlugGeneratorPage() {
  const [text, setText] = useState("");

  const slug = useMemo(() => {
    return text
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }, [text]);

  return (
    <ToolLayout
      currentSlug="slug-generator"
      title="Slug Generator"
      description="Convert text into a clean URL slug."
    >
      <div className="space-y-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a title or phrase here..."
          className="min-h-[180px] w-full rounded-2xl border border-zinc-200 p-4 outline-none focus:border-zinc-400"
        />

        <div>
          <div className="mb-2 text-sm font-medium">Slug</div>
          <textarea
            readOnly
            value={slug}
            className="min-h-[120px] w-full rounded-2xl border border-zinc-200 p-4"
          />
        </div>
      </div>
    
      
      <ToolSeoContent
        title="Slug Generator"
        description="Convert text into a clean URL slug."
        about={[
          "Slug Generator is useful for blog posts, landing pages, product pages, and any URL that needs to be short, readable, and SEO-friendly.",
          "This tool converts titles and phrases into clean URL slugs by removing extra characters and replacing spaces with hyphens. It helps keep links organized and easier to understand.",
        ]}
        steps={[
          "Paste or type a title, headline, or phrase into the input box.",
          "The tool generates a clean slug automatically.",
          "Copy the slug and use it in your URL or content system.",
        ]}
        faq={[
          {
            question: "What is a URL slug?",
            answer: "A slug is the readable part of a URL, usually based on the page title or topic.",
          },
          {
            question: "Why are slugs important for SEO?",
            answer: "Clean slugs make URLs easier to read and understand for both users and search engines.",
          },
          {
            question: "Does this tool remove special characters?",
            answer: "Yes. It normalizes the text into a cleaner URL-friendly format.",
          },
        ]}
      />
      <RelatedTools currentSlug="slug-generator" />

    </ToolLayout>
  );
}
