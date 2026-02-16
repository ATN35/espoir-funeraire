import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions Légales | Espoir Funéraire",
  description: "Mentions légales - Espoir Funéraire",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-8">
          Mentions Légales
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-8 text-primary-foreground/80">
          <p className="text-sm text-primary-foreground/60">
            Dernière mise à jour : 16 février 2026
          </p>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              1. Éditeur du site
            </h2>
            <div className="bg-primary/50 p-6 rounded-lg border border-gold/20 space-y-2">
              <p><strong className="text-gold">Raison sociale :</strong> Espoir Funéraire</p>
              <p><strong className="text-gold">Forme juridique :</strong> Entrepreneur individuel (Micro-entreprise)</p>
              <p><strong className="text-gold">Capital social :</strong> Néant (non applicable en entreprise individuelle)</p>
              <p><strong className="text-gold">Siège social :</strong> 30 Avenue du Bois Labbé, Rennes, France</p>
              <p><strong className="text-gold">SIRET :</strong> 940 951 916 00011</p>
              <p><strong className="text-gold">RCS :</strong> 940 951 916 R.C.S. Rennes</p>
              <p><strong className="text-gold">Numéro de TVA intracommunautaire :</strong> Non applicable – TVA non applicable, art. 293 B du CGI</p>
              <p><strong className="text-gold">Email :</strong> <a href="mailto:contact@espoir-funeraire.fr" className="text-gold hover:underline">contact@espoir-funeraire.fr</a></p>
              <p><strong className="text-gold">Téléphone :</strong> <a href="tel:+33650679148" className="text-gold hover:underline">06 50 67 91 48</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              2. Directeur de la publication
            </h2>
            <p>
              Le directeur de la publication du site est : <strong className="text-gold">Abou Bakr</strong>
            </p>
            <p>
              Email : <a href="mailto:aboubakr.gan@gmail.com" className="text-gold hover:underline">aboubakr.gan@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              3. Hébergement
            </h2>
            <div className="bg-primary/50 p-6 rounded-lg border border-gold/20 space-y-2">
              <p><strong className="text-gold">Hébergeur :</strong> Vercel Inc.</p>
              <p><strong className="text-gold">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
              <p><strong className="text-gold">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">https://vercel.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              4. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, photographies, logos, vidéos, etc.) 
              est la propriété exclusive d&apos;Espoir Funéraire ou de ses partenaires, sauf mention contraire.
            </p>
            <p className="mt-4">
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication, 
              même partielle, de ces différents éléments est strictement interdite sans l&apos;accord 
              exprès par écrit d&apos;Espoir Funéraire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              5. Données personnelles
            </h2>
            <p>
              Les informations recueillies sur ce site font l&apos;objet d&apos;un traitement informatique 
              destiné à assurer la gestion de vos demandes et à améliorer nos services.
            </p>
            <p className="mt-4">
              Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au 
              Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit 
              d&apos;accès, de rectification, d&apos;effacement et de portabilité de vos données personnelles.
            </p>
            <p className="mt-4">
              Pour en savoir plus, consultez notre{" "}
              <Link href="/politique-confidentialite" className="text-gold hover:underline">
                Politique de Confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              7. Limitation de responsabilité
            </h2>
            <p>
              Espoir Funéraire s&apos;efforce d&apos;assurer au mieux l&apos;exactitude et la mise à jour 
              des informations diffusées sur ce site. Toutefois, Espoir Funéraire ne peut garantir 
              l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition.
            </p>
            <p className="mt-4">
              En conséquence, Espoir Funéraire décline toute responsabilité pour toute imprécision, 
              inexactitude ou omission portant sur des informations disponibles sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              8. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. 
              En cas de litige et à défaut d&apos;accord amiable, le litige sera porté devant 
              les tribunaux français conformément aux règles de compétence en vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              9. Contact
            </h2>
            <p>
              Pour toute question concernant les mentions légales, contactez-nous :
            </p>
            <div className="bg-primary/50 p-4 rounded-lg border border-gold/20 my-4">
              <p>Email : <a href="mailto:contact@espoir-funeraire.fr" className="text-gold hover:underline">contact@espoir-funeraire.fr</a></p>
              <p>Téléphone : <a href="tel:+33650679148" className="text-gold hover:underline">06 50 67 91 48</a></p>
              <p>Adresse : 30 Avenue du Bois Labbé, Rennes, France</p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#accueil"
            className="inline-flex items-center gap-2 text-gold hover:text-accent transition-colors"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
