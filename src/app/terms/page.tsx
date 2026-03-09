import Link from "next/link";
import SiteFooter from "@/components/site-footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="block">
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Legal</div>
            <h1 className="text-2xl font-bold">Terms of Use</h1>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
          <h2 className="text-4xl font-bold">Terms of Use</h2>
          <div className="mt-6 space-y-4 text-zinc-700">
            <p>
              Toolyo is provided as-is for general utility purposes. While the tools are
              built to be useful and practical, no guarantee is made that results will
              always be error-free, complete, or suitable for every situation.
            </p>
            <p>
              You are responsible for reviewing outputs before publishing, submitting,
              storing, or using them in personal, academic, technical, or commercial work.
            </p>
            <p>
              Toolyo may be updated, expanded, modified, or removed at any time without notice.
            </p>
            <p>
              By using Toolyo, you agree that the service is used at your own discretion and risk.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
