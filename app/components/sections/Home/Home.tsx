"use client";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Banner from "./Banner/Banner";
import Main from "./Main";

const Home = () => {
  return (
    <Main>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </Main>
  );
};

export default Home;
