"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Home, Briefcase, Info, Mail, MapPin, Clock } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const phoneNumber = "0650679148";
  const phoneNumberIntl = "33650679148";

  const handlePhoneClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;

    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      event.preventDefault();
      window.open(`https://wa.me/${phoneNumberIntl}`, "_blank", "noopener,noreferrer");
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Accueil", href: "#accueil", icon: Home },
    { label: "Services", href: "#services", icon: Briefcase },
    { label: "À propos", href: "#apropos", icon: Info },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#accueil" className="flex items-center gap-3">
            <span className="text-2xl font-heading font-bold text-primary-foreground">
              Espoir <span className="text-gold">Funéraire</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:+${phoneNumberIntl}`}
              onClick={handlePhoneClick}
              className="btn-cta flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
            >
              <Phone size={16} />
              06 50 67 91 48
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-primary-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/40 z-40 md:hidden"
                onClick={() => setMobileOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 35, stiffness: 400 }}
                className="md:hidden fixed right-0 top-0 w-60 bg-primary/98 backdrop-blur-xl z-50 shadow-xl border border-gold/10 rounded-bl-2xl"
              >
                {/* Header compact */}
                <div className="border-b border-white/5 px-4 py-5 relative">
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="absolute top-4 right-4 text-primary-foreground/50 hover:text-gold transition-colors"
                  >
                    <X size={20} strokeWidth={2} />
                  </button>
                  <h3 className="text-lg font-heading font-semibold text-gold pr-8">
                    Menu
                  </h3>
                </div>

                {/* Navigation compacte */}
                <nav className="px-3 py-4">
                  <div className="space-y-1">
                    {links.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <motion.a
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 + index * 0.05 }}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="group flex items-center gap-2.5 text-primary-foreground/70 hover:text-gold transition-all duration-200 py-2.5 px-3 rounded-md hover:bg-white/5"
                        >
                          <Icon size={16} className="text-gold/70 group-hover:text-gold flex-shrink-0" />
                          <span className="text-sm font-medium">
                            {link.label}
                          </span>
                        </motion.a>
                      );
                    })}
                  </div>
                </nav>

                {/* Bouton téléphone compact */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="px-3 pb-4"
                >
                  <a
                    href={`tel:+${phoneNumberIntl}`}
                    onClick={handlePhoneClick}
                    className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-gold text-primary px-4 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-gold/30 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <Phone size={16} className="group-hover:rotate-12 transition-transform duration-200" />
                    <span className="text-xs">06 50 67 91 48</span>
                  </a>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
