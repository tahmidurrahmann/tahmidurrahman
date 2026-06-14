import { useScrollReveal } from "../../../hooks/useScrollReveal";

const educationItems = [
  {
    year: "2023 – Present",
    title: "BSc in Computer Science and Engineering",
    institution: "Dhaka City College",
    description:
      "Actively studying core CS fundamentals while simultaneously applying them in a production environment at work. Coursework in data structures, algorithms, and databases directly informs how I approach real engineering problems.",
  },
  {
    year: "2021 – 2022",
    title: "Higher Secondary Certificate (HSC)",
    institution: "Engineering University School & College",
    description:
      "Science background with strong foundations in mathematics and physics, which shaped how I think about logic and problem solving.",
  },
  {
    year: "2020",
    title: "Secondary School Certificate (SSC)",
    institution: "Dhaka Collegiate School",
    description:
      "Completed SSC under the Science stream. First exposure to structured thinking and problem solving under pressure.",
  },
];

const Education = () => {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.13 });

  return (
    <section
      id="education"
      className="relative min-h-[100dvh] flex items-center"
    >
      <div
        ref={ref}
        className="w-full max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-20 py-0 md:py-24 lg:py-0"
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
          <div
            data-reveal
            className="rounded-xl border border-white/10 bg-[#09101A] p-6 transition-transform duration-300 hover:-translate-y-1 h-fit"
          >
            <time className="text-[11px] font-mono text-[#c60678] tracking-wider">
              April 2024 – Present
            </time>
            <p className="mt-2 font-bold text-white text-sm">
              Full-Stack Developer
            </p>
            <p className="text-xs text-gray-500 mt-0.5">YouthLink Tech</p>
            <p className="mt-3 text-xs leading-6 text-gray-400">
              Started by building the company website backend and a content
              management dashboard for blogs and portfolio items. Now leading
              full-stack development on PoshaX, a production e-commerce
              platform: payment gateway integration with SSLCommerz, inventory
              state management, marketing analytics pipelines, and an internal
              operations dashboard. Shipping to real users in a live
              environment.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express",
                "Next.js",
                "TypeScript",
                "MongoDB",
                "PostgreSQL",
              ].map((t) => (
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
    </section>
  );
};

export default Education;
