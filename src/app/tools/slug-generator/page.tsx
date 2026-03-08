"use client";
import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";

export default function SlugGeneratorPage() {
  const [text, setText] = useState("");

  const slug = useMemo(() => {
    return text
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }, [text]);

  return (
    <ToolLayout
      currentSlug="slug-generator"
      title="Slug Generator"
      description="Convert text into a clean URL slug."
    >
      <div className="space-y-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a title or phrase here..."
          className="min-h-[180px] w-full rounded-2xl border border-zinc-200 p-4 outline-none focus:border-zinc-400"
        />

        <div>
          <div className="mb-2 text-sm font-medium">Slug</div>
          <textarea
            readOnly
            value={slug}
            className="min-h-[120px] w-full rounded-2xl border border-zinc-200 p-4"
          />
        </div>
      </div>
    </ToolLayout>
  );
}
