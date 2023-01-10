import React from "react";
import classes from "./Navbar-content.module.css";
import resume from "../../Assets/resume.pdf"
const NavbarContent = () => {
    return(
        <>
            <ul className={classes.navContent}>
                <li><span className={classes.navNum}>01.</span> <a href="#aboutMe">About</a></li>
                <li><span className={classes.navNum}>03.</span> <a href="#work">Work</a></li>
                <li><span className={classes.navNum}>02.</span> <a href="#contact">Contact</a></li>
                <li><span className={classes.navNum}>04.</span> <a href={resume} target="_blank" rel="noreferrer" className={classes['resume-button']}>Resume</a></li>
            </ul>
        </>
    )
}

export default NavbarContent;