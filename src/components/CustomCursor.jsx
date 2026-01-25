import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        // Check if device supports hover (not mobile)
        const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (isMobile) return;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: 'power2.out',
            });

            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
        };

        const handleMouseEnter = () => {
            cursor.classList.add('hover');
        };

        const handleMouseLeave = () => {
            cursor.classList.remove('hover');
        };

        // Add hover effect to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, [role="button"]');

        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor hidden md:block" />
            <div
                ref={cursorDotRef}
                className="fixed w-1 h-1 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
        </>
    );
};

export default CustomCursor;
