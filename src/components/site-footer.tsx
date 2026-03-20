export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--border-main)] bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 py-14 md:grid-cols-2 xl:grid-cols-4">
          <div className="max-w-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-faint)]">
              Toolyo
            </div>
            <h3 className="mt-4 text-3xl font-bold leading-tight text-[var(--text-main)]">
              Simple browser-based tools
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">
              Toolyo is a growing collection of text, SEO, and developer tools
              built for speed, simplicity, and real search demand.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-faint)]">
              Navigation
            </div>
            <div className="mt-4 flex flex-col gap-3 text-[15px] text-[var(--text-soft)]">
              <a href="/">Home</a>
              <a href="/tools">All Tools</a>
              <a href="/about">About</a>
              <a href="/sitemap.html">HTML Sitemap</a>
              <a href="/sitemap.xml">XML Sitemap</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-faint)]">
              Categories
            </div>
            <div className="mt-4 flex flex-col gap-3 text-[15px] text-[var(--text-soft)]">
              <a href="/text-tools">Text Tools</a>
              <a href="/developer-tools">Developer Tools</a>
              <a href="/seo-tools">SEO Tools</a>
              <a href="/converters">Converters</a>
              <a href="/generators">Generators</a>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-faint)]">
              Legal
            </div>
            <div className="mt-4 flex flex-col gap-3 text-[15px] text-[var(--text-soft)]">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-use">Terms of Use</a>
              <p className="max-w-xs leading-7">
                Always review important output before publishing, submitting,
                or using it in production systems.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[var(--border-main)] py-6 text-sm text-[var(--text-soft)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Toolyo. All rights reserved.</p>
          <p>Built for text, SEO, developer workflows, converters, and generators.</p>
        </div>
      </div>
    </footer>
  );
}