import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>Djimo</div>
      <div>
        <NavLink to="/">About</NavLink>
        {" | "}
        <NavLink to="/projects">Projects</NavLink>
        {" | "}
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </>
  );
};

export default NavBar;
