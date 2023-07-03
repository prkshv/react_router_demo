import React from "react";
import { Link, Outlet } from "react-router-dom";

function Contact(props) {
  return (
    <div>
      <h1>This is Contact component</h1>
      <button>Go back to home page</button>

      <Link to="company">Company</Link>
      <Link to="channel">Channel</Link>
      <Link to="other">Other</Link>
      <Outlet />
    </div>
  );
}

export default Contact;
