"use client";
import { useEffect, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function LineSorter(){
const [text,setText]=useState("");

const sorted=text.split("\n").sort().join("\n");

return(
<ToolLayout currentSlug="line-sorter" title="Line Sorter" description="Sort lines alphabetically.">
<div className="grid gap-4 lg:grid-cols-2">
<textarea value={text} onChange={(e)=>setText(e.target.value)} className="border p-4 rounded-xl"/>
<textarea readOnly value={sorted} className="border p-4 rounded-xl"/>
</div>

      <ToolSeoContent
        title="Line Sorter"
        description="Sort lines alphabetically."
      />
      <ToolFeaturedTools currentSlug="line-sorter" />
      <RelatedTools currentSlug="line-sorter" />

    </ToolLayout>
  );
}
