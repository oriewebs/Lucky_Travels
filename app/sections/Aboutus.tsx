import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-gradient-to-br from-stone-50 via-amber-50/30 to-emerald-50/20 py-24 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 relative h-80 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/10 group">
                <Image
                  src="/images/image1.jpeg"
                  alt="Paradise Village Lake View"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
              </div>
              
              {/* Three smaller images */}
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/10 group">
                <Image
                  src="/images/image3.jpeg"
                  alt="Village Nature"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/10 group">
                <Image
                  src="/images/image5.jpeg"
                  alt="Village Activity"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="col-span-2 relative h-44 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/10 group">
                <Image
                  src="/images/image4.jpeg"
                  alt="Village Pathway"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Stats overlay card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-emerald-100">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-800">10,000+</div>
                  <div className="text-sm text-stone-600 mt-1">Visitors</div>
                </div>
                <div className="w-px h-12 bg-stone-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-800">94%</div>
                  <div className="text-sm text-stone-600 mt-1">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-emerald-800 text-white rounded-2xl shadow-xl p-4 rotate-3">
              <div className="text-center">
                <div className="text-lg font-bold">Top 100</div>
                <div className="text-xs opacity-90">Destinations</div>
              </div>
            </div>

            {/* Ratings badge */}
            <div className="absolute top-1/2 -right-6 bg-white rounded-xl shadow-xl p-4 border border-amber-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">7+</div>
                <div className="text-xs text-stone-600 mt-1">Years</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Section label */}
            <div className="inline-flex items-center gap-2 text-emerald-700 font-medium">
              <div className="w-8 h-px bg-emerald-600"></div>
              <span className="text-[28px] font-bold tracking-wider uppercase">About Us</span>
            </div>

            {/* Main heading */}
            <h2 className="text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
              Lucky Travels
            </h2>

            {/* Description */}
            <p className="text-stone-600 text-lg leading-relaxed">
              Lucky Travels creates meaningful travel experiences beyond sightseeing, specializing in village-based 
              tourism, cultural journeys, and nature-focused escapes that reconnect travelers with authentic local
               life.

              Guided by responsible tourism values, we offer carefully curated tours across Sri Lanka that celebrate 
              rich cultural heritage, peaceful rural landscapes, and natural beauty—while supporting local communities 
              and preserving traditional lifestyles.
            </p>

            {/* Green card with icon */}
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-4.28-1.08-7.5-5.38-7.5-9.5V8.3l7.5-3.75 7.5 3.75v2.7c0 4.12-3.22 8.42-7.5 9.5z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Embrace the Tradition</h3>
                  <p className="text-emerald-100 text-sm leading-relaxed">
                    At Lucky Travels, we invite you to experience authentic village life enriched with centuries-old traditions and heartfelt hospitality. From local customs and traditional cuisine to folklore and craftsmanship, 
                    every journey is designed to immerse you in the true essence of rural culture.
                  </p>
                </div>
              </div>
            </div>

            {/* Content section */}
            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-6">
                Authentic Culture and Charm, Where Beauty Knows No Bounds
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-stone-700">
                  <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fresh Air, Feel the Nature</span>
                </li>
                <li className="flex items-start gap-3 text-stone-700">
                  <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Peaceful Environment</span>
                </li>
                <li className="flex items-start gap-3 text-stone-700">
                  <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Rich of Culture</span>
                </li>
                <li className="flex items-start gap-3 text-stone-700">
                  <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fair from Hustle Bustle</span>
                </li>
              </ul>
            </div>

            {/* Reference note */}
            <div className="pt-4 border-t border-stone-200">
              <p className="text-xs text-stone-500">
                According to Survey of 600 respondents, According to Connecticutpost Magazine, 2025
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 group">
              Learn More
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}