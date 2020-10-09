import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      {/* <Router> */}
      <NavLink to="/">About</NavLink>
      {" | "}
      <NavLink to="/projects">Projects</NavLink>
      {" | "}
      <NavLink to="/contact">Contact</NavLink>
      {/* </Router> */}
    </div>
  );
};

export default NavBar;
