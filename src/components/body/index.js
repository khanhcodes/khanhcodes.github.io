import React from "react";
import "./body.css";
import About from "./about/index.js";
import Projects from "./projects/index.js";
import Skills from "./skills/index.js";
import Experience from "./experience/index.js";
import Contact from "./contact/index.js";
import AboutDetail from "./about-detail";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="about-detail">
        <AboutDetail />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
