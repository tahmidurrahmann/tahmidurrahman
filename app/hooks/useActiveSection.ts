"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Returns the id of the section whose vertical center is closest to the
 * viewport center, and a boolean for whether the page has been scrolled
 * past a small threshold (useful for navbar shrink effects).
 *
 * Using a single "closest to center" calculation (instead of independent
 * per-section enter/leave triggers) avoids cases where two adjacent short
 * sections both report as active.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateActive = () => {
      const viewportCenter = window.scrollY + window.innerHeight / 2;

      let closestId = sectionIds[0] ?? "";
      let closestDistance = Infinity;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionCenter = sectionTop + rect.height / 2;
        const distance = Math.abs(viewportCenter - sectionCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = id;
        }
      });

      setActiveId(closestId);
      setScrolled(window.scrollY > 40);
    };

    updateActive();

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: updateActive,
    });

    window.addEventListener("resize", updateActive);

    return () => {
      trigger.kill();
      window.removeEventListener("resize", updateActive);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(",")]);

  return { activeId, scrolled };
}
