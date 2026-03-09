"use client";
import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function UrlToolPage() {
  useEffect(() => {
    addRecentTool("url-tool");
  }, []);

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
        about={[
          "URL Encode / Decode is useful when links contain special characters, spaces, symbols, or encoded query strings.",
          "This tool lets you safely encode text for use in URLs and decode already-encoded strings back into readable text. It is useful for developers, marketers, and technical troubleshooting.",
        ]}
        steps={[
          "Paste your text or encoded URL fragment into the input box.",
          "Check the encoded and decoded results instantly.",
          "Copy the version you need for links, parameters, or debugging.",
        ]}
        faq={[
          {
            question: "Why do URLs need encoding?",
            answer: "Encoding makes sure spaces and special characters are represented safely inside URLs.",
          },
          {
            question: "When would I decode a URL?",
            answer: "Decoding is useful when you want to read or debug encoded query strings and link parameters.",
          },
          {
            question: "Who uses URL encoding tools?",
            answer: "Developers, marketers, SEO specialists, and anyone working with links or tracking parameters.",
          },
        ]}
      />
      <ToolFeaturedTools currentSlug="url-tool" />
      <RelatedTools currentSlug="url-tool" />

    </ToolLayout>
  );
}
