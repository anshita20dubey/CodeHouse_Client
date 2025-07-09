import React, { useState } from 'react';
import { Link, Copy, Check, Lock, Users, Code2, Eye } from 'lucide-react';

const ShareLink = () => {
    const [isProtected, setIsProtected] = useState(false);
    const [copied, setCopied] = useState(false);
    const [linkUrl] = useState("https://codehouse.io/fv31gmQ0zi");
    
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(linkUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <>
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
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(99,102,241,0.08); }
                    50% { box-shadow: 0 0 30px rgba(99,102,241,0.12); }
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
                
                .animate-shimmer {
                    animation: shimmer 3s ease-in-out infinite;
                }
                
                .animate-glow {
                    animation: glow 3s ease-in-out infinite;
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
                
                .share-input {
                    background: rgba(15, 20, 25, 0.8);
                    border: 1px solid rgba(148, 163, 184, 0.2);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .share-input:focus {
                    background: rgba(15, 20, 25, 0.9);
                    border-color: rgba(99, 102, 241, 0.5);
                    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
                }
                
                .copy-button {
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .copy-button:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
                }
                
                .copy-button.copied {
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                }
            `}</style>
            
            <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 overflow-hidden">
                {/* Elegant background elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.05),transparent_50%),radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.04),transparent_50%)]"></div>
                
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
                
                {/* Additional floating elements for variety */}
                <div className="absolute top-16 left-16 w-2 h-2 bg-indigo-300 rounded-full opacity-40 animate-float"></div>
                <div className="absolute bottom-20 right-20 w-3 h-3 bg-emerald-300 rounded-full opacity-45 animate-float-slow"></div>
                <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-50 animate-float-reverse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-amber-300 rounded-full opacity-40 animate-float"></div>
                
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
                
                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left Content */}
                        <div className="lg:w-1/2 space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-slate-600 text-sm font-medium border border-slate-200/60">
                                    <Link className="w-4 h-4 mr-2" />
                                    Seamless Sharing
                                </div>
                                
                                <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
                                    Share the link to 
                                    <span className="font-medium text-indigo-600 block">invite collaboration</span>
                                </h2>
                                
                                <p className="text-xl text-slate-600 leading-relaxed">
                                    Share your code with colleagues instantly. Enable real-time collaboration with live cursors, version control, and seamless synchronization across all devices.
                                </p>
                            </div>
                            
                            {/* Feature Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="feature-card rounded-2xl p-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                                        <Eye className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Live Cursors</h4>
                                    <p className="text-slate-600">See exactly where teammates are editing</p>
                                </div>
                                
                                <div className="feature-card rounded-2xl p-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Team Sync</h4>
                                    <p className="text-slate-600">Real-time updates across all devices</p>
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
                                            <h4 className="text-white font-medium text-sm">MyApp.jsx</h4>
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
                                    <div className="font-mono text-sm text-slate-300 leading-6 space-y-0.5">
                                        <div><span className="syntax-keyword">import</span> <span className="syntax-variable">React</span> <span className="syntax-keyword">from</span> <span className="syntax-string">'react'</span><span className="syntax-bracket">;</span></div>
                                        <div className="h-3"></div>
                                        <div><span className="syntax-keyword">function</span> <span className="syntax-function">MyApp</span><span className="syntax-bracket">()</span> <span className="syntax-bracket">{'{'}</span></div>
                                        <div className="ml-4"><span className="syntax-keyword">return</span> <span className="syntax-bracket">(</span></div>
                                        <div className="ml-8"><span className="syntax-bracket">&lt;</span><span className="syntax-variable">div</span><span className="syntax-bracket">&gt;</span></div>
                                        <div className="ml-12"><span className="syntax-comment">{`{/* Your amazing app goes here */}`}</span></div>
                                        <div className="ml-8"><span className="syntax-bracket">&lt;/</span><span className="syntax-variable">div</span><span className="syntax-bracket">&gt;</span></div>
                                        <div className="ml-4"><span className="syntax-bracket">);</span></div>
                                        <div><span className="syntax-bracket">{'}'}</span></div>
                                    </div>
                                </div>
                                
                                {/* Protection Toggle */}
                                <div className="code-header px-6 py-4 border-t border-slate-600/30">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isProtected ? 'bg-indigo-600' : 'bg-slate-600'}`}>
                                                <button
                                                    onClick={() => setIsProtected(!isProtected)}
                                                    className={`inline-flex h-4 w-4 transform items-center justify-center rounded-full bg-white transition-transform ${isProtected ? 'translate-x-6' : 'translate-x-1'}`}
                                                >
                                                    <span className="sr-only">Toggle protection</span>
                                                </button>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Lock className="w-4 h-4 text-slate-400" />
                                                <span className={`text-sm font-medium ${isProtected ? 'text-indigo-400' : 'text-slate-400'}`}>
                                                    {isProtected ? 'Protected' : 'Unprotected'}
                                                </span>
                                            </div>
                                        </div>
                                        <span className="text-xs text-slate-500">
                                            {isProtected ? 'Read-only access' : 'Full edit access'}
                                        </span>
                                    </div>
                                    
                                    {/* Share Link Section */}
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-2">
                                            <Link className="w-4 h-4 text-indigo-400" />
                                            <span className="text-sm font-medium text-slate-300">Share with your team:</span>
                                        </div>
                                        
                                        <div className="flex space-x-3">
                                            <div className="flex-1 relative">
                                                <input 
                                                    type="text" 
                                                    value={linkUrl} 
                                                    readOnly 
                                                    className="share-input w-full px-4 py-3 text-slate-300 rounded-xl font-mono text-sm focus:outline-none transition-all duration-300"
                                                />
                                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-gentle"></div>
                                                </div>
                                            </div>
                                            
                                            <button 
                                                onClick={handleCopy}
                                                className={`copy-button px-6 py-3 rounded-xl font-medium text-white flex items-center space-x-2 ${copied ? 'copied' : ''}`}
                                            >
                                                {copied ? (
                                                    <>
                                                        <Check className="w-4 h-4" />
                                                        <span>Copied!</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy className="w-4 h-4" />
                                                        <span>Copy</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Collaboration Status */}
                                <div className="code-header px-6 py-3 border-t border-slate-600/30">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex -space-x-2">
                                                <div className="user-indicator w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center border-2 border-slate-700">
                                                    <span className="text-white text-xs font-medium">A</span>
                                                </div>
                                                <div className="user-indicator w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center border-2 border-slate-700">
                                                    <span className="text-white text-xs font-medium">S</span>
                                                </div>
                                                <div className="user-indicator w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center border-2 border-slate-700">
                                                    <span className="text-white text-xs font-medium">M</span>
                                                </div>
                                            </div>
                                            <span className="text-xs text-slate-400">3 developers online</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-xs text-slate-400">
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-gentle"></div>
                                            <span>Auto-saved</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShareLink;