"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useActiveSection } from "../../../hooks/useActiveSection";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const sectionIds = links.map((l) => l.id);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeId, scrolled } = useActiveSection(sectionIds);

  const headerRef = useRef<HTMLDivElement>(null);
  const navWrapperRef = useRef<HTMLDivElement>(null);
  const topLineRef = useRef<HTMLSpanElement>(null);
  const middleLineRef = useRef<HTMLSpanElement>(null);
  const bottomLineRef = useRef<HTMLSpanElement>(null);

  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Build the open/close timeline once
  useLayoutEffect(() => {
    if (
      !headerRef.current ||
      !navWrapperRef.current ||
      !topLineRef.current ||
      !middleLineRef.current ||
      !bottomLineRef.current
    ) {
      return;
    }

    const tl = gsap.timeline({
      paused: true,
      reversed: true,
      defaults: { duration: 0.35, ease: "power3.inOut" },
    });

    // Expand header to full viewport height + solid background
    tl.to(headerRef.current, {
      height: "100vh",
      backgroundColor: "#0a0e16",
      backdropFilter: "blur(0px)",
    })
      // Hamburger -> X
      .fromTo(
        topLineRef.current,
        { rotate: 0, y: 0 },
        { rotate: 45, y: 6 },
        "<",
      )
      .fromTo(middleLineRef.current, { opacity: 1 }, { opacity: 0 }, "<")
      .fromTo(
        bottomLineRef.current,
        { rotate: 0, y: 0 },
        { rotate: -45, y: -6 },
        "<",
      )
      // Reveal nav links container
      .fromTo(
        navWrapperRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.2 },
        "<0.1",
      )
      // Stagger in each link
      .fromTo(
        navWrapperRef.current.querySelectorAll("[data-nav-link]"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.06 },
        "<",
      );

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  const toggleMenu = () => {
    const tl = timelineRef.current;
    if (!tl) return;

    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse();
    }
    setIsOpen((prev) => !prev);
  };

  const scrollToSection = (id: string) => {
    if (isOpen) {
      timelineRef.current?.reverse();
      setIsOpen(false);
    }
    // wait for collapse animation before scrolling on mobile
    const delay = isOpen ? 400 : 0;
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, delay);
  };

  const desktopLinks = (
    <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 font-permanent text-sm text-white backdrop-blur-md">
      {links.map((link) => {
        const isActive = activeId === link.id;
        return (
          <button
            key={link.id}
            type="button"
            onClick={() => scrollToSection(link.id)}
            className={`relative rounded-full px-4 py-2 transition-colors duration-300 ${
              isActive ? "text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            {isActive && (
              <span className="absolute inset-0 -z-10 rounded-full bg-[#c60678] shadow-[0_0_20px_rgba(198,6,120,0.5)]" />
            )}
            <span className="relative z-10">{link.label}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <div
      ref={headerRef}
      className={`fixed top-0 pointer-events-none z-50 w-full overflow-hidden transition-[background-color,backdrop-filter,border-color] duration-500 md:bg-transparent md:!h-auto ${
        scrolled
          ? "py-2 md:border-b md:border-white/5 md:bg-[#0a0e16]/80 md:backdrop-blur-md"
          : "py-4"
      }`}
      style={{ height: "auto" }}
    >
      <div className="pointer-events-auto mx-auto max-w-screen-2xl">
        <div className="flex items-center justify-between px-4 xl:px-0">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-1 font-permanent text-xl text-white transition-transform duration-300 hover:scale-105 sm:text-2xl md:text-3xl"
          >
            <img
              className="w-9 sm:w-11 md:w-[60px]"
              src="https://i.ibb.co/3BPbCfh/21904da7d079ccffa6b95ecfc6f7bbb7-1.png"
              alt="Tahmid logo"
            />
            Tahmid
          </button>

          {desktopLinks}

          {/* Hamburger / Close button */}
          <button
            type="button"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={toggleMenu}
            className="relative z-10 flex h-6 w-7 flex-col items-end justify-center gap-[6px] md:hidden"
          >
            <span
              ref={topLineRef}
              className="block h-[2px] w-7 origin-center rounded-full bg-white"
            />
            <span
              ref={middleLineRef}
              className="block h-[2px] w-5 origin-center rounded-full bg-white"
            />
            <span
              ref={bottomLineRef}
              className="block h-[2px] w-7 origin-center rounded-full bg-white"
            />
          </button>
        </div>
      </div>

      {/* Full-screen mobile nav, revealed as header expands */}
      <div
        ref={navWrapperRef}
        className="pointer-events-auto invisible flex h-[calc(100vh-5rem)] flex-col items-center justify-center gap-8 md:hidden"
      >
        {links.map((link) => {
          const isActive = activeId === link.id;
          return (
            <button
              key={link.id}
              type="button"
              data-nav-link
              onClick={() => scrollToSection(link.id)}
              className={`font-permanent text-3xl transition-colors duration-300 ${
                isActive ? "text-[#c60678]" : "text-white hover:text-[#c60678]"
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
