import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Attach to a section wrapper. Every child with [data-reveal] will animate
 * in with a staggered fade+slide each time the section enters the viewport.
 * Automatically disables animations safely on mobile screens (< 768px).
 */
export function useScrollReveal<T extends HTMLElement>(options?: {
  y?: number;
  duration?: number;
  stagger?: number;
}) {
  const ref = useRef<T>(null);
  const { y = 40, duration = 0.7, stagger = 0.12 } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Corrected target media query selector for screens below 768px
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const targets = Array.from(
      el.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!targets.length) return;

    let observer: IntersectionObserver | null = null;

    const handleRevealLogic = () => {
      if (mediaQuery.matches) {
        // 1. MOBILE SETUP: Strip animations and render items fully visible
        if (observer) {
          observer.disconnect();
          observer = null;
        }
        targets.forEach((t) => {
          t.style.opacity = "1";
          t.style.transform = "none";
          t.style.transition = "none";
        });
      } else {
        // 2. DESKTOP SETUP: Setup and mount standard Intersection Observer reveal
        const reset = () =>
          targets.forEach((t) => {
            t.style.opacity = "0";
            t.style.transform = `translateY(${y}px)`;
            t.style.transition = "none";
          });

        reset();

        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              targets.forEach((t, i) => {
                t.style.transition = `opacity ${duration}s cubic-bezier(0.215,0.61,0.355,1) ${i * stagger}s, transform ${duration}s cubic-bezier(0.215,0.61,0.355,1) ${i * stagger}s`;
                t.style.opacity = "1";
                t.style.transform = "translateY(0)";
              });
            } else {
              reset();
            }
          },
          { threshold: 0.15 }, // slightly lowered threshold to trigger safely on smaller browser viewports
        );

        observer.observe(el);
      }
    };

    // Initialize logic immediately on mount
    handleRevealLogic();

    // Listen to changes if viewport crosses mobile/desktop boundaries
    mediaQuery.addEventListener("change", handleRevealLogic);

    return () => {
      if (observer) observer.disconnect();
      mediaQuery.removeEventListener("change", handleRevealLogic);
    };
  }, [y, duration, stagger]);

  return ref;
}
