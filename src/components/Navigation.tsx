'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-[#FFFFFF] backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Logo.svg"
              alt="GettaShower Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-3xl font-extrabold text-[#1A2B70]">GettaShower</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link href="#">
              <button className="px-6 py-3 bg-[#1A2B70] text-white font-bold rounded-xl hover:bg-[#253580] transition-all shadow-lg shadow-[#fffff]/20 text-sm">
                Become a Host
              </button>
            </Link>
            <Link href="/getapp">
              <button className="px-6 py-3 bg-[#1A2B70] text-white font-bold rounded-xl hover:bg-[#253580] transition-all shadow-lg shadow-[#fffff]/20 text-sm">
                Get the App
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}