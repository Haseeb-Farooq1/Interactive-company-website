import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Starfield from './components/Starfield';
import Hero from './components/Hero';
import BrandBand from './components/BrandBand';
import Stats from './components/Stats';
import BusinessModel from './components/BusinessModel';
import Footer from './components/Footer';
import Services from './pages/Services';
import ScalonicsPromise from './pages/ScalonicsPromise';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Starfield />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <BrandBand />
                <Stats />
                <BusinessModel />
              </>
            } />
            <Route path="/services" element={<Services />} />
            <Route path="/scalonics-promise" element={<ScalonicsPromise />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
