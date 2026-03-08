"use client";
import {useState} from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function JsonValidator(){
const [json,setJson]=useState("{}");
let result="Valid JSON";

try{JSON.parse(json);}catch(e){result="Invalid JSON"}

return(
<ToolLayout currentSlug="json-validator" title="JSON Validator" description="Validate JSON data instantly.">
<textarea value={json} onChange={(e)=>setJson(e.target.value)} className="w-full min-h-[250px] border p-4 rounded-xl"/>
<div className="mt-4 text-xl">{result}</div>

      <ToolSeoContent
        title="JSON Validator"
        description="Validate JSON data instantly."
      />
      <ToolFeaturedTools currentSlug="json-validator" />
      <RelatedTools currentSlug="json-validator" />

    </ToolLayout>
  );
}
