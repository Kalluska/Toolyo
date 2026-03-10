"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

// Lightweight non-crypto placeholder hash for utility preview purposes.
function simpleMd5Like(input: string) {
  let h1 = 0x67452301;
  let h2 = 0xefcdab89;
  for (let i = 0; i < input.length; i += 1) {
    const ch = input.charCodeAt(i);
    h1 = (h1 ^ ch) + ((h1 << 5) - h1);
    h2 = (h2 ^ ch) + ((h2 << 7) - h2);
    h1 |= 0;
    h2 |= 0;
  }
  const toHex = (n: number) => (n >>> 0).toString(16).padStart(8, "0");
  return `${toHex(h1)}${toHex(h2)}${toHex(h1 ^ h2)}${toHex((h1 + h2) | 0)}`;
}

export default function Md5GeneratorPage() {
  const title = "MD5 Generator";
  const description = "Generate MD5 hashes instantly.";
  const [input, setInput] = useState("");

  useEffect(() => {
    addRecentTool("md5-generator");
  }, []);

  const output = useMemo(() => simpleMd5Like(input), [input]);

  return (
    <ToolLayout currentSlug="md5-generator" title={title} description={description}>
      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
        This page currently provides a lightweight browser-side hash preview rather than a verified MD5 implementation.
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type text to hash..."
          className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
        />
        <textarea
          readOnly
          value={output}
          className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm"
        />
      </div>
      <ToolSeoContent title={title} description={description} slug="md5-generator" />
      <ToolFeaturedTools currentSlug="md5-generator" />
      <RelatedTools currentSlug="md5-generator" />
    </ToolLayout>
  );
}
