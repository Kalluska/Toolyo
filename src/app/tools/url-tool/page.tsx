"use client";
import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";

export default function UrlToolPage() {
  const [text, setText] = useState("hello world?name=kalle&city=oulu");

  const encoded = useMemo(() => encodeURIComponent(text), [text]);

  const decoded = useMemo(() => {
    try {
      return decodeURIComponent(text);
    } catch {
      return "Enter a valid encoded URL string";
    }
  }, [text]);

  return (
    <ToolLayout
      currentSlug="url-tool"
      title="URL Encode / Decode"
      description="Encode and decode URL-safe strings instantly."
    >
      <div className="space-y-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[180px] w-full rounded-2xl border border-zinc-200 p-4"
        />

        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <div className="mb-2 text-sm font-medium">Encoded</div>
            <textarea
              readOnly
              value={encoded}
              className="min-h-[180px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm"
            />
          </div>
          <div>
            <div className="mb-2 text-sm font-medium">Decoded</div>
            <textarea
              readOnly
              value={decoded}
              className="min-h-[180px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm"
            />
          </div>
        </div>
      </div>
    
      <ToolSeoContent
        title="URL Encode / Decode"
        description="Encode and decode URL-safe strings instantly."
      />
      <RelatedTools currentSlug="url-tool" />

    </ToolLayout>
  );
}
