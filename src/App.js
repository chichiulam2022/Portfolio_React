import '../src/styles/App.css';
import { Suspense } from 'react';
import NavBar from './components/Navbar';
import Hero from './components/Hero'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Aboutme from './components/Aboutme';

function App() {
  return (
    <Suspense fallback={null}>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Aboutme />
    </Suspense>
  );
}

export default App;
