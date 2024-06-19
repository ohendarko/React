import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import PhotoGrid from './Components/PhotoGrid';
import Hero from './Components/Hero';
import Card from './Components/Card';
import loneWoman from './assets/images/lone-woman.png';

const App = () => {
  return (
    <div>
      <Navbar />
      <PhotoGrid />
      <Hero />
      <Card
      img={loneWoman}
      rating="5.0"
      reviewCount={6}
      country="USA"
      
      />
    </div>
  )
}

export default App;