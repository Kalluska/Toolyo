"use client";
import {useState} from "react";
import ToolLayout from "@/components/tool-layout";

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
</ToolLayout>
);
}
