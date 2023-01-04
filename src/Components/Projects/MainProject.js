import React from 'react';
import SectionTitle from '../UI/SectionTitle';
import classes from "./MainProject.module.css";
import MainProjectInfo from './MainProjectInfo';

const MainProject = () => {
    return(
        <div className={classes.mainProject}>
            <SectionTitle sectionNumber="02" title="Somethings I've built"></SectionTitle>
            <MainProjectInfo />
        </div>
    )
}

export default MainProject;