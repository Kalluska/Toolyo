"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";
import ToolFaqSchema from "@/components/tool-faq-schema";
import ToolUseCases from "@/components/tool-use-cases";

function randomChar(chars: string) {
  return chars[Math.floor(Math.random() * chars.length)];
}

export default function PasswordGeneratorPage() {
  const title = "Password Generator";
  const description = "Generate secure passwords instantly.";
  const [length, setLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    addRecentTool("password-generator");
  }, []);

  const password = useMemo(() => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let pool = "";
    const required: string[] = [];

    if (includeUpper) {
      pool += upper;
      required.push(randomChar(upper));
    }
    if (includeLower) {
      pool += lower;
      required.push(randomChar(lower));
    }
    if (includeNumbers) {
      pool += numbers;
      required.push(randomChar(numbers));
    }
    if (includeSymbols) {
      pool += symbols;
      required.push(randomChar(symbols));
    }

    if (!pool) return "";

    const safeLength = Math.max(required.length, Math.min(64, length));
    const result = [...required];

    while (result.length < safeLength) {
      result.push(randomChar(pool));
    }

    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }

    return result.join("");
  }, [length, includeUpper, includeLower, includeNumbers, includeSymbols, refresh]);

  const strength = useMemo(() => {
    let score = 0;
    if (length >= 12) score += 1;
    if (length >= 16) score += 1;
    if (includeUpper) score += 1;
    if (includeLower) score += 1;
    if (includeNumbers) score += 1;
    if (includeSymbols) score += 1;

    if (score <= 2) return "Weak";
    if (score <= 4) return "Medium";
    return "Strong";
  }, [length, includeUpper, includeLower, includeNumbers, includeSymbols]);

  const handleCopy = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <ToolLayout currentSlug="password-generator" title={title} description={description}>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <label className="mb-2 block text-sm font-medium">Password length</label>
            <input
              type="number"
              min="4"
              max="64"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full rounded-xl border border-zinc-200 px-3 py-2"
            />
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-sm text-zinc-500">Strength estimate</div>
            <div className="mt-2 text-3xl font-bold">{strength}</div>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <label className="flex items-center gap-3 rounded-xl border border-zinc-200 p-3">
            <input type="checkbox" checked={includeUpper} onChange={(e) => setIncludeUpper(e.target.checked)} />
            <span>Uppercase letters</span>
          </label>
          <label className="flex items-center gap-3 rounded-xl border border-zinc-200 p-3">
            <input type="checkbox" checked={includeLower} onChange={(e) => setIncludeLower(e.target.checked)} />
            <span>Lowercase letters</span>
          </label>
          <label className="flex items-center gap-3 rounded-xl border border-zinc-200 p-3">
            <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
            <span>Numbers</span>
          </label>
          <label className="flex items-center gap-3 rounded-xl border border-zinc-200 p-3">
            <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
            <span>Symbols</span>
          </label>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-sm font-medium">Generated password</div>
            <div className="text-xs text-zinc-500">{copied ? "Copied" : "Ready to copy"}</div>
          </div>

          <textarea
            readOnly
            value={password}
            className="min-h-[120px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm"
          />

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={() => setRefresh((v) => v + 1)}
              className="rounded-xl bg-black px-4 py-2 text-white"
              type="button"
            >
              Generate again
            </button>
            <button
              onClick={handleCopy}
              className="rounded-xl border border-zinc-200 px-4 py-2"
              type="button"
            >
              Copy password
            </button>
          </div>
        </div>
      </div>

            <ToolFaqSchema slug="password-generator" />
<ToolSeoContent title={title} description={description} slug="password-generator" />
      <ToolFeaturedTools currentSlug="password-generator" />
      <RelatedTools currentSlug="password-generator" />
    </ToolLayout>
  );
}
