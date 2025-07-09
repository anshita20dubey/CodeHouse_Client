import React from 'react';
import { Code2, Users, Zap, Eye } from 'lucide-react';

const RealTimeCollaboration = () => {
    return (
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 overflow-hidden">
            {/* Elegant background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.05),transparent_50%),radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.04),transparent_50%)]"></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-20 right-20 w-32 h-32 border border-slate-400 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-32 left-16 w-24 h-24 bg-indigo-200 rounded-lg rotate-12 opacity-40 animate-float"></div>
            <div className="absolute top-1/3 left-8 w-16 h-16 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full opacity-45 animate-float-slow"></div>
            <div className="absolute bottom-20 right-1/4 w-20 h-20 border-2 border-emerald-400 rounded-lg -rotate-6 opacity-35 animate-float-reverse"></div>
            <div className="absolute top-10 left-1/4 w-12 h-12 bg-amber-200 rounded-full opacity-35 animate-float-slow"></div>
            <div className="absolute top-1/2 right-12 w-28 h-28 border border-indigo-300 rounded-lg rotate-45 opacity-25 animate-rotate-slow"></div>
            <div className="absolute bottom-10 left-1/3 w-18 h-18 bg-gradient-to-tr from-emerald-200 to-teal-200 rounded-lg rotate-12 opacity-35 animate-float"></div>
            <div className="absolute top-2/3 left-20 w-10 h-10 border-2 border-purple-300 rounded-full opacity-30 animate-float-reverse"></div>
            <div className="absolute bottom-1/3 right-8 w-14 h-14 bg-slate-200 rounded-full opacity-30 animate-float-slow"></div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-16 left-16 w-2 h-2 bg-indigo-300 rounded-full opacity-40 animate-float"></div>
            <div className="absolute bottom-20 right-20 w-3 h-3 bg-emerald-300 rounded-full opacity-45 animate-float-slow"></div>
            <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-50 animate-float-reverse"></div>
            <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-amber-300 rounded-full opacity-40 animate-float"></div>

            {/* Subtle dot grid */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            {/* Soft light rays */}
            <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-indigo-400 to-transparent opacity-25 transform -translate-x-1/2 animate-sway"></div>
            <div className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-emerald-400 to-transparent opacity-25 animate-sway-reverse"></div>
            <div className="absolute top-1/4 left-20 w-px h-20 bg-gradient-to-b from-purple-400 to-transparent opacity-20 transform rotate-12 animate-sway"></div>
            <div className="absolute bottom-1/4 right-16 w-px h-28 bg-gradient-to-t from-amber-400 to-transparent opacity-20 transform -rotate-12 animate-sway-reverse"></div>

            {/* Subtle corner accents */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-100 to-transparent opacity-30 rounded-br-full animate-breathe"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-emerald-100 to-transparent opacity-30 rounded-tl-full animate-breathe-reverse"></div>

            {/* Elegant curved lines */}
            <svg className="absolute top-0 left-0 w-full h-full opacity-25 animate-drift" viewBox="0 0 1000 1000" fill="none">
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
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: 'radial-gradient(circle, #1e293b 1px, transparent 1px)',
                backgroundSize: '24px 24px'
            }}></div>
            
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-6px); }
                }
                
                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(6px); }
                }
                
                @keyframes rotate-slow {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @keyframes sway {
                    0%, 100% { transform: translateX(0px); }
                    50% { transform: translateX(4px); }
                }
                
                @keyframes sway-reverse {
                    0%, 100% { transform: translateX(0px); }
                    50% { transform: translateX(-4px); }
                }
                
                @keyframes breathe {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.2; }
                }
                
                @keyframes breathe-reverse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.4; }
                }
                
                @keyframes drift {
                    0%, 100% { transform: translateX(0px) translateY(0px); }
                    25% { transform: translateX(2px) translateY(-1px); }
                    50% { transform: translateX(0px) translateY(-2px); }
                    75% { transform: translateX(-1px) translateY(-1px); }
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(99,102,241,0.08); }
                    50% { box-shadow: 0 0 30px rgba(99,102,241,0.12); }
                }
                
                @keyframes typing {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                
                @keyframes pulse-gentle {
                    0%, 100% { opacity: 0.6; }
                    50% { opacity: 1; }
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
                
                .animate-sway {
                    animation: sway 4s ease-in-out infinite;
                }
                
                .animate-sway-reverse {
                    animation: sway-reverse 3s ease-in-out infinite;
                }
                
                .animate-breathe {
                    animation: breathe 4s ease-in-out infinite;
                }
                
                .animate-breathe-reverse {
                    animation: breathe-reverse 5s ease-in-out infinite;
                }
                
                .animate-drift {
                    animation: drift 8s ease-in-out infinite;
                }
                
                .animate-shimmer {
                    animation: shimmer 3s ease-in-out infinite;
                }
                
                .animate-glow {
                    animation: glow 3s ease-in-out infinite;
                }
                
                .animate-typing {
                    animation: typing 1.5s ease-in-out infinite;
                }
                
                .animate-pulse-gentle {
                    animation: pulse-gentle 2s ease-in-out infinite;
                }
                
                .code-editor {
                    background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%);
                    border: 1px solid rgba(148,163,184,0.1);
                    box-shadow: 
                        0 20px 40px -12px rgba(0,0,0,0.25),
                        0 0 0 1px rgba(255,255,255,0.05),
                        inset 0 1px 0 rgba(255,255,255,0.1);
                }
                
                .code-header {
                    background: linear-gradient(135deg, #1e2936 0%, #0f1419 100%);
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                }
                
                .code-content {
                    background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
                }
                
                .syntax-keyword { color: #ff7b72; }
                .syntax-string { color: #a5d6ff; }
                .syntax-function { color: #d2a8ff; }
                .syntax-variable { color: #79c0ff; }
                .syntax-comment { color: #8b949e; }
                .syntax-bracket { color: #ffa657; }
                .syntax-number { color: #79c0ff; }
                
                .user-indicator {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .user-indicator:hover {
                    transform: scale(1.1);
                    box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
                }
                
                .feature-card {
                    backdrop-filter: blur(20px);
                    background: rgba(255, 255, 255, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .feature-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                    background: rgba(255, 255, 255, 0.8);
                }
            `}</style>
            
            <div className="relative max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-slate-600 text-sm font-medium border border-slate-200/60">
                                <Users className="w-4 h-4 mr-2" />
                                Real-time Collaboration
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
                                Code together in 
                                <span className="font-medium text-indigo-600 block">perfect harmony</span>
                            </h2>
                            
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Experience seamless collaboration with live cursors, instant synchronization, and real-time updates. See exactly what your teammates are typing as they type it.
                            </p>
                        </div>
                        
                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="feature-card rounded-2xl p-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                                    <Eye className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold text-slate-900 mb-2">Live Cursors</h4>
                                <p className="text-slate-600">See where everyone is editing in real-time</p>
                            </div>
                            
                            <div className="feature-card rounded-2xl p-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold text-slate-900 mb-2">Instant Sync</h4>
                                <p className="text-slate-600">Changes appear instantly across all devices</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Code Editor */}
                    <div className="lg:w-1/2">
                        <div className="code-editor rounded-2xl overflow-hidden animate-glow">
                            {/* Code Header */}
                            <div className="code-header px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                        <Code2 className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium text-sm">Counter.jsx</h4>
                                        <p className="text-slate-400 text-xs">React Component</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-gentle"></div>
                                        <span className="text-slate-400 text-xs">3 online</span>
                                    </div>
                                    <div className="flex -space-x-2">
                                        <div className="user-indicator w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center border-2 border-slate-700">
                                            <span className="text-white text-xs font-medium">A</span>
                                        </div>
                                        <div className="user-indicator w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center border-2 border-slate-700">
                                            <span className="text-white text-xs font-medium">S</span>
                                        </div>
                                        <div className="user-indicator w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center border-2 border-slate-700">
                                            <span className="text-white text-xs font-medium">M</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Code Content */}
                            <div className="code-content p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-gentle"></div>
                                        <span className="text-slate-400 text-xs">Alex is typing...</span>
                                    </div>
                                    <div className="animate-typing">
                                        <div className="w-0.5 h-4 bg-indigo-400 rounded-full"></div>
                                    </div>
                                </div>
                                
                                <div className="font-mono text-sm text-slate-300 leading-6 space-y-0.5">
                                    <div><span className="syntax-keyword">import</span> <span className="syntax-bracket">{'{'}</span> <span className="syntax-variable">useState</span> <span className="syntax-bracket">{'}'}</span> <span className="syntax-keyword">from</span> <span className="syntax-string">'react'</span><span className="syntax-bracket">;</span></div>
                                    <div className="h-3"></div>
                                    <div><span className="syntax-keyword">export</span> <span className="syntax-keyword">default</span> <span className="syntax-keyword">function</span> <span className="syntax-function">MyApp</span><span className="syntax-bracket">()</span> <span className="syntax-bracket">{'{'}</span></div>
                                    <div className="ml-4"><span className="syntax-keyword">return</span> <span className="syntax-bracket">(</span></div>
                                    <div className="ml-8"><span className="syntax-bracket">&lt;</span><span className="syntax-variable">div</span><span className="syntax-bracket">&gt;</span></div>
                                    <div className="ml-12"><span className="syntax-bracket">&lt;</span><span className="syntax-variable">h1</span><span className="syntax-bracket">&gt;</span><span className="syntax-string">Counters that update separately</span><span className="syntax-bracket">&lt;/</span><span className="syntax-variable">h1</span><span className="syntax-bracket">&gt;</span></div>
                                    <div className="ml-12"><span className="syntax-bracket">&lt;</span><span className="syntax-function">MyButton</span> <span className="syntax-bracket">/&gt;</span></div>
                                    <div className="ml-8"><span className="syntax-bracket">&lt;/</span><span className="syntax-variable">div</span><span className="syntax-bracket">&gt;</span></div>
                                    <div className="ml-4"><span className="syntax-bracket">);</span></div>
                                    <div><span className="syntax-bracket">{'}'}</span></div>
                                    <div className="h-3"></div>
                                    <div><span className="syntax-keyword">function</span> <span className="syntax-function">MyButton</span><span className="syntax-bracket">()</span> <span className="syntax-bracket">{'{'}</span></div>
                                    <div className="ml-4"><span className="syntax-keyword">const</span> <span className="syntax-bracket">[</span><span className="syntax-variable">count</span><span className="syntax-bracket">,</span> <span className="syntax-variable">setCount</span><span className="syntax-bracket">]</span> <span className="syntax-bracket">=</span> <span className="syntax-function">useState</span><span className="syntax-bracket">(</span><span className="syntax-number">0</span><span className="syntax-bracket">);</span></div>
                                    <div className="h-3"></div>
                                    <div className="ml-4"><span className="syntax-keyword">function</span> <span className="syntax-function">handleClick</span><span className="syntax-bracket">()</span> <span className="syntax-bracket">{'{'}</span></div>
                                    <div className="ml-8"><span className="syntax-function">setCount</span><span className="syntax-bracket">(</span><span className="syntax-variable">count</span> <span className="syntax-bracket">+</span> <span className="syntax-number">1</span><span className="syntax-bracket">);</span></div>
                                    <div className="ml-4"><span className="syntax-bracket">{'}'}</span></div>
                                    <div className="h-3"></div>
                                    <div className="ml-4"><span className="syntax-keyword">return</span> <span className="syntax-bracket">(</span></div>
                                    <div className="ml-8"><span className="syntax-bracket">&lt;</span><span className="syntax-variable">button</span> <span className="syntax-variable">onClick</span><span className="syntax-bracket">=</span><span className="syntax-bracket">{'{'}</span><span className="syntax-variable">handleClick</span><span className="syntax-bracket">{'}'}</span><span className="syntax-bracket">&gt;</span></div>
                                    <div className="ml-12"><span className="syntax-string">Clicked </span><span className="syntax-bracket">{'{'}</span><span className="syntax-variable">count</span><span className="syntax-bracket">{'}'}</span><span className="syntax-string"> times</span></div>
                                    <div className="ml-8"><span className="syntax-bracket">&lt;/</span><span className="syntax-variable">button</span><span className="syntax-bracket">&gt;</span></div>
                                    <div className="ml-4"><span className="syntax-bracket">);</span></div>
                                    <div><span className="syntax-bracket">{'}'}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RealTimeCollaboration;