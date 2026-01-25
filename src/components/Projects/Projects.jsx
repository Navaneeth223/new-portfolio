import { useEffect, useRef } from 'react';
import { animateFadeIn } from '../../utils/gsapAnimations';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const titleRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            animateFadeIn(titleRef.current, { y: 30 });
        }
        if (gridRef.current) {
            animateFadeIn(gridRef.current, { y: 40, delay: 0.2 });
        }
    }, []);

    const projects = [
        {
            title: 'Net Shop',
            description: 'Full-stack e-commerce platform with responsive layout, advanced product filtering, shopping cart flow, seller dashboard, and smooth UI animations. Complete MERN stack implementation.',
            tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
            link: '', // Add your project link
        },
        {
            title: 'PDF Editor',
            description: 'Advanced browser-based PDF manipulation tool featuring text insertion, image placement, freehand drawing, erasing capabilities, watermarking, and multi-page editing with accurate canvas positioning.',
            tech: ['React.js', 'Canvas API', 'JavaScript', 'PDF.js'],
            link: '',
        },
        {
            title: 'AI Wallpaper Generator',
            description: 'Web application that generates stunning mobile wallpapers from text prompts. Features AI image generation, custom text overlays, fonts, emojis, stickers, and multiple resolution support with download functionality.',
            tech: ['React.js', 'Node.js', 'Express.js', 'AI API', 'Canvas'],
            link: '',
        },
        {
            title: 'Bread Factory',
            description: 'Interactive business website showcasing 3D visual elements and smooth animations. Implemented with Three.js-based 3D elements and Firebase backend for content management.',
            tech: ['Three.js', 'React.js', 'Firebase', 'GSAP'],
            link: '',
        },
        {
            title: 'QR Code Generator',
            description: 'Custom QR code generator with support for both SVG and PNG formats. Features include adjustable size control, error correction levels, and clean UI with dark/light mode support.',
            tech: ['React.js', 'QR Library', 'JavaScript', 'CSS3'],
            link: '',
        },
        {
            title: 'One Touch',
            description: 'Flutter-based mobile application centralizing essential services into one platform. Integrated Firebase authentication for secure user management and real-time data handling.',
            tech: ['Flutter', 'Dart', 'Firebase', 'Mobile Dev'],
            link: '',
        },
    ];

    return (
        <section id="projects" className="min-h-screen py-20 px-4 md:px-8 bg-dark-bg">
            <div className="max-w-7xl mx-auto">
                <h2
                    ref={titleRef}
                    className="text-5xl md:text-7xl font-display font-bold mb-12 text-gradient"
                >
                    Featured Projects
                </h2>

                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                {/* Call to action */}
                <div className="mt-16 text-center">
                    <p className="text-xl text-white/60 mb-6">
                        Want to see more of my work?
                    </p>
                    <a
                        href="https://github.com/navaneethkv002"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-full font-medium text-lg transition-all duration-300 hover:bg-primary hover:text-dark-bg"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Profile
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
