'use client';

import { useState, useEffect, useCallback } from 'react';
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesNew from "@/components/ServicesNew";
import ShowcasePortfolio from "@/components/ShowcasePortfolio";
import HowWeWork from "@/components/HowWeWork";
import FAQ from "@/components/FAQ";
import FreeProposal from "@/components/FreeProposal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingParticles from "@/components/FloatingParticles";
import AuroraCurtains from "@/components/AuroraCurtains";
import StarField from "@/components/StarField";
import FloatingGeometry from "@/components/FloatingGeometry";
import MeshGradientOverlay from "@/components/MeshGradientOverlay";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    // Smooth scroll handler for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          
          if (element) {
            const offset = 80; // Navigation height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
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
      {!isLoading && (
        <main className="relative overflow-x-clip">
          {/* Aurora Effects Layer */}
          <AuroraCurtains />
          <StarField />
          <FloatingGeometry />
          <MeshGradientOverlay />
          
          {/* UI Components */}
          <ScrollProgress />
          <FloatingParticles />
          <Navigation />
          <Hero />
          <ServicesNew />
          <ShowcasePortfolio />
          <HowWeWork />
          <FAQ />
          <FreeProposal />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
