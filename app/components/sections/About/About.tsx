import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdContentCopy, MdCheck } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import Heading from "../../shared/Heading/Heading";

const contactDetails = [
  {
    icon: <FaWhatsapp size={18} />,
    label: "WhatsApp",
    value: "+8801843821277",
    href: "https://wa.me/8801843821277",
    copyable: true,
  },
  {
    icon: <MdEmail size={18} />,
    label: "Email",
    value: "tahmidurahmann@gmail.com",
    href: "mailto:tahmidurahmann@gmail.com",
    copyable: true,
  },
  {
    icon: <FaLocationDot size={18} />,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "https://maps.google.com/?q=Dhaka,+Bangladesh",
    copyable: false,
  },
];

const About = () => {
  const ref = useScrollReveal<HTMLDivElement>();
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopiedText(value);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section
      id="about"
      className="relative min-h-[100dvh] flex items-center overflow-hidden py-0 md:py-20 lg:py-0"
    >
      {/* Ambient background glow effect */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#c60678]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#8b2fc9]/10 rounded-full blur-[150px] pointer-events-none" />

      <div
        ref={ref}
        className="w-full max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-0 md:gap-8 lg:gap-20 relative z-10"
      >
        {/* Photo Container with Elegant Glass & Border Hover Effect */}
        <div data-reveal className="relative group flex-shrink-0">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#c60678]/30 to-[#8b2fc9]/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

          <div className="hidden md:flex relative sm:w-96 sm:h-64 lg:h-80 lg:w-80 xl:h-[400px] xl:w-[420px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 p-2 group-hover:border-white/20 transition duration-300">
            <img
              src="/tahmidurrahman-about.jpg"
              alt="Tahmidur Rahman Image"
              className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition duration-500 scale-100 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Text and Content Layout */}
        <div className="flex flex-col gap-5 flex-1 max-w-xl">
          <Heading headingText="About me" />
          <h2
            data-reveal
            className="text-3xl lg:text-5xl font-black text-white leading-tight tracking-tight"
          >
            Building things that{" "}
            <span className="bg-gradient-to-r from-[#c60678] via-[#a81cb3] to-[#8b2fc9] bg-clip-text text-transparent">
              actually work.
            </span>
          </h2>

          <p
            data-reveal
            className="text-gray-400 leading-relaxed text-sm lg:text-base font-normal"
          >
            I'm a full-stack developer with 2 years of experience taking
            projects from idea to production. I work across the entire stack,
            backend APIs, databases, and frontend interfaces, and I focus on
            writing code that solves real problems, not just code that passes a
            demo. Currently building at YouthLink Tech while studying CSE at
            Dhaka City College.
          </p>

          {/* Clean Contact Row Layout */}
          <div
            data-reveal
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2"
          >
            {contactDetails.map(({ icon, label, value, href, copyable }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/item flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.04] transition duration-200"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] text-gray-400 group-hover/item:text-[#c60678] group-hover/item:bg-[#c60678]/10 transition duration-200 flex-shrink-0">
                  {icon}
                </span>
                <div className="overflow-hidden flex-1">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                    {label}
                  </p>
                  <p className="text-xs text-gray-300 truncate font-medium group-hover/item:text-white transition duration-200">
                    {value}
                  </p>
                </div>
                {copyable && (
                  <button
                    onClick={(e) => handleCopy(e, value)}
                    className="p-1.5 rounded-md hover:bg-white/5 text-gray-500 hover:text-gray-300 transition opacity-0 group-hover/item:opacity-100"
                    title={`Copy ${label}`}
                  >
                    {copiedText === value ? (
                      <MdCheck className="text-green-400" size={14} />
                    ) : (
                      <MdContentCopy size={14} />
                    )}
                  </button>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
