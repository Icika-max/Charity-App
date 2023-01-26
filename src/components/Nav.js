import React from "react";
import { NavLink } from "react-router-dom";

function Nav(){
    return(
        <nav>
          <NavLink exact to='/'> Home</NavLink> 
          <NavLink to='/charity'>Charity</NavLink>
          <NavLink to='/list'>List</NavLink>
          </nav>
        
    )
}

export default Nav