import React, { useState, useEffect } from "react";
import {
  NavLink,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import "../styles/navBar.css";

const NavBar = () => {
  const location = useLocation();
  // console.log(location.pathname);
  const [picture, set_picture] = useState(1);

  useEffect(() => {
    if (location.pathname === "/") {
      set_picture(1);
    } else if (location.pathname === "/projects") {
      set_picture(2);
    } else if (location.pathname === "/contact") {
      set_picture(3);
    }
  }, []);

  return (
    <>
      <img
        src={require(`../img/djimo/Djimo${picture}.jpg`)}
        className="picture"
        style={{ zIndex: 3 }}
      />
      <div className="sidenav">
        <NavLink
          onClick={() => {
            set_picture(1);
          }}
          to="/"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => {
            set_picture(2);
          }}
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          onClick={() => {
            set_picture(3);
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
