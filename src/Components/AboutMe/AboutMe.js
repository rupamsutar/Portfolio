import React from "react";
import classes from "./AboutMe.module.css";

const AboutMe = () => {

    const sectionClassName = `section-title ${classes.section}`
    return(
        <div className={sectionClassName}>
            <h1><span>01.</span> About Me</h1>
            <div className={classes.info}>

            </div>
            <div className={image}>
                
            </div>
        </div>    )
}

export default AboutMe;