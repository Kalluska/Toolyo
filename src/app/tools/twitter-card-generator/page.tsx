"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function TwitterCardGeneratorPage() {
  const title = "Twitter Card Generator";
  const description = "Generate Twitter Card tags instantly.";
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  const [cardImage, setCardImage] = useState("");
  const [cardSite, setCardSite] = useState("");

  useEffect(() => {
    addRecentTool("twitter-card-generator");
  }, []);

  const output = useMemo(() => {
    return `<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${cardTitle}" />
<meta name="twitter:description" content="${cardDescription}" />
<meta name="twitter:image" content="${cardImage}" />
<meta name="twitter:site" content="${cardSite}" />`;
  }, [cardTitle, cardDescription, cardImage, cardSite]);

  return (
    <ToolLayout currentSlug="twitter-card-generator" title={title} description={description}>
      <div className="grid gap-4">
        <input value={cardTitle} onChange={(e) => setCardTitle(e.target.value)} placeholder="Twitter title" className="rounded-2xl border border-zinc-200 p-4" />
        <textarea value={cardDescription} onChange={(e) => setCardDescription(e.target.value)} placeholder="Twitter description" className="min-h-[120px] rounded-2xl border border-zinc-200 p-4" />
        <input value={cardImage} onChange={(e) => setCardImage(e.target.value)} placeholder="Twitter image URL" className="rounded-2xl border border-zinc-200 p-4" />
        <input value={cardSite} onChange={(e) => setCardSite(e.target.value)} placeholder="@username" className="rounded-2xl border border-zinc-200 p-4" />
        <textarea readOnly value={output} className="min-h-[220px] rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
      </div>
      <ToolSeoContent title={title} description={description} slug="twitter-card-generator" />
      <ToolFeaturedTools currentSlug="twitter-card-generator" />
      <RelatedTools currentSlug="twitter-card-generator" />
    </ToolLayout>
  );
}
