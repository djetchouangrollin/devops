import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import Project from './components/Project';
import Formation from './components/Formation';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Project />
      <Formation />
    </div>
  );
}

export default App;
