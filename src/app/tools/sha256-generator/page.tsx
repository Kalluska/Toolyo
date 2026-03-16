"use client";

import { useEffect, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";
import ToolInputCard from "@/components/tool-input-card";
import ToolOutputCard from "@/components/tool-output-card";
import ToolFaqSchema from "@/components/tool-faq-schema";
import ToolUseCases from "@/components/tool-use-cases";

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
  const [status, setStatus] = useState("Ready");

  useEffect(() => {
    addRecentTool("sha256-generator");
  }, []);

  useEffect(() => {
    let active = true;

    const run = async () => {
      setStatus("Generating hash...");
      const result = await sha256(input);
      if (!active) return;
      setOutput(result);
      setStatus(result ? "Hash generated" : "Ready");
    };

    run();

    return () => {
      active = false;
    };
  }, [input]);

  return (
    <ToolLayout currentSlug="sha256-generator" title={title} description={description}>
      <div className="grid gap-4 lg:grid-cols-2">
        <ToolInputCard label="Input text">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type text to hash..."
            className="min-h-[240px] w-full rounded-2xl border border-zinc-300 bg-zinc-50 p-4 text-zinc-950 outline-none placeholder:text-zinc-500 focus:border-zinc-500"
          />
        </ToolInputCard>

        <ToolOutputCard
          label="SHA256 hash"
          status={status}
          statusTone={output ? "success" : "default"}
        >
          <textarea
            readOnly
            value={output}
            className="min-h-[240px] w-full rounded-2xl border border-zinc-300 bg-zinc-50 p-4 font-mono text-sm text-zinc-950"
          />
        </ToolOutputCard>
      </div>

            <ToolFaqSchema slug="sha256-generator" />
<ToolSeoContent title={title} description={description} slug="sha256-generator" />
      <ToolFeaturedTools currentSlug="sha256-generator" />
      <RelatedTools currentSlug="sha256-generator" />
    </ToolLayout>
  );
}
