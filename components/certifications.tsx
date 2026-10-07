import { ArrowUpRight } from "lucide-react";
import styles from "./certifications.module.css";

const groups = [
  {
    title: "Certifications & Training",
    courses: [
      {
        title: "Data Science and Machine Learning with Python and R",
        organization: "Data Solution 360 · 6-month program · Batch 2504",
        date: "Mar 2026",
        pdf: "/certificates/data-science-machine-learning.pdf",
      },
      {
        title: "Python Basics",
        organization: "University of Michigan · Coursera",
        date: "Sep 2025",
        pdf: "/certificates/python-basics.pdf",
      },
      {
        title: "Data Science Math Skills",
        organization: "Duke University · Coursera",
        date: "Mar 2025",
        pdf: "/certificates/data-science-math-skills.pdf",
      },
    ],
  },
];

export function Certifications() {
  return (
    <div className={styles.certifications}>
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className={styles.heading}>{group.title}</h3>

          <ul className={styles.list}>
            {group.courses.map((course) => (
              <li className={styles.row} key={course.pdf}>
                <div className={styles.details}>
                  <h4 className={styles.title}>{course.title}</h4>

                  <p className={styles.organization}>
                    {course.organization}
                  </p>

                  <a
                    className={styles.button}
                    href={course.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View certificate for ${course.title} (PDF, opens in a new tab)`}
                  >
                    View certificate
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>

                <span className={styles.date}>{course.date}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}