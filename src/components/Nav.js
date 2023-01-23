import React from "react";
import { NavLink } from "react-router-dom";

function Nav(){
    return(
        <div className="navlinks">
          <NavLink to='/charity'>Charity</NavLink> 
          <NavLink to='/'> Home</NavLink> 
        </div> 
        
    )
}

export default Nav