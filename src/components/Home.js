import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Code2, Users, Zap, ArrowRight, Sparkles } from "lucide-react";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // Mock uuid function for demo
  const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  // Mock toast function for demo
  const toast = {
    success: (message) => {
      console.log('Success:', message);
    },
    error: (message) => {
      console.log('Error:', message);
    }
  };

  const generateRoomId = (e) => {
    e.preventDefault();
    const Id = uuid();
    setRoomId(Id);
    toast.success("Room Id is generated");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Both fields are required");
      return;
    }

    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
    toast.success("Room is created");
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="relative bg-white min-h-screen flex items-center overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.08),transparent_50%),radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.06),transparent_50%)]"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-slate-300 rounded-full opacity-40 animate-float"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl rotate-12 opacity-50 animate-float-slow"></div>
      <div className="absolute top-1/3 left-8 w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full opacity-60 animate-float-reverse"></div>
      <div className="absolute bottom-20 right-1/4 w-20 h-20 border-2 border-purple-200 rounded-lg -rotate-6 opacity-45 animate-float"></div>
      <div className="absolute top-10 left-1/4 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full opacity-40 animate-float-slow"></div>
      <div className="absolute top-1/2 right-12 w-28 h-28 border border-indigo-200 rounded-xl rotate-45 opacity-35 animate-rotate-slow"></div>
      
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Elegant curved lines */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 1000 1000" fill="none">
        <path d="M-100 200 Q 200 100 500 200 T 1100 200" stroke="url(#gradient1)" strokeWidth="1.5" fill="none" />
        <path d="M-100 600 Q 300 500 600 600 T 1200 600" stroke="url(#gradient2)" strokeWidth="1.5" fill="none" />
        <path d="M200 50 Q 400 150 600 50 T 1000 50" stroke="url(#gradient3)" strokeWidth="1.5" fill="none" />
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
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.2),
                        0 0 40px rgba(99, 102, 241, 0.1);
          }
          50% { 
            box-shadow: 0 0 30px rgba(99, 102, 241, 0.3),
                        0 0 60px rgba(99, 102, 241, 0.2);
          }
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
        
        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-slate-100 rounded-full px-4 py-2 text-slate-600 text-sm font-medium">
              <Code2 className="w-4 h-4 mr-2" />
              Collaborative Code Editor
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight">
                Share code with
                <span className="block font-medium text-indigo-600">developers</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Codehouse is a collaborative online code editor designed for technical interviews, 
                pair programming, and teaching. Simple, fast, and built for developers.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Real-time Sync</h3>
                  <p className="text-xs text-slate-500">Live collaboration</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Team Friendly</h3>
                  <p className="text-xs text-slate-500">Perfect for interviews</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Lightning Fast</h3>
                  <p className="text-xs text-slate-500">Minimal latency</p>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <p className="text-slate-500 text-sm">
              No sign up required • Free forever • Built with ❤️
            </p>
          </div>

          {/* Right side - Room Entry Card */}
          <div className="relative">
            {/* Glass card */}
            <div 
              className={`relative bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 shadow-xl transition-all duration-300 ${
                isHovered ? 'shadow-2xl shadow-indigo-500/20 scale-105' : ''
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Card header */}
              <div className="text-center mb-8">
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse-glow">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-2">Enter the Room</h2>
                <p className="text-slate-600 text-sm">Join or create a collaborative session</p>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-slate-900 placeholder-slate-500"
                    placeholder="Enter Room ID"
                    onKeyUp={handleInputEnter}
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-slate-900 placeholder-slate-500"
                    placeholder="Your Username"
                    onKeyUp={handleInputEnter}
                  />
                </div>

                <button
                  onClick={joinRoom}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center space-x-2"
                >
                  <span>Join Room</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center space-x-4 my-6">
                <div className="flex-1 h-px bg-slate-200"></div>
                <span className="text-slate-500 text-sm">or</span>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>

              {/* Create new room */}
              <button
                onClick={generateRoomId}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 px-6 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
              >
                Create New Room
              </button>
            </div>

            {/* Floating elements around the card */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-60 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-60 animate-float-reverse"></div>
            <div className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-60 animate-float-slow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;