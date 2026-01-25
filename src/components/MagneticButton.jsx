import { useEffect, useRef } from 'react';
import { createMagneticEffect } from '../utils/gsapAnimations';

const MagneticButton = ({ children, className = '', onClick, href }) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const cleanup = createMagneticEffect(buttonRef.current);
        return cleanup;
    }, []);

    const baseClasses = `relative px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-full font-medium text-lg transition-all duration-300 hover:bg-primary hover:text-dark-bg cursor-pointer ${className}`;

    if (href) {
        return (
            <a
                ref={buttonRef}
                href={href}
                className={baseClasses}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }

    return (
        <button ref={buttonRef} onClick={onClick} className={baseClasses}>
            {children}
        </button>
    );
};

export default MagneticButton;
