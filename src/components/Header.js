import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Alif Zuhairi Bin Zulkifli</h1>
                <Typed
                className="typed-text"
                strings={["Front End Developer","Data Science","Content Creator","Divemaster"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                /><br/>
                <a href="#" className="contact-btn">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
