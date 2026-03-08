"use client";
import {useState} from "react";
import ToolLayout from "@/components/tool-layout";

export default function LineSorter(){
const [text,setText]=useState("");

const sorted=text.split("\n").sort().join("\n");

return(
<ToolLayout currentSlug="line-sorter" title="Line Sorter" description="Sort lines alphabetically.">
<div className="grid gap-4 lg:grid-cols-2">
<textarea value={text} onChange={(e)=>setText(e.target.value)} className="border p-4 rounded-xl"/>
<textarea readOnly value={sorted} className="border p-4 rounded-xl"/>
</div>
</ToolLayout>
);
}
