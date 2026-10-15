"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import styles from "./cv-preview.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type CvDocumentProps = {
  file: string;
};

export default function CvDocument({ file }: CvDocumentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.max(0, Math.floor(entry.contentRect.width)));
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={styles.documentContainer}>
      {width > 0 && (
        <Document
          file={file}
          className={styles.pdfDocument}
          onLoadSuccess={({ numPages }) => setPageCount(numPages)}
          loading={
            <p className={styles.previewMessage} role="status">
              Loading CV…
            </p>
          }
          error={
            <p className={styles.previewMessage} role="alert">
              The preview could not load. Please use Download above.
            </p>
          }
          externalLinkTarget="_blank"
          externalLinkRel="noopener noreferrer"
        >
          {Array.from({ length: pageCount }, (_, index) => (
            <Page
              key={index + 1}
              pageNumber={index + 1}
              width={width}
              devicePixelRatio={Math.min(window.devicePixelRatio || 1, 2)}
              className={styles.pdfPage}
              renderTextLayer
              renderAnnotationLayer
              loading={
                <p className={styles.previewMessage}>
                  Loading page {index + 1}…
                </p>
              }
              error={
                <p className={styles.previewMessage}>
                  This page could not load. Please use Download above.
                </p>
              }
            />
          ))}
        </Document>
      )}
    </div>
  );
}