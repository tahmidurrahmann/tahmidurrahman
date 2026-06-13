import Heading from "../../shared/Heading/Heading";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <div id="projects" className="max-w-screen-xl mx-auto">
      <Heading title="projects"></Heading>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-12 p-6">
            <div className="group overflow-hidden cursor-pointer">
              <img
                alt="Signage"
                src="https://i.ibb.co/D8k2qG3/set-mockup-computer-laptop-tablet-smartphone-realistic-isolated-templates-free-vector-1.jpg"
                className="rounded-bl-3xl rounded-tr-3xl object-cover cursor-pointer group-hover:scale-110 transition"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-lg font-black">
                THE GLASS HOUSE - Building Management System
              </h1>
              <p>
                This System is a comprehensive web application designed to
                facilitate remote management of a property.Apartments section
                displays rental. User,Member,& Admin dashboards offer tailored
                experiences,including profile views, payment functionalities,
                announcements & admin-exclusive controls. Server-side handles
                user authentication, admin functionalities
              </p>
              <p className="flex justify-start items-center gap-4">
                <FaChevronRight className="text-[#c60678]" /> Seamless User
                Experiences
              </p>
              <p className="flex justify-start items-center gap-4">
                <FaChevronRight className="text-[#c60678]" /> Dynamic Payment
                Optimization & Coupons
              </p>
              <p className="flex justify-start items-center gap-4">
                <FaChevronRight className="text-[#c60678]" /> Strategic
                Administrative Control
              </p>
              <div className="flex justify-center items-center flex-wrap gap-4">
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #JS
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #React
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #React Router
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #Firebase
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #Tailwind CSS
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #MUI
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #Node
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #Express
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #MongoDB
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 pt-6">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://build-minder-client.web.app/"
                  className="flex justify-center items-center gap-4"
                >
                  <MdOutlineLiveTv
                    size={23}
                    className="text-[#c60678]"
                  ></MdOutlineLiveTv>
                  Live Link
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/tahmidurrahmann/building-management-client"
                  className="flex justify-center items-center gap-4"
                >
                  <FaGithub size={23} className="text-[#c60678]"></FaGithub>
                  Client Side
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/tahmidurrahmann/building-management-server"
                  className="flex justify-center items-center gap-4"
                >
                  <FaGithub size={23} className="text-[#c60678]"></FaGithub>
                  Server Side
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-12 p-6">
            <div className="group overflow-hidden cursor-pointer">
              <img
                alt="Signage"
                src="https://i.ibb.co/1LHTm76/set-mockup-computer-laptop-tablet-smartphone-realistic-isolated-templates-free-vector-2.jpg"
                className="rounded-bl-3xl rounded-tr-3xl object-cover cursor-pointer group-hover:scale-110 transition"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-lg font-black">
                Study Together - Empowering Education through Online Group Study
              </h1>
              <p>
                This application fosters collaborative learning, allowing users
                to create, submit, and grade assignments within a friendly
                community. Users can seamlessly manage assignments, including
                creation, update, and deletion. The platform supports individual
                assignment submissions, providing a user-friendly interface to
                view, grade, and provide feedback.
              </p>
              <p className="flex justify-start items-center gap-4">
                <FaChevronRight className="text-[#c60678]" />
                Dynamic Assignment Creation & Grading
              </p>
              <p className="flex justify-start items-center gap-4">
                <FaChevronRight className="text-[#c60678]" />
                Seamless Collaboration
              </p>
              <p className="flex justify-start items-center gap-4">
                <FaChevronRight className="text-[#c60678]" />
                Effortless Marking process & secure authentication
              </p>
              <div className="flex justify-center items-center flex-wrap gap-4">
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #JS
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #React
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #React Router
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #Firebase
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #Tailwind CSS
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #Node
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #Express
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #MongoDB
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 pt-6">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://study-together-client.web.app/"
                  className="flex justify-center items-center gap-4"
                >
                  <MdOutlineLiveTv
                    size={23}
                    className="text-[#c60678]"
                  ></MdOutlineLiveTv>
                  Live Link
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/tahmidurrahmann/online-group-study-client"
                  className="flex justify-center items-center gap-4"
                >
                  <FaGithub size={23} className="text-[#c60678]"></FaGithub>
                  Client Side
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/tahmidurrahmann/online-group-study-server"
                  className="flex justify-center items-center gap-4"
                >
                  <FaGithub size={23} className="text-[#c60678]"></FaGithub>
                  Server Side
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-12 p-6">
            <div className="group overflow-hidden cursor-pointer">
              <img
                alt="Signage"
                src="https://i.ibb.co/qnddByG/set-mockup-computer-laptop-tablet-smartphone-realistic-isolated-templates-free-vector.jpg"
                className="rounded-bl-3xl rounded-tr-3xl object-cover cursor-pointer group-hover:scale-110 transition"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-lg font-black">Dream Tech - Brand Shop</h1>
              <p>
                A website focusing on Technology and Electronics
                brands.Implemented features include user-friendly
                navigation,brand-specific product pages an Add Product section,
                & a responsive design. Authentication includes email/password
                and extra login options. It offers an engaging platform for
                exploring and interacting with technology and electronics
                brands.
              </p>
              <p className="flex justify-start items-center gap-4">
                <FaChevronRight className="text-[#c60678]" />
                Seamless Shopping Experience
              </p>
              <p className="flex justify-start items-center gap-4">
                <FaChevronRight className="text-[#c60678]" />
                Dynamic Brand Exploration
              </p>
              <p className="flex justify-start items-center gap-4">
                <FaChevronRight className="text-[#c60678]" />
                Efficient Cart Management & user authentication
              </p>
              <div className="flex justify-center items-center flex-wrap gap-4">
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #JS
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #React
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #React Router
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #Firebase
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #Tailwind CSS
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #Node
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #Express
                </p>
                <p className="px-4 py-1 border border-[#c60678] text-[#c60678] rounded">
                  #MongoDB
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 pt-6">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://dream-tech-client.web.app/"
                  className="flex justify-center items-center gap-4"
                >
                  <MdOutlineLiveTv
                    size={23}
                    className="text-[#c60678]"
                  ></MdOutlineLiveTv>
                  Live Link
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/tahmidurrahmann/brand-shop-client"
                  className="flex justify-center items-center gap-4"
                >
                  <FaGithub size={23} className="text-[#c60678]"></FaGithub>
                  Client Side
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/tahmidurrahmann/brand-shop-server"
                  className="flex justify-center items-center gap-4"
                >
                  <FaGithub size={23} className="text-[#c60678]"></FaGithub>
                  Server Side
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
