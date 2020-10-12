import React, { Button } from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div>
      <div style={{ left: 280, paddingLeft: 280, zIndex: 1 }}>
        <a href="https://github.com/Djimovanberlo" target="_blank">
          <img
            src={require("../img/icons/Github.png")}
            style={{ height: 25, width: 25 }}
          />
        </a>
        <a href="https://www.linkedin.com/in/djimo-van-berlo/" target="_blank">
          <img
            src={require("../img/icons/LinkedIn.png")}
            style={{ height: 25, width: 25 }}
          />
        </a>
        <div>+31 (0) 6 34 85 85 54</div>
        <div>djimovanberlo@gmail.com</div>
        <div>Rampe du Val 9b2</div>
        <div>1348 Louvain-La-Neuve</div>
      </div>
    </div>
  );
};

export default Contact;
