"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function TextToBinaryPage() {
  useEffect(() => {
    addRecentTool("text-to-binary");
  }, []);

  const [text, setText] = useState("Hi");

  const output = useMemo(() => {
    return text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
  }, [text]);

  return (
    <ToolLayout
      currentSlug="text-to-binary"
      title="Text to Binary"
      description="Convert text to binary instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[220px] w-full rounded-2xl border border-zinc-200 p-4" />
        <textarea readOnly value={output} className="min-h-[220px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
      </div>

      <ToolSeoContent title="Text to Binary" description="Convert text to binary instantly." />
      <ToolFeaturedTools currentSlug="text-to-binary" />
      <RelatedTools currentSlug="text-to-binary" />
    </ToolLayout>
  );
}
