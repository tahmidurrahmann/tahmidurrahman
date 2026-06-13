import { FaFacebookF, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/tahmidur-rahmann/",
    label: "LinkedIn",
    icon: <FaLinkedin size={18} />,
  },
  {
    href: "https://github.com/tahmidurrahmann",
    label: "GitHub",
    icon: <FaGithub size={18} />,
  },
  {
    href: "https://www.facebook.com/tahmidurrahmann/",
    label: "Facebook",
    icon: <FaFacebookF size={18} />,
  },
  {
    href: "https://www.instagram.com/tahmidurahmann/",
    label: "Instagram",
    icon: <FaInstagram size={18} />,
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#09101a] text-gray-300">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-3 items-center text-center md:items-start md:text-left">
            <img
              className="w-[60px]"
              src="https://i.ibb.co/zSQRGMx/21904da7d079ccffa6b95ecfc6f7bbb7-1.png"
              alt="Tahmid logo"
            />
            <p className="text-sm text-gray-400 max-w-xs">
              Full-stack developer building practical, production-grade web
              applications.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c60678]">
              Social
            </h2>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  className="rounded-full border border-white/10 p-3 text-white transition hover:border-[#c60678] hover:bg-[#c60678]"
                  rel="noreferrer"
                  target="_blank"
                  href={link.href}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-4 border-t border-white/10 pt-6 md:flex-row md:justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tahmidur Rahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
