import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-[85vh] text-white overflow-hidden"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?hope,children')" }}
      aria-label="Hero section showcasing our mission"
    >
      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-blue-500/20 animate-float1"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-yellow-500/20 animate-float2"></div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <div 
          className="max-w-4xl space-y-8 transform transition-all duration-1000 ease-out"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              Restoring Hope,
            </span> 
            <br />
            One Life at a Time
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Empowering orphans, widows, and vulnerable women through education, love, and sustainable programs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link 
              to="/donate" 
              className="relative bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 group"
            >
              <span className="relative z-10">Donate Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            
            <Link 
              to="/volunteer" 
              className="relative border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/20 group"
            >
              <span className="relative z-10">Become a Volunteer</span>
              <span className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      
      {/* Add this to your global CSS */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(20px) translateX(-10px); }
        }
        .animate-float1 {
          animation: float1 8s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;