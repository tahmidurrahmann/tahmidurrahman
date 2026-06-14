import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";

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
    image:
      "https://i.ibb.co/D8k2qG3/set-mockup-computer-laptop-tablet-smartphone-realistic-isolated-templates-free-vector-1.jpg",
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
    image:
      "https://i.ibb.co/1LHTm76/set-mockup-computer-laptop-tablet-smartphone-realistic-isolated-templates-free-vector-2.jpg",
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
    image:
      "https://i.ibb.co/qnddByG/set-mockup-computer-laptop-tablet-smartphone-realistic-isolated-templates-free-vector.jpg",
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
      className="relative bg-[#070b12] min-h-[100dvh] flex items-center py-16 md:py-24 lg:py-16 overflow-hidden"
    >
      {/* Dynamic Ambient Background Lights */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#c60678]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#8b2fc9]/5 rounded-full blur-[140px] pointer-events-none" />

      <div
        ref={ref}
        className="w-full max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10"
      >
        {/* Section Header */}
        <div className="mb-12">
          <div
            data-reveal
            className="inline-flex items-center gap-2 text-[#c60678] text-xs font-bold tracking-widest uppercase bg-[#c60678]/5 px-3 py-1.5 rounded-full border border-[#c60678]/10 mb-4 w-fit"
          >
            <span className="block w-2 h-2 rounded-full bg-[#c60678]" />
            Selected work
          </div>

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

        {/* Carousel Outer Wrapper */}
        <div
          data-reveal
          className="overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-md shadow-2xl cursor-grab active:cursor-grabbing"
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
            {projects.map((p) => (
              <article
                key={p.title}
                className="min-w-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
              >
                {/* Image Grid Side */}
                <div className="lg:col-span-5 overflow-hidden h-60 sm:h-72 lg:h-auto relative group bg-slate-9ated border-r border-white/[0.04]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b12]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#070b12]/20 z-10" />
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover pointer-events-none group-hover:scale-[1.02] transition duration-700"
                    draggable={false}
                  />
                </div>

                {/* Content Details Side */}
                <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col gap-6 justify-center">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                      {p.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal">
                      {p.description}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-center gap-2 text-[11px] font-medium text-gray-300 bg-white/[0.03] border border-white/[0.05] px-3 py-1.5 rounded-lg"
                      >
                        <svg
                          className="w-3 h-3 text-[#c60678]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-[#c60678]/5 border border-[#c60678]/15 text-[#c60678]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links Bar */}
                  <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-white/[0.05]">
                    {p.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-white/[0.15] px-3.5 py-2 rounded-xl transition duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="text-gray-400 group-hover:text-white">
                          {link.icon}
                        </span>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dynamic Nav Control UI */}
        <div
          data-reveal
          className="flex items-center justify-between mt-6 px-1"
        >
          {/* Slider Indicators */}
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === activeIdx
                    ? "w-10 bg-gradient-to-r from-[#c60678] to-[#8b2fc9]"
                    : "w-3 bg-white/10 hover:bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* Nav Buttons */}
          <div className="flex gap-2.5">
            <button
              onClick={() => goTo(activeIdx - 1)}
              disabled={activeIdx === 0}
              aria-label="Previous project"
              className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm flex items-center justify-center text-gray-400 hover:border-[#c60678]/40 hover:text-[#c60678] disabled:opacity-20 disabled:cursor-not-allowed transition duration-200"
            >
              <svg
                width="16"
                height="16"
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
              className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm flex items-center justify-center text-gray-400 hover:border-[#c60678]/40 hover:text-[#c60678] disabled:opacity-20 disabled:cursor-not-allowed transition duration-200"
            >
              <svg
                width="16"
                height="16"
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
