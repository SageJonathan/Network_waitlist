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
  title: "Humanae – Networking that doesn't feel like work",
  description:
    "Meet amazing people doing things you actually love. Join the waitlist for our Calgary launch.",
  keywords: ["Humanae", "networking", "Calgary", "community", "waitlist"],
  authors: [{ name: "Humanae" }],
  openGraph: {
    title: "Humanae – Networking that doesn't feel like work",
    description:
      "Meet amazing people doing things you actually love. Join the waitlist for our Calgary launch.",
    url: baseUrl,
    siteName: "Humanae",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Humanae – Networking that doesn't feel like work",
    description:
      "Meet amazing people doing things you actually love. Join the waitlist for our Calgary launch.",
  },
  icons: {
    icon: "/Favicon.png",
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
