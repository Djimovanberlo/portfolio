import React, { Button } from "react";

const Contact = () => {
  return (
    <>
      <a href="https://github.com/Djimovanberlo">
        <img src={require("../img/icons/Github.png")} />
      </a>
      <a href="https://www.linkedin.com/in/djimo-van-berlo/">
        <img src={require("../img/icons/LinkedIn.png")} />
      </a>
      <div>+31 (0) 6 34 85 85 54</div>
      <div>djimovanberlo@gmail.com</div>
      <div>Rampe du Val 9b2</div>
      <div>1348 Louvain-La-Neuve</div>
    </>
  );
};

export default Contact;
