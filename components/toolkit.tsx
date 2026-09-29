import styles from "./toolkit.module.css";
import type { IconType } from "react-icons";
import { FaCss3Alt, FaJava, FaMicrochip } from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLatex,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiR,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";

// Power BI logo from Simple Icons.
const PowerBiIcon: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M10 12a1 1 0 0 1 1 1v11H4a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h6Zm-2-.5V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v17h-4.5V13a1.5 1.5 0 0 0-1.5-1.5H8Zm5-6V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-3.5V7A1.5 1.5 0 0 0 15 5.5h-2Z" />
  </svg>
);

type Tool = {
  name: string;
  icon: IconType;
  color: string;
  monochrome?: boolean;
};

type ToolGroup = {
  title: string;
  tools: Tool[];
};

const groups: ToolGroup[] = [
  {
    title: "Languages",
    tools: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "R", icon: SiR, color: "#276DC3" },
      { name: "MASM", icon: FaMicrochip, color: "#6B7280" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Java", icon: FaJava, color: "#E76F00" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
    ],
  },
  {
    title: "AI / ML",
    tools: [
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    ],
  },
  {
    title: "Web & Mobile",
    tools: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#000000",
        monochrome: true,
      },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    title: "Databases",
    tools: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    title: "Tools",
    tools: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#181717",
        monochrome: true,
      },
      { name: "LaTeX", icon: SiLatex, color: "#008080" },
      { name: "Power BI", icon: PowerBiIcon, color: "#F2C811" },
    ],
  },
];

export function Toolkit() {
  return (
    <div className={styles.toolkit}>
      {groups.map(({ title, tools }) => (
        <div className={styles.row} key={title}>
          <h3 className={styles.label}>{title}</h3>

          <ul className={styles.list} aria-label={title}>
            {tools.map(({ name, icon: Icon, color, monochrome }) => (
              <li className={styles.badge} key={name}>
                <span
                  className={
                    monochrome ? styles.monochromeLogo : styles.logoBox
                  }
                >
                  <Icon
                    className={styles.logo}
                    style={{ color }}
                    aria-hidden="true"
                    focusable="false"
                  />
                </span>

                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}