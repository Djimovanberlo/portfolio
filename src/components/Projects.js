import React from "react";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../styles/projects.css";

import SingleProject from "./SingleProject";
import { projectList } from "../constants/projectList";

const Projects = () => {
  const slideColors = [
    { color: "white", backgroundColor: "#03989e", border: "2px solid #03989e" },
    { color: "black", backgroundColor: "white", border: "2px solid #263547" },
    { color: "white", backgroundColor: "#263547", border: "2px solid #263547" },
  ];

  const slideStyleSelector = (projectIndex) => {
    while (projectIndex + 1 > 3) {
      projectIndex = projectIndex - 3;
    }
    return projectIndex;
  };

  return (
    <div className="projectsContent">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={80}
        visibleSlides={2}
        totalSlides={projectList.length}
      >
        <Slider>
          {projectList.map((project, index) => {
            return (
              <SingleProject
                key={project.id}
                name={project.name}
                stack={project.stack}
                description={project.description}
                link={project.link}
                github={project.github}
                slideFontColor={slideColors[slideStyleSelector(index)].color}
                slideBackgroundColor={
                  slideColors[slideStyleSelector(index)].backgroundColor
                }
                slideBorder={slideColors[slideStyleSelector(index)].border}
              />
            );
          })}
        </Slider>
        <ButtonBack className="button">Back</ButtonBack>
        <ButtonNext className="button">Next</ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default Projects;
