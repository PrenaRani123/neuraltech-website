import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-slate-200 to-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
        
        {/* Professional Neural Network Nodes */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full animate-float animation-delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-float animation-delay-700"></div>
        <div className="absolute top-1/6 right-1/6 w-3 h-3 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full animate-float animation-delay-300"></div>
        <div className="absolute bottom-1/3 right-1/2 w-7 h-7 bg-gradient-to-r from-slate-400 to-gray-400 rounded-full animate-float animation-delay-600"></div>
        
        {/* Subtle Sparkles */}
        <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-blue-200 rounded-full animate-sparkle"></div>
        <div className="absolute top-2/5 right-1/5 w-2 h-2 bg-indigo-200 rounded-full animate-sparkle animation-delay-500"></div>
        <div className="absolute bottom-1/5 left-2/5 w-2 h-2 bg-slate-200 rounded-full animate-sparkle animation-delay-1000"></div>
        <div className="absolute bottom-2/5 right-2/5 w-2 h-2 bg-gray-200 rounded-full animate-sparkle animation-delay-1500"></div>
        
        {/* Professional Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line x1="25%" y1="25%" x2="33%" y2="33%" stroke="url(#gradient1)" strokeWidth="1" className="animate-pulse">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#6366f1', stopOpacity: 1}} />
              </linearGradient>
            </defs>
          </line>
          <line x1="33%" y1="33%" x2="50%" y2="50%" stroke="url(#gradient2)" strokeWidth="1" className="animate-pulse animation-delay-500">
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
              </linearGradient>
            </defs>
          </line>
          <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="url(#gradient3)" strokeWidth="1" className="animate-pulse animation-delay-1000">
            <defs>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#64748b', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#475569', stopOpacity: 1}} />
              </linearGradient>
            </defs>
          </line>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight animate-fade-in">
            Transform Your Business with
            <span className="text-blue-600 block animate-slide-up">AI-Powered Solutions</span>
          </h1>
          
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-300">
            We specialize in cutting-edge AI chatbots, intelligent agents, custom web development, 
            and data analytics that drive real business results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-500">
            <button
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explore Our Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in animation-delay-700">
            <div className="text-center group bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-secondary-700 font-semibold">Projects Completed</div>
            </div>
            <div className="text-center group bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-secondary-700 font-semibold">Client Satisfaction</div>
            </div>
            <div className="text-center group bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-slate-600 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-secondary-700 font-semibold">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('services')}
          className="text-secondary-400 hover:text-primary-600 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero; 