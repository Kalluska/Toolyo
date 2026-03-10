"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function OpenGraphGeneratorPage() {
  const title = "Open Graph Generator";
  const description = "Generate Open Graph tags instantly.";
  const [ogTitle, setOgTitle] = useState("");
  const [ogDescription, setOgDescription] = useState("");
  const [ogUrl, setOgUrl] = useState("");
  const [ogImage, setOgImage] = useState("");

  useEffect(() => {
    addRecentTool("open-graph-generator");
  }, []);

  const output = useMemo(() => {
    return `<meta property="og:title" content="${ogTitle}" />
<meta property="og:description" content="${ogDescription}" />
<meta property="og:url" content="${ogUrl}" />
<meta property="og:image" content="${ogImage}" />
<meta property="og:type" content="website" />`;
  }, [ogTitle, ogDescription, ogUrl, ogImage]);

  return (
    <ToolLayout currentSlug="open-graph-generator" title={title} description={description}>
      <div className="grid gap-4">
        <input value={ogTitle} onChange={(e) => setOgTitle(e.target.value)} placeholder="OG title" className="rounded-2xl border border-zinc-200 p-4" />
        <textarea value={ogDescription} onChange={(e) => setOgDescription(e.target.value)} placeholder="OG description" className="min-h-[120px] rounded-2xl border border-zinc-200 p-4" />
        <input value={ogUrl} onChange={(e) => setOgUrl(e.target.value)} placeholder="OG URL" className="rounded-2xl border border-zinc-200 p-4" />
        <input value={ogImage} onChange={(e) => setOgImage(e.target.value)} placeholder="OG image URL" className="rounded-2xl border border-zinc-200 p-4" />
        <textarea readOnly value={output} className="min-h-[220px] rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
      </div>
      <ToolSeoContent title={title} description={description} slug="open-graph-generator" />
      <ToolFeaturedTools currentSlug="open-graph-generator" />
      <RelatedTools currentSlug="open-graph-generator" />
    </ToolLayout>
  );
}
