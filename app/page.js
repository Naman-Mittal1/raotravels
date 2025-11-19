'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLocation, setActiveLocation] = useState('jaipur');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Premium Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-2xl shadow-[0_2px_40px_rgba(0,0,0,0.08)]' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C9A961] to-[#B8954A] rounded-sm flex items-center justify-center shadow-lg">
                  <span className="font-serif text-2xl font-bold text-white tracking-tight">R</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`font-serif text-2xl font-bold tracking-tight transition-colors ${
                  scrolled ? 'text-[#0B1D2E]' : 'text-white drop-shadow-lg'
                }`}>
                  Rao Travels
                </span>
                <span className={`text-[10px] tracking-[0.2em] uppercase font-medium ${
                  scrolled ? 'text-[#C9A961]' : 'text-[#E8DCC4]'
                }`}>
                  Royal Journeys
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-12">
              <a href="#services" className={`text-sm tracking-wide font-medium transition-all ${
                scrolled 
                  ? 'text-[#0B1D2E] hover:text-[#C9A961]' 
                  : 'text-white hover:text-[#E8DCC4]'
              }`}>
                Services
              </a>
              <a href="#fleet" className={`text-sm tracking-wide font-medium transition-all ${
                scrolled 
                  ? 'text-[#0B1D2E] hover:text-[#C9A961]' 
                  : 'text-white hover:text-[#E8DCC4]'
              }`}>
                Fleet
              </a>
              <a href="#locations" className={`text-sm tracking-wide font-medium transition-all ${
                scrolled 
                  ? 'text-[#0B1D2E] hover:text-[#C9A961]' 
                  : 'text-white hover:text-[#E8DCC4]'
              }`}>
                Destinations
              </a>
              <a href="#experience" className={`text-sm tracking-wide font-medium transition-all ${
                scrolled 
                  ? 'text-[#0B1D2E] hover:text-[#C9A961]' 
                  : 'text-white hover:text-[#E8DCC4]'
              }`}>
                Experience
              </a>
            </div>

            {/* CTA */}
            <div className="flex items-center space-x-6">
              <a href="tel:+911234567890" className={`hidden md:flex items-center space-x-2 text-sm font-medium ${
                scrolled ? 'text-[#0B1D2E]' : 'text-white'
              }`}>
                <span className="text-lg">📞</span>
                <span>+91 123 456 7890</span>
              </a>
              <button className="group relative px-8 py-3 bg-gradient-to-r from-[#C9A961] to-[#B8954A] text-white text-sm font-medium tracking-wide overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="relative z-10">Reserve Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#B8954A] to-[#C9A961] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Cinematic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-8 md:pt-24 md:pb-16">
        {/* Background with Banner Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <Image
              src="/assets/Banner.webp"
              alt="Rao Travels Premium Service"
              fill
              priority
              className="object-cover"
              quality={90}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D2E]/80 via-[#1A3A52]/70 to-[#0B1D2E]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto w-full">
          {/* Decorative Line */}
          <div className="flex items-center justify-center mb-6 md:mb-8 animate-fade-in" style={{animationDelay: '0.2s', opacity: 0}}>
            <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-[#C9A961]"></div>
            <div className="mx-3 md:mx-4 text-[#E8DCC4] text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase font-light whitespace-nowrap">Premium Transfers</div>
            <div className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-[#C9A961]"></div>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 leading-[1.05] tracking-tight px-4 animate-fade-in-up" style={{animationDelay: '0.4s', opacity: 0}}>
            Journey in
            <span className="block mt-1 md:mt-2 bg-gradient-to-r from-[#E8DCC4] via-[#C9A961] to-[#E8DCC4] bg-clip-text text-transparent">
              Grandeur
            </span>
          </h1>

          <p className="font-display text-base sm:text-lg md:text-xl lg:text-2xl text-[#E8DCC4] mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4 animate-fade-in" style={{animationDelay: '0.6s', opacity: 0}}>
            Experience the epitome of luxury travel through Rajasthan's royal cities
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16 px-4 animate-fade-in-up" style={{animationDelay: '0.8s', opacity: 0}}>
            <button className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-[#C9A961] to-[#B8954A] text-white text-sm sm:text-base font-medium tracking-wide overflow-hidden rounded-sm shadow-2xl hover:shadow-[0_20px_60px_rgba(201,169,97,0.4)] transition-all duration-500 transform hover:scale-105 w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center">
                Reserve Your Journey
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-transparent border-2 border-white/40 text-white text-sm sm:text-base font-medium tracking-wide backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300 rounded-sm w-full sm:w-auto">
              View Our Fleet
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto pt-8 md:pt-12 border-t border-white/20 px-4 animate-fade-in" style={{animationDelay: '1s', opacity: 0}}>
            <div className="text-center">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#C9A961] mb-1 md:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-white/70 tracking-wide uppercase font-light">Service</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#C9A961] mb-1 md:mb-2">10K+</div>
              <div className="text-xs sm:text-sm text-white/70 tracking-wide uppercase font-light">Guests</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#C9A961] mb-1 md:mb-2">50+</div>
              <div className="text-xs sm:text-sm text-white/70 tracking-wide uppercase font-light">Vehicles</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#C9A961] mb-1 md:mb-2">4.9★</div>
              <div className="text-xs sm:text-sm text-white/70 tracking-wide uppercase font-light">Rating</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-float hidden md:block">
          <div className="flex flex-col items-center space-y-2 text-white/60">
            <span className="text-[10px] tracking-[0.2em] uppercase font-light">Scroll</span>
            <div className="w-px h-12 md:h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Services Section - Premium Grid */}
      <section id="services" className="py-16 md:py-32 relative overflow-hidden">
        {/* Premium Background - Elegant Gold Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDF9F3] via-white to-[#FEFBF7]"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #C9A961 35px, #C9A961 36px)`,
          }}></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent"></div>
        <div className="absolute top-20 left-1/4 w-px h-32 bg-gradient-to-b from-[#C9A961]/20 to-transparent hidden md:block"></div>
        <div className="absolute bottom-20 right-1/4 w-px h-32 bg-gradient-to-t from-[#C9A961]/20 to-transparent hidden md:block"></div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent"></div>
              <span className="mx-4 md:mx-6 text-[#C9A961] text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase font-medium">Our Services</span>
              <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-[#C9A961] to-transparent"></div>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0B1D2E] mb-4 md:mb-6 leading-tight tracking-tight px-4">
              Curated <span className="text-[#C9A961]">Experiences</span>
            </h2>
            <p className="font-display text-base md:text-xl text-gray-600 leading-relaxed px-4">
              Tailored transportation solutions for the discerning traveler
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1 */}
            <div className="group relative bg-white rounded-xl md:rounded-2xl overflow-hidden hover:shadow-[0_25px_80px_rgba(201,169,97,0.2)] transition-all duration-700 transform hover:-translate-y-2 md:hover:-translate-y-4 border border-[#F5F1E8]">
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-[#C9A961] via-[#E8DCC4] to-[#C9A961]"></div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A961]/0 via-[#C9A961]/0 to-[#C9A961]/0 group-hover:from-[#C9A961]/5 group-hover:via-[#C9A961]/3 group-hover:to-[#C9A961]/5 transition-all duration-700"></div>
              
              <div className="relative p-6 md:p-10">
                {/* Icon Container */}
                <div className="relative mb-6 md:mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A961]/20 to-[#E8DCC4]/20 rounded-xl md:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#C9A961]/10 to-[#E8DCC4]/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-[#C9A961]/20 group-hover:scale-110 group-hover:border-[#C9A961]/40 transition-all duration-700 shadow-lg">
                    <span className="text-3xl md:text-4xl">✈️</span>
                  </div>
                </div>
                
                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0B1D2E] mb-3 md:mb-4 group-hover:text-[#C9A961] transition-colors duration-300">Airport Transfers</h3>
                <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-[15px]">
                  Seamless arrivals and departures at Jaipur International and Udaipur Maharana Pratap Airport with complimentary meet & greet.
                </p>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start text-xs md:text-sm text-gray-700">
                    <span className="text-[#C9A961] mr-2 md:mr-3 mt-0.5 text-lg md:text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Real-time flight tracking</span>
                  </li>
                  <li className="flex items-start text-xs md:text-sm text-gray-700">
                    <span className="text-[#C9A961] mr-2 md:mr-3 mt-0.5 text-lg md:text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Personalized name board</span>
                  </li>
                  <li className="flex items-start text-xs md:text-sm text-gray-700">
                    <span className="text-[#C9A961] mr-2 md:mr-3 mt-0.5 text-lg md:text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Porter assistance included</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-[0_25px_80px_rgba(212,165,165,0.2)] transition-all duration-700 transform hover:-translate-y-4 border border-[#F5EDED]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4A5A5] via-[#E8C5C5] to-[#D4A5A5]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/0 via-[#D4A5A5]/0 to-[#D4A5A5]/0 group-hover:from-[#D4A5A5]/5 group-hover:via-[#D4A5A5]/3 group-hover:to-[#D4A5A5]/5 transition-all duration-700"></div>
              <div className="relative p-10">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/20 to-[#E8C5C5]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#D4A5A5]/10 to-[#E8C5C5]/10 rounded-2xl flex items-center justify-center border border-[#D4A5A5]/20 group-hover:scale-110 group-hover:border-[#D4A5A5]/40 transition-all duration-700 shadow-lg">
                    <span className="text-4xl">🚂</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0B1D2E] mb-4 group-hover:text-[#D4A5A5] transition-colors duration-300">Railway Concierge</h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                  Premium pickups from Jaipur Junction and Udaipur City Station. Platform-side service for your convenience.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-[#D4A5A5] mr-3 mt-0.5 text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Platform-side pickup</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-[#D4A5A5] mr-3 mt-0.5 text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Train delay monitoring</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-[#D4A5A5] mr-3 mt-0.5 text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Refreshments on board</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-[0_25px_80px_rgba(212,165,165,0.2)] transition-all duration-700 transform hover:-translate-y-4 border border-[#F5EDED]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4A5A5] via-[#E8C5C5] to-[#D4A5A5]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/0 via-[#D4A5A5]/0 to-[#D4A5A5]/0 group-hover:from-[#D4A5A5]/5 group-hover:via-[#D4A5A5]/3 group-hover:to-[#D4A5A5]/5 transition-all duration-700"></div>
              <div className="relative p-10">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/20 to-[#E8C5C5]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#D4A5A5]/10 to-[#E8C5C5]/10 rounded-2xl flex items-center justify-center border border-[#D4A5A5]/20 group-hover:scale-110 group-hover:border-[#D4A5A5]/40 transition-all duration-700 shadow-lg">
                    <span className="text-4xl">🏰</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0B1D2E] mb-4 group-hover:text-[#D4A5A5] transition-colors duration-300">Heritage Tours</h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                  Bespoke cultural journeys through Rajasthan's magnificent palaces, forts, and hidden gems.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-[#D4A5A5] mr-3 mt-0.5 text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Certified heritage guides</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-[#D4A5A5] mr-3 mt-0.5 text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Skip-the-line access</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-[#D4A5A5] mr-3 mt-0.5 text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Custom itineraries</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-[0_25px_80px_rgba(212,165,165,0.2)] transition-all duration-700 transform hover:-translate-y-4 border border-[#F5EDED]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4A5A5] via-[#E8C5C5] to-[#D4A5A5]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/0 via-[#D4A5A5]/0 to-[#D4A5A5]/0 group-hover:from-[#D4A5A5]/5 group-hover:via-[#D4A5A5]/3 group-hover:to-[#D4A5A5]/5 transition-all duration-700"></div>
              <div className="relative p-10">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/20 to-[#E8C5C5]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#D4A5A5]/10 to-[#E8C5C5]/10 rounded-2xl flex items-center justify-center border border-[#D4A5A5]/20 group-hover:scale-110 group-hover:border-[#D4A5A5]/40 transition-all duration-700 shadow-lg">
                    <span className="text-4xl">💼</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0B1D2E] mb-4 group-hover:text-[#D4A5A5] transition-colors duration-300">Executive Services</h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                  Professional transportation for business travelers with productivity-focused amenities.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-[#D4A5A5] mr-3 mt-0.5 text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Mobile office setup</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-[#D4A5A5] mr-3 mt-0.5 text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Corporate billing</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-[#D4A5A5] mr-3 mt-0.5 text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Multi-city packages</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 5 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-[0_25px_80px_rgba(212,165,165,0.2)] transition-all duration-700 transform hover:-translate-y-4 border border-[#F5EDED]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4A5A5] via-[#E8C5C5] to-[#D4A5A5]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/0 via-[#D4A5A5]/0 to-[#D4A5A5]/0 group-hover:from-[#D4A5A5]/5 group-hover:via-[#D4A5A5]/3 group-hover:to-[#D4A5A5]/5 transition-all duration-700"></div>
              <div className="relative p-10">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/20 to-[#E8C5C5]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#D4A5A5]/10 to-[#E8C5C5]/10 rounded-2xl flex items-center justify-center border border-[#D4A5A5]/20 group-hover:scale-110 group-hover:border-[#D4A5A5]/40 transition-all duration-700 shadow-lg">
                    <span className="text-4xl">💍</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0B1D2E] mb-4 group-hover:text-[#D4A5A5] transition-colors duration-300">Special Occasions</h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                  Celebrate life's precious moments with our decorated luxury vehicles and white-glove service.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-[#D4A5A5] mr-3 mt-0.5 text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Floral decorations</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-[#D4A5A5] mr-3 mt-0.5 text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Champagne service</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-[#D4A5A5] mr-3 mt-0.5 text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Photography assistance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 6 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-[0_25px_80px_rgba(212,165,165,0.2)] transition-all duration-700 transform hover:-translate-y-4 border border-[#F5EDED]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4A5A5] via-[#E8C5C5] to-[#D4A5A5]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/0 via-[#D4A5A5]/0 to-[#D4A5A5]/0 group-hover:from-[#D4A5A5]/5 group-hover:via-[#D4A5A5]/3 group-hover:to-[#D4A5A5]/5 transition-all duration-700"></div>
              <div className="relative p-10">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/20 to-[#E8C5C5]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#D4A5A5]/10 to-[#E8C5C5]/10 rounded-2xl flex items-center justify-center border border-[#D4A5A5]/20 group-hover:scale-110 group-hover:border-[#D4A5A5]/40 transition-all duration-700 shadow-lg">
                    <span className="text-4xl">🛣️</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0B1D2E] mb-4 group-hover:text-[#D4A5A5] transition-colors duration-300">Intercity Journeys</h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                  Comfortable long-distance travel between Rajasthan's cities with scenic routes and rest stops.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-[#D4A5A5] mr-3 mt-0.5 text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Flexible routing</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-[#D4A5A5] mr-3 mt-0.5 text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Curated rest stops</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-[#D4A5A5] mr-3 mt-0.5 text-xl font-bold">✓</span>
                    <span className="leading-relaxed">Refreshment packages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section - Luxury Showcase */}
      <section id="fleet" className="py-32 bg-[#0B1D2E] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="h-[1px] w-12 bg-[#C9A961]"></div>
              <span className="mx-4 text-[#C9A961] text-xs tracking-[0.3em] uppercase font-medium">Our Fleet</span>
              <div className="h-[1px] w-12 bg-[#C9A961]"></div>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              The Finest <span className="text-[#C9A961]">Automobiles</span>
            </h2>
            <p className="font-display text-xl text-gray-400 leading-relaxed">
              Meticulously maintained vehicles that define luxury and comfort
            </p>
          </div>

          {/* Fleet Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Vehicle 1 */}
            <div className="group relative bg-[#1A3A52] rounded-none overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/assets/sedan.avif"
                  alt="Luxury Sedan"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A52] via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#D4A5A5] px-4 py-1.5 text-xs tracking-wide uppercase font-medium shadow-lg">
                  Premium
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-3xl font-bold mb-2">Luxury Sedan</h3>
                <p className="text-gray-400 text-sm mb-6">Perfect for business and couples</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <span className="w-6">👥</span>
                    <span>Up to 3 passengers</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <span className="w-6">🧳</span>
                    <span>3 large suitcases</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <span className="w-6">⚡</span>
                    <span>WiFi, Climate control, Entertainment</span>
                  </div>
                </div>

                <div className="flex items-end justify-between pt-6 border-t border-white/10">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Starting from</div>
                    <div className="font-serif text-4xl font-bold text-[#C9A961]">₹2,500</div>
                  </div>
                  <button className="text-sm text-[#C9A961] hover:text-white transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>

            {/* Vehicle 2 */}
            <div className="group relative bg-[#1A3A52] rounded-none overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/assets/fortuner.avif"
                  alt="Luxury SUV"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A52] via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#D4A5A5] px-4 py-1.5 text-xs tracking-wide uppercase font-medium shadow-lg">
                  Popular
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-3xl font-bold mb-2">Luxury SUV</h3>
                <p className="text-gray-400 text-sm mb-6">Spacious comfort for families</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <span className="w-6">👥</span>
                    <span>Up to 6 passengers</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <span className="w-6">🧳</span>
                    <span>5 large suitcases</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <span className="w-6">⚡</span>
                    <span>Dual AC, Premium audio, Sunroof</span>
                  </div>
                </div>

                <div className="flex items-end justify-between pt-6 border-t border-white/10">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Starting from</div>
                    <div className="font-serif text-4xl font-bold text-[#C9A961]">₹3,500</div>
                  </div>
                  <button className="text-sm text-[#C9A961] hover:text-white transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>

            {/* Vehicle 3 */}
            <div className="group relative bg-[#1A3A52] rounded-none overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/assets/toyota_hiace.avif"
                  alt="Executive Van"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A52] via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#D4A5A5] px-4 py-1.5 text-xs tracking-wide uppercase font-medium shadow-lg">
                  Groups
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-3xl font-bold mb-2">Executive Van</h3>
                <p className="text-gray-400 text-sm mb-6">Ideal for large groups</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <span className="w-6">👥</span>
                    <span>Up to 10 passengers</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <span className="w-6">🧳</span>
                    <span>8 large suitcases</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <span className="w-6">⚡</span>
                    <span>WiFi, Refreshments, Premium seating</span>
                  </div>
                </div>

                <div className="flex items-end justify-between pt-6 border-t border-white/10">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Starting from</div>
                    <div className="font-serif text-4xl font-bold text-[#C9A961]">₹5,000</div>
                  </div>
                  <button className="text-sm text-[#C9A961] hover:text-white transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Fleet Features */}
          <div className="grid md:grid-cols-4 gap-8 pt-16 border-t border-white/10">
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="font-serif text-lg font-semibold mb-2">Fully Insured</h4>
              <p className="text-sm text-gray-400">Comprehensive coverage</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h4 className="font-serif text-lg font-semibold mb-2">Sanitized</h4>
              <p className="text-sm text-gray-400">Deep cleaned daily</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍✈️</div>
              <h4 className="font-serif text-lg font-semibold mb-2">Expert Chauffeurs</h4>
              <p className="text-sm text-gray-400">Trained professionals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <h4 className="font-serif text-lg font-semibold mb-2">Live Tracking</h4>
              <p className="text-sm text-gray-400">Real-time GPS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-[1px] w-12 bg-[#C9A961]"></div>
              <span className="mx-4 text-[#C9A961] text-xs tracking-[0.3em] uppercase font-medium">Destinations</span>
              <div className="h-[1px] w-12 bg-[#C9A961]"></div>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#0B1D2E] mb-6 leading-tight tracking-tight">
              Royal <span className="text-[#C9A961]">Cities</span>
            </h2>
            <p className="font-display text-xl text-gray-600 leading-relaxed">
              Gateway to Rajasthan's most enchanting destinations
            </p>
          </div>

          {/* Location Tabs */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-[#F5F1E8] p-1.5">
              <button
                onClick={() => setActiveLocation('jaipur')}
                className={`px-12 py-4 font-medium text-sm tracking-wide transition-all duration-300 ${
                  activeLocation === 'jaipur'
                    ? 'bg-[#0B1D2E] text-white'
                    : 'text-[#0B1D2E] hover:bg-white/50'
                }`}
              >
                Jaipur
              </button>
              <button
                onClick={() => setActiveLocation('udaipur')}
                className={`px-12 py-4 font-medium text-sm tracking-wide transition-all duration-300 ${
                  activeLocation === 'udaipur'
                    ? 'bg-[#0B1D2E] text-white'
                    : 'text-[#0B1D2E] hover:bg-white/50'
                }`}
              >
                Udaipur
              </button>
            </div>
          </div>

          {/* Jaipur Content */}
          {activeLocation === 'jaipur' && (
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-5xl font-bold text-[#0B1D2E] mb-4">The Pink City</h3>
                  <p className="font-display text-xl text-gray-600 leading-relaxed">
                    Jaipur, the capital of Rajasthan, welcomes you with its vibrant culture, 
                    magnificent palaces, and warm hospitality. Our premium services ensure your 
                    journey through this royal city is as memorable as its heritage.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-[#F5F1E8] p-6">
                    <div className="text-3xl mb-3">✈️</div>
                    <h4 className="font-serif text-xl font-bold text-[#0B1D2E] mb-2">Jaipur International Airport</h4>
                    <p className="text-sm text-gray-600 mb-1">Sanganer, 13 km from city center</p>
                    <p className="text-xs text-[#C9A961] font-medium">15-20 minutes drive</p>
                  </div>
                  <div className="bg-[#F5F1E8] p-6">
                    <div className="text-3xl mb-3">🚂</div>
                    <h4 className="font-serif text-xl font-bold text-[#0B1D2E] mb-2">Jaipur Junction</h4>
                    <p className="text-sm text-gray-600 mb-1">Station Road, City Center</p>
                    <p className="text-xs text-[#C9A961] font-medium">Central location</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-2xl font-semibold text-[#0B1D2E] mb-4">Notable Destinations</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 bg-[#F5F1E8] text-sm text-[#0B1D2E] font-medium">Hawa Mahal</span>
                    <span className="px-5 py-2.5 bg-[#F5F1E8] text-sm text-[#0B1D2E] font-medium">City Palace</span>
                    <span className="px-5 py-2.5 bg-[#F5F1E8] text-sm text-[#0B1D2E] font-medium">Amber Fort</span>
                    <span className="px-5 py-2.5 bg-[#F5F1E8] text-sm text-[#0B1D2E] font-medium">Jantar Mantar</span>
                    <span className="px-5 py-2.5 bg-[#F5F1E8] text-sm text-[#0B1D2E] font-medium">Nahargarh Fort</span>
                    <span className="px-5 py-2.5 bg-[#F5F1E8] text-sm text-[#0B1D2E] font-medium">Jal Mahal</span>
                  </div>
                </div>
              </div>

              <div className="relative h-[600px] bg-gradient-to-br from-[#E8DCC4]/30 to-[#C9A961]/30">
                <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                  <div className="text-gray-500">
                    <p className="text-xl font-serif font-semibold mb-3">[ Jaipur Cityscape ]</p>
                    <p className="text-sm mb-2">Hawa Mahal or Amber Fort</p>
                    <p className="text-xs">800x600px High-quality image</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Udaipur Content */}
          {activeLocation === 'udaipur' && (
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-5xl font-bold text-[#0B1D2E] mb-4">The City of Lakes</h3>
                  <p className="font-display text-xl text-gray-600 leading-relaxed">
                    Udaipur enchants visitors with its serene lakes, romantic palaces, and timeless beauty. 
                    Experience the Venice of the East with our seamless transportation services.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-[#F5F1E8] p-6">
                    <div className="text-3xl mb-3">✈️</div>
                    <h4 className="font-serif text-xl font-bold text-[#0B1D2E] mb-2">Maharana Pratap Airport</h4>
                    <p className="text-sm text-gray-600 mb-1">Dabok, 22 km from city</p>
                    <p className="text-xs text-[#C9A961] font-medium">25-30 minutes drive</p>
                  </div>
                  <div className="bg-[#F5F1E8] p-6">
                    <div className="text-3xl mb-3">🚂</div>
                    <h4 className="font-serif text-xl font-bold text-[#0B1D2E] mb-2">Udaipur City Station</h4>
                    <p className="text-sm text-gray-600 mb-1">Near City Palace</p>
                    <p className="text-xs text-[#C9A961] font-medium">Central location</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-2xl font-semibold text-[#0B1D2E] mb-4">Notable Destinations</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 bg-[#F5F1E8] text-sm text-[#0B1D2E] font-medium">Lake Pichola</span>
                    <span className="px-5 py-2.5 bg-[#F5F1E8] text-sm text-[#0B1D2E] font-medium">City Palace</span>
                    <span className="px-5 py-2.5 bg-[#F5F1E8] text-sm text-[#0B1D2E] font-medium">Jag Mandir</span>
                    <span className="px-5 py-2.5 bg-[#F5F1E8] text-sm text-[#0B1D2E] font-medium">Sajjangarh Fort</span>
                    <span className="px-5 py-2.5 bg-[#F5F1E8] text-sm text-[#0B1D2E] font-medium">Jagdish Temple</span>
                    <span className="px-5 py-2.5 bg-[#F5F1E8] text-sm text-[#0B1D2E] font-medium">Fateh Sagar</span>
                  </div>
                </div>
              </div>

              <div className="relative h-[600px] bg-gradient-to-br from-[#E8DCC4]/30 to-[#C9A961]/30">
                <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                  <div className="text-gray-500">
                    <p className="text-xl font-serif font-semibold mb-3">[ Udaipur Cityscape ]</p>
                    <p className="text-sm mb-2">Lake Pichola or City Palace</p>
                    <p className="text-xs">800x600px High-quality image</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-[#F5F1E8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[700px] bg-gradient-to-br from-[#C9A961]/20 to-[#0B1D2E]/20">
              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <div className="text-gray-500">
                  <p className="text-xl font-serif font-semibold mb-3">[ Premium Service Image ]</p>
                  <p className="text-sm mb-2">Professional chauffeur with luxury vehicle</p>
                  <p className="text-xs">600x900px Portrait orientation</p>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-2xl">
                <div className="flex items-center space-x-6">
                  <div className="text-6xl">🏆</div>
                  <div>
                    <div className="font-serif text-4xl font-bold text-[#C9A961]">10+</div>
                    <div className="text-sm text-gray-600 mt-1">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <div className="flex items-center mb-6">
                  <div className="h-[1px] w-12 bg-[#C9A961]"></div>
                  <span className="ml-4 text-[#C9A961] text-xs tracking-[0.3em] uppercase font-medium">Why Choose Us</span>
                </div>
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#0B1D2E] mb-6 leading-tight">
                  Experience the <span className="text-[#C9A961]">Rao Difference</span>
                </h2>
                <p className="font-display text-xl text-gray-600 leading-relaxed">
                  More than a journey, we deliver an experience that reflects 
                  the royal heritage and warm hospitality of Rajasthan.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#0B1D2E] rounded-full flex items-center justify-center group-hover:bg-[#C9A961] transition-colors duration-300">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#0B1D2E] mb-2">Punctuality Assured</h3>
                    <p className="text-gray-600 leading-relaxed">Your time is precious. Our chauffeurs arrive 15 minutes early, ensuring you're never kept waiting.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#0B1D2E] rounded-full flex items-center justify-center group-hover:bg-[#C9A961] transition-colors duration-300">
                    <span className="text-2xl">💎</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#0B1D2E] mb-2">Uncompromising Luxury</h3>
                    <p className="text-gray-600 leading-relaxed">Premium vehicles with leather interiors, climate control, and modern amenities for your comfort.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#0B1D2E] rounded-full flex items-center justify-center group-hover:bg-[#C9A961] transition-colors duration-300">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#0B1D2E] mb-2">Multilingual Service</h3>
                    <p className="text-gray-600 leading-relaxed">Fluent in English, Hindi, and regional languages. Cultural insights and local knowledge included.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#0B1D2E] rounded-full flex items-center justify-center group-hover:bg-[#C9A961] transition-colors duration-300">
                    <span className="text-2xl">💳</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#0B1D2E] mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600 leading-relaxed">No hidden fees or surprise charges. What you see is exactly what you pay.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="h-[1px] w-12 bg-[#C9A961]"></div>
              <span className="mx-4 text-[#C9A961] text-xs tracking-[0.3em] uppercase font-medium">Testimonials</span>
              <div className="h-[1px] w-12 bg-[#C9A961]"></div>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#0B1D2E] mb-6 leading-tight">
              Traveler <span className="text-[#C9A961]">Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#F5F1E8] p-10">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#C9A961] text-xl">★</span>
                ))}
              </div>
              <p className="font-display text-lg text-gray-700 leading-relaxed mb-8 italic">
                "Exceptional service from arrival to departure. The Mercedes was immaculate, 
                and our driver was knowledgeable about Jaipur's history. Highly recommended."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#C9A961] to-[#B8954A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JM
                </div>
                <div>
                  <div className="font-serif font-bold text-[#0B1D2E]">James Mitchell</div>
                  <div className="text-sm text-gray-500">London, United Kingdom</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#F5F1E8] p-10">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#C9A961] text-xl">★</span>
                ))}
              </div>
              <p className="font-display text-lg text-gray-700 leading-relaxed mb-8 italic">
                "The SUV was perfect for our family. Spacious, comfortable, and the driver 
                helped us discover hidden gems in Udaipur. Worth every rupee."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#C9A961] to-[#B8954A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  SP
                </div>
                <div>
                  <div className="font-serif font-bold text-[#0B1D2E]">Sophia Patel</div>
                  <div className="text-sm text-gray-500">Mumbai, India</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#F5F1E8] p-10">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#C9A961] text-xl">★</span>
                ))}
              </div>
              <p className="font-display text-lg text-gray-700 leading-relaxed mb-8 italic">
                "Professional corporate service. Punctual, comfortable, and seamless billing. 
                Our go-to for business travel in Rajasthan."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#C9A961] to-[#B8954A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  RK
                </div>
                <div>
                  <div className="font-serif font-bold text-[#0B1D2E]">Rajesh Kumar</div>
                  <div className="text-sm text-gray-500">Bangalore, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-20 flex flex-wrap justify-center items-center gap-16 opacity-40">
            <div className="text-center">
              <div className="text-4xl mb-2">✓</div>
              <p className="text-xs font-medium text-gray-600 tracking-wide">Government Approved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌐</div>
              <p className="text-xs font-medium text-gray-600 tracking-wide">TripAdvisor Certified</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🛡️</div>
              <p className="text-xs font-medium text-gray-600 tracking-wide">100% Secure</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⭐</div>
              <p className="text-xs font-medium text-gray-600 tracking-wide">4.9/5 Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#0B1D2E] via-[#1A3A52] to-[#0B1D2E] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A961]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C9A961]/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="h-[1px] w-16 bg-[#C9A961]"></div>
            <span className="mx-4 text-[#C9A961] text-xs tracking-[0.3em] uppercase font-medium">Book Now</span>
            <div className="h-[1px] w-16 bg-[#C9A961]"></div>
          </div>

          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Begin Your Royal Journey
          </h2>
          
          <p className="font-display text-2xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
            Available 24/7, 365 days a year. Your luxury experience awaits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <button className="group px-12 py-6 bg-gradient-to-r from-[#C9A961] to-[#B8954A] text-white font-medium tracking-wide rounded-sm shadow-2xl hover:shadow-[0_20px_60px_rgba(201,169,97,0.5)] transition-all duration-500 transform hover:scale-105">
              <span className="flex items-center">
                Reserve Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <a href="tel:+911234567890" className="px-12 py-6 bg-transparent border-2 border-white/40 text-white font-medium tracking-wide backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300 rounded-sm">
              📞 Call Us
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-serif text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-400">Quick response guaranteed</p>
            </div>
            <div>
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-serif text-lg font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-400">info@raotravels.com</p>
            </div>
            <div>
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="font-serif text-lg font-semibold mb-2">24/7 Service</h3>
              <p className="text-sm text-gray-400">Always available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1D2E] text-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Company */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C9A961] to-[#B8954A] rounded-sm flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold text-white">R</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold">Rao Travels</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A961]">Royal Journeys</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Your trusted partner for premium transportation in Rajasthan since 2013. 
                Serving travelers with luxury, reliability, and exceptional service.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-11 h-11 bg-white/5 hover:bg-[#C9A961] rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="w-11 h-11 bg-white/5 hover:bg-[#C9A961] rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-sm">𝕏</span>
                </a>
                <a href="#" className="w-11 h-11 bg-white/5 hover:bg-[#C9A961] rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="w-11 h-11 bg-white/5 hover:bg-[#C9A961] rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-sm">📷</span>
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-serif text-lg font-bold mb-6 text-[#C9A961]">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-400 hover:text-[#C9A961] transition-colors text-sm">Services</a></li>
                <li><a href="#fleet" className="text-gray-400 hover:text-[#C9A961] transition-colors text-sm">Fleet</a></li>
                <li><a href="#locations" className="text-gray-400 hover:text-[#C9A961] transition-colors text-sm">Locations</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-[#C9A961] transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-serif text-lg font-bold mb-6 text-[#C9A961]">Contact</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5">📍</span>
                  <span>MI Road, Jaipur<br/>Rajasthan 302001</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📞</span>
                  <span>+91 123 456 7890</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📧</span>
                  <span>info@raotravels.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Rao Travels. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm text-gray-500">
              <a href="#" className="hover:text-[#C9A961] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#C9A961] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#C9A961] transition-colors">Cancellation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
