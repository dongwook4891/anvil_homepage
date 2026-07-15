import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import AboutSection from "@/components/AboutSection";
// import DeliverablesSection from "@/components/DeliverablesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-pitch-black text-porcelain selection:bg-neon-lime/30 selection:text-porcelain font-inter-variable font-light">
      <Header />
      <main className="flex-grow flex flex-col">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <CaseStudiesSection />
        <AboutSection />
        {/* <DeliverablesSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
