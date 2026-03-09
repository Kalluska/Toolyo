"use client";
import { useEffect, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function HtmlUnescape(){
const [text,setText]=useState("");

const unescaped=text
.replace(/&lt;/g,"<")
.replace(/&gt;/g,">")
.replace(/&amp;/g,"&")
.replace(/&quot;/g,'"');

return(
<ToolLayout currentSlug="html-unescape" title="HTML Unescape" description="Convert escaped HTML back to normal text.">
<div className="grid gap-4 lg:grid-cols-2">
<textarea value={text} onChange={(e)=>setText(e.target.value)} className="border p-4 rounded-xl"/>
<textarea readOnly value={unescaped} className="border p-4 rounded-xl"/>
</div>

      <ToolSeoContent
        title="HTML Unescape"
        description="Convert escaped HTML back to normal text."
      />
      <ToolFeaturedTools currentSlug="html-unescape" />
      <RelatedTools currentSlug="html-unescape" />

    </ToolLayout>
  );
}
