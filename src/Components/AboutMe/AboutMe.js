import React from "react";
import classes from "./AboutMe.module.css";

const AboutMe = () => {

    const sectionClassName = `section-title ${classes.section}`
    return(
        <div className={sectionClassName}>
            <h1><span>01.</span> About Me</h1>
            <div className={classes.info}>
                <div className={classes.infoData}>
                    <p><span>HELLO WORLD!</span></p>
                    <p>
                        My name is Rupam. I love developing things that live on the web. 
                        I started developing the web back in 2021 when decided to transition into Tech. 
                        The journey from a 'HELLO WORLD' to the advanced web applications has been 
                        fantastic.
                    </p>
                    <p>
                        Jumping into the present, I have developed various applications and clones which states 
                        my ability to work with <span>HTML5</span>, <span>CSS </span>and <span>Javascript</span>. 
                        My main focus these days is mastering <span>ReactJS </span> 
                        and develop accessible, human-centered & inclusive products.
                    </p>
                    <p>
                        Here are few technologies I have been working with :
                    </p>
                </div>
                <div className={classes.imageSection}>
                    <div className={classes.imageColor}></div>
                    <div className={classes.border}></div>
                    <div className={classes.image}></div>
                </div>
            </div>            
            <ul className={classes.topics}>
                    <li>HTML%</li>
                    <li>CSS</li>
                    <li>Javascript (ES6+)</li>
                    <li>ReactJS</li>
                    <li>Tailwind</li>
                    <li>BootStrap</li>
                    <li>Firebase</li>
                    <li>MongoDB</li>
                    <li>Heroku</li>
                    <li>Git</li>
                    <li>Github</li>
            </ul>
            
        </div>    
    )
}

export default AboutMe;