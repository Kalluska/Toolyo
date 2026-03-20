import CommandPalette from "@/components/command-palette";
import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/google-analytics";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://toolyo-kappa.vercel.app"),
  title: {
    default: "Toolyo – Free Text, SEO & Developer Tools",
    template: "%s | Toolyo",
  },
  description:
    "Toolyo is a free collection of text, SEO, and developer tools built for speed, simplicity, and real search demand.",
  applicationName: "Toolyo",
  keywords: [
    "text tools",
    "seo tools",
    "developer tools",
    "word counter",
    "character counter",
    "json formatter",
    "slug generator",
    "password generator",
    "free online tools",
  ],
  openGraph: {
    title: "Toolyo – Free Text, SEO & Developer Tools",
    description:
      "Free browser-based tools for text, SEO, and developer workflows.",
    url: "https://toolyo-kappa.vercel.app",
    siteName: "Toolyo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toolyo – Free Text, SEO & Developer Tools",
    description:
      "Free browser-based tools for text, SEO, and developer workflows.",
  },
  alternates: {
    canonical: "https://toolyo-kappa.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          id="toolyo-theme-init"
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    var root = document.documentElement;
    var saved = localStorage.getItem("theme");
    var theme = saved === "dark" || saved === "light"
      ? saved
      : "light";

    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.style.colorScheme = theme;
  } catch (e) {}
})();
            `,
          }}
        />
        <script
          id="toolyo-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Toolyo",
              url: "https://toolyo-kappa.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://toolyo-kappa.vercel.app/tools/{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="theme"
        >
          <GoogleAnalytics />
          <CommandPalette />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}