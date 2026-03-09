"use client";
import { useEffect, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function HtmlEscape(){
const [text,setText]=useState("");

const escaped=text
.replace(/&/g,"&amp;")
.replace(/</g,"&lt;")
.replace(/>/g,"&gt;")
.replace(/"/g,"&quot;");

return(
<ToolLayout currentSlug="html-escape" title="HTML Escape" description="Escape HTML special characters.">
<div className="grid gap-4 lg:grid-cols-2">
<textarea value={text} onChange={(e)=>setText(e.target.value)} className="border p-4 rounded-xl"/>
<textarea readOnly value={escaped} className="border p-4 rounded-xl"/>
</div>

      <ToolSeoContent
        title="HTML Escape"
        description="Escape HTML special characters."
      />
      <ToolFeaturedTools currentSlug="html-escape" />
      <RelatedTools currentSlug="html-escape" />

    </ToolLayout>
  );
}
