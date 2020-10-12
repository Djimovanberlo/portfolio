import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="sidenav">
        <div className="djimonav">DJIMO</div>
        <NavLink to="/">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </>
  );
};

export default NavBar;
