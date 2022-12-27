import React from "react";
import classes from "./SectionTitle.module.css"

const SectionTitle = (props) => {
    return (
        <>
            <h1 class={classes.h1}><span>{props.sectionNumber}.</span> {props.title}</h1>
        </>
    )
}

export default SectionTitle;