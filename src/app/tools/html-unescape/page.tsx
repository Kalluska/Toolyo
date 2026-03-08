"use client";
import {useState} from "react";
import ToolLayout from "@/components/tool-layout";

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
</ToolLayout>
);
}
