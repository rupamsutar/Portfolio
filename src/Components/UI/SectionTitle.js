import React from "react";
import classes from "./SectionTitle.module.css"

const SectionTitle = (props) => {
    return (
        <div className={classes.sectionTitle}>
            <h1 className={classes.h1}><span>{props.sectionNumber}.</span> {props.title}</h1>
        </div>
    )
}

export default SectionTitle;