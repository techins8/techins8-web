'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { validate } from "@dahoom/disposable-email";
import { subscribeToNewsletter } from "./newsletter.action";


interface NewsletterState {
  email: string;
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function NewsletterForm() {
  const [state, setState] = useState<NewsletterState>({
    email: '',
    status: 'idle',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!state.email) return;

    // Vérification de l'email jetable
    if (!await validate(state.email)) {
        setState({
          ...state,
          status: 'error',
          message: 'Veuillez utiliser une adresse email permanente.'
        });
        
        setTimeout(() => {
          setState(prev => ({ ...prev, status: 'idle', message: '' }));
        }, 3000);
        
        return;
    }

    setState(prev => ({ ...prev, status: 'loading' }));

    try {
      const response = await subscribeToNewsletter({ email: state.email });

      if (response.success) {
        setState({
          email: '',
          status: 'success',
          message: 'Merci de votre inscription ! 🎉'
        });
      } else {
        throw new Error(response.message);
      }

      setTimeout(() => {
        setState(prev => ({ ...prev, status: 'idle', message: '' }));
      }, 3000);
    } catch (error) {
      setState({
        ...state,
        status: 'error',
        message: error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'inscription'
      });

      setTimeout(() => {
        setState(prev => ({ ...prev, status: 'idle', message: '' }));
      }, 3000);
    }
  };

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
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 items-center"
        >
          <div className="flex flex-col sm:flex-row gap-3 max-w-md w-full">
            <Input
              type="email"
              placeholder="exemple@exemple.com"
              className="flex-1"
              required
              value={state.email}
              onChange={(e) => setState(prev => ({ ...prev, email: e.target.value }))}
              disabled={state.status === 'loading'}
            />
            <Button
              type="submit"
              className="bg-accent-foreground text-primary-foreground hover:bg-[#fa471198]"
              disabled={state.status === 'loading'}
            >
              {state.status === 'loading' ? 'Inscription...' : 'S\'inscrire'}
            </Button>
          </div>

          {state.status !== 'idle' && state.message && (
            <Alert
              className={`mt-4 ${
                state.status === 'success' 
                  ? 'bg-green-50 text-green-700 border-green-200'
                  : 'bg-red-50 text-red-700 border-red-200'
              }`}
            >
              <AlertDescription>
                {state.message}
              </AlertDescription>
            </Alert>
          )}

          <p className="text-sm text-secondary mt-3">
            Promis, il n&apos;y aura pas de spam
          </p>
        </form>
      </div>
    </div>
  );
}