import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import Heading from "../../shared/Heading/Heading";
import { FaEnvelope, FaTelegramPlane, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { AiFillPhone } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const inputClass =
  "w-full bg-white/[0.04] border border-white/[0.08] rounded-[10px] pl-[38px] pr-4 py-[11px] text-sm text-white placeholder-white/20 outline-none focus:border-[#c60678]/50 focus:bg-[#c60678]/[0.04] transition-all duration-200";

// Wrapper for each field
const Field = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[11px] font-medium text-white/40 uppercase tracking-widest">
      {label}
    </label>
    {children}
  </div>
);

// Input with icon
const iconClass =
  "absolute left-3 top-1/2 -translate-y-1/2 text-white/20 peer-focus:text-[#c60678]/60 transition-colors";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.1 });
  const [charCount, setCharCount] = useState(0);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || isSending) return;

    setIsSending(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          toast.error(error?.text || "Something went wrong. Please try again.");
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-[100dvh] flex flex-col justify-between overflow-x-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-[#c60678]/5 rounded-full blur-[180px] pointer-events-none z-0" />

      {/* Main Content Body */}
      <div
        ref={ref}
        className="w-full max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-20 pt-24 pb-12 xl:pt-28 xl:pb-16 flex-1 flex flex-col justify-center relative z-10"
      >
        <Heading headingText="Get in touch" />

        <h2
          data-reveal
          className="text-3xl sm:text-4xl font-extrabold text-white mb-2 mt-5"
        >
          Let's Build{" "}
          <span className="bg-gradient-to-br from-[#c60678] to-[#8b2fc9] bg-clip-text text-transparent">
            Something
          </span>
        </h2>

        <p data-reveal className="text-gray-400 text-sm mb-6 lg:mb-12 max-w-md">
          Have a project in mind? I'm always open to discussing new
          opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-32">
          {/* Form */}
          <div data-reveal>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
                <Field label="Name">
                  <div className="relative">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="John Doe"
                      className={`peer ${inputClass}`}
                      required
                    />
                    <FaUser size={13} className={iconClass} />
                  </div>
                </Field>
                <Field label="Email address">
                  <div className="relative">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="you@example.com"
                      className={`peer ${inputClass}`}
                      required
                    />
                    <FaEnvelope size={13} className={iconClass} />
                  </div>
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Message">
                  <div className="relative">
                    <textarea
                      name="message"
                      rows={8}
                      maxLength={500}
                      placeholder="Tell me about your project..."
                      className={`peer ${inputClass} resize-none pt-[11px] !translate-y-0`}
                      onChange={(e) => setCharCount(e.target.value.length)}
                      required
                    />
                    <FaMessage
                      size={13}
                      className="absolute left-3 top-[14px] text-white/20 peer-focus:text-[#c60678]/60 transition-colors"
                    />
                  </div>
                  <span className="text-[11px] text-white/20 text-right">
                    {charCount} / 500
                  </span>
                </Field>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-fit inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#c60678] to-[#8b2fc9] hover:from-[#b0056a] hover:to-[#7a25b3] text-white text-xs lg:text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#c60678]/10"
              >
                <FaTelegramPlane
                  size={18}
                  className={isSending ? "animate-pulse" : ""}
                />
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Card */}
          <div className="space-y-8 sm:space-y-16 xl:space-y-16 3xl:space-y-20 dpr-lg:space-y-12">
            <div className="flex flex-col items-start justify-start gap-3">
              <h1 className="text-xl lg:text-2xl text-white font-bold">
                Get in touch another way
              </h1>
              <p className="text-gray-400 text-sm lg:text-base">
                If you wish, you can contact me using one of following methods
                as well.
              </p>
            </div>
            {/* Contact Information */}
            <div className="space-y-8 sm:space-y-9 dpr-xl:space-y-6">
              <div className="flex items-center gap-4">
                <AiFillPhone />
                <Link href="tel:+8801843821277">+880 1843 821277</Link>
              </div>
              <div className="flex items-center gap-4">
                <MdEmail />
                <Link href="mailto:tahmidurahmann@gmail.com">
                  tahmidurahmann@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <FaLinkedin />
                <Link
                  href="https://www.linkedin.com/in/tahmidurrahmann/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /tahmidurrahmann
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <FaGithub />
                <Link
                  href="https://github.com/tahmidurrahmann/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /tahmidurrahmann
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styled Minimal Footer */}
      <footer className="border-t border-white/[0.06] bg-white/[0.01] backdrop-blur-md text-gray-400 relative z-10 w-full mt-auto">
        <div className="mx-auto max-w-screen-2xl px-8 sm:px-12 lg:px-20 py-6">
          <p className="text-[11px] text-center text-gray-400/80 xs:text-xs sm:text-sm 3xl:text-base dpr-lg:text-sm tracking-wide transition-colors duration-300 hover:text-white/90">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold bg-gradient-to-r from-[#c60678] to-[#8b2fc9] bg-clip-text text-transparent">
              Tahmidur Rahman
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
