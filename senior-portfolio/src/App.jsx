import React from 'react';
import Hero from './components/Hero/Hero';
import Terminal from './components/Terminal/Terminal';
import ArchitectureGrid from './components/Tech/ArchitectureGrid';
import TechInventory from './components/Tech/TechInventory';
import ProjectStories from './components/Projects/ProjectStories';
import AboutMe from './components/About/AboutMe';
import Contact from './components/UI/Contact';
import BackToTop from './components/UI/BackToTop';

function App() {
  return (
    <main className="relative min-h-screen selection:bg-primary selection:text-dark-bg">
      {/* Premium Background Layers */}
      <div className="fixed inset-0 bg-dark-bg z-[-2]" />
      <div className="noise-overlay" />
      
      {/* Decorative Gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-8 flex flex-col md:flex-row justify-between items-center backdrop-blur-sm bg-dark-bg/80 md:bg-dark-bg/20 border-b border-white/5 md:border-none">
        <div className="font-display font-black text-xl md:text-2xl tracking-tighter uppercase italic mb-4 md:mb-0">
          N<span className="text-primary">.</span>KV
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/60 md:text-white/40">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#tech" className="hover:text-primary transition-colors">Stack</a>
          <a href="#terminal" className="hover:text-primary transition-colors">Console</a>
          <a href="#projects" className="hover:text-primary transition-colors">Work</a>
          <a href="#contact" className="hover:text-primary transition-colors font-bold text-white/80">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative">
        <Hero />
        
        <AboutMe />

        <div id="systems" className="relative z-10 bg-dark-bg">
            <ArchitectureGrid />
            <TechInventory />
        </div>

        <div id="terminal" className="py-24 px-6 bg-dark-surface/30">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col mb-12 items-center text-center">
                    <span className="text-secondary font-mono text-sm tracking-[0.3em] uppercase mb-4">Command Center</span>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase italic">
                        The Console
                    </h2>
                </div>
                <Terminal />
            </div>
        </div>

        <ProjectStories />

        <Contact />

        <footer className="py-12 border-t border-white/5 text-center">
            <div className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
                &copy; 2025 Navaneeth KV — Built for the Next Web
            </div>
        </footer>
      </div>

      <BackToTop />
    </main>
  );
}

export default App;
