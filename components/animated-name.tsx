"use client";

import { Fragment, useEffect, useRef } from "react";
import { animate } from "motion/mini";

const NAME = "Md Sadman Sami Khan";

export function AnimatedName() {
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = nameRef.current;

    if (!element || !("animate" in HTMLElement.prototype)) {
      return;
    }

    const preference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (preference.matches) return;

    const letters = Array.from(
      element.querySelectorAll<HTMLElement>("[data-name-letter]"),
    );

    const animations = letters.map((letter, index) =>
      animate(
        letter,
        { opacity: [0, 1] },
        {
          duration: 0.01,
          delay: index * 0.075,
          ease: "linear",
        },
      ),
    );

    function showFullName() {
      animations.forEach((animation) => animation.cancel());
    }

    function handlePreferenceChange() {
      if (preference.matches) {
        showFullName();
      }
    }

    preference.addEventListener("change", handlePreferenceChange);

    return () => {
      preference.removeEventListener(
        "change",
        handlePreferenceChange,
      );

      showFullName();
    };
  }, []);

  return (
    <span ref={nameRef} className="animated-name">
      <span className="animated-name-accessible">{NAME}</span>

      <span aria-hidden="true">
        {NAME.split(" ").map((word, wordIndex) => (
          <Fragment key={`${word}-${wordIndex}`}>
            {wordIndex > 0 && " "}

            <span className="animated-name-word">
              {Array.from(word).map((letter, letterIndex) => (
                <span
                  key={`${wordIndex}-${letterIndex}`}
                  data-name-letter
                >
                  {letter}
                </span>
              ))}
            </span>
          </Fragment>
        ))}
      </span>
    </span>
  );
}