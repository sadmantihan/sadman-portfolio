import { VoluntaryCertificates } from "./voluntary-certificates";
import styles from "./experience.module.css";
import { ArrowUpRight } from "lucide-react";

const voluntaryRoles = [
  {
    title: "Assistant Website Management Secretary",
    date: "Jun 2025 – Aug 2026",
    points: [
      "Rebuilt and relaunched the society’s previously non-functional website, restoring its primary digital presence.",
      "Named Best Performer for the 2025/2026 committee session and separately recognized for outstanding performance and dedication as Assistant Website Management Secretary in 2025.",
    ],
  },
  {
    title: "General Member",
    date: "Feb 2024 – Jun 2025",
    points: [
      "Certified Organizer, IT Fiesta 2024: managed the programming contest’s technical setup across 3 labs for 50 teams of 3, resolving technical issues during an event with 500 school, college, and university participants.",
      "Volunteered at Chittagong University Science Carnival 4.0 in March 2025, an event with approximately 1,000 participants, and was recognized as one of its best volunteers.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section wrap">
      <div className="section-label">EXPERIENCE</div>

      <div className={`section-body ${styles.body}`}>
        <h2>Work Experience</h2>

        <article className={styles.entry}>
          <div className={styles.header}>
            <h3 className={styles.role}>Data Annotator</h3>
            <span className={styles.date}>Apr 2026 – Sep 2026</span>
          </div>

          <p className={styles.organization}>
            <a
              href="https://bdai-csecu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              BDAI-HEAT Sub-project (HEAT-13211-CU)
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </p>
          <p className={styles.meta}>
            World Bank-funded · Chattogram, Bangladesh
          </p>

          <ul className={styles.points}>
            <li>
              Served as a Scrum Level 2 mentor, guiding a team of Scrum Level 3
              students in collecting raw data for the project’s socio-economics
              sector, one of its core focus areas.
            </li>
            <li>
              Directed the team in designing the sector’s ER diagram and
              building its ETL pipeline to structure, clean, and validate the
              collected data.
            </li>
            <li>
              Oversaw a collection effort that produced a 130-file dataset with
              223K+ rows and 3.64 million values, including annotation oversight
              and consistency checks under research guidelines.
            </li>
          </ul>
        </article>

        <h3 className={styles.subheading}>
          Leadership &amp; Voluntary Activities
        </h3>

        {voluntaryRoles.map((role) => (
          <article className={styles.entry} key={role.title}>
            <div className={styles.header}>
              <h4 className={styles.role}>{role.title}</h4>
              <span className={styles.date}>{role.date}</span>
            </div>

            <p className={styles.organization}>
              Chittagong University Scientific Society
            </p>

            <p className={styles.meta}>Chattogram, Bangladesh</p>

            <ul className={styles.points}>
              {role.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            {role.title === "General Member" && <VoluntaryCertificates />}
          </article>
        ))}
      </div>
    </section>
  );
}
