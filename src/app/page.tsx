import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolutuion";
import JapandiPhilosophy from "@/components/JapandiPhilosophy";
import OurProcess from "@/components/OurProcess";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import TrustIndicators from "@/components/TrustIndicators";
import UrgencyCTA from "@/components/UrgencyCTA";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <JapandiPhilosophy />
      <OurProcess />
      <Gallery />
      <Testimonials />
      <Benefits />
      <TrustIndicators />
      <UrgencyCTA />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
