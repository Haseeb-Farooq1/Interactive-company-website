import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandBand from './components/BrandBand';
import ReviewCards from './components/ReviewCards';
import Videos from './components/Videos';
import Services from './pages/Services';
import ScalonicsPromise from './pages/ScalonicsPromise';
import SuccessStories from './pages/SuccessStories';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <BrandBand />
                <ReviewCards />
                <Videos />
              </>
            } />
            <Route path="/services" element={<Services />} />
            <Route path="/scalonics-promise" element={<ScalonicsPromise />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
