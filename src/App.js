import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Introduction from './Components/Introduction/Introduction';
import AboutMe from './Components/AboutMe/AboutMe';
import MainProject from './Components/Projects/MainProject';
import Icons_and_email from "./Components/UI/icons-and-email";



function App() {
  return (
    <>    
      <Navbar />    
      <Introduction />   
      <AboutMe />
      <MainProject />
      <Icons_and_email />
    </>
  )
}

export default App;
