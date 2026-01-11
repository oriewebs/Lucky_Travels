import React from "react";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      >
        <Image
              src="/images/hero.jpg"   
              alt="Lucky Travels Logo"
               width={1600}
          height={400}
              className="object-contain"
              priority
         />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>


      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center">
        <span className="font-script text-2xl md:text-3xl text-white/90 mb-2">
          Discover the
        </span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight mb-4">
          Adventure Travel
        </h1>
        <p className="text-white/80 text-sm md:text-base mb-8 max-w-md">
          Your best adventure guide destination
        </p>
        <button className="px-8 py-4 bg-green-800 text-black rounded-lg font-medium hover:bg-white transition-colors">
          View Adventure
        </button>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg 
            viewBox="0 0 1440 100" 
            className="w-full h-auto block"
            preserveAspectRatio="none"
          >
          <path 
            d="M0,60 C180,120 360,0 540,60 C720,120 900,20 1080,60 C1260,100 1350,40 1440,60 L1440,120 L0,120 Z" 
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
