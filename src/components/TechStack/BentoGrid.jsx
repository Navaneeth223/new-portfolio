import { useEffect, useRef } from 'react';
import { animateFadeIn } from '../../utils/gsapAnimations';
import SkillCard from './SkillCard';

const BentoGrid = () => {
    const titleRef = useRef(null);
    const gridRef = useRef(null);
    const competenceRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) animateFadeIn(titleRef.current, { y: 30 });
        if (gridRef.current) animateFadeIn(gridRef.current, { y: 40, delay: 0.2 });
        if (competenceRef.current) animateFadeIn(competenceRef.current, { y: 50, delay: 0.4 });
    }, []);

    const skills = [
        { title: "Front-End", skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'jQuery', 'Bootstrap', 'Tailwind CSS', 'Three.js'], size: "normal", color: "primary" },
        { title: "Back-End", skills: ['Node.js', 'Express.js', 'Django'], size: "normal", color: "secondary" },
        { title: "Databases", skills: ['MongoDB', 'SQL', 'PostgreSQL', 'Firebase'], size: "normal", color: "accent" },
        { title: "Mobile", skills: ['Flutter', 'Dart'], size: "normal", color: "primary" },
        { title: "Tools & DevOps", skills: ['Git', 'GitHub', 'VS Code', 'Android Studio'], size: "normal", color: "secondary" },
        { title: "Specializations", skills: ['REST APIs', 'CRUD Operations', 'Authentication', 'Responsive Design', 'Performance Optimization', 'Animation (GSAP)', '3D Graphics (Three.js)'], size: "normal", color: "accent" }
    ];

    return (
        <section id="tech-stack" className="relative min-h-screen py-24 px-6 md:px-12 bg-dark-surface overflow-hidden">
            {/* Background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col mb-16">
                    <span className="text-secondary font-display font-medium tracking-widest uppercase mb-4">Capabilities</span>
                    <h2 ref={titleRef} className="text-6xl md:text-8xl font-display font-bold text-gradient-secondary leading-tight">
                        Tech Stack
                    </h2>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(250px,_auto)]">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>

                {/* Core Competencies Refined */}
                <div ref={competenceRef} className="mt-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
                        <h3 className="text-3xl font-display font-bold text-white">Core Competencies</h3>
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: "🚀", title: "Full Stack Development", desc: "Building seamless, end-to-end applications with the modern MERN stack.", color: "primary" },
                            { icon: "🎨", title: "Immersive UI/UX", desc: "Designing high-fidelity, interactive interfaces that captivate users.", color: "secondary" },
                            { icon: "⚡", title: "High Performance", desc: "Engineering optimized, lightning-fast solutions for the modern web.", color: "accent" }
                        ].map((item, i) => (
                            <div key={i} className="glass-card-premium p-8 group hover:bg-white/[0.03] transition-all duration-500 relative overflow-hidden border border-white/5">
                                {/* Subtle background glow */}
                                <div className={`absolute -right-10 -top-10 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none ${item.color === 'primary' ? 'bg-primary' : item.color === 'secondary' ? 'bg-secondary' : 'bg-accent'}`} />
                                
                                <div className="text-5xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 relative z-10">{item.icon}</div>
                                <h4 className={`text-xl font-bold mb-4 transition-colors duration-300 relative z-10 ${item.color === 'primary' ? 'text-primary' : item.color === 'secondary' ? 'text-secondary' : 'text-accent'}`}>
                                    {item.title}
                                </h4>
                                <p className="text-white/50 leading-relaxed font-light relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
