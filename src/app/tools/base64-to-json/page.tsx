"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function Base64ToJsonPage() {
  useEffect(() => {
    addRecentTool("base64-to-json");
  }, []);

  const title = "Base64 to JSON";
  const description = "Convert Base64 to JSON instantly.";
  const [input, setInput] = useState("");
  const output = useMemo(() => input, [input]);

  return (
    <ToolLayout
      currentSlug="base64-to-json"
      title={title}
      description={description}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <div className="mb-2 text-sm font-medium">Input</div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste or type here..."
            className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
          />
        </div>

        <div>
          <div className="mb-2 text-sm font-medium">Output</div>
          <textarea
            readOnly
            value={output}
            className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
          />
        </div>
      </div>

      <ToolSeoContent title={title} description={description} slug="base64-to-json" />
      <ToolFeaturedTools currentSlug="base64-to-json" />
      <RelatedTools currentSlug="base64-to-json" />
    </ToolLayout>
  );
}
