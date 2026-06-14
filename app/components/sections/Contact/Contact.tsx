import { FaMessage } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import Heading from "../../shared/Heading/Heading";

const inputClass =
  "w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c60678]/60 transition-colors duration-200";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.1 });
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
        className="w-full max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-20 pt-28 pb-16 flex-1 flex flex-col justify-center relative z-10"
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

        <p data-reveal className="text-gray-400 text-sm mb-12 max-w-md">
          Have a project in mind? I'm always open to discussing new
          opportunities.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div data-reveal>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <div className="flex justify-between items-center gap-6">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className={inputClass}
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className={inputClass}
                  required
                />
              </div>
              <textarea
                name="message"
                rows={10}
                placeholder="Message"
                className={`${inputClass} resize-none`}
                required
              />
              <button
                type="submit"
                disabled={isSending}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#c60678] to-[#8b2fc9] hover:from-[#b0056a] hover:to-[#7a25b3] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto shadow-lg shadow-[#c60678]/10"
              >
                <FaMessage
                  size={14}
                  className={isSending ? "animate-pulse" : ""}
                />
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Map */}
          <div
            data-reveal
            className="rounded-2xl overflow-hidden border border-white/10 h-[360px] lg:h-auto min-h-[340px]"
          >
            <iframe
              title="Tahmidur Rahman location map"
              width="100%"
              height="100%"
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=28/2%20Shamibagh,%20dhaka+(Tahmidur%20Rahman)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              className="border-0 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
