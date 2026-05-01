import { ExternalLink, Code, Terminal, Zap, Layers } from 'lucide-react';

const ProjectStory = ({ project }) => {
    return (
        <div className="min-h-screen py-24 px-6 flex flex-col items-center justify-center border-b border-white/5 relative overflow-hidden group">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-1000" />

            <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left Content: The Story */}
                <div className="space-y-8 animate-fadeInUp">
                    <div className="space-y-2">
                        <span className="text-secondary font-mono text-xs tracking-[0.4em] uppercase">Engineering Deep Dive</span>
                        <h3 className="text-4xl md:text-6xl font-display font-black text-white italic uppercase tracking-tighter leading-none">
                            {project.title}
                        </h3>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                                <Terminal size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-xs">The Challenge</h4>
                                <p className="text-white/60 text-sm leading-relaxed font-light">
                                    {project.challenge}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-secondary">
                                <Layers size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-xs">The Architecture</h4>
                                <p className="text-white/60 text-sm leading-relaxed font-light">
                                    {project.architecture}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-accent">
                                <Zap size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-xs">The Result</h4>
                                <p className="text-white/60 text-sm leading-relaxed font-light">
                                    {project.result}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                            Live Demo <ExternalLink size={16} />
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 glass-card flex items-center gap-2 text-white hover:bg-white/10 transition-all">
                            View Source <Code size={16} />
                        </a>
                    </div>
                </div>


                {/* Right Content: Visual/Tech Stack */}
                <div className="relative group animate-fadeInUp" style={{animationDelay: '200ms'}}>
                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-secondary/10 to-accent/20 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="glass-card p-1 relative overflow-hidden aspect-video bg-dark-surface">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                        
                        {/* Floating Tech Badges */}
                        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1 bg-dark-bg/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono text-white/70 uppercase">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectStories = () => {
    const projects = [
        {
            title: 'OpenMind AI',
            challenge: 'Implementing high-performance, real-time LLM streaming with local inference (Ollama) while maintaining low latency and zero data leakage.',
            architecture: 'Built on Next.js 14 with a persistent state layer via Zustand and a Prisma-managed local database for conversation history.',
            result: 'Achieved <200ms initial response time for local LLM inference with support for multi-modal file analysis.',
            tech: ['Next.js 14', 'Ollama', 'Prisma', 'Tailwind CSS'],
            link: 'https://my-on-ai.vercel.app/',
            github: 'https://github.com/Navaneeth223/my-on-ai',
            image: '/images/openMind-AI.png', // Fallback path, will be updated if needed
        },
        {
            title: 'TMS Portal',
            challenge: 'Converting complex Figma workflows into a mobile-first, multi-step onboarding wizard with real-time profile tracking and validation.',
            architecture: 'React-driven modular architecture using React Router for navigation and a custom validation engine for candidate data.',
            result: 'Reduced onboarding drop-off by 40% through intuitive UX and progress persistence.',
            tech: ['React', 'Tailwind', 'React Router', 'Lucide'],
            link: 'http://159.65.157.39/',
            github: 'https://github.com/Navaneeth223/JobPortal1',
            image: '/images/TMS.png',
        },
        {
            title: 'Mountain Resort',
            challenge: 'Creating a high-end luxury feel through cinematic animations and a unique seasonal atmospheric system (Fog/Mist effects).',
            architecture: 'GSAP and Framer Motion powered animation system with a custom hook that triggers seasonal UI changes based on real-time data.',
            result: '100% Lighthouse score on Performance and Accessibility with ultra-premium user engagement metrics.',
            tech: ['React', 'GSAP', 'Framer Motion', 'Tailwind v4'],
            link: 'https://mountain-resort.vercel.app/',
            github: 'https://github.com/Navaneeth223/MountainResort',
            image: '/images/Lodage.png',
        }
    ];

    return (
        <section id="projects" className="bg-dark-bg">
            {projects.map((project, index) => (
                <ProjectStory key={index} project={project} />
            ))}
        </section>
    );
};

export default ProjectStories;
