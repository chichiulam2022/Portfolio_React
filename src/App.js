import './App.css';
import { Suspense } from 'react';
import NavBar from './components/Navbar';
import Hero from './components/Hero'
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <Suspense fallback={null}>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
    </Suspense>
  );
}

export default App;
