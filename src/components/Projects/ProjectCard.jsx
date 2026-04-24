import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ProjectCard = ({ title, description, tech, image, onClick }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

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
            onClick={onClick}
            className="glass-card-premium group overflow-hidden cursor-pointer transform-gpu relative h-full flex flex-col border border-white/10"
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Project Image Container */}
            <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent z-10 opacity-60" />
                {image ? (
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <span className="text-6xl font-display font-bold opacity-10">{title.charAt(0)}</span>
                    </div>
                )}
                
                {/* View Details Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/10 backdrop-blur-[2px]">
                    <span className="px-6 py-2 bg-white text-dark-bg font-bold rounded-full text-sm uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors mb-2">
                    {title}
                </h3>
                
                <p className="text-white/50 text-sm mb-6 line-clamp-2 font-light">
                    {description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                    {tech.slice(0, 3).map((item, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-white/5 border border-white/10 rounded-full text-white/40"
                        >
                            {item}
                        </span>
                    ))}
                    {tech.length > 3 && (
                        <span className="px-3 py-1 text-[10px] font-bold text-white/20">+{tech.length - 3} more</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
