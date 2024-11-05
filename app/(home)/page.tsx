import { Suspense } from "react";
import Header from "./header";
import SectionFaq from "./section-faq";
import SectionProblem from "./section-problem";
import SectionSocialProof from "./section-social-proof";
import SectionSolution from "./section-solution";
import SubHeader from "./sub-header";

export default async function HomePage() {
  return (
    <div className="container mx-auto py-8 px-6 sm:px-8">
      <Suspense fallback={<div>Loading jobs...</div>}>
        <SubHeader />
        <Header />
        <SectionProblem />
        <SectionSolution />
        <SectionSocialProof />
        <SectionFaq />
      </Suspense>
    </div>
  );
}