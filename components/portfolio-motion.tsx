"use client";

import { useEffect } from "react";
import { animate } from "motion/mini";

/*
 * Existing portfolio elements to animate.
 * No extra wrappers are added, so your grids stay unchanged.
 */
const REVEAL_SELECTORS = [
  "#about .about-copy",
  "#projects .project",
  "#experience article",
  "#news ul > li",
  "#articles .article-preview",
  "#articles .articles-empty",
  "#skills .section-body > div > div",
  "#education .education > div",
  "#education .section-body ul > li",
  "#contact .contact-grid > div",
  "#contact .contact-form",
].join(", ");

export function PortfolioMotion() {
  useEffect(() => {
    const root = document.getElementById("home");

    if (
      !root ||
      !("IntersectionObserver" in window) ||
      !("animate" in HTMLElement.prototype)
    ) {
      return;
    }

    const preference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const animations = new Map<
      HTMLElement,
      ReturnType<typeof animate>
    >();

    const originalStyles = new Map<
      HTMLElement,
      { opacity: string; translate: string }
    >();

    const revealed = new Set<HTMLElement>();

    function restoreStyles(element: HTMLElement) {
      const original = originalStyles.get(element);

      if (!original) return;

      element.style.opacity = original.opacity;
      element.style.translate = original.translate;
    }

    function stopAnimation(element: HTMLElement) {
      animations.get(element)?.cancel();
      animations.delete(element);
      restoreStyles(element);
    }

    function reveal(
      element: HTMLElement,
      delay = 0,
      distance = 32,
      duration = 0.55,
    ) {
      if (preference.matches || revealed.has(element)) return;

      revealed.add(element);

      originalStyles.set(element, {
        opacity: element.style.opacity,
        translate: element.style.translate,
      });

      const animation = animate(
        element,
        {
          opacity: [0, 1],
          translate: [`0px ${distance}px`, "0px 0px"],
        },
        {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
      );

      animations.set(element, animation);

      // Release animation styles once the entrance has finished.
      void animation.then(() => {
        if (animations.get(element) === animation) {
          stopAnimation(element);
        }
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let staggerIndex = 0;

        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const element = entry.target as HTMLElement;

          observer.unobserve(element);

          // Avoid animating an element while someone is using it.
          if (element.contains(document.activeElement)) {
            revealed.add(element);
            continue;
          }

          reveal(element, Math.min(staggerIndex, 2) * 0.08);
          staggerIndex += 1;
        }
      },
      {
        threshold: 0,
        rootMargin: "0px",
      },
    );

    const cards = Array.from(
      root.querySelectorAll<HTMLElement>(REVEAL_SELECTORS),
    );

    const portrait =
      root.querySelector<HTMLElement>(".hero-portrait");

    const badges = Array.from(
      root.querySelectorAll<HTMLElement>(
        ".hero-decoration > span",
      ),
    );

    const targets = [
      ...cards,
      ...(portrait ? [portrait] : []),
      ...badges,
    ];

    function startAnimations() {
      if (preference.matches) return;

      for (const element of cards) {
        const bounds = element.getBoundingClientRect();

        /*
         * Preserve content already visible when the page loads,
         * including visits that open directly at a section link.
         */
        if (bounds.top < window.innerHeight) {
          revealed.add(element);
        } else {
          observer.observe(element);
        }
      }

      // Animate hero visuals only when visiting the top of the page.
      if (window.scrollY < 40) {
        if (portrait) {
          reveal(portrait, 0, 20, 0.6);
        }

        badges.forEach((badge, index) => {
          reveal(badge, 0.08 + index * 0.08, 14, 0.45);
        });
      }
    }

    function stopAllAnimations() {
      observer.disconnect();

      for (const element of animations.keys()) {
        stopAnimation(element);
      }
    }

    function handlePreferenceChange() {
      stopAllAnimations();

      if (!preference.matches) {
        startAnimations();
      }
    }

    function handleFocus(event: FocusEvent) {
      if (!(event.target instanceof Node)) return;

      const focusedNode = event.target;

      for (const element of targets) {
        if (element.contains(focusedNode)) {
          observer.unobserve(element);
          revealed.add(element);
          stopAnimation(element);
        }
      }
    }

    startAnimations();

    preference.addEventListener("change", handlePreferenceChange);
    root.addEventListener("focusin", handleFocus);

    return () => {
      preference.removeEventListener(
        "change",
        handlePreferenceChange,
      );

      root.removeEventListener("focusin", handleFocus);
      stopAllAnimations();
    };
  }, []);

  return null;
}