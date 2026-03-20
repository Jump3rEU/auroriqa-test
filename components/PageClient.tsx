'use client';

import { useState, useEffect, useCallback } from 'react';
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingParticles from "@/components/FloatingParticles";
import AuroraCurtains from "@/components/AuroraCurtains";
import StarField from "@/components/StarField";
import FloatingGeometry from "@/components/FloatingGeometry";
import MeshGradientOverlay from "@/components/MeshGradientOverlay";

export default function PageClient({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      <main className="relative overflow-x-clip">
        {!isLoading && (
          <>
            <AuroraCurtains />
            <StarField />
            <FloatingGeometry />
            <MeshGradientOverlay />
            <ScrollProgress />
            <FloatingParticles />
          </>
        )}
        {children}
      </main>
    </>
  );
}
