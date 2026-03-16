import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import ToolCard from "@/components/tool-card";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "About Toolyo",
  description:
    "Learn what Toolyo is, who it is for, and why these browser-based tools are built for speed, simplicity, and everyday use.",
  alternates: {
    canonical: "https://toolyo-kappa.vercel.app/about",
  },
};

const featuredSlugs = [
  "word-counter",
  "json-formatter",
  "password-generator",
  "slug-generator",
  "url-parser",
  "meta-tag-generator",
];

export default function AboutPage() {
  const featuredTools = featuredSlugs
    .map((slug) => tools.find((tool) => tool.slug === slug))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <header className="border-b border-zinc-300 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link href="/" className="block">
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-600">About</div>
            <h1 className="text-2xl font-bold text-zinc-950">Toolyo</h1>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-zinc-300 bg-white p-8 shadow-sm">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-wide text-zinc-600">
              About Toolyo
            </div>
            <h2 className="mt-3 text-5xl font-bold leading-tight text-zinc-950">
              Simple browser-based tools built for speed and clarity
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-700">
              Toolyo is a growing collection of free online tools for text, SEO,
              developer workflows, converters, and generators. The goal is simple:
              make everyday tasks faster without unnecessary complexity.
            </p>
          </div>

          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-300 bg-zinc-50 p-6">
              <h3 className="text-2xl font-bold text-zinc-950">What Toolyo is</h3>
              <div className="mt-3 space-y-3 text-zinc-700">
                <p>
                  Toolyo is designed for people who need quick utility tools in the
                  browser. Instead of downloading software or opening bloated websites,
                  you can open one focused tool, solve one task, and move on.
                </p>
                <p>
                  The site includes text tools, developer tools, SEO helpers,
                  converters, generators, and other small utilities that are useful
                  in real workflows.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-300 bg-zinc-50 p-6">
              <h3 className="text-2xl font-bold text-zinc-950">Who it is for</h3>
              <div className="mt-3 space-y-3 text-zinc-700">
                <p>
                  Toolyo is useful for writers, students, marketers, editors,
                  developers, SEO users, and anyone who needs fast browser-based tools.
                </p>
                <p>
                  Whether you are formatting JSON, generating slugs, counting words,
                  parsing URLs, or checking metadata, the idea is the same: fewer steps,
                  clearer output, and faster results.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-zinc-300 bg-zinc-50 p-6">
            <h3 className="text-2xl font-bold text-zinc-950">Why the tools are free</h3>
            <div className="mt-3 space-y-3 text-zinc-700">
              <p>
                Toolyo is built as a free utility platform. The goal is to make useful
                tools widely available, keep the user experience simple, and support the
                project through lightweight monetization such as ads rather than paywalls.
              </p>
              <p>
                That means the site needs to stay fast, usable, and easy to navigate
                while still being practical as a real business.
              </p>
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-zinc-300 bg-zinc-50 p-6">
            <h3 className="text-2xl font-bold text-zinc-950">Trust and privacy</h3>
            <div className="mt-3 space-y-3 text-zinc-700">
              <p>
                Toolyo aims to keep things simple. Many tools work directly in the browser,
                which helps keep workflows fast and lightweight.
              </p>
              <p>
                Users should still review important output before publishing, submitting,
                or using it in production systems. Toolyo is built for utility, speed, and
                convenience rather than as a replacement for professional review.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h3 className="text-2xl font-bold text-zinc-950">Featured tools</h3>
            <p className="mt-2 max-w-3xl text-zinc-700">
              These are some of the strongest starting points on Toolyo.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featuredTools.map((tool) => (
                <ToolCard key={tool!.slug} tool={tool!} badge="Featured" />
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-zinc-300 bg-zinc-50 p-6">
            <h3 className="text-2xl font-bold text-zinc-950">Explore Toolyo</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/tools"
                className="rounded-2xl border border-zinc-300 bg-white p-4 transition hover:border-zinc-500"
              >
                <div className="font-semibold text-zinc-950">All Tools</div>
                <p className="mt-1 text-sm text-zinc-700">
                  Browse the full Toolyo tools hub.
                </p>
              </Link>

              <Link
                href="/text-tools"
                className="rounded-2xl border border-zinc-300 bg-white p-4 transition hover:border-zinc-500"
              >
                <div className="font-semibold text-zinc-950">Text Tools</div>
                <p className="mt-1 text-sm text-zinc-700">
                  Counters, cleanup, formatting, and transformations.
                </p>
              </Link>

              <Link
                href="/developer-tools"
                className="rounded-2xl border border-zinc-300 bg-white p-4 transition hover:border-zinc-500"
              >
                <div className="font-semibold text-zinc-950">Developer Tools</div>
                <p className="mt-1 text-sm text-zinc-700">
                  JSON, URLs, hashes, parsing, and other dev workflows.
                </p>
              </Link>

              <Link
                href="/seo-tools"
                className="rounded-2xl border border-zinc-300 bg-white p-4 transition hover:border-zinc-500"
              >
                <div className="font-semibold text-zinc-950">SEO Tools</div>
                <p className="mt-1 text-sm text-zinc-700">
                  Slugs, keywords, metadata, and search-focused helpers.
                </p>
              </Link>

              <Link
                href="/site-map"
                className="rounded-2xl border border-zinc-300 bg-white p-4 transition hover:border-zinc-500"
              >
                <div className="font-semibold text-zinc-950">HTML Sitemap</div>
                <p className="mt-1 text-sm text-zinc-700">
                  Browse pages and tools in one place.
                </p>
              </Link>

              <Link
                href="/privacy"
                className="rounded-2xl border border-zinc-300 bg-white p-4 transition hover:border-zinc-500"
              >
                <div className="font-semibold text-zinc-950">Privacy Policy</div>
                <p className="mt-1 text-sm text-zinc-700">
                  Read the privacy and usage details.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
