'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import * as fbq from '@/lib/fpixel';

export default function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Trigger a page view every time the route changes
    fbq.pageview();
  }, [pathname, searchParams]);

  return null;
}
