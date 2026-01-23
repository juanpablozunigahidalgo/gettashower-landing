'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/invest', label: 'Invest' },
    { href: '/vision', label: 'Vision' },
    { href: '/joinus', label: 'Join Us' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Logo.svg"
              alt="GettaShower Logo"
              width={36}
              height={36}
              className="w-9 h-9"
            />
            <span className="text-3xl font-bold text-[#0066FF]">GettaShower</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#0066FF] ${
                  pathname === item.href
                    ? 'text-[#0066FF]'
                    : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Prototype Button */}
            <Link
              href="/prototype"
              className="bg-[#0066FF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0052CC] transition-colors"
            >
              Prototype
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-[#0066FF]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}