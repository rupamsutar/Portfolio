import React from "react";
import classes from "./Introduction.module.css";

const AboutMe = () => {
    return (
        <div className={classes.introduction}>
            <h1>
                Hi! my name is
            </h1>
            <h2>
                Rupam Sutar.
            </h2>
            <h3>
                I develop things for the Web !
            </h3>
            <p>
                I am a Frontend Developer, Developing (and sometimes Designing) Web Applications 
                with exceptional digital experiences. Currently I am focused on learning React and 
                related Technologies to further enhance my developing skills for building accessible 
                and Human-centered Products.
            </p>
            <div >
                <a className={classes.check} href="https://rupamsutar.github.io/MyZomato/"> Check out my Work!</a>
            </div>
        </div>
    )
}

export default AboutMe;