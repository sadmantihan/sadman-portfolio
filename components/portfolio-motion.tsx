"use client";

import { useEffect } from "react";
import { hover, press } from "motion";
import { animate } from "motion/mini";

const CARD_SELECTOR = [
  "#about .about-copy",
  "#projects .project",
  "#experience article",
  "#news ul > li",
  "#articles .article-preview",
  "#articles .articles-empty",
  "#skills .section-body > div > div",
  "#education .education > div:not(.school-stack)",
  "#education .school-card",
  "#education .section-body > div > div > ul > li",
  "#contact .contact-form",
].join(", ");

const BUTTON_SELECTOR = [
  "#home .button",
  "#home .socials a",
  "#home .project-link",
  "#home .hero-socials a",
  "#education a",
  "#education a[aria-label]",
  "#experience summary",
  ".portfolio-header .mobile-menu-button",
].join(", ");

export function PortfolioMotion() {
  useEffect(() => {
    const root = document.getElementById("home");

    if (!root || !("animate" in HTMLElement.prototype)) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const printing = window.matchMedia("print");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    const seen = new WeakSet<HTMLElement>();

    const cards = Array.from(root.querySelectorAll<HTMLElement>(CARD_SELECTOR));

    const buttons = Array.from(
      document.querySelectorAll<HTMLElement>(BUTTON_SELECTOR),
    );

    const portrait = root.querySelector<HTMLElement>(".hero-portrait");

    const contact = root.querySelector<HTMLElement>(".contact-grid > div");

    const heroCopy = Array.from(
      root.querySelectorAll<HTMLElement>(
        ".hero-career-line, .hero-availability, .hero-bottom > div",
      ),
    );

    const targets = [
      ...heroCopy,
      ...cards,
      ...(contact ? [contact] : []),
      ...(portrait ? [portrait] : []),
    ];

    const interactive = [...cards, ...buttons, ...(portrait ? [portrait] : [])];

    const buttonSet = new Set(buttons);

    const originals = new Map(
      [...new Set([...targets, ...interactive])].map((element) => [
        element,
        {
          transform: element.style.transform,
          translate: element.style.translate,
          opacity: element.style.opacity,
        },
      ]),
    );

    function setup() {
      if (reduced.matches || printing.matches) {
        return () => {};
      }

      const entrances = new Map<HTMLElement, ReturnType<typeof animate>>();

      const gestures = new Map<HTMLElement, ReturnType<typeof animate>>();

      const hovering = new Set<HTMLElement>();
      const pressing = new Set<HTMLElement>();
      const cleanups: Array<() => void> = [];

      let observer: IntersectionObserver | undefined;

      function finishEntrance(element: HTMLElement) {
        entrances.get(element)?.cancel();
        entrances.delete(element);

        const original = originals.get(element)!;

        element.style.opacity = original.opacity;
        element.style.translate = original.translate;
      }

      function reveal(element: HTMLElement, delay = 0) {
        if (seen.has(element)) return;

        seen.add(element);

        // Focused content must remain immediately readable.
        if (element.contains(document.activeElement)) return;

        const distance = 16;

        const animation = animate(
          element,
          {
            opacity: [0.15, 1],
            translate: [`0px ${distance}px`, "0px 0px"],
          },
          {
            duration: 0.28,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        );

        entrances.set(element, animation);

        void animation.then(() => {
          if (entrances.get(element) === animation) {
            finishEntrance(element);
          }
        });
      }

      function updateGesture(element: HTMLElement) {
        const disabled = element.matches(":disabled, [aria-disabled='true']");

        const isPressed = !disabled && pressing.has(element);

        const isHovered = !disabled && hovering.has(element);

        const isButton = buttonSet.has(element);

        let transform = "translateY(0px) scale(1) rotate(0deg)";

        if (isPressed) {
          transform = isButton
            ? "translateY(0px) scale(0.98) rotate(0deg)"
            : "translateY(0px) scale(0.99) rotate(0deg)";
        } else if (isHovered) {
          transform =
            element === portrait
              ? "translateY(-4px) scale(1) rotate(0deg)"
              : isButton
                ? "translateY(-2px) scale(1) rotate(0deg)"
                : "translateY(-4px) scale(1) rotate(0deg)";
        }
        // Start from the current position if a gesture is interrupted.
        const current = getComputedStyle(element).transform;

        gestures.get(element)?.cancel();

        const animation = animate(
          element,
          {
            transform: [current, transform],
          },
          {
            duration: isPressed ? 0.12 : isButton ? 0.16 : 0.18,
            ease: [0.22, 1, 0.36, 1],
          },
        );

        gestures.set(element, animation);

        void animation.then(() => {
          if (gestures.get(element) !== animation) return;

          element.style.transform =
            isPressed || isHovered
              ? transform
              : originals.get(element)!.transform;

          animation.cancel();
          gestures.delete(element);
        });
      }

      targets.forEach((element) => {
        element.dataset.motionReveal = "";
      });

      interactive.forEach((element) => {
        element.dataset.motionUi = "";
      });

      // Hover movement for mouse/trackpad users.
      cleanups.push(
        hover(interactive, (target) => {
          if (!finePointer.matches) return;

          const element = target as HTMLElement;

          hovering.add(element);
          updateGesture(element);

          return () => {
            hovering.delete(element);
            updateGesture(element);
          };
        }),
      );

      // Press feedback also works for touch and keyboard interaction.
      cleanups.push(
        press(buttons, (target) => {
          const element = target as HTMLElement;

          if (element.matches(":disabled, [aria-disabled='true']")) {
            return;
          }

          pressing.add(element);
          updateGesture(element);

          return () => {
            pressing.delete(element);
            updateGesture(element);
          };
        }),
      );
      // Touch feedback for cards and the portrait.
      // Native scrolling remains enabled.
      let activeTouch: {
        element: HTMLElement;
        pointerId: number;
        startX: number;
        startY: number;
      } | null = null;

      function releaseTouch() {
        if (!activeTouch) return;

        const { element } = activeTouch;
        activeTouch = null;

        pressing.delete(element);
        updateGesture(element);
      }

      function onTouchStart(event: PointerEvent) {
        if (event.pointerType !== "touch" || !event.isPrimary) return;
        if (!(event.target instanceof Element)) return;

        // Buttons and links keep their own interaction behavior.
        if (
          event.target.closest(
            "a, button, input, textarea, select, summary, [role='button']",
          )
        ) {
          return;
        }

        const element = event.target.closest<HTMLElement>("[data-motion-ui]");

        if (!element || !root!.contains(element)) return;

        releaseTouch();

        activeTouch = {
          element,
          pointerId: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
        };

        pressing.add(element);
        updateGesture(element);
      }

      function onTouchMove(event: PointerEvent) {
        if (!activeTouch || event.pointerId !== activeTouch.pointerId) {
          return;
        }

        const distance = Math.hypot(
          event.clientX - activeTouch.startX,
          event.clientY - activeTouch.startY,
        );

        // Stop the press effect when the gesture becomes a scroll.
        if (distance > 10) releaseTouch();
      }

      function onTouchEnd(event: PointerEvent) {
        if (event.pointerId === activeTouch?.pointerId) {
          releaseTouch();
        }
      }

      root!.addEventListener("pointerdown", onTouchStart, {
        passive: true,
      });

      window.addEventListener("pointermove", onTouchMove, {
        passive: true,
      });

      window.addEventListener("pointerup", onTouchEnd);
      window.addEventListener("pointercancel", onTouchEnd);
      window.addEventListener("blur", releaseTouch);

      cleanups.push(() => {
        root!.removeEventListener("pointerdown", onTouchStart);
        window.removeEventListener("pointermove", onTouchMove);
        window.removeEventListener("pointerup", onTouchEnd);
        window.removeEventListener("pointercancel", onTouchEnd);
        window.removeEventListener("blur", releaseTouch);

        if (activeTouch) {
          pressing.delete(activeTouch.element);
          activeTouch = null;
        }
      });
      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver(
          (entries) => {
            let order = 0;

            for (const entry of entries) {
              if (!entry.isIntersecting) continue;

              observer?.unobserve(entry.target);

              reveal(entry.target as HTMLElement, Math.min(order++, 3) * 0.05);
            }
          },
          {
            threshold: 0.1,
            rootMargin: "0px 0px -40px 0px",
          },
        );

        targets.forEach((element) => {
          const bounds = element.getBoundingClientRect();

          // The portrait receives its own entrance.
          if (
            (element === portrait || heroCopy.includes(element)) &&
            window.scrollY < 40
          ) {
            observer?.observe(element);
          } else if (bounds.top < window.innerHeight) {
            // Do not hide content already visible on initial load.
            seen.add(element);
          } else {
            observer?.observe(element);
          }
        });
      }

      const onFocus = (event: FocusEvent) => {
        if (!(event.target instanceof Node)) return;

        const focused = event.target;

        targets.forEach((element) => {
          if (!element.contains(focused)) return;

          seen.add(element);
          observer?.unobserve(element);
          finishEntrance(element);
        });
      };

      root!.addEventListener("focusin", onFocus);

      return () => {
        cleanups.forEach((cleanup) => cleanup());
        observer?.disconnect();
        root!.removeEventListener("focusin", onFocus);

        entrances.forEach((animation) => animation.cancel());
        gestures.forEach((animation) => animation.cancel());

        entrances.clear();
        gestures.clear();

        originals.forEach((original, element) => {
          Object.assign(element.style, original);

          delete element.dataset.motionUi;
          delete element.dataset.motionReveal;
        });
      };
    }

    let cleanup = setup();

    const restart = () => {
      cleanup();
      cleanup = setup();
    };

    reduced.addEventListener("change", restart);
    printing.addEventListener("change", restart);

    return () => {
      reduced.removeEventListener("change", restart);
      printing.removeEventListener("change", restart);
      cleanup();
    };
  }, []);

  return null;
}