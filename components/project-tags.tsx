import type { IconType } from "react-icons";
import {
  FaCode,
  FaCss3Alt,
  FaDesktop,
  FaLock,
  FaMicrochip,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiC,
  SiMysql,
  SiPhp,
  SiPython,
  SiPytorch,
} from "react-icons/si";

import styles from "./toolkit.module.css";

type TagAppearance = {
  icon: IconType;
  color: string;
};

const appearances: Record<string, TagAppearance> = {
  Python: {
    icon: SiPython,
    color: "#3776AB",
  },
  PyTorch: {
    icon: SiPytorch,
    color: "#EE4C2C",
  },
  C: {
    icon: SiC,
    color: "#A8B9CC",
  },
  PHP: {
    icon: SiPhp,
    color: "#777BB4",
  },
  MySQL: {
    icon: SiMysql,
    color: "#4479A1",
  },
  CSS: {
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  MASM: {
    icon: FaMicrochip,
    color: "#6B7280",
  },
  "MASM (Assembly)": {
    icon: FaMicrochip,
    color: "#6B7280",
  },
  "x86 Assembly": {
    icon: FaMicrochip,
    color: "#6B7280",
  },
  "Knowledge graphs": {
    icon: FaProjectDiagram,
    color: "#0D9488",
  },
  "Operating systems": {
    icon: FaDesktop,
    color: "#64748B",
  },
  Authentication: {
    icon: FaLock,
    color: "#0D9488",
  },
};

const fallback: TagAppearance = {
  icon: FaCode,
  color: "#64748B",
};

export function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <ul className={styles.list} aria-label="Project technologies">
      {tags.map((tag) => {
        const { icon: Icon, color } = Object.hasOwn(appearances, tag)
          ? appearances[tag]
          : fallback;

        return (
          <li className={styles.badge} key={tag}>
            <span className={styles.logoBox}>
              <Icon
                className={styles.logo}
                style={{ color }}
                aria-hidden="true"
                focusable="false"
              />
            </span>

            <span>{tag}</span>
          </li>
        );
      })}
    </ul>
  );
}