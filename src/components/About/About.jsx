import { useEffect, useRef } from 'react';
import { animateFadeIn } from '../../utils/gsapAnimations';
import profileImg from '../../images/profile.png';

const About = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) animateFadeIn(titleRef.current, { y: 30 });
        if (imageRef.current) animateFadeIn(imageRef.current, { x: -50, delay: 0.2 });
        if (textRef.current) animateFadeIn(textRef.current, { x: 50, delay: 0.3 });
        if (cardsRef.current) animateFadeIn(cardsRef.current, { y: 40, delay: 0.5 });
    }, []);

    return (
        <section id="about" ref={sectionRef} className="relative min-h-screen py-24 px-6 md:px-12 bg-dark-bg overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col mb-16">
                    <span className="text-primary font-display font-medium tracking-widest uppercase mb-4">Discover</span>
                    <h2 ref={titleRef} className="text-6xl md:text-8xl font-display font-bold text-gradient leading-tight">
                        About Me
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    {/* Image Column */}
                    <div ref={imageRef} className="lg:col-span-5 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 rounded-2xl" />
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 glass-card-premium p-2">
                            <img 
                                src={profileImg} 
                                alt="Navaneeth KV" 
                                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                            />
                        </div>
                        
                        {/* Stats Overlay */}
                        <div className="absolute -bottom-8 -right-8 glass-card p-6 border border-primary/20 backdrop-blur-xl animate-float">
                            <div className="text-4xl font-bold text-primary mb-1">5+</div>
                            <div className="text-sm text-white/60 font-medium uppercase tracking-tighter">Years Experience</div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div ref={textRef} className="lg:col-span-7 space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-display font-semibold text-white leading-tight">
                                Crafting digital experiences with <span className="text-primary">precision</span> and <span className="text-secondary">passion</span>.
                            </h3>
                            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                                As a Full Stack MERN Developer, I blend technical expertise with creative vision. My journey from a 
                                <span className="text-white font-medium"> BSc in Computer Science</span> to a 
                                <span className="text-white font-medium"> Freelance Specialist</span> has been driven by a relentless 
                                pursuit of excellence in web technologies.
                            </p>
                            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                                I don't just build websites; I create <span className="text-primary font-medium">high-performance digital solutions</span> 
                                that push the boundaries of what's possible on the web, utilizing Three.js and GSAP for immersive experiences.
                            </p>
                        </div>

                        {/* Education & Experience Cards */}
                        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 mt-12">
                            <div className="glass-card-premium p-8 hover:border-primary/50 transition-colors">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Education</h4>
                                <p className="text-primary font-medium text-sm mb-1">BSc Computer Science</p>
                                <p className="text-white/40 text-sm">CAS Neruvambram</p>
                                <p className="text-white/20 text-xs mt-2 italic">2019 - 2022</p>
                            </div>

                            <div className="glass-card-premium p-8 hover:border-secondary/50 transition-colors">
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Experience</h4>
                                <p className="text-secondary font-medium text-sm mb-1">Freelance Developer</p>
                                <p className="text-white/40 text-sm">Global Clients</p>
                                <p className="text-white/20 text-xs mt-2 italic">2021 - Present</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
