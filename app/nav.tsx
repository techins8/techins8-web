"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';

const Nav = () => {
  const t = useTranslations('HomePage.Nav');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const logoSrc = "/images/logo/logo-techins8-dark.svg";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Background image */}
      <div className="absolute left-0 top-0 -z-10 overflow-hidden">
        <Image
          src="/images/illustrations/hero-shape-1.svg"
          alt={t('images.shapeOneAlt')}
          className="w-full h-auto"
          width={100}
          height={100}
          loading="lazy"
        />
      </div>
      <nav className="fixed left-0 top-0 w-full flex flex-col items-center z-50">
        <div
          className={`absolute inset-0 transition-all duration-200 ease-in-out ${
            isScrolled || isMenuOpen
              ? "bg-white/60 backdrop-blur-md border-b "
              : "bg-transparent"
          }`}
        />

        <div className="relative flex items-center justify-between w-full max-w-[1150px] px-7 py-5">
          {/* Logo */}
          <Link
            className="font-display flex items-center text-3xl z-50"
            href="/"
          >
            <div className="flex flex-col text-secondary lg:flex-row">
              <Image
                src={logoSrc}
                alt={t('images.logoAlt')}
                width={152}
                height={100}
                className="object-contain max-w-[200px] sm:max-w-none"
                loading="lazy"
              />
            </div>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 lg:hidden p-2 bg-primary rounded-md transition-colors"
            aria-label={t('mobileMenu.ariaLabel')}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-background" />
            ) : (
              <Menu className="h-6 w-6 text-background" />
            )}
          </button>

          {/* Mobile Menu */}
          <div
            className={`
            fixed inset-0 bg-white z-40 pt-20 px-4 transition-transform duration-300 ease-in-out lg:hidden
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
          >
            <div className="flex flex-col space-y-6 items-center">
              <Link
                href="/about"
                className="text-foreground text-lg nav-link hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {t('links.about')}
              </Link>
              <Link
                href="/partnerships"
                className="text-foreground text-lg nav-link hover:text-primary transition-colors"
              >
                {t('links.partnerships')}
              </Link>
              <Link
                href="/blog"
                className="text-foreground text-lg nav-link hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {t('links.blog')}
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_DASHBOARD_URL ?? ""}
                className="bg-accent-foreground text-background px-2 py-3 rounded-md transition-colors text-lg w-60 text-center hover:bg-[#fa471198]"
                onClick={closeMenu}
              >
                {t('cta')}
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('links.about')}
            </Link>
            <Link
              href="/partnerships"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('links.partnerships')}
            </Link>
            <Link
              href="/blog"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('links.blog')}
            </Link>
          </div>

          <div className="hidden lg:flex">
            <Link
              href={process.env.NEXT_PUBLIC_DASHBOARD_URL ?? ""}
              target="_parent"
              className="bg-primary text-primary-foreground font-semibold px-5 py-2 rounded-md transition-colors button-nav"
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      </nav>
      <div className="absolute right-0 -z-10 overflow-hidden">
        <Image
          src="/images/illustrations/hero-shape-2.svg"
          alt={t('images.shapeTwoAlt')}
          className="w-full h-auto"
          width={100}
          height={100}
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Nav;