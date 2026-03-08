"use client";
import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";

export default function Base64ToolPage() {
  const [text, setText] = useState("Hello world");

  const encoded = useMemo(() => {
    try {
      return btoa(unescape(encodeURIComponent(text)));
    } catch {
      return "Encoding failed";
    }
  }, [text]);

  const decoded = useMemo(() => {
    try {
      return decodeURIComponent(escape(atob(text)));
    } catch {
      return "Enter valid Base64 to decode";
    }
  }, [text]);

  return (
    <ToolLayout
      currentSlug="base64-tool"
      title="Base64 Encode / Decode"
      description="Encode plain text or decode valid Base64 strings."
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
        title="Base64 Encode / Decode"
        description="Encode plain text or decode valid Base64 strings."
        about={[
          "Base64 Encode / Decode is useful when you need to convert text into Base64 format or turn Base64 back into readable text.",
          "This tool helps with quick encoding and decoding tasks in the browser. It is useful for developers, testers, API work, and any workflow where Base64 strings appear.",
        ]}
        steps={[
          "Paste plain text or a Base64 string into the input field.",
          "Review the encoded and decoded outputs instantly.",
          "Copy the result you need for your workflow.",
        ]}
        faq={[
          {
            question: "What is Base64 used for?",
            answer: "Base64 is commonly used to safely represent text or binary data in systems that expect plain text.",
          },
          {
            question: "Can I decode any text with this tool?",
            answer: "Only valid Base64 content can be decoded correctly.",
          },
          {
            question: "Who uses Base64 tools?",
            answer: "Developers, testers, and technical users often use Base64 when working with APIs, tokens, and encoded data.",
          },
        ]}
      />
      <RelatedTools currentSlug="base64-tool" />

    </ToolLayout>
  );
}
