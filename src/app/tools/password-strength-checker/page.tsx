"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function PasswordStrengthCheckerPage() {
  useEffect(() => {
    addRecentTool("password-strength-checker");
  }, []);

  const [password, setPassword] = useState("");

  const result = useMemo(() => {
    let score = 0;
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    let label = "Very weak";
    if (score >= 5) label = "Strong";
    else if (score >= 4) label = "Good";
    else if (score >= 3) label = "Medium";
    else if (score >= 2) label = "Weak";

    return {
      score,
      label,
      checks: [
        { name: "At least 8 characters", ok: password.length >= 8 },
        { name: "At least 12 characters", ok: password.length >= 12 },
        { name: "Lowercase letters", ok: /[a-z]/.test(password) },
        { name: "Uppercase letters", ok: /[A-Z]/.test(password) },
        { name: "Numbers", ok: /\d/.test(password) },
        { name: "Symbols", ok: /[^A-Za-z0-9]/.test(password) },
      ],
    };
  }, [password]);

  return (
    <ToolLayout
      currentSlug="password-strength-checker"
      title="Password Strength Checker"
      description="Check password strength instantly."
    >
      <div className="space-y-6">
        <textarea
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type or paste a password here..."
          className="min-h-[140px] w-full rounded-2xl border border-zinc-200 p-4"
        />

        <div className="rounded-2xl border border-zinc-200 p-4">
          <div className="text-sm text-zinc-500">Strength</div>
          <div className="mt-2 text-3xl font-bold">{result.label}</div>
          <div className="mt-2 text-sm text-zinc-500">Score: {result.score} / 6</div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {result.checks.map((check) => (
            <div key={check.name} className="rounded-xl border border-zinc-200 p-3">
              <div className="font-medium">{check.name}</div>
              <div className="mt-1 text-sm text-zinc-500">{check.ok ? "Passed" : "Missing"}</div>
            </div>
          ))}
        </div>
      </div>

      <ToolSeoContent title="Password Strength Checker" description="Check password strength instantly." />
      <ToolFeaturedTools currentSlug="password-strength-checker" />
      <RelatedTools currentSlug="password-strength-checker" />
    </ToolLayout>
  );
}
