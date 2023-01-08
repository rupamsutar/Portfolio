import React from "react";
import classes from './MainProjectInfo.module.css';
import MyYuMeals from "../../Assets/MyYuMeals.jpg";
// import GithubIcon from "../../Assets/Icons/Github.png"

const MainProjectInfo = () => {

    return (

        <div className={classes.mainProjectInfo}>
            <div className={classes.image}>
                {/* <img src={MyYuMeals} alt="Project information" /> */}
            </div>
            <div className={classes["image_hover_effect"]}>
                <p> </p>
            </div>
            <div className={classes['content__intro']}>
                <p>Featured Project</p>
            </div>
            <div className={classes['content__heading']}>
                <h3>MyYuMeals</h3>
            </div>
            <div className={classes['content__description']}>
                <p>
                    Here I've tried to develop a food order app which gets inspired from online 
                    food delivery services like Swiggy and Zomato in India. I have tried to use many
                    react concepts like hooks and api context to complete the app. Currently I am 
                    trying to add a bit of backend to it !
                </p>
            </div>
            <div className={classes['content__list']}>
                <ul>
                    <li>React</li>
                    <li>React-Hooks</li>
                    <li>Context-API</li>
                    <li>Reducer</li>
                </ul>
            </div>
            <div className={classes['content__links']}>
                <ul>
                    <li>
                        <a href="https://github.com/rupamsutar/MyZomato">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                height="24"
                                width="24"
                                viewBox="0 0 24 24" 

                                stroke="#e6f1ff" 
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className={classes["svg-icon"]} 
                                >                            
                                    <path 
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                    </path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://rupamsutar.github.io/MyZomato/">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg"
                                height="26"
                                width="26"
                                viewBox="0 0 24 24"                            
                                stroke-width="2" 
                                stroke-linecap="round" 
                                stroke-linejoin="round"
                                className={classes["svg-icon"]} 
                                >
                                    <path 
                                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                                    </path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MainProjectInfo;