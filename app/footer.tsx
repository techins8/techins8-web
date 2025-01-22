"use client";

import Image from "next/image";
import NewsletterForm from "./(home)/newsletter-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navigationLinks = [
    { href: "/job_offers", label: "Jobs" },
    { href: "/about", label: "À propos" },
    { href: "/blog", label: "Blog" },
    { href: "https://dashboard.techins8.com", label: "Se Connecter" },
  ];

  const footerLinks = [
    { href: "/", label: "Accueil" },
    { href: "/partnerships", label: "Partenariats" },
    { href: "/#testimonials", label: "Feedback" },
    { href: "/legal", label: "Mentions légales" },
    { href: "/cgv", label: "CGV" },
  ];

  return (
    <footer className="w-full bg-background relative">
      <div className="mx-4 my-16">
        <NewsletterForm />
      </div>

      <div className="bg-title">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 py-16">
            {/* Company Info */}
            <div className="md:col-span-4 space-y-6">
              <Image
                src="/images/logo/logo-techins8-light.svg"
                alt="TechIns8 Logo"
                width={150}
                height={40}
              />
              <p className="text-background text-sm">
                TechIns8 est un tableau de bord destiné aux professionnels du
                secteur technologique français, offrant un accès à diverses
                données sur l&apos;état du marché.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-3 gap-8">
                {/* Main Navigation */}
                <div className="space-y-6">
                  <h3 className="text-background text-base font-semibold">Navigation</h3>
                  <div className="flex flex-col space-y-4 text-sm">
                    {navigationLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-background transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="space-y-6">
                  <h3 className="text-background text-base font-semibold">Liens utiles</h3>
                  <div className="flex flex-col space-y-4 text-sm">
                    {footerLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-background"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Social & CTA */}
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <h3 className="text-background text-base font-semibold">Nous suivre</h3>
                    <a
                        href="https://www.linkedin.com/company/techins8/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-10"
                      >
                        <Image
                          src="/images/logo/linkedin-logo-light.svg"
                          alt="Logo LinkedIn"
                          width={24}
                          height={24}
                        />
                    </a>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-4">
                      <p className="text-background text-sm">
                        Nous sommes là pour vous aider !
                      </p>
                    </div>

                    <Button
                      asChild
                      className="w-full font-bold bg-accent-foreground text-primary-foreground hover:bg-[#fa471198]"
                    >
                      <a
                        href="mailto:contact@techins8.com?subject=Contact_Landing"
                        target="_blank"
                      >
                        NOUS CONTACTER
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-title">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="border-t border-muted"></div>
        </div>

        <div className="pt-8">
          <div className="max-w-[1120px] mx-auto px-4 relative z-10">
            <p className="text-center text-sm text-muted mb-8">
              2025 TechIns8. Tous droits réservés.
            </p>
          </div>

          <div className="relative bottom-0 overflow-hidden flex justify-center items-center">
            <Image
              src="/images/logo/footer-icon-techins8.svg"
              alt="TechIns8 Footer Pattern"
              width={950}
              height={200}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
