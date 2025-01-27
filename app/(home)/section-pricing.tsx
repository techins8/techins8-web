"use client";

import { Card } from "@/components/ui/card";
import { getPlans, Plan } from "@/query/plan.query";
import Image from "next/image";
import { useEffect, useState } from "react";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const plans = await getPlans(isMonthly);
      setPlans(plans);
    };

    fetchPlans();
  }, [isMonthly]);

  const displayPlans = plans.filter((plan) => {
    if (isMonthly) {
      return plan.name === "Offre découverte" || plan.name === "Abonnement au mois";
    }
    return plan.name === "Offre découverte" || plan.name === "Abonnement 2 ans" || plan.name === "Abonnement à l'année";
  });

  const getCardStyle = (plan: Plan) => {
    const isHighlighted = isMonthly 
      ? plan.name === "Abonnement au mois"
      : plan.name === "Abonnement 2 ans";
    
    return {
      card: isHighlighted ? "bg-title text-white scale-110 border-primary border-2 shadow-lg" : "bg-white",
      text: isHighlighted ? "text-white" : "text-muted-foreground",
      button: isHighlighted || plan.name === "Abonnement à l'année" ? "bg-primary text-white" : "bg-title text-white",
      checkIcon: isHighlighted ? "/images/icons/pricing-white-ok.svg" : "/images/icons/pricing-dark-ok.svg",
      crossIcon: isHighlighted ? "/images/icons/pricing-dark-cross.svg" : "/images/icons/pricing-dark-cross.svg"
    };
  };

  return (
    <section className="w-full py-24 px-4 bg-popover">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-col items-center justify-center text-center text-muted mb-2 ">
          <h2 className="text-3xl md:text-4xl text-title font-bold mb-6 max-w-[350px] sm:max-w-[650px]">
            Démarrez dés maintenant avec l&apos;
            <span className="text-primary">offre premium</span>.
          </h2>
          <div className="relative inline-flex items-center rounded-full p-1 mb-8">
            <span
              className={`px-3 text-sm sm:text-base text-title ${
                !isMonthly ? "" : "opacity-40"
              }`}
            >
              Annuel
            </span>
            <button
              onClick={() => setIsMonthly(!isMonthly)}
              className="relative h-6 w-10 rounded-full"
              style={{
                backgroundColor: "#D9D9D9",
                boxShadow: "0px -2px 6.3px 0px rgba(0, 0, 0, 0.15) inset",
              }}
            >
              <div
                className={`w-5 h-5 bg-title rounded-full absolute transition-all duration-200 ${
                  isMonthly ? "right-0.5" : "left-0.5"
                } top-0.5`}
              ></div>
            </button>
            <span
              className={`px-3 text-sm sm:text-base text-title ${
                isMonthly ? "" : "opacity-40"
              }`}
            >
              Mensuel
            </span>
          </div>
        </div>

        <div className="max-w-[450px] mx-auto sm:max-w-[750px] px-8 py-2 mb-20 flex flex-col items-center justify-center text-center  bg-white rounded-lg border border-primary">
          <p className="text-lg font-medium text-title py-2">
            Offre de lancement exclusive : -50% en + sur TechIns8 Premium 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-12">
        {displayPlans.map((plan) => {
            const style = getCardStyle(plan);
            
            return (
              <div key={plan.name} className="relative mt-12 first:mt-0 md:mt-0">
                {plan.tags.length > 0 && (
                  <div className={`absolute -top-2 left-0 right-0 flex justify-center gap-2 ${
                    (isMonthly && plan.name === "Abonnement au mois") || 
                    (!isMonthly && plan.name === "Abonnement 2 ans") ? "scale-110 !-top-10 z-50" : ""
                  }`}>
                    {plan.tags.map((tag) => (
                      <div
                        key={tag.text}
                        className={`${tag.color} px-3 py-1 rounded-full text-xs text-white font-bold`}
                      >
                        {tag.text}
                      </div>
                    ))}
                  </div>
                )}
                
                <Card className={`overflow-hidden ${style.card}`}>
                  <div className="px-14 py-12 sm:px-10">
                    <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl sm:text-5xl font-bold">
                        {plan.price}
                      </span>
                      <span className="text-xs sm:text-sm">{plan.period}</span>
                    </div>
                    <p className={`mb-8 text-xs sm:text-sm ${style.text}`}>
                      {plan.description}
                    </p>

                    <button
                      onClick={() => window.location.replace(plan.link)}
                      className={`w-full py-2 px-4 rounded-md mb-8 font-semibold text-sm sm:text-base ${style.button}`}
                    >
                      {plan.cta}
                    </button>

                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-start sm:items-center gap-3">
                          <Image
                            src={feature.included ? style.checkIcon : style.crossIcon}
                            alt={feature.included ? "Check icon" : "Cross icon"}
                            width={21}
                            height={21}
                            className={!feature.included ? "opacity-50" : ""}
                          />
                          <span className={`text-sm sm:text-base ${style.text}`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
