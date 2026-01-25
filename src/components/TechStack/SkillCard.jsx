import { useEffect, useRef } from 'react';
import { animateScale } from '../../utils/gsapAnimations';

const SkillCard = ({ title, skills, size = 'normal', color = 'primary' }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        if (cardRef.current) {
            animateScale(cardRef.current, 1.02);
        }
    }, []);

    const sizeClasses = {
        small: 'col-span-1 row-span-1',
        normal: 'col-span-1 md:col-span-2 row-span-1',
        large: 'col-span-1 md:col-span-2 row-span-2',
    };

    const colorClasses = {
        primary: 'from-primary/20 to-primary/5',
        secondary: 'from-blue-500/20 to-blue-500/5',
        accent: 'from-purple-500/20 to-purple-500/5',
    };

    return (
        <div
            ref={cardRef}
            className={`glass-card bg-gradient-to-br ${colorClasses[color]} ${sizeClasses[size]} group`}
        >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white group-hover:text-primary transition-colors">
                {title}
            </h3>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white/80 hover:bg-white/10 hover:text-primary transition-all duration-300 text-sm md:text-base"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
