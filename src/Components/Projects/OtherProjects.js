import React from "react";
import classes from "./OtherProjects.module.css"
import ProjectTemplate from "./ProjectTemplate"

const Projects = [
    {
        githubLink: "https://rupamsutar.github.io/Design-Fundamentals/",
        projectLink: "https://github.com/rupamsutar/Design-Fundamentals",
        title: "Design Fundamentals",
        description: "Building a beautiful website to learn the design fundamentals and apply all the design knowledge.",
        skills: ["Design", "HTML", "CSS"]
    }
]

const OtherProjects = () => {
    return (
        <div className={classes.otherProjects}>
            <h2>Other Noteworthy Projects</h2>
            <ProjectTemplate />
        </div>
    )
}


export default OtherProjects;