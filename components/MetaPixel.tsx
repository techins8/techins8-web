'use client';

import { env } from '@/lib/env';
import Script from 'next/script';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview } from '@/lib/fpixel';

function FacebookPixelTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    pageview();
  }, [pathname, searchParams]);

  return null;
}

export default function MetaPixel() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;
    pageview();
  }, [loaded]);

  return (
    <>
      <Script 
        id="fb-pixel" 
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
      >
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${env.FACEBOOK_PIXEL_ID}');
        `}
      </Script>
      <noscript>
        <Image
          height={1}
          width={1}
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${env.FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
          unoptimized
        />
      </noscript>
      <FacebookPixelTracking />
    </>
  );
}
