import { useEffect, useRef, useState } from 'react';
import { animateTextStagger } from '../../utils/gsapAnimations';

const HeroText = () => {
    const nameRef = useRef(null);
    const roleRef = useRef(null);
    const [animationReady, setAnimationReady] = useState(false);

    useEffect(() => {
        // Small delay to ensure DOM is ready
        const timer = setTimeout(() => {
            setAnimationReady(true);

            // Animate name and role with stagger effect
            if (nameRef.current) {
                try {
                    animateTextStagger(nameRef.current, 0.5);
                } catch (error) {
                    console.log('Animation skipped:', error);
                }
            }
            if (roleRef.current) {
                try {
                    animateTextStagger(roleRef.current, 1.5);
                } catch (error) {
                    console.log('Animation skipped:', error);
                }
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative z-20">
            <div className="space-y-6 max-w-5xl">
                <h1
                    ref={nameRef}
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-gradient mb-4"
                >
                    NAVANEETH K V
                </h1>

                <div className="space-y-3">
                    <h2
                        ref={roleRef}
                        className="text-2xl md:text-4xl lg:text-5xl font-display font-medium text-white/90"
                    >
                        Full Stack MERN Developer
                    </h2>
                    <p className="text-lg md:text-2xl text-white/70 font-light animate-fadeInUp" style={{ animationDelay: '2.5s' }}>
                        & Creative Technologist
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center mt-12 animate-fadeInUp" style={{ animationDelay: '3s' }}>
                    <p className="text-base md:text-lg text-white/60 max-w-2xl">
                        Building scalable web applications with <span className="text-primary font-semibold">5+ years</span> of experience
                        <br />
                        Specializing in high-performance front-ends and immersive digital experiences
                    </p>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fadeInUp" style={{ animationDelay: '3.5s' }}>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-white/40 text-sm uppercase tracking-widest">Scroll to explore</span>
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                            <div className="w-1 h-3 bg-primary rounded-full animate-bounce"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroText;
