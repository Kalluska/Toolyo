"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

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
        <input value={pageTitle} onChange={(e) => setPageTitle(e.target.value)} placeholder="Page title" className="rounded-2xl border border-zinc-200 p-4" />
        <textarea value={pageDescription} onChange={(e) => setPageDescription(e.target.value)} placeholder="Meta description" className="min-h-[120px] rounded-2xl border border-zinc-200 p-4" />
        <input value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="Keywords separated by commas" className="rounded-2xl border border-zinc-200 p-4" />
        <textarea readOnly value={output} className="min-h-[220px] rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
      </div>
      <ToolSeoContent title={title} description={description} slug="meta-tag-generator" />
      <ToolFeaturedTools currentSlug="meta-tag-generator" />
      <RelatedTools currentSlug="meta-tag-generator" />
    </ToolLayout>
  );
}
