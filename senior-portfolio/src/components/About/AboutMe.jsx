import React from 'react';
import { User, Code2, GraduationCap, Briefcase, Award } from 'lucide-react';

const AboutMe = () => {
    return (
        <section id="about" className="py-24 px-6 bg-dark-bg relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col mb-16 items-start">
                    <span className="text-secondary font-mono text-sm tracking-[0.3em] uppercase mb-4">Identification</span>
                    <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase italic">
                        The <span className="text-primary">Engineer</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Visual Section */}
                    <div className="lg:col-span-5 relative group">
                        <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 rounded-2xl" />
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 glass-card p-2">
                            <img 
                                src="/images/profile.png" 
                                alt="Navaneeth KV" 
                                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                            
                            {/* Experience Badge */}
                            <div className="absolute bottom-6 right-6 glass-card p-4 border-primary/20 backdrop-blur-xl animate-float">
                                <div className="text-3xl font-bold text-primary leading-none">5+</div>
                                <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Years XP</div>
                            </div>
                        </div>
                    </div>

                    {/* Narrative Section */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-display font-bold text-white leading-tight">
                                Bridging the gap between <span className="text-primary italic">complex logic</span> and <span className="text-secondary italic">human experience</span>.
                            </h3>
                            <p className="text-lg text-white/60 leading-relaxed font-light">
                                Based in India, I am a Full Stack Developer specialized in building scalable, production-grade applications using the MERN stack. My engineering philosophy is simple: <span className="text-white font-medium italic">Build for performance, design for impact.</span>
                            </p>
                            <p className="text-lg text-white/60 leading-relaxed font-light">
                                From architecting complex backend services with <span className="text-white">Node.js</span> and <span className="text-white">Django</span> to crafting immersive 3D interfaces with <span className="text-white">Three.js</span>, I thrive on solving technical challenges that push the boundaries of the modern web.
                            </p>
                        </div>

                        {/* Vital Signs Grid */}
                        <div className="grid md:grid-cols-2 gap-4 pt-4">
                            <div className="glass-card p-6 border-white/5 hover:border-primary/30 transition-colors group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <GraduationCap size={20} />
                                    </div>
                                    <h4 className="font-bold text-white uppercase tracking-wider text-sm">Background</h4>
                                </div>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    BSc Computer Science graduate from CAS Neruvambram (2019-2022). Foundation in algorithmic thinking.
                                </p>
                            </div>

                            <div className="glass-card p-6 border-white/5 hover:border-secondary/30 transition-colors group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                                        <Briefcase size={20} />
                                    </div>
                                    <h4 className="font-bold text-white uppercase tracking-wider text-sm">Experience</h4>
                                </div>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    Freelance Specialist working with global clients. Delivering high-stakes MERN solutions since 2021.
                                </p>
                            </div>

                            <div className="glass-card p-6 border-white/5 hover:border-accent/30 transition-colors group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                        <Award size={20} />
                                    </div>
                                    <h4 className="font-bold text-white uppercase tracking-wider text-sm">Philosophy</h4>
                                </div>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    Architecture first. Clean code isn't just about reading; it's about scalability and maintainability.
                                </p>
                            </div>

                            <div className="glass-card p-6 border-white/5 hover:border-primary/30 transition-colors group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Code2 size={20} />
                                    </div>
                                    <h4 className="font-bold text-white uppercase tracking-wider text-sm">Focus</h4>
                                </div>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    Deep dives into React 19, Three.js, and specialized Backend systems for healthcare and luxury brands.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
