import React from 'react';
import SectionTitle from '../UI/SectionTitle';
import classes from "./MainProject.module.css";
import MainProjectInfo from './MainProjectInfo';

const MainProject = () => {
    return(
        <>
        <SectionTitle sectionNumber="02" title="Somethings I've built"></SectionTitle>
        <MainProjectInfo />
        </>
    )
}

export default MainProject;