"use client";
import { CgExternal } from "react-icons/cg";
import { useScrollReveal } from "../../../../hooks/useScrollReveal";
import Heading from "../../../shared/Heading/Heading";
import { SiNodedotjs, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useEffect, useRef } from "react";

gsap.registerPlugin(Draggable);

const Banner = () => {
  const containerRef = useScrollReveal<HTMLDivElement>();
  const photoWrapRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (!photoWrapRef.current) return;

    // idle floating tween per badge, instead of Tailwind's animate-bounce
    const floats = badgeRefs.current.map((el, i) =>
      el
        ? gsap.to(el, {
            y: -8,
            duration: 2 + i * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          })
        : null,
    );

    const draggables = badgeRefs.current
      .filter(Boolean)
      .map((el, i) =>
        Draggable.create(el, {
          type: "x,y",
          bounds: containerRef.current, // whole hero, not just the photo wrapper
          edgeResistance: 0.65,
          inertia: false,
          onPress() {
            floats[i]?.pause();
            gsap.to(this.target, { scale: 1.15, zIndex: 50, duration: 0.15 });
          },
          onRelease() {
            gsap.to(this.target, { scale: 1, zIndex: "auto", duration: 0.15 });
            floats[i]?.resume();
          },
        }),
      )
      .flat();

    return () => {
      draggables.forEach((d) => d.kill());
      floats.forEach((f) => f?.kill());
    };
  }, [containerRef]);

  const badges = [
    {
      icon: <TbBrandNextjs size={18} className="text-white" />,
      pos: "top-2 left-4 sm:top-4 sm:left-1.5 lg:top-6 lg:left-6",
      size: "w-9 h-9 sm:w-11 sm:h-11",
    },
    {
      icon: <BiLogoPostgresql size={22} className="text-[#336791]" />,
      pos: "bottom-20 -left-6 sm:-left-5 lg:bottom-24 lg:-left-6",
      size: "w-9 h-9 sm:w-11 sm:h-11",
    },
    {
      icon: <SiNodedotjs size={18} className="text-[#5FA04E]" />,
      pos: "top-1/3 -right-3 sm:-right-5 lg:-right-7",
      size: "w-9 h-9 sm:w-11 sm:h-11",
    },
    {
      icon: <SiTypescript size={16} className="text-[#3178C6]" />,
      pos: "top-4 right-6 sm:top-6 sm:right-8",
      size: "w-8 h-8 sm:w-10 sm:h-10",
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden h-[100dvh] flex items-center"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 -right-20 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(198,6,120,0.18)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(83,74,183,0.14)_0%,transparent_70%)]" />

      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-20 pt-20 pb-8 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24"
      >
        {/* Left */}
        <div className="flex flex-col gap-5 lg:max-w-[560px]">
          <Heading headingText="Hello, I'm Tahmidur Rahman." />

          <h1
            data-reveal
            className="text-5xl sm:text-6xl lg:text-[64px] font-extrabold leading-[1.05] tracking-tight text-white"
          >
            Full-Stack
            <br />
            <span className="bg-gradient-to-br from-[#c60678] to-[#8b2fc9] bg-clip-text text-transparent">
              Web Developer,
            </span>
          </h1>

          <p
            data-reveal
            className="text-[#a0a0b0] text-sm sm:text-base leading-relaxed max-w-md"
          >
            I build complete web applications, backend to frontend, and ship
            them to real users.
          </p>

          <div data-reveal className="w-10 h-0.5 bg-[#c60678] rounded-full" />

          <div data-reveal className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 bg-[#c60678] hover:bg-[#a0055f] text-white text-sm font-semibold px-5 py-2.5 2xl:px-8 2xl:py-4 rounded-md transition-all duration-200 hover:-translate-y-px"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              See my work
            </button>
            <a
              href="https://docs.google.com/document/d/1YXrFPDjmROJZMYrHA8IP53Z_iyTVNYp1MUM7mHbJK8E/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#c60678]/50 text-white text-sm font-medium px-5 py-2.5 2xl:px-8 2xl:py-4 rounded-md transition-all duration-200 hover:-translate-y-px hover:bg-[#a0055f]"
            >
              Resume
              <CgExternal size={20} />
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div
          data-reveal
          ref={photoWrapRef}
          className="relative flex-shrink-0 touch-pan-y"
        >
          <svg
            className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] animate-[spin_10s_linear_infinite]"
            viewBox="0 0 216 216"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="ring-grad"
                x1="0"
                y1="0"
                x2="216"
                y2="216"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#c60678" />
                <stop offset="50%" stopColor="#8b2fc9" />
                <stop offset="100%" stopColor="#c60678" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <circle
              cx="108"
              cy="108"
              r="104"
              stroke="url(#ring-grad)"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              strokeLinecap="round"
            />
          </svg>

          <img
            src="/programmer-working.webp"
            alt="programmer-working-on-a-desktop"
            className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full object-cover border-[3px] border-[#0a0a0f]"
          />

          {badges.map((b, i) => (
            <div
              key={i}
              ref={(el) => {
                badgeRefs.current[i] = el;
              }}
              className={`absolute ${b.pos} ${b.size} flex items-center justify-center rounded-full bg-[#0a0a0f] border border-white/10 shadow-lg cursor-grab active:cursor-grabbing`}
            >
              {b.icon}
            </div>
          ))}

          {/* <div className="absolute bottom-2 -right-4 flex items-center gap-1.5 bg-[#0a0a0f] border border-white/10 rounded-full px-3 py-1.5 text-[11px] text-[#a0a0b0] font-medium whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
            On a Project via YouthLink
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase">
          Scroll Down
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
};

export default Banner;
