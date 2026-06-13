"use client";

import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsOpen(false);
  };

  const navLinks = (
    <div className="flex flex-col items-center justify-center gap-8 py-20 font-permanent text-white md:flex-row md:gap-6 md:py-0">
      {links.map((link) => (
        <button
          key={link.id}
          type="button"
          onClick={() => scrollToSection(link.id)}
          className="transition hover:text-[#c60678]"
        >
          {link.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="fixed z-10 w-full bg-[#1515154D] backdrop-blur-sm">
      <div className="mx-auto my-3 max-w-screen-2xl">
        <div className="flex items-center justify-between px-4 xl:px-0">
          <div className="flex gap-1">
            <div className="flex items-center font-permanent text-3xl text-white">
              <img
                className="w-[60px]"
                src="https://i.ibb.co/3BPbCfh/21904da7d079ccffa6b95ecfc6f7bbb7-1.png"
                alt="Tahmid logo"
              />
              Tahmid
            </div>
          </div>
          <div className="hidden gap-4 md:flex">{navLinks}</div>
          <button
            className="flex text-white md:hidden"
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsOpen(true)}
          >
            <CiMenuFries size={28} />
          </button>
          {isOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <button
                aria-label="Close navigation menu"
                type="button"
                className="absolute inset-0 bg-black/60"
                onClick={() => setIsOpen(false)}
              />
              <div className="absolute right-0 top-0 h-full w-72 bg-black p-5 shadow-2xl shadow-black/40">
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  className="rounded-lg text-white transition hover:scale-105 hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  <IoMdClose size={30} />
                </button>
                {navLinks}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
