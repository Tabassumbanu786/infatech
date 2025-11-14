// src/app/components/Analytics.jsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import * as gtag from '../../lib/gtag'; // path: src/lib/gtag.js

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = window.location.pathname + window.location.search;
    gtag.pageview(url);
  }, [pathname]);

  return null;
}
