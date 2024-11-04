"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
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
  );
};
