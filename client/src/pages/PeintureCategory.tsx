import { useRoute } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";
import { PAINT_CATEGORIES } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/const";
import FinishSelector from "@/components/FinishSelector";
import { ChevronDown, Home, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function PeintureCategory() {
  const [, params] = useRoute("/peintures/:slug");
  const category = PAINT_CATEGORIES.find((cat) => cat.slug === params?.slug);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0D1B3E] mb-4">
              Catégorie non trouvée
            </h1>
            <p className="text-gray-600">
              Cette catégorie de peinture n'existe pas.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Afficher le sélecteur de finition pour les peintures intérieures
  if (category.slug === "peintures-interieures") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Breadcrumb */}
          <section className="bg-gray-50 border-b border-gray-200">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Home className="h-4 w-4" />
                <span>Accueil</span>
                <span>/</span>
                <span>Peinture</span>
                <span>/</span>
                <span className="text-[#0D1B3E] font-semibold">{category.name}</span>
              </div>
            </div>
          </section>

          {/* Hero Section */}
          <section
            className="relative h-[50vh] flex items-center justify-center text-white"
            style={{
              backgroundImage: `url('https://placehold.co/1920x600/0D1B3E/FFFFFF?text=${encodeURIComponent(
                category.name
              )}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[#0D1B3E]/70"></div>
            <div className="relative z-10 text-center px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {category.name}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>
          </section>

          {/* Action Bar */}
          <section className="bg-[#C41E3A] text-white py-4 sticky top-0 z-40">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Filtrer par :</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    className="bg-white text-[#C41E3A] hover:bg-gray-100"
                  >
                    Afficher les filtres
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Finitions Circulaires */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-12 text-center">
                Nos finitions par destination
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                {[
                  { name: "Finition mate", image: "https://placehold.co/200x200/0D1B3E/FFFFFF?text=Mate" },
                  { name: "Finition satinée", image: "https://placehold.co/200x200/0D1B3E/FFFFFF?text=Satinee" },
                  { name: "Finition brillante", image: "https://placehold.co/200x200/0D1B3E/FFFFFF?text=Brillante" },
                  { name: "Finition velours", image: "https://placehold.co/200x200/0D1B3E/FFFFFF?text=Velours" },
                  { name: "Finition laquée", image: "https://placehold.co/200x200/0D1B3E/FFFFFF?text=Laquee" },
                  { name: "Finition spéciale", image: "https://placehold.co/200x200/0D1B3E/FFFFFF?text=Speciale" },
                ].map((finish, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="flex flex-col items-center cursor-pointer group">
                      <div className="relative w-32 h-32 mb-4">
                        <img
                          src={finish.image}
                          alt={finish.name}
                          className="w-full h-full rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                        />
                      </div>
                      <p className="text-center text-sm font-semibold text-[#0D1B3E] group-hover:text-[#C41E3A] transition-colors">
                        {finish.name}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Collections Tendances */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-12 text-center">
                Nos collections tendances 2025
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Collection Classique", image: "https://placehold.co/300x400/0D1B3E/FFFFFF?text=Classique" },
                  { title: "Collection Moderne", image: "https://placehold.co/300x400/0D1B3E/FFFFFF?text=Moderne" },
                  { title: "Collection Naturelle", image: "https://placehold.co/300x400/0D1B3E/FFFFFF?text=Naturelle" },
                  { title: "Collection Tendance", image: "https://placehold.co/300x400/0D1B3E/FFFFFF?text=Tendance" },
                ].map((collection, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <img
                        src={collection.image}
                        alt={collection.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-[#0D1B3E]">
                          {collection.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-2">
                          Découvrez notre sélection exclusive
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Produit en Vedette */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <ScrollReveal>
                  <img
                    src="https://placehold.co/500x500/0D1B3E/FFFFFF?text=Produit+Vedette"
                    alt="Produit vedette"
                    className="w-full rounded-lg shadow-lg"
                  />
                </ScrollReveal>
                <ScrollReveal>
                  <div>
                    <h2 className="text-3xl font-bold text-[#0D1B3E] mb-4">
                      Découvrez la couleur tendance de l'année
                    </h2>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <span className="text-gray-600">(127 avis)</span>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Notre peinture haut de gamme offre une couverture exceptionnelle et une durabilité incomparable. 
                      Parfaite pour tous vos projets d'intérieur.
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-3xl font-bold text-[#C41E3A]">49,99 €</span>
                      <span className="text-lg text-gray-500 line-through">59,99 €</span>
                    </div>
                    <div className="flex gap-4">
                      <Button className="flex-1 bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                        Ajouter au panier
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Voir plus
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Processus en 6 étapes */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-12 text-center">
                Votre pièce peinte en 6 étapes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { step: 1, title: "Préparation", description: "Préparez votre surface en nettoyant et en ponçant" },
                  { step: 2, title: "Impression", description: "Appliquez une couche d'impression pour une meilleure adhérence" },
                  { step: 3, title: "Peinture", description: "Appliquez la peinture de finition en deux couches" },
                  { step: 4, title: "Séchage", description: "Laissez sécher complètement entre les couches" },
                  { step: 5, title: "Finition", description: "Appliquez les touches finales et les retouches" },
                  { step: 6, title: "Entretien", description: "Entretenez votre peinture pour une durabilité maximale" },
                ].map((step, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#0D1B3E] text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-bold text-[#0D1B3E]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Cas d'usage */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-12 text-center">
                Pour habiter vos projets
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Chambre à coucher", image: "https://placehold.co/400x300/0D1B3E/FFFFFF?text=Chambre" },
                  { title: "Salon", image: "https://placehold.co/400x300/0D1B3E/FFFFFF?text=Salon" },
                ].map((project, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-[#0D1B3E] mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Découvrez comment transformer votre {project.title.toLowerCase()} avec nos peintures.
                        </p>
                        <Button className="bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                          Voir le projet
                        </Button>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-12 text-center">
                Pour aller plus loin sur vos questions autour de la peinture intérieure
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {[
                  { question: "Quelle finition choisir pour ma cuisine ?", answer: "Pour une cuisine, nous recommandons une finition satinée ou brillante qui résiste mieux à l'humidité et aux taches." },
                  { question: "Combien de temps faut-il pour peindre une pièce ?", answer: "Le temps dépend de la taille de la pièce et du nombre de couches. Généralement, comptez 1-2 jours pour une pièce standard." },
                  { question: "Puis-je peindre directement sur l'ancien papier peint ?", answer: "Non, il est recommandé de retirer le papier peint avant de peindre pour un meilleur résultat et une meilleure durabilité." },
                  { question: "Quelle est la durée de vie d'une peinture intérieure ?", answer: "Une peinture de qualité peut durer 5 à 10 ans selon les conditions d'utilisation et l'entretien." },
                  { question: "Comment bien préparer mes murs avant de peindre ?", answer: "Nettoyez les murs, bouchez les trous, poncez les zones rugueuses et appliquez une couche d'impression si nécessaire." },
                  { question: "Quels sont les avantages d'une peinture écologique ?", answer: "Les peintures écologiques sont moins toxiques, meilleures pour la santé et l'environnement, avec une faible teneur en COV." },
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index.toString() ? null : index.toString())}
                      className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-[#0D1B3E] text-left">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`h-5 w-5 text-[#0D1B3E] transition-transform ${
                          expandedFaq === index.toString() ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedFaq === index.toString() && (
                      <div className="px-6 pb-6 border-t border-gray-200">
                        <p className="text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Galerie d'inspiration */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-12 text-center">
                Pour vous d'inspiration...
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(9)].map((_, index) => (
                  <ScrollReveal key={index} delay={(index % 3) * 0.1}>
                    <img
                      src={`https://placehold.co/300x300/0D1B3E/FFFFFF?text=Inspiration+${index + 1}`}
                      alt={`Inspiration ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-[#0D1B3E] text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Besoin de conseils personnalisés ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Nos experts sont à votre disposition pour vous accompagner dans votre projet. 
                Contactez-nous pour obtenir des conseils personnalisés et un devis gratuit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  <Button
                    size="lg"
                    className="bg-white text-[#0D1B3E] hover:bg-gray-100 w-full sm:w-auto"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Appelez-nous
                  </Button>
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-[#0D1B3E] w-full sm:w-auto"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Envoyez un email
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  // Affichage standard pour les autres catégories de peinture
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative h-[50vh] flex items-center justify-center text-white"
          style={{
            backgroundImage: category.image
              ? `url('${category.image}')`
              : `url('https://placehold.co/1920x600/0D1B3E/FFFFFF?text=${encodeURIComponent(
                  category.name
                )}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0D1B3E]/70"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {category.name}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              {category.description}
            </p>
          </div>
        </section>

        {/* Contenu */}
        <section className="bg-gradient-animated py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  Découvrez notre gamme complète de{" "}
                  <strong>{category.name.toLowerCase()}</strong>,
                  spécialement sélectionnée pour répondre aux exigences des
                  professionnels et des particuliers. Nos produits allient
                  performance technique, esthétique et durabilité.
                </p>

                <h2 className="text-3xl font-bold text-[#0D1B3E] mt-12 mb-6">
                  Caractéristiques principales
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">
                      Qualité supérieure
                    </h3>
                    <p className="text-gray-600">
                      Produits sélectionnés auprès des meilleurs fabricants pour
                      garantir un résultat professionnel et durable.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">
                      Large gamme
                    </h3>
                    <p className="text-gray-600">
                      Multiples finitions, couleurs et formats disponibles pour
                      s'adapter à tous vos projets et contraintes.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">
                      Performance technique
                    </h3>
                    <p className="text-gray-600">
                      Excellente couverture, séchage rapide, résistance optimale
                      et facilité d'application.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">
                      Conseils personnalisés
                    </h3>
                    <p className="text-gray-600">
                      Nos experts vous accompagnent dans le choix des produits
                      et vous conseillent sur les meilleures techniques.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-[#0D1B3E] mt-12 mb-6">
                  Applications recommandées
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Ces peintures sont particulièrement adaptées pour une
                  utilisation dans divers contextes, que ce soit pour des
                  projets résidentiels, commerciaux ou industriels. Nos équipes
                  sont à votre disposition pour vous conseiller sur les produits
                  les plus adaptés à votre projet spécifique.
                </p>

                <div className="bg-[#0D1B3E] text-white p-8 rounded-lg mt-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Besoin de conseils ?
                  </h2>
                  <p className="text-lg mb-6">
                    Nos experts sont à votre disposition pour vous accompagner
                    dans votre projet. Contactez-nous pour obtenir des conseils
                    personnalisés et un devis gratuit.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href={`tel:${COMPANY_INFO.phone}`}>
                      <Button
                        size="lg"
                        className="bg-white text-[#0D1B3E] hover:bg-gray-100"
                      >
                        Appelez-nous
                      </Button>
                    </a>
                    <a href={`mailto:${COMPANY_INFO.email}`}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-transparent border-white text-white hover:bg-white hover:text-[#0D1B3E]"
                      >
                        Envoyez un email
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
