import React, { useState, useEffect } from 'react'
import '../src/styles/App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';
import Footer from './components/Footer';
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import PacmanLoader from "react-spinners/PacmanLoader";

import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3100);
  }, []);

  return (
    <div className="App">
      {loading ?
        (
          <div className="loader-bx">
            <PacmanLoader size={30} color="orange" className="loader" />
            <p className="loader-text">Loading...</p>
            <PacmanLoader size={30} color="green" className="loader" />
          </div>
        ) :

        (
          <ParallaxProvider>
            <NavBar />
            <ParallaxBanner>
              <Parallax speed={-30}>
                <Hero />
              </Parallax>
              <Skills />
              <Projects />
              <Aboutme />
              <Contactme />
              <Footer />
            </ParallaxBanner>
          </ParallaxProvider>
        )}
    </div>
  );
}

export default App;