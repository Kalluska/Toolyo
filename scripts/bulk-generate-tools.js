const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const batchFile = process.argv[2];

if (!batchFile) {
  console.error("Usage: node scripts/bulk-generate-tools.js <batch-file.json>");
  process.exit(1);
}

const batchPath = path.resolve(ROOT, batchFile);
if (!fs.existsSync(batchPath)) {
  console.error(`Batch file not found: ${batchPath}`);
  process.exit(1);
}

const tools = JSON.parse(fs.readFileSync(batchPath, "utf8"));

const toolsDataPath = path.join(ROOT, "src", "data", "tools.ts");
const seoMapPath = path.join(ROOT, "src", "lib", "toolSeoContentMap.ts");
const toolsDir = path.join(ROOT, "src", "app", "tools");

const toolsData = fs.readFileSync(toolsDataPath, "utf8");
let seoMap = fs.readFileSync(seoMapPath, "utf8");

function escapeTs(str) {
  return String(str)
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n");
}

function pascalCase(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function pageTemplate(tool) {
  const componentName = `${pascalCase(tool.slug)}Page`;
  return `"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import { addRecentTool } from "@/lib/recentTools";
import ToolSeoContent from "@/components/tool-seo-content";
import ToolFeaturedTools from "@/components/tool-featured-tools";
import RelatedTools from "@/components/related-tools";

export default function ${componentName}() {
  useEffect(() => {
    addRecentTool("${tool.slug}");
  }, []);

  const title = "${escapeTs(tool.name)}";
  const description = "${escapeTs(tool.description)}";
  const [input, setInput] = useState("");
  const output = useMemo(() => input, [input]);

  return (
    <ToolLayout
      currentSlug="${tool.slug}"
      title={title}
      description={description}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <div className="mb-2 text-sm font-medium">Input</div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste or type here..."
            className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
          />
        </div>

        <div>
          <div className="mb-2 text-sm font-medium">Output</div>
          <textarea
            readOnly
            value={output}
            className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
          />
        </div>
      </div>

      <ToolSeoContent title={title} description={description} slug="${tool.slug}" />
      <ToolFeaturedTools currentSlug="${tool.slug}" />
      <RelatedTools currentSlug="${tool.slug}" />
    </ToolLayout>
  );
}
`;
}

function toolEntry(tool) {
  return `  {
    slug: "${escapeTs(tool.slug)}",
    name: "${escapeTs(tool.name)}",
    category: "${escapeTs(tool.category)}",
    description: "${escapeTs(tool.description)}",
    seoTitle: "${escapeTs(tool.seoTitle || tool.name)}",
    seoDescription: "${escapeTs(tool.seoDescription || tool.description)}",
  },`;
}

function seoEntry(tool) {
  return `  "${tool.slug}": {
    about: "${escapeTs(tool.about || `${tool.name} helps you solve this task quickly in your browser without extra software.`)}",
    steps: [
      "${escapeTs((tool.steps && tool.steps[0]) || "Paste or type your content into the input field.")}",
      "${escapeTs((tool.steps && tool.steps[1]) || "Review the generated output instantly.")}",
      "${escapeTs((tool.steps && tool.steps[2]) || "Copy the result and use it where needed.")}"
    ],
    faq: [
      { q: "What does this tool do?", a: "${escapeTs((tool.faq && tool.faq[0] && tool.faq[0].a) || `${tool.name} helps you complete this task directly in your browser.`)}" },
      { q: "Is this tool free?", a: "${escapeTs((tool.faq && tool.faq[1] && tool.faq[1].a) || "Yes. This tool is free to use online.")}" }
    ]
  },`;
}

let updatedToolsData = toolsData;
let createdPages = 0;
let addedToolEntries = 0;
let addedSeoEntries = 0;
let skipped = 0;

for (const tool of tools) {
  const pageDir = path.join(toolsDir, tool.slug);
  const pagePath = path.join(pageDir, "page.tsx");

  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  if (!fs.existsSync(pagePath)) {
    fs.writeFileSync(pagePath, pageTemplate(tool), "utf8");
    createdPages += 1;
  } else {
    skipped += 1;
  }

  if (!updatedToolsData.includes(`slug: "${tool.slug}"`)) {
    updatedToolsData = updatedToolsData.replace(/\n\];\s*$/, `\n${toolEntry(tool)}\n];\n`);
    addedToolEntries += 1;
  }

  if (!seoMap.includes(`"${tool.slug}": {`)) {
    seoMap = seoMap.replace(/\n};\s*$/, `\n${seoEntry(tool)}\n};\n`);
    addedSeoEntries += 1;
  }
}

fs.writeFileSync(toolsDataPath, updatedToolsData, "utf8");
fs.writeFileSync(seoMapPath, seoMap, "utf8");

console.log("Done.");
console.log("Created pages:", createdPages);
console.log("Added tools.ts entries:", addedToolEntries);
console.log("Added SEO map entries:", addedSeoEntries);
console.log("Skipped existing pages:", skipped);
