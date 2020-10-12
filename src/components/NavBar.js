import React, { useState } from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const [picture, set_pitcure] = useState(1);

  return (
    <>
      <img
        src={require(`../img/Djimo${picture}.jpg`)}
        className="picture"
        style={{ zIndex: 3 }}
      />
      <div className="sidenav">
        <NavLink
          onClick={() => {
            set_pitcure(1);
          }}
          to="/"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => {
            set_pitcure(3);
          }}
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          onClick={() => {
            set_pitcure(3);
          }}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
