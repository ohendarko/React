import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import PhotoGrid from './Components/PhotoGrid';
import Hero from './Components/Hero';
import Card from './Components/Card';


const App = () => {
  return (
    <div>
      <Navbar />
      <PhotoGrid />
      <Hero />
      <Card />
    </div>
  )
}

export default App;