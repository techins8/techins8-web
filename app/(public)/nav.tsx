"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const logoSrc = "/images/logo/logo-techins8-dark.svg";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed left-0 top-0 w-full flex flex-col items-center z-50">
      {/* Background div with blur effect */}
      <div 
        className={`absolute inset-0 transition-all duration-200 ease-in-out ${
          isScrolled || isMenuOpen ? 'bg-white/60 backdrop-blur-md border-b ' : 'bg-transparent'
        }`}
      />
      
      {/* Content div that stays clear */}
      <div className="relative flex items-center justify-between w-full max-w-[1170px] px-4 py-2">
        {/* Logo */}
        <Link className="font-display flex items-center text-3xl z-50" href="/">
          <div className="flex flex-col text-secondary lg:flex-row">
            <Image
              src={logoSrc}
              alt="Logo"
              width={150}
              height={150}
              className="object-contain max-w-[200px] sm:max-w-none"
            />
          </div>
        </Link>

        {/* Hamburger Menu Button - Only visible on mobile */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-50 lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-secondary" />
          ) : (
            <Menu className="h-6 w-6 text-secondary" />
          )}
        </button>

        {/* Mobile Menu */}
        <div className={`
          fixed inset-0 bg-white z-40 pt-20 px-4 transition-transform duration-300 ease-in-out lg:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col space-y-6 items-center">
            <Link 
              href="/job_offers" 
              className="text-secondary text-lg nav-link hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Jobs
            </Link>
            <Link 
              href="/about" 
              className="text-secondary text-lg nav-link hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              À propos
            </Link>
            <Link 
              href="/blog" 
              className="text-secondary text-lg nav-link hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link 
              href="/login" 
              className="text-secondary text-lg nav-link hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Se Connecter
            </Link>
            <Link 
              href="/https://dashboard.techins8.com/"
              className="bg-accent-foreground text-background px-6 py-3 rounded-md transition-colors text-lg w-full text-center hover:bg-[#fa471198]"
              onClick={closeMenu}
            >
              Essayer gratuitement
            </Link>
          </div>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/job_offers" className="text-secondary nav-link hover:text-primary transition-colors">
            Jobs
          </Link>
          <Link href="/about" className="text-secondary nav-link hover:text-primary transition-colors">
            À propos
          </Link>
          <Link href="/blog" className="text-secondary nav-link hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/login" className="text-secondary nav-link hover:text-primary transition-colors">
            Se Connecter
          </Link>
          <Link 
            href="/https://dashboard.techins8.com/"
            className="bg-accent-foreground text-background px-4 py-2 rounded-md transition-colors text-sm hover:bg-[#fa471198]"
          >
            Essayer gratuitement
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;