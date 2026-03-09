"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function LowercaseConverterPage() {
  useEffect(() => {
    addRecentTool("lowercase-converter");
  }, []);

  const [text, setText] = useState("");

  const output = useMemo(() => text.toLowerCase(), [text]);

  return (
    <ToolLayout
      currentSlug="lowercase-converter"
      title="Lowercase Converter"
      description="Convert text to lowercase instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
        />
        <textarea
          readOnly
          value={output}
          className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
        />
      </div>
    
      <ToolSeoContent
        title="Lowercase Converter"
        description="Convert text to lowercase instantly."
      />
      <ToolFeaturedTools currentSlug="lowercase-converter" />
      <RelatedTools currentSlug="lowercase-converter" />

    </ToolLayout>
  );
}
