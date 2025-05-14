"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 transition-all duration-300",
        isScrolled ? "bg-sky-200/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wider text-black">
        <img 
              src="/images/logo.png" 
              alt="Logo Relaxx" 
              className="w-[124px] h-auto"
            />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link href="#about" className="text-black hover:text-black/70">About</Link></li>
            <li><Link href="/services" className="text-black hover:text-black/70">Services</Link></li>
            <li><Link href="/locations" className="text-black hover:text-black/70">Locations</Link></li>
            <li><Link href="/testimonials" className="text-black hover:text-black/70">Testimonials</Link></li>
            <li><Link href="/b2b" className="text-black hover:text-black/70">B2B</Link></li>
          </ul>
        </nav>

        {/* Mobile toggle button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <span className="sr-only">Toggle menu</span>

            {/* Toggle between Hamburger and X */}
            {isMenuOpen ? (
              // X icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-sky-100/95 px-4 py-3 shadow-md">
          <ul className="flex flex-col space-y-3">
            <li><Link href="#about" onClick={closeMenu} className="text-black hover:text-black/70">About</Link></li>
            <li><Link href="/services" onClick={closeMenu} className="text-black hover:text-black/70">Services</Link></li>
            <li><Link href="/locations" onClick={closeMenu} className="text-black hover:text-black/70">Locations</Link></li>
            <li><Link href="/testimonials" onClick={closeMenu} className="text-black hover:text-black/70">Testimonials</Link></li>
            <li><Link href="/b2b" onClick={closeMenu} className="text-black hover:text-black/70">B2B</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
