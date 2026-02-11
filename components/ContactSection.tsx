"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Contactez-nous
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Nous sommes à votre écoute
          </h2>
          <div className="divider-gold mt-6" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="space-y-8">
              {[
                { icon: Phone, label: "Téléphone (24h/24)", value: "06 50 67 91 48", href: "tel:+33650679148" },
                { icon: Mail, label: "Email", value: "contact@espoir-funeraire.fr", href: "mailto:contact@espoir-funeraire.fr" },
                { icon: MapPin, label: "Adresse", value: "30 Avenue du Bois Labbe, Rennes, France" },
                { icon: Clock, label: "Disponibilité", value: "24 heures sur 24, 7 jours sur 7" },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center shrink-0 shadow-lg">
                    <info.icon size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60 mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-primary-foreground font-medium hover:text-gold transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-primary-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form
              className="rounded-2xl bg-secondary/95 text-secondary-foreground p-8 shadow-2xl border border-white/40 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-secondary-foreground/70 mb-1.5 block">Nom</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-lg bg-white text-secondary-foreground placeholder:text-secondary-foreground/50 border border-white/60 focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm text-secondary-foreground/70 mb-1.5 block">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="Votre téléphone"
                    className="w-full px-4 py-3 rounded-lg bg-white text-secondary-foreground placeholder:text-secondary-foreground/50 border border-white/60 focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-secondary-foreground/70 mb-1.5 block">Email</label>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 rounded-lg bg-white text-secondary-foreground placeholder:text-secondary-foreground/50 border border-white/60 focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none transition-all"
                />
              </div>
              <div>
                <label className="text-sm text-secondary-foreground/70 mb-1.5 block">Message</label>
                <textarea
                  rows={4}
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="w-full px-4 py-3 rounded-lg bg-white text-secondary-foreground placeholder:text-secondary-foreground/50 border border-white/60 focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none transition-all resize-none"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="group inline-flex w-full max-w-md items-center justify-center gap-2 rounded-xl gold-gradient px-10 py-4 text-base font-semibold tracking-wide text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:brightness-110 cursor-pointer"
                >
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  Envoyer le message
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
