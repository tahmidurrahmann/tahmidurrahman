"use client";

import Banner from "../Banner/Banner";
import Contact from "../../Contact/Contact";
import About from "../../About/About";
import Skills from "../../Skills/Skills";
import Education from "../../Education/Education";
import Projects from "../../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
};

export default Home;
