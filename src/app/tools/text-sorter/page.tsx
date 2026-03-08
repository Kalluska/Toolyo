"use client";
import {useState} from "react";
import ToolLayout from "@/components/tool-layout";

export default function TextSorter(){
const [text,setText]=useState("");

const sorted=text.split(" ").sort().join(" ");

return(
<ToolLayout currentSlug="text-sorter" title="Text Sorter" description="Sort words alphabetically.">
<div className="grid gap-4 lg:grid-cols-2">
<textarea value={text} onChange={(e)=>setText(e.target.value)} className="border p-4 rounded-xl"/>
<textarea readOnly value={sorted} className="border p-4 rounded-xl"/>
</div>
</ToolLayout>
);
}
