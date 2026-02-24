// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              FM
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">
                About
              </Link>
              <Link href="#skills" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">
                Skills
              </Link>
              <Link href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">
                Projects
              </Link>
              <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md">
              About
            </Link>
            <Link href="#skills" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md">
              Skills
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
