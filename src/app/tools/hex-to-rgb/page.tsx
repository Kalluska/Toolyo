"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function HexToRgbPage() {
  useEffect(() => {
    addRecentTool("hex-to-rgb");
  }, []);

  const [text, setText] = useState("#ff6600");

  const output = useMemo(() => {
    let hex = text.trim().replace("#", "");
    if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
    if (!/^[0-9a-fA-F]{6}$/.test(hex)) return "Invalid HEX color";

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
  }, [text]);

  return (
    <ToolLayout
      currentSlug="hex-to-rgb"
      title="HEX to RGB"
      description="Convert HEX colors to RGB instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <input value={text} onChange={(e) => setText(e.target.value)} className="rounded-2xl border border-zinc-200 p-4 font-mono" />
        <textarea readOnly value={output} className="min-h-[120px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm" />
      </div>

      <ToolSeoContent title="HEX to RGB" description="Convert HEX colors to RGB instantly." />
      <ToolFeaturedTools currentSlug="hex-to-rgb" />
      <RelatedTools currentSlug="hex-to-rgb" />
    </ToolLayout>
  );
}
