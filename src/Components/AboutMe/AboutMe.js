import React from "react";
import classes from "./AboutMe.module.css";
import ProfileImage from "../../Assets/ProfileImg.jpg";

const AboutMe = () => {

    const sectionClassName = `section-title ${classes.section}`
    return(
        <div className={sectionClassName}>
            <h1><span>01.</span> About Me</h1>
            <div className={classes.info}>
                <p>
                    HELLO WORLD ! My name is Rupam. I love developing things that live on the web. 
                    I started developing the web back in 2021 when decided to transition into Tech. 
                    The journey from a 'HELLO WORLD' to the advanced web applications has been 
                    fantastic.
                </p>
                <p>
                    Jumping into the present, I have developed various applications and clones which states 
                    my ability to work with HTML5, CSS and Javascript. My main focus these days is mastering ReactJS 
                    and develop accessible, human-centered & inclusive products.
                </p>
                <p>
                    Here are few technologies I have been working with
                </p>
            </div>
            <div className={classes.image}>
                <img class={classes.profileImage} src={ProfileImage} alt="Profile pic"></img>
            </div>
        </div>    
    )
}

export default AboutMe;