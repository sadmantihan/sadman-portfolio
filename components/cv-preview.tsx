"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { Download, X } from "lucide-react";
import styles from "./cv-preview.module.css";

const CV_URL = "/Sadman_Sami_Khan_CV.pdf";
const CvDocument = dynamic(() => import("./cv-document"), {
  ssr: false,
  loading: () => (
    <p className={styles.previewMessage} role="status">
      Loading preview…
    </p>
  ),
});

export function CvPreview() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Prevent the page behind the preview from scrolling.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function openPreview() {
    dialogRef.current?.showModal();
    setIsOpen(true);
  }

  function closePreview() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        type="button"
        className="button outline"
        onClick={openPreview}
        aria-haspopup="dialog"
      >
        Download CV
        <Download size={17} aria-hidden="true" />
      </button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="cv-preview-title"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closePreview();
          }
        }}
      >
        <div className={styles.panel}>
          <header className={styles.header}>
            <h2 id="cv-preview-title" className={styles.title}>
              Curriculum Vitae
            </h2>

            <div className={styles.actions}>
              <a
                className={styles.download}
                href={CV_URL}
                download="Md_Sadman_Sami_Khan_CV.pdf"
              >
                <Download size={16} aria-hidden="true" />
                Download
              </a>

              <button
                type="button"
                className={styles.close}
                onClick={closePreview}
                aria-label="Close CV preview"
                autoFocus
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
          </header>

          <div
            className={styles.viewer}
            role="region"
            aria-label="Scrollable CV preview"
            tabIndex={0}
          >
            {isOpen && <CvDocument file={CV_URL} />}
          </div>

          <p className={styles.note}>
            Preview unavailable? Use the Download button above.
          </p>
        </div>
      </dialog>
    </>
  );
}
