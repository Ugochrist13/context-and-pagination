import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css'

function Nav() {
  return (
    <div className="nav">
      <header>
        <NavLink className={"links"} to="/">Home</NavLink>
        <ul>
          <NavLink className={"links"} to="/about">About</NavLink>
          <NavLink className={"links"} to="/portfolio">Portfolio</NavLink>
        </ul>
      </header>
    </div>
  );
}

export default Nav;
