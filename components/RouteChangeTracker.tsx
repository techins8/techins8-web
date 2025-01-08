'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { pageview } from '@/lib/fpixel';

export default function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Trigger a page view every time the route changes
    pageview();
  }, [pathname, searchParams]);

  return null;
}
