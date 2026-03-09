"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function DecimalToBinaryPage() {
  useEffect(() => {
    addRecentTool("decimal-to-binary");
  }, []);

  const [text, setText] = useState("42");

  const output = useMemo(() => {
    const n = Number(text.trim());
    if (!text.trim()) return "";
    if (!Number.isInteger(n)) return "Invalid decimal number";
    return n.toString(2);
  }, [text]);

  return (
    <ToolLayout
      currentSlug="decimal-to-binary"
      title="Decimal to Binary"
      description="Convert decimal numbers to binary instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <input value={text} onChange={(e) => setText(e.target.value)} className="rounded-2xl border border-zinc-200 p-4" />
        <textarea readOnly value={output} className="min-h-[120px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
      </div>

      <ToolSeoContent title="Decimal to Binary" description="Convert decimal numbers to binary instantly." />
      <ToolFeaturedTools currentSlug="decimal-to-binary" />
      <RelatedTools currentSlug="decimal-to-binary" />
    </ToolLayout>
  );
}
