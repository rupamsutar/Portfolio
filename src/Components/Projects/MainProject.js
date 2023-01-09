import React from 'react';
import SectionTitle from '../UI/SectionTitle';
import classes from "./MainProject.module.css";
import MainProjectInfo from './MainProjectInfo';
import MyYuMeals from "../../Assets/MyYuMeals.jpg";
import GreatQuotes from "../../Assets/GreatQuotes.jpg";
import MyFirstReactApp from "../../Assets/MyFirstReactApp.jpg";
import BeABankist from "../../Assets/BeABankist.jpg";
import Natours from "../../Assets/Natours.jpg";

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
    },
    {
        projectNo: 3,
        projectLink: "https://rupamsutar.github.io/beABankist/",
        githubLink: "https://github.com/rupamsutar/beABankist",
        photoUrl: BeABankist,
        title: "Be A Bankist",
        description : "There are four users registered on this app. [user: rjs, pin: 1111], [user: pvn, pin: 2222], [user: sbg, pin: 3333], [user: abj, pin: 4444]. Users can transfer Money, take a loan or delete the account. I learnt and gained command over javascript in this project",
        skills: ["Javascript", "DOM Manipulation", "Event Listeners", "Local Storage"]

    },
    {
        projectNo: 4,
        projectLink: "https://rupamsutar.github.io/My-first-react-app/",
        githubLink: "https://github.com/rupamsutar/My-first-react-app",
        photoUrl: MyFirstReactApp,
        title: "Expense Handler",
        description: "This Expense handler might help you in handling your day to day expenses. Developing this app has helped me master my React fundamentals such as props, contextAPI, hooks etc. Building this was one of the best fun I've ever had!",
        skills: ["React", "React-props", "Hooks", "Managing-States"]
    },
    {
        projectNo: 5,
        projectLink: "https://rupamsutar.github.io/Natours/",
        githubLink : "https://github.com/rupamsutar/Natours",
        photoUrl: Natours,
        title: "Nature Tourists",
        description: "Developing this site, I have used advanced CSS tools such as SASS. I've Tried decorating the site with all the beautiful animations possible. The advanced resposive code makes this site soecial",
        skills: ["Keyframes", "transition", "clip-paths", "Responsive-site"]
    }
]

const MainProject = () => {
    return(
        <div id="work" className={classes.mainProject}>
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