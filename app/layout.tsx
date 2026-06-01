import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Kyle Marcy",
    template: "%s | Kyle Marcy",
  },

  description:
    "Senior web developer with experience leading projects, building maintainable software, and modernizing web applications with TypeScript, React, and Next.js.",

  icons: {
    icon: "/placeholder/placeholder-96.svg",
  },

  openGraph: {
    title: "Kyle Marcy",
    description:
      "Senior web developer with experience leading projects, building maintainable software, and modernizing web applications with TypeScript, React, and Next.js.",

    url: "https://your-domain.com",
    siteName: "Kyle Marcy",

    images: [
      {
        url: "/placeholder/placeholder.svg",
        width: 600,
        height: 600,
        alt: "Kyle Marcy Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Kyle Marcy",

    description:
      "Senior web developer with experience leading projects, building maintainable software, and modernizing web applications with TypeScript, React, and Next.js.",

    images: ["/placeholder/placeholder.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
