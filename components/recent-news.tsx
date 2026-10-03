import { ArrowUpRight } from "lucide-react";
import { news } from "@/app/news/news-list";
import styles from "./recent-news.module.css";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function RecentNews() {
  const sortedNews = [...news].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

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
                {dateFormatter.format(
                  new Date(`${item.date}T00:00:00Z`),
                )}
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
                      rel={
                        external ? "noopener noreferrer" : undefined
                      }
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