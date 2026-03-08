const fs = require("fs");
const path = require("path");

function toComponentName(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("") + "Page";
}

function escapeSingleQuotes(str) {
  return str.replace(/'/g, "\\'");
}

const [, , slug, ...rest] = process.argv;

if (!slug) {
  console.error("Usage: node scripts/generate-tool.js <slug> <Title> | <Category> | <Description>");
  process.exit(1);
}

const joined = rest.join(" ").trim();
const parts = joined.split("|").map((s) => s.trim());

if (parts.length < 3) {
  console.error('Usage example: node scripts/generate-tool.js remove-punctuation "Remove Punctuation | Text | Remove punctuation from text instantly."');
  process.exit(1);
}

const [title, category, description] = parts;
const componentName = toComponentName(slug);

const templatePath = path.join(process.cwd(), "src", "templates", "tool-page.txt");
const targetDir = path.join(process.cwd(), "src", "app", "tools", slug);
const targetFile = path.join(targetDir, "page.tsx");
const toolsDataPath = path.join(process.cwd(), "src", "data", "tools.ts");

if (!fs.existsSync(templatePath)) {
  console.error("Template file not found:", templatePath);
  process.exit(1);
}

if (fs.existsSync(targetFile)) {
  console.error("Tool page already exists:", targetFile);
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });

let template = fs.readFileSync(templatePath, "utf8");
template = template
  .replace(/__COMPONENT_NAME__/g, componentName)
  .replace(/__SLUG__/g, slug)
  .replace(/__TITLE__/g, title)
  .replace(/__DESCRIPTION__/g, description);

fs.writeFileSync(targetFile, template, "utf8");

if (!fs.existsSync(toolsDataPath)) {
  console.error("tools.ts not found:", toolsDataPath);
  process.exit(1);
}

let toolsData = fs.readFileSync(toolsDataPath, "utf8");

const entry = `
  {
    slug: "${slug}",
    name: "${title}",
    category: "${category}",
    description: "${description}",
    seoTitle: "${title}",
    seoDescription: "${description}",
  },`;

const marker = "export const tools: Tool[] = [";
const markerIndex = toolsData.indexOf(marker);

if (markerIndex === -1) {
  console.error("Could not find tools array in tools.ts");
  process.exit(1);
}

const insertIndex = toolsData.indexOf("];", markerIndex);
if (insertIndex === -1) {
  console.error("Could not find end of tools array in tools.ts");
  process.exit(1);
}

toolsData =
  toolsData.slice(0, insertIndex) +
  entry +
  "\n" +
  toolsData.slice(insertIndex);

fs.writeFileSync(toolsDataPath, toolsData, "utf8");

console.log(`Created tool: ${slug}`);
console.log(`Page: ${targetFile}`);
console.log(`Added entry to: ${toolsDataPath}`);
