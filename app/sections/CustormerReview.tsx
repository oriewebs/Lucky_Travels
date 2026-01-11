'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Travel Blogger',
    avatar: '/images/avatar-1.jpg',
    rating: 5,
    date: 'December 2025',
    comment: 'An absolutely magical experience! The village exceeded all expectations. The authentic culture, stunning landscapes, and warm hospitality made our stay unforgettable. We felt truly connected to nature and the local community.',
    location: 'New York, USA'
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Photographer',
    avatar: '/images/avatar-2.jpg',
    rating: 5,
    date: 'November 2025',
    comment: 'As a photographer, I was blown away by the natural beauty. Every corner offered a perfect shot. The sunrise over the lake and the traditional architecture provided endless inspiration.',
    location: 'Singapore'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Family Traveler',
    avatar: '/images/avatar-3.jpg',
    rating: 5,
    date: 'October 2025',
    comment: 'Perfect family destination! The kids loved exploring the nature trails and learning about local traditions. Safe, peaceful, and educational. We will definitely return next year.',
    location: 'Madrid, Spain'
  },
  {
    id: 4,
    name: 'Michael Kumar',
    role: 'Wellness Enthusiast',
    avatar: '/images/avatar-4.jpg',
    rating: 5,
    date: 'September 2025',
    comment: 'The tranquility here is unmatched. Perfect for digital detox and reconnecting with yourself. The fresh air, peaceful environment, and meditation spots helped me find my inner peace.',
    location: 'Mumbai, India'
  },
  {
    id: 5,
    name: 'Sophie Laurent',
    role: 'Cultural Explorer',
    avatar: '/images/avatar-5.jpg',
    rating: 5,
    date: 'August 2025',
    comment: 'Rich cultural heritage beautifully preserved. The local festivals, traditional cuisine, and artisan workshops were highlights. The community\'s pride in their culture is inspiring.',
    location: 'Paris, France'
  },
  {
    id: 6,
    name: 'David Thompson',
    role: 'Adventure Seeker',
    avatar: '/images/avatar-6.jpg',
    rating: 5,
    date: 'July 2025',
    comment: 'Great balance of adventure and relaxation. Hiking trails, water activities, and cultural experiences all in one place. The guides were knowledgeable and friendly.',
    location: 'Sydney, Australia'
  }
];

export default function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reveiw" className="relative bg-gradient-to-br from-stone-50 py-24 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-amber-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-600 font-medium mb-4">
            <div className="w-8 h-px bg-emerald-600"></div>
            <span className="text-sm tracking-widest uppercase">Testimonials</span>
            <div className="w-8 h-px bg-emerald-600"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-4">
            What Our Visitors Say
          </h2>
          
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from travelers who&apos;ve experienced the magic firsthand.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-4xl font-bold text-emerald-700 mb-2">5.0</div>
            <div className="text-stone-600 text-sm">Average Rating</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-4xl font-bold text-emerald-700 mb-2">2.5K+</div>
            <div className="text-stone-600 text-sm">Happy Reviews</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-4xl font-bold text-emerald-700 mb-2">98%</div>
            <div className="text-stone-600 text-sm">Would Return</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-4xl font-bold text-emerald-700 mb-2">45+</div>
            <div className="text-stone-600 text-sm">Countries</div>
          </div>
        </div>

        {/* Main Review Carousel */}
        <div className="relative">
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-emerald-100 shadow-2xl shadow-emerald-900/10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Avatar Section */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500 shadow-xl">
                    <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-4xl font-bold">
                      {reviews[activeIndex].name.charAt(0)}
                    </div>
                  </div>
                  {/* Quote icon */}
                  <div className="absolute -bottom-2 -right-2 bg-emerald-600 rounded-full p-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <div className="flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-stone-700 text-lg leading-relaxed mb-6">
                  &quot;{reviews[activeIndex].comment}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="text-stone-900 font-bold text-xl mb-1">
                      {reviews[activeIndex].name}
                    </h4>
                    <p className="text-emerald-600 text-sm font-medium mb-1">
                      {reviews[activeIndex].role}
                    </p>
                    <div className="flex items-center gap-2 text-stone-500 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>{reviews[activeIndex].location}</span>
                      <span className="mx-2">•</span>
                      <span>{reviews[activeIndex].date}</span>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-3">
                    <button
                      onClick={prevReview}
                      className="w-12 h-12 rounded-full bg-stone-100 hover:bg-emerald-500 hover:text-white border border-stone-200 flex items-center justify-center transition-all duration-300 group text-stone-700"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextReview}
                      className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-all duration-300 group shadow-lg shadow-emerald-600/30"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex gap-2 mt-8 justify-center">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-emerald-600'
                      : 'w-2 bg-stone-300 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Grid - More Reviews */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, index) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => setActiveIndex(index)}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-stone-700 text-sm mb-4 line-clamp-3">
                &quot;{review.comment}&quot;
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h5 className="text-stone-900 font-semibold text-sm">{review.name}</h5>
                  <p className="text-stone-500 text-xs">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-emerald-600/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
            Share Your Experience
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}