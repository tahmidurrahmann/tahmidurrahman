"use client";

import About from "../About/About";
import Contact from "../Contact/Contact";
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
      <Contact />
    </Main>
  );
};

export default Home;
