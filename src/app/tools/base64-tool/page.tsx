"use client";
import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";

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
    </ToolLayout>
  );
}
