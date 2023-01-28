import React from "react";
import classes from "./Navbar-content.module.css";
import resume from "../../Assets/resume.pdf"
const NavbarContent = () => {
    return(
        <>
            <input type="checkbox" id="check" className={classes['input']}></input>
            <label htmlFor="check">
                <svg 
                    className={classes["checkbox-icon"]}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24">
                    <path  
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </label>
            <ul className={classes.navContent}>
                <li><span className={classes.navNum}>01.</span> <a href="#aboutMe">About</a></li>
                <li><span className={classes.navNum}>02.</span> <a href="#contact">Contact</a></li>
                <li><span className={classes.navNum}>03.</span> <a href="#work">Work</a></li>
                <li><span className={classes.navNum}>04.</span> <a href={resume} target="_blank" rel="noreferrer" className={classes['resume-button']}>Resume</a></li>
            </ul>
        </>
    )
}

export default NavbarContent;