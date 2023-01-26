import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink exact="true" to="/">
        {" "}
        Home
      </NavLink>
      <NavLink to="/charity">Charity</NavLink>
      <NavLink to="/contribute">Donate</NavLink>
    </nav>
  );
}

export default Nav;
