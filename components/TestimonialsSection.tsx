"use client";

import { Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Marie D.",
    text: "Dans ces moments si difficiles, l'équipe d'Espoir Funéraire a su nous entourer avec une délicatesse et un professionnalisme remarquables. Merci infiniment.",
  },
  {
    name: "Jean-Pierre L.",
    text: "Un accompagnement humain et respectueux du début à la fin. Ils ont pris en charge chaque détail avec une grande sensibilité. Je les recommande sincèrement.",
  },
  {
    name: "Famille Moreau",
    text: "La cérémonie était exactement ce que notre mère aurait souhaité. L'équipe a été d'une grande aide pour toutes les démarches administratives.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            La confiance des familles
          </h2>
          <div className="divider-gold mt-6" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <AnimatedSection key={t.name} delay={index * 0.15}>
              <div className="bg-navy-light/30 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-8 hover:border-gold/30 transition-all duration-500">
                <Quote size={28} className="text-gold mb-4 opacity-60" />
                <p className="text-primary-foreground/85 leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <span className="text-primary-foreground/60 text-sm ml-2">— {t.name}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
