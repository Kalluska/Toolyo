"use client";

import { useEffect, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function TimestampNowPage() {
  useEffect(() => {
    addRecentTool("timestamp-now");
  }, []);

  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const seconds = Math.floor(now / 1000);
  const iso = new Date(now).toISOString();

  return (
    <ToolLayout
      currentSlug="timestamp-now"
      title="Current Timestamp"
      description="Get the current Unix timestamp instantly."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-4">
          <div className="text-sm text-zinc-500">Unix timestamp (seconds)</div>
          <div className="mt-2 text-3xl font-bold">{seconds}</div>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-4">
          <div className="text-sm text-zinc-500">Unix timestamp (milliseconds)</div>
          <div className="mt-2 text-3xl font-bold">{now}</div>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-4 md:col-span-2">
          <div className="text-sm text-zinc-500">ISO time</div>
          <div className="mt-2 font-mono text-sm">{iso}</div>
        </div>
      </div>

      <ToolSeoContent title="Current Timestamp" description="Get the current Unix timestamp instantly." />
      <ToolFeaturedTools currentSlug="timestamp-now" />
      <RelatedTools currentSlug="timestamp-now" />
    </ToolLayout>
  );
}
