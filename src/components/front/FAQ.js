import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { 
            question: "Do I need to sign up or log in to use this code editor?",
            answer: "Nope! Our editor is completely login-free. Just open the site and start coding instantly—no account needed." 
        },
        { 
            question: "Is this code editor really free for lifetime?", 
            answer: "Yes! We believe in open access. Our collaborative code editor is 100% free for life, with no hidden fees or trials." 
        },
        { 
            question: "Can I collaborate with others in real-time?", 
            answer: "Absolutely! Just share your unique session link with your team, and you'll be coding together in real time." 
        },
        { 
            question: "What programming languages does it support?", 
            answer: "Currently, it supports popular languages like HTML, CSS, JavaScript, Python, Java, C++, etc. More languages are being added based on user feedback." 
        },
        { 
            question: "Is my code saved automatically?", 
            answer: "Yes, your code is temporarily stored during your session. However, since there's no login, make sure to download or copy your code before closing the tab." 
        },
        { 
            question: "How secure is the collaboration link?", 
            answer: "Every session link is unique and private. Only users with the link can access the session. For extra security, avoid sharing it publicly." 
        },
    ];

    return (
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 overflow-hidden">
            {/* Elegant background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.05),transparent_50%),radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.04),transparent_50%)]"></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-20 right-20 w-32 h-32 border border-slate-300 rounded-full opacity-35 animate-pulse"></div>
            <div className="absolute bottom-32 left-16 w-24 h-24 bg-indigo-200 rounded-lg rotate-12 opacity-45 animate-float"></div>
            <div className="absolute top-1/3 left-8 w-16 h-16 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full opacity-50 animate-float-slow"></div>
            <div className="absolute bottom-20 right-1/4 w-20 h-20 border-2 border-emerald-300 rounded-lg -rotate-6 opacity-40 animate-float-reverse"></div>
            <div className="absolute top-10 left-1/4 w-12 h-12 bg-amber-200 rounded-full opacity-35 animate-float-slow"></div>
            <div className="absolute top-1/2 right-12 w-28 h-28 border border-indigo-300 rounded-lg rotate-45 opacity-30 animate-rotate-slow"></div>
            <div className="absolute bottom-10 left-1/3 w-18 h-18 bg-gradient-to-tr from-emerald-200 to-teal-200 rounded-lg rotate-12 opacity-40 animate-float"></div>
            <div className="absolute top-2/3 left-20 w-10 h-10 border-2 border-purple-300 rounded-full opacity-35 animate-float-reverse"></div>
            <div className="absolute bottom-1/3 right-8 w-14 h-14 bg-slate-200 rounded-full opacity-40 animate-float-slow"></div>
            
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
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-100 to-transparent opacity-40 rounded-br-full animate-breathe"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-emerald-100 to-transparent opacity-40 rounded-tl-full animate-breathe-reverse"></div>
            
            {/* Elegant curved lines */}
            <svg className="absolute top-0 left-0 w-full h-full opacity-30 animate-drift" viewBox="0 0 1000 1000" fill="none">
                <path d="M-100 200 Q 200 100 500 200 T 1100 200" stroke="url(#gradient1)" strokeWidth="1.5" fill="none" />
                <path d="M-100 600 Q 300 500 600 600 T 1200 600" stroke="url(#gradient2)" strokeWidth="1.5" fill="none" />
                <path d="M-50 800 Q 150 700 400 800 T 900 800" stroke="url(#gradient3)" strokeWidth="1.5" fill="none" />
                <path d="M200 50 Q 400 150 600 50 T 1000 50" stroke="url(#gradient4)" strokeWidth="1.5" fill="none" />
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(99,102,241,0.2)" />
                        <stop offset="50%" stopColor="rgba(99,102,241,0.4)" />
                        <stop offset="100%" stopColor="rgba(99,102,241,0.2)" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(16,185,129,0.2)" />
                        <stop offset="50%" stopColor="rgba(16,185,129,0.4)" />
                        <stop offset="100%" stopColor="rgba(16,185,129,0.2)" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(245,158,11,0.2)" />
                        <stop offset="50%" stopColor="rgba(245,158,11,0.4)" />
                        <stop offset="100%" stopColor="rgba(245,158,11,0.2)" />
                    </linearGradient>
                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(147,51,234,0.2)" />
                        <stop offset="50%" stopColor="rgba(147,51,234,0.4)" />
                        <stop offset="100%" stopColor="rgba(147,51,234,0.2)" />
                    </linearGradient>
                </defs>
            </svg>
            
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
                
                @keyframes expand {
                    0% { transform: scale(0.95); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
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
                
                .animate-expand {
                    animation: expand 0.3s ease-out forwards;
                }
                
                .faq-card {
                    backdrop-filter: blur(20px);
                    background: rgba(255, 255, 255, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                }
                
                .faq-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                    transition: left 0.5s ease;
                }
                
                .faq-card:hover::before {
                    left: 100%;
                }
                
                .faq-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                    background: rgba(255, 255, 255, 0.85);
                    border-color: rgba(99, 102, 241, 0.2);
                }
                
                .faq-card.active {
                    background: rgba(255, 255, 255, 0.9);
                    border-color: rgba(99, 102, 241, 0.3);
                    box-shadow: 0 10px 40px rgba(99, 102, 241, 0.1);
                }
                
                .question-button {
                    position: relative;
                    z-index: 1;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .question-button:hover {
                    background: rgba(99, 102, 241, 0.05);
                }
                
                .chevron-icon {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .answer-content {
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .gradient-line {
                    background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent);
                    height: 1px;
                    margin: 1rem 0;
                    opacity: 0;
                    animation: expand 0.5s ease-out 0.2s forwards;
                }
            `}</style>
            
            <div className="relative max-w-4xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-slate-600 text-sm font-medium border border-slate-200/60 mb-6">
                        <HelpCircle className="w-4 h-4 mr-2" />
                        Support Center
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-6">
                        Frequently Asked
                        <span className="font-medium text-indigo-600 block">Questions</span>
                    </h2>
                    
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Find answers to common questions about Codefile. Can't find what you're looking for?
                        <span className="text-indigo-600 font-medium ml-1 cursor-pointer hover:text-indigo-700 transition-colors">
                            Get in touch with us
                        </span>
                    </p>
                </div>
                
                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className={`faq-card rounded-2xl ${openIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="question-button w-full px-8 py-6 text-left flex items-center justify-between rounded-2xl"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Sparkles className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="font-medium text-slate-900 text-lg leading-relaxed">
                                        {faq.question}
                                    </span>
                                </div>
                                
                                <div className={`chevron-icon ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <ChevronDown className="w-6 h-6 text-slate-400" />
                                </div>
                            </button>
                            
                            <div className={`answer-content overflow-hidden ${
                                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                                <div className="px-8 pb-6">
                                    <div className="gradient-line"></div>
                                    <p className="text-slate-600 leading-relaxed text-base pl-14 animate-expand">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;