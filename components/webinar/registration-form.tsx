"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id.replace("-", "")]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Show success message or redirect
    alert("Merci pour votre inscription ! Vérifiez votre email pour les détails de confirmation.");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="first-name" className="text-sm font-medium">
          Prénom
        </label>
        <Input 
          id="first-name" 
          placeholder="Entrez votre prénom" 
          required 
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="last-name" className="text-sm font-medium">
          Nom
        </label>
        <Input 
          id="last-name" 
          placeholder="Entrez votre nom" 
          required 
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Adresse Email
        </label>
        <Input 
          id="email" 
          type="email" 
          placeholder="Entrez votre adresse email" 
          required 
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="pt-2">
        <Button type="submit" className="w-full" size="lg">
          S&apos;inscrire maintenant
        </Button>
      </div>
      <p className="text-xs text-center text-muted-foreground mt-4">
        En vous inscrivant, vous acceptez notre Politique de Confidentialité et nos Conditions d&apos;Utilisation. Nous vous enverrons occasionnellement des mises à jour concernant FreeMatch.
      </p>
    </form>
  );
}
