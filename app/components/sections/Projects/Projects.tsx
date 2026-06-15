import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";
import Heading from "../../shared/Heading/Heading";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  highlights: string[];
  links: { label: string; href: string; icon: React.ReactNode }[];
};

const projects: Project[] = [
  {
    title: "The Glass House",
    description:
      "Building Management System with remote property management. User, Member and Admin dashboards with tailored experiences including profile views, payment functionalities, announcements and admin-exclusive controls.",
    image: "/glass-house.png",
    tags: [
      "JavaScript",
      "React",
      "Firebase",
      "Tailwind",
      "Node",
      "Express",
      "MongoDB",
    ],
    highlights: [
      "Seamless user experiences",
      "Dynamic payment & coupons",
      "Admin control panel",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://build-minder-client.web.app/",
        icon: <MdOutlineLiveTv size={16} />,
      },
      {
        label: "Client Repository",
        href: "https://github.com/tahmidurrahmann/building-management-client",
        icon: <FaGithub size={16} />,
      },
      {
        label: "Server Repository",
        href: "https://github.com/tahmidurrahmann/building-management-server",
        icon: <FaGithub size={16} />,
      },
    ],
  },
  {
    title: "Study Together",
    description:
      "Collaborative learning platform allowing users to create, submit, and grade assignments within a friendly community. Supports individual submissions with feedback and grading workflows.",
    image: "/study-together.png",
    tags: [
      "JavaScript",
      "React",
      "Firebase",
      "Tailwind",
      "Node",
      "Express",
      "MongoDB",
    ],
    highlights: [
      "Dynamic assignment creation",
      "Seamless collaboration",
      "Secure authentication",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://study-together-client.web.app/",
        icon: <MdOutlineLiveTv size={16} />,
      },
      {
        label: "Client Repository",
        href: "https://github.com/tahmidurrahmann/online-group-study-client",
        icon: <FaGithub size={16} />,
      },
      {
        label: "Server Repository",
        href: "https://github.com/tahmidurrahmann/online-group-study-server",
        icon: <FaGithub size={16} />,
      },
    ],
  },
  {
    title: "Dream Tech",
    description:
      "Brand shop focused on technology and electronics. Features brand-specific product pages, cart management, and multi-provider authentication including email/password and social login.",
    image: "/dream-tech.png",
    tags: [
      "JavaScript",
      "React",
      "Firebase",
      "Tailwind",
      "Node",
      "Express",
      "MongoDB",
    ],
    highlights: ["Brand exploration", "Cart management", "Multi-provider auth"],
    links: [
      {
        label: "Live Demo",
        href: "https://dream-tech-client.web.app/",
        icon: <MdOutlineLiveTv size={16} />,
      },
      {
        label: "Client Repository",
        href: "https://github.com/tahmidurrahmann/brand-shop-client",
        icon: <FaGithub size={16} />,
      },
      {
        label: "Server Repository",
        href: "https://github.com/tahmidurrahmann/brand-shop-server",
        icon: <FaGithub size={16} />,
      },
    ],
  },
];

const Projects = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.15 });
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const goTo = (idx: number) =>
    setActiveIdx(Math.max(0, Math.min(idx, projects.length - 1)));

  useEffect(() => {
    const onMouseUp = (e: MouseEvent) => {
      if (dragStartX.current === null) return;
      const delta = e.clientX - dragStartX.current;
      if (isDragging.current) {
        if (delta < -60) goTo(activeIdx + 1);
        else if (delta > 60) goTo(activeIdx - 1);
      }
      dragStartX.current = null;
      isDragging.current = false;
    };
    window.addEventListener("mouseup", onMouseUp);
    return () => window.removeEventListener("mouseup", onMouseUp);
  }, [activeIdx]);

  const onMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 5) isDragging.current = true;
  };

  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -60) goTo(activeIdx + 1);
    else if (delta > 60) goTo(activeIdx - 1);
    touchStartX.current = null;
  };

  return (
    <section
      id="projects"
      className="relative min-h-[100dvh] flex items-center py-16 md:py-24 lg:py-16 overflow-hidden"
    >
      <div
        ref={ref}
        className="w-full max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 pt-6 lg:pt-12"
      >
        {/* Section Header */}
        <div className="mb-12 flex items-end justify-between flex-wrap gap-4">
          <div className="flex flex-col gap-5">
            <Heading headingText="Selected work" />
            <h2
              data-reveal
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight"
            >
              Featured{" "}
              <span className="bg-gradient-to-r from-[#c60678] via-[#a81cb3] to-[#8b2fc9] bg-clip-text text-transparent">
                Case Studies.
              </span>
            </h2>
          </div>

          <div
            data-reveal
            className="font-mono text-xs text-gray-500 tracking-[0.2em] uppercase"
          >
            Index — {String(activeIdx + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </div>
        </div>

        {/* Carousel Outer Wrapper */}
        <div
          data-reveal
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d121c] cursor-grab active:cursor-grabbing"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex will-change-transform"
            style={{
              transform: `translateX(-${activeIdx * 100}%)`,
              transition: "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="min-w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 overflow-hidden p-5 sm:p-8 lg:p-10 items-center"
              >
                {/* Image Side */}
                <div className="lg:col-span-5 h-48 sm:h-60 lg:h-72 relative pointer-events-none select-none">
                  <Image
                    className="object-contain"
                    src={p.image}
                    alt={`${p.title} Mockup`}
                    fill
                    sizes="1200px"
                  />
                </div>

                {/* Content Side */}
                <div className="lg:col-span-7 flex flex-col gap-3 justify-center">
                  <span className="w-fit px-2.5 py-1 text-xs font-medium rounded-md text-[#c60678] bg-[#c60678]/10 border border-[#c60678]/20">
                    Project {i + 1}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {p.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {p.description}
                  </p>

                  <p className="text-gray-400 text-sm">
                    <span className="font-semibold text-gray-300">
                      Tech Stack:{" "}
                    </span>
                    {p.tags.join(", ")}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 pt-3">
                    {p.links.map((link, idx) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={
                          idx === 0
                            ? "inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#c60678] hover:bg-[#a8055f] px-4 py-2 rounded-lg transition duration-200"
                            : "inline-flex items-center gap-2 text-sm font-semibold text-gray-300 border border-white/10 hover:border-[#c60678]/40 hover:text-[#c60678] px-4 py-2 rounded-lg transition duration-200"
                        }
                      >
                        {link.icon}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Index Nav */}
        <div
          data-reveal
          className="flex items-center justify-between mt-6 flex-wrap gap-4"
        >
          <div className="flex gap-6 font-mono text-xs sm:text-sm flex-wrap">
            {projects.map((p, i) => (
              <button
                key={p.title}
                onClick={() => goTo(i)}
                className={`tracking-wide transition-colors duration-200 ${
                  i === activeIdx
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-400"
                }`}
              >
                0{i + 1}
                <span className="hidden sm:inline"> — {p.title}</span>
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => goTo(activeIdx - 1)}
              disabled={activeIdx === 0}
              aria-label="Previous project"
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#c60678]/40 hover:text-[#c60678] disabled:opacity-20 disabled:cursor-not-allowed transition duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => goTo(activeIdx + 1)}
              disabled={activeIdx === projects.length - 1}
              aria-label="Next project"
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#c60678]/40 hover:text-[#c60678] disabled:opacity-20 disabled:cursor-not-allowed transition duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
