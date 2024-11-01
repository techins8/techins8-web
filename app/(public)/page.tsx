import { Suspense } from "react";
import SubHeader from "./landing-page/sub-header";
import Header from "./landing-page/header";
import SectionProblem from "./landing-page/section-problem";
import SectionSolution from "./landing-page/section-solution";
import SectionSocialProof from "./landing-page/section-social-proof";
import SectionFaq from "./landing-page/section-faq";

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
