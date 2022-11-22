import '../src/styles/App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';
import Footer from './components/Footer';
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <NavBar />
      <ParallaxBanner>
        <Parallax speed={-30}>
          <Hero />
        </Parallax>
        <Skills />
        <Projects />
        <Aboutme />
        <Parallax speed={-10}>
          <Contactme />
          <Footer />
        </Parallax>
      </ParallaxBanner>
    </ParallaxProvider>
  );
}

export default App;
