import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      {/* <img
        src={require("../img/Djimo.jpg")}
        className="picture"
        style={{ zIndex: 3 }}
      /> */}
      <div style={{ left: 280, paddingLeft: 280, zIndex: 1 }}>
        {/* TO DO: Hyperlink to contactpage @ "Get in touch!" */}I like to play
        with some code, cook up some games and develop some dinner. In july I
        graduated from the Codaisseur academy, an intensive full stack
        JavaScript bootcamp. I have been coding since. In this portfolio you'll
        find my resume, info about me and projects have been working on. Get in
        touch!
      </div>
      <button>Download resume</button>
      {/* TO DO: button actually downloads resume */}
      {/* TO DO: add languages, skills, achievements content */}
    </div>
  );
};

export default About;
