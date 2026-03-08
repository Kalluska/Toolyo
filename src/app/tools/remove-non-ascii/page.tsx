"use client";

import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";

export default function RemoveNonAsciiPage() {
  const [text, setText] = useState("");

  const output = useMemo(() => text.replace(/[^\x00-\x7F]/g, ""), [text]);

  return (
    <ToolLayout
      currentSlug="remove-non-ascii"
      title="Remove Non-ASCII"
      description="Remove non-ASCII characters from text instantly."
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
