import React from "react";
import classes from './MainProjectInfo.module.css';
import MyYuMeals from "../../Assets/MyYuMeals.jpg";

const MainProjectInfo = () => {

    return (
        <div className={classes.mainProjectInfo}>
            <div className={classes.image}>
                <img src={MyYuMeals} alt="Project image" />
            </div>
            <div className={classes.content}>
                <p>Featured Project</p>
                <h3>MyYuMeals</h3>
                <div className={classes.projectDescription}>
                    <p>
                        Here I've tried to develop a food order app which gets inspired from online 
                        food delivery services like Swiggy and Zomato in India. I have tried to use many
                        react concepts like hooks and api context to complete the app. Currently I am 
                        trying to add a bit of backend to it !
                    </p>
                </div>
                <ul>
                    <li>React</li>
                    <li>React-Hooks</li>
                    <li>Context-API</li>
                    <li>Reducer</li>
                </ul>
                <div className={classes.projectLinks}>
                    <ul>
                        <li>Github</li>
                        <li>Website</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainProjectInfo;