'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-[#FFFFFF] backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3" onClick={closeMobileMenu}>
            <Image
              src="/Logo.svg"
              alt="GettaShower Logo"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#1A2B70] leading-none">
              GettaShower
            </span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 sm:gap-3">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-3 py-2 sm:px-5 sm:py-2.5 bg-[#1A2B70] text-white font-bold rounded-lg sm:rounded-xl hover:bg-[#253580] transition-all shadow-lg shadow-[#fffff]/20 text-xs sm:text-sm whitespace-nowrap"
            >
              Become a Host
            </Link>
            <Link
              href="/getapp"
              className="inline-flex items-center justify-center px-3 py-2 sm:px-5 sm:py-2.5 bg-[#1A2B70] text-white font-bold rounded-lg sm:rounded-xl hover:bg-[#253580] transition-all shadow-lg shadow-[#fffff]/20 text-xs sm:text-sm whitespace-nowrap"
            >
              Get the App
            </Link>
          </div>

          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#D0D8EB] text-[#1A2B70]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden mt-3 pb-1 flex flex-col gap-2 border-t border-[#D0D8EB] pt-3">
            <Link
              href="#"
              onClick={closeMobileMenu}
              className="inline-flex items-center justify-center px-4 py-2.5 bg-[#1A2B70] text-white font-bold rounded-lg text-sm"
            >
              Become a Host
            </Link>
            <Link
              href="/getapp"
              onClick={closeMobileMenu}
              className="inline-flex items-center justify-center px-4 py-2.5 border border-[#D0D8EB] text-[#1A2B70] font-bold rounded-lg text-sm"
            >
              Get the App
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}