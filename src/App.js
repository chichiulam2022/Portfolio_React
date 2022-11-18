import '../src/styles/App.css';
import { Suspense } from 'react';
import NavBar from './components/Navbar';
import Hero from './components/Hero'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';
import Footer from './components/Footer';

function App() {
  return (
    <Suspense fallback={null}>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Aboutme />
      <Contactme />
      <Footer />
    </Suspense>
  );
}

export default App;
