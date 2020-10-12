import React from "react";
import SingleProject from "./SingleProject";

import { projectList } from "../constants/projectList";

const Projects = () => {
  return (
    <div>
      <div style={{ marginLeft: 280, zIndex: 1 }}>
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
        HELO
        <br></br>
        <>HELO</>
        <br></br>
        HELO
        <br></br>
        <>HELO</>
        <br></br>
        HELO
        <br></br>
        <>HELO</>
        <br></br>
        HELO
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <>HELO</>
        <br></br>
        HELO
        <br></br>
        <>HELO</>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        HELO
        <br></br>
        <>HELO</>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        HELO
        <br></br>
        <>HELO</>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        HELO
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <>HELO</>
        <br></br>
      </div>
    </div>
  );
};

export default Projects;
