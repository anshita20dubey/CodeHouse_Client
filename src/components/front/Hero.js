import React from 'react';
import { ArrowRight, Code2, Users, Zap } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative bg-white min-h-screen flex items-center overflow-hidden">
            {/* Elegant background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.12),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(120,119,198,0.12),transparent_50%)]"></div>
            
            {/* Floating geometric shapes - responsive positioning */}
            <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-slate-400 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute bottom-16 sm:bottom-32 left-4 sm:left-16 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 bg-indigo-200 rounded-lg rotate-12 opacity-60 animate-float"></div>
            <div className="absolute top-1/4 sm:top-1/3 left-2 sm:left-8 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full opacity-65 animate-float-slow"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-1/4 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 border-2 border-emerald-400 rounded-lg -rotate-6 opacity-55 animate-float-reverse"></div>
            <div className="absolute top-5 sm:top-10 left-1/4 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 bg-amber-200 rounded-full opacity-45 animate-float-slow"></div>
            <div className="absolute top-1/2 right-4 sm:right-12 w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 border border-indigo-300 rounded-lg rotate-45 opacity-40 animate-rotate-slow"></div>
            <div className="absolute bottom-5 sm:bottom-10 left-1/3 w-8 sm:w-12 md:w-18 h-8 sm:h-12 md:h-18 bg-gradient-to-tr from-emerald-200 to-teal-200 rounded-lg rotate-12 opacity-55 animate-float"></div>
            <div className="absolute top-2/3 left-8 sm:left-20 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 border-2 border-purple-300 rounded-full opacity-45 animate-float-reverse"></div>
            <div className="absolute bottom-1/3 right-2 sm:right-8 w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 bg-slate-200 rounded-full opacity-50 animate-float-slow"></div>
            
            {/* Subtle dot grid - responsive size */}
            <div className="absolute inset-0 opacity-35" style={{
                backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }} 
            data-responsive-dots="true"></div>
            
            {/* Soft light rays - fewer on mobile */}
            <div className="hidden sm:block absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-indigo-400 to-transparent opacity-35 transform -translate-x-1/2 animate-sway"></div>
            <div className="hidden sm:block absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-emerald-400 to-transparent opacity-35 animate-sway-reverse"></div>
            <div className="hidden md:block absolute top-1/4 left-20 w-px h-20 bg-gradient-to-b from-purple-400 to-transparent opacity-30 transform rotate-12 animate-sway"></div>
            <div className="hidden md:block absolute bottom-1/4 right-16 w-px h-28 bg-gradient-to-t from-amber-400 to-transparent opacity-30 transform -rotate-12 animate-sway-reverse"></div>
            
            {/* Subtle corner accents - responsive size */}
            <div className="absolute top-0 left-0 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 bg-gradient-to-br from-indigo-100 to-transparent opacity-50 rounded-br-full animate-breathe"></div>
            <div className="absolute bottom-0 right-0 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 bg-gradient-to-tl from-emerald-100 to-transparent opacity-50 rounded-tl-full animate-breathe-reverse"></div>
            
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                
                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(8px); }
                }
                
                @keyframes rotate-slow {
                    0% { transform: rotate(45deg); }
                    100% { transform: rotate(405deg); }
                }
                
                @keyframes drift {
                    0%, 100% { transform: translateX(0px); }
                    50% { transform: translateX(5px); }
                }
                
                @keyframes sway {
                    0%, 100% { transform: translateX(0px) rotate(0deg); }
                    50% { transform: translateX(3px) rotate(1deg); }
                }
                
                @keyframes sway-reverse {
                    0%, 100% { transform: translateX(0px) rotate(0deg); }
                    50% { transform: translateX(-3px) rotate(-1deg); }
                }
                
                @keyframes breathe {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.03); }
                }
                
                @keyframes breathe-reverse {
                    0%, 100% { transform: scale(1.03); }
                    50% { transform: scale(1); }
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
                
                .animate-rotate-slow {
                    animation: rotate-slow 20s linear infinite;
                }
                
                .animate-drift {
                    animation: drift 8s ease-in-out infinite;
                }
                
                .animate-sway {
                    animation: sway 3s ease-in-out infinite;
                }
                
                .animate-sway-reverse {
                    animation: sway-reverse 3.5s ease-in-out infinite;
                }
                
                .animate-breathe {
                    animation: breathe 4s ease-in-out infinite;
                }
                
                .animate-breathe-reverse {
                    animation: breathe-reverse 4.5s ease-in-out infinite;
                }
                
                /* Responsive dot grid */
                @media (min-width: 640px) {
                    [data-responsive-dots="true"] {
                        background-size: 30px 30px;
                    }
                }
                
                @media (min-width: 768px) {
                    [data-responsive-dots="true"] {
                        background-size: 40px 40px;
                    }
                }
                
                /* Reduced motion for mobile */
                @media (max-width: 640px) {
                    .animate-float {
                        animation: float 6s ease-in-out infinite;
                    }
                    
                    .animate-float-slow {
                        animation: float-slow 8s ease-in-out infinite;
                    }
                    
                    .animate-float-reverse {
                        animation: float-reverse 7s ease-in-out infinite;
                    }
                    
                    .animate-rotate-slow {
                        animation: rotate-slow 30s linear infinite;
                    }
                }
            `}</style>
            
            {/* Elegant curved lines - hidden on mobile for performance */}
            <svg className="hidden sm:block absolute top-0 left-0 w-full h-full opacity-30 md:opacity-45 animate-drift" viewBox="0 0 1000 1000" fill="none">
                <path d="M-100 200 Q 200 100 500 200 T 1100 200" stroke="url(#gradient1)" strokeWidth="1" fill="none" className="md:stroke-2" />
                <path d="M-100 600 Q 300 500 600 600 T 1200 600" stroke="url(#gradient2)" strokeWidth="1" fill="none" className="md:stroke-2" />
                <path d="M-50 800 Q 150 700 400 800 T 900 800" stroke="url(#gradient3)" strokeWidth="1" fill="none" className="md:stroke-2" />
                <path d="M200 50 Q 400 150 600 50 T 1000 50" stroke="url(#gradient4)" strokeWidth="1" fill="none" className="md:stroke-2" />
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(99,102,241,0.2)" />
                        <stop offset="50%" stopColor="rgba(99,102,241,0.5)" />
                        <stop offset="100%" stopColor="rgba(99,102,241,0.2)" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(16,185,129,0.2)" />
                        <stop offset="50%" stopColor="rgba(16,185,129,0.5)" />
                        <stop offset="100%" stopColor="rgba(16,185,129,0.2)" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(245,158,11,0.2)" />
                        <stop offset="50%" stopColor="rgba(245,158,11,0.5)" />
                        <stop offset="100%" stopColor="rgba(245,158,11,0.2)" />
                    </linearGradient>
                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(147,51,234,0.2)" />
                        <stop offset="50%" stopColor="rgba(147,51,234,0.5)" />
                        <stop offset="100%" stopColor="rgba(147,51,234,0.2)" />
                    </linearGradient>
                </defs>
            </svg>
            
            <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Simple badge */}
                    <div className="inline-flex items-center bg-slate-100 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-slate-600 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                        <Code2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                        <span className="whitespace-nowrap">Collaborative Code Editor</span>
                    </div>

                    {/* Main heading - responsive typography */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-slate-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                        <span className="block">Share code with</span>
                        <span className="block font-medium text-indigo-600">developers</span>
                    </h1>

                    {/* Subtitle - responsive text and spacing */}
                    <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
                        Codehouse is a collaborative online code editor designed for technical interviews, 
                        pair programming, and teaching. Simple, fast, and built for developers.
                    </p>

                    {/* CTA button - responsive sizing */}
                    <div className="mb-10 sm:mb-12 md:mb-16">
                        <button className="group inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 w-full sm:w-auto justify-center">
                            <span className="mr-2">Create New Room</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                    </div>

                    {/* Features - responsive grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
                        <div className="flex flex-col items-center p-4 sm:p-6">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Real-time Sync</h3>
                            <p className="text-sm sm:text-base text-slate-600 text-center">Code together with instant synchronization and live cursors</p>
                        </div>
                        
                        <div className="flex flex-col items-center p-4 sm:p-6">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Team Friendly</h3>
                            <p className="text-sm sm:text-base text-slate-600 text-center">Perfect for interviews, pair programming, and code reviews</p>
                        </div>
                        
                        <div className="flex flex-col items-center p-4 sm:p-6 sm:col-span-2 md:col-span-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Lightning Fast</h3>
                            <p className="text-sm sm:text-base text-slate-600 text-center">Optimized for speed with minimal latency and smooth experience</p>
                        </div>
                    </div>

                    {/* Bottom note - responsive text */}
                    <p className="text-slate-500 text-xs sm:text-sm px-4 sm:px-0">
                        No sign up required • Free forever • Built with ❤️
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;