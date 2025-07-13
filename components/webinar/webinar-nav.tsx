"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RegisterButton } from "./register-button";

export function WebinarNav() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-primary">
            FreeMatch
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Button 
            variant="link" 
            className="text-foreground/80 hover:text-foreground"
            onClick={() => scrollToSection('problem-section')}
          >
            Problème
          </Button>
          <Button 
            variant="link" 
            className="text-foreground/80 hover:text-foreground"
            onClick={() => scrollToSection('solution-section')}
          >
            Solution
          </Button>
          <Button 
            variant="link" 
            className="text-foreground/80 hover:text-foreground"
            onClick={() => scrollToSection('webinar-benefits')}
          >
            Webinaire
          </Button>
          <Button 
            variant="link" 
            className="text-foreground/80 hover:text-foreground"
            onClick={() => scrollToSection('faq-section')}
          >
            FAQ
          </Button>
          <RegisterButton size="sm" />
        </nav>
        <div className="md:hidden">
          <RegisterButton size="sm" />
        </div>
      </div>
    </header>
  );
}
