"use client";

import { useEffect } from "react";

export default function ScrollMotion() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!elements.length) return;

    const markVisibleElements = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      elements.forEach((element) => {
        if (element.dataset.inview === "true") return;

        const rect = element.getBoundingClientRect();
        const visible = rect.top < viewportHeight * 0.92 && rect.bottom > viewportHeight * 0.08;

        if (visible) {
          element.dataset.inview = "true";
        }
      });
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      elements.forEach((element) => {
        element.dataset.inview = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.inview = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -6% 0px",
        threshold: 0.08
      }
    );

    elements.forEach((element) => observer.observe(element));
    markVisibleElements();

    window.addEventListener("load", markVisibleElements);
    window.addEventListener("resize", markVisibleElements);
    window.addEventListener("orientationchange", markVisibleElements);

    return () => {
      observer.disconnect();
      window.removeEventListener("load", markVisibleElements);
      window.removeEventListener("resize", markVisibleElements);
      window.removeEventListener("orientationchange", markVisibleElements);
    };
  }, []);

  return null;
}
