import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Introduction from './Components/Introduction/Introduction';
import AboutMe from './Components/AboutMe/AboutMe';



function App() {
  return (
    <>
    <nav>
      <Navbar />
    </nav>
    <section>
      <Introduction />
    </section>
    <section>
      <AboutMe />
    </section>
    </>
  )
}

export default App;
