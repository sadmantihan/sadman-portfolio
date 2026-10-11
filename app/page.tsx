"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  ChartColumn,
  Database,
  Download,
  Mail,
  MapPin,
  Network,
  PanelsTopLeft,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { PortfolioMotion } from "@/components/portfolio-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { ArticleCards } from "@/components/article-cards";
import { Certifications } from "@/components/certifications";
import { ContactForm } from "@/components/contact-form";
import { Experience } from "@/components/experience";
import { MobileNav } from "@/components/mobile-nav";
import { ProjectTags } from "@/components/project-tags";
import { RecentNews } from "@/components/recent-news";
import { Toolkit } from "@/components/toolkit";
import { Switch } from "@/components/ui/switch";

const contact = {
  email: "samisadman6@gmail.com",
  phone: "+880 1704 776493",
  phoneHref: "tel:+8801704776493",
  whatsapp: "https://wa.me/8801704776493",
  github: "https://github.com/sadmantihan",
  linkedin: "https://www.linkedin.com/in/md-sadman-sami-khan",
  location: "Chandpur, Chattogram, Bangladesh",
};

const navigation = [
  { id: "news", label: "Recent News" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects & Thesis" },
  { id: "experience", label: "Experience" },
  { id: "articles", label: "Articles" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

type Project = {
  category: string;
  coverIcon: LucideIcon;
  image: string;
  type: string;
  name: string;
  desc: string;
  tags: string[];
  url: string;
  supervisor?: string;
  supervisorUrl?: string;
  thesisPdf?: string;
  detail?: string;
};

const projects: Project[] = [
  {
    category: "Full-Stack",
    coverIcon: PanelsTopLeft,
    image: "",
    type: "FULL-STACK DEVELOPMENT",
    name: "BuildMaster",
    desc: "A role-based workforce management system with authenticated dashboards for administrators, HR, employees, teams, volunteers, and shareholders.",
    tags: ["PHP", "MySQL"],
    url: "https://github.com/sadmantihan/buildmaster",
  },
  {
    category: "Research",
    coverIcon: Network,
    image: "",
    type: "RESEARCH · UNDERGRADUATE THESIS",
    name: "AdaPruner-KGQA",
    desc: "Making multi-hop knowledge graph reasoning more efficient with adaptive, uncertainty-aware search-space pruning. Evaluated on WebQSP and CWQ within the RoG reasoning pipeline.",
    tags: ["Python", "PyTorch", "Knowledge graphs"],
    url: "https://github.com/sadmantihan/AdaPruner-KGQA",
    supervisor: "Prof. Dr. Rudra Pratap Deb Nath",
    supervisorUrl:
      "https://scholar.google.com/citations?user=TkQGAWoAAAAJ&hl=en",
    thesisPdf: "/thesis/AdaPrunerKGQA-thesis.pdf",
    detail:
      "2.24% / 5.05% fewer graph edges examined on WebQSP / CWQ; 99.20% / 98.72% of RoG-reachable answers retained.",
  },
];

export default function Home() {
  const [active, setActive] = useState("");

  // Highlight the navigation item for the current section.
  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const updateActiveSection = () => {
      let current = "";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 180) {
          current = section.id;
        }
      }

      setActive(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <header className="portfolio-header">
        <div className="nav wrap">
          <a
            className="brand navbar-brand"
            href="#home"
            aria-label="Sadman Sami Khan home"
          >
            <Image
              src="/favicon.svg"
              alt=""
              width={36}
              height={36}
              className="brand-logo"
            />

            <span className="brand-text">
              ssk<span>.</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>

          <MobileNav active={active} />
        </div>
      </header>
      <main id="home" tabIndex={-1}>
        <PortfolioMotion />

        <section className="hero wrap">
          <div className="hero-shell">
            <p className="hero-role">Data Scientist &amp; ML Engineer</p>

            <p className="hero-availability">
              <span aria-hidden="true" />
              Open to Data Science and ML roles
            </p>

            <div className="eyebrow">HELLO, I AM</div>

            <h1 className="hero-name">
              <span>Md</span> <span>Sadman</span> <span>Sami</span>{" "}
              <span>Khan</span>
            </h1>

            <div className="hero-bottom">
              <div>
                <p className="intro">
                  CSE Graduate
                  <br className="desktop" /> and Ex-Data Annotator at BDAI-HEAT
                  Sub-project (HEAT-13211-CU) | FinTech
                </p>

                <div className="actions">
                  <a className="button solid" href="#projects">
                    Explore my work
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>

                  <a
                    className="button outline"
                    href="/Sadman_Sami_Khan_CV.pdf"
                    download
                  >
                    Download CV
                    <Download size={17} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <aside className="hero-aside hero-photo-card">
                <div className="hero-decoration" aria-hidden="true">
                  <span>
                    <BrainCircuit size={28} strokeWidth={1.8} />
                  </span>

                  <span>
                    <Database size={24} strokeWidth={1.8} />
                  </span>

                  <span>
                    <ChartColumn size={24} strokeWidth={1.8} />
                  </span>
                </div>
                <div className="hero-portrait">
                  <Image
                    src="/images/sadman-profile.jpeg"
                    alt="Portrait of Md Sadman Sami Khan"
                    fill
                    priority
                    sizes="(max-width: 359px) 65vw, 280px"
                    className="hero-portrait-image"
                  />
                </div>

                <div className="hero-location">
                  <MapPin size={17} aria-hidden="true" />
                  <span>{contact.location}</span>
                </div>

                <div className="socials hero-socials">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <FaGithub size={22} aria-hidden="true" />
                  </a>

                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={22} aria-hidden="true" />
                  </a>

                  <a
                    href={`mailto:${contact.email}`}
                    aria-label="Email"
                    title="Email me"
                  >
                    <SiGmail size={22} aria-hidden="true" />
                  </a>

                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact me on WhatsApp"
                    title="WhatsApp"
                  >
                    <FaWhatsapp size={23} aria-hidden="true" />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Recent news */}
        <RecentNews />

        {/* About */}
        <section id="about" className="section wrap">
          <div className="section-label">ABOUT</div>

          <div className="section-body">
            <h2>
              My Background and Interests
            </h2>

            <div className="about-copy">
              <p className="lead">
                I’m a Computer Science and Engineering graduate from the{" "}
                <a
                  href="https://cu.ac.bd/cse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                >
                  University of Chittagong
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                , aspiring to roles in data science and ML engineering, with
                a particular interest in FinTech.
              </p>

              <p className="lead">
                As a former Data Annotator at the World Bank-funded BDAI-HEAT
                Sub-project (HEAT-13211-CU), I guided students in collecting
                socio-economics data, designing an ER diagram, and building an
                ETL pipeline to structure, clean, and validate the data.
              </p>

              <p className="lead">
                My research in multi-hop knowledge graph reasoning and my
                full-stack development skills complement this hands-on
                experience. I enjoy working from raw data through analysis and
                evaluation to clear findings that support decisions, and I’m
                keen to apply these skills to financial technology.
              </p>
            </div>
          </div>
        </section>

        {/* Projects and thesis */}
        <section id="projects" className="section wrap">
          <div className="section-label">SELECTED WORKS</div>

          <div className="section-body">
            <h2>Projects and Research</h2>

            <div className="projects">
              {projects.map((project) => {
                const CoverIcon = project.coverIcon;

                return (
                  <article className="project" key={project.url}>
                    <div className="project-cover">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.name} project preview`}
                          fill
                          sizes="(max-width: 699px) 92vw, (max-width: 1328px) 46vw, 624px"
                          className="project-cover-image"
                        />
                      ) : (
                        <CoverIcon
                          size={64}
                          strokeWidth={1.25}
                          aria-hidden="true"
                        />
                      )}

                      <span
                        className="project-cover-label"
                        title={project.type}
                      >
                        {project.category}
                      </span>
                    </div>

                    <div className="project-content">
                      <div className="project-title">
                        <h3>{project.name}</h3>
                      </div>

                      {project.supervisor && project.supervisorUrl && (
                        <p className="project-supervisor">
                          Supervisor:{" "}
                          <a
                            href={project.supervisorUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.supervisor}
                            <ArrowUpRight size={16} aria-hidden="true" />
                          </a>
                        </p>
                      )}

                      <p>{project.desc}</p>

                      {project.detail && (
                        <p className="project-note">{project.detail}</p>
                      )}

                      <div className="project-bottom">
                        <ProjectTags tags={project.tags} />
                      </div>

                      <div className="project-actions">
                        <a
                          className="project-link"
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code for ${project.name} on GitHub (opens in a new tab)`}
                        >
                          <FaGithub size={18} aria-hidden="true" />
                          Code
                        </a>

                        {project.thesisPdf && (
                          <a
                            className="project-link"
                            href={project.thesisPdf}
                            download
                          >
                            <Download size={18} aria-hidden="true" />
                            Download Thesis
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience */}
        <Experience />

        {/* Articles */}
        <section id="articles" className="section wrap">
          <div className="section-label">ARTICLES</div>

          <div className="section-body">
            <h2>Latest Articles</h2>
            <ArticleCards />
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section wrap">
          <div className="section-label">MY TOOLKIT</div>

          <div className="section-body">
            <h2>Tools and Technologies</h2>
            <Toolkit />
          </div>
        </section>

        {/* Education and certifications */}
        <section id="education" className="section wrap">
          <div className="section-label">EDUCATION & CERTIFICATIONS</div>

          <div className="section-body">
            <h2>Academic Journey</h2>

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
                <p>Chandpur Government College, Chandpur · 2020</p>
                <p>GPA 5.00 / 5.00</p>
                <p>Board-merit scholarship awardee</p>

                <h3>Secondary School Certificate</h3>
                <p>Hasan Ali Government High School, Chandpur · 2018</p>
                <p>GPA 5.00 / 5.00</p>
                <p>Board-merit scholarship awardee</p>
              </div>
            </div>
            <Certifications />
          </div>
        </section>

        {/* Contact */}
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
                  I’m interested in data science and ML engineering
                  opportunities.
                </p>

                <div className="contact-detail">
                  <Mail size={20} aria-hidden="true" />

                  <div>
                    <span>Email</span>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                </div>

                <div className="contact-detail">
                  <Phone size={20} aria-hidden="true" />

                  <div>
                    <span>Phone</span>
                    <a href={contact.phoneHref}>{contact.phone}</a>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <span>© {new Date().getFullYear()} Md Sadman Sami Khan</span>

        <a href="#home">Back to top</a>
      </footer>
    </>
  );
}
