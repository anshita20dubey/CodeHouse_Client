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
        <>
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
                
                .animate-float { animation: float 4s ease-in-out infinite; }
                .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
                .animate-float-reverse { animation: float-reverse 5s ease-in-out infinite; }
                .animate-rotate-slow { animation: rotate-slow 20s linear infinite; }
                .animate-drift { animation: drift 8s ease-in-out infinite; }
                .animate-sway { animation: sway 3s ease-in-out infinite; }
                .animate-sway-reverse { animation: sway-reverse 3.5s ease-in-out infinite; }
                .animate-breathe { animation: breathe 4s ease-in-out infinite; }
                .animate-breathe-reverse { animation: breathe-reverse 4.5s ease-in-out infinite; }
                .animate-shimmer { animation: shimmer 3s ease-in-out infinite; }
                .animate-glow { animation: glow 3s ease-in-out infinite; }
                .animate-pulse-gentle { animation: pulse-gentle 2s ease-in-out infinite; }
                .animate-expand { animation: expand 0.3s ease-out forwards; }
                
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
                    margin: 0.75rem 0;
                    opacity: 0;
                    animation: expand 0.5s ease-out 0.2s forwards;
                }

                /* Enhanced responsive design */
                @media (max-width: 1536px) {
                    .floating-elements > div {
                        opacity: 0.8;
                    }
                }

                @media (max-width: 1280px) {
                    .floating-elements > div {
                        opacity: 0.6;
                    }
                    .section-padding {
                        padding-left: 2rem;
                        padding-right: 2rem;
                    }
                }

                @media (max-width: 1024px) {
                    .floating-elements > div {
                        opacity: 0.4;
                    }
                    .section-padding {
                        padding-left: 1.5rem;
                        padding-right: 1.5rem;
                    }
                    .faq-card {
                        padding: 0.5rem;
                    }
                    .question-button {
                        padding: 1rem 1.25rem;
                    }
                    .answer-content {
                        padding: 0 1.25rem 1.25rem;
                    }
                    .max-w-4xl {
                        max-width: 48rem;
                    }
                }

                @media (max-width: 768px) {
                    .floating-elements > div {
                        opacity: 0.3;
                    }
                    .section-padding {
                        padding: 2rem 1rem;
                    }
                    .text-center.mb-8 {
                        margin-bottom: 2rem;
                    }
                    .space-y-3 {
                        gap: 0.5rem;
                    }
                    .faq-card {
                        padding: 0.25rem;
                    }
                    .question-button {
                        padding: 0.875rem 1rem;
                    }
                    .answer-content {
                        padding: 0 1rem 1rem;
                    }
                    .max-w-4xl {
                        max-width: 100%;
                    }
                }

                @media (max-width: 640px) {
                    .floating-elements {
                        display: none;
                    }
                    .section-padding {
                        padding: 1.5rem 0.75rem;
                    }
                    .text-center.mb-8 {
                        margin-bottom: 1.5rem;
                    }
                    .space-y-3 {
                        gap: 0.375rem;
                    }
                    .faq-card {
                        padding: 0.125rem;
                    }
                    .question-button {
                        padding: 0.75rem 0.875rem;
                    }
                    .answer-content {
                        padding: 0 0.875rem 0.875rem;
                    }
                    .gradient-line {
                        margin: 0.5rem 0;
                    }
                }

                @media (max-width: 475px) {
                    .section-padding {
                        padding: 1.25rem 0.5rem;
                    }
                    .question-button {
                        padding: 0.625rem 0.75rem;
                    }
                    .answer-content {
                        padding: 0 0.75rem 0.75rem;
                    }
                    .space-y-3 {
                        gap: 0.25rem;
                    }
                }

                @media (max-width: 360px) {
                    .section-padding {
                        padding: 1rem 0.375rem;
                    }
                    .question-button {
                        padding: 0.5rem 0.625rem;
                    }
                    .answer-content {
                        padding: 0 0.625rem 0.625rem;
                    }
                    .text-center.mb-8 {
                        margin-bottom: 1rem;
                    }
                }
            `}</style>
            
            <section className="relative section-padding py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 overflow-hidden">
                {/* Elegant background elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.05),transparent_50%),radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.04),transparent_50%)]"></div>
                
                {/* Floating geometric shapes */}
                <div className="floating-elements">
                    <div className="absolute top-12 sm:top-16 lg:top-20 right-8 sm:right-12 lg:right-20 w-16 sm:w-20 md:w-24 lg:w-32 h-16 sm:h-20 md:h-24 lg:h-32 border border-slate-300 rounded-full opacity-35 animate-pulse"></div>
                    <div className="absolute bottom-20 sm:bottom-24 lg:bottom-32 left-8 sm:left-12 lg:left-16 w-12 sm:w-16 md:w-20 lg:w-24 h-12 sm:h-16 md:h-20 lg:h-24 bg-indigo-200 rounded-lg rotate-12 opacity-45 animate-float"></div>
                    <div className="absolute top-1/4 sm:top-1/3 left-4 sm:left-6 lg:left-8 w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full opacity-50 animate-float-slow"></div>
                    <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 right-1/4 w-10 sm:w-12 md:w-16 lg:w-20 h-10 sm:h-12 md:h-16 lg:h-20 border-2 border-emerald-300 rounded-lg -rotate-6 opacity-40 animate-float-reverse"></div>
                    <div className="absolute top-6 sm:top-8 lg:top-10 left-1/4 w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 bg-amber-200 rounded-full opacity-35 animate-float-slow"></div>
                    <div className="absolute top-1/2 right-6 sm:right-8 lg:right-12 w-12 sm:w-16 md:w-20 lg:w-28 h-12 sm:h-16 md:h-20 lg:h-28 border border-indigo-300 rounded-lg rotate-45 opacity-30 animate-rotate-slow"></div>
                    <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/3 w-8 sm:w-10 md:w-14 lg:w-18 h-8 sm:h-10 md:h-14 lg:h-18 bg-gradient-to-tr from-emerald-200 to-teal-200 rounded-lg rotate-12 opacity-40 animate-float"></div>
                    <div className="absolute top-2/3 left-8 sm:left-12 lg:left-20 w-4 sm:w-6 md:w-8 lg:w-10 h-4 sm:h-6 md:h-8 lg:h-10 border-2 border-purple-300 rounded-full opacity-35 animate-float-reverse"></div>
                    <div className="absolute bottom-1/3 right-4 sm:right-6 lg:right-8 w-6 sm:w-8 md:w-12 lg:w-14 h-6 sm:h-8 md:h-12 lg:h-14 bg-slate-200 rounded-full opacity-40 animate-float-slow"></div>
                </div>
                
                {/* Subtle dot grid - responsive */}
                <div className="absolute inset-0 opacity-10 sm:opacity-15 lg:opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
                
                {/* Elegant curved lines */}
                <svg className="absolute top-0 left-0 w-full h-full opacity-20 sm:opacity-25 lg:opacity-30 animate-drift" viewBox="0 0 1000 1000" fill="none">
                    <path d="M-100 200 Q 200 100 500 200 T 1100 200" stroke="url(#gradient1)" strokeWidth="1" fill="none" />
                    <path d="M-100 600 Q 300 500 600 600 T 1200 600" stroke="url(#gradient2)" strokeWidth="1" fill="none" />
                    <path d="M-50 800 Q 150 700 400 800 T 900 800" stroke="url(#gradient3)" strokeWidth="1" fill="none" />
                    <path d="M200 50 Q 400 150 600 50 T 1000 50" stroke="url(#gradient4)" strokeWidth="1" fill="none" />
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
                
                <div className="relative max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
                        <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-slate-600 text-xs sm:text-sm font-medium border border-slate-200/60 mb-3 sm:mb-4 md:mb-6">
                            <HelpCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-1.5 md:mr-2" />
                            Support Center
                        </div>
                        
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-slate-900 leading-tight mb-3 sm:mb-4 md:mb-6">
                            Frequently Asked
                            <span className="font-medium text-indigo-600 block">Questions</span>
                        </h2>
                        
                        <p className="text-xs sm:text-sm md:text-base lg:text-xl text-slate-600 leading-relaxed max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
                            Find answers to common questions about Codefile. Can't find what you're looking for?
                            <span className="text-indigo-600 font-medium ml-1 cursor-pointer hover:text-indigo-700 transition-colors">
                                Get in touch with us
                            </span>
                        </p>
                    </div>
                    
                    {/* FAQ Items */}
                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className={`faq-card rounded-lg sm:rounded-xl md:rounded-2xl ${openIndex === index ? 'active' : ''}`}
                            >
                                <button
                                    className="question-button w-full px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 text-left flex items-center justify-between rounded-lg sm:rounded-xl md:rounded-2xl"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                                        <div className="w-6 sm:w-7 md:w-8 lg:w-10 h-6 sm:h-7 md:h-8 lg:h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Sparkles className="w-3 sm:w-3.5 md:w-4 lg:w-5 h-3 sm:h-3.5 md:h-4 lg:h-5 text-white" />
                                        </div>
                                        <span className="font-medium text-slate-900 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed pr-2">
                                            {faq.question}
                                        </span>
                                    </div>
                                    
                                    <div className={`chevron-icon ${openIndex === index ? 'rotate-180' : ''} flex-shrink-0`}>
                                        <ChevronDown className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-slate-400" />
                                    </div>
                                </button>
                                
                                <div className={`answer-content overflow-hidden ${
                                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <div className="px-3 sm:px-4 md:px-6 lg:px-8 pb-3 sm:pb-4 md:pb-5 lg:pb-6">
                                        <div className="gradient-line"></div>
                                        <p className="text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base pl-8 sm:pl-10 md:pl-12 lg:pl-14 animate-expand">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;