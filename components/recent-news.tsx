import { ArrowUpRight } from "lucide-react";
import { news } from "@/app/news/news-list";
import styles from "./recent-news.module.css";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  weekday: "short",
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function formatNewsDate(value: string) {
  const parts = dateFormatter.formatToParts(new Date(`${value}T00:00:00Z`));

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${get("weekday")}, ${get("day")} ${get("month")}, ${get("year")}`;
}

export function RecentNews() {
  const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date));

  if (sortedNews.length === 0) return null;

  return (
    <section
      id="news"
      className={`wrap ${styles.section}`}
      aria-labelledby="recent-news-heading"
    >
      <h2 id="recent-news-heading" className={styles.heading}>
        Recent News
      </h2>

      <ul className={styles.list}>
        {sortedNews.map((item) => {
          const external = /^https?:\/\//i.test(item.href ?? "");

          return (
            <li className={styles.row} key={item.id}>
              <time className={styles.date} dateTime={item.date}>
                {formatNewsDate(item.date)}
              </time>

              <p className={styles.text}>
                {item.text}

                {item.href && (
                  <>
                    {" "}
                    <a
                      className={styles.link}
                      href={item.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      {item.linkLabel ?? "Read more"}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </>
                )}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
