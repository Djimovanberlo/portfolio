import React from "react";

const SingleProject = () => {
  return (
    <>
      <div>{props.name}</div>
      <div>
        {props.github ? (
          <a href={props.github}>
            <img src={require("../img/icons/Github.png")} />
          </a>
        ) : null}
      </div>
      <div>
        {props.stack.map((tech, index) => {
          return tech ? (
            <Image
              style={{ resizeMode: "cover", width: 35, height: 35 }}
              source={require(`../img/icons/${tech}.png`)}
              key={index}
            />
          ) : null;
        })}
      </div>
      <div>{props.description ? props.description : null}</div>
      <div>
        {props.link ? (
          <a href={props.link} style={{ cursor: "pointer" }}>
            Link to project
          </a>
        ) : null}
      </div>
    </>
  );
};

export default SingleProject;
