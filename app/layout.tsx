import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./clay.css";
import "./forest.css";
import "./spacing.css";

const displayFont = Fredoka({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-display",
});

const bodyFont = localFont({
  src: "./fonts/Nunito-Variable.ttf",
  weight: "400 700",
  style: "normal",
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sadman-sami-khan.vercel.app"),

    alternates: {
    canonical: "/",
  },

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
