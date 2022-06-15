import React from "react";
import ProjectCard from "./project-card";
import { ProjectData } from "./project-data";
import "./projects.css";

function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <label className="section-title">Projects</label>
      <div className="project-card-container">
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
