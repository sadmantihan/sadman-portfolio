"use client";
import { ProjectTags } from "@/components/project-tags";
import { ArticleCards } from "@/components/article-cards";
import { Toolkit } from "@/components/toolkit";
import { Certifications } from "@/components/certifications";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Download,
  Mail,
  Moon,
  Sun,
  MapPin,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Switch } from "@/components/ui/switch";
import { MobileNav } from "@/components/mobile-nav";

const projects = [
  {
    n: "01",
    type: "RESEARCH · UNDERGRADUATE THESIS",
    name: "AdaPruner-KGQA",
    desc: "Making multi-hop knowledge graph reasoning more efficient with adaptive, uncertainty-aware search-space pruning. Evaluated on WebQSP and CWQ within the RoG reasoning pipeline.",
    tags: ["Python", "PyTorch", "Knowledge graphs"],
    url: "https://github.com/sadmantihan/AdaPruner-KGQA",
    detail:
      "2.24% / 5.05% fewer graph edges examined on WebQSP / CWQ; 99.20% / 98.72% of RoG-reachable answers retained.",
    year: "2026",
  },
  {
    n: "02",
    type: "SYSTEMS ENGINEERING",
    name: "Dynamic Memory Toolkit",
    desc: "A custom dynamic memory allocator, memory leak detector, and paging / virtual-memory simulator built for an Operating Systems course.",
    tags: ["C", "x86 Assembly", "Operating systems"],
    url: "https://github.com/sadmantihan/dynamic-memory-tool-gr",
    year: "2024",
  },
  {
    n: "03",
    type: "FULL-STACK DEVELOPMENT",
    name: "BuildMaster",
    desc: "A role-based workforce management system with authenticated dashboards for administrators, HR, employees, teams, volunteers, and shareholders.",
    tags: ["PHP", "MySQL", "Authentication"],
    url: "https://github.com/sadmantihan/buildmaster",
    year: "2024",
  },
];
export default function Home() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const sections = [
      "about",
      "projects",
      "articles",
      "skills",
      "education",
      "contact",
    ]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const update = () => {
      let current = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 180) current = section.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const d = saved === "dark";
    setDark(d);
    document.documentElement.dataset.theme = d ? "dark" : "light";
  }, []);
  const toggle = (v: boolean) => {
    setDark(v);
    document.documentElement.dataset.theme = v ? "dark" : "light";
    localStorage.setItem("portfolio-theme", v ? "dark" : "light");
  };
  return (
    <>
      <header className="portfolio-header">
        <div className="nav wrap">
          <a className="brand" href="#home" aria-label="Sadman Sami Khan home">
            ssk
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {[
              ["about", "About"],
              ["projects", "Projects"],
              ["articles", "Articles"],
              ["skills", "Skills"],
              ["education", "Education"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="theme">
            <Sun size={16} />
            <Switch
              checked={dark}
              onCheckedChange={toggle}
              aria-label="Dark mode"
            />
            <Moon size={16} />
          </div>
          <MobileNav active={active} />
        </div>
      </header>
      <main id="home">
        <section className="hero wrap">
          <div className="eyebrow">DATA · INTELLIGENCE · DEVELOPMENT</div>
          <h2>Md. Sadman Sami Khan</h2>
          <div className="hero-bottom">
            <div>
              <p className="intro">
                Turning complex data into
                <br className="desktop" /> clear, meaningful solutions.
              </p>
              <p className="summary">
                CSE graduate with a focus on data analytics, AI/ML research, and
                full-stack development. From structured data to smarter systems.
              </p>
              <div className="actions">
                <a className="button solid" href="#projects">
                  Explore my work <ArrowUpRight size={18} />
                </a>
                <a
                  className="button outline"
                  href="/Sadman_Sami_Khan_CV.pdf"
                  download
                >
                  Download CV <Download size={17} />
                </a>
              </div>
            </div>
            <aside className="hero-aside">
              <div>
                <MapPin size={16} /> Chandpur, Chattogram, Bangladesh
              </div>
              <p>Seeking opportunities in</p>
              <strong>
                Data & Business Analysis
                <br />
                AI / ML Engineering
              </strong>
              <div className="socials">
                <a
                  href="https://github.com/sadmantihan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-sadman-sami-khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href="mailto:samisadman6@gmail.com"
                  aria-label="Email"
                  title="Email me"
                >
                  <SiGmail size={22} />
                </a>
              </div>
            </aside>
          </div>
          <a href="#about" className="scroll">
            A little more about me <ArrowDown size={15} />
          </a>
        </section>
        <section id="about" className="section wrap">
          <div className="section-label">ABOUT</div>
          <div className="section-body">
            <h2>
              A curious mind.
              <br />A practical approach.
            </h2>
            <p className="lead">
              I work across the data-to-decision pipeline: cleaning and modeling
              data, evaluating results, and communicating findings clearly.
            </p>
            <p>
              My background in Computer Science and Engineering at the
              University of Chittagong connects research in multi-hop knowledge
              graph reasoning with hands-on data work and software development.
              I enjoy bringing structure to complex problems and building tools
              that make that structure useful.
            </p>
          </div>
        </section>
        <section id="projects" className="section wrap">
          <div className="section-label">SELECTED WORK</div>
          <div className="section-body">
            <div className="projects">
              {projects.map((p) => (
                <article className="project" key={p.n}>
                  <div className="project-top">
                    <span className="eyebrow">{p.type}</span>
                    <span>{p.year}</span>
                  </div>
                  <a className="project-title" href={p.url}>
                    <h3>{p.name}</h3>
                    <ArrowUpRight size={25} />
                  </a>
                  <p>{p.desc}</p>
                  {p.detail && <p className="project-note">{p.detail}</p>}
                  <div className="project-bottom">
                    <ProjectTags tags={p.tags} />
                    <span className="project-number">{p.n}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="articles" className="section wrap">
          <div className="section-label">LATEST ARTICLES</div>
          <ArticleCards />
        </section>
        <section className="section wrap" id="skills">
          <div className="section-label">MY TOOLKIT</div>
          <div className="section-body">
            <h2>Tools and Technologies</h2>
            <Toolkit />
          </div>
        </section>
        <section id="education" className="section wrap">
          <div className="section-label">EDUCATION</div>
          <div className="section-body">
            <h2>A foundation to build on.</h2>
            <div className="education">
              <div>
                <span className="eyebrow">FEB 2022 – OCT 2026</span>
                <h3>
                  B.Sc. in Computer Science
                  <br />
                  and Engineering
                </h3>
                <p>University of Chittagong</p>
                <span className="pill">CGPA 3.61 / 4.00</span>
              </div>
              <div className="school">
                <h3>Higher Secondary Certificate</h3>
                <p>Chandpur Government College · 2020</p>
                <p>GPA 5.00 / 5.00</p>
                <p>Board-merit scholarship awardee</p>
                <h3>Secondary School Certificate</h3>
                <p>Hasan Ali Government High School · 2018</p>
                <p>GPA 5.00 / 5.00</p>
                <p>Board-merit scholarship awardee</p>
              </div>
            </div>
            <Certifications />
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="wrap contact-inner">
            <span className="eyebrow">LET’S CONNECT</span>
            <h2>Get in Touch</h2>
            <p>
              Have a project, an opportunity, or a question? I’d love to hear
              from you.
            </p>
            <div className="contact-grid">
              <div>
                <h3>Let’s start a conversation.</h3>
                <p>
                  I’m interested in data analysis, business analysis, and AI /
                  ML engineering opportunities.
                </p>
                <div className="contact-detail">
                  <Mail size={20} />
                  <div>
                    <span>Email</span>
                    <a href="mailto:samisadman6@gmail.com">
                      samisadman6@gmail.com
                    </a>
                  </div>
                </div>
                <div className="contact-detail">
                  <ArrowUpRight size={20} />
                  <div>
                    <span>Phone</span>
                    <a href="tel:+8801704776493">+880 1704 776493</a>
                  </div>
                </div>
                <div className="contact-detail">
                  <MapPin size={20} />
                  <div>
                    <span>Location</span>
                    <p>Chandpur, Bangladesh</p>
                  </div>
                </div>
                <div className="contact-links">
                  <a href="https://github.com/sadmantihan">
                    GitHub <ArrowUpRight size={16} />
                  </a>
                  <a href="https://linkedin.com/in/md-sadman-sami-khan">
                    LinkedIn <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <span>© {new Date().getFullYear()} Md. Sadman Sami Khan</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
