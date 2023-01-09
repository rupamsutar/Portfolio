import React from "react";
import classes from "./WhatsNext.module.css"

const WhatsNext = () => {
    return (
        <div className={classes['main-section']}>
            <div className={classes['main-section-intro']}>
                <p>04 What's Next ?</p>
            </div>
            <div className={classes['main-section-heading']}>
                <h1>Get In Touch</h1>
            </div>
            <div className={classes['main-section-objective']}>
                <p>
                    I am seeking challenging opportunities where I can utilize my skills for the success of the organization. 
                    My Inbox is always open, if wanna get in , feel free to say hii ! 
                    I ll get back to you ASAP.
                </p>
            </div>
            <div>
                <a href="mainto:rupamsutar281998@gmail.com">
                    <button>Say Hello</button>
                </a>
            </div>
        </div>
    )
}

export default WhatsNext;