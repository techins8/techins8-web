import { Suspense } from "react";
import Header from "./landing-page/header";
import SectionFaq from "./landing-page/section-faq";
import SectionProblem from "./landing-page/section-problem";
import SectionSocialProof from "./landing-page/section-social-proof";
import SectionSolution from "./landing-page/section-solution";
import SubHeader from "./landing-page/sub-header";

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
      </Suspense>
    </div>
  );
}
