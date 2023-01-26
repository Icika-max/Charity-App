import React from "react";
import Contribute from "../Contribute";
import About from "./Aboutsec";
import Intro from "./Topofpage";
import Contacts from "./ContactDetails";

function Home(){
    return(
        <div>
            <Intro/>
            <About/>
            <Contacts/>
        </div>
    )
}

export default Home