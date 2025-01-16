import { Suspense } from "react";
import Header from "./header";
import SectionFaq from "./section-faq";
import SectionProblem from "./section-problem";
import SectionSocialProof from "./section-social-proof";
import SectionSolution from "./section-solution";
import SectionPricing from "./section-pricing";

export default async function HomePage() {
  return (
    <div className="">
      <Suspense fallback={<div>Loading jobs...</div>}>
        <Header />
        <SectionProblem />
        <SectionSolution />
        <SectionPricing />
        <SectionSocialProof />
        <SectionFaq />
      </Suspense>
    </div>
  );
}