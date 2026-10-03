"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motion.matches || !("IntersectionObserver" in window)) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          "#home .section-label",
          "#home .section-body > :not(.projects)",
          "#home .project",
          "#home .article-preview",
          "#contact .contact-inner > :not(.contact-grid)",
          "#contact .contact-grid > *",
        ].join(","),
      ),
    ).filter(
      (element) => element.getBoundingClientRect().top >= window.innerHeight,
    );

    if (!elements.length) return;

    let remaining = elements.length;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          entry.target.classList.remove("scroll-reveal-pending");

          if (!motion.matches) {
            entry.target.classList.add("scroll-reveal");
          }

          observer.unobserve(entry.target);
          remaining -= 1;
        }

        if (remaining === 0) observer.disconnect();
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -64px 0px",
      },
    );

    elements.forEach((element) => {
      element.classList.add("scroll-reveal-pending");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();

      elements.forEach((element) => {
        element.classList.remove(
          "scroll-reveal-pending",
          "scroll-reveal",
        );
      });
    };
  }, []);

  return null;
}