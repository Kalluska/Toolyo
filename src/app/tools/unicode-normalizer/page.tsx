"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function UnicodeNormalizerPage() {
  useEffect(() => {
    addRecentTool("unicode-normalizer");
  }, []);

  const [text, setText] = useState("");
  const [form, setForm] = useState("NFC");

  const output = useMemo(() => {
    try {
      return text.normalize(form as "NFC" | "NFD" | "NFKC" | "NFKD");
    } catch {
      return text;
    }
  }, [text, form]);

  return (
    <ToolLayout
      currentSlug="unicode-normalizer"
      title="Unicode Normalizer"
      description="Normalize unicode text instantly."
    >
      <div className="space-y-4">
        <select
          value={form}
          onChange={(e) => setForm(e.target.value)}
          className="rounded-xl border border-zinc-200 px-3 py-2"
        >
          <option value="NFC">NFC</option>
          <option value="NFD">NFD</option>
          <option value="NFKC">NFKC</option>
          <option value="NFKD">NFKD</option>
        </select>
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
      </div>
    
      <ToolSeoContent
        title="Unicode Normalizer"
        description="Normalize unicode text instantly."
      />
      <ToolFeaturedTools currentSlug="unicode-normalizer" />
      <RelatedTools currentSlug="unicode-normalizer" />

    </ToolLayout>
  );
}
