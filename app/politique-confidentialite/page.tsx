import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Espoir Funéraire",
  description: "Politique de confidentialité et protection des données personnelles - Espoir Funéraire",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-8">
          Politique de Confidentialité
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-8 text-primary-foreground/80">
          <p className="text-sm text-primary-foreground/60">
            Dernière mise à jour : 12 février 2026
          </p>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              1. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données personnelles collectées sur ce site est :
            </p>
            <div className="bg-primary/50 p-4 rounded-lg border border-gold/20 my-4">
              <p className="mb-2"><strong className="text-gold">Espoir Funéraire</strong></p>
              <p>30 Avenue du Bois Labbé</p>
              <p>Rennes, France</p>
              <p>Email : contact@espoir-funeraire.fr</p>
              <p>Téléphone : 06 50 67 91 48</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              2. Données collectées et finalités
            </h2>
            
            <p>Nous collectons les données suivantes via notre formulaire de contact :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Message</li>
            </ul>
            <p className="mt-4">
              <strong className="text-gold">Finalité :</strong> Répondre à vos demandes de renseignements 
              et vous accompagner dans l&apos;organisation de services funéraires.
            </p>
            <p>
              <strong className="text-gold">Base légale :</strong> Consentement (article 6.1.a du RGPD) 
              et exécution de mesures précontractuelles (article 6.1.b du RGPD).
            </p>
            <p className="mt-4">
              <strong className="text-gold">Traitement technique :</strong> l&apos;envoi des messages est
              assuré par un prestataire tiers (Formspree). Les données saisies sont transmises
              uniquement pour délivrer votre message et ne sont pas utilisées a des fins
              commerciales.
            </p>
            <p className="mt-4">
              <strong className="text-gold">Absence de cookies :</strong> ce site n&apos;utilise pas de cookies
              de mesure d&apos;audience ou publicitaires.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              3. Durée de conservation
            </h2>
            <p>
              Les données collectées via le formulaire de contact sont conservées pendant <strong className="text-gold">3 ans</strong> à compter du dernier contact, 
              sauf obligation légale de conservation plus longue.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              4. Destinataires des données
            </h2>
            <p>
              Vos données personnelles sont destinées exclusivement à notre personnel habilité 
              pour le traitement de vos demandes. Nous ne vendons ni ne louons vos données à des tiers.
            </p>
            <p className="mt-4">
              Les données peuvent etre transmises a nos sous-traitants techniques (hebergeur,
              service d&apos;emailing Formspree) qui agissent sous notre responsabilite et selon nos instructions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              5. Vos droits
            </h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li><strong className="text-gold">Droit d&apos;accès :</strong> obtenir la confirmation que vos données sont traitées et y accéder</li>
              <li><strong className="text-gold">Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
              <li><strong className="text-gold">Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
              <li><strong className="text-gold">Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong className="text-gold">Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong className="text-gold">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong className="text-gold">Droit de retirer votre consentement :</strong> à tout moment</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous par email à{" "}
              <a href="mailto:contact@espoir-funeraire.fr" className="text-gold hover:underline">
                contact@espoir-funeraire.fr
              </a>{" "}
              ou par courrier à l&apos;adresse mentionnée ci-dessus.
            </p>
            <p className="mt-4">
              Vous disposez également du droit d&apos;introduire une réclamation auprès de la{" "}
              <a 
                href="https://www.cnil.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                CNIL
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              6. Sécurité des données
            </h2>
            <p>
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées 
              pour assurer la sécurité et la confidentialité de vos données personnelles, notamment :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Chiffrement des données en transit (HTTPS)</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Sauvegarde régulière des données</li>
              <li>Sensibilisation du personnel à la protection des données</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              7. Transferts de données hors UE
            </h2>
            <p>
              Selon les conditions du prestataire d&apos;emailing (Formspree), certaines donnees peuvent
              etre traitees hors de l&apos;Union Europeenne. Dans ce cas, les transferts sont encadres
              par des garanties appropriees conformes au RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              8. Modifications de la politique
            </h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gold mb-4">
              9. Contact
            </h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou vos données personnelles, 
              contactez-nous :
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
