import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Stagger text animation (letter by letter)
export const animateTextStagger = (element, delay = 0) => {
    if (!element) return;
    const text = element.textContent;
    element.innerHTML = text
        .split('')
        .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

    const chars = element.querySelectorAll('span');
    if (chars.length === 0) return;

    gsap.from(
        chars,
        {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.02,
            delay,
            ease: 'power2.out',
        }
    );
};

// Fade in animation with scroll trigger
export const animateFadeIn = (element, options = {}) => {
    const {
        delay = 0,
        duration = 1,
        y = 50,
        start = 'top 80%',
    } = options;

    gsap.fromTo(
        element,
        {
            opacity: 0,
            y,
        },
        {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start,
                toggleActions: 'play none none reverse',
            },
        }
    );
};

// Parallax scroll effect
export const animateParallax = (element, speed = 0.5) => {
    gsap.to(element, {
        y: () => -window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    });
};

// Magnetic button effect
export const createMagneticEffect = (button) => {
    const handleMouseMove = (e) => {
        const { left, top, width, height } = button.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const deltaX = (e.clientX - centerX) * 0.3;
        const deltaY = (e.clientY - centerY) * 0.3;

        gsap.to(button, {
            x: deltaX,
            y: deltaY,
            duration: 0.5,
            ease: 'power2.out',
        });
    };

    const handleMouseLeave = () => {
        gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
        });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        button.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', handleMouseLeave);
    };
};

// Scale on hover
export const animateScale = (element, scale = 1.05) => {
    element.addEventListener('mouseenter', () => {
        gsap.to(element, {
            scale,
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    element.addEventListener('mouseleave', () => {
        gsap.to(element, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
        });
    });
};

export default {
    animateTextStagger,
    animateFadeIn,
    animateParallax,
    createMagneticEffect,
    animateScale,
};
