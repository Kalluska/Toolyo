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

export default function MetaTagGeneratorPage() {
  const title = "Meta Tag Generator";
  const description = "Generate meta tags instantly.";
  const [pageTitle, setPageTitle] = useState("");
  const [pageDescription, setPageDescription] = useState("");
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    addRecentTool("meta-tag-generator");
  }, []);

  const output = useMemo(() => {
    return `<title>${pageTitle}</title>
<meta name="description" content="${pageDescription}" />
<meta name="keywords" content="${keywords}" />`;
  }, [pageTitle, pageDescription, keywords]);

  return (
    <ToolLayout currentSlug="meta-tag-generator" title={title} description={description}>
      <div className="grid gap-4">
        <ToolInputCard label="Page title">
          <input
            value={pageTitle}
            onChange={(e) => setPageTitle(e.target.value)}
            placeholder="Page title"
            className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 p-4 text-zinc-950 outline-none placeholder:text-zinc-500 focus:border-zinc-500"
          />
        </ToolInputCard>

        <ToolInputCard label="Meta description">
          <textarea
            value={pageDescription}
            onChange={(e) => setPageDescription(e.target.value)}
            placeholder="Meta description"
            className="min-h-[120px] rounded-2xl border border-zinc-300 bg-zinc-50 p-4 text-zinc-950 outline-none placeholder:text-zinc-500 focus:border-zinc-500"
          />
        </ToolInputCard>

        <ToolInputCard label="Keywords">
          <input
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Keywords separated by commas"
            className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 p-4 text-zinc-950 outline-none placeholder:text-zinc-500 focus:border-zinc-500"
          />
        </ToolInputCard>

        <ToolOutputCard label="Generated meta tags">
          <textarea
            readOnly
            value={output}
            className="min-h-[220px] rounded-2xl border border-zinc-300 bg-zinc-50 p-4 font-mono text-sm text-zinc-950"
          />
        </ToolOutputCard>
      </div>

            <ToolFaqSchema slug="meta-tag-generator" />
<ToolSeoContent title={title} description={description} slug="meta-tag-generator" />
      <ToolFeaturedTools currentSlug="meta-tag-generator" />
      <RelatedTools currentSlug="meta-tag-generator" />
    </ToolLayout>
  );
}
