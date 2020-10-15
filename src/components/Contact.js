import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="content">
      <a
        href="https://github.com/Djimovanberlo"
        target="_blank"
        rel="noopener noreferrer"
        style={{ cursor: "pointer" }}
      >
        <img
          src={require("../img/icons/Github.png")}
          alt=""
          style={{ height: 30, width: 30, padding: 5 }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/djimo-van-berlo/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ cursor: "pointer" }}
      >
        <img
          src={require("../img/icons/LinkedIn.png")}
          alt=""
          style={{ height: 30, width: 30, padding: 5 }}
        />
      </a>
      <div>+31 (0) 6 34 85 85 54</div>
      <a
        style={{ textDecoration: "none", color: "#03989e" }}
        href="mailto:djimovanberlo@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        djimovanberlo@gmail.com
      </a>
      <div>Rampe du Val 9b2</div>
      <div>1348 Louvain-La-Neuve</div>
      <div>Belgium</div>
    </div>
  );
};

export default Contact;
