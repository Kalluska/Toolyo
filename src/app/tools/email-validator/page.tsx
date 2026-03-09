"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function EmailValidatorPage() {
  useEffect(() => {
    addRecentTool("email-validator");
  }, []);

  const [text, setText] = useState("");

  const result = useMemo(() => {
    const email = text.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email
      ? { entered: email, valid: regex.test(email) }
      : { entered: "", valid: false };
  }, [text]);

  return (
    <ToolLayout
      currentSlug="email-validator"
      title="Email Validator"
      description="Validate email addresses instantly."
    >
      <div className="space-y-6">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter email address..."
          className="w-full rounded-2xl border border-zinc-200 p-4"
        />

        <div className={`rounded-2xl border p-4 ${result.entered ? (result.valid ? "border-green-300 bg-green-50" : "border-red-300 bg-red-50") : "border-zinc-200"}`}>
          <div className="text-sm text-zinc-500">Result</div>
          <div className="mt-2 text-3xl font-bold">
            {!result.entered ? "Waiting for input" : result.valid ? "Valid email" : "Invalid email"}
          </div>
        </div>
      </div>

      <ToolSeoContent title="Email Validator" description="Validate email addresses instantly." />
      <ToolFeaturedTools currentSlug="email-validator" />
      <RelatedTools currentSlug="email-validator" />
    </ToolLayout>
  );
}
