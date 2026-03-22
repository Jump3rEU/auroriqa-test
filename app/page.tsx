import PageClient from "@/components/PageClient";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesNew from "@/components/ServicesNew";
import ShowcasePortfolio from "@/components/ShowcasePortfolio";
import AboutFounder from "@/components/AboutFounder";
import HowWeWork from "@/components/HowWeWork";
import FAQ from "@/components/FAQ";
import FreeProposal from "@/components/FreeProposal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <PageClient>
      <Navigation />
      <Hero />
      <ServicesNew />
      <AboutFounder />
      <ShowcasePortfolio />
      <HowWeWork />
      <FAQ />
      <FreeProposal />
      <Contact />
      <Footer />
    </PageClient>
  );
}
