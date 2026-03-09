import Link from "next/link";
import SiteFooter from "@/components/site-footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="block">
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Legal</div>
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
          <h2 className="text-4xl font-bold">Privacy Policy</h2>
          <div className="mt-6 space-y-4 text-zinc-700">
            <p>
              Toolyo is designed to be simple and lightweight. Most tools are intended to
              work directly in the browser without requiring user accounts.
            </p>
            <p>
              Toolyo does not intentionally collect unnecessary personal information through
              normal tool usage. If you choose to contact Toolyo through a form, the details
              you submit may be used to respond to your message or improve the service.
            </p>
            <p>
              Third-party services such as hosting providers, analytics tools, or form
              services may process limited technical or submission-related data as part of
              normal site operation.
            </p>
            <p>
              By using Toolyo, you understand that external services may have their own
              privacy practices. Review those services separately when relevant.
            </p>
            <p>
              If privacy practices change significantly in the future, this page may be
              updated accordingly.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
