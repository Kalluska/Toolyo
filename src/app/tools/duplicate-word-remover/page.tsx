"use client";
import { useEffect, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function DuplicateWordRemover(){
const [text,setText]=useState("");

const words=text.split(" ");
const unique=[...new Set(words)].join(" ");

return(
<ToolLayout currentSlug="duplicate-word-remover" title="Duplicate Word Remover" description="Remove duplicate words from text.">
<div className="grid gap-4 lg:grid-cols-2">
<textarea value={text} onChange={(e)=>setText(e.target.value)} className="border p-4 rounded-xl"/>
<textarea readOnly value={unique} className="border p-4 rounded-xl"/>
</div>

      <ToolSeoContent
        title="Duplicate Word Remover"
        description="Remove duplicate words from text."
      />
      <ToolFeaturedTools currentSlug="duplicate-word-remover" />
      <RelatedTools currentSlug="duplicate-word-remover" />

    </ToolLayout>
  );
}
