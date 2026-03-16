import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Tools",
    template: "%s | Toolyo",
  },
  description:
    "Browse free online tools on Toolyo for text, SEO, developer workflows, converters, and generators.",
  alternates: {
    canonical: "https://toolyo-kappa.vercel.app/tools",
  },
  openGraph: {
    title: "Tools | Toolyo",
    description:
      "Browse free online tools on Toolyo for text, SEO, developer workflows, converters, and generators.",
    url: "https://toolyo-kappa.vercel.app/tools",
    siteName: "Toolyo",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Tools | Toolyo",
    description:
      "Browse free online tools on Toolyo for text, SEO, developer workflows, converters, and generators.",
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
