import React from "react";
import './project-card.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <div className="project-info">
          <label className="project-title">{project.title}</label>
          <div className="project-links">
            {project.demo && (
              <a
                className="project-link"
                href={project.demo}
                aria-label="Demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="link-button">
                  <i class="fi-rr-globe"></i> Demo
                </div>
              </a>
            )}
            {project.github && (
              <a
                className="project-link"
                href={project.github}
                aria-label="source-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="link-button">
                  <i class="fi fi-brands-github"></i>   Code
                </div>
              </a>
            )}
          </div>
          <p>{project.about}</p>
          <div className="project-tags">
            {project.tags.map((tag) => {
              return <label className="tag">{tag}</label>;
            })}
          </div>
        </div>
        <img src={project.image} alt="project" className="project-photo" />
      </div>
    </div>
  );
}

export default ProjectCard;
