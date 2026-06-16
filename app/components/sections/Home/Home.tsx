"use client";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import TechStack from "../Skills/TechStack";
import Banner from "./Banner/Banner";
import Main from "./Main";

const Home = () => {
  return (
    <Main>
      <Banner />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Contact />
    </Main>
  );
};

export default Home;
