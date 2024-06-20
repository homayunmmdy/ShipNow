import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import SiteConfig from "@/app/config/site";
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: SiteConfig.name,
  description: SiteConfig.description.slice(0, 160),
  keywords: SiteConfig.keywords,
  robots: SiteConfig.robots,
  authors: SiteConfig.authors,
  verification: {
    google: "gTVvXWgVqXKU6AfSRkuQa4O39VGzRS9zcA4y9eT3uUo",
  },
  openGraph: {
    title: SiteConfig.name,
    description: SiteConfig.description.slice(0, 160),
    siteName: SiteConfig.siteName,
    authors: SiteConfig.author,
    images: {
      url: `${SiteConfig.siteURL}/logo.png`,
      secureUrl: `${SiteConfig.siteURL}/logo.png`,
      width: 1200,
      height: 630,
      alt: `Preview image for ${SiteConfig.name}`,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: `@${SiteConfig.name}`,
    description: SiteConfig.description.slice(0, 160),
    creator: `@${SiteConfig.authorID}`,
    images: {
      url: `${SiteConfig.siteURL}/logo.png`,
      alt: `Preview image for ${SiteConfig.name}`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SiteConfig.lang} dir={SiteConfig.dir}>
      <body className={`${roboto.className} font-normal`}>
        <h1 className="hidden">{SiteConfig.name}</h1>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
