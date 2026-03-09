import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About Toolyo",
  description:
    "Learn what Toolyo is, who it is for, and why it exists as a browser-based collection of text, SEO, and developer tools.",
  alternates: {
    canonical: "https://toolyo-kappa.vercel.app/about",
  },
  openGraph: {
    title: "About Toolyo",
    description:
      "Learn what Toolyo is, who it is for, and why it exists as a browser-based collection of text, SEO, and developer tools.",
    url: "https://toolyo-kappa.vercel.app/about",
    siteName: "Toolyo",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="block">
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">About</div>
            <h1 className="text-2xl font-bold">Toolyo</h1>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
          <h2 className="text-4xl font-bold">About Toolyo</h2>
          <div className="mt-6 space-y-4 text-zinc-700">
            <p>
              Toolyo is a browser-based collection of text, SEO, and developer tools
              built for speed, simplicity, and practical everyday use.
            </p>
            <p>
              The idea behind Toolyo is simple: one tool, one task, one clear result.
              Instead of heavy software or complicated workflows, Toolyo focuses on fast,
              lightweight utilities that solve specific problems directly in the browser.
            </p>
            <p>
              Toolyo is designed for writers, students, marketers, developers, and anyone
              who wants quick utility tools without creating accounts or installing extra apps.
            </p>
            <p>
              The platform is growing over time with new tools, better usability, and
              stronger SEO-focused structure so people can find exactly the tool they need.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
