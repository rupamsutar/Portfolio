import React from 'react';
import SectionTitle from '../UI/SectionTitle';
import classes from "./MainProject.module.css";
import MainProjectInfo from './MainProjectInfo';
import MyYuMeals from "../../Assets/MyYuMeals.jpg";
import GreatQuotes from "../../Assets/GreatQuotes.jpg";

const Projects = [
    {
        projectNo: 1,
        projectLink: "https://rupamsutar.github.io/MyZomato",
        githubLink: "https://github.com/rupamsutar/MyZomato",
        photoUrl: MyYuMeals,
        title: "MyYuMeals",
        description: "Here I've tried to develop a food order app which gets inspired from online food delivery services like Swiggy and Zomato in India. I have tried to use many react concepts like hooks and api context to complete the app. Currently I am trying to add a bit of backend to it !",
        skills: ["React", "React Hooks", "Context-API", "useReducer"]
    },
    {
        projectNo: 2,
        projectLink: "https://rupamsutar.github.io/Great-Quotes",
        githubLink: "https://github.com/rupamsutar/Great-Quotes",
        photoUrl: GreatQuotes,
        title: "Great Quotes",
        description: "I have developed this application so as to assemble all the great quotes from all of my friend. This is a full stack application where even you can add the quotes of your choice. The data is stored on firebase, Extensive use of React Router has been made to build this product.",
        skills: ["React Router", "React Hooks", "Redux", "Sorting", "Firebase"]
    }
]

const MainProject = () => {
    return(
        <div className={classes.mainProject}>
            <SectionTitle sectionNumber="02" title="Somethings I've built"></SectionTitle>
            {Projects.map((project) => (
                <MainProjectInfo 
                    key={project.projectNo} 
                    {...project} 
                />
            ))}
        </div>
    )
}

export default MainProject;