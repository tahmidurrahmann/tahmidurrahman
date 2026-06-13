import Heading from "../../shared/Heading/Heading";

const skills = [
  { src: "https://i.ibb.co/k0wwS3z/HTML.png", alt: "HTML" },
  { src: "https://i.ibb.co/3WKV4vK/css.png", alt: "CSS" },
  { src: "https://i.ibb.co/8247qLL/Java-Script.png", alt: "JavaScript" },
  { src: "https://i.ibb.co/0yzRCQW/react.png", alt: "React" },
  { src: "https://i.ibb.co/Bs3RD3Z/tailwind.png", alt: "Tailwind CSS" },
  { src: "https://i.ibb.co/1X22qrB/firebase.png", alt: "Firebase" },
  { src: "https://i.ibb.co/VM0Nntk/node.png", alt: "Node.js" },
  { src: "https://i.ibb.co/2NHC17p/express.png", alt: "Express" },
  { src: "https://i.ibb.co/BcgLQ58/mongo.png", alt: "MongoDB" },
];

const Skills = () => {
  return (
    <div id="skills">
      <Heading title="My Skills" />
      <div className="max-w-screen-xl mx-auto px-6 lg:px-0 overflow-hidden">
        <div className="flex w-max animate-[marquee_30s_linear_infinite]">
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8 md:px-16"
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className="h-10 md:h-14 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
