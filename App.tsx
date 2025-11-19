import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;