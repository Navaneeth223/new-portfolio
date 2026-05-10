import { Suspense, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import BentoGrid from '../components/TechStack/BentoGrid';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import PageTransition from '../components/PageTransition';

const Home = () => {
    useEffect(() => {
        ScrollTrigger.refresh();
    }, []);

    return (
        <PageTransition>
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
        </PageTransition>
    );
};

export default Home;
