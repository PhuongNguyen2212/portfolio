import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/utils";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--outfit",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "phuong.dev — Tran Dinh Phuong Nguyen",
    template: "%s · phuong.dev",
  },
  description:
    "Personal portfolio of Nguyen Tran Dinh Phuong — a developer crafting cinematic, performant web experiences with Next.js, TypeScript and Tailwind.",
  keywords: [
    "Nguyen Tran Dinh Phuong",
    "phuong.dev",
    "portfolio",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "frontend developer",
  ],
  authors: [{ name: "Tran Dinh Phuong Nguyen" }],
  openGraph: {
    title: "phuong.dev — Tran Dinh Phuong Nguyen",
    description:
      "Cinematic portfolio crafted with Next.js, TypeScript and Tailwind.",
    url: SITE_URL,
    siteName: "phuong.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "phuong.dev",
    description: "Cinematic portfolio crafted with Next.js and Tailwind.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable}`}
    >
      <body className="min-h-screen bg-film-black text-white antialiased grain">
        <Nav />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
