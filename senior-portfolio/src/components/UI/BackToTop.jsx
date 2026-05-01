import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-[100] p-4 rounded-xl glass-card border border-white/10 text-primary transition-all duration-500 hover:scale-110 active:scale-95 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            } group shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-primary/50`}
        >
            <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-dark-bg text-[10px] font-black uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Top
            </div>
        </button>
    );
};

export default BackToTop;
