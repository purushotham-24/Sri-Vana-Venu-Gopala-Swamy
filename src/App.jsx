import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickInfo from './components/QuickInfo';
import About from './components/About';
import Timings from './components/Timings';
import Gallery from './components/Gallery';
import Donations from './components/Donations';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <QuickInfo />
      <About />
      <Timings />
      <Gallery />
      <Donations />
      <Location />
      <Footer />
    </div>
  );
}
