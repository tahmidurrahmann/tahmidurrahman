"use client";
import { CgExternal } from "react-icons/cg";
import { useScrollReveal } from "../../../../hooks/useScrollReveal";

const Banner = () => {
  const containerRef = useScrollReveal<HTMLDivElement>();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
        className="relative z-10 w-full max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-20 pt-20 pb-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24"
      >
        {/* Left */}
        <div className="flex flex-col gap-5 lg:max-w-[560px]">
          <div
            data-reveal
            className="flex items-center gap-3 text-[#c60678] text-xs font-semibold tracking-widest uppercase"
          >
            <span className="block w-6 h-px bg-[#c60678]" />
            Hello, I'm Tahmidur Rahman.
          </div>

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
              className="inline-flex items-center gap-2 bg-[#c60678] hover:bg-[#a0055f] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-all duration-200 hover:-translate-y-px"
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
              className="inline-flex items-center gap-2 border border-[#c60678]/50 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-all duration-200 hover:-translate-y-px hover:bg-[#a0055f]"
            >
              Resume
              <CgExternal size={20} />
            </a>
          </div>

          <div data-reveal className="flex items-center gap-2 mt-1">
            {[
              {
                label: "GitHub",
                href: "https://github.com/tahmidurrahmann",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/tahmidur-rahmann/",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-9 h-9 rounded-md border border-white/[0.08] text-[#808090] hover:border-[#c60678]/50 hover:text-[#c60678] transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div data-reveal className="relative flex-shrink-0">
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
            src="https://i.ibb.co/Nr7XXRX/270224004-3140648616261730-993033304660391605-n.jpg"
            alt="Tahmidur Rahman"
            className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-[3px] border-[#0a0a0f]"
          />
          <div className="absolute bottom-2 -right-4 flex items-center gap-1.5 bg-[#0a0a0f] border border-white/10 rounded-full px-3 py-1.5 text-[11px] text-[#a0a0b0] font-medium whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
            On a Project via YouthLink
          </div>
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
