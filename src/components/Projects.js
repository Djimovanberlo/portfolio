import React from "react";
import SingleProject from "./SingleProject";

import { projectList } from "../constants/projectList";

const Projects = () => {
  return (
    <>
      {projectList.map((project) => {
        return (
          <SingleProject
            key={project.id}
            name={project.name}
            stack={project.stack}
            description={project.description}
            link={project.link}
            github={project.github}
          />
        );
      })}
    </>
  );
};

export default Projects;
