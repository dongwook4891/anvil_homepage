"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-base/85 backdrop-blur-lg shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
        

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
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsMoreMenuOpen((isOpen) => !isOpen)}
              aria-expanded={isMoreMenuOpen}
              aria-haspopup="menu"
              className="flex items-center gap-1 text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded px-2 py-1"
            >
              More
              <svg
                aria-hidden="true"
                className={`w-4 h-4 transition-transform ${isMoreMenuOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {isMoreMenuOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-3 min-w-[156px] rounded-xl border border-border-subtle bg-bg-elevated p-2 shadow-xl"
              >
                <a
                  href="https://lecture.anvil.im"
                  role="menuitem"
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[14px] font-medium text-text-primary transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                >
                  Lecture
                  <svg aria-hidden="true" className="w-4 h-4 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </nav>
        
        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLScaS5m0BwB-CSQcSOK93bOveri3YivbFf-ijGmu29f5BMgmvA/viewform?usp=publish-editor"
            className="bg-accent-primary text-bg-base font-semibold text-[15px] px-6 h-[44px] rounded-lg hover:bg-accent-hover transition-all flex items-center justify-center shadow-[0_0_15px_rgba(182,255,48,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base cursor-pointer"
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
          <div>
            <button
              type="button"
              onClick={() => setIsMoreMenuOpen((isOpen) => !isOpen)}
              aria-expanded={isMoreMenuOpen}
              className="w-full min-h-[44px] flex items-center justify-between text-[16px] font-medium text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
            >
              More
              <svg
                aria-hidden="true"
                className={`w-5 h-5 transition-transform ${isMoreMenuOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {isMoreMenuOpen && (
              <a
                href="https://lecture.anvil.im"
                onClick={() => {
                  setIsMoreMenuOpen(false);
                  setIsMobileMenuOpen(false);
                }}
                className="mt-2 flex min-h-[44px] items-center rounded-lg bg-white/5 px-4 text-[15px] font-medium text-text-primary"
              >
                Lecture
              </a>
            )}
          </div>
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLScaS5m0BwB-CSQcSOK93bOveri3YivbFf-ijGmu29f5BMgmvA/viewform?usp=publish-editor"
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
