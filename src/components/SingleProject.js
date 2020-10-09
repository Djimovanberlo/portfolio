import React from "react";

const SingleProject = (props) => {
  return (
    <>
      <div>{props.name}</div>
      <div>
        {props.github ? (
          <a href={props.github} target="_blank">
            <img src={require("../img/icons/Github.png")} />
          </a>
        ) : null}
      </div>
      <div>
        {props.stack.map((tech, index) => {
          return tech ? (
            <img
              src={require(`../img/icons/${tech}.png`)}
              style={{ resizeMode: "cover", width: 35, height: 35 }}
              key={index}
            />
          ) : // TO DO: Add the tech as mouseover tooltip
          null;
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
    </>
  );
};

export default SingleProject;
