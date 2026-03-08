"use client";
import {useState} from "react";
import ToolLayout from "@/components/tool-layout";

export default function LoremIpsum(){
const [count,setCount]=useState(3);

const text="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

const paragraphs=Array.from({length:count},()=>text).join("\n\n");

return(
<ToolLayout currentSlug="lorem-ipsum" title="Lorem Ipsum Generator" description="Generate dummy text paragraphs instantly.">
<input type="number" value={count} onChange={(e)=>setCount(Number(e.target.value))} className="border p-2 mb-4"/>
<textarea readOnly value={paragraphs} className="w-full min-h-[250px] border p-4 rounded-xl"/>
</ToolLayout>
);
}
