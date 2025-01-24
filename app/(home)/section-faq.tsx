"use client"

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQItem[] = [
  {
    question: "Qu'est-ce qui différencie TechIns8 des autres sites d'emploi ?",
    answer: (
      <div>
        <p>TechIns8 n&apos;est pas un simple site d&apos;emploi, c&apos;est votre assistant personnel de recherche d&apos;emploi :</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Notre IA agit comme un expert RH : elle détecte les fausses promesses, vérifie les TJM et s&apos;assure que &quot;full remote&quot; signifie VRAIMENT full remote.</li>
          <li>Plus besoin de jongler entre les plateformes : toutes vos recherches, toutes vos offres, au même endroit.</li>
        </ul>
      </div>
    )
  },
  {
    question: "Comment fonctionne l'analyse des offres ?",
    answer: "Notre IA analyse chaque offre d'emploi pour vérifier la cohérence des informations. Elle s'assure notamment que les conditions de travail annoncées sont réelles et que les compétences requises sont cohérentes."
  },
  {
    question: "Quelles sont les sources d'offres d'emploi ?",
    answer: "Nous agrégeons les offres de &quot;FreeWork&quot; et &quot;Welcome To The Jungle&quot; pour vous offrir une vue complète du marché. Notre IA analyse et enrichit chaque offre pour une meilleure transparence."
  },
  {
    question: "Comment est calculé le TJM ?",
    answer: "Le TJM est calculé en fonction des données du marché et des informations fournies dans l'offre. Notre IA vérifie la cohérence des montants annoncés avec les compétences et l'expérience requises."
  },
  {
    question: "J'ai déjà des alertes sur LinkedIn, pourquoi payer pour TechIns8 ?",
    answer: (
      <div>
        <p>LinkedIn et les autres plateformes vous envoient toutes les offres correspondant à vos mots-clés, sans vérification.</p>
        <p className="mt-2">Ces alertes sont souvent truffées de fausses offres &quot;full remote&quot;, de TJM irréalistes, ou pire, d&apos;annonces qui ne correspondent pas du tout à tes compétences.</p>
        <p className="mt-2">Résultat ? Vous perdez du temps à filtrer manuellement. TechIns8 fait ce travail pour vous, en regroupant les offres de plusieurs sources et en vérifiant leur qualité.</p>
      </div>
    )
  },
  {
    question: "Est-ce que je peux annuler mon abonnement ?",
    answer: "Oui, vous pouvez annuler à tout moment. Si vous n'êtes pas satisfait dans les 30 premiers jours, nous vous remboursons intégralement, sans question."
  },
  {
    question: "Combien de nouvelles offres sont ajoutées ?",
    answer: "Chaque jour, nous mettons à jour notre base. Actuellement, nous analysons les offres de FreeWork et Welcome To The Jungle, et d'autres sources seront ajoutées prochainement."
  }
];

const FAQItem = ({ question, answer }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 px-10 flex justify-between items-center text-left gap-4"
      >
        <span className="text-lg font-semibold text-title">
          {question}
        </span>
        <ChevronDown 
          className={`h-8 w-8 text-primary flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="pl-10 pr-24 pb-6 text-muted-foreground leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

const DiscordCard = () => {
  return (
    <div className="bg-muted rounded-lg px-14 py-12 sm:px-16 sm:py-8 text-center">
      <div className="mx-auto mb-8 flex items-center justify-center">
        <Image
          src="/images/logo/discord.svg"
          alt="Discord"
          width={104}
          height={104}
        />
      </div>
      <h3 className="text-xl font-medium mb-8 text-primary-foreground">
        Besoin de poser vos questions aux utilisateurs ?
      </h3>
      <p className="mb-8 text-primary-foreground">
        Rejoignez notre communauté sur Discord !
      </p>
      <Link
        href="https://discord.gg/your-invite-link"
        target="_blank"
        className="inline-block bg-white text-title font-semibold px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
      >
        REJOINDRE LA COMMUNAUTÉ
      </Link>
    </div>
  );
};

const SectionFaq = () => {
  return (
    <section className="w-full py-24 px-4 bg-popover">
      <div className="max-w-[1120px] mx-auto ">
        <div className="text-center mb-12">
          <h2 className="font-bold text-center text-4xl text-title !leading-tight max-w-[550px] mx-auto mb-4">
            Vous avez des questions ?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Items */}
          <div className="lg:col-span-2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
          
          {/* Discord Card */}
          <div className="lg:col-span-1">
            <DiscordCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFaq;