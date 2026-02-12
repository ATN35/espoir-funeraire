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
      <footer className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-4 text-center">
            <a
              href="/politique-confidentialite"
              className="text-primary-foreground/50 hover:text-gold transition-colors text-xs order-1 md:text-left"
            >
              Politique de confidentialité
            </a>
            <p className="text-primary-foreground/40 text-xs order-3 md:order-2">
              © 2026 Espoir Funéraire. Tous droits réservés.
            </p>
            <a
              href="/mentions-legales"
              className="text-primary-foreground/50 hover:text-gold transition-colors text-xs order-2 md:order-3 md:text-right"
            >
              Mentions légales
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
