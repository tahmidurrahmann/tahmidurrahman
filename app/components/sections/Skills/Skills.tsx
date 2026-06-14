import { useScrollReveal } from "../../../hooks/useScrollReveal";

type Skill = { src: string; alt: string; docs: string };
type SkillCategory = { title: string; skills: Skill[] };

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      {
        src: "https://i.ibb.co/k0wwS3z/HTML.png",
        alt: "HTML",
        docs: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        src: "https://i.ibb.co/3WKV4vK/css.png",
        alt: "CSS",
        docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        src: "https://i.ibb.co/8247qLL/Java-Script.png",
        alt: "JavaScript",
        docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        src: "https://res.cloudinary.com/tahmidur-rahman/image/upload/v1781437420/Typescript.svg_t934ds.png",
        alt: "TypeScript",
        docs: "https://www.typescriptlang.org/docs",
      },
      {
        src: "https://i.ibb.co/0yzRCQW/react.png",
        alt: "React",
        docs: "https://react.dev",
      },
      {
        src: "https://res.cloudinary.com/tahmidur-rahman/image/upload/v1781437597/nextjs-icon-dark-background_hgictm.png",
        alt: "Next.js",
        docs: "https://nextjs.org/docs",
      },
      {
        src: "https://i.ibb.co/Bs3RD3Z/tailwind.png",
        alt: "Tailwind",
        docs: "https://tailwindcss.com/docs",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        src: "https://i.ibb.co/VM0Nntk/node.png",
        alt: "Node.js",
        docs: "https://nodejs.org/en/docs",
      },
      {
        src: "https://i.ibb.co/2NHC17p/express.png",
        alt: "Express",
        docs: "https://expressjs.com",
      },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      {
        src: "https://res.cloudinary.com/tahmidur-rahman/image/upload/v1781437420/images_1_bb49iy.png",
        alt: "PostgreSQL",
        docs: "https://www.postgresql.org/docs",
      },
      {
        src: "https://i.ibb.co/BcgLQ58/mongo.png",
        alt: "MongoDB",
        docs: "https://www.mongodb.com/docs",
      },
      {
        src: "https://i.ibb.co/1X22qrB/firebase.png",
        alt: "Firebase",
        docs: "https://firebase.google.com/docs",
      },
    ],
  },
];

const Skills = () => {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <section
      id="skills"
      className="relative min-h-[100dvh] flex items-center py-0 md:py-20 lg:py-0 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8b2fc9]/5 rounded-full blur-[180px] pointer-events-none" />

      <div
        ref={ref}
        className="w-full max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10"
      >
        {/* Section Header */}
        <div className="mb-14">
          <div
            data-reveal
            className="inline-flex items-center gap-2 text-[#c60678] text-xs font-bold tracking-widest uppercase bg-[#c60678]/5 px-3 py-1.5 rounded-full border border-[#c60678]/10 mb-4 w-fit"
          >
            <span className="block w-2 h-2 rounded-full bg-[#c60678]" />
            What I work with
          </div>

          <h2
            data-reveal
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight"
          >
            My Expert{" "}
            <span className="bg-gradient-to-r from-[#c60678] via-[#a81cb3] to-[#8b2fc9] bg-clip-text text-transparent">
              Tech Stack.
            </span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              data-reveal
              className="rounded-2xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-md p-6 hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-300 group/card"
            >
              {/* Category Title */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover/card:text-[#c60678] transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Inner Skills Layout */}
              <div className="grid grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <a
                    key={skill.alt}
                    href={skill.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/skill flex flex-col items-center justify-center gap-2.5 rounded-xl border border-white/[0.04] bg-white/[0.01] p-3 transition-all duration-300 hover:border-[#c60678]/30 hover:bg-[#c60678]/5 hover:-translate-y-0.5"
                  >
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      <div className="absolute inset-1 bg-white/10 rounded-full blur-md opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                      <img
                        src={skill.src}
                        alt={skill.alt}
                        className="h-8 w-8 object-contain relative z-10 transition-transform duration-300 group-hover/skill:scale-110"
                      />
                    </div>
                    <span className="text-center text-[10px] font-medium text-gray-400 group-hover/skill:text-white transition-colors duration-200 truncate w-full px-1">
                      {skill.alt}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
