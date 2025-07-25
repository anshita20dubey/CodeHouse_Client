import React, { useState } from 'react';
import { Code2, Palette, Zap, Eye } from 'lucide-react';

const SyntaxHighlighting = () => {
    const [theme, setTheme] = useState('Dark');
    const [language, setLanguage] = useState('JavaScript');

    const codeExamples = {
        'JavaScript': `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(10);
console.log(\`Fibonacci: \${result}\`);`,
        'Kotlin': `fun fibonacci(n: Int): Int {
    return if (n <= 1) n
    else fibonacci(n - 1) + fibonacci(n - 2)
}

val result = fibonacci(10)
println("Fibonacci: $result")`,
        'Objective C': `- (NSInteger)fibonacci:(NSInteger)n {
    if (n <= 1) return n;
    return [self fibonacci:n-1] + [self fibonacci:n-2];
}

NSInteger result = [self fibonacci:10];
NSLog(@"Fibonacci: %ld", result);`,
        'PHP': `<?php
function fibonacci($n) {
    if ($n <= 1) return $n;
    return fibonacci($n - 1) + fibonacci($n - 2);
}

$result = fibonacci(10);
echo "Fibonacci: " . $result;
?>`,
        'Swift': `func fibonacci(_ n: Int) -> Int {
    if n <= 1 { return n }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

let result = fibonacci(10)
print("Fibonacci: \\(result)")`
    };

    // Syntax highlighting function
    const highlightCode = (code, lang) => {
        let tokens = code;

        // Language-specific keywords
        const keywords = {
            JavaScript: /\b(function|if|else|return|const|let|var|console)\b/g,
            Kotlin: /\b(fun|if|else|return|val|Int)\b/g,
            'Objective C': /\b(return|if|else|NSInteger|self|NSLog)\b/g,
            PHP: /\b(function|if|else|return|echo)\b/g,
            Swift: /\b(func|if|else|return|let|Int)\b/g
        };

        // Common patterns
        const patterns = {
            strings: /(["'])(?:\\1|.)*?\1/g,
            functions: /\b([a-zA-Z_]\w*(?=\s*\())/g,
            numbers: /\b\d+\b/g,
            brackets: /[{}()[\]]/g,
            comments: /(\/\/.*$)|(\/\*[\s\S]*?\*\/)/gm
        };

        // Apply highlighting by wrapping tokens in spans
        tokens = tokens
            .replace(patterns.comments, '<span class="syntax-comment">$&</span>')
            .replace(keywords[lang] || /\b(function|if|else|return)\b/g,
                '<span class="syntax-keyword">$&</span>')
            .replace(patterns.strings, '<span class="syntax-string">$&</span>')
            .replace(patterns.functions, '<span class="syntax-function">$1</span>')
            .replace(patterns.numbers, '<span class="syntax-number">$&</span>')
            .replace(patterns.brackets, '<span class="syntax-bracket">$&</span>');

        return tokens;
    };

    const isDark = theme === 'Dark';

    return (
        <>
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
                    50% { transform: translateX(8px); }
                }
                
                @keyframes sway {
                    0%, 100% { transform: translateX(0px) rotate(0deg); }
                    50% { transform: translateX(4px) rotate(1deg); }
                }
                
                @keyframes sway-reverse {
                    0%, 100% { transform: translateX(0px) rotate(0deg); }
                    50% { transform: translateX(-4px) rotate(-1deg); }
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
                
                @media (max-width: 768px) {
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-5px); }
                    }
                    
                    @keyframes float-slow {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-4px); }
                    }
                    
                    @keyframes float-reverse {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(4px); }
                    }
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
                
                .code-editor {
                    backdrop-filter: blur(20px);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .code-editor:hover {
                    transform: translateY(-2px);
                }
                
                @media (max-width: 768px) {
                    .code-editor:hover {
                        transform: none;
                    }
                }
                
                .code-header {
                    backdrop-filter: blur(20px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }
                
                .syntax-keyword { color: #ff7b72; }
                .syntax-string { color: #a5d6ff; }
                .syntax-function { color: #d2a8ff; }
                .syntax-variable { color: #79c0ff; }
                .syntax-comment { color: #8b949e; }
                .syntax-bracket { color: #ffa657; }
                .syntax-number { color: #79c0ff; }
                
                .feature-card {
                    backdrop-filter: blur(20px);
                    background: rgba(255, 255, 255, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .feature-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
                    background: rgba(255, 255, 255, 0.85);
                }
                
                @media (max-width: 768px) {
                    .feature-card:hover {
                        transform: none;
                    }
                }
                
                .language-tag {
                    backdrop-filter: blur(20px);
                    background: rgba(255, 255, 255, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .language-tag:hover {
                    transform: translateY(-1px);
                    background: rgba(255, 255, 255, 0.8);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
                }
                
                @media (max-width: 768px) {
                    .language-tag:hover {
                        transform: none;
                    }
                }
                
                .control-input {
                    backdrop-filter: blur(20px);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .control-input:focus {
                    transform: translateY(-1px);
                    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.15);
                }
                
                @media (max-width: 768px) {
                    .control-input:focus {
                        transform: none;
                    }
                }
                
                /* Responsive background elements */
                @media (max-width: 1024px) {
                    .bg-element-large { display: none; }
                }
                
                @media (max-width: 768px) {
                    .bg-element-medium { display: none; }
                }
                
                @media (max-width: 640px) {
                    .bg-element-small { display: none; }
                }
            `}</style>

            <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 overflow-hidden">
                {/* Responsive background elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.12),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(120,119,198,0.12),transparent_50%)]"></div>
                
                {/* Desktop floating shapes */}
                <div className="bg-element-large absolute top-20 right-20 w-32 h-32 border border-slate-400 rounded-full opacity-50 animate-pulse"></div>
                <div className="bg-element-medium absolute bottom-32 left-16 w-24 h-24 bg-indigo-200 rounded-lg rotate-12 opacity-60 animate-float"></div>
                <div className="bg-element-small absolute top-1/3 left-8 w-16 h-16 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full opacity-65 animate-float-slow"></div>
                <div className="bg-element-medium absolute bottom-20 right-1/4 w-20 h-20 border-2 border-emerald-400 rounded-lg -rotate-6 opacity-55 animate-float-reverse"></div>
                <div className="bg-element-small absolute top-10 left-1/4 w-12 h-12 bg-amber-200 rounded-full opacity-45 animate-float-slow"></div>
                <div className="bg-element-large absolute top-1/2 right-12 w-28 h-28 border border-indigo-300 rounded-lg rotate-45 opacity-40 animate-rotate-slow"></div>
                
                {/* Mobile-friendly background elements */}
                <div className="block sm:hidden absolute top-10 right-4 w-8 h-8 bg-indigo-200 rounded-full opacity-60 animate-float"></div>
                <div className="block sm:hidden absolute bottom-20 left-4 w-6 h-6 bg-emerald-200 rounded-full opacity-50 animate-float-slow"></div>
                <div className="block sm:hidden absolute top-1/3 right-6 w-10 h-10 border border-purple-300 rounded-lg rotate-12 opacity-45 animate-float-reverse"></div>
                
                {/* Subtle dot grid - responsive */}
                <div className="absolute inset-0 opacity-20 sm:opacity-25 lg:opacity-35" style={{
                    backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
                
                {/* Responsive light rays */}
                <div className="hidden sm:block absolute top-0 left-1/2 w-px h-20 sm:h-24 lg:h-32 bg-gradient-to-b from-indigo-400 to-transparent opacity-35 transform -translate-x-1/2 animate-sway"></div>
                <div className="hidden sm:block absolute bottom-0 right-1/3 w-px h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-emerald-400 to-transparent opacity-35 animate-sway-reverse"></div>
                
                {/* Responsive corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-indigo-100 to-transparent opacity-50 rounded-br-full animate-breathe"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-gradient-to-tl from-emerald-100 to-transparent opacity-50 rounded-tl-full animate-breathe-reverse"></div>
                
                {/* Responsive curved lines */}
                <svg className="hidden sm:block absolute top-0 left-0 w-full h-full opacity-30 sm:opacity-35 lg:opacity-45 animate-drift" viewBox="0 0 1000 1000" fill="none">
                    <path d="M-100 200 Q 200 100 500 200 T 1100 200" stroke="url(#gradient1)" strokeWidth="1" fill="none" />
                    <path d="M-100 600 Q 300 500 600 600 T 1200 600" stroke="url(#gradient2)" strokeWidth="1" fill="none" />
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
                    </defs>
                </svg>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
                            <div className="space-y-4 sm:space-y-6">
                                <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-slate-600 text-xs sm:text-sm font-medium border border-slate-200/60">
                                    <Palette className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                                    Advanced Syntax Highlighting
                                </div>

                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
                                    Beautiful syntax in your
                                    <span className="font-medium text-indigo-600 block">preferred language</span>
                                </h2>

                                <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                    Choose among <span className="font-semibold text-indigo-600">120+ programming languages</span> with intelligent highlighting, seamless theming, and elegant presentation that adapts to your coding style.
                                </p>
                            </div>

                            {/* Feature Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div className="feature-card rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto lg:mx-0">
                                        <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Smart Highlighting</h4>
                                    <p className="text-sm sm:text-base text-slate-600">Intelligent syntax recognition with context-aware colors</p>
                                </div>

                                <div className="feature-card rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto lg:mx-0">
                                        <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Dynamic Themes</h4>
                                    <p className="text-sm sm:text-base text-slate-600">Seamless switching between light and dark modes</p>
                                </div>
                            </div>

                            {/* Language Tags */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                                {['JavaScript', 'Python', 'TypeScript', 'Go', 'Rust'].map((lang) => (
                                    <div key={lang} className="language-tag px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                                        <div className="flex items-center">
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-1.5 sm:mr-2 animate-pulse-gentle"></div>
                                            <span className="text-xs sm:text-sm font-medium text-slate-700">{lang}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content - Code Editor */}
                        <div className="w-full lg:w-1/2 max-w-2xl lg:max-w-none">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl sm:rounded-2xl blur-xl opacity-5 sm:opacity-10 animate-glow"></div>

                                <div className={`code-editor relative rounded-xl sm:rounded-2xl overflow-hidden border ${isDark
                                        ? 'bg-slate-900/95 border-slate-700/50'
                                        : 'bg-white/90 border-slate-200/60'
                                    }`}>
                                    {/* Code Header */}
                                    <div className={`code-header flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 ${isDark
                                            ? 'bg-slate-800/90'
                                            : 'bg-slate-50/90'
                                        }`}>
                                        <div className="flex items-center space-x-2 sm:space-x-4">
                                            <div className="flex space-x-1.5 sm:space-x-2">
                                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse-gentle"></div>
                                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-pulse-gentle" style={{ animationDelay: '0.2s' }}></div>
                                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse-gentle" style={{ animationDelay: '0.4s' }}></div>
                                            </div>
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                                                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                            </div>
                                        </div>
                                        <div className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                            fibonacci.{language.toLowerCase()}
                                        </div>
                                    </div>

                                    {/* Controls */}
                                    <div className={`p-3 sm:p-4 lg:p-6 border-b ${isDark
                                            ? 'bg-slate-800/50 border-slate-700/50'
                                            : 'bg-slate-50/50 border-slate-200/60'
                                        }`}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                            <div className="space-y-2 sm:space-y-3">
                                                <label className={`block text-xs sm:text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                                    Editor Theme
                                                </label>
                                                <select
                                                    value={theme}
                                                    onChange={(e) => setTheme(e.target.value)}
                                                    className={`control-input w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border-2 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isDark
                                                            ? 'bg-slate-700/90 border-slate-600/50 text-white hover:border-slate-500'
                                                            : 'bg-white/90 border-slate-200/60 text-slate-800 hover:border-slate-300'
                                                        }`}
                                                >
                                                    <option>Dark</option>
                                                    <option>Light</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2 sm:space-y-3">
                                                <label className={`block text-xs sm:text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                                    Language Syntax
                                                </label>
                                                <select
                                                    value={language}
                                                    onChange={(e) => setLanguage(e.target.value)}
                                                    className={`control-input w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border-2 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isDark
                                                            ? 'bg-slate-700/90 border-slate-600/50 text-white hover:border-slate-500'
                                                            : 'bg-white/90 border-slate-200/60 text-slate-800 hover:border-slate-300'
                                                        }`}
                                                >
                                                    <option>JavaScript</option>
                                                    <option>Kotlin</option>
                                                    <option>Objective C</option>
                                                    <option>PHP</option>
                                                    <option>Swift</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Code Display */}
                                    <div className={`p-3 sm:p-4 lg:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto ${isDark
                                            ? 'bg-slate-900/90 text-slate-300'
                                            : 'bg-white/90 text-slate-800'
                                        }`}>
                                        <pre className="whitespace-pre-wrap">
                                            <code dangerouslySetInnerHTML={{
                                                __html: highlightCode(codeExamples[language], language)
                                            }} />
                                        </pre>
                                    </div>

                                    {/* Footer */}
                                    <div className={`flex flex-col sm:flex-row sm:items-center justify-between px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-3 border-t text-xs ${isDark
                                            ? 'bg-slate-800/90 border-slate-700/50 text-slate-400'
                                            : 'bg-slate-50/90 border-slate-200/60 text-slate-600'
                                        }`}>
                                        <div className="flex items-center space-x-3 sm:space-x-4 mb-2 sm:mb-0">
                                            <div className="flex items-center">
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full mr-1.5 sm:mr-2 animate-pulse-gentle"></div>
                                                <span className="font-medium">{language}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-1.5 sm:mr-2"></div>
                                                <span>UTF-8</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 sm:space-x-3">
                                            <span>Lines: {codeExamples[language].split('\n').length}</span>
                                            <span className="opacity-50">•</span>
                                            <span>Chars: {codeExamples[language].length}</span>
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

export default SyntaxHighlighting;