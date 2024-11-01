"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const navigationLinks = [
    { href: "/job_offers", label: "Jobs" },
    { href: "/about", label: "À propos" },
    { href: "/blog", label: "Blog" },
    { href: "/login", label: "Se Connecter" },
  ];

  const footerLinks = [
    { href: "/", label: "Accueil" },
    { href: "#problems", label: "Problématique" },
    { href: "#solutions", label: "Solution" },
    { href: "#testimonials", label: "Feedback" },
    { href: "/mentions-legales", label: "Mentions légales" },
  ];

  return (
    <footer className="w-full bg-background pt-16 pb-8">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-primary mb-8">
            Reçois une étude de marché{" "}
            <span className="text-accent">gratuitement </span>
            dans ta boite mail, toutes les{" "}
            <span className="text-accent">semaines</span>.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="exemple@exemple.com"
              className="flex-1"
              required
            />
            <Button
              type="submit"
              className="bg-accent-foreground text-primary-foreground hover:bg-[#fa471198]"
            >
              S&apos;inscrire
            </Button>
          </form>

          <p className="text-sm text-secondary mt-3">
            Promis, il n&apos;y aura pas de spam
          </p>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="max-w-6xl mx-auto px-4 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <Image
                src="/images/logo/logo-techins8-dark.svg"
                alt="TechIns8 Logo"
                width={150}
                height={40}
                className="mb-4"
              />
              <p className="text-muted-foreground">
                TechIns8 est un tableau de bord destiné aux professionnels du
                secteur technologique français, offrant un accès à diverses
                données sur l&apos;état du marché.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {/* Main Navigation */}
                <div className="space-y-4">
                  <h3 className="font-medium text-primary">Navigation</h3>
                  <div className="flex flex-col space-y-2">
                    {navigationLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-secondary hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="space-y-4">
                  <h3 className="font-medium text-primary">Liens utiles</h3>
                  <div className="flex flex-col space-y-2">
                    {footerLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-secondary hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Social & CTA */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <h3 className="font-medium text-primary">Nous suivre</h3>
                    <a
                      href="https://www.linkedin.com/company/techins8/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      <Image
                        src="/images/logo/linkedin-logo.svg"
                        alt="Logo LinkedIn"
                        width={24}
                        height={24}
                        className="rounded group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </div>
                  <Link
                    href="/https://dashboard.techins8.com/"
                    className="inline-block bg-accent-foreground text-background px-4 py-2 rounded-md transition-colors text-sm hover:bg-[#fa471198] mt-4"
                  >
                    Essayer gratuitement
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            © 2024 TechIns8. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
