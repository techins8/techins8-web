import { Metadata } from 'next';
import { Suspense } from "react";
import Header from "./header";
import Problem from "./problem";
import Solution from "./solution";
import SocialProof from "./social-proof";
import FAQ from "./faq";
import Pricing from './pricing';

export const metadata: Metadata = {
  title: 'AI Jobs Verification - TechIns8',
  description: 'Verify AI job opportunities and ensure authenticity of positions',
};

export default async function AIJobsVerifiedPage() {
  return (
    <div className="container mx-auto py-8 px-6 sm:px-8">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Problem />
        <Solution />
        <SocialProof />
        <Pricing />
        <FAQ />
      </Suspense>
    </div>
  );
}
