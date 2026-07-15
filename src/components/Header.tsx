"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-base/85 backdrop-blur-lg shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="text-[20px] font-bold tracking-tighter text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
        >
          Anvil.
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {['Services', 'Case Studies', 'About'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded px-2 py-1"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link 
            href="#contact" 
            className="bg-accent-primary text-bg-base font-semibold text-[15px] px-6 h-[44px] rounded-lg hover:bg-accent-hover transition-all flex items-center justify-center shadow-[0_0_15px_rgba(209,250,229,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base cursor-pointer"
          >
            상담 신청
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-primary p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg-elevated border-b border-border-subtle absolute top-[72px] left-0 w-full flex flex-col px-6 py-6 gap-6 shadow-xl">
          {['Services', 'Case Studies', 'About'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-[16px] font-medium text-text-primary min-h-[44px] flex items-center"
            >
              {item}
            </Link>
          ))}
          <Link 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="mt-2 bg-accent-primary text-bg-base font-semibold text-[16px] text-center h-[52px] flex items-center justify-center rounded-lg shadow-sm"
          >
            상담 신청
          </Link>
        </div>
      )}
    </header>
  );
}
