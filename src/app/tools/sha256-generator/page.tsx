"use client";

import { useEffect, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

async function sha256(text: string) {
  const data = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function Sha256GeneratorPage() {
  const title = "SHA256 Generator";
  const description = "Generate SHA256 hashes instantly.";
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    addRecentTool("sha256-generator");
  }, []);

  useEffect(() => {
    let active = true;
    sha256(input).then((result) => {
      if (active) setOutput(result);
    });
    return () => {
      active = false;
    };
  }, [input]);

  return (
    <ToolLayout currentSlug="sha256-generator" title={title} description={description}>
      <div className="grid gap-4 lg:grid-cols-2">
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
      <ToolSeoContent title={title} description={description} slug="sha256-generator" />
      <ToolFeaturedTools currentSlug="sha256-generator" />
      <RelatedTools currentSlug="sha256-generator" />
    </ToolLayout>
  );
}
