import React from "react";
import classes from "./OtherProjects.module.css"
import ProjectTemplate from "./ProjectTemplate"

const projects = [
    {
        projectNo: 1,
        githubLink: "https://rupamsutar.github.io/Design-Fundamentals/",
        projectLink: "https://github.com/rupamsutar/Design-Fundamentals",
        title: "Chair Shop",
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
    {
        projectNo: 3,
        githubLink: "https://github.com/rupamsutar/Pig-Game",
        projectLink: "https://rupamsutar.github.io/Pig-Game/",
        title: "Pig Game",
        description: "The pig game is an interesting game, wherein you've to roll a dice and increase the score. Hold to pass, if dice is 0 then score will get reset.",
        skills: ["Javascript", "HTML5", "CSS3"]
    },
    {
        projectNo: 4,
        githubLink: "https://github.com/rupamsutar/Modal-Window",
        projectLink: "https://rupamsutar.github.io/Modal-Window/",
        title: "Modal Window",
        description: "Here I practised creating modals where I can place a backdrop and take the User Experience to the next level !",
        skills: ["HTML", "CSS", "Javascript"]
    },
    {
        projectNo: 5,
        githubLink: "https://github.com/rupamsutar/Guess-my-Number",
        projectLink: "https://rupamsutar.github.io/Guess-my-Number/",
        title: "Number Guess",
        description: "A game where you have to guess the correct Number. The Number is between 1 to 20 and the screen guides you if the number is too high or too low!",
        skills: ["HTML", "CSS", "Javascript"]
    },
    {
        projectNo: 6,
        githubLink: "https://github.com/rupamsutar/Simon-Game",
        projectLink: "https://rupamsutar.github.io/Simon-Game/",
        title: "Simon Game",
        description: "A color blinks, click the blinked color and level 1 get cleared. Now on level 2 will blink another colour, but this time you have to click previous level 1 color and then level 2 color.",
        skills: ["HTML", "CSS", "Javascript"]
    },
    {
        projectNo: 7,
        githubLink: "https://github.com/rupamsutar/Drum-Sticks-Bajaao",
        projectLink: "https://rupamsutar.github.io/Drum-Sticks-Bajaao/",
        title: "Drum Sticks",
        description: "Press the drums to play the Sounds! Best enjoyed when played on desktop ! Press keys 'W', 'A', 'S', 'D', 'J', 'K' & 'L' and create your own combination of music !",
        skills: ["HTML", "CSS", "Javascript"]
    },
    {
        projectNo: 8,
        githubLink: "https://github.com/rupamsutar/Tindog-Website",
        projectLink: "https://rupamsutar.github.io/Tindog-Website/",
        title: "Tindog",
        description: "I started building it this hypothetical website to practice the CSS and HTML knowledge. I tried to build it from scratch.",
        skills: ["HTML", "CSS", "Bootstrap",]
    },
]

const OtherProjects = () => {
    return (
        <div className={classes.otherProjects}>
            <div className={classes['center-div']}>
                <h2>Other Noteworthy Projects</h2>
            </div>
            <div className={classes['project-grid']}>
                {projects.map((project) => (
                    <ProjectTemplate key={project.projectNo} {...project} />
                ))}    
            </div>
        </div>
    )
}


export default OtherProjects;