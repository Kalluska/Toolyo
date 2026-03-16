"use client";

import { getEditableFields, setReactFieldValue } from "@/lib/tool-dom";

function getSampleForSlug(slug: string) {
  const s = slug.toLowerCase();

  const exactSamples: Record<string, string> = {
    "word-counter":
      "Toolyo helps you count words, characters, lines, and paragraphs instantly.\n\nThis sample text is here so you can test the counter quickly.",
    "character-counter":
      "Character counters are useful for social posts, SEO descriptions, and text limits.",
    "json-formatter":
      '{\n  "site": "Toolyo",\n  "category": "developer tools",\n  "features": ["format", "validate", "minify"]\n}',
    "json-minifier":
      '{\n  "hello": "world",\n  "tool": "Toolyo",\n  "nested": {\n    "enabled": true,\n    "count": 3\n  }\n}',
    "password-generator": "Toolyo#2026",
    "password-strength-checker": "MyWeakPassword123!",
    "slug-generator": "My Great Toolyo Landing Page",
    "timestamp-converter": "1710000000",
    "url-parser": "https://toolyo-kappa.vercel.app/tools/word-counter?lang=en&source=demo#top",
    "sha256-generator": "Toolyo secure hash demo",
    "meta-tag-generator": "Toolyo Demo Title",
    "keyword-extractor":
      "Toolyo is a fast browser-based utility site. Toolyo helps users with text tools, SEO tools, and developer workflows. Toolyo makes small tasks faster.",
  };

  if (exactSamples[s]) return exactSamples[s];

  if (s.includes("json")) return '{\n  "name": "Toolyo",\n  "type": "utility"\n}';
  if (s.includes("url") || s.includes("utm")) return "https://toolyo-kappa.vercel.app/tools/word-counter?ref=demo";
  if (s.includes("html")) return "<h1>Hello</h1><p>Toolyo demo</p>";
  if (s.includes("xml")) return "<root><item>Toolyo</item></root>";
  if (s.includes("yaml")) return "name: Toolyo\ntype: utility";
  if (s.includes("csv")) return "name,age\nAlice,25\nBob,30";
  if (s.includes("base64")) return "Hello Toolyo";
  if (s.includes("binary")) return "Hello";
  if (s.includes("timestamp")) return "1710000000";
  if (s.includes("password")) return "Toolyo#2026";
  if (s.includes("slug")) return "My Great Toolyo Page";
  if (s.includes("keyword")) return "Toolyo is a fast tool site. Toolyo helps with text, SEO, and developer workflows.";
  if (s.includes("email")) return "hello@example.com";
  if (s.includes("uuid")) return "550e8400-e29b-41d4-a716-446655440000";
  if (s.includes("hex")) return "#FF6600";
  if (s.includes("rgb")) return "255, 102, 0";

  return "Hello from Toolyo.\nThis is sample text.";
}

type ToolActionBarProps = {
  currentSlug: string;
};

export default function ToolActionBar({ currentSlug }: ToolActionBarProps) {
  const withRoot = (fn: (root: HTMLElement) => void) => {
    const root = document.getElementById("toolyo-tool-root");
    if (!root) return;
    fn(root);
  };

  const handleClear = () => {
    withRoot((root) => {
      const editable = getEditableFields(root);
      editable.forEach((field) => {
        setReactFieldValue(field, "");
      });
    });
  };

  const handleSample = () => {
    withRoot((root) => {
      const editable = getEditableFields(root);
      if (editable.length === 0) return;

      const sample = getSampleForSlug(currentSlug);
      setReactFieldValue(editable[0], sample);
      editable[0].focus();

      if (currentSlug === "meta-tag-generator" && editable.length >= 3) {
        setReactFieldValue(editable[0], "Toolyo Demo Title");
        setReactFieldValue(editable[1], "Toolyo demo description for search engines and social sharing.");
        setReactFieldValue(editable[2], "toolyo, utility tools, seo, developer");
      }

      if (currentSlug === "open-graph-generator" && editable.length >= 4) {
        setReactFieldValue(editable[0], "Toolyo Demo OG Title");
        setReactFieldValue(editable[1], "Toolyo Open Graph description example.");
        setReactFieldValue(editable[2], "https://toolyo-kappa.vercel.app");
        setReactFieldValue(editable[3], "https://toolyo-kappa.vercel.app/og-image.png");
      }

      if (currentSlug === "twitter-card-generator" && editable.length >= 4) {
        setReactFieldValue(editable[0], "Toolyo Twitter Title");
        setReactFieldValue(editable[1], "Toolyo Twitter Card description example.");
        setReactFieldValue(editable[2], "https://toolyo-kappa.vercel.app/twitter-image.png");
        setReactFieldValue(editable[3], "@toolyo");
      }

      if (currentSlug === "utm-builder" && editable.length >= 6) {
        setReactFieldValue(editable[0], "https://toolyo-kappa.vercel.app");
        setReactFieldValue(editable[1], "google");
        setReactFieldValue(editable[2], "cpc");
        setReactFieldValue(editable[3], "spring_launch");
        setReactFieldValue(editable[4], "tool_search");
        setReactFieldValue(editable[5], "ad_variant_a");
      }

      if (currentSlug === "url-parser" && editable.length >= 1) {
        setReactFieldValue(editable[0], "https://toolyo-kappa.vercel.app/tools/word-counter?lang=en&source=demo#top");
      }

      if (currentSlug === "timestamp-converter" && editable.length >= 1) {
        setReactFieldValue(editable[0], "1710000000");
      }

      if (currentSlug === "password-generator" && editable.length >= 1) {
        setReactFieldValue(editable[0], "16");
      }

      if (currentSlug === "password-strength-checker" && editable.length >= 1) {
        setReactFieldValue(editable[0], "MyWeakPassword123!");
      }

      if (currentSlug === "slug-generator" && editable.length >= 1) {
        setReactFieldValue(editable[0], "My Great Toolyo Landing Page");
      }

      if (currentSlug === "keyword-extractor" && editable.length >= 1) {
        setReactFieldValue(
          editable[0],
          "Toolyo is a fast browser-based utility site. Toolyo helps users with text tools, SEO tools, and developer workflows. Toolyo makes small tasks faster."
        );
      }

      if (currentSlug === "sha256-generator" && editable.length >= 1) {
        setReactFieldValue(editable[0], "Toolyo secure hash demo");
      }
    });
  };

  const handleSelectInput = () => {
    withRoot((root) => {
      const editable = getEditableFields(root);
      if (editable.length === 0) return;
      editable[0].focus();
      editable[0].select?.();
    });
  };

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      <button
        onClick={handleClear}
        className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium transition hover:border-zinc-500"
        type="button"
      >
        Clear
      </button>
      <button
        onClick={handleSample}
        className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium transition hover:border-zinc-500"
        type="button"
      >
        Sample
      </button>
      <button
        onClick={handleSelectInput}
        className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium transition hover:border-zinc-500"
        type="button"
      >
        Select input
      </button>
    </div>
  );
}
