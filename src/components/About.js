import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="content">
      <div>
        Hello friendly friend. I like to play with some code, cook up some games
        and develop some dinner. In july I graduated from the Codaisseur
        academy, an intensive full stack JavaScript bootcamp. I have been coding
        since. In this portfolio you'll find my resume, info about me and
        projects have been working on. Get in touch!
      </div>
      <button className="button">Download resume</button>
      {/* TO DO: button actually downloads resume */}
      {/* TO DO: add languages, skills, achievements content */}
      {/* TO DO: Hyperlink to contactpage @ "Get in touch!" */}
    </div>
  );
};

export default About;
