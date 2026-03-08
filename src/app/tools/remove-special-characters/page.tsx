"use client";

import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";

export default function RemoveSpecialCharactersPage() {
  const [text, setText] = useState("");

  const output = useMemo(() => text.replace(/[^a-zA-Z0-9\s]/g, ""), [text]);

  return (
    <ToolLayout
      currentSlug="remove-special-characters"
      title="Remove Special Characters"
      description="Remove special characters from text instantly."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
        <textarea readOnly value={output} className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4" />
      </div>
    </ToolLayout>
  );
}
