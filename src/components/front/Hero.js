import React from 'react';
import { ArrowRight, Code2, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative bg-white min-h-screen flex items-center overflow-hidden">
            {/* Elegant background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.12),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(120,119,198,0.12),transparent_50%)]"></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-20 right-20 w-32 h-32 border border-slate-400 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute bottom-32 left-16 w-24 h-24 bg-indigo-200 rounded-lg rotate-12 opacity-60 animate-float"></div>
            <div className="absolute top-1/3 left-8 w-16 h-16 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full opacity-65 animate-float-slow"></div>
            <div className="absolute bottom-20 right-1/4 w-20 h-20 border-2 border-emerald-400 rounded-lg -rotate-6 opacity-55 animate-float-reverse"></div>
            <div className="absolute top-10 left-1/4 w-12 h-12 bg-amber-200 rounded-full opacity-45 animate-float-slow"></div>
            <div className="absolute top-1/2 right-12 w-28 h-28 border border-indigo-300 rounded-lg rotate-45 opacity-40 animate-rotate-slow"></div>
            <div className="absolute bottom-10 left-1/3 w-18 h-18 bg-gradient-to-tr from-emerald-200 to-teal-200 rounded-lg rotate-12 opacity-55 animate-float"></div>
            <div className="absolute top-2/3 left-20 w-10 h-10 border-2 border-purple-300 rounded-full opacity-45 animate-float-reverse"></div>
            <div className="absolute bottom-1/3 right-8 w-14 h-14 bg-slate-200 rounded-full opacity-50 animate-float-slow"></div>
            
            {/* Subtle dot grid */}
            <div className="absolute inset-0 opacity-35" style={{
                backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>
            
            {/* Soft light rays */}
            <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-indigo-400 to-transparent opacity-35 transform -translate-x-1/2 animate-sway"></div>
            <div className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-emerald-400 to-transparent opacity-35 animate-sway-reverse"></div>
            <div className="absolute top-1/4 left-20 w-px h-20 bg-gradient-to-b from-purple-400 to-transparent opacity-30 transform rotate-12 animate-sway"></div>
            <div className="absolute bottom-1/4 right-16 w-px h-28 bg-gradient-to-t from-amber-400 to-transparent opacity-30 transform -rotate-12 animate-sway-reverse"></div>
            
            {/* Subtle corner accents */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-100 to-transparent opacity-50 rounded-br-full animate-breathe"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-emerald-100 to-transparent opacity-50 rounded-tl-full animate-breathe-reverse"></div>
            
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(10px); }
                }
                
                @keyframes rotate-slow {
                    0% { transform: rotate(45deg); }
                    100% { transform: rotate(405deg); }
                }
                
                @keyframes drift {
                    0%, 100% { transform: translateX(0px); }
                    50% { transform: translateX(10px); }
                }
                
                @keyframes sway {
                    0%, 100% { transform: translateX(0px) rotate(0deg); }
                    50% { transform: translateX(5px) rotate(2deg); }
                }
                
                @keyframes sway-reverse {
                    0%, 100% { transform: translateX(0px) rotate(0deg); }
                    50% { transform: translateX(-5px) rotate(-2deg); }
                }
                
                @keyframes breathe {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                
                @keyframes breathe-reverse {
                    0%, 100% { transform: scale(1.05); }
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
            `}</style>
            
            {/* Elegant curved lines */}
            <svg className="absolute top-0 left-0 w-full h-full opacity-45 animate-drift" viewBox="0 0 1000 1000" fill="none">
                <path d="M-100 200 Q 200 100 500 200 T 1100 200" stroke="url(#gradient1)" strokeWidth="1.5" fill="none" />
                <path d="M-100 600 Q 300 500 600 600 T 1200 600" stroke="url(#gradient2)" strokeWidth="1.5" fill="none" />
                <path d="M-50 800 Q 150 700 400 800 T 900 800" stroke="url(#gradient3)" strokeWidth="1.5" fill="none" />
                <path d="M200 50 Q 400 150 600 50 T 1000 50" stroke="url(#gradient4)" strokeWidth="1.5" fill="none" />
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
            
            <div className="relative max-w-6xl mx-auto px-6 py-20">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Simple badge */}
                    <div className="inline-flex items-center bg-slate-100 rounded-full px-4 py-2 text-slate-600 text-sm font-medium mb-8">
                        <Code2 className="w-4 h-4 mr-2" />
                        Collaborative Code Editor
                    </div>

                    {/* Main heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 tracking-tight">
                        Share code with
                        <span className="block font-medium text-indigo-600">developers</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                        Codehouse is a collaborative online code editor designed for technical interviews, 
                        pair programming, and teaching. Simple, fast, and built for developers.
                    </p>

                    {/* CTA button */}
                    <div className="mb-16">
                        <Link to="/login"><button className="group inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25">
                            <span className="mr-2">Create New Room</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </button></Link>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                        <div className="flex flex-col items-center p-6">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <Code2 className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Real-time Sync</h3>
                            <p className="text-slate-600 text-center">Code together with instant synchronization and live cursors</p>
                        </div>
                        
                        <div className="flex flex-col items-center p-6">
                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Team Friendly</h3>
                            <p className="text-slate-600 text-center">Perfect for interviews, pair programming, and code reviews</p>
                        </div>
                        
                        <div className="flex flex-col items-center p-6">
                            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6 text-amber-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Lightning Fast</h3>
                            <p className="text-slate-600 text-center">Optimized for speed with minimal latency and smooth experience</p>
                        </div>
                    </div>

                    {/* Bottom note */}
                    <p className="text-slate-500 text-sm">
                        No sign up required • Free forever • Built with ❤️
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;