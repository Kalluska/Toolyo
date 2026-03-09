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
