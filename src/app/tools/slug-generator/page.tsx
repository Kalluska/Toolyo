"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";
import ToolInputCard from "@/components/tool-input-card";
import ToolOutputCard from "@/components/tool-output-card";
import ToolFaqSchema from "@/components/tool-faq-schema";
import ToolUseCases from "@/components/tool-use-cases";

export default function SlugGeneratorPage() {
  const title = "Slug Generator";
  const description = "Convert text into a clean URL slug.";
  const [text, setText] = useState("");
  const [strict, setStrict] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    addRecentTool("slug-generator");
  }, []);

  const slug = useMemo(() => {
    let value = text.toLowerCase().normalize("NFKD");

    if (strict) {
      value = value.replace(/[^\w\s-]/g, "");
    }

    return value
      .trim()
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }, [text, strict]);

  const handleCopy = async () => {
    if (!slug) return;
    await navigator.clipboard.writeText(slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <ToolLayout currentSlug="slug-generator" title={title} description={description}>
      <div className="space-y-6">
        <ToolInputCard label="Input title or phrase">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a title or phrase here..."
            className="min-h-[180px] w-full rounded-2xl border border-zinc-300 bg-zinc-50 p-4 text-zinc-950 outline-none placeholder:text-zinc-500 focus:border-zinc-500"
          />
        </ToolInputCard>

        <label className="flex items-center gap-3 rounded-xl border border-zinc-200 p-3">
          <input type="checkbox" checked={strict} onChange={(e) => setStrict(e.target.checked)} />
          <span>Strict URL mode</span>
        </label>

        <ToolOutputCard
          label="Generated slug"
          status={copied ? "Copied" : "Ready to copy"}
        >
          <textarea
            readOnly
            value={slug}
            className="min-h-[120px] w-full rounded-2xl border border-zinc-300 bg-zinc-50 p-4 text-zinc-950"
          />
        </ToolOutputCard>

        <button
          onClick={handleCopy}
          className="rounded-xl border border-zinc-200 px-4 py-2"
          type="button"
        >
          Copy slug
        </button>
      </div>

            <ToolFaqSchema slug="slug-generator" />
<ToolSeoContent title={title} description={description} slug="slug-generator" />
      <ToolFeaturedTools currentSlug="slug-generator" />
      <RelatedTools currentSlug="slug-generator" />
    </ToolLayout>
  );
}
