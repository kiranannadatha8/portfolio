import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proficiencies from './components/Proficiencies';
import Work from './components/Work';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary-bg font-inter selection:bg-white/20 selection:text-white">
      <Navbar />
      <main className="max-w-[760px] mx-auto px-6 lg:px-4 flex flex-col pt-8">
        <div id="hero"><Hero /></div>
        <div id="proficiencies"><Proficiencies /></div>
        <div id="work"><Work /></div>
        <div id="education"><Education /></div>
        <div id="certificates"><Certificates /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
