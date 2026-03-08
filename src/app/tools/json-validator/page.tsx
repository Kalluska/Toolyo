"use client";
import {useState} from "react";
import ToolLayout from "@/components/tool-layout";

export default function JsonValidator(){
const [json,setJson]=useState("{}");
let result="Valid JSON";

try{JSON.parse(json);}catch(e){result="Invalid JSON"}

return(
<ToolLayout currentSlug="json-validator" title="JSON Validator" description="Validate JSON data instantly.">
<textarea value={json} onChange={(e)=>setJson(e.target.value)} className="w-full min-h-[250px] border p-4 rounded-xl"/>
<div className="mt-4 text-xl">{result}</div>
</ToolLayout>
);
}
