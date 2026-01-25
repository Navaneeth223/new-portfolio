import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ProjectCard = ({ title, description, tech, link, image }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        // Tilt effect on mouse move
        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            gsap.to(card, {
                rotateX,
                rotateY,
                duration: 0.5,
                ease: 'power2.out',
                transformPerspective: 1000,
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: 'power2.out',
            });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="glass-card group overflow-hidden cursor-pointer transform-gpu"
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Project Image/Placeholder */}
            <div className="h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <div className="text-6xl opacity-50">{title.charAt(0)}</div>
                )}
            </div>

            {/* Project Content */}
            <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors mb-3">
                {title}
            </h3>

            <p className="text-white/70 mb-4 line-clamp-3">{description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((item, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-xs bg-primary/10 border border-primary/30 rounded-full text-primary"
                    >
                        {item}
                    </span>
                ))}
            </div>

            {/* Link */}
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
                >
                    View Project
                    <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </a>
            )}
        </div>
    );
};

export default ProjectCard;
