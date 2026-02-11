"use client";

import AnimatedSection from "./AnimatedSection";
import { Shield, Clock, Heart } from "lucide-react";

const values = [
  { icon: Heart, label: "Compassion", desc: "Écoute et bienveillance à chaque instant" },
  { icon: Shield, label: "Confiance", desc: "Transparence totale dans nos démarches" },
  { icon: Clock, label: "Disponibilité", desc: "À vos côtés 24h/24, 7j/7" },
];

const AboutSection = () => {
  return (
    <section id="apropos" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Qui sommes-nous
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Un accompagnement
              <span className="text-gold-gradient italic"> humain</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Depuis plus de 20 ans, Espoir Funéraire accompagne les familles avec
              dignité et respect dans les moments les plus difficiles. Notre équipe
              dévouée met tout en œuvre pour alléger le poids de ces épreuves.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Chaque vie est unique, et nous croyons que chaque hommage doit l&apos;être
              aussi. C&apos;est pourquoi nous proposons des services entièrement
              personnalisés, adaptés à vos souhaits et à vos convictions.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 gap-6">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="glass-card p-6 flex items-start gap-5 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                    <v.icon size={22} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                      {v.label}
                    </h3>
                    <p className="text-muted-foreground text-sm">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
