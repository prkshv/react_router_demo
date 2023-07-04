import React from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <ul className="navbarr">
        <li>
          <NavLink
            to="/home"
            className="nav-bar-link"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "lightpink" : "lightgray",
                padding: "6px",
                color: "black",
                borderRadius: "8px",
              };
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
              return {
                backgroundColor: isActive ? "lightpink" : "lightgray",
                padding: "6px",
                color: "black",
                borderRadius: "8px",
              };
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
              return {
                backgroundColor: isActive ? "lightpink" : "lightgray",
                padding: "6px",
                color: "black",
                borderRadius: "8px",
              };
            }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/test"
            className="nav-bar-link"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "lightpink" : "lightgray",
                padding: "6px",
                color: "black",
                borderRadius: "8px",
              };
            }}
          >
            User
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            to="/login"
            className="nav-bar-link"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "lightpink" : "lightgray",
                padding: "8px",
                color: "black",
                borderRadius: "8px",
              };
            }}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
