import React from "react";
import classes from "./Navbar-content.module.css";
const NavbarContent = () => {
    return(
        <>
            <ul className={classes.navContent}>
                <li>01. About</li>
                <li>02. Contact</li>
                <li>03. Work</li>
                <li>04. Experience</li>
                <li>05. Resume</li>
            </ul>
        </>
    )
}

export default NavbarContent;