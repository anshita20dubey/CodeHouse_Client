import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ScrollButton = () => {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const scrollPercent = scrollTop / (scrollHeight - clientHeight);
            setIsAtTop(scrollPercent < 0.5);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    const handleClick = () => {
        if (isAtTop) {
            scrollToBottom();
        } else {
            scrollToTop();
        }
    };

    return (
        <div 
            className="fixed bottom-8 right-8 pointer-events-none transition-all duration-300"
            style={{ zIndex: 9999 }}
        >
            <button
                onClick={handleClick}
onMouseDown={(e) => e.preventDefault()}
                className={`
                    flex items-center justify-center w-12 h-12 
                    bg-gradient-to-br from-gray-800 to-gray-900 
                    hover:from-gray-700 hover:to-gray-800
                    text-white rounded-full shadow-xl 
                    hover:shadow-2xl transform hover:-translate-y-1 
                    transition-all duration-300 ease-in-out 
                    focus:outline-none focus:ring-4 focus:ring-gray-500/30 
                    pointer-events-auto
                `}
                aria-label={isAtTop ? 'Scroll to bottom' : 'Scroll to top'}
            >
                {isAtTop ? (
                    <ChevronDown className="w-6 h-6 transition-transform duration-300" />
                ) : (
                    <ChevronUp className="w-6 h-6 transition-transform duration-300" />
                )}
            </button>
        </div>
    );
};

export default ScrollButton;