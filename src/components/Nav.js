import React from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <ul className="navbarr">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => {
              return isActive ? "btn btn-primary" : "btn btn-outline-primary";
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return isActive ? "btn btn-primary" : "btn btn-outline-primary";
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              return isActive ? "btn btn-primary" : "btn btn-outline-primary";
            }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/test"
            className={({ isActive }) => {
              return isActive ? "btn btn-primary" : "btn btn-outline-primary";
            }}
          >
            User
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => {
              return isActive ? "btn btn-primary" : "btn btn-outline-primary";
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
