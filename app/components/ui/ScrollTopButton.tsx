"use client";

import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollTopButton() {
  useEffect(() => {
    const handleOnScroll = () => {
      const scrollToTopButton = document.getElementById("scroll-top");

      if (scrollToTopButton) {
        if (window.scrollY > 200) {
          scrollToTopButton.style.pointerEvents = "auto";
          scrollToTopButton.style.opacity = "1";
        } else {
          scrollToTopButton.style.pointerEvents = "none";
          scrollToTopButton.style.opacity = "0";
        }
      }
    };

    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return (
    <button
      id="scroll-top"
      className="fixed bottom-6 right-6 z-20 rounded-full border border-[#c60678]/50 bg-black/80 p-3 text-[#c60678] shadow-lg shadow-black/30 backdrop-blur transition hover:bg-[#c60678] hover:text-white"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <FaArrowUp size={24} />
    </button>
  );
}
