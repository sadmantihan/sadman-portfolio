"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { Download, X, type LucideIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ProjectTags } from "./project-tags";
import styles from "./project-preview.module.css";

type PreviewProject = {
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

type ProjectPreviewProps = {
  project: PreviewProject;
  onClose: () => void;
};

export function ProjectPreview({
  project,
  onClose,
}: ProjectPreviewProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const CoverIcon = project.coverIcon;

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    if (!dialog.open) dialog.showModal();

    closeRef.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = previousOverflow;

      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, []);

  function closePreview() {
    dialogRef.current?.close();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;

        const bounds = event.currentTarget.getBoundingClientRect();

        const outside =
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom;

        if (outside) closePreview();
      }}
    >
      <button
        ref={closeRef}
        type="button"
        className={styles.close}
        onClick={closePreview}
        aria-label="Close project preview"
      >
        <X size={22} aria-hidden="true" />
      </button>

      <div className={styles.scroller}>
        <div className={styles.cover}>
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} project preview`}
              fill
              sizes="(max-width: 699px) 94vw, 960px"
              className={styles.coverImage}
            />
          ) : (
            <CoverIcon
              className={styles.coverIcon}
              size={96}
              strokeWidth={1.25}
              aria-hidden="true"
            />
          )}

          <span className={styles.category}>
            {project.category}
          </span>
        </div>

        <div className={styles.content}>

          <h2 id={titleId} className={styles.title}>
            {project.name}
          </h2>

          {project.supervisor && (
            <p className={styles.supervisor}>
              Supervisor:{" "}
              {project.supervisorUrl ? (
                <a
                  href={project.supervisorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.supervisor}
                </a>
              ) : (
                project.supervisor
              )}
            </p>
          )}

          <p className={styles.description}>{project.desc}</p>

          {project.detail && (
            <p className={styles.result}>{project.detail}</p>
          )}

          <div className={styles.technologies}>
            <h3 className={styles.label}>Technologies</h3>
            <ProjectTags tags={project.tags} />
          </div>

          <div className={styles.links}>
            <a
              className={styles.projectLink}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} source code on GitHub`}
            >
              <FaGithub size={20} aria-hidden="true" />
              Code
            </a>

            {project.thesisPdf && (
              <a
                className={styles.projectLink}
                href={project.thesisPdf}
                download
              >
                <Download size={20} aria-hidden="true" />
                Download Thesis
              </a>
            )}
          </div>
        </div>
      </div>
    </dialog>,
    document.body,
  );
}