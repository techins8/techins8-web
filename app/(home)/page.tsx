// app/(home)/page.tsx
import { Suspense } from "react";
import type { SEO_DATA } from "../seo";
import Header from "./header";
import SectionFaq from "./section-faq";
import SectionPricing from "./section-pricing";
import SectionProblem from "./section-problem";
import SectionSocialProof from "./section-social-proof";
import SectionSolution from "./section-solution";

type SeoDataType = (typeof SEO_DATA)[0];

interface HomePageProps {
  seoData?: SeoDataType;
}

export default function HomePage({ seoData }: HomePageProps) {
  return (
    <div>
      <Suspense fallback={<div>Loading jobs...</div>}>
        <Header heroTitle={seoData?.heroTitle} heroSubtitle={seoData?.heroSubtitle} />
        <SectionProblem />
        <SectionSolution />
        <SectionPricing />
        <SectionSocialProof />
        <SectionFaq />
      </Suspense>
    </div>
  );
}
