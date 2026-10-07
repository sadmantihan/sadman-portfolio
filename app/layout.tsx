import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://sadman-sami-khan.vercel.app",
  ),

  title: {
    default:
      "Md. Sadman Sami Khan | Data Science and AI/ML",
    template: "%s | Md. Sadman Sami Khan",
  },

  description:
    "Portfolio of Md. Sadman Sami Khan, a CSE graduate interested in data science and AI/ML with a particular FinTech focus. Explore his research and experience.",

  authors: [{ name: "Md. Sadman Sami Khan" }],

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Md. Sadman Sami Khan",
    title: "Md. Sadman Sami Khan — Portfolio",
    description:
      "Data science, AI/ML Research, and professional experience.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Md. Sadman Sami Khan — Portfolio",
    description:
      "Explore my research, technical skills, experience, and articles.",
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
