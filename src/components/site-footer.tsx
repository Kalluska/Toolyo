import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
            Toolyo
          </div>
          <h3 className="mt-2 text-xl font-bold">Simple browser-based tools</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
            Toolyo is a growing collection of text, SEO, and developer tools built
            for speed, simplicity, and real search demand.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
            Navigation
          </div>
          <div className="mt-3 space-y-2 text-sm">
            <Link href="/" className="block text-zinc-600 hover:text-zinc-900">
              Home
            </Link>
            <a
              href="/sitemap.xml"
              className="block text-zinc-600 hover:text-zinc-900"
            >
              Sitemap
            </a>
            <a
              href="mailto:kalle.etelaaho15@gmail.com?subject=Toolyo%20Feedback"
              className="block text-zinc-600 hover:text-zinc-900"
            >
              Contact
            </a>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
            Legal
          </div>
          <div className="mt-3 space-y-2 text-sm text-zinc-600">
            <p>
              Privacy Policy: Toolyo does not require user accounts and is designed
              to keep tools simple and lightweight.
            </p>
            <p>
              Terms of Use: Toolyo is provided as-is for general utility purposes.
            </p>
            <p>
              Always review important output before publishing, submitting, or using
              it in production systems.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Toolyo. All rights reserved.</div>
          <div>Built for text, SEO, and developer workflows.</div>
        </div>
      </div>
    </footer>
  );
}
