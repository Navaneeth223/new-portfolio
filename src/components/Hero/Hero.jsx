import Hero3DBackground from './Hero3DBackground';
import HeroText from './HeroText';

const Hero = () => {
    return (
        <section id="hero" className="relative w-full min-h-screen overflow-hidden">
            <Hero3DBackground />
            <HeroText />
        </section>
    );
};

export default Hero;
