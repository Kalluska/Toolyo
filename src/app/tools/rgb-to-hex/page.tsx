"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function RgbToHexPage() {
  useEffect(() => {
    addRecentTool("rgb-to-hex");
  }, []);

  const [text, setText] = useState("255, 102, 0");

  const output = useMemo(() => {
    const parts = text.split(",").map((p) => Number(p.trim()));
    if (parts.length !== 3 || parts.some((n) => Number.isNaN(n) || n < 0 || n > 255)) {
      return "Invalid RGB values";
    }

    return (
      "#" +
      parts
        .map((n) => n.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase()
    );
  }, [text]);

  return (
    <ToolLayout
      currentSlug="rgb-to-hex"
      title="RGB to HEX"
      description="Convert RGB colors to HEX instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <input value={text} onChange={(e) => setText(e.target.value)} className="rounded-2xl border border-zinc-200 p-4 font-mono" />
        <textarea readOnly value={output} className="min-h-[120px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
      </div>

      <ToolSeoContent title="RGB to HEX" description="Convert RGB colors to HEX instantly." />
      <ToolFeaturedTools currentSlug="rgb-to-hex" />
      <RelatedTools currentSlug="rgb-to-hex" />
    </ToolLayout>
  );
}
