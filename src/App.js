import React from 'react';

import './App.css';

import About from './components/about/About';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import ScrollUp from './components/scrollup/ScrollUp';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';


const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Qualification />
        <Skills />
        <Gallery />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
