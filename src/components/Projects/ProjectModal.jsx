import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ProjectModal = ({ project, onClose }) => {
    const modalRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (project) {
            gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
            gsap.fromTo(contentRef.current, { scale: 0.9, y: 50 }, { scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' });
        }
    }, [project]);

    if (!project) return null;

    return (
        <div 
            ref={modalRef} 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={onClose}
        >
            <div 
                ref={contentRef}
                className="glass-card-premium max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-white/20"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-dark-bg transition-all"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Image Section */}
                    <div className="space-y-4">
                        <a 
                            href={project.link || '#'} 
                            target={project.link ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className={`block aspect-video rounded-xl overflow-hidden border border-white/10 bg-dark-surface relative group/img ${!project.link && 'cursor-default'}`}
                        >
                            {project.image ? (
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                />
                            ) : (
                                <div className="text-white/20 text-center p-8 italic">
                                    No Image Available<br/>
                                    <span className="text-xs">Place image in src/images/</span>
                                </div>
                            )}
                            
                            {project.link && (
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                    <div className="bg-white text-dark-bg p-3 rounded-full shadow-xl transform scale-75 group-hover/img:scale-100 transition-transform">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </a>
                        <div className="flex gap-4">
                            {project.link && (
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex-1 px-6 py-3 bg-primary text-dark-bg font-bold rounded-lg text-center hover:bg-primary-light transition-all flex items-center justify-center gap-2"
                                >
                                    <span>Live Site</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            )}
                            {project.github && (
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex-1 px-6 py-3 bg-white/10 text-white font-bold rounded-lg text-center hover:bg-white/20 transition-all border border-white/10 flex items-center justify-center gap-2"
                                >
                                    <span>GitHub</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-display font-bold text-gradient">{project.title}</h2>
                        
                        <div className="space-y-2">
                            <h3 className="text-lg font-bold text-white uppercase tracking-wider opacity-60">About</h3>
                            <p className="text-white/80 leading-relaxed font-light">{project.description}</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-bold text-white uppercase tracking-wider opacity-60">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((item, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm font-medium"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {project.features && (
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-white uppercase tracking-wider opacity-60">Key Features</h3>
                                <ul className="space-y-2">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                                            <span className="text-primary mt-1">▹</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
