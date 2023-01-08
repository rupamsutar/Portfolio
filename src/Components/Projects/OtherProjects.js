import React from "react";
import classes from "./OtherProjects.module.css"
import ProjectTemplate from "./ProjectTemplate"

const OtherProjects = () => {
    return (
        <div className={classes.otherProjects}>
            <h2>Other Noteworthy Projects</h2>
            <ProjectTemplate />
        </div>
    )
}


export default OtherProjects;