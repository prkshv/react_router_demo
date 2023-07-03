import React from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <ul className="navbarr">
        <li>
          <NavLink
            to="/"
            className="nav-bar-link"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "black" : "white" };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="nav-bar-link"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "black" : "white" };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="nav-bar-link"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "black" : "white" };
            }}
          >
            Contact
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            to="/user/test"
            className="nav-bar-link"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "black" : "white" };
            }}
          >
            User
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
