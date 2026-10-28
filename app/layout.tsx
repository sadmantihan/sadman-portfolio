import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-display",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.GOOGLE_SITE_VERIFICATION,
      }
    : undefined,

  title: {
    default: "Md Sadman Sami Khan | Data Science and ML Enthusiast",
    template: "%s | Md Sadman Sami Khan",
  },

  description:
    "Portfolio of Md Sadman Sami Khan, a CSE graduate interested in data science and ML. Explore his research and experience.",

  authors: [{ name: "Md Sadman Sami Khan" }],

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Md Sadman Sami Khan",
    title: "Md Sadman Sami Khan — Portfolio",
    description: "Data science, ML Research, and professional experience.",
    url: "/",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Md Sadman Sami Khan — Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Md Sadman Sami Khan — Portfolio",
    description:
      "Explore my research, technical skills, experience, and articles.",
    images: [
      {
        url: "/twitter-image.png",
        alt: "Md Sadman Sami Khan — Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg?v=4",
    shortcut: "/favicon.svg?v=4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
