import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsMenuOpen(false); // Close mobile menu after clicking
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-3 sm:px-4 md:px-6 py-3 sm:py-4 shadow-sm">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 via-white/50 to-purple-50/30"></div>

            {/* Floating decorative elements - hidden on mobile for cleaner look */}
            <div className="hidden sm:block absolute top-0 left-1/4 w-2 h-2 bg-indigo-300 rounded-full opacity-40 animate-float-slow"></div>
            <div className="hidden sm:block absolute bottom-0 right-1/3 w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-45 animate-float-reverse"></div>
            <div className="hidden sm:block absolute top-1 right-1/4 w-1 h-1 bg-amber-300 rounded-full opacity-50 animate-float"></div>

            {/* Animated border gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent opacity-60 animate-pulse"></div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-6px); }
                }
                
                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(6px); }
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(99,102,241,0.1); }
                    50% { box-shadow: 0 0 30px rgba(99,102,241,0.2); }
                }
                
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                
                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }
                
                .animate-float-reverse {
                    animation: float-reverse 5s ease-in-out infinite;
                }
                
                .animate-shimmer {
                    animation: shimmer 3s ease-in-out infinite;
                }
                
                .animate-glow {
                    animation: glow 4s ease-in-out infinite;
                }
                
                .nav-link {
                    position: relative;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                }
                
                .nav-link:hover {
                    color: #4f46e5;
                    transform: translateY(-1px);
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #4f46e5, #7c3aed);
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .logo-container {
                    position: relative;
                    overflow: hidden;
                }
                
                .logo-container::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
                    transform: rotate(45deg);
                    animation: shimmer 3s ease-in-out infinite;
                }
                
                .elegant-btn {
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .elegant-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.5s ease;
                }
                
                .elegant-btn:hover::before {
                    left: 100%;
                }
                
                .elegant-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                }
                
                .mobile-menu {
                    backdrop-filter: blur(10px);
                    background: rgba(255,255,255,0.95);
                    border: 1px solid rgba(148,163,184,0.2);
                    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
                }

                /* Mobile-specific styles */
                @media (max-width: 640px) {
                    .nav-link:hover {
                        transform: none;
                    }
                    
                    .elegant-btn:hover {
                        transform: none;
                    }
                }
            `}</style>

            <div className="relative flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <img
                        src='/images/codehouse.png'
                        alt="Codehouse Logo"
                        className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
                    />
                </div>

                {/* Desktop Navigation - Hidden on tablet and mobile */}
                <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
                    <button onClick={() => scrollToSection('features')} className="nav-link text-slate-600 font-medium text-sm xl:text-base">Features</button>
                    <button onClick={() => scrollToSection('collaboration')} className="nav-link text-slate-600 font-medium text-sm xl:text-base">Collaboration</button>
                    <button onClick={() => scrollToSection('syntax')} className="nav-link text-slate-600 font-medium text-sm xl:text-base">Syntax</button>
                    <button onClick={() => scrollToSection('share')} className="nav-link text-slate-600 font-medium text-sm xl:text-base">Share</button>
                    <button onClick={() => scrollToSection('faq')} className="nav-link text-slate-600 font-medium text-sm xl:text-base">FAQ</button>
                </div>

                {/* Desktop Buttons - Hidden on tablet and mobile */}
                <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
                    <Link to="/login"><button className="elegant-btn px-4 xl:px-6 py-2 xl:py-2.5 text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all duration-200 text-sm xl:text-base">
                        Join Room
                    </button></Link>
                    <Link to="/login"><button className="elegant-btn bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg font-medium shadow-lg shadow-indigo-500/25 text-sm xl:text-base">
                        Create Room
                    </button></Link>
                </div>

                {/* Tablet Navigation - Visible on tablet only */}
                <div className="hidden md:flex lg:hidden items-center space-x-6">
                    <button onClick={() => scrollToSection('features')} className="nav-link text-slate-600 font-medium text-sm">Features</button>
                    <button onClick={() => scrollToSection('collaboration')} className="nav-link text-slate-600 font-medium text-sm">Collaboration</button>
                    <button onClick={() => scrollToSection('syntax')} className="nav-link text-slate-600 font-medium text-sm">Syntax</button>
                    <button onClick={() => scrollToSection('share')} className="nav-link text-slate-600 font-medium text-sm">Share</button>
                    <button onClick={() => scrollToSection('faq')} className="nav-link text-slate-600 font-medium text-sm">FAQ</button>
                </div>

                {/* Tablet Buttons - Visible on tablet only */}
                <div className="hidden md:flex lg:hidden items-center space-x-2">
                    <Link to="/login"><button className="elegant-btn px-4 py-2 text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all duration-200 text-sm">
                        Join Room
                    </button></Link>
                    <Link to="/login"><button className="elegant-btn bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium shadow-lg shadow-indigo-500/25 text-sm">
                        Create Room
                    </button></Link>
                </div>

                {/* Mobile Menu Toggle - Visible on mobile only */}
                <button
                    className="md:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center transition-all duration-200 hover:scale-105"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ?
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" /> :
                        <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
                    }
                </button>
            </div>

            {/* Mobile Menu - Only visible on mobile */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-3 sm:mx-4 mobile-menu rounded-xl p-4 sm:p-6 z-50">
                    <div className="flex flex-col space-y-3 sm:space-y-4">
                        <button onClick={() => scrollToSection('features')} className="nav-link text-slate-600 font-medium py-2 text-left text-sm sm:text-base">Features</button>
                        <button onClick={() => scrollToSection('collaboration')} className="nav-link text-slate-600 font-medium py-2 text-left text-sm sm:text-base">Collaboration</button>
                        <button onClick={() => scrollToSection('syntax')} className="nav-link text-slate-600 font-medium py-2 text-left text-sm sm:text-base">Syntax</button>
                        <button onClick={() => scrollToSection('share')} className="nav-link text-slate-600 font-medium py-2 text-left text-sm sm:text-base">Share</button>
                        <button onClick={() => scrollToSection('faq')} className="nav-link text-slate-600 font-medium py-2 text-left text-sm sm:text-base">FAQ</button>

                        <div className="pt-3 sm:pt-4 border-t border-slate-200/60">
                            <div className="flex flex-col space-y-2 sm:space-y-3">
                                <Link to="/login"><button className="elegant-btn w-full py-2.5 sm:py-3 text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all duration-200 text-sm sm:text-base">
                                    Join Room
                                </button></Link>
                                <Link to="/login"><button className="elegant-btn w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-2.5 sm:py-3 rounded-lg font-medium shadow-lg shadow-indigo-500/25 text-sm sm:text-base">
                                    Create Room
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;