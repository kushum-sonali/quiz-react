import React from "react";
import "./header.css";
import {Link} from "react-router-dom"
function Header(){
    return(
        <div className="container-fluid header text-center">
            <div className="``title-main"><Link to="/" className="title text-black">Intuative Quizzy Hub</Link></div>
        
        <hr/>
        </div>
    );
}
export default Header;