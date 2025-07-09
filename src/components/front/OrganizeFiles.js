import React from 'react';
import { FolderOpen, Code2, Clock, Search, Filter, MoreVertical, File, GitBranch, Command } from 'lucide-react';

const OrganizeFiles = () => {
    return (
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50/20 overflow-hidden">
            {/* Elegant background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.04),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.03),transparent_50%)]"></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-20 right-20 w-32 h-32 border border-purple-400 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-32 left-16 w-24 h-24 bg-purple-200 rounded-lg rotate-12 opacity-40 animate-float"></div>
            <div className="absolute top-1/3 left-8 w-16 h-16 bg-gradient-to-br from-purple-300 to-indigo-300 rounded-full opacity-45 animate-float-slow"></div>
            <div className="absolute bottom-20 right-1/4 w-20 h-20 border-2 border-emerald-400 rounded-lg -rotate-6 opacity-35 animate-float-reverse"></div>
            <div className="absolute top-10 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-35 animate-float-slow"></div>
            <div className="absolute top-1/2 right-12 w-28 h-28 border border-purple-300 rounded-lg rotate-45 opacity-25 animate-rotate-slow"></div>
            <div className="absolute bottom-10 left-1/3 w-18 h-18 bg-gradient-to-tr from-emerald-200 to-teal-200 rounded-lg rotate-12 opacity-35 animate-float"></div>
            <div className="absolute top-2/3 left-20 w-10 h-10 border-2 border-indigo-300 rounded-full opacity-30 animate-float-reverse"></div>
            <div className="absolute bottom-1/3 right-8 w-14 h-14 bg-slate-200 rounded-full opacity-30 animate-float-slow"></div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-purple-300 rounded-full opacity-40 animate-float"></div>
            <div className="absolute bottom-16 right-16 w-3 h-3 bg-emerald-300 rounded-full opacity-45 animate-float-slow"></div>
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-50 animate-float-reverse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-2.5 h-2.5 bg-pink-300 rounded-full opacity-40 animate-float"></div>
            <div className="absolute top-16 left-16 w-2 h-2 bg-purple-300 rounded-full opacity-40 animate-float"></div>
            <div className="absolute bottom-20 right-20 w-3 h-3 bg-emerald-300 rounded-full opacity-45 animate-float-slow"></div>
            <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-50 animate-float-reverse"></div>
            <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-pink-300 rounded-full opacity-40 animate-float"></div>

            {/* Subtle dot grid */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            {/* Soft light rays */}
            <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-purple-400 to-transparent opacity-25 transform -translate-x-1/2 animate-sway"></div>
            <div className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-emerald-400 to-transparent opacity-25 animate-sway-reverse"></div>
            <div className="absolute top-1/4 left-20 w-px h-20 bg-gradient-to-b from-indigo-400 to-transparent opacity-20 transform rotate-12 animate-sway"></div>
            <div className="absolute bottom-1/4 right-16 w-px h-28 bg-gradient-to-t from-pink-400 to-transparent opacity-20 transform -rotate-12 animate-sway-reverse"></div>

            {/* Subtle corner accents */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-transparent opacity-30 rounded-br-full animate-breathe"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-emerald-100 to-transparent opacity-30 rounded-tl-full animate-breathe-reverse"></div>

            {/* Elegant curved lines */}
            <svg className="absolute top-0 left-0 w-full h-full opacity-25 animate-drift" viewBox="0 0 1000 1000" fill="none">
                <path d="M-100 200 Q 200 100 500 200 T 1100 200" stroke="url(#gradient1)" strokeWidth="1.5" fill="none" />
                <path d="M-100 600 Q 300 500 600 600 T 1200 600" stroke="url(#gradient2)" strokeWidth="1.5" fill="none" />
                <path d="M-50 800 Q 150 700 400 800 T 900 800" stroke="url(#gradient3)" strokeWidth="1.5" fill="none" />
                <path d="M200 50 Q 400 150 600 50 T 1000 50" stroke="url(#gradient4)" strokeWidth="1.5" fill="none" />
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(139,92,246,0.2)" />
                        <stop offset="50%" stopColor="rgba(139,92,246,0.5)" />
                        <stop offset="100%" stopColor="rgba(139,92,246,0.2)" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(16,185,129,0.2)" />
                        <stop offset="50%" stopColor="rgba(16,185,129,0.5)" />
                        <stop offset="100%" stopColor="rgba(16,185,129,0.2)" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(236,72,153,0.2)" />
                        <stop offset="50%" stopColor="rgba(236,72,153,0.5)" />
                        <stop offset="100%" stopColor="rgba(236,72,153,0.2)" />
                    </linearGradient>
                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(99,102,241,0.2)" />
                        <stop offset="50%" stopColor="rgba(99,102,241,0.5)" />
                        <stop offset="100%" stopColor="rgba(99,102,241,0.2)" />
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
                    0%, 100% { box-shadow: 0 0 20px rgba(139,92,246,0.06); }
                    50% { box-shadow: 0 0 30px rgba(139,92,246,0.1); }
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
                    animation: shimmer 2s ease-in-out infinite;
                }
                
                .animate-glow {
                    animation: glow 4s ease-in-out infinite;
                }
                
                .animate-pulse-gentle {
                    animation: pulse-gentle 3s ease-in-out infinite;
                }
                
                .dashboard-container {
                    backdrop-filter: blur(20px);
                    background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%);
                    border: 1px solid rgba(255,255,255,0.3);
                    box-shadow: 
                        0 20px 40px -12px rgba(0,0,0,0.08),
                        0 0 0 1px rgba(255,255,255,0.1),
                        inset 0 1px 0 rgba(255,255,255,0.2);
                }
                
                .file-row {
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                    border-radius: 12px;
                }
                
                .file-row:hover {
                    background: rgba(139,92,246,0.04);
                    transform: translateX(4px);
                    box-shadow: 0 4px 12px rgba(139,92,246,0.1);
                }
                
                .language-badge {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .language-badge:hover {
                    transform: scale(1.05);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
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
                
                .shimmer-effect {
                    position: relative;
                    overflow: hidden;
                }
                
                .shimmer-effect::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                    transform: translateX(-100%);
                    animation: shimmer 3s ease-in-out infinite;
                }
            `}</style>
            
            <div className="relative max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-slate-600 text-sm font-medium border border-slate-200/60">
                                <FolderOpen className="w-4 h-4 mr-2" />
                                File Management
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
                                Organize your files
                                <span className="font-medium text-purple-600 block">with ease</span>
                            </h2>
                            
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Access your dashboard to organize and keep track of your files with intelligent categorization, quick search, and seamless collaboration features.
                            </p>
                        </div>
                        
                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="feature-card rounded-2xl p-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                                    <Search className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold text-slate-900 mb-2">Smart Search</h4>
                                <p className="text-slate-600">Find files instantly with intelligent search</p>
                            </div>
                            
                            <div className="feature-card rounded-2xl p-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                                    <Filter className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold text-slate-900 mb-2">Auto-Organize</h4>
                                <p className="text-slate-600">Automatically categorize by language and type</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Dashboard */}
                    <div className="lg:w-1/2">
                        <div className="dashboard-container rounded-2xl overflow-hidden animate-glow">
                            {/* Dashboard Header */}
                            <div className="px-6 py-5 border-b border-slate-200/60">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                                            <FolderOpen className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-slate-900 font-semibold">My Files</h3>
                                            <p className="text-slate-500 text-sm">4 files organized</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-gentle"></div>
                                        <span className="text-slate-500 text-sm">Auto-sync enabled</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Files Table */}
                            <div className="p-6">
                                <div className="space-y-4">
                                    {/* Table Header */}
                                    <div className="flex items-center justify-between text-xs font-medium text-slate-500 uppercase tracking-wider px-4">
                                        <span>File Name</span>
                                        <span>Language</span>
                                        <span>Updated</span>
                                    </div>
                                    
                                    {/* File Rows */}
                                    <div className="space-y-2">
                                        <div className="file-row flex items-center justify-between p-4 hover:bg-purple-50/50">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                                                    <Code2 className="w-4 h-4 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="text-slate-900 font-medium">Interview with Jon</h4>
                                                    <p className="text-slate-500 text-sm">React component</p>
                                                </div>
                                            </div>
                                            <div className="language-badge px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full">
                                                <span className="text-orange-700 text-xs font-medium">JavaScript</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-slate-500 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>22 hours</span>
                                            </div>
                                        </div>
                                        
                                        <div className="file-row flex items-center justify-between p-4 hover:bg-purple-50/50">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                                                    <GitBranch className="w-4 h-4 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="text-slate-900 font-medium">Git useful commands</h4>
                                                    <p className="text-slate-500 text-sm">Shell script</p>
                                                </div>
                                            </div>
                                            <div className="language-badge px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
                                                <span className="text-emerald-700 text-xs font-medium">Shell</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-slate-500 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>1 day ago</span>
                                            </div>
                                        </div>
                                        
                                        <div className="file-row flex items-center justify-between p-4 hover:bg-purple-50/50">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                                                    <Command className="w-4 h-4 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="text-slate-900 font-medium">Swift style guide</h4>
                                                    <p className="text-slate-500 text-sm">Documentation</p>
                                                </div>
                                            </div>
                                            <div className="language-badge px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full">
                                                <span className="text-indigo-700 text-xs font-medium">Swift</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-slate-500 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>Never</span>
                                            </div>
                                        </div>
                                        
                                        <div className="file-row flex items-center justify-between p-4 hover:bg-purple-50/50">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg flex items-center justify-center shimmer-effect">
                                                    <File className="w-4 h-4 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="text-slate-900 font-medium">Design System</h4>
                                                    <p className="text-slate-500 text-sm">CSS framework</p>
                                                </div>
                                            </div>
                                            <div className="language-badge px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full">
                                                <span className="text-rose-700 text-xs font-medium">CSS</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-slate-500 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>3 hours</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrganizeFiles;