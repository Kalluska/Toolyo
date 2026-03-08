"use client";
import {useState} from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function TextTrimmer(){
const [text,setText]=useState("");

const trimmed=text.trim();

return(
<ToolLayout currentSlug="text-trimmer" title="Text Trimmer" description="Remove spaces from start and end of text.">
<div className="grid gap-4 lg:grid-cols-2">
<textarea value={text} onChange={(e)=>setText(e.target.value)} className="border p-4 rounded-xl"/>
<textarea readOnly value={trimmed} className="border p-4 rounded-xl"/>
</div>

      <ToolSeoContent
        title="Text Trimmer"
        description="Remove spaces from start and end of text."
      />
      <ToolFeaturedTools currentSlug="text-trimmer" />
      <RelatedTools currentSlug="text-trimmer" />

    </ToolLayout>
  );
}
