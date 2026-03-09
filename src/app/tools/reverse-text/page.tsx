"use client";
import { useEffect, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function ReverseText() {
  useEffect(() => {
    addRecentTool("reverse-text");
  }, []);

const [text,setText]=useState("");

const reversed=text.split("").reverse().join("");

return(
<ToolLayout currentSlug="reverse-text" title="Reverse Text" description="Reverse characters in your text instantly.">
<div className="grid gap-4 lg:grid-cols-2">
<textarea value={text} onChange={(e)=>setText(e.target.value)} className="min-h-[200px] border p-4 rounded-xl"/>
<textarea readOnly value={reversed} className="min-h-[200px] border p-4 rounded-xl"/>
</div>

      <ToolSeoContent
        title="Reverse Text"
        description="Reverse characters in your text instantly."
      />
      <ToolFeaturedTools currentSlug="reverse-text" />
      <RelatedTools currentSlug="reverse-text" />

    </ToolLayout>
  );
}
