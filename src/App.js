import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandBand from './components/BrandBand';
import ReviewCards from './components/ReviewCards';
import Videos from './components/Videos';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <BrandBand />
      <ReviewCards />
      <Videos />
      <main className="main-content">
        {/* Other components and content will go here */}
      </main>
    </div>
  );
}

export default App;
