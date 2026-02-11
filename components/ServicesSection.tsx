"use client";

import { Heart, Flower2, BookOpen, Car, Church, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Heart,
    title: "Organisation complète",
    description: "Prise en charge totale des obsèques, de la déclaration de décès à la cérémonie.",
  },
  {
    icon: Flower2,
    title: "Fleurs & Couronnes",
    description: "Compositions florales sur mesure pour rendre un dernier hommage avec élégance.",
  },
  {
    icon: BookOpen,
    title: "Faire-part & Avis",
    description: "Rédaction et diffusion des faire-part de décès et avis d'obsèques.",
  },
  {
    icon: Car,
    title: "Transport funéraire",
    description: "Transport du défunt en toute dignité, en France et à l'international.",
  },
  {
    icon: Church,
    title: "Cérémonies",
    description: "Organisation de cérémonies religieuses ou civiles personnalisées.",
  },
  {
    icon: Users,
    title: "Soutien aux familles",
    description: "Accompagnement psychologique et administratif pour les proches.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Ce que nous offrons
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <div className="divider-gold mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <div className="glass-card p-8 group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
