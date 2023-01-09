import React from "react";
import classes from "./ProjectTemplate.module.css"

const ProjectTempplate = () => {
    return (
        <div className={classes.mainBox}>
            <div className={classes["mainBox__one"]}>
                <div>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" 
                        class={classes["icon_folder"]}>
                            <title>Folder</title>
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
                <div className={classes['svg-links']}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                        className={classes["icon_github"]} 
                        >                            
                            <path 
                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                            </path>
                    </svg>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class={classes["icon_link"]}>
                            <title>External Link</title>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                </div>
            </div>
            <div className={classes["mainBox__two"]}>
                <h3>Design Fundamentals</h3>
            </div>
            <div className={classes["mainBox__three"]}>
                <p>
                    Building a beautiful website to learn the design fundamentals and apply all the design knowledge
                </p>
            </div>
            <ul className={classes["mainBox__four"]}>
                <li>Design</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </div>
    )
}

export default ProjectTempplate;