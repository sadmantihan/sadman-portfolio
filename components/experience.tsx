import Image from "next/image";
import { VoluntaryCertificates } from "./voluntary-certificates";
import styles from "./experience.module.css";

type Organization = {
  name: string;
  logo: string;
  url?: string;
};

type ExperienceEntry = {
  id: string;
  title: string;
  date: string;
  organization: Organization;
  tags?: string[];
  location?: string;
  sponsor?: Organization;
  points?: string[];
  showCertificates?: boolean;
};

const organizations = {
  flyrank: {
    name: "FlyRank AI",
    logo: "/logos/flyrank-ai-logo.png",
    url: "https://flyrank.ai/",
  },
  bdai: {
    name: "BDAI-HEAT Sub-Project (HEAT-13211-CU)",
    logo: "/logos/bdai.png",
    url: "https://bdai.bike-csecu.com/team",
  },
  worldBank: {
    name: "World Bank-funded",
    logo: "/logos/world-bank.png",
  },
  aspire: {
    name: "Aspire Institute",
    logo: "/logos/aspire-institute.png",
    url: "https://www.aspireleaders.org/",
  },
  cuss: {
    name: "Chittagong University Scientific Society",
    logo: "/logos/cuss.png",
    url: "https://cusscu.org/",
  },
} satisfies Record<string, Organization>;

const workExperience: ExperienceEntry[] = [
  {
    id: "flyrank-ml-intern",
    title: "Machine Learning Intern",
    date: "Oct 2026 – Present",
    organization: organizations.flyrank,
    tags: ["Part-time", "Remote"],
  },
  {
    id: "bdai-data-annotator",
    title: "Data Annotator",
    date: "Apr 2026 – Sep 2026",
    organization: organizations.bdai,
    tags: ["Part-time", "Hybrid"],
    sponsor: organizations.worldBank,
    location: "Chattogram, Bangladesh",
    points: [
      "Mentored a team of Scrum Level 3 students in collecting raw socio-economic data, overseeing annotation quality and consistency checks; helped design the ER diagram and used Python (pandas) and Google Sheets to produce a 130-file dataset with over 223K rows and 3.64M values.",
    ],
  },
];

const leadershipExperience: ExperienceEntry[] = [
  {
    id: "aspire-leaders-2026",
    title: "Aspire Leaders Program (Cohort 4 - 2026)",
    date: "Oct 2026 – Dec 2026",
    organization: organizations.aspire,
    points: [
      "Selective masterclass and leadership development program with HarvardX coursework and Harvard faculty; applicants from 100+ countries; proposal for a free guide to help graduates reach their first data job.",
    ],
  },
  {
    id: "cuss-website-secretary",
    title: "Assistant Website Management Secretary",
    date: "Jun 2025 – Apr 2026",
    organization: organizations.cuss,
    location: "Chattogram, Bangladesh",
    points: [
      "Assisted in rebuilding the club's previously non-functional website, restoring its primary digital presence; named Best Performer for the 2025/2026 committee session for outstanding performance and dedication (2025).",
    ],
  },
  {
    id: "cuss-general-member",
    title: "General Member",
    date: "Feb 2024 – Jun 2025",
    organization: organizations.cuss,
    location: "Chattogram, Bangladesh",
    points: [
      "Certified Organizer of IT Fiesta 2024, managing technical setup for the programming contest (500 school, college, and university participants), handling 3 labs and 50 teams of three, and resolving technical issues; volunteered at Chittagong University Science Carnival 4.0 (Feb 2025, approximately 1,000 participants) and recognized as one of the event's best volunteers.",
    ],
    showCertificates: true,
  },
];

function OrganizationRow({
  organization,
}: {
  organization: Organization;
}) {
  return (
    <p className={`${styles.organization} ${styles.withLogo}`}>
      <Image
        src={organization.logo}
        alt=""
        width={48}
        height={40}
        className={styles.organizationLogo}
      />

      {organization.url ? (
        <a
          href={organization.url}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link name-link"
        >
          {organization.name}
        </a>
      ) : (
        <span>{organization.name}</span>
      )}
    </p>
  );
}

type ExperienceCardProps = {
  entry: ExperienceEntry;
  headingLevel: "h3" | "h4";
  organizationInHeader?: boolean;
};

function ExperienceCard({
  entry,
  headingLevel: Heading,
  organizationInHeader = false,
}: ExperienceCardProps) {
  const {
    title,
    date,
    organization,
    tags,
    location,
    sponsor,
    points,
    showCertificates,
  } = entry;

  return (
    <article className={`${styles.entry} ${styles.workEntry}`}>
      <div className={`${styles.header} ${styles.workHeader}`}>
        <Heading className={styles.role}>{title}</Heading>
        <span className={styles.date}>{date}</span>

        {organizationInHeader && (
          <OrganizationRow organization={organization} />
        )}

        {tags && tags.length > 0 && (
          <div className={styles.employmentTags}>
            {tags.map((tag) => (
              <span className={styles.employmentTag} key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {!organizationInHeader && (
        <OrganizationRow organization={organization} />
      )}

      {sponsor ? (
        <p className={`${styles.meta} ${styles.withLogo}`}>
          <Image
            src={sponsor.logo}
            alt=""
            width={48}
            height={40}
            className={styles.organizationLogo}
          />
          <span>
            {sponsor.name}
            {location ? `, ${location}` : ""}
          </span>
        </p>
      ) : (
        location && <p className={styles.meta}>{location}</p>
      )}

      {points && points.length > 0 && (
        <ul className={styles.points}>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}

    </article>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section wrap">
      <div className="section-label">EXPERIENCE</div>

      <div className={`section-body ${styles.body}`}>
        <h2>Work Experience</h2>

        {workExperience.map((entry) => (
          <ExperienceCard
            key={entry.id}
            entry={entry}
            headingLevel="h3"
            organizationInHeader
          />
        ))}

        <h3 className={styles.subheading}>
          Leadership &amp; Voluntary Activities
        </h3>

        {leadershipExperience.map((entry) => (
          <ExperienceCard
            key={entry.id}
            entry={entry}
            headingLevel="h4"
          />
        ))}

        <VoluntaryCertificates />
      </div>
    </section>
  );
}