import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import BrandBand from './components/BrandBand';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Videos from './components/Videos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <VideoSection />
      <BrandBand />
      <Testimonials />
      <Stats />
      <Videos />
      <Footer />
    </div>
  );
}

export default App;
