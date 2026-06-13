import { useState, useEffect } from "react";
import { CgExternal } from "react-icons/cg";

const phrases: string[] = [
  "Transforming Vision into Interactive Reality.",
  "Crafting Aesthetically Pleasing User Journeys.",
  "Bringing Designs to Life with Precision.",
  "Where Creativity Meets Code.",
];

const useTypewriter = (
  words: string[],
  speed: number = 50,
  pause: number = 1000,
): string => {
  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [deleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        speed,
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        speed / 2,
      );
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => i + 1);
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
};

const Banner = () => {
  const typedText: string = useTypewriter(phrases);

  return (
    <div className="background" id="home">
      <div className="max-w-screen-xl mx-auto lg:min-h-screen">
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-20 xl:gap-60 py-24 lg:py-56">
          <div className="space-y-6 lg:w-3/4 px-16 lg:px-4">
            <div className="text-xl md:text-4xl font-extrabold text-white">
              Hello, I'm <br />
              <span className="text-2xl lg:text-6xl">Tahmidur Rahman</span>
            </div>
            <span className="text-[#c60678] font-semibold text-xl md:text-2xl lg:text-3xl inline-block min-h-[1.5em]">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
            <div>
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1YXrFPDjmROJZMYrHA8IP53Z_iyTVNYp1MUM7mHbJK8E/edit?usp=sharing"
                rel="noopener noreferrer"
                className="button"
              >
                <i className="animation"></i>Resume
                <CgExternal size={23} />
                <i className="animation"></i>
              </a>
            </div>
          </div>
          <div>
            <img
              className="rounded-full border-x-transparent border-y-[#c60678] border-8 w-60 md:w-72 lg:w-full"
              src="https://i.ibb.co/Nr7XXRX/270224004-3140648616261730-993033304660391605-n.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
