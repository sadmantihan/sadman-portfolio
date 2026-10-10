import Link from "next/link";
import { articles } from "@/app/articles/article-list";
import "./article-cards.css";

export function ArticleCards() {
  if (articles.length === 0) {
    return <p className="articles-empty">No articles for now.</p>;
  }
  return (
    <div className="article-card-grid">
      {articles.map((article) => (
        <Link
          key={article.slug}
          className="article-preview"
          href={`/articles/${article.slug}`}
        >
          <span className="article-category">{article.category}</span>

          <h3>{article.title}</h3>

          <p>{article.summary}</p>

          <span className="article-read">Read article →</span>
        </Link>
      ))}
    </div>
  );
}
