import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const baseUrl ="https://humanae.co";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Humanae – Networking without the work",
  description:
    "Meet amazing people doing things you actually love.",
  keywords: ["Humanae", "networking", "Calgary", "community", "events", "clubs", "matches", "workshops", "warm introductions"],
  authors: [{ name: "Humanae" }],
  openGraph: {
    title: "Humanae – Networking without the work",
    description:
      "Meet amazing people doing things you actually love.",
    url: baseUrl,
    siteName: "Humanae",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Humanae – Networking without the work",
    description:
      "Meet amazing people doing things you actually love.",
  },
  icons: {
    icon: [{ url: "/Favicon.png", type: "image/png" }],
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
