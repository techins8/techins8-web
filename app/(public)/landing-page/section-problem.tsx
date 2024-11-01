import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, GitBranch } from "lucide-react";

const SectionProblem = () => {
  const problems = [
    {
      id: 1,
      icon: <Zap className="w-6 h-6 text-accent-foreground" />,
      text: "Le marché évolue plus vite que votre stack."
    },
    {
      id: 2,
      icon: <Clock className="w-6 h-6 text-accent-foreground" />,
      text: "Pendant que vous cherchez, les meilleurs postes sont déjà pourvus."
    },
    {
      id: 3,
      icon: <GitBranch className="w-6 h-6 text-accent-foreground" />,
      text: "Python ? PHP ? Java ? Chaque mauvais choix vous coûte des années"
    }
  ];

  return (
    <section className="w-full py-12 px-4 mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-primary text-3xl text-center mb-12">Gérer sa carrière dev est devenu<br/> un véritable casse-tête.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map(({ id, icon, text }) => (
            <Card 
              key={id}
              className="relative p-6 border-none hover:shadow-none bg-white group transition-colors duration-300"
            >
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="p-2 bg-accent/10 rounded-lg">
                    {icon}
                  </div>
                  
                  {/* Number */}
                  <div className="absolute top-4 right-6 text-6xl font-bold text-muted-foreground/20 transition-colors duration-300 group-hover:text-muted-foreground/50">
                    {id}
                  </div>
                </div>

                {/* Text */}
                <p className="mt-6 text-lg font-medium text-primary">
                  {text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionProblem;