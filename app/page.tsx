import PageClient from "@/components/PageClient";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesNew from "@/components/ServicesNew";
import ShowcasePortfolio from "@/components/ShowcasePortfolio";
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
      <ShowcasePortfolio />
      <HowWeWork />
      <FAQ />
      <FreeProposal />
      <Contact />
      <Footer />
    </PageClient>
  );
}
