"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";
import ToolInputCard from "@/components/tool-input-card";
import ToolFaqSchema from "@/components/tool-faq-schema";
import ToolUseCases from "@/components/tool-use-cases";

export default function UrlParserPage() {
  const title = "URL Parser";
  const description = "Parse URLs into components instantly.";
  const [text, setText] = useState("https://toolyo-kappa.vercel.app/tools/word-counter?lang=en#top");

  useEffect(() => {
    addRecentTool("url-parser");
  }, []);

  const parsed = useMemo(() => {
    try {
      const url = new URL(text);
      return {
        ok: true,
        href: url.href,
        protocol: url.protocol,
        hostname: url.hostname,
        host: url.host,
        pathname: url.pathname,
        search: url.search || "(none)",
        hash: url.hash || "(none)",
      };
    } catch {
      return { ok: false };
    }
  }, [text]);

  return (
    <ToolLayout currentSlug="url-parser" title={title} description={description}>
      <div className="space-y-6">
        <ToolInputCard label="Input URL">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 p-4 text-zinc-950 outline-none focus:border-zinc-500"
          />
        </ToolInputCard>

        {parsed.ok ? (
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(parsed)
              .filter(([key]) => key !== "ok")
              .map(([key, value]) => (
                <div key={key} className="rounded-2xl border border-zinc-200 p-4">
                  <div className="text-sm capitalize text-zinc-500">{key}</div>
                  <div className="mt-2 break-all font-mono text-sm">{value}</div>
                </div>
              ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-red-300 bg-red-50 p-4 text-red-700">
            Invalid URL
          </div>
        )}
      </div>

            <ToolFaqSchema slug="url-parser" />
<ToolSeoContent title={title} description={description} slug="url-parser" />
      <ToolFeaturedTools currentSlug="url-parser" />
      <RelatedTools currentSlug="url-parser" />
    </ToolLayout>
  );
}
