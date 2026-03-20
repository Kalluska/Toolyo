"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { tools } from "@/data/tools";
import SiteSidebar from "@/components/site-sidebar";
import SiteFooter from "@/components/site-footer";
import HeroSearch from "@/components/hero-search";
import PopularToolsSection from "@/components/popular-tools-section";
import { popularToolSlugs, seoFavoriteSlugs, developerFavoriteSlugs } from "@/lib/popular-tools";
import ToolCard from "@/components/tool-card";
import AdSlot from "@/components/ad-slot";
import ThemeToggle from "@/components/theme-toggle";

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
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">
      <SiteSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        search={search}
        setSearch={setSearch}
      />

      <header className="border-b border-[var(--border-main)] bg-[var(--bg-elevated)]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border-main)] bg-[var(--bg-elevated)] shadow-sm"
              aria-label="Open tools menu"
            >
              <div className="flex w-5 flex-col gap-1">
                <span className="h-0.5 w-full rounded-full bg-[var(--text-main)]" />
                <span className="h-0.5 w-full rounded-full bg-[var(--text-main)]" />
                <span className="h-0.5 w-full rounded-full bg-[var(--text-main)]" />
              </div>
            </button>

            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--text-faint)]">
                MVP
              </div>
              <h1 className="text-[26px] font-bold leading-8 text-[var(--text-main)]">
                Toolyo
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full border border-[var(--border-main)] bg-[var(--bg-soft)] px-4 py-2 text-sm text-[var(--text-soft)] shadow-sm">
              <span>Text + Developer Tools</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-10">
          <AdSlot label="Home Top Banner" minHeightClass="min-h-[96px]" />
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-[var(--border-main)] bg-[var(--bg-elevated)] p-8 shadow-[var(--shadow-lg)]">
              <div className="max-w-4xl">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text-faint)]">
                  Free Online Utility Platform
                </div>

                <h2 className="mt-4 text-5xl font-bold leading-tight text-[var(--text-main)]">
                  Free text, SEO, and developer tools in one place
                </h2>

                <p className="mt-4 text-lg leading-8 text-[var(--text-soft)]">
                  Toolyo is a growing collection of browser-based tools for text cleanup,
                  counting, formatting, SEO tasks, and developer workflows. Each tool is
                  built to solve one problem quickly, clearly, and without unnecessary
                  complexity.
                </p>

                <div className="mt-7 flex flex-col gap-3 md:flex-row md:items-center">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="rounded-2xl border border-transparent bg-[var(--button-bg)] px-5 py-3 text-sm font-semibold text-[var(--button-text)] shadow-md"
                  >
                    Browse all tools
                  </button>

                  <Link
                    href="/tools/word-counter"
                    className="rounded-2xl border border-[var(--border-main)] bg-[var(--button-secondary-bg)] px-5 py-3 text-sm font-semibold text-[var(--button-secondary-text)] shadow-sm"
                  >
                    Try Word Counter
                  </Link>

                  <div className="w-full md:flex-1">
                    <HeroSearch />
                  </div>
                </div>
              </div>

              <section className="mt-10">
                <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--text-faint)]">
                  Featured tools
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {featuredTools.map((tool) => (
                    <ToolCard key={tool.slug} tool={tool} badge="Featured" />
                  ))}
                </div>
              </section>

              <div className="mt-8">
                <AdSlot label="Home Mid Banner" minHeightClass="min-h-[110px]" />
              </div>

              <PopularToolsSection
                title="Popular tools"
                description="Start with the most useful and most likely-to-be-used tools on Toolyo."
                slugs={popularToolSlugs}
              />

              <PopularToolsSection
                title="SEO favorites"
                description="A focused shortlist of useful SEO tools for content and metadata workflows."
                slugs={seoFavoriteSlugs}
              />

              <PopularToolsSection
                title="Developer favorites"
                description="Useful developer tools for formatting, parsing, and secure workflows."
                slugs={developerFavoriteSlugs}
              />

              <section className="mt-10">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-sm font-semibold uppercase tracking-wide text-[var(--text-faint)]">
                    Browse by category
                  </div>
                  <Link
                    href="/tools"
                    className="text-sm text-[var(--text-soft)] underline decoration-dotted underline-offset-4"
                  >
                    View all tools
                  </Link>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                  {categoryCards.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="rounded-2xl border border-[var(--border-main)] bg-[var(--bg-soft)] p-5 shadow-sm"
                    >
                      <div className="text-xl font-bold text-[var(--text-main)]">
                        {category.title}
                      </div>
                      <p className="mt-2 text-sm text-[var(--text-soft)]">
                        {category.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>

              <div className="mt-10">
                <AdSlot label="Home Lower Banner" minHeightClass="min-h-[110px]" />
              </div>

              <div className="mt-10 space-y-10">
                {Object.entries(groupedTools).map(([category, categoryTools]) => {
                  const intro = categoryIntro[category];

                  return (
                    <div key={category}>
                      <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--text-faint)]">
                        {category}
                      </div>

                      {intro && (
                        <div className="mb-5 rounded-2xl border border-[var(--border-main)] bg-[var(--bg-soft)] p-5">
                          <h3 className="text-2xl font-bold text-[var(--text-main)]">
                            {intro.title}
                          </h3>
                          <p className="mt-2 max-w-3xl text-[var(--text-soft)]">
                            {intro.description}
                          </p>
                        </div>
                      )}

                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {categoryTools.map((tool) => (
                          <ToolCard key={tool.slug} tool={tool} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="hidden xl:block">
            <div className="sticky top-6">
              <AdSlot label="Home Right Rail" minHeightClass="min-h-[600px]" />
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}