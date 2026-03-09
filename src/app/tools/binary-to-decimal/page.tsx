"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function BinaryToDecimalPage() {
  useEffect(() => {
    addRecentTool("binary-to-decimal");
  }, []);

  const [text, setText] = useState("101010");

  const output = useMemo(() => {
    const value = text.trim();
    if (!value) return "";
    if (!/^[01]+$/.test(value)) return "Invalid binary number";
    return String(parseInt(value, 2));
  }, [text]);

  return (
    <ToolLayout
      currentSlug="binary-to-decimal"
      title="Binary to Decimal"
      description="Convert binary numbers to decimal instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <input value={text} onChange={(e) => setText(e.target.value)} className="rounded-2xl border border-zinc-200 p-4 font-mono" />
        <textarea readOnly value={output} className="min-h-[120px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
      </div>

      <ToolSeoContent title="Binary to Decimal" description="Convert binary numbers to decimal instantly." />
      <ToolFeaturedTools currentSlug="binary-to-decimal" />
      <RelatedTools currentSlug="binary-to-decimal" />
    </ToolLayout>
  );
}
