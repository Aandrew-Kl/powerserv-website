import { useEffect } from 'react';
import './App.css';
import Navigation from './components/sections/Navigation';
import Hero from './components/sections/Hero';
import TrustBar from './components/sections/TrustBar';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Projects from './components/sections/Projects';
import Stats from './components/sections/Stats';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Process />
        <Projects />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
