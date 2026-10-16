"use client";

import { Fragment, useEffect, useRef } from "react";
import { animate } from "motion/mini";
import styles from "./animated-name.module.css";

const NAME = "Md Sadman Sami Khan";

export function AnimatedName() {
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = nameRef.current;
    if (!element || !("animate" in element)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const words = Array.from(
      element.querySelectorAll<HTMLElement>("[data-name-word]"),
    );
    const animations: ReturnType<typeof animate>[] = [];
    let disposed = false;
    let frame = 0;

    function stop() {
      cancelAnimationFrame(frame);
      animations.forEach((animation) => animation.cancel());
      animations.length = 0;
    }

    function handlePreferenceChange() {
      if (preference.matches) stop();
    }

    void document.fonts.ready.then(() => {
      if (disposed || preference.matches) return;
      frame = requestAnimationFrame(() => {
        if (disposed || preference.matches) return;
        words.forEach((word, index) => {
          animations.push(
            animate(
              word,
              {
                opacity: [0, 1],
                transform: ["translateY(105%)", "translateY(0%)"],
              },
              {
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              },
            ),
            animate(
              word,
              { backgroundPosition: ["100% 0%", "0% 0%"] },
              {
                duration: 0.9,
                delay: 0.45 + index * 0.05,
                ease: "easeOut",
              },
            ),
          );
        });
      });
    });

    preference.addEventListener("change", handlePreferenceChange);
    return () => {
      disposed = true;
      preference.removeEventListener("change", handlePreferenceChange);
      stop();
    };
  }, []);

  return (
    <span ref={nameRef} className={styles.root}>
      <span className={styles.accessible}>{NAME}</span>
      <span aria-hidden="true">
        {NAME.split(" ").map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            {index > 0 && " "}
            <span className={styles.mask}>
              <span className={styles.word} data-name-word>
                {word}
              </span>
            </span>
          </Fragment>
        ))}
      </span>
    </span>
  );
}
