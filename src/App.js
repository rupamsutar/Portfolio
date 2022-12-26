import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Introduction from './Components/Introduction/Introduction';



function App() {
  return (
    <>
    <nav>
      <Navbar />
    </nav>
    <section>
      <Introduction />
    </section>
    </>
  )
}

export default App;
