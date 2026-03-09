"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

function randomChar(chars: string) {
  return chars[Math.floor(Math.random() * chars.length)];
}

export default function PasswordGeneratorPage() {
  useEffect(() => {
    addRecentTool("password-generator");
  }, []);

  const [length, setLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [copied, setCopied] = useState(false);

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

  const copyPassword = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <ToolLayout
      currentSlug="password-generator"
      title="Password Generator"
      description="Generate secure passwords instantly."
    >
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <label className="mb-2 block text-sm font-medium">Length</label>
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
            <div className="text-sm text-zinc-500">Strength</div>
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
          <div className="mb-2 text-sm font-medium">Generated password</div>
          <textarea
            readOnly
            value={password}
            className="min-h-[120px] w-full rounded-2xl border border-zinc-200 p-4 font-mono text-sm"
          />
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => setRefresh((v) => v + 1)}
              className="rounded-xl bg-black px-4 py-2 text-white"
            >
              Generate again
            </button>
            <button
              onClick={copyPassword}
              className="rounded-xl border border-zinc-200 px-4 py-2"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      </div>

      <ToolSeoContent
        title="Password Generator"
        description="Generate secure passwords instantly."
        about={[
          "Password Generator helps you create stronger passwords quickly in the browser without relying on easy-to-guess patterns.",
          "This tool lets you choose length and character types such as uppercase letters, lowercase letters, numbers, and symbols. It is useful for creating better passwords for personal and professional accounts.",
        ]}
        steps={[
          "Choose the password length you want.",
          "Select which character types to include.",
          "Generate a password and copy it to use where needed.",
        ]}
        faq={[
          {
            question: "What makes a password strong?",
            answer: "A strong password is usually longer and includes a mix of uppercase letters, lowercase letters, numbers, and symbols.",
          },
          {
            question: "Should I use symbols in passwords?",
            answer: "In most cases yes, because symbols increase complexity and make passwords harder to guess.",
          },
          {
            question: "Can I generate multiple passwords?",
            answer: "Yes. You can generate again as many times as you want until you get a password you like.",
          },
        ]}
      />
      <ToolFeaturedTools currentSlug="password-generator" />
      <RelatedTools currentSlug="password-generator" />
    </ToolLayout>
  );
}
