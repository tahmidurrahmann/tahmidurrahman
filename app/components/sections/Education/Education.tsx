import { useScrollReveal } from "../../../hooks/useScrollReveal";

const educationItems = [
  {
    year: "2023 – Present",
    title: "BSc in Computer Science and Engineering",
    institution: "Dhaka City College",
    description:
      "Comprehensive program covering algorithms, data structures, software engineering, databases, and web development.",
  },
  {
    year: "2021 – 2022",
    title: "Higher Secondary Certificate (HSC)",
    institution: "Engineering University School & College",
    description:
      "Completed the Higher Secondary Certificate program with a well-rounded science curriculum.",
  },
  {
    year: "2020",
    title: "Secondary School Certificate (SSC)",
    institution: "Dhaka Collegiate School",
    description: "Completed SSC with a specialization in Science.",
  },
];

const Education = () => {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.13 });

  return (
    <section
      id="education"
      className="relative bg-[#0a0a0f] min-h-[100dvh] flex items-center"
    >
      <div
        ref={ref}
        className="w-full max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-20 py-24 lg:py-0"
      >
        <div
          data-reveal
          className="flex items-center gap-3 text-[#c60678] text-xs font-semibold tracking-widest uppercase mb-4"
        >
          <span className="block w-6 h-px bg-[#c60678]" />
          Background
        </div>

        <h2
          data-reveal
          className="text-3xl sm:text-4xl font-extrabold text-white mb-12"
        >
          Education &{" "}
          <span className="bg-gradient-to-br from-[#c60678] to-[#8b2fc9] bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:gap-16">
          {/* Education timeline */}
          <div>
            <h3
              data-reveal
              className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8"
            >
              Education
            </h3>
            <ol className="relative border-l border-[#c60678]/30 pl-8 space-y-8">
              {educationItems.map((item) => (
                <li
                  key={item.year}
                  data-reveal
                  className="relative rounded-xl border border-white/10 bg-[#09101A] p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="absolute -left-[42px] top-5 w-5 h-5 rounded-full border-4 border-[#0a0a0f] bg-[#c60678]" />
                  <time className="text-[11px] font-mono text-[#c60678] tracking-wider">
                    {item.year}
                  </time>
                  <p className="mt-2 font-bold text-white text-sm">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {item.institution}
                  </p>
                  <p className="mt-3 text-xs leading-6 text-gray-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Experience */}
          <div>
            <h3
              data-reveal
              className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8"
            >
              Experience
            </h3>
            <div
              data-reveal
              className="rounded-xl border border-white/10 bg-[#09101A] p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <time className="text-[11px] font-mono text-[#c60678] tracking-wider">
                November 2023 – Present
              </time>
              <p className="mt-2 font-bold text-white text-sm">
                Freelance Frontend Developer
              </p>
              <p className="mt-3 text-xs leading-6 text-gray-400">
                Independently managing frontend development projects
                specializing in responsive web design and user interface
                development. Collaborating with clients to translate design
                concepts into functional, user-friendly interfaces. Implementing
                best practices to ensure code quality, performance, and
                scalability.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "Next.js", "Tailwind", "TypeScript"].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded border border-[#c60678]/30 text-[#c60678]/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
