import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BackToTop />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <div className="py-6 text-center text-primary-foreground/40 text-xs">
        © 2026 Espoir Funéraire. Tous droits réservés.
      </div>
    </div>
  );
};

export default Index;
