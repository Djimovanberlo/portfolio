import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import SingleProject from "./SingleProject";
import { projectList } from "../constants/projectList";

const Projects = () => {
  return (
    <div className="content">
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={50}
        totalSlides={projectList.length}
      >
        <Slider>
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
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default Projects;
