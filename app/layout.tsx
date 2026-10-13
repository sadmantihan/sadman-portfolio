import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import "./clay.css";
import "./forest.css";

const displayFont = Fredoka({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-display",
});

const bodyFont = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sadman-sami-khan.vercel.app"),

  title: {
    default: "Md Sadman Sami Khan | Data Science and ML",
    template: "%s | Md Sadman Sami Khan",
  },

  description:
    "Portfolio of Md Sadman Sami Khan, a CSE graduate interested in data science and ML with a particular FinTech focus. Explore his research and experience.",

  authors: [{ name: "Md Sadman Sami Khan" }],

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Md Sadman Sami Khan",
    title: "Md Sadman Sami Khan — Portfolio",
    description: "Data science, ML Research, and professional experience.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Md Sadman Sami Khan — Portfolio",
    description:
      "Explore my research, technical skills, experience, and articles.",
  },

  icons: {
    icon: "/favicon.svg?v=3",
    shortcut: "/favicon.svg?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
