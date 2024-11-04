import { Suspense } from "react";
import Header from "./header";
import { Newsletter } from "./newsletter";
import SectionFaq from "./section-faq";
import SectionProblem from "./section-problem";
import SectionSocialProof from "./section-social-proof";
import SectionSolution from "./section-solution";
import SubHeader from "./sub-header";

export default async function HomePage() {
  return (
    <div className="container mx-auto py-8 ">
      <Suspense fallback={<div>Loading jobs...</div>}>
        <SubHeader />
        <Header />
        <SectionProblem />
        <SectionSolution />
        <SectionSocialProof />
        <SectionFaq />
        <Newsletter />
      </Suspense>
    </div>
  );
}
