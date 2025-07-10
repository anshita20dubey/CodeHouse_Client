import React from 'react';
import { Code2, Users, Share2, Globe } from 'lucide-react';

const CodePreview = () => {
    return (
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
            {/* Elegant background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.12),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(120,119,198,0.12),transparent_50%)]"></div>

            {/* Floating geometric shapes - hidden on mobile for cleaner look */}
            <div className="hidden sm:block absolute top-20 right-20 w-32 h-32 border border-slate-400 rounded-full opacity-30 animate-pulse"></div>
            <div className="hidden sm:block absolute bottom-32 left-16 w-24 h-24 bg-indigo-200 rounded-lg rotate-12 opacity-40 animate-float"></div>
            <div className="hidden lg:block absolute top-1/3 left-8 w-16 h-16 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full opacity-45 animate-float-slow"></div>
            <div className="hidden lg:block absolute bottom-20 right-1/4 w-20 h-20 border-2 border-emerald-400 rounded-lg -rotate-6 opacity-35 animate-float-reverse"></div>
            <div className="hidden md:block absolute top-10 left-1/4 w-12 h-12 bg-amber-200 rounded-full opacity-35 animate-float-slow"></div>
            <div className="hidden lg:block absolute top-1/2 right-12 w-28 h-28 border border-indigo-300 rounded-lg rotate-45 opacity-25 animate-rotate-slow"></div>
            <div className="hidden md:block absolute bottom-10 left-1/3 w-18 h-18 bg-gradient-to-tr from-emerald-200 to-teal-200 rounded-lg rotate-12 opacity-35 animate-float"></div>
            <div className="hidden lg:block absolute top-2/3 left-20 w-10 h-10 border-2 border-purple-300 rounded-full opacity-30 animate-float-reverse"></div>
            <div className="hidden md:block absolute bottom-1/3 right-8 w-14 h-14 bg-slate-200 rounded-full opacity-30 animate-float-slow"></div>

            {/* Subtle dot grid */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            {/* Soft light rays - hidden on mobile */}
            <div className="hidden sm:block absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-indigo-400 to-transparent opacity-25 transform -translate-x-1/2 animate-sway"></div>
            <div className="hidden sm:block absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-emerald-400 to-transparent opacity-25 animate-sway-reverse"></div>
            <div className="hidden md:block absolute top-1/4 left-20 w-px h-20 bg-gradient-to-b from-purple-400 to-transparent opacity-20 transform rotate-12 animate-sway"></div>
            <div className="hidden md:block absolute bottom-1/4 right-16 w-px h-28 bg-gradient-to-t from-amber-400 to-transparent opacity-20 transform -rotate-12 animate-sway-reverse"></div>

            {/* Subtle corner accents */}
            <div className="absolute top-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-indigo-100 to-transparent opacity-30 rounded-br-full animate-breathe"></div>
            <div className="absolute bottom-0 right-0 w-40 sm:w-48 h-40 sm:h-48 bg-gradient-to-tl from-emerald-100 to-transparent opacity-30 rounded-tl-full animate-breathe-reverse"></div>

            {/* Elegant curved lines - hidden on mobile */}
            <svg className="hidden sm:block absolute top-0 left-0 w-full h-full opacity-25 animate-drift" viewBox="0 0 1000 1000" fill="none">
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

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.015]" style={{
                backgroundImage: 'radial-gradient(circle, #1e293b 1px, transparent 1px)',
                backgroundSize: '32px 32px'
            }}></div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                
                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(8px); }
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 30px rgba(99,102,241,0.1); }
                    50% { box-shadow: 0 0 50px rgba(99,102,241,0.2); }
                }
                
                @keyframes pulse-border {
                    0%, 100% { border-color: rgba(148,163,184,0.3); }
                    50% { border-color: rgba(99,102,241,0.4); }
                }
                
                @keyframes typing {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                
                @keyframes sway {
                    0%, 100% { transform: translateX(-50%) rotate(0deg); }
                    50% { transform: translateX(-50%) rotate(2deg); }
                }
                
                @keyframes sway-reverse {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(-2deg); }
                }
                
                @keyframes breathe {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                
                @keyframes breathe-reverse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(0.95); }
                }
                
                @keyframes drift {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(10px); }
                }
                
                @keyframes rotate-slow {
                    0% { transform: rotate(45deg); }
                    100% { transform: rotate(405deg); }
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
                
                .animate-pulse-border {
                    animation: pulse-border 3s ease-in-out infinite;
                }
                
                .animate-typing {
                    animation: typing 1.5s ease-in-out infinite;
                }
                
                .animate-sway {
                    animation: sway 4s ease-in-out infinite;
                }
                
                .animate-sway-reverse {
                    animation: sway-reverse 4s ease-in-out infinite;
                }
                
                .animate-breathe {
                    animation: breathe 6s ease-in-out infinite;
                }
                
                .animate-breathe-reverse {
                    animation: breathe-reverse 6s ease-in-out infinite;
                }
                
                .animate-drift {
                    animation: drift 8s ease-in-out infinite;
                }
                
                .animate-rotate-slow {
                    animation: rotate-slow 20s linear infinite;
                }
                
                .elegant-preview {
                    background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%);
                    border: 1px solid rgba(148,163,184,0.1);
                    box-shadow: 
                        0 25px 50px -12px rgba(0,0,0,0.4),
                        0 0 0 1px rgba(255,255,255,0.05),
                        inset 0 1px 0 rgba(255,255,255,0.1);
                }
                
                .window-controls {
                    background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
                    border-bottom: 1px solid rgba(255,255,255,0.06);
                }
                
                .address-bar {
                    background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
                    border: 1px solid rgba(255,255,255,0.1);
                    box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
                }
                
                .header-bar {
                    background: linear-gradient(135deg, #1e2936 0%, #0f1419 100%);
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                }
                
                .code-area {
                    background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
                }
                
                .syntax-keyword { color: #ff7b72; }
                .syntax-string { color: #a5d6ff; }
                .syntax-function { color: #d2a8ff; }
                .syntax-variable { color: #79c0ff; }
                .syntax-comment { color: #8b949e; }
                .syntax-bracket { color: #ffa657; }
                .syntax-number { color: #79c0ff; }
                
                .user-avatar {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .user-avatar:hover {
                    transform: scale(1.1);
                    box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
                }
                
                .share-btn {
                    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .share-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(79, 70, 229, 0.4);
                }
            `}</style>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-slate-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-slate-200/60">
                        <Code2 className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Live Code Editor
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-3 sm:mb-4">
                        Code together in
                        <span className="font-medium text-indigo-600"> real-time</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
                        Experience seamless collaboration with syntax highlighting, live cursors, and instant synchronization
                    </p>
                </div>

                {/* Code Preview Window */}
                <div className="elegant-preview rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden animate-glow">
                    {/* Browser Controls */}
                    <div className="window-controls px-3 sm:px-4 lg:px-6 py-3 sm:py-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="flex space-x-1.5 sm:space-x-2">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-sm"></div>
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-sm"></div>
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-sm"></div>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="address-bar text-slate-300 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-md lg:rounded-lg text-xs sm:text-sm flex items-center space-x-1 sm:space-x-2 max-w-xs sm:max-w-sm">
                                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                                <span className="truncate">codehouse.io/room/abc123</span>
                            </div>
                        </div>
                        <div className="w-8 sm:w-16"></div>
                    </div>

                    {/* Application Header */}
                    <div className="header-bar px-3 sm:px-4 lg:px-6 py-3 sm:py-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-white font-medium text-sm sm:text-base truncate">Technical Interview</h3>
                                <p className="text-slate-400 text-xs sm:text-sm truncate">React Component Challenge</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
                            <div className="hidden sm:flex items-center space-x-3">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-slate-400 text-xs sm:text-sm">2 online</span>
                                </div>
                                <div className="flex -space-x-2">
                                    <div className="user-avatar w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center border-2 border-slate-700">
                                        <span className="text-white text-xs font-medium">A</span>
                                    </div>
                                    <div className="user-avatar w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center border-2 border-slate-700">
                                        <span className="text-white text-xs font-medium">J</span>
                                    </div>
                                </div>
                            </div>
                            <button className="share-btn text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md lg:rounded-lg font-medium text-xs sm:text-sm flex items-center space-x-1 sm:space-x-2">
                                <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="hidden sm:inline">Share</span>
                            </button>
                        </div>
                    </div>

                    {/* Code Editor */}
                    <div className="code-area p-3 sm:p-4">
                        <div className="bg-slate-900/50 backdrop-blur-sm rounded-md lg:rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm border border-slate-700/50">
                            <div className="flex items-center justify-between mb-2 sm:mb-3">
                                <div className="flex items-center space-x-2 min-w-0">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400 rounded-full flex-shrink-0"></div>
                                    <span className="text-slate-400 text-xs sm:text-sm truncate">components/Counter.jsx</span>
                                </div>
                                <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
                                    <div className="hidden sm:flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                        <span className="text-slate-400 text-xs">Alice is typing...</span>
                                    </div>
                                    <div className="animate-typing">
                                        <div className="w-0.5 h-3 sm:h-4 bg-indigo-400"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-slate-300 leading-5 sm:leading-6 max-h-64 sm:max-h-80 lg:max-h-96 overflow-y-auto">
                                <div className="space-y-0.5">
                                    <div><span className="syntax-keyword">import</span> <span className="syntax-bracket">{'{'}</span> <span className="syntax-variable">useState</span> <span className="syntax-bracket">{'}'}</span> <span className="syntax-keyword">from</span> <span className="syntax-string">'react'</span><span className="syntax-bracket">;</span></div>
                                    <div className="h-2 sm:h-3"></div>
                                    <div><span className="syntax-keyword">export</span> <span className="syntax-keyword">default</span> <span className="syntax-keyword">function</span> <span className="syntax-function">MyApp</span><span className="syntax-bracket">()</span> <span className="syntax-bracket">{'{'}</span></div>
                                    <div className="ml-3 sm:ml-4"><span className="syntax-keyword">return</span> <span className="syntax-bracket">(</span></div>
                                    <div className="ml-6 sm:ml-8"><span className="syntax-bracket">&lt;</span><span className="syntax-variable">div</span><span className="syntax-bracket">&gt;</span></div>
                                    <div className="ml-9 sm:ml-12"><span className="syntax-bracket">&lt;</span><span className="syntax-variable">h1</span><span className="syntax-bracket">&gt;</span><span className="syntax-string">Counters that update separately</span><span className="syntax-bracket">&lt;/</span><span className="syntax-variable">h1</span><span className="syntax-bracket">&gt;</span></div>
                                    <div className="ml-9 sm:ml-12"><span className="syntax-bracket">&lt;</span><span className="syntax-function">MyButton</span> <span className="syntax-bracket">/&gt;</span></div>
                                    <div className="ml-6 sm:ml-8"><span className="syntax-bracket">&lt;/</span><span className="syntax-variable">div</span><span className="syntax-bracket">&gt;</span></div>
                                    <div className="ml-3 sm:ml-4"><span className="syntax-bracket">);</span></div>
                                    <div><span className="syntax-bracket">{'}'}</span></div>
                                    <div className="h-2 sm:h-3"></div>
                                    <div><span className="syntax-keyword">function</span> <span className="syntax-function">MyButton</span><span className="syntax-bracket">()</span> <span className="syntax-bracket">{'{'}</span></div>
                                    <div className="ml-3 sm:ml-4"><span className="syntax-keyword">const</span> <span className="syntax-bracket">[</span><span className="syntax-variable">count</span><span className="syntax-bracket">,</span> <span className="syntax-variable">setCount</span><span className="syntax-bracket">]</span> <span className="syntax-bracket">=</span> <span className="syntax-function">useState</span><span className="syntax-bracket">(</span><span className="syntax-number">0</span><span className="syntax-bracket">);</span></div>
                                    <div className="h-2 sm:h-3"></div>
                                    <div className="ml-3 sm:ml-4"><span className="syntax-keyword">function</span> <span className="syntax-function">handleClick</span><span className="syntax-bracket">()</span> <span className="syntax-bracket">{'{'}</span></div>
                                    <div className="ml-6 sm:ml-8"><span className="syntax-function">setCount</span><span className="syntax-bracket">(</span><span className="syntax-variable">count</span> <span className="syntax-bracket">+</span> <span className="syntax-number">1</span><span className="syntax-bracket">);</span></div>
                                    <div className="ml-3 sm:ml-4"><span className="syntax-bracket">{'}'}</span></div>
                                    <div className="h-2 sm:h-3"></div>
                                    <div className="ml-3 sm:ml-4"><span className="syntax-keyword">return</span> <span className="syntax-bracket">(</span></div>
                                    <div className="ml-6 sm:ml-8"><span className="syntax-bracket">&lt;</span><span className="syntax-variable">button</span> <span className="syntax-variable">onClick</span><span className="syntax-bracket">=</span><span className="syntax-bracket">{'{'}</span><span className="syntax-variable">handleClick</span><span className="syntax-bracket">{'}'}</span><span className="syntax-bracket">&gt;</span></div>
                                    <div className="ml-9 sm:ml-12"><span className="syntax-string">Clicked </span><span className="syntax-bracket">{'{'}</span><span className="syntax-variable">count</span><span className="syntax-bracket">{'}'}</span><span className="syntax-string"> times</span></div>
                                    <div className="ml-6 sm:ml-8"><span className="syntax-bracket">&lt;/</span><span className="syntax-variable">button</span><span className="syntax-bracket">&gt;</span></div>
                                    <div className="ml-3 sm:ml-4"><span className="syntax-bracket">);</span></div>
                                    <div><span className="syntax-bracket">{'}'}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature highlights */}
                <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                        </div>
                        <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">Live Collaboration</h4>
                        <p className="text-sm sm:text-base text-slate-600">See cursors and changes in real-time</p>
                    </div>
                    <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                        </div>
                        <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">Syntax Highlighting</h4>
                        <p className="text-sm sm:text-base text-slate-600">Beautiful code with intelligent highlighting</p>
                    </div>
                    <div className="text-center sm:col-span-2 lg:col-span-1">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                            <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                        </div>
                        <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">Instant Sharing</h4>
                        <p className="text-sm sm:text-base text-slate-600">Share your code with a single click</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodePreview;