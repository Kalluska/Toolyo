export function getToolIcon(category?: string, slug?: string) {
  const s = (slug || "").toLowerCase();
  const c = (category || "").toLowerCase();

  if (s.includes("json")) return "🧾";
  if (s.includes("password")) return "🔐";
  if (s.includes("slug")) return "🔗";
  if (s.includes("url")) return "🌐";
  if (s.includes("hash")) return "🔑";
  if (s.includes("timestamp")) return "⏱️";
  if (s.includes("keyword")) return "🔎";
  if (s.includes("meta")) return "🏷️";
  if (s.includes("word")) return "🔢";
  if (s.includes("character")) return "🔠";

  if (c.includes("developer")) return "💻";
  if (c.includes("seo")) return "📈";
  if (c.includes("text")) return "📝";
  if (c.includes("converter")) return "🔄";

  return "🛠️";
}
