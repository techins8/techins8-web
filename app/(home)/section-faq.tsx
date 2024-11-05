"use client"

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Combien coûte TechIns8 ?",
    answer: "TechIns8 est entièrement gratuit ! Nous mettons à la disposition des développeur ce dashboard d'analytics pour étudier au quotidien l'offre de missions free-lances et d'emplois."
  },
  {
    question: "Qui est derrière Techins8 ?",
    answer: "Nous sommes 3 développeurs, free-lances, salariés et entrepreneurs. Étudier le marché en permanence est fastidieux, c'est pourquoi nous vous avons proposé un outil pour simplifier l'accès à une étude simple, mais complète."
  },
  {
    question: "D'où proviennent les données fournis par TechIns8 ?",
    answer: "Nous récoltons les offres sur FreeWork de manière quotidienne. Notre travail consiste ensuite à croiser les données entre-elles de sorte à vous offrir des graphiques vous permettant d'optimiser votre carrière."
  },
  {
    question: "J'aimerais analyser des aspects spécifiques sur les offres d'emplois, comment faire ?",
    answer: "Nous fournissons un certain nombre de filtres sur nos graphiques qui vous permettent d'adapter les données que vous souhaitez consulter à votre besoin. Si vous souhaitez plus de filtres ou plus de graphiques, merci de nous contacter à l'adresse suivante : contact@techins8.com"
  }
];

const FAQItem = ({ question, answer }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border/40 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left"
      >
        <span className="text-lg font-medium text-primary">{question}</span>
        <ChevronDown 
          className={`h-5 w-5 text-primary transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 mb-6' : 'max-h-0'
        }`}
      >
        <p className="text-muted-foreground">
          {answer}
        </p>
      </div>
    </div>
  );
};

const SectionFaq = () => {
  return (
    <section className="w-full py-12 px-4 mt-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">FAQ</h2>
          <p className="text-lg text-muted-foreground">
            Vous vous posez sans doute encore des questions, laissez-nous y répondre
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFaq;