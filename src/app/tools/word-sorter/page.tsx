"use client";
import {useState} from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";

export default function WordSorter(){
const [text,setText]=useState("");

const sorted=text.split(/\s+/).sort().join(" ");

return(
<ToolLayout currentSlug="word-sorter" title="Word Sorter" description="Sort words alphabetically.">
<div className="grid gap-4 lg:grid-cols-2">
<textarea value={text} onChange={(e)=>setText(e.target.value)} className="border p-4 rounded-xl"/>
<textarea readOnly value={sorted} className="border p-4 rounded-xl"/>
</div>

      <ToolSeoContent
        title="Word Sorter"
        description="Sort words alphabetically."
      />
      <RelatedTools currentSlug="word-sorter" />

    </ToolLayout>
  );
}
