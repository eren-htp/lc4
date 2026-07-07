import { useRoute, Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";
import { FLOOR_CATEGORIES } from "@/const";
import { BRAND_LOGOS } from "@shared/brandLogos";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/const";
import { ArrowLeft, Home, Phone, Mail, TreePine } from "lucide-react";

export default function FloorCategory() {
  const [, params] = useRoute("/revetements-sols/:slug");
  const category = FLOOR_CATEGORIES.find(cat => cat.slug === params?.slug);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0D1B3E] mb-4">Catégorie non trouvée</h1>
            <p className="text-gray-600">Cette catégorie de revêtement de sol n'existe pas.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Home className="h-4 w-4" />
              <Link href="/" className="hover:text-[#0D1B3E] transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <Link href="/revetements-sols" className="hover:text-[#0D1B3E] transition-colors">
                Revêtements de sols
              </Link>
              <span>/</span>
              <span className="text-[#0D1B3E] font-semibold">{category.name}</span>
            </div>
          </div>
        </section>

        {/* Bouton Retour */}
        <div className="container mx-auto px-4 py-4">
          <Link href="/revetements-sols">
            <Button variant="ghost" className="text-[#0D1B3E] hover:bg-gray-100 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour aux Revêtements de sols
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section 
          className="relative h-[50vh] flex items-center justify-center text-white"
          style={{
            backgroundImage: `url('https://placehold.co/1920x600/0D1B3E/FFFFFF?text=${encodeURIComponent(category.name)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0D1B3E]/70"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{category.name}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">{category.description}</p>
          </div>
        </section>

        {/* Section marques / collections pour parquets-et-bois */}
        {category.slug === "parquets-et-bois" && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-[#0D1B3E] mb-4">Nos marques partenaires</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Découvrez nos collections de parquets par marque.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <ScrollReveal delay={0}>
                  <Link href="/revetements-sols/parquets-et-bois/tarkett">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:shadow-2xl hover:-translate-y-1 border border-gray-100 h-full flex flex-col cursor-pointer">
                      <div className="w-full h-48 bg-gradient-to-br from-[#0D1B3E] to-[#2a1f0f] flex items-center justify-center">
                        <div className="text-center">
                           <img src={BRAND_LOGOS.tarkett} alt="Tarkett" className="max-h-16 max-w-[70%] object-contain brightness-0 invert mx-auto" />
                         </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold text-[#0D1B3E] mb-2">Tarkett</h3>
                        <p className="text-base text-gray-600 flex-grow">
                          5 collections de parquets contrecollés en chêne, fabriqués en Europe avec des finitions haut de gamme.
                        </p>
                        <div className="mt-4">
                          <span className="text-[#0D1B3E] font-semibold inline-flex items-center gap-1">
                            Voir les collections &rarr;
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </section>
        )}

        {/* Section produits pour sols-pvc */}
        {category.slug === "sols-pvc" && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-[#0D1B3E] mb-4">Nos produits PVC</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  9 références de sols PVC clipsables et en lés, des marques Tarkett et Alsafloor.
                </p>
              </div>
              <div className="text-center">
                <Link href="/revetements-sols/sols-pvc/produits">
                  <Button size="lg" className="bg-[#0D1B3E] hover:bg-[#0D1B3E]/90 text-white">
                    Voir tous les produits PVC &rarr;
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Section produits pour sols-stratifies */}
        {category.slug === "sols-stratifies" && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-[#0D1B3E] mb-4">Nos produits Stratifiés</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  5 références de sols stratifiés Alsafloor et placage bois Alsawood.
                </p>
              </div>
              <div className="text-center">
                <Link href="/revetements-sols/sols-stratifies/produits">
                  <Button size="lg" className="bg-[#0D1B3E] hover:bg-[#0D1B3E]/90 text-white">
                    Voir tous les produits stratifiés &rarr;
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Section produits pour sols-textiles */}
        {category.slug === "sols-textiles" && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-[#0D1B3E] mb-4">Nos produits Textiles</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  3 collections de dalles de moquette DESSO par Tarkett pour les espaces professionnels.
                </p>
              </div>
              <div className="text-center">
                <Link href="/revetements-sols/sols-textiles/produits">
                  <Button size="lg" className="bg-[#0D1B3E] hover:bg-[#0D1B3E]/90 text-white">
                    Voir tous les produits textiles &rarr;
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Contenu générique pour les autres catégories */}
        {category.slug !== "parquets-et-bois" && category.slug !== "sols-pvc" && category.slug !== "sols-stratifies" && category.slug !== "sols-textiles" && (
          <section className="bg-gradient-animated py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="text-lg leading-relaxed mb-6">
                    Découvrez notre sélection de <strong>{category.name.toLowerCase()}</strong>, 
                    spécialement choisie pour répondre aux exigences des professionnels et des particuliers. 
                    Nos produits combinent esthétique, performance technique et durabilité exceptionnelle.
                  </p>
                  
                  <h2 className="text-3xl font-bold text-[#0D1B3E] mt-12 mb-6">Caractéristiques principales</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Résistance optimale</h3>
                      <p className="text-gray-600">
                        Conçus pour résister à l'usure quotidienne et aux passages intensifs, 
                        garantissant une longévité exceptionnelle.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Design varié</h3>
                      <p className="text-gray-600">
                        Large choix de styles, couleurs et finitions pour s'adapter 
                        à tous les intérieurs et préférences esthétiques.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Facilité d'entretien</h3>
                      <p className="text-gray-600">
                        Revêtements faciles à nettoyer et à entretenir pour un confort 
                        au quotidien sans contraintes.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Installation facilitée</h3>
                      <p className="text-gray-600">
                        Systèmes de pose modernes et efficaces, avec accompagnement 
                        de nos experts pour un résultat parfait.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-[#0D1B3E] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Besoin de conseils ?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-white/80">
              Nos experts sont à votre disposition pour vous accompagner dans votre projet. 
              Contactez-nous pour obtenir des conseils personnalisés et un devis gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Button size="lg" className="bg-white text-[#0D1B3E] hover:bg-gray-100">
                  <Phone className="h-5 w-5 mr-2" />
                  Appelez-nous
                </Button>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`}>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#0D1B3E]">
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
