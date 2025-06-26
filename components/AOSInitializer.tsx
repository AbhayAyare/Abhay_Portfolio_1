'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: false,
          mirror: true,
        });
      
        // Trigger refresh on resize/layout changes
        setTimeout(() => {
          AOS.refresh();
        }, 500);
      }, []);
  return null;
}
