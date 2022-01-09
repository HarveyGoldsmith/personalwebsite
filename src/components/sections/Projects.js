import React from "react";
import { projects } from "../../constants/data";
//import $ from "jquery";
//import { FaArrowCircleUp } from "react-icons/fa";

const Projects = () => {
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   $("html, body").animate({ scrollTop: 0 }, "slow");
  // };
  return (
    <div id="technologies">
      <h2 className="title">Projects</h2>
      <div className="description">
        Here are the personal projects I have worked on, feel free to contact me
        for more information.
      </div>
      <div className="projects-container">
        {projects.map((project) => {
          return (
            <div className="project-card" key={project.id}>
              {/*<img
                className="project-image"
                src={project.image}
                alt={project.title}
              />*/}

              <div className="project-title">
                <h3 className="project-header">{project.title}</h3>
                <div className="project-header-splitter" />
                <p className="project-description">{project.description}</p>
              </div>

              <div>
                <div className="project-title">
                  <h3>Tech-Stack</h3>
                </div>
                <div className="project-tags">
                  {project.tags.map((tag, i) => {
                    return (
                      <div key={i} className="project-tag">
                        {tag}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="project-links-list">
                <a
                  className="project-link"
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
                {project.visit !== "" && (
                  <a
                    className="project-link"
                    href={project.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                )}
              </div>
            </div>
          );
        })}
        {/*<button className="scroll-to-top" onClick={(e) => handleClick(e)}>
          <FaArrowCircleUp className="fit" />
        </button>*/}
        <h2>More to come...</h2>
      </div>
    </div>
  );
};

export default Projects;
