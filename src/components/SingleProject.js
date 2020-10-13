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
    <Slide
      index={props.id}
      style={{
        color: props.slideFontColor,
        backgroundColor: props.slideBackgroundColor,
        border: props.slideBorder,
      }}
    >
      <div
        className="slideContainer"
        style={{
          padding: 20,
          display: "grid",
          // gridTemplateColumns: "auto auto auto auto",
        }}
      >
        <div style={{ gridRow: 1 }}>
          <img
            src={require(`../img/projects/${props.name}.png`)}
            style={{
              resizeMode: "cover",
              width: 100,
              height: 100,
              margin: 10,
              borderRadius: 25,
            }}
          />
          <h2>{props.name}</h2>
          <div>
            {props.github ? (
              <a
                href={props.github}
                target="_blank"
                style={{ cursor: "pointer" }}
              >
                <img src={require("../img/icons/Github.png")} />
              </a>
            ) : null}
          </div>
        </div>
        <div style={{ gridRow: 2 }}>
          {props.stack.map((tech, index) => {
            return tech ? (
              <img
                className="tooltip"
                src={require(`../img/icons/${tech}.png`)}
                style={{
                  resizeMode: "cover",
                  width: 35,
                  height: 35,
                  margin: 10,
                }}
                key={index}
                title={tech}
              />
            ) : null;
          })}
        </div>
        <div style={{ gridRow: 3 }}>
          {props.description ? props.description : null}
        </div>
        <div style={{ gridRow: 4 }}>
          {props.link ? (
            <a href={props.link} target="_blank" style={{ cursor: "pointer" }}>
              Link to project
            </a>
          ) : null}
        </div>
      </div>
    </Slide>
  );
};

export default SingleProject;
