import { Suspense, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import BentoGrid from './components/TechStack/BentoGrid';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Update ScrollTrigger on load
    ScrollTrigger.refresh();
  }, []);

  return (
    <SmoothScroll>
      <div className="relative overflow-x-hidden">
        <CustomCursor />

        {/* Loading fallback for 3D components */}
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-dark-bg">
            <div className="text-primary text-2xl animate-pulse">Loading...</div>
          </div>
        }>
          <Hero />
        </Suspense>

        <About />
        <BentoGrid />
        <Projects />
        <Contact />
      </div>
    </SmoothScroll>
  );
}

export default App;
