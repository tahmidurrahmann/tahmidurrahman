import { FaMessage } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { type FormEvent, useRef } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) {
      return;
    }

    emailjs
      .sendForm(
        "service_c1kaq1l",
        "template_sbprd1h",
        form.current,
        "kM2ZZ-I4QiQPp3W81",
      )
      .then(
        (result) => {
          if (result.text) {
            toast.success("Successfully sended your message!");
          }
        },
        (error) => {
          toast.error(error.text);
        },
      );
  };

  return (
    <div id="contact">
      <h1 className="uppercase text-[#c60678] text-center font-semibold text-xl pt-24 md:pt-40">
        Get in touch
      </h1>
      <p className="text-2xl md:text-5xl font-bold text-center py-4">
        Let's discuss <br /> about a project!
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-screen-xl mx-auto text-white my-16 md:px-6">
        <div>
          <div className="form-container mx-4 md:mx-0">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-[#09101A] p-8 rounded-xl"
            >
              <div className="space-y-6">
                <label
                  htmlFor="UserName"
                  className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-[#c60678]"
                >
                  <input
                    type="text"
                    id="UserName"
                    name="user_name"
                    placeholder="Your Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    required
                  />
                  <span className="absolute left-0 top-2 -translate-y-1/2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Your Name
                  </span>
                </label>
                <label
                  htmlFor="UserEmail"
                  className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-[#c60678]"
                >
                  <input
                    type="email"
                    id="UserEmail"
                    name="user_email"
                    placeholder="Your Email"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    required
                  />
                  <span className="absolute left-0 top-2 -translate-y-1/2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Your Email
                  </span>
                </label>
                <label
                  htmlFor="Subject"
                  className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-[#c60678]"
                >
                  <input
                    type="text"
                    id="Subject"
                    name="subject"
                    placeholder="Subject Field"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    required
                  />
                  <span className="absolute left-0 top-2 -translate-y-1/2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Subject Field
                  </span>
                </label>
              </div>
              <label htmlFor="OrderNotes" className="sr-only">
                Order notes
              </label>
              <div className="overflow-hidden my-6">
                <textarea
                  id="OrderNotes"
                  name="message"
                  className="w-full resize-none border-x-0 border-t-0 border-gray-200 bg-[#09101A] p-4 align-top sm:text-sm"
                  rows={8}
                  placeholder="Message Field"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center items-center">
                <button type="submit" className="button">
                  <i className="animation"></i>Send Message <FaMessage />
                  <i className="animation"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full">
          <iframe
            title="Tahmidur Rahman location map"
            width="100%"
            height="550"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=28/2%20Shamibagh,%20dhaka+(Tahmidur%20Rahman)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
