import React from "react";
import classes from "./OtherProjects.module.css"
import ProjectTemplate from "./ProjectTemplate"

const projects = [
    {
        projectNo: 1,
        githubLink: "https://rupamsutar.github.io/Design-Fundamentals/",
        projectLink: "https://github.com/rupamsutar/Design-Fundamentals",
        title: "Design Fundamentals",
        description: "Building a beautiful website to learn the design fundamentals and apply all the design knowledge.",
        skills: ["Design", "HTML5", "CSS3"]
    },
    {
        projectNo: 2,
        githubLink: "https://github.com/rupamsutar/Omnifood",
        projectLink: "https://rupamsutar.github.io/Omnifood/",
        title: "Omnifood",
        description: "AI powered startup website, which explains and introduces the product to the world. Professionally designed and curated content presented.",
        skills: ["HTML5", "CSS3", "Design"]
    },
    // {
    //     projectNo:
    // }
]

const OtherProjects = () => {
    return (
        <div className={classes.otherProjects}>
            <h2>Other Noteworthy Projects</h2>
            <div className={classes['project-grid-container']}>
                <div className={classes['project-grid']}>
                    <div className={classes.one}></div>
                    <div className={classes.two}></div>
                    <div className={classes.three}></div>
                    {/* {projects.map((project) => (
                        <ProjectTemplate key={project.projectNo} {...project} />
                    ))}     */}
                </div>    
            </div>
        </div>
    )
}


export default OtherProjects;