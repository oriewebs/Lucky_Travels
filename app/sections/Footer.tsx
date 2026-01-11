import React from "react";

export default function Footer() {
  return (
    <footer className=" text-white bg-emerald-800 relative overflow-hidden">
       <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <h2 className="lg:text-[30px] sm:text-[16px]  font-bold">
                <span className="text-white">Perera</span>
               
              </h2>
            </div>
            <p className="text-gray-300 mb-8 lg:w-100 leading-relaxed text-sm sm:text-base">
             Empowering progress through software innovation.<br/>
             We are committed to delivering reliable, scalable, and user-friendly solutions for a better digital future.
            </p>
            
             <div className="flex space-x-3 justify-center md:justify-start">
               <a href="#" className="w-8 h-8 sm:w-6 sm:h-6 lg:w-10 lg:h-10 bg-slate-700 hover:bg-[#013152] rounded-full flex items-center justify-center transition-colors duration-200">
                <span className="text-white font-semibold lg:text-[18px] sm:text-[12px] ">f</span>
              </a>
              <a href="#" className="w-8 h-8 sm:w-6 sm:h-6 lg:w-10 lg:h-10 bg-slate-700 hover:bg-[#013152] rounded-full flex items-center justify-center transition-colors duration-200">
                <span className="text-white font-semibold lg:text-[18px] sm:text-[12px] ">X</span>
              </a>
               <a href="#" className="w-8 h-8 sm:w-6 sm:h-6 lg:w-10 lg:h-10 bg-slate-700 hover:bg-[#013152] rounded-full flex items-center justify-center transition-colors duration-200">
                <svg  className="w-4 h-4 sm:w-3 sm:h-3 lg:w-5 lg:h-5 text-white"fill="currentColor"viewBox="0 0 24 24">

                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
               <a href="#" className="w-8 h-8 sm:w-6 sm:h-6 lg:w-10 lg:h-10 bg-slate-700 hover:bg-[#013152] rounded-full flex items-center justify-center transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-2 grid grid-cols-2 gap-8 md:gap-16">
            <div className="md:ml-0 lg:ml-40">
              <h3 className="lg:text-[18px] sm:text-[14px] font-bold mb-6 text-white">Quick Links</h3>
              <ul className="lg:space-y-3 sm:space-y-2">
                <li><a href="#" className="text-gray-300 text-[14px] sm:text-[12px] lg:text-[16px] hover:text-blue-400 transition-colors duration-200">Home</a></li>
                <li><a href="#" className="text-gray-300 text-[14px] sm:text-[12px] lg:text-[16px] hover:text-blue-400 transition-colors duration-200">Pricing Plans</a></li>
                <li><a href="#" className="text-gray-300 text-[14px] sm:text-[12px] lg:text-[16px] hover:text-blue-400 transition-colors duration-200">Features</a></li>
                <li><a href="#" className="text-gray-300 text-[14px] sm:text-[12px] lg:text-[16px] hover:text-blue-400 transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-gray-300 text-[14px] sm:text-[12px] lg:text-[16px] hover:text-blue-400 transition-colors duration-200">Contact Us</a></li>
              </ul>
            </div>

            <div className="md:ml-0 lg:ml-10">
              <h3 className="lg:text-[18px] sm:text-[14px] font-bold mb-6 text-white">Support</h3>
              <ul className="lg:space-y-3 sm:space-y-2">
                <li><a href="#" className="text-gray-300 text-[14px] sm:text-[12px] lg:text-[16px] hover:text-blue-400 transition-colors duration-200">FAQs</a></li>
                <li><a href="#" className="text-gray-300 text-[14px] sm:text-[12px] lg:text-[16px] hover:text-blue-400 transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="text-gray-300 text-[14px] sm:text-[12px] lg:text-[16px] hover:text-blue-400 transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 text-[14px] sm:text-[12px] lg:text-[16px] hover:text-blue-400 transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="lg:text-[18px] sm:text-[14px] font-bold mb-6 text-white">Join a Newsletter</h3>
            
            <div className="relative">
              <div className="flex items-center bg-slate-800/90 border border-slate-600/50 rounded-full p-1 backdrop-blur-sm">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 pl-3 pr-2  lg:py-3 sm:py-2  bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
                />
                <button className="px-4 py-2 sm:px-5 sm:py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-[#013152] to-[#0EA6E2] hover:from-[#0EA6E2] hover:to-[#0EA6E2] text-white font-semibold rounded-full transition-all duration-300 text-xs sm:text-sm lg:text-base shadow-lg hover:shadow-blue-500/25 hover:scale-105 
                    whitespace-nowrap">
                   Subscribe
                </button>

              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
         <p className="text-gray-300 text-[12px] sm:text-[10px] lg:text-[14px]">
            © 2024  Orie webs. All rights reserved.
          </p>
          <p className="text-gray-300 text-[12px] sm:text-[10px] lg:text-[14px]">
            +94 78 356 9490
          </p>
        </div>
      </div>
    </footer>
  );
}
