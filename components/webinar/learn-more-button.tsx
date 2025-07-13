"use client";

import { Button } from "@/components/ui/button";

interface LearnMoreButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "techins8";
}

export function LearnMoreButton({ className, size = "lg", variant = "outline" }: LearnMoreButtonProps) {
  const scrollToSolution = () => {
    document.getElementById('solution-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button size={size} className={className} onClick={scrollToSolution} variant={variant}>
      En savoir plus
    </Button>
  );
}
