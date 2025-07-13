"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface RegisterButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "techins8";
}

export function RegisterButton({ className, size = "lg", variant = "default" }: RegisterButtonProps) {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button 
      size={size} 
      className={`bg-primary text-white hover:text-accent-foreground hover:bg-accent/90 ${className || ''}`} 
      onClick={scrollToForm} 
      variant={variant}
    >
      S'inscrire maintenant
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
}
