const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-14 px-6 border-t border-white/10 shadow-[0_-20px_60px_rgba(7,22,37,0.45)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-heading font-bold mb-3">
              Espoir <span className="text-gold">Funéraire</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Accompagnement avec compassion et dignité pour honorer la mémoire de vos proches.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Navigation</h4>
            <div className="space-y-2">
              {["Accueil", "Services", "À propos", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace("à propos", "apropos").replace(" ", "")}`}
                  className="block text-primary-foreground/60 hover:text-gold transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Horaires</h4>
            <p className="text-primary-foreground/60 text-sm">Disponible 24h/24</p>
            <p className="text-primary-foreground/60 text-sm">7 jours sur 7</p>
              <p className="text-primary-foreground/60 text-sm mt-3">Urgences : 06 50 67 91 48</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Espoir Funéraire. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
