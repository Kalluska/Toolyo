"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function SlugGeneratorPage() {
  const title = "Slug Generator";
  const description = "Convert text into a clean URL slug.";

  useEffect(() => {
    addRecentTool("slug-generator");
  }, []);

  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const slug = useMemo(() => {
    return text
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }, [text]);

  const copySlug = async () => {
    if (!slug) return;
    await navigator.clipboard.writeText(slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <ToolLayout
      currentSlug="slug-generator"
      title={title}
      description={description}
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

        <button
          onClick={copySlug}
          className="rounded-xl border border-zinc-200 px-4 py-2"
        >
          {copied ? "Copied" : "Copy slug"}
        </button>
      </div>

      <ToolSeoContent
        title="Slug Generator"
        description="Convert text into a clean URL slug."
        about={[
          "Slug Generator is useful for blog posts, landing pages, documentation, and any URL that should stay short, readable, and SEO-friendly.",
          "This tool converts titles and phrases into clean slugs by removing extra characters and replacing spaces with hyphens. It helps keep URLs organized and easier to understand.",
        ]}
        steps={[
          "Paste or type a title, phrase, or heading into the input field.",
          "Review the generated slug instantly in the output box.",
          "Copy the slug and use it in your URL or content system.",
        ]}
        faq={[
          {
            question: "What is a slug?",
            answer: "A slug is the readable part of a URL, often based on the title of a page or post.",
          },
          {
            question: "Why are slugs important for SEO?",
            answer: "Clean slugs make URLs easier to read and can help improve clarity for users and search engines.",
          },
          {
            question: "Does this tool remove special characters?",
            answer: "Yes. It normalizes the text into a cleaner URL-friendly format.",
          },
        ]}
      />
      <ToolFeaturedTools currentSlug="slug-generator" />
      <RelatedTools currentSlug="slug-generator" />
    </ToolLayout>
  );
}
