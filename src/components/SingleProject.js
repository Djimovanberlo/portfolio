import React from "react";
import { Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const SingleProject = (props) => {
  const githubColorCreator = (fontColor) => {
    if (fontColor === "white") {
      return (
        <a
          href={props.github}
          alt=""
          target="_blank"
          rel="noopener noreferrer"
          style={{
            cursor: "pointer",
            filter: "invert(1)",
          }}
        >
          <img src={require("../img/icons/Github.png")} alt="" />
        </a>
      );
    } else {
      return (
        <a
          href={props.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            cursor: "pointer",
          }}
        >
          <img src={require("../img/icons/Github.png")} alt="" />
        </a>
      );
    }
  };

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
          height: "100%",
          display: "grid",
          gridTemplateColumns: "2fr 7fr",
          gridTemplateRows: "1fr 1fr 3fr 1fr",
          gridColumnGap: "1px",
          gridRowGap: "1px",
        }}
      >
        {/* ICON - START ROW 1*/}
        <img
          src={require(`../img/projects/${props.name}.png`)}
          alt=""
          style={{
            resizeMode: "cover",
            width: 100,
            height: 100,
            margin: 10,
            borderRadius: 25,
            gridArea: "1 / 1 / 2 / 2",
          }}
        />
        {/* NAME */}
        <div
          style={{
            gridArea: "1 / 2 / 2 / 3",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            fontSize: 40,
          }}
        >
          {props.name}
        </div>
        {/* TECH STACK - ROW 2 */}
        <div
          style={{
            gridArea: "2 / 1 / 3 / 3",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {props.stack.map((tech, index) => {
            return tech ? (
              <img
                className="tooltip"
                src={require(`../img/icons/${tech}.png`)}
                alt=""
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
        {/* DESCRIPTION - ROW 3 */}
        <div
          style={{
            gridArea: "3 / 1 / 4 / 3",
            textAlign: "justify",
            margin: "8px",
          }}
        >
          {props.description ? props.description : null}
        </div>
        {/* LINK TO PROJECT - ROW 4*/}
        <div style={{ gridArea: "4 / 1 / 5 / 2" }}>
          {props.link ? (
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: props.slideFontColor,
              }}
            >
              Link to project
            </a>
          ) : null}
        </div>
        {/* GITHUB */}
        <div
          style={{
            gridArea: "4 / 2 / 5 / 3",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {props.github ? githubColorCreator(props.slideFontColor) : null}
        </div>
      </div>
    </Slide>
  );
};

export default SingleProject;
