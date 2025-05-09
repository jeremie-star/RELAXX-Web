"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Clock, Euro, Plane } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled 
          ? "bg-sky-200/95 backdrop-blur-sm shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-2xl font-bold tracking-wider text-black"
        >
          RELAXX
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link 
                href="#about" 
                className="text-black hover:text-black/70 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className="text-black hover:text-black/70 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/locations" 
                className="text-black hover:text-black/70 transition-colors"
              >
                Locations
              </Link>
            </li>
            <li>
              <Link 
                href="/testimonials" 
                className="text-black hover:text-black/70 transition-colors"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link 
                href="/b2b" 
                className="text-black hover:text-black/70 transition-colors"
              >
                B2B
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-black">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}