import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Introduction from './Components/Introduction/Introduction';
import AboutMe from './Components/AboutMe/AboutMe';
import MainProject from './Components/Projects/MainProject';
import IconsAndEmail from "./Components/UI/icons-and-email";
import OtherProjects from './Components/Projects/OtherProjects';
import WhatsNext from "./Components/FooterSection/WhatsNext"
import Footer from './Components/FooterSection/Footer';



function App() {
  return (
    <>    
      <Navbar />    
      <Introduction />   
      <AboutMe />
      <MainProject />
      <IconsAndEmail />
      <OtherProjects />
      <WhatsNext />
      <Footer />
    </>
  )
}

export default App;
