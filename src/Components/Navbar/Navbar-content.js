import React from "react";
import classes from "./Navbar-content.module.css";
const NavbarContent = () => {
    return(
        <>
            <ul className={classes.navContent}>
                <li><span className={classes.navNum}>01.</span> About</li>
                <li><span className={classes.navNum}>02.</span> Contact</li>
                <li><span className={classes.navNum}>03.</span> Work</li>
                <li><span className={classes.navNum}>04.</span> Experience</li>
                <li><span className={classes.navNum}>05.</span> Resume</li>
            </ul>
        </>
    )
}

export default NavbarContent;