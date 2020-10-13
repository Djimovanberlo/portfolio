import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const SingleProject = (props) => {
  return (
    <Slide index={props.id}>
      <h2>{props.name}</h2>
      <div>
        {props.github ? (
          <a href={props.github} target="_blank" style={{ cursor: "pointer" }}>
            <img src={require("../img/icons/Github.png")} />
          </a>
        ) : null}
      </div>
      <div>
        {props.stack.map((tech, index) => {
          return tech ? (
            <img
              className="tooltip"
              src={require(`../img/icons/${tech}.png`)}
              style={{ resizeMode: "cover", width: 35, height: 35, margin: 10 }}
              key={index}
              title={tech}
            />
          ) : null;
        })}
      </div>
      <div>{props.description ? props.description : null}</div>
      <div>
        {props.link ? (
          <a href={props.link} target="_blank" style={{ cursor: "pointer" }}>
            Link to project
          </a>
        ) : null}
      </div>
    </Slide>
  );
};

export default SingleProject;
