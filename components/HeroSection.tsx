"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/hero-bg.jpg)" }}
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-6">
            Accompagnement & Sérénité
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6"
        >
          Espoir{" "}
          <span className="text-gold-gradient italic">Funéraire</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Avec compassion et dignité, nous accompagnons les familles musulmanes pour
          honorer la mémoire de leurs proches selon les rites islamiques.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="btn-cta gold-gradient text-accent-foreground px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300 shadow-lg"
          >
            Nous contacter
          </a>
          <a
            href="#services"
            className="btn-cta border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Nos services
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
