import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import { Tool } from "@/data/tools";

type CategoryPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  tools: Tool[];
};

export default function CategoryPage({
  eyebrow,
  title,
  description,
  tools,
}: CategoryPageProps) {
  const featured = tools.slice(0, 6);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="block">
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              {eyebrow}
            </div>
            <h1 className="text-2xl font-bold">Toolyo</h1>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-zinc-600">
            {description}
          </p>

          <section className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-2xl font-bold">About these {title.toLowerCase()}</h3>
            <div className="mt-3 space-y-3 text-zinc-700">
              <p>
                This category page collects the main {title.toLowerCase()} available on Toolyo.
                These tools are built for speed, simplicity, and direct browser-based use.
              </p>
              <p>
                Instead of using heavy software, you can open one focused tool, solve one task,
                and move on quickly. This makes Toolyo useful for everyday workflows and fast checks.
              </p>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-2xl font-bold">Featured in this category</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition hover:border-zinc-400"
                >
                  <div className="text-sm text-zinc-500">{tool.category}</div>
                  <div className="mt-1 text-xl font-semibold">{tool.name}</div>
                  <p className="mt-2 text-sm text-zinc-600">{tool.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-2xl font-bold">How to use these tools</h3>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-700">
              <li>Choose the tool that matches your task.</li>
              <li>Paste or type your input into the tool page.</li>
              <li>Copy the result and continue your workflow.</li>
            </ol>
          </section>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
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
      </main>

      <SiteFooter />
    </div>
  );
}
