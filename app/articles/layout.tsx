"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { articles } from "./article-list";
import "./articles.css";

type Heading = {
  id: string;
  text: string;
  level: number;
};

export default function ArticlesLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);

  const [dark, setDark] = useState(false);
  const [headings, setHeadings] = useState<Heading[]>([]);

  const categories = [
    ...new Set(articles.map((article) => article.category)),
  ];

  const currentArticle = articles.find(
    (article) => pathname === `/articles/${article.slug}`,
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const isDark = savedTheme === "dark";

    setDark(isDark);
    document.documentElement.dataset.theme = isDark
      ? "dark"
      : "light";
  }, []);

  useEffect(() => {
    const elements = Array.from(
      contentRef.current?.querySelectorAll("h2, h3") ?? [],
    );

    const usedIds = new Set<string>();

    const nextHeadings = elements.map((element, index) => {
      const text =
        element.textContent?.trim() || `Section ${index + 1}`;

      const baseId =
        element.id ||
        text
          .toLowerCase()
          .replace(/[^\p{L}\p{N}]+/gu, "-")
          .replace(/^-|-$/g, "") ||
        `section-${index + 1}`;

      let id = baseId;
      let suffix = 2;

      while (usedIds.has(id)) {
        id = `${baseId}-${suffix++}`;
      }

      usedIds.add(id);
      element.id = id;

      return {
        id,
        text,
        level: Number(element.tagName.slice(1)),
      };
    });

    setHeadings(nextHeadings);
  }, [pathname, children]);

  const toggleTheme = () => {
    const nextDark = !dark;
    const theme = nextDark ? "dark" : "light";

    setDark(nextDark);
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  };

  const articleNavigation = (
    <>
      <p className="docs-label">ARTICLES</p>

      {categories.map((category) => (
        <div className="docs-group" key={category}>
          <h2>{category}</h2>

          {articles
            .filter((article) => article.category === category)
            .map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                aria-current={
                  pathname === `/articles/${article.slug}`
                    ? "page"
                    : undefined
                }
              >
                {article.title}
              </Link>
            ))}
        </div>
      ))}
    </>
  );

  return (
    <div className="docs-shell">
      <header className="docs-header">
        <Link href="/" className="docs-brand">
          Md. Sadman Sami Khan
        </Link>

        <div className="docs-header-actions">
          <Link href="/#articles">All articles</Link>

          <button type="button" onClick={toggleTheme}>
            {dark ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </header>

      <div className="docs-grid">
        <nav
          className="docs-sidebar"
          aria-label="Article navigation"
        >
          {articleNavigation}
        </nav>

        <main className="docs-main">
          <details className="docs-mobile-nav">
            <summary>Browse articles</summary>
            {articleNavigation}
          </details>

          <div className="docs-breadcrumb">
            <Link href="/#articles">Articles</Link>
            <span>/</span>
            <span>{currentArticle?.category ?? "Reading"}</span>
          </div>

          <div className="docs-content" ref={contentRef}>
            {children}
          </div>

          <div className="docs-end">
            <Link href="/#articles">
              ← Back to all articles
            </Link>
          </div>
        </main>

        <aside
          className="docs-toc"
          aria-label="On this page"
        >
          <p className="docs-label">ON THIS PAGE</p>

          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={
                heading.level === 3
                  ? "docs-subheading"
                  : undefined
              }
            >
              {heading.text}
            </a>
          ))}
        </aside>
      </div>
    </div>
  );
}