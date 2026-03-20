"use client";

import { useState } from "react";
import Link from "next/link";
import { getToolBySlug, getCategoryPath } from "@/lib/tool-helpers";
import SiteSidebar from "@/components/site-sidebar";
import SiteFooter from "@/components/site-footer";
import ToolActionBar from "@/components/tool-action-bar";
import OutputActionBar from "@/components/output-action-bar";
import AdSlot from "@/components/ad-slot";
import ThemeToggle from "@/components/theme-toggle";

type ToolLayoutProps = {
  currentSlug: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function ToolLayout({
  currentSlug,
  title,
  description,
  children,
}: ToolLayoutProps) {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toolInfo = getToolBySlug(currentSlug);
  const categoryPath = getCategoryPath(toolInfo?.category);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: title,
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: toolInfo?.category || "Utilities",
    operatingSystem: "All",
    description,
    url: `https://toolyo-kappa.vercel.app/tools/${currentSlug}`,
    isAccessibleForFree: true,
    author: {
      "@type": "Organization",
      name: "Toolyo",
    },
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <SiteSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        search={search}
        setSearch={setSearch}
        currentSlug={currentSlug}
      />

      <header className="border-b border-[var(--border-main)] bg-[var(--bg-elevated)]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
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

            <Link href="/" className="block">
              <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--text-faint)]">
                MVP
              </div>
              <h1 className="text-[26px] font-bold leading-8 text-[var(--text-main)]">
                Toolyo
              </h1>
            </Link>
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
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-6">
            <div>
              <AdSlot label="Tool After Header" minHeightClass="min-h-[90px]" />
            </div>

            <main
              id="toolyo-tool-root"
              className="rounded-[32px] border border-[var(--border-main)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-lg)]"
            >
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  {categoryPath ? (
                    <Link
                      href={categoryPath}
                      className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-faint)]"
                    >
                      {toolInfo?.category} Tools
                    </Link>
                  ) : (
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-faint)]">
                      Tool
                    </div>
                  )}

                  <span className="text-[var(--text-faint)]">•</span>
                  <span className="text-xs text-[var(--text-faint)]">Updated weekly</span>
                </div>

                <h2 className="mt-2 text-3xl font-bold text-[var(--text-main)]">
                  {title}
                </h2>

                <p className="mt-2 max-w-3xl text-[var(--text-soft)]">
                  {description}
                </p>

                {categoryPath ? (
                  <div className="mt-3">
                    <Link
                      href={categoryPath}
                      className="text-sm text-[var(--text-soft)] underline decoration-dotted underline-offset-4"
                    >
                      Browse more {toolInfo?.category?.toLowerCase()} tools
                    </Link>
                  </div>
                ) : null}
              </div>

              <ToolActionBar currentSlug={currentSlug} />
              <OutputActionBar />

              {children}
            </main>

            <div>
              <AdSlot label="Tool After Tool" minHeightClass="min-h-[110px]" />
            </div>

            <div>
              <AdSlot label="Tool Bottom Banner" minHeightClass="min-h-[110px]" />
            </div>
          </div>

          <aside className="hidden xl:block">
            <div className="sticky top-6">
              <AdSlot label="Tool Right Rail" minHeightClass="min-h-[600px]" />
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}