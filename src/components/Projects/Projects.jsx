import { useEffect, useRef, useState } from 'react';
import { animateFadeIn } from '../../utils/gsapAnimations';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Bikery from "../../images/Bikery.png"
import Clinic from "../../images/Clinic.png"
import Lodage from "../../images/Lodage.png"
import OpenMind from "../../images/openMind-AI.png"
import PrimuimChocolates from "../../images/Primuim-Chocolates.png"
import TMS from "../../images/TMS.png"

const Projects = () => {
    const titleRef = useRef(null);
    const gridRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (titleRef.current) animateFadeIn(titleRef.current, { y: 30 });
        if (gridRef.current) animateFadeIn(gridRef.current, { y: 40, delay: 0.2 });
    }, []);

    const projects = [
        {
            title: 'OpenMind AI',
            description: 'A free, open-source AI chatbot powered by local LLMs via Ollama. Features streaming chat, real-time web search, file uploads, and conversation history with multi-model support.',
            tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Ollama', 'Prisma', 'Zustand'],
            features: [
                'Local LLM Inference',
                'Real-time Web Search',
                'File Analysis & Extraction',
                'Persistent Conversation History',
                'Multi-model Switching'
            ],
            link: 'https://my-on-ai.vercel.app/',
            github: 'https://github.com/Navaneeth223/my-on-ai',
            image: OpenMind,
        },
        {
            title: 'Serene Homeo Clinic',
            description: 'Production-ready Healthcare application for a Homeopathy clinic. Features patient appointment booking, specialized clinical workflows, and a tablet-optimized UI for practitioners.',
            tech: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
            features: [
                'Patient Appointment Booking',
                'Tablet-Friendly Dashboard',
                'Medical Record Management',
                'Real-time Appointment Status',
                'Clinic Management System'
            ],
            link: 'https://serene-homeo-clinic.vercel.app/',
            github: 'https://github.com/Navaneeth223/Serene-Homeo-Clinic',
            image: Clinic,
        },
        {
            title: "Vedu's Premium Chocolate",
            description: 'An ultra-luxury e-commerce experience for an artisanal chocolate brand. Features a celestial-inspired UI with high-end animations and interactive product storytelling.',
            tech: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion'],
            features: [
                'Celestial-themed UI Design',
                'Smooth Parallax Scrolling',
                'Interactive Product Showcase',
                'Modern Shopping Flow',
                'Luxury Aesthetic'
            ],
            link: 'https://premium-chocolate.vercel.app/',
            github: 'https://github.com/Navaneeth223/premium-chocolate',
            image: PrimuimChocolates,
        },
        {
            title: 'Premium Bakery',
            description: 'Cinematic luxury bakery website featuring a minimal aesthetic, rich animations, and an immersive scroll experience designed for high-end local businesses.',
            tech: ['React', 'Tailwind CSS v4', 'Framer Motion', 'GSAP'],
            features: [
                'Cinematic Ken Burns Hero',
                'Artisanal Product Gallery',
                'Dual Light/Dark Themes',
                'WhatsApp & Call Integration',
                'Luxury Business UI'
            ],
            link: 'https://premium-bakery.vercel.app/',
            github: 'https://github.com/Navaneeth223/PremiumBakery',
            image: Bikery,
        },
        {
            title: 'Talent Management System',
            description: 'Professional Job Portal & Candidate Panel module featuring a multi-step onboarding wizard, dashboard tracking, and advanced job filtering with a mobile-first Figma-to-code UI.',
            tech: ['React (Vite)', 'Tailwind CSS v3.3', 'React Router', 'Lucide Icons'],
            features: [
                'Multi-step Onboarding Wizard',
                'Real-time Profile Tracking',
                'Advanced Job Filtering',
                'Responsive Admin Dashboard',
                'Mobile-first UX'
            ],
            link: 'http://159.65.157.39/',
            github: 'https://github.com/Navaneeth223/JobPortal1',
            image: TMS,
        },
        {
            title: 'Mountain Resort',
            description: 'Cinematic nature-focused resort website featuring a unique seasonal fog atmosphere and sophisticated design system for premium hotel and tourism experiences.',
            tech: ['React', 'Tailwind CSS v4', 'Framer Motion', 'Lucide Icons'],
            features: [
                'Seasonal Fog Atmospheric Effect',
                'Custom Interactive Glow Cursor',
                'Immersive Storytelling Visuals',
                'Ultra-Responsive Luxury UI',
                'Nature-focused Design System'
            ],
            link: 'https://mountain-resort.vercel.app/',
            github: 'https://github.com/Navaneeth223/MountainResort',
            image: Lodage,
        },
    ];

    return (
        <section id="projects" className="relative min-h-screen py-24 px-6 md:px-12 bg-dark-bg overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col mb-16">
                    <span className="text-primary font-display font-medium tracking-widest uppercase mb-4">Portfolio</span>
                    <h2 ref={titleRef} className="text-6xl md:text-8xl font-display font-bold text-gradient leading-tight">
                        Featured Work
                    </h2>
                </div>

                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            {...project} 
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>

                {/* Call to action */}
                <div className="mt-24 text-center">
                    <div className="glass-card-premium inline-block p-12 max-w-2xl">
                        <h3 className="text-3xl font-display font-bold text-white mb-4">Have a project in mind?</h3>
                        <p className="text-white/60 mb-8 font-light">
                            I'm always looking for new challenges and interesting projects to work on. 
                            Let's build something amazing together.
                        </p>
                        <a
                            href="https://github.com/Navaneeth223"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-dark-bg rounded-full font-bold text-lg transition-all hover:bg-primary-light hover:scale-105"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View More on GitHub
                        </a>
                    </div>
                </div>
            </div>

            {/* Project Details Modal */}
            <ProjectModal 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
        </section>
    );
};

export default Projects;
