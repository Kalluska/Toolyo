"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { tools } from "@/data/tools";
import SiteSidebar from "@/components/site-sidebar";
import SiteFooter from "@/components/site-footer";

const categoryIntro: Record<string, { title: string; description: string }> = {
  Text: {
    title: "Text tools for writing, cleanup, and formatting",
    description:
      "These text tools help with counting, cleaning, sorting, transforming, and restructuring text. They are useful for writers, students, marketers, editors, and anyone who needs quick browser-based text processing.",
  },
  SEO: {
    title: "SEO tools for content and metadata work",
    description:
      "These SEO tools help with slugs, keyword checks, and metadata-related tasks. They are useful for improving content structure, preparing pages for publishing, and working faster on search-focused content.",
  },
  Developer: {
    title: "Developer tools for encoding, JSON, and text processing",
    description:
      "These developer tools help with common technical tasks such as formatting JSON, encoding and decoding strings, normalizing text, and preparing structured content. They are built for speed and simple browser-based use.",
  },
};

const featuredSlugs = ["word-counter", "character-counter", "json-formatter"];

const categoryCards = [
  {
    title: "Text Tools",
    href: "/text-tools",
    description:
      "Browse text tools for counting, formatting, cleaning, trimming, sorting, and restructuring text.",
  },
  {
    title: "Developer Tools",
    href: "/developer-tools",
    description:
      "Browse developer tools for formatting, validation, parsing, generation, and common technical workflows.",
  },
  {
    title: "SEO Tools",
    href: "/seo-tools",
    description:
      "Browse SEO tools for slugs, keyword checks, metadata support, and search-focused content work.",
  },
  {
    title: "Converters",
    href: "/converters",
    description:
      "Browse converters for text, encoding, timestamps, structured data, URLs, and technical formats.",
  },
  {
    title: "Generators",
    href: "/generators",
    description:
      "Browse generators for passwords, UUIDs, random values, lorem ipsum, gradients, and helper data.",
  },
];

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const groupedTools = useMemo(() => {
    return tools.reduce<Record<string, typeof tools>>((acc, tool) => {
      if (!acc[tool.category]) acc[tool.category] = [];
      acc[tool.category].push(tool);
      return acc;
    }, {});
  }, []);

  const featuredTools = tools.filter((tool) => featuredSlugs.includes(tool.slug));

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        search={search}
        setSearch={setSearch}
      />

      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl border border-zinc-200 p-3 transition hover:border-zinc-400"
              aria-label="Open tools menu"
            >
              <div className="flex w-5 flex-col gap-1">
                <span className="h-0.5 w-full bg-zinc-900" />
                <span className="h-0.5 w-full bg-zinc-900" />
                <span className="h-0.5 w-full bg-zinc-900" />
              </div>
            </button>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">MVP</div>
              <h1 className="text-2xl font-bold">Toolyo</h1>
            </div>
          </div>

          <div className="rounded-full border border-zinc-200 px-4 py-2 text-sm">
            Text + Developer Tools
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
              Free Online Utility Platform
            </div>
            <h2 className="mt-3 text-5xl font-bold leading-tight">
              Free text, SEO, and developer tools in one place
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Toolyo is a growing collection of browser-based tools for text cleanup,
              counting, formatting, SEO tasks, and developer workflows. Each tool is
              built to solve one problem quickly, clearly, and without unnecessary complexity.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Browse all tools
              </button>
              <Link
                href="/tools/word-counter"
                className="rounded-2xl border border-zinc-200 px-5 py-3 text-sm font-semibold transition hover:border-zinc-400"
              >
                Try Word Counter
              </Link>
            </div>
          </div>

          <section className="mt-10">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-400">
              Featured tools
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {featuredTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition hover:border-zinc-400"
                >
                  <div className="text-sm text-zinc-500">{tool.category}</div>
                  <div className="mt-1 text-2xl font-bold">{tool.name}</div>
                  <p className="mt-2 text-sm text-zinc-600">{tool.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-400">
              Browse by category
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {categoryCards.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition hover:border-zinc-400"
                >
                  <div className="text-xl font-bold">{category.title}</div>
                  <p className="mt-2 text-sm text-zinc-600">{category.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-2xl font-bold">Why Toolyo exists</h3>
            <div className="mt-3 max-w-4xl space-y-3 text-zinc-700">
              <p>
                Toolyo is built around a simple idea: small utility tools should be fast,
                easy to use, and available instantly in the browser.
              </p>
              <p>
                Instead of downloading apps or searching through bloated websites, you can
                open one focused tool, solve one problem, and move on.
              </p>
            </div>
          </section>

          <div className="mt-10 space-y-10">
            {Object.entries(groupedTools).map(([category, categoryTools]) => {
              const intro = categoryIntro[category];

              return (
                <div key={category}>
                  <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-400">
                    {category}
                  </div>

                  {intro && (
                    <div className="mb-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                      <h3 className="text-2xl font-bold">{intro.title}</h3>
                      <p className="mt-2 max-w-3xl text-zinc-600">{intro.description}</p>
                    </div>
                  )}

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {categoryTools.map((tool) => (
                      <Link
                        key={tool.slug}
                        href={`/tools/${tool.slug}`}
                        className="rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-400"
                      >
                        <div className="text-sm text-zinc-500">{tool.category}</div>
                        <div className="mt-1 text-xl font-semibold">{tool.name}</div>
                        <p className="mt-2 text-sm text-zinc-600">{tool.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
