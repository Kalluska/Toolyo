"use client";
import {useState} from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";

export default function TextSorter(){
const [text,setText]=useState("");

const sorted=text.split(" ").sort().join(" ");

return(
<ToolLayout currentSlug="text-sorter" title="Text Sorter" description="Sort words alphabetically.">
<div className="grid gap-4 lg:grid-cols-2">
<textarea value={text} onChange={(e)=>setText(e.target.value)} className="border p-4 rounded-xl"/>
<textarea readOnly value={sorted} className="border p-4 rounded-xl"/>
</div>

      <ToolSeoContent
        title="Text Sorter"
        description="Sort words alphabetically."
      />
      <RelatedTools currentSlug="text-sorter" />

    </ToolLayout>
  );
}
