import React from 'react';

export default function ContactUs() {
  return (
    <section id="contact" className="relative bg-white py-20 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-emerald-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-amber-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-emerald-600 font-medium mb-4">
            <div className="w-8 h-px bg-emerald-600"></div>
            <span className="text-sm tracking-widest uppercase">Get In Touch</span>
            <div className="w-8 h-px bg-emerald-600"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Contact Us
          </h2>
          
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Reach out through any of these channels.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Phone Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">Call Us</h3>
            <p className="text-stone-600 text-sm mb-3">Mon-Fri from 8am to 6pm</p>
            <a href="tel:+15551234567" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
              +1 (555) 123-4567
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">Email Us</h3>
            <p className="text-stone-600 text-sm mb-3">We&apos;ll reply within 24 hours</p>
            <a href="mailto:info@paradisevillage.com" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
              info@paradisevillage.com
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">Visit Us</h3>
            <p className="text-stone-600 text-sm mb-3">Come say hello</p>
            <p className="text-emerald-600 font-semibold">
              Paradise Village<br />
              Mountain District
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}