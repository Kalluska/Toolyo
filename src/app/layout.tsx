import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://toolyo.com"),
  title: {
    default: "Toolyo",
    template: "%s | Toolyo",
  },
  description:
    "Simple text and developer tools built for speed, utility, and search demand.",
  applicationName: "Toolyo",
  keywords: [
    "text tools",
    "developer tools",
    "word counter",
    "character counter",
    "json formatter",
    "remove line breaks",
    "base64 encode decode",
    "url encode decode",
  ],
  openGraph: {
    title: "Toolyo",
    description:
      "Simple text and developer tools built for speed, utility, and search demand.",
    url: "https://toolyo.com",
    siteName: "Toolyo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toolyo",
    description:
      "Simple text and developer tools built for speed, utility, and search demand.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
