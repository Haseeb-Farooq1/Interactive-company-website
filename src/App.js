import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandBand from './components/BrandBand';
import ReviewCards from './components/ReviewCards';
import Stats from './components/Stats';
import Videos from './components/Videos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <BrandBand />
      <ReviewCards />
      <Stats />
      <Videos />
      <Footer />
    </div>
  );
}

export default App;
