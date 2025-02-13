import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from 'next-intl';

interface Solution {
  id: string;
  title: string;
  description: string[];
}

const SectionSolution = () => {
  const t = useTranslations('HomePage.Solution');

  const solutions = t.raw('solutions') as Solution[];

  return (
    <section className="w-full py-12 md:py-24 mt-32 mb-20">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-center text-3xl sm:text-4xl text-title !leading-tight max-w-[550px] mx-auto mb-4">
            {t('title.prefix')} <span className="text-primary">{t('title.highlight')}</span>
            {t('title.suffix')}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-[620px] mx-auto px-4">
            {t('subtitle.prefix')}{' '}
            <span className="font-medium">{t('subtitle.highlight')}</span>
            {t('subtitle.suffix')}
          </p>
        </div>
        
        <div className="flex flex-col gap-6">
          {solutions.map((solution, index) => (
            <Card key={solution.id} className="border overflow-hidden">
              <CardContent className="flex flex-col md:flex-row items-stretch p-0">
                <div className="flex-1 space-y-6 p-6 sm:p-10">
                  <Image
                    src={`/images/icons/solution-${solution.id}.svg`}
                    alt={`${solution.title} icon`}
                    width={48}
                    height={48}
                    className="w-12 h-12 mb-4"
                    loading="lazy"
                  />
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold">{solution.title}</h3>
                    <ul className="list-disc list-inside text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {solution.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <Image
                    src={`/images/illustrations/solution-${solution.id}.svg`}
                    alt={solution.title}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                    priority={index === 0}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSolution;