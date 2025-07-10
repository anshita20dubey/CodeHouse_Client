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
        <>
            <style jsx>{`
                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .scroll-button-container {
                        bottom: 1.5rem;
                        right: 1.5rem;
                    }
                    .scroll-button {
                        width: 2.5rem;
                        height: 2.5rem;
                    }
                    .scroll-button-icon {
                        width: 1.25rem;
                        height: 1.25rem;
                    }
                }

                @media (max-width: 640px) {
                    .scroll-button-container {
                        bottom: 1rem;
                        right: 1rem;
                    }
                    .scroll-button {
                        width: 2.25rem;
                        height: 2.25rem;
                    }
                    .scroll-button-icon {
                        width: 1rem;
                        height: 1rem;
                    }
                }
            `}</style>

            <div 
                className="fixed bottom-8 sm:bottom-8 md:bottom-8 right-4 sm:right-6 md:right-8 pointer-events-none transition-all duration-300 scroll-button-container"
                style={{ zIndex: 9999 }}
            >
                <button
                    onClick={handleClick}
                    onMouseDown={(e) => e.preventDefault()}
                    className={`
                        flex items-center justify-center w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 
                        bg-gradient-to-br from-gray-800 to-gray-900 
                        hover:from-gray-700 hover:to-gray-800
                        text-white rounded-full shadow-xl 
                        hover:shadow-2xl transform hover:-translate-y-1 
                        transition-all duration-300 ease-in-out 
                        focus:outline-none focus:ring-4 focus:ring-gray-500/30 
                        pointer-events-auto scroll-button
                    `}
                    aria-label={isAtTop ? 'Scroll to bottom' : 'Scroll to top'}
                >
                    {isAtTop ? (
                        <ChevronDown className="w-5 sm:w-5 md:w-6 h-5 sm:h-5 md:h-6 transition-transform duration-300 scroll-button-icon" />
                    ) : (
                        <ChevronUp className="w-5 sm:w-5 md:w-6 h-5 sm:h-5 md:h-6 transition-transform duration-300 scroll-button-icon" />
                    )}
                </button>
            </div>
        </>
    );
};

export default ScrollButton;