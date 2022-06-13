import React from "react";
import "./body.css";
import About from "./about/index.js";
import Project from "./project/index.js";
import Skills from "./skills/index.js";
import Experience from "./experience/index.js";
import Contact from "./contact/index.js";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Project />
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
