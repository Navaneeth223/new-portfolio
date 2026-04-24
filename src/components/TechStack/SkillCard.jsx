import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SkillCard = ({ title, skills, size = 'normal', color = 'primary' }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (clientX - left) / width;
            const y = (clientY - top) / height;
            
            const rotateX = (y - 0.5) * 10;
            const rotateY = (x - 0.5) * -10;

            gsap.to(card, {
                rotateX,
                rotateY,
                duration: 0.5,
                ease: 'power2.out',
                transformPerspective: 1000
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const sizeClasses = {
        small: 'col-span-1 row-span-1',
        normal: 'col-span-1 md:col-span-2 row-span-1',
        large: 'col-span-1 md:col-span-2 row-span-2',
    };

    const colorGradients = {
        primary: 'group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]',
        secondary: 'group-hover:border-secondary/50 group-hover:shadow-[0_0_20px_rgba(255,0,229,0.2)]',
        accent: 'group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(112,0,255,0.2)]',
    };

    const titleColors = {
        primary: 'group-hover:text-primary',
        secondary: 'group-hover:text-secondary',
        accent: 'group-hover:text-accent',
    };

    return (
        <div
            ref={cardRef}
            className={`glass-card-premium p-8 ${sizeClasses[size]} group relative overflow-hidden transition-all duration-300 ${colorGradients[color]}`}
        >
            <div className="relative z-10">
                <h3 className={`text-2xl md:text-3xl font-display font-bold mb-6 text-white transition-colors duration-300 ${titleColors[color]}`}>
                    {title}
                </h3>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/70 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-sm font-medium"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Decorative background circle */}
            <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500
                ${color === 'primary' ? 'bg-primary' : color === 'secondary' ? 'bg-secondary' : 'bg-accent'}`} 
            />
        </div>
    );
};

export default SkillCard;
