import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Introduction from './Components/Introduction/Introduction';
import AboutMe from './Components/AboutMe/AboutMe';
import MainProject from './Components/Projects/MainProject';
import IconsAndEmail from "./Components/UI/icons-and-email";
import OtherProjects from './Components/Projects/OtherProjects';



function App() {
  return (
    <>    
      <Navbar />    
      <Introduction />   
      <AboutMe />
      <MainProject />
      <IconsAndEmail />
      <OtherProjects />
    </>
  )
}

export default App;
