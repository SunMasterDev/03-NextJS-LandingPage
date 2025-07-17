'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-korean-dark">SUN.DEV</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-korean-dark hover:text-korean-pink px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#categories" className="text-korean-dark hover:text-korean-pink px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Categories
              </a>
              <a href="#products" className="text-korean-dark hover:text-korean-pink px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Products
              </a>
              <a href="#gallery" className="text-korean-dark hover:text-korean-pink px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Gallery
              </a>
              <a href="#contact" className="text-korean-dark hover:text-korean-pink px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-korean-dark hover:text-korean-pink p-2 rounded-md"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a href="#home" className="text-korean-dark hover:text-korean-pink block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#categories" className="text-korean-dark hover:text-korean-pink block px-3 py-2 rounded-md text-base font-medium">
                Categories
              </a>
              <a href="#products" className="text-korean-dark hover:text-korean-pink block px-3 py-2 rounded-md text-base font-medium">
                Products
              </a>
              <a href="#gallery" className="text-korean-dark hover:text-korean-pink block px-3 py-2 rounded-md text-base font-medium">
                Gallery
              </a>
              <a href="#contact" className="text-korean-dark hover:text-korean-pink block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 