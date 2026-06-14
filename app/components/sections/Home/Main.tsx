"use client";

import { useLayoutEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const mm = gsap.matchMedia();
    const headerEl = document.querySelector<HTMLElement>("header");
    const headerOffsetHeight = headerEl?.offsetHeight ?? 0;

    mm.add("(min-width: 768px)", () => {
      document.body.style.overflow = "hidden";

      const sections = gsap.utils.toArray<Element>("main > section");
      let isScrollInProgress = false;

      const scrollToSection = (sectionToBeScrolled: Element | undefined) => {
        if (!sectionToBeScrolled) return;

        isScrollInProgress = true;
        gsap.to(window, {
          duration: 0.25,
          ease: "sine.inOut",
          scrollTo: { y: sectionToBeScrolled, offsetY: headerOffsetHeight },
          onComplete: () => {
            isScrollInProgress = false;
          },
        });
      };

      sections.forEach((section, sectionIndex) => {
        ScrollTrigger.observe({
          target: section,
          type: "wheel, touch",
          wheelSpeed: -1,
          tolerance: 75,
          onUp: () =>
            !isScrollInProgress && scrollToSection(sections[sectionIndex + 1]),
          onDown: () =>
            !isScrollInProgress && scrollToSection(sections[sectionIndex - 1]),
        });
      });

      // gsap.matchMedia runs this automatically when the query stops matching
      return () => {
        document.body.style.overflow = "visible";
      };
    });

    return () => mm.kill();
  }, []);

  return (
    <main className="xs:[&>section]:mt-[80px] lg:[&>section]:mt-[86px]">
      {children}
    </main>
  );
}
