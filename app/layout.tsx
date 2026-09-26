import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md. Sadman Sami Khan | Data, AI & Development",
  description: "Portfolio of Md. Sadman Sami Khan: data analytics, knowledge graph AI research, and full-stack development.",
  other: {
    "codex-preview": "development",
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
