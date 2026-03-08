"use client";

import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";

export default function TitleCaseConverterPage() {
  const [text, setText] = useState("");

  const output = useMemo(() => {
    return text.toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase());
  }, [text]);

  return (
    <ToolLayout
      currentSlug="title-case-converter"
      title="Title Case Converter"
      description="Convert text to title case instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
        />
        <textarea
          readOnly
          value={output}
          className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
        />
      </div>
    </ToolLayout>
  );
}
