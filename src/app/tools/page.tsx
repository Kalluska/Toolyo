import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "All Tools",
  description: "Browse all Toolyo tools by category, including text tools, developer tools, SEO tools, converters, and generators.",
  alternates: {
    canonical: "https://toolyo-kappa.vercel.app/tools",
  },
};

const categoryLinks = [
  { key: "Text", href: "/text-tools", title: "Text Tools", description: "Counting, cleanup, formatting, sorting, trimming, and text transformations." },
  { key: "Developer", href: "/developer-tools", title: "Developer Tools", description: "Formatting, validation, parsing, encoding, hashing, and common dev utilities." },
  { key: "SEO", href: "/seo-tools", title: "SEO Tools", description: "Keywords, slugs, metadata, tags, and search-focused content helpers." },
  { key: "Converters", href: "/converters", title: "Converters", description: "Format conversions for text, encoding, timestamps, colors, and structured data." },
  { key: "Generators", href: "/generators", title: "Generators", description: "Passwords, UUIDs, random values, lorem ipsum, gradients, and more." },
];

function countToolsByCategory(category: string) {
  if (category === "Converters") {
    const keywords = [
      "to ",
      "converter",
      "decode",
      "encode",
      "hex",
      "binary",
      "ascii",
      "morse",
      "timestamp",
      "rgb",
      "hsl",
      "yaml",
      "xml",
      "base32",
      "base64",
      "url",
    ];
    return tools.filter((tool) => {
      const name = tool.name.toLowerCase();
      return keywords.some((keyword) => name.includes(keyword));
    }).length;
  }

  if (category === "Generators") {
    const keywords = [
      "generator",
      "current timestamp",
      "password",
      "uuid",
      "random",
      "lorem ipsum",
      "gradient",
      "query string builder",
    ];
    return tools.filter((tool) => {
      const name = tool.name.toLowerCase();
      return keywords.some((keyword) => name.includes(keyword));
    }).length;
  }

  return tools.filter((tool) => tool.category === category).length;
}

export default function ToolsHubPage() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <header className="border-b border-zinc-300 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link href="/" className="block">
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-700">Hub</div>
            <h1 className="text-2xl font-bold">Toolyo Tools</h1>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
              All Categories
            </div>
            <h2 className="mt-3 text-5xl font-bold leading-tight">
              Browse all Toolyo tools by category
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-700">
              Toolyo organizes its tools into focused categories so you can find the right utility
              faster. Browse text tools, developer tools, SEO tools, converters, and generators.
            </p>
          </div>

          <section className="mt-10">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {categoryLinks.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="rounded-2xl border border-zinc-300 bg-zinc-100 p-5 transition hover:border-zinc-500"
                >
                  <div className="text-sm text-zinc-700">
                    {countToolsByCategory(category.key)} tools
                  </div>
                  <div className="mt-1 text-2xl font-bold">{category.title}</div>
                  <p className="mt-2 text-sm text-zinc-700">{category.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-zinc-300 bg-zinc-100 p-6">
            <h3 className="text-2xl font-bold">Why use the tools hub?</h3>
            <div className="mt-3 space-y-3 text-zinc-700">
              <p>
                The Toolyo tools hub helps you discover tools faster, especially when you are not
                searching for one exact tool name.
              </p>
              <p>
                It also improves internal linking across the site, which helps users navigate and
                helps search engines understand the structure of Toolyo more clearly.
              </p>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
