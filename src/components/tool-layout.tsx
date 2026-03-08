"use client";

import { useState } from "react";
import Link from "next/link";
import SiteSidebar from "@/components/site-sidebar";

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

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: title,
    applicationCategory: "DeveloperApplication",
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
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
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

            <Link href="/" className="block">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">MVP</div>
              <h1 className="text-2xl font-bold">Toolyo</h1>
            </Link>
          </div>

          <div className="rounded-full border border-zinc-200 px-4 py-2 text-sm">
            Text + Developer Tools
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <main className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
          <div className="mb-6">
            <div className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
              Tool
            </div>
            <h2 className="mt-2 text-3xl font-bold">{title}</h2>
            <p className="mt-2 text-zinc-600">{description}</p>
          </div>
          {children}
        </main>
      </section>
    </div>
  );
}
