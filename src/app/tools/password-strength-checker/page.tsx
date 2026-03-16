"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";
import ToolInputCard from "@/components/tool-input-card";
import ToolFaqSchema from "@/components/tool-faq-schema";
import ToolUseCases from "@/components/tool-use-cases";

export default function PasswordStrengthCheckerPage() {
  const title = "Password Strength Checker";
  const description = "Check password strength instantly.";
  const [password, setPassword] = useState("");

  useEffect(() => {
    addRecentTool("password-strength-checker");
  }, []);

  const result = useMemo(() => {
    let score = 0;
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    let label = "Very weak";
    let bar = 10;
    if (score >= 5) {
      label = "Strong";
      bar = 100;
    } else if (score >= 4) {
      label = "Good";
      bar = 75;
    } else if (score >= 3) {
      label = "Medium";
      bar = 55;
    } else if (score >= 2) {
      label = "Weak";
      bar = 35;
    }

    return {
      score,
      label,
      bar,
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
    <ToolLayout currentSlug="password-strength-checker" title={title} description={description}>
      <div className="space-y-6">
        <ToolInputCard label="Password input">
          <textarea
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type or paste a password here..."
            className="min-h-[140px] w-full rounded-2xl border border-zinc-300 bg-zinc-50 p-4 text-zinc-950 outline-none placeholder:text-zinc-500 focus:border-zinc-500"
          />
        </ToolInputCard>

        <div className="rounded-2xl border border-zinc-200 p-4">
          <div className="text-sm text-zinc-500">Strength</div>
          <div className="mt-2 text-3xl font-bold">{result.label}</div>
          <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-zinc-100">
            <div
              className="h-full rounded-full bg-black transition-all"
              style={{ width: `${result.bar}%` }}
            />
          </div>
          <div className="mt-2 text-sm text-zinc-500">Score: {result.score} / 6</div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {result.checks.map((check) => (
            <div key={check.name} className="rounded-xl border border-zinc-200 p-3">
              <div className="font-medium">{check.name}</div>
              <div className={`mt-1 text-sm ${check.ok ? "text-green-600" : "text-zinc-500"}`}>
                {check.ok ? "Passed" : "Missing"}
              </div>
            </div>
          ))}
        </div>
      </div>

            <ToolFaqSchema slug="password-strength-checker" />
<ToolSeoContent title={title} description={description} slug="password-strength-checker" />
      <ToolFeaturedTools currentSlug="password-strength-checker" />
      <RelatedTools currentSlug="password-strength-checker" />
    </ToolLayout>
  );
}
