import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';

function Home() {
  return (
    <div className="home">
      <div className='pembungkus'>
      <Header />
      <Navbar />
      </div>
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
