'use client';

import Script from "next/script";

const SectionSocialProof = () => {
  return (
    <section className="w-full py-8 md:py-12 px-4 mt-12 md:mt-24 mb-12" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-center text-3xl sm:text-4xl text-title !leading-tight max-w-[550px] mx-auto mb-12 sm:mb-4">
          La communauté <br/>tech parle de nous.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
        
          <Script 
            src="https://widget.senja.io/widget/b9e26795-a8a0-461d-bdf2-8cfc11abaada/platform.js" 
            strategy="lazyOnload"
          />
          <div 
            className="senja-embed" 
            data-id="b9e26795-a8a0-461d-bdf2-8cfc11abaada" 
            data-mode="shadow" 
            data-lazyload="false" 
            style={{ display: 'block' }}
          />
          
        </div>
      </div>
    </section>
  );
};

export default SectionSocialProof;