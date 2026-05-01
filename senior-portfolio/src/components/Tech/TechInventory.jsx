import React from 'react';
import { Layout, Server, Database, Cloud, Terminal, Cpu, Zap, Globe } from 'lucide-react';

const TechCategory = ({ title, icon: Icon, skills, colorClass }) => (
    <div className="glass-card p-8 border-white/5 hover:border-white/20 transition-all group h-full">
        <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${colorClass}`}>
            <Icon size={24} />
        </div>
        <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider italic">{title}</h4>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span 
                    key={index} 
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/60 hover:text-primary hover:border-primary/50 transition-all cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const TechInventory = () => {
    const categories = [
        {
            title: "Frontend Core",
            icon: Layout,
            colorClass: "text-primary",
            skills: ["React 19", "Next.js 14", "TypeScript", "Tailwind v4", "JavaScript (ES6+)", "HTML5/CSS3"]
        },
        {
            title: "Backend & API",
            icon: Server,
            colorClass: "text-secondary",
            skills: ["Node.js", "Express.js", "Django", "Python", "REST APIs", "GraphQL"]
        },
        {
            title: "Data Systems",
            icon: Database,
            colorClass: "text-accent",
            skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "Mongoose"]
        },
        {
            title: "DevOps & Cloud",
            icon: Cloud,
            colorClass: "text-primary",
            skills: ["AWS", "Vercel", "Docker", "Git/GitHub", "CI/CD Pipelines", "Nginx"]
        },
        {
            title: "Interactive/3D",
            icon: Zap,
            colorClass: "text-secondary",
            skills: ["Three.js", "GSAP", "Framer Motion", "React Three Fiber", "WebXR", "Shaders (GLSL)"]
        },
        {
            title: "Engineering",
            icon: Terminal,
            colorClass: "text-accent",
            skills: ["Architecture Design", "Unit Testing", "Performance Auth", "System Sync", "Security (AES)", "Documentation"]
        }
    ];

    return (
        <section id="tech" className="py-24 px-6 bg-dark-surface/50 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col mb-16 items-end text-right">
                    <span className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-4">Inventory</span>
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase italic">
                        Technical <span className="text-secondary">Arsenal</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, index) => (
                        <TechCategory key={index} {...cat} />
                    ))}
                </div>

                {/* Scannable footer */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-8 justify-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    <span className="font-mono text-xs tracking-widest uppercase">MERN SPECIALIST</span>
                    <span className="font-mono text-xs tracking-widest uppercase">CREATIVE TECHNOLOGIST</span>
                    <span className="font-mono text-xs tracking-widest uppercase">FULL STACK ARCHITECT</span>
                </div>
            </div>
        </section>
    );
};

export default TechInventory;
