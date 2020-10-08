import React, { Button } from "react";

const About = () => {
  return (
    <>
      <img src={require("../img/Djimo.jpg")} />
      <div>Djimo van Berlo</div>
      <div>
        {/* TO DO: Hyperlink to contactpage @ "Get in touch!" */}I like to play
        with some code, cook up some games and develop some dinner. In july I
        graduated from the Codaisseur academy, an intensive full stack
        JavaScript bootcamp. I have been coding since. In this portfolio you'll
        find my resume, info about me and projects have been working on. Get in
        touch!
      </div>
      <Button variant="outline-dark">Download Resume</Button>
      {/* TO DO: button actually downloads resume */}
    </>
  );
};

export default About;
