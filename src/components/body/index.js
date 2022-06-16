import React from "react";
import "./body.css";
import About from "./about/index.js";
import Projects from "./projects/index.js";
import TimeLine from "./experience/timeline.js";
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
      <section id="experience">
        <TimeLine />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
