import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock as ClockIcon, CheckCircle, Calendar as CalendarIcon, ArrowRight, X, Globe, DollarSign, Star, Users, Award, ChevronDown, Play as PlayIcon, User as UserIcon } from "lucide-react";
import { RegisterButton } from "@/components/webinar/register-button";
import { LearnMoreButton } from "@/components/webinar/learn-more-button";
import { CountdownTimer } from "@/components/webinar/countdown-timer";

export const metadata: Metadata = {
  title: "Webinaire FreeMatch : Trouvez votre contrat idéal en 7 jours",
  description: "Rejoignez notre webinaire exclusif pour découvrir comment FreeMatch aide les freelances tech à trouver leur contrat idéal en seulement 7 jours, en y consacrant 15 minutes par jour.",
  openGraph: {
    title: "Webinaire FreeMatch : Trouvez votre contrat idéal en 7 jours",
    description: "Rejoignez notre webinaire exclusif pour découvrir comment FreeMatch aide les freelances tech à trouver leur contrat idéal en seulement 7 jours, en y consacrant 15 minutes par jour.",
  },
};

export default function WebinarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background to-accent/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4 w-fit">
              <CalendarIcon className="mr-1 h-3 w-3" />
              <span>1 avril 2025 • 14h00</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-title mb-4 max-w-[900px]">
              Trouve <span className="text-accent-foreground">une mission</span> en 7 jours
            </h1>
            <p className="text-black text-lg md:text-xl max-w-[700px] mb-6">
              Découvrez comment FreeMatch aide les freelances tech à trouver leur job en 15 minutes par jour.
            </p>
            
            {/* Countdown Timer */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-2">Le webinaire commence dans :</p>
              <CountdownTimer targetDate="2025-04-01T14:00:00+02:00" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <RegisterButton className="w-full sm:w-auto" size="lg" variant="default" />
              <LearnMoreButton className="w-full sm:w-auto" size="lg" />
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10">
              <ClockIcon className="h-4 w-4" />
              <span>Places limitées. Inscrivez-vous maintenant pour réserver votre place.</span>
            </div>
            
            {/* Dashboard Image */}
            <div className="relative w-full max-w-[800px] h-[550px] aspect-video overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/images/dashboard-2.webp"
                alt="Aperçu du tableau de bord FreeMatch"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem-section" className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4 w-fit mx-auto">
              Le Problème
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-title mb-4">
              Le <span className="text-accent-foreground">cauchemar</span> de la recherche d'emploi pour les freelances tech
            </h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Les freelances tech perdent en moyenne 15 heures par semaine à chercher sur plusieurs plateformes, à gérer des offres trompeuses et des attentes irréalistes.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            <div className="bg-card rounded-lg shadow-md p-6">
              <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                <ClockIcon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Temps perdu</h3>
              <p className="text-muted-foreground">
                Les freelances tech passent en moyenne 15 heures par semaine à chercher sur plusieurs plateformes pour leur prochain contrat.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6">
              <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                <X className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Offres trompeuses</h3>
              <p className="text-muted-foreground">
                Des emplois "à distance" qui nécessitent en réalité une présence sur site ou ont des restrictions géographiques.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6">
              <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                <Globe className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Problèmes de localisation</h3>
              <p className="text-muted-foreground">
                Des offres qui prétendent être dans votre ville mais qui nécessitent en réalité une relocalisation ou des déplacements importants.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6">
              <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                <DollarSign className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tarifs décevants</h3>
              <p className="text-muted-foreground">
                Des projets avec des budgets bien inférieurs aux tarifs du marché pour l'expertise et l'expérience requises.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-card rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Le coût réel</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Temps passé à chercher un emploi :</p>
                <p className="text-4xl font-bold text-accent-foreground">15+ heures/semaine</p>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Opportunités manquées pendant la recherche :</p>
                <p className="text-4xl font-bold text-accent-foreground">40%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution-section" className="py-16 bg-accent/5">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4 w-fit mx-auto">
              La Solution
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-title mb-4">
              Découvrez <span className="text-accent-foreground">FreeMatch</span> : Votre assistant IA de recherche de contrat
            </h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto mb-12">
              FreeMatch révolutionne la façon dont les freelances tech trouvent leur prochain contrat en combinant une agrégation multi-plateformes et un matching propulsé par l'IA.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-card rounded-lg shadow-md p-6">
              <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-accent-foreground">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Agrégation multi-plateformes</h3>
              <p className="text-muted-foreground">
                Nous analysons toutes les principales plateformes freelance et job boards pour centraliser chaque opportunité en un seul endroit.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6">
              <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-accent-foreground">
                  <path d="M12 2v8"></path>
                  <path d="m16 6-4 4-4-4"></path>
                  <path d="M3 10h18"></path>
                  <path d="M3 14h18"></path>
                  <path d="M3 18h18"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scoring propulsé par l'IA</h3>
              <p className="text-muted-foreground">
                Notre algorithme propriétaire analyse chaque annonce et l'évalue en fonction de vos compétences, tarifs et préférences.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6">
              <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-accent-foreground">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" x2="12" y1="3" y2="15"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Import de profil en un clic</h3>
              <p className="text-muted-foreground">
                Importez votre profil Malt instantanément pour configurer vos préférences sans aucune saisie manuelle de données.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6">
              <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-accent-foreground">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Opportunités vérifiées</h3>
              <p className="text-muted-foreground">
                Nous vérifions les détails des offres pour garantir que la localisation, les options de télétravail et les tarifs sont correctement représentés.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-card rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Le tableau de bord FreeMatch</h3>
                <p className="text-muted-foreground mb-6">
                  Consultez votre flux d'opportunités personnalisé, avec chaque offre évaluée et classée par notre IA en fonction de votre profil et de vos préférences.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent-foreground" />
                    <span>Score personnalisé pour chaque annonce</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent-foreground" />
                    <span>Filtrage par compétences, localisation, tarif et plus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent-foreground" />
                    <span>Processus de candidature en un clic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent-foreground" />
                    <span>Opportunités fraîches quotidiennes</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <RegisterButton className="w-full sm:w-auto" size="lg" variant="default" />
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video">
                <Image
                  src="/images/dashboard.webp"
                  alt="Aperçu du tableau de bord FreeMatch"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-card rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Notre promesse</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Temps passé à chercher un emploi avec FreeMatch :</p>
                <p className="text-4xl font-bold text-accent-foreground">15 min/jour</p>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Trouvez votre contrat idéal en :</p>
                <p className="text-4xl font-bold text-accent-foreground">7 jours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4 w-fit mx-auto">
              Témoignages
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-title mb-4">
              Adopté par plus de 2 500 freelances tech
            </h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto mb-12">
              Découvrez ce que les freelances disent de la façon dont FreeMatch a transformé leur processus de recherche d'emploi.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-16">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="italic mb-6">
                Avant FreeMatch, je passais plus de temps à chercher du travail qu'à travailler sur des projets. Maintenant, je ne vérifie que 15 minutes par jour et j'ai déjà trouvé deux excellents contrats.
              </p>
              <div className="mt-auto">
                <h4 className="font-semibold">Alexandre B.</h4>
                <p className="text-sm text-muted-foreground">Développeur Frontend</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="italic mb-6">
                Le scoring IA est parfaitement précis. Il m'a aidée à prioriser les opportunités à poursuivre, et j'ai décroché un contrat qui correspond parfaitement à mes compétences et à mes exigences tarifaires.
              </p>
              <div className="mt-auto">
                <h4 className="font-semibold">Marie L.</h4>
                <p className="text-sm text-muted-foreground">Ingénieure DevOps</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="italic mb-6">
                L'importation en un clic depuis Malt a tout changé. Mon profil a été configuré en quelques secondes, et les correspondances ont commencé à arriver immédiatement. Je recommande vivement !
              </p>
              <div className="mt-auto">
                <h4 className="font-semibold">Thomas K.</h4>
                <p className="text-sm text-muted-foreground">Développeur Fullstack</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-4xl font-bold mb-2">2 500+</h3>
              <p className="text-muted-foreground">Utilisateurs actifs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-4xl font-bold mb-2">97%</h3>
              <p className="text-muted-foreground">Taux de satisfaction</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-4xl font-bold mb-2">4,8/5</h3>
              <p className="text-muted-foreground">Note moyenne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Benefits Section */}
      <section id="webinar-benefits" className="py-16 bg-accent/5">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4 w-fit mx-auto">
              Le Webinaire
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-title mb-4">
              Ce que vous apprendrez dans ce webinaire gratuit
            </h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto mb-12">
              Rejoignez-nous pour découvrir comment FreeMatch révolutionne le processus de recherche d'emploi pour les professionnels tech.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Programme du webinaire</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-accent/10 h-8 w-8 rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Le problème actuel de la recherche d'emploi</h4>
                    <p className="text-muted-foreground">Pourquoi la recherche d'emploi traditionnelle fait perdre 15+ heures par semaine aux freelances tech</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-accent/10 h-8 w-8 rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Démo de la plateforme FreeMatch</h4>
                    <p className="text-muted-foreground">Découvrez notre système de matching propulsé par l'IA en action</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-accent/10 h-8 w-8 rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Le système de scoring secret</h4>
                    <p className="text-muted-foreground">Comment notre algorithme propriétaire classe les opportunités selon votre profil spécifique</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-accent/10 h-8 w-8 rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Histoires de réussite et études de cas</h4>
                    <p className="text-muted-foreground">Exemples concrets de freelances qui ont trouvé leur contrat idéal en 7 jours</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-accent/10 h-8 w-8 rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Session de questions-réponses</h4>
                    <p className="text-muted-foreground">Obtenez des réponses à vos questions spécifiques en direct</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Détails de l'événement</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <CalendarIcon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Date</h4>
                    <p className="text-muted-foreground">15 avril 2025</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <ClockIcon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Heure</h4>
                    <p className="text-muted-foreground">14h00 (CET)</p>
                  </div>
                </div>
                
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold mb-4">Pourquoi participer :</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent-foreground" />
                      <span>Accès anticipé exclusif à la plateforme</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent-foreground" />
                      <span>Remise spéciale pour les participants au webinaire</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent-foreground" />
                      <span>Networking avec d'autres freelances tech</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent-foreground" />
                      <span>Session Q&R avec l'équipe FreeMatch</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <RegisterButton className="w-full" size="lg" variant="default" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Join Us Section */}
       <section id="join-us" className="py-16 bg-background">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4 w-fit mx-auto">
                Rejoignez-nous
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-title mb-4">
                Réservez votre place
              </h2>
              <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
                Sécurisez votre place à notre webinaire exclusif et soyez parmi les premiers à accéder à FreeMatch.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  Prénom*
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Nom*
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Adresse e-mail*
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-border rounded focus:ring-accent"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-muted-foreground">
                  J'accepte de recevoir des emails concernant FreeMatch. Je comprends que je peux me désabonner à tout moment. Consultez notre{" "}
                  <Link href="#" className="text-accent-foreground underline">
                    Politique de confidentialité
                  </Link>{" "}
                  pour plus de détails.
                </label>
              </div>
            </div>

            <button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3 px-4 rounded-md font-medium transition-colors">
              Réserver ma place
            </button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              En vous inscrivant, vous recevrez un enregistrement même si vous ne pouvez pas assister en direct.
            </p>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq-section" className="py-16 bg-accent/5">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4 w-fit mx-auto">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-title mb-4">
              Questions fréquemment posées
            </h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Vous avez des questions sur FreeMatch ou le webinaire ? Nous avons les réponses.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              <details className="group" open>
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold">Qu'est-ce que FreeMatch exactement ?</h3>
                  <div className="relative ml-2 flex-shrink-0 rounded-full border group-open:rotate-180 transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  <p>
                    FreeMatch est une plateforme propulsée par l'IA qui agrège des opportunités de contrats tech provenant de multiples sources, les analyse et vous présente des correspondances personnalisées basées sur vos compétences, vos exigences tarifaires et vos préférences.
                  </p>
                </div>
              </details>
            </div>

            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold">Le webinaire est-il vraiment gratuit ?</h3>
                  <div className="relative ml-2 flex-shrink-0 rounded-full border group-open:rotate-180 transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  <p>
                    Oui, le webinaire est entièrement gratuit. Nous croyons en l'importance de fournir de la valeur d'abord et de laisser notre plateforme parler d'elle-même. Vous obtiendrez des informations pratiques, que vous décidiez ou non d'utiliser FreeMatch par la suite.
                  </p>
                </div>
              </details>
            </div>

            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold">Que se passe-t-il si je ne peux pas assister au webinaire en direct ?</h3>
                  <div className="relative ml-2 flex-shrink-0 rounded-full border group-open:rotate-180 transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  <p>
                    Pas de problème ! Tous ceux qui s'inscrivent recevront un enregistrement du webinaire. Cependant, les participants en direct auront l'opportunité de participer à la session de questions-réponses et recevront des bonus exclusifs non disponibles pour ceux qui regardent uniquement l'enregistrement.
                  </p>
                </div>
              </details>
            </div>

            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold">Comment fonctionne le système de notation IA de FreeMatch ?</h3>
                  <div className="relative ml-2 flex-shrink-0 rounded-full border group-open:rotate-180 transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  <p>
                    Notre système de notation IA propriétaire analyse plus de 50 points de données pour chaque opportunité de contrat et les compare à votre profil, vos compétences, vos attentes tarifaires et vos préférences. Il attribue ensuite un score de correspondance de 0 à 100, vous aidant à prioriser les opportunités à poursuivre en premier.
                  </p>
                </div>
              </details>
            </div>

            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold">FreeMatch est-il uniquement destiné aux freelances tech ?</h3>
                  <div className="relative ml-2 flex-shrink-0 rounded-full border group-open:rotate-180 transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  <p>
                    Actuellement, oui. Nous nous sommes d'abord concentrés sur le secteur tech car c'est là que nous avons constaté le plus grand écart entre le talent et la correspondance des opportunités. Notre plateforme est optimisée pour les développeurs, les designers, les chefs de produit, les data scientists et autres rôles tech. Nous pourrons étendre à d'autres secteurs à l'avenir.
                  </p>
                </div>
              </details>
            </div>

            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold">Combien coûte FreeMatch ?</h3>
                  <div className="relative ml-2 flex-shrink-0 rounded-full border group-open:rotate-180 transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  <p>
                    FreeMatch propose des formules gratuites et premium. Les fonctionnalités de base sont gratuites, tandis que la mise en relation avancée et l'accès prioritaire aux meilleures opportunités nécessitent un abonnement premium. Les participants au webinaire bénéficieront de tarifs spéciaux et d'offres exclusives non disponibles pour le grand public.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="rounded-xl bg-accent p-8 md:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-foreground opacity-90"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter text-white mb-4">
                Prêt à transformer votre recherche de contrats tech ?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Rejoignez notre webinaire gratuit et découvrez comment FreeMatch peut vous aider à trouver des contrats tech parfaitement adaptés à vos compétences et à vos exigences tarifaires.
              </p>
              <Link
                href="#webinar-section"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white text-accent px-8 text-sm font-medium shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Réserver ma place maintenant
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
