"use client";

// import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleDropdown = (dropdown: string) => {
//     setIsDropdownOpen(dropdown === isDropdownOpen ? null : dropdown);
//   };

  const logoSrc = "/images/logo/logo-techins8.svg";

  return (
    <nav className="fixed left-0 top-0 z-9999 w-full py-7 lg:py-0">
      <div className="relative mx-auto flex max-w-[1170px] items-center justify-between px-4 sm:px-8 lg:px-0 mt-10">
        {/* Logo centré */}
        <Link className="font-display flex items-center text-3xl" href="/">
          <div className="flex flex-col hover:text-opacity-75 lg:flex-row">
            <Image
              src={logoSrc}
              alt="Logo"
              width={270}
              height={150}
              className="object-contain max-w-[200px] sm:max-w-none"
            />
          </div>
        </Link>

        <div>
          <div className="flex items-center space-x-6">
            <Link href="/job_offers" className="hover:text-opacity-75 transition-colors">
              Jobs
            </Link>
            <Link href="/about" className=" hover:text-opacity-75 transition-colors">
              A propos
            </Link>
            <Link href="/blog" className=" hover:text-opacity-75 transition-colors">
              Blog
            </Link>
            <Link href="/login" className=" hover:text-opacity-75 transition-colors">
              Se Connecter
            </Link>
            <Link 
              href="/try"
              className="bg-[#fc9779] text-[#1A110D] px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Essayer gratuitement
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
