const educationItems = [
  {
    year: "2023-Present",
    title: "Bachelor of Science in Computer Science and Engineering",
    institution: "Dhaka City College",
    description:
      "Currently pursuing a comprehensive BSc program with a focus on Computer Science and Engineering at City College, Dhaka. Gaining a solid foundation in core computer science principles, algorithms, and data structures. Actively participating in coursework covering software engineering, databases, and web development.",
  },
  {
    year: "2021-2022",
    title: "Higher Secondary Certificate (HSC)",
    institution: "Engineering University School & College",
    description:
      "Successfully completed the Higher Secondary Certificate program with a focus on a well-rounded education at Engineering University School & College, Dhaka.",
  },
  {
    year: "2020",
    title: "Secondary School Certificate (SSC)",
    institution: "Dhaka Collegiate School, Dhaka",
    description:
      "Successfully completed the SSC program with a specialization in Science from Dhaka Collegiate School.",
  },
];

const Education = () => {
  return (
    <div id="education" className="mx-auto max-w-screen-xl">
      <div className="flex items-center justify-center py-24 uppercase lg:pt-40">
        <h1 className="text-lg font-semibold text-[#c60678] md:text-2xl">
          my education & experiences
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-12 px-6 lg:grid-cols-[1.4fr_0.8fr] lg:px-0">
        <div>
          <h1 className="py-4 text-center text-xl font-semibold md:text-3xl">
            Education
          </h1>
          <ol className="relative mt-8 space-y-8 border-l border-[#c60678]/40 pl-8">
            {educationItems.map((item) => (
              <li
                key={item.year}
                className="relative rounded-lg border border-white/10 bg-[#09101A] p-5 shadow-lg shadow-black/20"
              >
                <span className="absolute -left-[42px] top-5 flex h-5 w-5 items-center justify-center rounded-full border-4 border-black bg-[#c60678]" />
                <time className="font-mono text-sm italic text-[#c60678]">
                  {item.year}
                </time>
                <div className="mt-2 font-extrabold">
                  <p>{item.title}</p>
                  <p>{item.institution}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-3">
          <h1 className="py-4 text-center text-xl font-semibold md:text-3xl">
            Experiences
          </h1>
          <div
            className="rounded-lg border border-white/10 bg-[#09101A] p-6 shadow-lg shadow-black/20"
          >
            <time className="font-mono text-sm italic text-[#c60678]">
              November 2023 - Present
            </time>
            <div className="mt-2 font-extrabold">
              Freelance Frontend Developer
            </div>
            <div className="mt-3 text-sm leading-6 text-gray-300">
              Independently managing and executing frontend development
              projects, specializing in responsive web design, user interface
              development. Collaborating with clients to understand project
              requirements and translating design concepts into functional,
              user-friendly interfaces. Implementing best practices in web
              development to ensure code quality, performance, and scalability.
              Continuously expanding technical skill set through self-directed
              learning and staying updated on industry trends.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
