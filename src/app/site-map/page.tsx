import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "HTML Sitemap",
  description: "Browse all Toolyo pages, categories, and tools in one HTML sitemap.",
  alternates: {
    canonical: "https://toolyo-kappa.vercel.app/site-map",
  },
};

export default function HtmlSitemapPage() {
  const grouped = tools.reduce<Record<string, typeof tools>>((acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = [];
    acc[tool.category].push(tool);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link href="/" className="block">
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Navigation</div>
            <h1 className="text-2xl font-bold">Toolyo HTML Sitemap</h1>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
          <h2 className="text-4xl font-bold">All Toolyo pages</h2>
          <p className="mt-4 max-w-3xl text-zinc-600">
            Browse all main pages, category pages, and tool pages in one place.
          </p>

          <section className="mt-8">
            <h3 className="text-2xl font-bold">Main pages</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/privacy", "Privacy Policy"],
                ["/terms", "Terms of Use"],
                ["/text-tools", "Text Tools"],
                ["/developer-tools", "Developer Tools"],
                ["/seo-tools", "SEO Tools"],
                ["/converters", "Converters"],
                ["/generators", "Generators"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-2xl border border-zinc-200 p-4 transition hover:border-zinc-400"
                >
                  <div className="font-semibold">{label}</div>
                  <div className="mt-1 text-sm text-zinc-500">{href}</div>
                </Link>
              ))}
            </div>
          </section>

          <div className="mt-10 space-y-10">
            {Object.entries(grouped).map(([category, categoryTools]) => (
              <section key={category}>
                <h3 className="text-2xl font-bold">{category}</h3>
                <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {categoryTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="rounded-2xl border border-zinc-200 p-4 transition hover:border-zinc-400"
                    >
                      <div className="font-semibold">{tool.name}</div>
                      <div className="mt-1 text-sm text-zinc-500">{tool.description}</div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
