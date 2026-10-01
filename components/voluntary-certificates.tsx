import { ArrowUpRight, ChevronDown } from "lucide-react";
import styles from "./experience.module.css";

const certificates = [
  {
    title: "Assistant Website Management Secretary — Appreciation",
    href: "/certificates/cuss-website-secretary-cert.pdf",
  },
  {
    title: "Chittagong Science Carnival 4.0 — Organizer",
    href: "/certificates/Chitagong-science-carnival-4.0.pdf",
  },
  {
    title: "IT Fiesta 2024 — Organizer",
    href: "/certificates/itfest-org-2024.pdf",
  },
];

export function VoluntaryCertificates() {
  return (
    <details className={styles.certificates}>
      <summary className={styles.certificateToggle}>
        View Certificates
        <ChevronDown
          size={18}
          className={styles.chevron}
          aria-hidden="true"
        />
      </summary>

      <ul className={styles.certificateList}>
        {certificates.map((certificate) => (
          <li key={certificate.href}>
            <a
              href={certificate.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${certificate.title} (PDF, opens in a new tab)`}
            >
              <span>{certificate.title}</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}