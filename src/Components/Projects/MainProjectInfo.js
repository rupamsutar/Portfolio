import React from "react";
import classes from './MainProjectInfo.module.css';

const MainProjectInfo = (props) => {

    let imageStyle = {backgroundImage: `url(${props.photoUrl})`,}
    let mainProjectInfoStyle = {};
    let imageHoverEffect = {};
    let contentDescription = {};


    if (props.projectNo%2 === 1) {
        imageStyle.right = 0;
        mainProjectInfoStyle.alignItems = 'flex-start';
        imageHoverEffect.right = 0;
        contentDescription.padding = "16px 32px 16px 0px";
    } else {
        imageStyle.left = 0;
        mainProjectInfoStyle.alignItems = "flex-end";
        imageHoverEffect.left=0;
        contentDescription.padding = "16px 0px 16px 32px";
    }



    return (

        <div style={mainProjectInfoStyle} className={classes.mainProjectInfo}>
            <a href={props.projectLink} target="_blank" rel="noreferrer">
                <div style={imageStyle}                    
                     className={classes.image}>
                </div>       
                <div style={imageHoverEffect} className={classes["image_hover_effect"]}>
                    <p></p>
                </div>
            </a>
            <div className={classes['content__intro']}>
                <p>Featured Project</p>
            </div>
            <div className={classes['content__heading']}>
                <a href={props.projectLink} target="_blank" rel="noreferrer">
                    <h3>{props.title}</h3>
                </a>
            </div>
            <div style={contentDescription} className={classes['content__description']}>
                <p>
                    {props.description}
                </p>
            </div>
            <div className={classes['content__list']}>
                <ul>
                    {props.skills.map((skill) => (
                        <li key={Math.random()}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className={classes['content__links']}>
                <ul>
                    <li>
                        <a href={props.githubLink} target="_blank" rel="noreferrer">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24"
                                className={classes["svg-icon"]} 
                                >                            
                                    <path 
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                    </path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href={props.projectLink} target="_blank" rel="noreferrer">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg"
                                height="26"
                                width="26"
                                viewBox="0 0 24 24"                            
                                // stroke-width="2" 
                                // stroke-linecap="round" 
                                // stroke-linejoin="round"
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